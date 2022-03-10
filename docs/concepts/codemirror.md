# CodeMirror

Obsidian uses [CodeMirror](https://codemirror.net/) as the underlying text editor.

:::danger
Only consider CodeMirror if what you want to do isn't already possible through the [Editor](../guides/editor.md).

While Obsidian makes the underlying CodeMirror instance available to plugins through the Obsidian API, most plugins shouldn't use it. If possible, use [`Editor`](../api/classes/Editor.md), a high-level abstraction that bridges breaking changes between different versions of CodeMirror.
:::

You can access the CodeMirror editor on an active Markdown view:

```ts
const view = this.app.workspace.getActiveViewOfType(MarkdownView);

if (view) {
  const editor = view.sourceMode.cmEditor;
}
```

You can also use [`registerCodeMirror()`](../api/classes/Plugin_2.md#registercodemirror) to register a callback function whenever the user opens a new editor.

