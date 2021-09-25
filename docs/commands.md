---
sidebar_position: 40
---

# Commands

Commands are actions that the user can perform from the [Command Palette](https://help.obsidian.md/Plugins/Command+palette) or by using a hot key.

![Command](../static/img/command.png)

To register a new command for your plugin, call the `addCommand()` method inside the `onload()` method:

```ts title="main.ts" {5-11}
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "print-greeting-to-console",
      name: "Print greeting to console",
      callback: () => {
        console.log("Hey, you!");
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
  id: 'example-command',
  name: 'Example command',
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
  id: 'example-command',
  name: 'Example command',
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
  id: 'example-command',
  name: 'Example command',
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

:::warning
Avoid setting default hot keys for plugins that are intended to be used by others. Hot keys are highly likely to conflict with those defined by other plugins or by the user themselves.
:::

In this example, the user can run the command by pressing and holding Ctrl (or Cmd on Mac) and Shift together, and then pressing the letter `a` on their keyboard.

```ts {4}
this.addCommand({
  id: 'example-command',
  name: 'Example command',
  hotkeys: [{ modifiers: ["Mod", "Shift"], key: "a" }],
  callback: () => {
    console.log('Hey, you!');
  },
});
```

:::note
The Mod key is a special modifier key that becomes Ctrl on Windows and Linux, and Cmd on macOS.
:::
