# Element

Element is the most general base class from which all objects in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element.

## Methods

### find

```ts
find: (selector: string) => Element
```

### findAll

```ts
findAll: (selector: string) => HTMLElement[]
```

### findAllSelf

```ts
findAllSelf: (selector: string) => HTMLElement[]
```
