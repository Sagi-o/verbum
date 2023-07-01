import React from 'react';
import { EditorComposer, Editor, Divider } from '../src';
import ToolbarPlugin from '../src/plugins/ToolbarPlugin/ToolbarPlugin';

import {
  AlignDropdown,
  BackgroundColorPicker,
  BlockFormatDropdown,
  BoldButton,
  CodeFormatButton,
  CodeLanguageDropdown,
  FloatingLinkEditor,
  FontFamilyDropdown,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  RedoButton,
  TextColorPicker,
  TextFormatDropdown,
  UnderlineButton,
  UndoButton,
} from '../src/plugins/ToolbarPlugin/components';
// import { CustomFieldPlugin } from '../src/plugins/CustomFieldPlugin';
import { CustomFieldNode } from '../src/nodes/CustomFieldNode';
import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical';

export default {
  title: 'Verbum',
};

const VALUE_MAPPINGS = {
  'key1': 'Value 1',
  'key2': 'Value 2',
  'key3': 'Value 3',
};

const initialState = () => {
  const paragraph = $createParagraphNode();
  const text = $createTextNode('Hello World!');
  paragraph.append(text);
  const root = $getRoot();
  root.append(paragraph);
  root.selectEnd();
};

export const FullEditor = () => (
  <EditorComposer initialEditorState={initialState} extraNodes={[CustomFieldNode]}>
    <Editor>
      {/* <CustomFieldPlugin record={VALUE_MAPPINGS} /> */}
      <ToolbarPlugin>
        <FontFamilyDropdown />
        <FontSizeDropdown />
        <Divider />
        <BoldButton />
        <ItalicButton />
        <UnderlineButton />
        <CodeFormatButton />
        <InsertLinkButton />
        <TextColorPicker />
        <BackgroundColorPicker />
        <TextFormatDropdown />
        <Divider />
        <InsertDropdown />
        <Divider />
        <AlignDropdown />
      </ToolbarPlugin>
    </Editor>
  </EditorComposer>
);
