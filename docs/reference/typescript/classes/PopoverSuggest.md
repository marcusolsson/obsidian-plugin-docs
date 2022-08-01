# PopoverSuggest

Implements `ISuggestOwner<T>`, `CloseableComponent`

## Constructor

```ts
constructor(app: App, scope: Scope);
```

## Methods

### open

```ts
open(): void;
```

### close

```ts
close(): void;
```

### renderSuggestion

```ts
abstract renderSuggestion(value: T, el: HTMLElement): void;
```

Render the suggestion item into DOM.

### selectSuggestion

```ts
abstract selectSuggestion(value: T, evt: MouseEvent | KeyboardEvent): void;
```

Called when the user makes a selection.
