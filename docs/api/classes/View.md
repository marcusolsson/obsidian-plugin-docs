# View

Extends `Component`

## Constructor

```ts
constructor(leaf: WorkspaceLeaf);
```

## Properties

### app

```ts
app: App
```

### icon

```ts
icon: string
```

### navigation

```ts
navigation: boolean
```

Whether or not the view is intended for navigation.
If your view is a static view that is not intended to be navigated away, set this to false.
(For example: File explorer, calendar, etc.)
If your view opens a file or can be otherwise navigated, set this to true.
(For example: Markdown editor view, Kanban view, PDF view, etc.)

### leaf

```ts
leaf: WorkspaceLeaf
```

### containerEl

```ts
containerEl: HTMLElement
```

## Methods

### onOpen

```ts
protected onOpen(): Promise<void>;
```

### onClose

```ts
protected onClose(): Promise<void>;
```

### getViewType

```ts
abstract getViewType(): string;
```

### getState

```ts
getState(): any;
```

### setState

```ts
setState(state: any, result: ViewStateResult): Promise<void>;
```

### getEphemeralState

```ts
getEphemeralState(): any;
```

### setEphemeralState

```ts
setEphemeralState(state: any): void;
```

### getIcon

```ts
getIcon(): string;
```

### onResize

```ts
onResize(): void;
```

Called when the size of this view is changed.

### getDisplayText

```ts
abstract getDisplayText(): string;
```

### onPaneMenu

```ts
onPaneMenu(menu: Menu, source: 'more-options' | 'tab-header' | string): void;
```

Populates the pane menu.

(Replaces the previously removed `onHeaderMenu` and `onMoreOptionsMenu`)
