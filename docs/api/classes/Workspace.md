# Workspace

Extends `Events`

## Constructor

```ts
constructor();
```

## Properties

### leftSplit

```ts
leftSplit: WorkspaceSidedock | WorkspaceMobileDrawer
```

### rightSplit

```ts
rightSplit: WorkspaceSidedock | WorkspaceMobileDrawer
```

### leftRibbon

```ts
leftRibbon: WorkspaceRibbon
```

### rightRibbon

```ts
rightRibbon: WorkspaceRibbon
```

### rootSplit

```ts
rootSplit: WorkspaceSplit
```

### activeLeaf

```ts
activeLeaf: WorkspaceLeaf
```

### containerEl

```ts
containerEl: HTMLElement
```

### layoutReady

```ts
layoutReady: boolean
```

### requestSaveLayout

```ts
requestSaveLayout: () => void
```

### requestSaveHistory

```ts
requestSaveHistory: () => void
```

## Methods

### onLayoutReady

```ts
onLayoutReady(callback: () => any): void;
```

Runs the callback function right away if layout is already ready,
or push it to a queue to be called later when layout is ready.

### changeLayout

```ts
changeLayout(workspace: any): Promise<void>;
```

### getLayout

```ts
getLayout(): any;
```

### createLeafInParent

```ts
createLeafInParent(parent: WorkspaceSplit, index: number): WorkspaceLeaf;
```

### splitLeaf

```ts
splitLeaf(source: WorkspaceItem, newLeaf: WorkspaceItem, direction?: SplitDirection, before?: boolean): void;
```

### createLeafBySplit

```ts
createLeafBySplit(leaf: WorkspaceLeaf, direction?: SplitDirection, before?: boolean): WorkspaceLeaf;
```

### splitActiveLeaf

```ts
splitActiveLeaf(direction?: SplitDirection): WorkspaceLeaf;
```

### splitLeafOrActive

```ts
splitLeafOrActive(leaf?: WorkspaceLeaf, direction?: SplitDirection): WorkspaceLeaf;
```

### duplicateLeaf

```ts
duplicateLeaf(leaf: WorkspaceLeaf, direction?: SplitDirection): Promise<void>;
```

### getUnpinnedLeaf

```ts
getUnpinnedLeaf(type?: string): WorkspaceLeaf;
```

### getLeaf

```ts
getLeaf(newLeaf?: boolean): WorkspaceLeaf;
```

### openLinkText

```ts
openLinkText(linktext: string, sourcePath: string, newLeaf?: boolean, openViewState?: OpenViewState): Promise<void>;
```

### setActiveLeaf

```ts
setActiveLeaf(leaf: WorkspaceLeaf, pushHistory?: boolean, focus?: boolean): void;
```

Sets the active leaf

### getLeafById

```ts
getLeafById(id: string): WorkspaceLeaf;
```

### getGroupLeaves

```ts
getGroupLeaves(group: string): WorkspaceLeaf[];
```

### getMostRecentLeaf

```ts
getMostRecentLeaf(): WorkspaceLeaf;
```

### getLeftLeaf

```ts
getLeftLeaf(split: boolean): WorkspaceLeaf;
```

### getRightLeaf

```ts
getRightLeaf(split: boolean): WorkspaceLeaf;
```

### getActiveViewOfType

```ts
getActiveViewOfType<T extends View>(type: Constructor<T>): T | null;
```

### getActiveFile

```ts
getActiveFile(): TFile | null;
```

### iterateRootLeaves

```ts
iterateRootLeaves(callback: (leaf: WorkspaceLeaf) => any): void;
```

### iterateAllLeaves

```ts
iterateAllLeaves(callback: (leaf: WorkspaceLeaf) => any): void;
```

### getLeavesOfType

```ts
getLeavesOfType(viewType: string): WorkspaceLeaf[];
```

### detachLeavesOfType

```ts
detachLeavesOfType(viewType: string): void;
```

### revealLeaf

```ts
revealLeaf(leaf: WorkspaceLeaf): void;
```

### getLastOpenFiles

```ts
getLastOpenFiles(): string[];
```

### iterateCodeMirrors

```ts
iterateCodeMirrors(callback: (cm: CodeMirror.Editor) => any): void;
```

## Events

### on quick-preview

```ts
on(name: 'quick-preview', callback: (file: TFile, data: string) => any, ctx?: any): EventRef;
```


### on resize

```ts
on(name: 'resize', callback: () => any, ctx?: any): EventRef;
```


### on click

Triggered whenever a click occurs within the workspace.

```ts
on(name: 'click', callback: () => any, ctx?: any): EventRef;
```


### on active-leaf-change

```ts
on(name: 'active-leaf-change', callback: (leaf: WorkspaceLeaf | null) => any, ctx?: any): EventRef;
```


### on file-open

Triggered when a file is opened.

```ts
on(name: 'file-open', callback: (file: TFile | null) => any, ctx?: any): EventRef;
```

### on layout-change

```ts
on(name: 'layout-change', callback: () => any, ctx?: any): EventRef;
```

### on css-change

Triggered when the CSS of the app has changed.

```ts
on(name: 'css-change', callback: () => any, ctx?: any): EventRef;
```

### on file-menu

Triggered when the user opens the context menu on a file, usually by right clicking. This can also be triggered when a folder context menu is opened. Which means can emit either a `TFile` or a `TFolder` event. To check which event your processing it's suggested to use `file instanceof TFile` or similar to verify what type of event you are receiving. 

```ts
on(name: 'file-menu', callback: (menu: Menu, file: TAbstractFile, source: string, leaf?: WorkspaceLeaf) => any, ctx?: any): EventRef;
```

### on editor-menu

Triggered when the user opens the context menu on an editor.

```ts
on(name: 'editor-menu', callback: (menu: Menu, editor: Editor, view: MarkdownView) => any, ctx?: any): EventRef;
```

### on editor-change

Triggered when changes to an editor has been applied, either programmatically or from a user event.

```ts
on(name: 'editor-change', callback: (editor: Editor, markdownView: MarkdownView) => any, ctx?: any): EventRef;
```

### on editor-paste

Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.

```ts
on(name: 'editor-paste', callback: (evt: ClipboardEvent, editor: Editor, markdownView: MarkdownView) => any, ctx?: any): EventRef;
```

### on editor-drop

Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.

```ts
on(name: 'editor-drop', callback: (evt: DragEvent, editor: Editor, markdownView: MarkdownView) => any, ctx?: any): EventRef;
```

### on codemirror

```ts
on(name: 'codemirror', callback: (cm: CodeMirror.Editor) => any, ctx?: any): EventRef;
```

### on quit

Triggered when the app is about to quit. Not guaranteed to actually run.

```ts
on(name: 'quit', callback: (tasks: Tasks) => any, ctx?: any): EventRef;
```

