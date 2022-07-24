---
sidebar_position: 10
---

# View plugins

A view plugin is an [editor extension](index.md) that controls how to display editor content. For example, displaying `:raised_hands:` as 🙌.

:::note
This page aims to distill the official CodeMirror 6 documentation for Obsidian plugin developers. For more information on state management, refer to [Affecting the View](https://codemirror.net/docs/guide/#affecting-the-view).
:::

If you want to make changes that impact the vertical layout of the editor, by for example inserting blocks and line breaks, you need to use a [state field](state-fields.md).

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

## Decorations

While the view plugin manages the lifecycle of your extension, _decorations_ is what actually lets you change how the document looks like.

To let the view plugin manage your decorations:

1. Add a `DecorationSet` member property to your plugin.
1. Initialize the decorations in the `constructor()`.
1. Rebuild decorations in `update()`.

Not all updates are reasons to rebuild your decorations. The following example only rebuilds decorations whenever the underlying document or the viewport changes.

```ts title="plugin.ts"
import {
  ViewUpdate,
  PluginValue,
  EditorView,
  ViewPlugin,
  PluginSpec,
  DecorationSet,
  Decoration,
} from "@codemirror/view";
import { RangeSetBuilder } from "@codemirror/state";

class ExamplePlugin implements PluginValue {
  decorations: DecorationSet;

  constructor(view: EditorView) {
    this.decorations = this.buildDecorations(view);
  }

  update(update: ViewUpdate) {
    if (
      update.docChanged ||
      update.viewportChanged
    ) {
      this.decorations = this.buildDecorations(update.view);
    }
  }

  destroy() {}

  buildDecorations(view: EditorView): DecorationSet {
    // ...
  }
}

const pluginSpec: PluginSpec<ExamplePlugin> = {
  decorations: (value: ExamplePlugin) => value.decorations,
};

export const examplePlugin = ViewPlugin.fromClass(ExamplePlugin, pluginSpec);
```

In the example, `buildDecorations()` is a helper method that builds a set of decorations based on the editor view.

## Styling existing DOM nodes

The types of decorations to return depend on your use case. The following example uses a [mark decoration](https://codemirror.net/docs/ref/#view.Decoration%5Emark) to add a CSS class to the selected text.

```ts title="plugin.ts"
buildDecorations(view: EditorView): DecorationSet {
  let builder = new RangeSetBuilder<Decoration>();

  // Add the decoration to the selected ranges.
  for (let { from, to } of view.state.selection.ranges) {
    builder.add(from, to, Decoration.mark({ class: "my-highlight" }));
  }

  return builder.finish();
}
```

Since you're decorating the selection, you need to change the `update()` to rebuild decorations whenever the selection change.

```ts title="plugin.ts" {5}
update(update: ViewUpdate) {
  if (
    update.docChanged ||
    update.viewportChanged ||
    update.selectionSet
  ) {
    // Rebuild the decorations whenever the document or the viewport changes.
    this.decorations = this.buildDecorations(update.view);
  }
}
```

## Adding new DOM nodes to the editor

Instead of modifying existing DOM nodes, you may want to add some of your own. Let's look at widget decorations.

In this example, we'll add a hand that points to the current selection, so that you can quickly find it if you get distracted.

We only need to change the `buildDecorations()` method to add [widget decorations](https://codemirror.net/docs/ref/#view.Decoration^widget). By setting `side` to a positive value, we append the widget rather than prepending.

```ts title="plugin.ts"
buildDecorations(view: EditorView): DecorationSet {
  let builder = new RangeSetBuilder<Decoration>();

  for (let { to } of view.state.selection.ranges) {
    const widget = new ExampleWidget();

    builder.add(to, to, Decoration.widget({ widget, side: 1 }));
  }

  return builder.finish();
}
```

Here, `ExampleWidget` is a class that extends [WidgetType](https://codemirror.net/docs/ref/#view.WidgetType). The `toDOM()` returns the HTML element you want to add.

```ts title="widget.ts"
class ExampleWidget extends WidgetType {
toDOM(view: EditorView): HTMLElement {
  const div = document.createElement("span");

  div.innerText = "👈";

  return div;
}
}
```

## Replacing DOM elements

What if you instead wanted to replace the selection with your widget? Use a [replace decoration](https://codemirror.net/docs/ref/#view.Decoration^replace) to replace a range for the widget you've created.

```ts
buildDecorations(view: EditorView): DecorationSet {
  let builder = new RangeSetBuilder<Decoration>();

  for (let { from, to } of view.state.selection.ranges) {
    const widget = new ExampleWidget();

    builder.add(from, to, Decoration.replace({ widget }));
  }

  return builder.finish();
}
```
