import { EditorConfig, TextNode, LexicalNode, NodeKey } from 'lexical';
import SerializedTextNode from 'lexical';
import { Spread } from 'globals';

export type SerializedCustomFieldNode = Spread<
    {
        text: string;
        id: string;
        className: string;
        type: 'custom-field';
        version: 1;
    },
    typeof SerializedTextNode
>;

export class CustomFieldNode extends TextNode {
    __id: string;

    static getType(): string {
        return 'custom-field';
    }

    static clone(node: CustomFieldNode): CustomFieldNode {
        return new CustomFieldNode(node.__text, node.__id, node.__key);
    }

    constructor(text: string, id?: string, key?: NodeKey) {
        super(text, key);
        this.__id = id;
    }

    createDOM(config: EditorConfig): HTMLElement {
        // Define the DOM element here
        const dom = document.createElement('p');
        dom.className = 'custom-field';

        const self = this.getLatest();
        dom.innerHTML = self.__text;
        dom.id = self.__id;
        return dom;
    }

    updateDOM(prevNode: CustomFieldNode, dom: HTMLElement): boolean {
        // Returning false tells Lexical that this node does not need its
        // DOM element replacing with a new copy from createDOM.
        return false;
    }

    getClassName(): string {
        const self = this.getLatest();
        return self.__className;
    }

    getId(): string {
        const self = this.getLatest();
        return self.__id;
    }

    getText(): string {
        const self = this.getLatest();
        return self.__text;
    }


    static importJSON(serializedNode: SerializedCustomFieldNode): CustomFieldNode {
        const node = $createCustomFieldNode(
            serializedNode.text,
            serializedNode.id,
        );
        return node;
    }

    exportJSON(): SerializedCustomFieldNode {
        return {
            ...super.exportJSON(),
            id: this.getId(),
            text: this.getText(),
            className: this.getClassName(),
            type: CustomFieldNode.getType(),
            version: 1,
        };
    }
}

export function $createCustomFieldNode(text: string, id?: string, key?: string): CustomFieldNode {
    return new CustomFieldNode(text, id, key);
}

export function $isCustomFieldNodeNode(node: LexicalNode | null | undefined): node is CustomFieldNode {
    return node instanceof CustomFieldNode;
}
