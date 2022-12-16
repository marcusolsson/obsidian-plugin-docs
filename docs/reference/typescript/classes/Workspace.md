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
rootSplit: WorkspaceRoot
```

### activeLeaf

```ts
activeLeaf: WorkspaceLeaf
```

Indicates the currently focused leaf, if one exists.

Please avoid using `activeLeaf` directly, especially without checking whether
`activeLeaf` is null.

The recommended alternatives are:
- If you need information about the current view, use {@link getActiveViewOfType}.
- If you need to open a new file or navigate a view, use {@link getLeaf}.

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
requestSaveLayout: Debouncer<[], Promise<void>>
```

### activeEditor

```ts
activeEditor: MarkdownFileInfo
```

A component managing the current editor. This can be null
if the active view has no editor.

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

### createLeafBySplit

```ts
createLeafBySplit(leaf: WorkspaceLeaf, direction?: SplitDirection, before?: boolean): WorkspaceLeaf;
```

### splitActiveLeaf

```ts
splitActiveLeaf(direction?: SplitDirection): WorkspaceLeaf;
```

### duplicateLeaf

```ts
duplicateLeaf(leaf: WorkspaceLeaf, direction?: SplitDirection): Promise<WorkspaceLeaf>;
```

### duplicateLeaf

```ts
duplicateLeaf(leaf: WorkspaceLeaf, leafType: PaneType | boolean, direction?: SplitDirection): Promise<WorkspaceLeaf>;
```

### getUnpinnedLeaf

```ts
getUnpinnedLeaf(type?: string): WorkspaceLeaf;
```

### getLeaf

```ts
getLeaf(newLeaf?: 'split', direction?: SplitDirection): WorkspaceLeaf;
```

Creates a new leaf in a leaf adjacent to the currently active leaf.
If direction is `'vertical'`, the leaf will appear to the right.
If direction is `'horizontal'`, the leaf will appear below the current leaf.
If newLeaf is false (or not set) then an existing leaf which can be navigated
is returned, or a new leaf will be created if there was no leaf available.

If newLeaf is `'tab'` or `true` then a new leaf will be created in the preferred
location within the root split and returned.

If newLeaf is `'split'` then a new leaf will be created adjacent to the currently active leaf.

If newLeaf is `'window'` then a popout window will be created with a new leaf inside.

### getLeaf

```ts
getLeaf(newLeaf?: PaneType | boolean): WorkspaceLeaf;
```

Creates a new leaf in a leaf adjacent to the currently active leaf.
If direction is `'vertical'`, the leaf will appear to the right.
If direction is `'horizontal'`, the leaf will appear below the current leaf.
If newLeaf is false (or not set) then an existing leaf which can be navigated
is returned, or a new leaf will be created if there was no leaf available.

If newLeaf is `'tab'` or `true` then a new leaf will be created in the preferred
location within the root split and returned.

If newLeaf is `'split'` then a new leaf will be created adjacent to the currently active leaf.

If newLeaf is `'window'` then a popout window will be created with a new leaf inside.

### moveLeafToPopout

```ts
moveLeafToPopout(leaf: WorkspaceLeaf, data?: WorkspaceWindowInitData): WorkspaceWindow;
```

Migrates this leaf to a new popout window.
Only works on the desktop app.

### openPopoutLeaf

```ts
openPopoutLeaf(data?: WorkspaceWindowInitData): WorkspaceLeaf;
```

Open a new popout window with a single new leaf and return that leaf.
Only works on the desktop app.

### openLinkText

```ts
openLinkText(linktext: string, sourcePath: string, newLeaf?: PaneType | boolean, openViewState?: OpenViewState): Promise<void>;
```

### setActiveLeaf

```ts
setActiveLeaf(leaf: WorkspaceLeaf, params?: {
    focus?: boolean;
}): void;
```

Sets the active leaf

### setActiveLeaf

```ts
setActiveLeaf(leaf: WorkspaceLeaf, pushHistory: boolean, focus: boolean): void;
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
getMostRecentLeaf(root?: WorkspaceParent): WorkspaceLeaf | null;
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

Returns the file for the current view if it's a FileView.

Otherwise, it will recent the most recently active file.

### iterateRootLeaves

```ts
iterateRootLeaves(callback: (leaf: WorkspaceLeaf) => any): void;
```

Iterate through all leaves in the main area of the workspace.

### iterateAllLeaves

```ts
iterateAllLeaves(callback: (leaf: WorkspaceLeaf) => any): void;
```

Iterate through all leaves, including main area leaves, floating leaves, and sidebar leaves.

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

### updateOptions

```ts
updateOptions(): void;
```

Calling this function will update/reconfigure the options of all markdown panes.
It is fairly expensive, so it should not be called frequently.

### iterateCodeMirrors

```ts
iterateCodeMirrors(callback: (cm: CodeMirror.Editor) => any): void;
```

### on

```ts
on(name: 'quick-preview', callback: (file: TFile, data: string) => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.

### on

```ts
on(name: 'resize', callback: () => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.

### on

```ts
on(name: 'click', callback: (evt: MouseEvent) => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.

### on

```ts
on(name: 'active-leaf-change', callback: (leaf: WorkspaceLeaf | null) => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.

### on

```ts
on(name: 'file-open', callback: (file: TFile | null) => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.

### on

```ts
on(name: 'layout-change', callback: () => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.

### on

```ts
on(name: 'window-open', callback: (win: WorkspaceWindow, window: Window) => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.

### on

```ts
on(name: 'window-close', callback: (win: WorkspaceWindow, window: Window) => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.

### on

```ts
on(name: 'css-change', callback: () => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.

### on

```ts
on(name: 'file-menu', callback: (menu: Menu, file: TAbstractFile, source: string, leaf?: WorkspaceLeaf) => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.

### on

```ts
on(name: 'editor-menu', callback: (menu: Menu, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.

### on

```ts
on(name: 'editor-change', callback: (editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.

### on

```ts
on(name: 'editor-paste', callback: (evt: ClipboardEvent, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.

### on

```ts
on(name: 'editor-drop', callback: (evt: DragEvent, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.

### on

```ts
on(name: 'codemirror', callback: (cm: CodeMirror.Editor) => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.

### on

```ts
on(name: 'quit', callback: (tasks: Tasks) => any, ctx?: any): EventRef;
```

Triggered when the CSS of the app has changed.
Triggered when the user opens the context menu on a file.
Triggered when the user opens the context menu on an editor.
Triggered when changes to an editor has been applied, either programmatically or from a user event.
Triggered when the editor receives a paste event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the editor receives a drop event.
Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
Use `evt.preventDefault()` to indicate that you've handled the event.
Triggered when the app is about to quit. Not guaranteed to actually run.
Perform some best effort cleanup here.
