import { EditorConfig, TextNode, LexicalNode, NodeKey } from 'lexical';
import SerializedTextNode from 'lexical';
import { Spread } from 'globals';
export declare type SerializedCustomFieldNode = Spread<{
    text: string;
    id: string;
    className: string;
    type: 'custom-field';
}, typeof SerializedTextNode>;
export declare class CustomFieldNode extends TextNode {
    __id: string;
    static getType(): string;
    static clone(node: CustomFieldNode): CustomFieldNode;
    constructor(text: string, id?: string, key?: NodeKey);
    createDOM(config: EditorConfig): HTMLElement;
    updateDOM(prevNode: CustomFieldNode, dom: HTMLElement): boolean;
    getClassName(): string;
    getId(): string;
    getText(): string;
    static importJSON(serializedNode: SerializedCustomFieldNode): CustomFieldNode;
    exportJSON(): SerializedCustomFieldNode;
}
export declare function $createCustomFieldNode(text: string, id?: string, key?: string): CustomFieldNode;
export declare function $isCustomFieldNodeNode(node: LexicalNode | null | undefined): node is CustomFieldNode;
