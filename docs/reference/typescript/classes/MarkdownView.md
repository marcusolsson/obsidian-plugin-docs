# MarkdownView

Extends `TextFileView`

## Constructor

```ts
constructor(leaf: WorkspaceLeaf);
```

## Properties

### editor

```ts
editor: Editor
```

### previewMode

```ts
previewMode: MarkdownPreviewView
```

### currentMode

```ts
currentMode: MarkdownSubView
```

## Methods

### getViewType

```ts
getViewType(): string;
```

### getMode

```ts
getMode(): MarkdownViewModeType;
```

### getViewData

```ts
getViewData(): string;
```

Gets the data from the editor. This will be called to save the editor contents to the file.

### clear

```ts
clear(): void;
```

Clear the editor. This is usually called when we're about to open a completely
different file, so it's best to clear any editor states like undo-redo history,
and any caches/indexes associated with the previous file contents.

### setViewData

```ts
setViewData(data: string, clear: boolean): void;
```

Set the data to the editor. This is used to load the file contents.

If clear is set, then it means we're opening a completely different file.
In that case, you should call clear(), or implement a slightly more efficient
clearing mechanism given the new data to be set.

### showSearch

```ts
showSearch(replace?: boolean): void;
```
