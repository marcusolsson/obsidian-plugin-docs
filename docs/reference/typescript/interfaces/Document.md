# Document

Any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

## Properties

### _EVENTS

```ts
_EVENTS: { fullscreenchange?: EventListenerInfo[]; fullscreenerror?: EventListenerInfo[]; pointerlockchange?: EventListenerInfo[]; pointerlockerror?: EventListenerInfo[]; ... 91 more ...; paste?: EventListenerInfo[]; }
```

## Methods

### on

```ts
on: <K extends "input" | "progress" | "select" | "fullscreenchange" | "fullscreenerror" | "abort" | "animationcancel" | "animationend" | "animationiteration" | "animationstart" | "auxclick" | ... 84 more ... | "visibilitychange">(this: Document, type: K, selector: string, listener: (this: Document, ev: DocumentEventMap[...
```

### off

```ts
off: <K extends "input" | "progress" | "select" | "fullscreenchange" | "fullscreenerror" | "abort" | "animationcancel" | "animationend" | "animationiteration" | "animationstart" | "auxclick" | ... 84 more ... | "visibilitychange">(this: Document, type: K, selector: string, listener: (this: Document, ev: DocumentEventMap[...
```
