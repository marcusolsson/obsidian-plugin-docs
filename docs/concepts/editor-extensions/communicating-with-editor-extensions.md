---
sidebar_position: 40
---

# Communicating with editor extensions

Once you've built your editor extension, you might want to communicate with it from outside the editor. For example, through a [Command](../../guides/commands.md), or a [Ribbon action](../../guides/ribbon-actions.md).

You can access the CodeMirror 6 editor from a [MarkdownView](../../api/classes/MarkdownView.md). However, since the Obsidian API doesn't actually expose the editor, you need to tell TypeScript to trust that it's there, using `@ts-expect-error`.

```ts
import { EditorView } from "@codemirror/view";

// @ts-expect-error, not typed
const editorView = view.editor.cm as EditorView;
```

## View plugin

You can access the [view plugin](view-plugins.md) instance from the `EditorView.plugin()` method.

```ts title="main.ts" {8-11}
this.addCommand({
  id: "example-editor-command",
  name: "Example editor command",
  editorCallback: (editor, view) => {
    // @ts-expect-error, not typed
    const editorView = view.editor.cm as EditorView;

    const plugin = editorView.plugin(examplePlugin);
    if (plugin) {
      plugin.addPointerToSelection(editorView);
    }
  },
});
```

## State field

You can dispatch changes and [state effects](state-fields.md#dispatching-state-effects) directly on the editor view.

```ts title="main.ts" {8}
this.addCommand({
  id: "example-editor-command",
  name: "Example editor command",
  editorCallback: (editor, view) => {
    // @ts-expect-error, not typed
    const editorView = view.editor.cm as EditorView;

    editorView.dispatch({
      effects: [
        // ...
      ]
    })
  },
});
```
