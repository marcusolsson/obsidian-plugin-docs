# FileSystemAdapter

Implements `DataAdapter`

## Constructor

```ts
constructor();
```

## Methods

### getName

```ts
getName(): string;
```

### getBasePath

```ts
getBasePath(): string;
```

### mkdir

```ts
mkdir(normalizedPath: string): Promise<void>;
```

### trashSystem

```ts
trashSystem(normalizedPath: string): Promise<boolean>;
```

### trashLocal

```ts
trashLocal(normalizedPath: string): Promise<void>;
```

### rmdir

```ts
rmdir(normalizedPath: string, recursive: boolean): Promise<void>;
```

### read

```ts
read(normalizedPath: string): Promise<string>;
```

### readBinary

```ts
readBinary(normalizedPath: string): Promise<ArrayBuffer>;
```

### write

```ts
write(normalizedPath: string, data: string, options?: DataWriteOptions): Promise<void>;
```

### writeBinary

```ts
writeBinary(normalizedPath: string, data: ArrayBuffer, options?: DataWriteOptions): Promise<void>;
```

### append

```ts
append(normalizedPath: string, data: string, options?: DataWriteOptions): Promise<void>;
```

### process

```ts
process(normalizedPath: string, fn: (data: string) => string, options?: DataWriteOptions): Promise<string>;
```

### getResourcePath

```ts
getResourcePath(normalizedPath: string): string;
```

### getFilePath

```ts
getFilePath(normalizedPath: string): string;
```

Returns the file:// path of this file

### remove

```ts
remove(normalizedPath: string): Promise<void>;
```

### rename

```ts
rename(normalizedPath: string, normalizedNewPath: string): Promise<void>;
```

### copy

```ts
copy(normalizedPath: string, normalizedNewPath: string): Promise<void>;
```

### exists

```ts
exists(normalizedPath: string, sensitive?: boolean): Promise<boolean>;
```

### stat

```ts
stat(normalizedPath: string): Promise<Stat | null>;
```

### list

```ts
list(normalizedPath: string): Promise<ListedFiles>;
```

### getFullPath

```ts
getFullPath(normalizedPath: string): string;
```

### readLocalFile

```ts
static readLocalFile(path: string): Promise<ArrayBuffer>;
```

### mkdir

```ts
static mkdir(path: string): Promise<void>;
```
