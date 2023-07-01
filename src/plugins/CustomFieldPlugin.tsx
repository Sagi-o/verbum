import {
  $getSelection,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
  LexicalCommand,
} from 'lexical';
import {
  $createCustomFieldNode,
  CustomFieldNode,
} from '../nodes/CustomFieldNode';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import * as React from 'react';

type Params = { text: string; id?: string };

const INSERT_CUSTOM_FIELD_COMMAND: LexicalCommand<Params> = createCommand();

export default function CustomFieldPlugin({
  itemClassName = 'custom-field-selector',
  listStyle = {},
  itemStyle = {},
  record = {},
}: {
  itemClassName: string;
  listStyle: Record<string, any>;
  itemStyle: Record<string, any>;
  record?: Record<string, any>;
}) {
  const [editor] = useLexicalComposerContext();

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!editor.hasNodes([CustomFieldNode])) {
      throw new Error(
        'CustomFieldPlugin: CustomFieldNode not registered on editor'
      );
    }

    return editor.registerCommand(
      INSERT_CUSTOM_FIELD_COMMAND,
      (payload) => {
        const selection = $getSelection();
        const customFieldNode = $createCustomFieldNode(
          payload.text,
          payload.id
        );

        selection.insertNodes([customFieldNode]);
        return true;
      },
      COMMAND_PRIORITY_EDITOR
    );
  }, [editor]);

  const onClick = (params: Params) => {
    editor.update(() => {
      editor.dispatchCommand(INSERT_CUSTOM_FIELD_COMMAND, params);
    });
  };

  const entries = Object.entries(record);

  return (
    <div style={listStyle}>
      {entries.map(([key, value]) => (
        <div
          key={key}
          style={itemStyle}
          className={itemClassName}
          onClick={() => onClick({ text: value, id: key })}
        >
          {value}
        </div>
      ))}
    </div>
  );
}
