import {
  LexicalComposer,
  InitialEditorStateType,
} from '@lexical/react/LexicalComposer';
import React from 'react';
import PlaygroundNodes from './nodes/PlaygroundNodes';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';
import './EditorComposer.css';
import i18n from './locale';
import { I18nextProvider } from 'react-i18next';
import { LexicalNode } from 'lexical';
import { Class } from 'utility-types';

interface IEditorComposer {
  children: React.ReactElement;
  initialEditorState?: InitialEditorStateType;
  extraNodes?: Class<LexicalNode>[];
  editable?: boolean;
}

const EditorComposer = ({
  children,
  initialEditorState,
  extraNodes = [],
  editable,
}: IEditorComposer) => {
  const initialConfig = {
    namespace: 'VerbumEditor',
    nodes: [...PlaygroundNodes, ...extraNodes],
    onError: (error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
    editorState: initialEditorState,
    editable,
  };
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <I18nextProvider i18n={i18n}>
        <div className="editor-shell">{children}</div>
      </I18nextProvider>
    </LexicalComposer>
  );
};

export default EditorComposer;
