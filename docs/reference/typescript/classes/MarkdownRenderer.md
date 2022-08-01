# MarkdownRenderer

Extends `MarkdownRenderChild`

Implements `MarkdownPreviewEvents`, `HoverParent`

## Constructor

```ts
constructor(containerEl: HTMLElement);
```

## Properties

### hoverPopover

```ts
hoverPopover: HoverPopover
```

## Methods

### renderMarkdown

```ts
static renderMarkdown(markdown: string, el: HTMLElement, sourcePath: string, component: Component): Promise<void>;
```

Renders markdown string to an HTML element.
