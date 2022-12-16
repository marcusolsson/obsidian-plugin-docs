# HTMLElement

Any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it.

## Properties

### _EVENTS

```ts
_EVENTS: { fullscreenchange?: EventListenerInfo[]; fullscreenerror?: EventListenerInfo[]; abort?: EventListenerInfo[]; animationcancel?: EventListenerInfo[]; ... 87 more ...; paste?: EventListenerInfo[]; }
```

## Methods

### on

```ts
on: <K extends "input" | "progress" | "select" | "fullscreenchange" | "fullscreenerror" | "abort" | "animationcancel" | "animationend" | "animationiteration" | "animationstart" | "auxclick" | ... 80 more ... | "paste">(this: HTMLElement, type: K, selector: string, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]...
```

### off

```ts
off: <K extends "input" | "progress" | "select" | "fullscreenchange" | "fullscreenerror" | "abort" | "animationcancel" | "animationend" | "animationiteration" | "animationstart" | "auxclick" | ... 80 more ... | "paste">(this: HTMLElement, type: K, selector: string, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]...
```

### onClickEvent

```ts
onClickEvent: (this: HTMLElement, listener: (this: HTMLElement, ev: MouseEvent) => any, options?: boolean | AddEventListenerOptions) => void
```

### onNodeInserted

```ts
onNodeInserted: (this: HTMLElement, listener: () => any, once?: boolean) => () => void
```

### onWindowMigrated

```ts
onWindowMigrated: (this: HTMLElement, listener: (win: Window) => any) => () => void
```

### trigger

```ts
trigger: (eventType: string) => void
```
