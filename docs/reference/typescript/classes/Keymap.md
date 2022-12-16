# Keymap

## Constructor

```ts
constructor();
```

## Methods

### pushScope

```ts
pushScope(scope: Scope): void;
```

### popScope

```ts
popScope(scope: Scope): void;
```

### isModifier

```ts
static isModifier(evt: MouseEvent | TouchEvent | KeyboardEvent, modifier: Modifier): boolean;
```

Checks whether the modifier key is pressed during this event

### isModEvent

```ts
static isModEvent(evt?: UserEvent | null): PaneType | boolean;
```

Translates an event into the type of pane that should open.
Returns 'tab' if the modifier key Cmd/Ctrl is pressed OR if this is a middle-click MouseEvent.
Returns 'split' if Cmd/Ctrl+Alt is pressed.
Returns 'window' if Cmd/Ctrl+Alt+Shift is pressed.
