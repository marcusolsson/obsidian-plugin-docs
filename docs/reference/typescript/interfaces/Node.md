# Node

Node is an interface from which a number of DOM API object types inherit. It allows those types to be treated similarly; for example, inheriting the same set of methods, or being tested in the same way.

## Methods

### createEl

```ts
createEl: <K extends "object" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 99 more ... | "wbr">(tag: K, o?: string | DomElementInfo, callback?: (el: HTMLElementTagNameMap[K]) => void) => HTM...
```

Create an element and append it to this node.

### createDiv

```ts
createDiv: (o?: string | DomElementInfo, callback?: (el: HTMLDivElement) => void) => HTMLDivElement
```

### createSpan

```ts
createSpan: (o?: string | DomElementInfo, callback?: (el: HTMLSpanElement) => void) => HTMLSpanElement
```

### createSvg

```ts
createSvg: <K extends "symbol" | "a" | "script" | "style" | "title" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | ... 41 more ... | "view">(tag: K, o?: string | SvgElementInfo, callback?: (el: SVGElementTagNameMap[K]) => void) ...
```
