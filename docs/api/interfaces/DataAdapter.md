# DataAdapter

## Methods

### getName

```ts
getName: () => string
```

### exists

```ts
exists: (normalizedPath: string, sensitive?: boolean) => Promise<boolean>
```

### stat

```ts
stat: (normalizedPath: string) => Promise<Stat>
```

### list

```ts
list: (normalizedPath: string) => Promise<ListedFiles>
```

### read

```ts
read: (normalizedPath: string) => Promise<string>
```

### readBinary

```ts
readBinary: (normalizedPath: string) => Promise<ArrayBuffer>
```

### write

```ts
write: (normalizedPath: string, data: string, options?: DataWriteOptions) => Promise<void>
```

### writeBinary

```ts
writeBinary: (normalizedPath: string, data: ArrayBuffer, options?: DataWriteOptions) => Promise<void>
```

### append

```ts
append: (normalizedPath: string, data: string, options?: DataWriteOptions) => Promise<void>
```

### getResourcePath

```ts
getResourcePath: (normalizedPath: string) => string
```

### mkdir

```ts
mkdir: (normalizedPath: string) => Promise<void>
```

### trashSystem

```ts
trashSystem: (normalizedPath: string) => Promise<boolean>
```

### trashLocal

```ts
trashLocal: (normalizedPath: string) => Promise<void>
```

### rmdir

```ts
rmdir: (normalizedPath: string, recursive: boolean) => Promise<void>
```

### remove

```ts
remove: (normalizedPath: string) => Promise<void>
```

### rename

```ts
rename: (normalizedPath: string, normalizedNewPath: string) => Promise<void>
```

### copy

```ts
copy: (normalizedPath: string, normalizedNewPath: string) => Promise<void>
```
