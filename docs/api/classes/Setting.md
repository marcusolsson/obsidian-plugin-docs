# Setting

## Constructor

```ts
constructor(containerEl: HTMLElement);
```

## Properties

### settingEl

```ts
settingEl: HTMLElement
```

### infoEl

```ts
infoEl: HTMLElement
```

### nameEl

```ts
nameEl: HTMLElement
```

### descEl

```ts
descEl: HTMLElement
```

### controlEl

```ts
controlEl: HTMLElement
```

### components

```ts
components: BaseComponent[]
```

## Methods

### setName

```ts
setName(name: string | DocumentFragment): this;
```

### setDesc

```ts
setDesc(desc: string | DocumentFragment): this;
```

### setClass

```ts
setClass(cls: string): this;
```

### setTooltip

```ts
setTooltip(tooltip: string): this;
```

### setHeading

```ts
setHeading(): this;
```

### setDisabled

```ts
setDisabled(disabled: boolean): this;
```

### addButton

```ts
addButton(cb: (component: ButtonComponent) => any): this;
```

### addExtraButton

```ts
addExtraButton(cb: (component: ExtraButtonComponent) => any): this;
```

### addToggle

```ts
addToggle(cb: (component: ToggleComponent) => any): this;
```

### addText

```ts
addText(cb: (component: TextComponent) => any): this;
```

### addSearch

```ts
addSearch(cb: (component: SearchComponent) => any): this;
```

### addTextArea

```ts
addTextArea(cb: (component: TextAreaComponent) => any): this;
```

### addMomentFormat

```ts
addMomentFormat(cb: (component: MomentFormatComponent) => any): this;
```

### addDropdown

```ts
addDropdown(cb: (component: DropdownComponent) => any): this;
```

### addSlider

```ts
addSlider(cb: (component: SliderComponent) => any): this;
```

### then

```ts
then(cb: (setting: this) => any): this;
```

Facilitates chaining

### clear

```ts
clear(): this;
```
