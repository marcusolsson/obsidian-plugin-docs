---
sidebar_position: 77
---

# React

In this guide, you'll configure your plugin to use [React](https://reactjs.org/). It assumes that you already have a plugin with a [custom view](custom-views.md) that you want to convert to use React.

## Configure your plugin

1. Add React to your plugin dependencies:

   ```bash
   npm install react react-dom
   ```

1. Add type definitions for React:

   ```bash
   npm install --save-dev @types/react @types/react-dom
   ```

1. In `tsconfig.json`, enable JSX support on the `compilerOptions` object:

   ```ts title="tsconfig.json"
   {
     "compilerOptions": {
       "jsx": "react"
     }
   }
   ```

## Create a React component

Create a new file called `ReactView.tsx` in the plugin root directory, with the following content:

```tsx title="ReactView.tsx"
import * as React from "react";

export const ReactView = () => {
  return <h4>Hello, React!</h4>;
};
```

## Mount the React component

To use the React component, it needs to be mounted on a [HTML element](html-elements.md). The following example mounts the `ReactView` component on the `this.containerEl.children[1]` element:

```ts title="view.ts" {2-4,22-25,29}
import { ItemView, WorkspaceLeaf } from "obsidian";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactView } from "./ReactView";

const VIEW_TYPE_EXAMPLE = "example-view";

class ExampleView extends ItemView {
  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return VIEW_TYPE_EXAMPLE;
  }

  getDisplayText() {
    return "Example view";
  }

  async onOpen() {
    ReactDOM.render(
      React.createElement(ReactView),
      this.containerEl.children[1]
    );
  }

  async onClose() {
    ReactDOM.unmountComponentAtNode(this.containerEl.children[1]);
  }
}
```

For more information on `ReactDOM.render()` and `ReactDOM.unmountComponentAtNode()`, refer to the documentation on [ReactDOM](https://reactjs.org/docs/react-dom.html).

You can mount your React component on any `HTMLElement`, for example [status bar items](status-bar.md). Just make sure to clean up properly by calling `ReactDOM.unmountComponentAtNode()` when you're done.
