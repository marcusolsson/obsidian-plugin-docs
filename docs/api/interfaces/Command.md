# Command

## Properties

### id

```ts
id: string
```

Globally unique ID to identify this command.

### name

```ts
name: string
```

Human friendly name for searching.

### icon

```ts
icon: string
```

Icon ID to be used in the toolbar.

### mobileOnly

```ts
mobileOnly: boolean
```

### callback

```ts
callback: () => any
```

Simple callback, triggered globally.

### checkCallback

```ts
checkCallback: (checking: boolean) => boolean | void
```

Complex callback, overrides the simple callback.
Used to "check" whether your command can be performed in the current circumstances.
For example, if your command requires the active focused pane to be a MarkdownSourceView, then
you should only return true if the condition is satisfied. Returning false or undefined causes
the command to be hidden from the command palette.

### editorCallback

```ts
editorCallback: (editor: Editor, view: MarkdownView) => any
```

A command callback that is only triggered when the user is in an editor.
Overrides `callback` and `checkCallback`

### editorCheckCallback

```ts
editorCheckCallback: (checking: boolean, editor: Editor, view: MarkdownView) => boolean | void
```

A command callback that is only triggered when the user is in an editor.
Overrides `editorCallback`, `callback` and `checkCallback`

### hotkeys

```ts
hotkeys: Hotkey[]
```

Sets the default hotkey. It is recommended for plugins to avoid setting default hotkeys if possible,
to avoid conflicting hotkeys with one that's set by the user, even though customized hotkeys have higher priority.
