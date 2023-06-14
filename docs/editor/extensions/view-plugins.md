---
sidebar_position: 10
---

# View plugins

A view plugin is an [editor extension](index.md) that gives you access to the editor [viewport](viewport.md).

:::note
This page aims to distill the official CodeMirror 6 documentation for Obsidian plugin developers. For more information on state management, refer to [Affecting the View](https://codemirror.net/docs/guide/#affecting-the-view).
:::

## Prerequisites

- Basic understanding of the [Viewport](viewport.md).

## Creating a view plugin

View plugins are editor extensions that run _after_ the viewport has been recomputed. While this means that they can access the viewport, it also means that a view plugin can't make any changes that would impact the viewport. For example, by inserting blocks or line breaks into the document.

:::tip
If you want to make changes that impact the vertical layout of the editor, by for example inserting blocks and line breaks, you need to use a [state field](state-fields.md).
:::

To create a view plugin, create a class that implements [PluginValue](https://codemirror.net/docs/ref/#view.PluginValue) and pass it to the [ViewPlugin.fromClass()](https://codemirror.net/docs/ref/#view.ViewPlugin^fromClass) function.

```ts title="plugin.ts"
import {
  ViewUpdate,
  PluginValue,
  EditorView,
  ViewPlugin,
} from "@codemirror/view";

class ExamplePlugin implements PluginValue {
  constructor(view: EditorView) {
    // ...
  }

  update(update: ViewUpdate) {
    // ...
  }

  destroy() {
    // ...
  }
}

export const examplePlugin = ViewPlugin.fromClass(ExamplePlugin);
```

The three methods of the view plugin control its lifecycle:

- `constructor()` initializes the plugin.
- `update()` updates your plugin when something has changed, for example when the user entered or selected some text.
- `destroy()` cleans up after the plugin.

While the view plugin in the example works, it doesn't do much. If you want to better understand what causes the plugin to update, you can add a `console.log(update);` line to the `update()` method to print all updates to the console.

# Passing parent plugin settings to a view plugin

The example above can be modified by using a class expression instead of a class declaration in order to bind your plugin settings to the view plugin. Here's an example pulled from [Dataview](https://github.com/blacksmithgu/obsidian-dataview).


```JS
export function inlinePlugin(index: FullIndex, settings: DataviewSettings, api: DataviewApi) {
	return ViewPlugin.fromClass(
		class {
			decorations: DecorationSet;
			constructor(view: EditorView) {
				this.decorations = 
					inlineRender(view, index, settings, api) ?? 
					Decoration.none;
			}

			update(update: ViewUpdate) {
				// only activate in LP and not source mode
				//@ts-ignore
				if (!update.state.field(editorLivePreviewField)) {
					this.decorations = Decoration.none;
					return;
				}
				if (update.docChanged || update.viewportChanged || update.selectionSet) {
					this.decorations = 
						inlineRender(update.view, index, settings, api) ??
						Decoration.none;
				}
			}
		},
		{ decorations: v => v.decorations }
	);
}
```
+

`onload()`
```JS
// editor extension for inline queries
this.cmExtension = [inlinePlugin(this.index, this.settings, this.api)];
this.registerEditorExtension(this.cmExtension);
```

## Next steps

Provide [Decorations](decorations.md) from your view plugin to change how to display the document.
