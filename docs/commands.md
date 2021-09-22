---
sidebar_position: 4
---

# Commands

Commands are actions that the user can perform from the [Command Palette](https://help.obsidian.md/Plugins/Command+palette) or by using a hot key.

To register a new command for your plugin, call the `addCommand` method inside the `onload` method:

```ts title="main.ts" {5-11}
import { Plugin } from "obsidian";

export default class MyPlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: 'my-sample-command',
      name: 'My sample command',
      callback: () => {
        console.log('Hey, you!');
      },
    });
  }
}
```

## Conditional commands

If your command is only able to run under certain conditions, then consider using `checkCallback` instead.

When using the `checkCallback`, Obsidian first performs a _check_ to see whether the command can run. To determine whether the callback should perform a check or an action, a `checking` argument is passed to the callback.

- If `checking` is set to `true`, perform a check.
- If `checking` is set to `false`, perform an action.

```ts {4,6-8,11,15}
this.addCommand({
  id: 'my-sample-command',
  name: 'My sample command',
  checkCallback: (checking: boolean) => {
    if (isCommandPossible()) {
      if (!checking) {
        // Perform the command.
      }

      // Check passed.
      return true;
    }

    // Check failed. Hide the command.
    return false;
  },
});
```

## Editor commands

If your command needs access to the editor, you can also use the `editorCallback`, which provides the currently active editor and its view as arguments.

```ts {4}
this.addCommand({
  id: 'my-sample-command',
  name: 'My sample command',
  editorCallback: (editor: Editor, view: MarkdownView) => {
    const sel = editor.getSelection()

    console.log(`You have selected: ${sel}`);
  },
}
```

:::note
Editor commands only appear in the Command Palette when there's an active editor available.
:::

If the editor callback can only run given under certain conditions, consider using the `editorCheckCallback` instead. For more information, refer to [conditional commands](#conditional-commands).

```ts {4}
this.addCommand({
  id: 'my-sample-command',
  name: 'My sample command',
  editorCheckCallback: (checking: boolean, editor: Editor, view: MarkdownView) => {
    if (isCommandPossible()) {
      if (!checking) {
        // Perform the command.
      }

      // Check passed.
      return true;
    }

    // Check failed. Hide the command.
    return false;
  },
});
```

## Hot keys

The user can run commands using a keyboard shortcut, or _hot key_. While they can configure this themselves, you can also provide a default hot key.

In this example, the user can run the command by pressing and holding Ctrl and Shift together, and then pressing the letter `a` on their keyboard.

```ts {4}
this.addCommand({
  id: 'my-sample-command',
  name: 'My sample command',
  hotkeys: [{ modifiers: ["Ctrl", "Shift"], key: "a" }],
  callback: () => {
    console.log('Hey, you!');
  },
});
```
