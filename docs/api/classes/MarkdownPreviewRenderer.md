# MarkdownPreviewRenderer

## Constructor

```ts
constructor();
```

## Methods

### registerPostProcessor

```ts
static registerPostProcessor(postProcessor: MarkdownPostProcessor, sortOrder?: number): void;
```

### unregisterPostProcessor

```ts
static unregisterPostProcessor(postProcessor: MarkdownPostProcessor): void;
```

### createCodeBlockPostProcessor

```ts
static createCodeBlockPostProcessor(language: string, handler: (source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) => Promise<any> | void): (el: HTMLElement, ctx: MarkdownPostProcessorContext) => void;
```
