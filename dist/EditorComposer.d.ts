import { InitialEditorStateType } from '@lexical/react/LexicalComposer';
import React from 'react';
import './EditorComposer.css';
import { LexicalNode } from 'lexical';
import { Class } from 'utility-types';
interface IEditorComposer {
    children: React.ReactElement;
    initialEditorState?: InitialEditorStateType;
    extraNodes?: Class<LexicalNode>[];
    editable?: boolean;
}
declare const EditorComposer: ({ children, initialEditorState, extraNodes, editable, }: IEditorComposer) => JSX.Element;
export default EditorComposer;
