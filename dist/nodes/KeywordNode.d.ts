/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { EditorConfig, LexicalNode } from 'lexical';
import SerializedTextNode from 'lexical';
import { Spread } from 'globals';
import { TextNode } from 'lexical';
export declare type SerializedKeywordNode = Spread<{
    type: 'keyword';
    version: 1;
}, typeof SerializedTextNode>;
export declare class KeywordNode extends TextNode {
    static getType(): string;
    static clone(node: KeywordNode): KeywordNode;
    static importJSON(serializedNode: SerializedKeywordNode): KeywordNode;
    exportJSON(): SerializedKeywordNode;
    createDOM(config: EditorConfig): HTMLElement;
    canInsertTextBefore(): boolean;
    canInsertTextAfter(): boolean;
    isTextEntity(): true;
}
export declare function $createKeywordNode(keyword: string): KeywordNode;
export declare function $isKeywordNode(node: LexicalNode | null | undefined | undefined): boolean;
