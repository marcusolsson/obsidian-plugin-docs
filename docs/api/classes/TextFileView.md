# TextFileView

Extends `EditableFileView`

This class implements a plaintext-based editable file view, which can be loaded and saved given an editor.

Note that by default, this view only saves when it's closing. To implement auto-save, your editor should
call `this.requestSave()` when the content is changed.

## Constructor

```ts
constructor(leaf: WorkspaceLeaf);
```

## Properties

### data

```ts
data: string
```

In memory data

### requestSave

```ts
requestSave: () => void
```

Debounced save in 2 seconds from now

## Methods

### onUnloadFile

```ts
onUnloadFile(file: TFile): Promise<void>;
```

### onLoadFile

```ts
onLoadFile(file: TFile): Promise<void>;
```

### save

```ts
save(clear?: boolean): Promise<void>;
```

### getViewData

```ts
abstract getViewData(): string;
```

Gets the data from the editor. This will be called to save the editor contents to the file.

### setViewData

```ts
abstract setViewData(data: string, clear: boolean): void;
```

Set the data to the editor. This is used to load the file contents.

If clear is set, then it means we're opening a completely different file.
In that case, you should call clear(), or implement a slightly more efficient
clearing mechanism given the new data to be set.

### clear

```ts
abstract clear(): void;
```

Clear the editor. This is usually called when we're about to open a completely
different file, so it's best to clear any editor states like undo-redo history,
and any caches/indexes associated with the previous file contents.
