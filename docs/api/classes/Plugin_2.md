# Plugin_2

Extends `Component`

## Constructor

```ts
constructor(app: App, manifest: PluginManifest);
```

## Properties

### app

```ts
app: App
```

### manifest

```ts
manifest: PluginManifest
```

## Methods

### addRibbonIcon

```ts
addRibbonIcon(icon: string, title: string, callback: (evt: MouseEvent) => any): HTMLElement;
```

Adds a ribbon icon to the left bar.

### addStatusBarItem

```ts
addStatusBarItem(): HTMLElement;
```

### addCommand

```ts
addCommand(command: Command): Command;
```

Register a command globally. The command id and name will be automatically prefixed with this plugin's id and name.

### addSettingTab

```ts
addSettingTab(settingTab: PluginSettingTab): void;
```

### registerView

```ts
registerView(type: string, viewCreator: ViewCreator): void;
```

### registerExtensions

```ts
registerExtensions(extensions: string[], viewType: string): void;
```

### registerMarkdownPostProcessor

```ts
registerMarkdownPostProcessor(postProcessor: MarkdownPostProcessor, sortOrder?: number): MarkdownPostProcessor;
```

### registerMarkdownCodeBlockProcessor

```ts
registerMarkdownCodeBlockProcessor(language: string, handler: (source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) => Promise<any> | void, sortOrder?: number): MarkdownPostProcessor;
```

Register a special post processor that handles fenced code given a language and a handler.
This special post processor takes care of removing the &lt;pre&gt;&lt;code&gt; and create a &lt;div&gt; that
will be passed to your handler, and is expected to be filled with your custom elements.

### registerCodeMirror

```ts
registerCodeMirror(callback: (cm: CodeMirror.Editor) => any): void;
```

Runs callback on all currently loaded instances of CodeMirror,
then registers the callback for all future CodeMirror instances.

### registerEditorExtension

```ts
registerEditorExtension(extension: Extension): void;
```

Registers a CodeMirror 6 extension.
To reconfigure cm6 extensions for your plugin on the fly, you can pass an array here and dynamically
modify it. Once this array is modified, call `Workspace.updateOptions()` to have the changes applied.

### registerObsidianProtocolHandler

```ts
registerObsidianProtocolHandler(action: string, handler: ObsidianProtocolHandler): void;
```

Register a handler for obsidian:// URLs.

### registerEditorSuggest

```ts
registerEditorSuggest(editorSuggest: EditorSuggest<any>): void;
```

Register an EditorSuggest which can provide live suggestions while the user is typing.

### loadData

```ts
loadData(): Promise<any>;
```

### saveData

```ts
saveData(data: any): Promise<void>;
```
