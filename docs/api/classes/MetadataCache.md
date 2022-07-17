# MetadataCache

Extends `Events`

Linktext is any internal link that is composed of a path and a subpath, such as "My note#Heading"
Linkpath (or path) is the path part of a linktext
Subpath is the heading/block ID part of a linktext.

## Constructor

```ts
constructor();
```

## Properties

### resolvedLinks

```ts
resolvedLinks: Record<string, Record<string, number>>
```

Contains all resolved links. This object maps each source file's path to an object of destination file paths with the link count.
Source and destination paths are all vault absolute paths that comes from `TFile.path` and can be used with `Vault.getAbstractFileByPath(path)`.

### unresolvedLinks

```ts
unresolvedLinks: Record<string, Record<string, number>>
```

Contains all unresolved links. This object maps each source file to an object of unknown destinations with count.
Source paths are all vault absolute paths, similar to `resolvedLinks`.

## Methods

### getFirstLinkpathDest

```ts
getFirstLinkpathDest(linkpath: string, sourcePath: string): TFile | null;
```

The function gets the best match for a linkpath, and requires two parameters. You need to supply the source path as well so that it can match the closest note to the source you’re calling it from. This lets it resolve the correct note in case there are two with the same name in your vault. 

### getFileCache

```ts
getFileCache(file: TFile): CachedMetadata | null;
```
The input for the `getFileCache` is a TFile (also in the API). This is a JS class for a specific file, that you can also get with the metadata cache if you know the name using `getFirstLinkpathDest`. Alternatively, if you know the full path of a file, you can use `getCache`
### getCache

```ts
getCache(path: string): CachedMetadata | null;
```

Example: `this.app.metadataCache.getCache("A.md")`

### fileToLinktext

```ts
fileToLinktext(file: TFile, sourcePath: string, omitMdExtension?: boolean): string;
```

Generates a linktext for a file.

If file name is unique, use the filename.
If not unique, use full path.

### on

```ts
on(name: 'changed', callback: (file: TFile, data: string, cache: CachedMetadata) => any, ctx?: any): EventRef;
```

Called when a file has been indexed, and its (updated) cache is now available.
Called when a file has been deleted. A best-effort previous version of the cached metadata is presented,
but it could be null in case the file was not successfully cached previously.
Called when a file has been resolved for `resolvedLinks` and `unresolvedLinks`.
This happens sometimes after a file has been indexed.
Called when all files has been resolved. This will be fired each time files get modified after the initial load.

### on

```ts
on(name: 'deleted', callback: (file: TFile, prevCache: CachedMetadata | null) => any, ctx?: any): EventRef;
```

Called when a file has been indexed, and its (updated) cache is now available.
Called when a file has been deleted. A best-effort previous version of the cached metadata is presented,
but it could be null in case the file was not successfully cached previously.
Called when a file has been resolved for `resolvedLinks` and `unresolvedLinks`.
This happens sometimes after a file has been indexed.
Called when all files has been resolved. This will be fired each time files get modified after the initial load.

### on

```ts
on(name: 'resolve', callback: (file: TFile) => any, ctx?: any): EventRef;
```

Called when a file has been indexed, and its (updated) cache is now available.
Called when a file has been deleted. A best-effort previous version of the cached metadata is presented,
but it could be null in case the file was not successfully cached previously.
Called when a file has been resolved for `resolvedLinks` and `unresolvedLinks`.
This happens sometimes after a file has been indexed.
Called when all files has been resolved. This will be fired each time files get modified after the initial load.

### on

```ts
on(name: 'resolved', callback: () => any, ctx?: any): EventRef;
```

Called when a file has been indexed, and its (updated) cache is now available.
Called when a file has been deleted. A best-effort previous version of the cached metadata is presented,
but it could be null in case the file was not successfully cached previously.
Called when a file has been resolved for `resolvedLinks` and `unresolvedLinks`.
This happens sometimes after a file has been indexed.
Called when all files has been resolved. This will be fired each time files get modified after the initial load.
