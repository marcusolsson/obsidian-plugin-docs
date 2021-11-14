# Vault

Extends `Events`

## Constructor

```ts
constructor();
```

## Properties

### adapter

```ts
adapter: DataAdapter
```

### configDir

```ts
configDir: string
```

Gets the path to the config folder.
This value is typically `.obsidian` but it could be different.

## Methods

### getName

```ts
getName(): string;
```

Gets the name of the vault

### getAbstractFileByPath

```ts
getAbstractFileByPath(path: string): TAbstractFile | null;
```

### getRoot

```ts
getRoot(): TFolder;
```

### create

```ts
create(path: string, data: string, options?: DataWriteOptions): Promise<TFile>;
```

### createBinary

```ts
createBinary(path: string, data: ArrayBuffer, options?: DataWriteOptions): Promise<TFile>;
```

### createFolder

```ts
createFolder(path: string): Promise<void>;
```

### read

```ts
read(file: TFile): Promise<string>;
```

### cachedRead

```ts
cachedRead(file: TFile): Promise<string>;
```

### readBinary

```ts
readBinary(file: TFile): Promise<ArrayBuffer>;
```

### getResourcePath

```ts
getResourcePath(file: TFile): string;
```

### delete

```ts
delete(file: TAbstractFile, force?: boolean): Promise<void>;
```

### trash

```ts
trash(file: TAbstractFile, system: boolean): Promise<void>;
```

Tries to move to system trash. If that isn't successful/allowed, use local trash

### rename

```ts
rename(file: TAbstractFile, newPath: string): Promise<void>;
```

### modify

```ts
modify(file: TFile, data: string, options?: DataWriteOptions): Promise<void>;
```

### modifyBinary

```ts
modifyBinary(file: TFile, data: ArrayBuffer, options?: DataWriteOptions): Promise<void>;
```

### append

```ts
append(file: TFile, data: string, options?: DataWriteOptions): Promise<void>;
```

### copy

```ts
copy(file: TFile, newPath: string): Promise<TFile>;
```

### getAllLoadedFiles

```ts
getAllLoadedFiles(): TAbstractFile[];
```

### recurseChildren

```ts
static recurseChildren(root: TFolder, cb: (file: TAbstractFile) => any): void;
```

### getMarkdownFiles

```ts
getMarkdownFiles(): TFile[];
```

### getFiles

```ts
getFiles(): TFile[];
```

### on

```ts
on(name: 'create', callback: (file: TAbstractFile) => any, ctx?: any): EventRef;
```

### on

```ts
on(name: 'modify', callback: (file: TAbstractFile) => any, ctx?: any): EventRef;
```

### on

```ts
on(name: 'delete', callback: (file: TAbstractFile) => any, ctx?: any): EventRef;
```

### on

```ts
on(name: 'rename', callback: (file: TAbstractFile, oldPath: string) => any, ctx?: any): EventRef;
```

### on

```ts
on(name: 'closed', callback: () => any, ctx?: any): EventRef;
```
