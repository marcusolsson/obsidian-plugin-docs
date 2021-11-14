# EditorSuggest

Extends `PopoverSuggest<T>`

## Constructor

```ts
constructor(app: App);
```

## Properties

### context

```ts
context: EditorSuggestContext
```

Current suggestion context, containing the result of `onTrigger`.
This will be null any time the EditorSuggest is not supposed to run.

### limit

```ts
limit: number
```

Override this to use a different limit for suggestion items

## Methods

### setInstructions

```ts
setInstructions(instructions: Instruction[]): void;
```

### onTrigger

```ts
abstract onTrigger(cursor: EditorPosition, editor: Editor, file: TFile): EditorSuggestTriggerInfo | null;
```

Based on the editor line and cursor position, determine if this EditorSuggest should be triggered at this moment.
Typically, you would run a regular expression on the current line text before the cursor.
Return null to indicate that this editor suggest is not supposed to be triggered.

Please be mindful of performance when implementing this function, as it will be triggered very often (on each keypress).
Keep it simple, and return null as early as possible if you determine that it is not the right time.

### getSuggestions

```ts
abstract getSuggestions(context: EditorSuggestContext): T[] | Promise<T[]>;
```

Generate suggestion items based on this context. Can be async, but preferably sync.
When generating async suggestions, you should pass the context along.
