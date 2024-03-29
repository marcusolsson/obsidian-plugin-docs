# Editor

The [`Editor`](../reference/typescript/classes/Editor.md) class exposes operations for reading and manipulating an active Markdown document in edit mode.

If you want to access the editor in a command, use the [editorCallback](../user-interface/commands.md#editor-commands).

If you want to use the editor elsewhere, you can access it from the active view:

```ts
const view = this.app.workspace.getActiveViewOfType(MarkdownView);

// Make sure the user is editing a Markdown file.
if (view) {
  // highlight-next-line
  const cursor = view.editor.getCursor();

  // ...
}
```

:::note
Obsidian uses [CodeMirror](https://codemirror.net/) (CM) as the underlying text editor, and exposes the CodeMirror editor as part of the API. `Editor` serves as an abstraction to bridge features in CM5 (desktop) and CM6 (mobile). By using `Editor` instead of directly accessing the CodeMirror instance, you ensure that your plugin works on both platforms.
:::

## Insert text at cursor position

The [`replaceRange()`](../reference/typescript/classes/Editor.md#replacerange) method replaces the text between two cursor positions. If you only give it one position, it inserts the new text between that position and the next.

The following command inserts today's date at the cursor position:

```ts title="main.ts"
import { Editor, moment, Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "insert-todays-date",
      name: "Insert today's date",
      editorCallback: (editor: Editor) => {
        // highlight-next-line
        editor.replaceRange(moment().format("YYYY-MM-DD"), editor.getCursor());
      },
    });
  }
}
```

![Insert today's date](../../static/img/editor-todays-date.gif)

## Replace current selection

If you want to modify the selected text, use [`replaceSelection()`](../reference/typescript/classes/Editor.md#replaceselection) to replace the current selection with a new text.

The following command reads the current selection and converts it to uppercase:

```ts title="main.ts"
import { Editor, Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "convert-to-uppercase",
      name: "Convert to uppercase",
      editorCallback: (editor: Editor) => {
        // highlight-start
        const selection = editor.getSelection();
        editor.replaceSelection(selection.toUpperCase());
        // highlight-end
      },
    });
  }
}
```

![Convert to uppercase](../../static/img/editor-uppercase.gif)
