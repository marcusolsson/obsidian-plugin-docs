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

### onHeaderMenu

```ts
onHeaderMenu(menu: Menu): void;
```
