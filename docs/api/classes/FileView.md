# FileView

Extends `ItemView`

## Constructor

```ts
constructor(leaf: WorkspaceLeaf);
```

## Properties

### allowNoFile

```ts
allowNoFile: boolean
```

### file

```ts
file: TFile
```

## Methods

### getDisplayText

```ts
getDisplayText(): string;
```

### onload

```ts
onload(): void;
```

Override this to load your component

### getState

```ts
getState(): any;
```

### setState

```ts
setState(state: any, result: ViewStateResult): Promise<void>;
```

### onLoadFile

```ts
onLoadFile(file: TFile): Promise<void>;
```

### onUnloadFile

```ts
onUnloadFile(file: TFile): Promise<void>;
```

### onMoreOptionsMenu

```ts
onMoreOptionsMenu(menu: Menu): void;
```

### onHeaderMenu

```ts
onHeaderMenu(menu: Menu): void;
```

### canAcceptExtension

```ts
canAcceptExtension(extension: string): boolean;
```
