# MarkdownEditView

Implements `MarkdownSubView`, `HoverParent`, `MarkdownFileInfo`

This is the editor for Obsidian Mobile as well as the upcoming WYSIWYG editor.

## Constructor

```ts
constructor(view: MarkdownView);
```

## Properties

### app

```ts
app: App
```

### hoverPopover

```ts
hoverPopover: HoverPopover
```

## Methods

### clear

```ts
clear(): void;
```

### get

```ts
get(): string;
```

### set

```ts
set(data: string, clear: boolean): void;
```

### getSelection

```ts
getSelection(): string;
```

### getScroll

```ts
getScroll(): number;
```

### applyScroll

```ts
applyScroll(scroll: number): void;
```
