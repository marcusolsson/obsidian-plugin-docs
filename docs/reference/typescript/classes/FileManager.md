# FileManager

Manage the creation, deletion and renaming of files from the UI.

## Constructor

```ts
constructor();
```

## Methods

### getNewFileParent

```ts
getNewFileParent(sourcePath: string): TFolder;
```

Gets the folder that new files should be saved to, given the user's preferences.

### renameFile

```ts
renameFile(file: TAbstractFile, newPath: string): Promise<void>;
```

Rename or move a file safely, and update all links to it depending on the user's preferences.

### generateMarkdownLink

```ts
generateMarkdownLink(file: TFile, sourcePath: string, subpath?: string, alias?: string): string;
```

Generate a markdown link based on the user's preferences.

### processFrontMatter

```ts
processFrontMatter(file: TFile, fn: (frontMatter: any) => void): Promise<void>;
```

Atomically read, modify, and save the frontmatter of a note.
The frontmatter is passed in as a JS object, and should be mutated directly to achieve the desired result.

Remember to handle errors thrown by this method.
