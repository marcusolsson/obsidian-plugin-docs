# SuggestModal

Extends `Modal`

Implements `ISuggestOwner<T>`

## Constructor

```ts
constructor(app: App);
```

## Properties

### limit

```ts
limit: number
```

### emptyStateText

```ts
emptyStateText: string
```

### inputEl

```ts
inputEl: HTMLInputElement
```

### resultContainerEl

```ts
resultContainerEl: HTMLElement
```

## Methods

### setPlaceholder

```ts
setPlaceholder(placeholder: string): void;
```

### setInstructions

```ts
setInstructions(instructions: Instruction[]): void;
```

### onNoSuggestion

```ts
onNoSuggestion(): void;
```

### selectSuggestion

```ts
selectSuggestion(value: T, evt: MouseEvent | KeyboardEvent): void;
```

Called when the user makes a selection.

### getSuggestions

```ts
abstract getSuggestions(query: string): T[] | Promise<T[]>;
```

### renderSuggestion

```ts
abstract renderSuggestion(value: T, el: HTMLElement): any;
```

Render the suggestion item into DOM.

### onChooseSuggestion

```ts
abstract onChooseSuggestion(item: T, evt: MouseEvent | KeyboardEvent): any;
```
