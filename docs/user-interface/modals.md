# Modals

Modals display information and accept input from the user. To create a modal, create a class that extends [`Modal`](../reference/typescript/classes/Modal.md):

```ts title="modal.ts"
import { App, Modal } from "obsidian";

export class ExampleModal extends Modal {
  constructor(app: App) {
    super(app);
  }

  onOpen() {
    let { contentEl } = this;
    contentEl.setText("Look at me, I'm a modal! 👀");
  }

  onClose() {
    let { contentEl } = this;
    contentEl.empty();
  }
}
```

- [`onOpen()`](../reference/typescript/classes/Modal.md#onopen) is called when the modal is opened and is responsible for building the content of your modal. For more information, refer to [HTML elements](html-elements.md).
- [`onClose()`](../reference/typescript/classes/Modal.md#onclose) is called when the modal is closed and is responsible for cleaning up any resources used by the modal.

To open a modal, create a new instance of `ExampleModal` and call [`open()`](../reference/typescript/classes/Modal.md#open) on it:

```ts title="main.ts"
import { Plugin } from "obsidian";
import { ExampleModal } from "./modal";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "display-modal",
      name: "Display modal",
      callback: () => {
        new ExampleModal(this.app).open();
      },
    });
  }
}
```

## Accept user input

The modal in the previous example only displayed some text. Let's look at a little more complex example that handles input from the user.

![Modal with user input](../../static/img/modal-input.png)

```ts title="modal.ts"
import { App, Modal, Setting } from "obsidian";

export class ExampleModal extends Modal {
  result: string;
  onSubmit: (result: string) => void;

  constructor(app: App, onSubmit: (result: string) => void) {
    super(app);
    this.onSubmit = onSubmit;
  }

  onOpen() {
    const { contentEl } = this;

    contentEl.createEl("h1", { text: "What's your name?" });

    new Setting(contentEl)
      .setName("Name")
      .addText((text) =>
        text.onChange((value) => {
          // highlight-next-line
          this.result = value
        }));

    new Setting(contentEl)
      .addButton((btn) =>
        btn
          .setButtonText("Submit")
          .setCta()
          .onClick(() => {
            // highlight-start
            this.close();
            this.onSubmit(this.result);
            // highlight-end
          }));
  }

  onClose() {
    let { contentEl } = this;
    contentEl.empty();
  }
}
```

The result is stored in `this.result` and returned in the `onSubmit` callback when the user clicks **Submit**:

```ts
new ExampleModal(this.app, (result) => {
  new Notice(`Hello, ${result}!`);
}).open();
```

## Select from list of suggestions

[`SuggestModal`](../reference/typescript/classes/SuggestModal.md) is a special modal that lets you display a list of suggestions to the user.

![Modal with suggestions](../../static/img/suggest-modal.gif)

```ts title="modal.ts"
import { App, Notice, SuggestModal } from "obsidian";

interface Book {
  title: string;
  author: string;
}

const ALL_BOOKS = [
  {
    title: "How to Take Smart Notes",
    author: "Sönke Ahrens",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
  },
];

export class ExampleModal extends SuggestModal<Book> {
  // Returns all available suggestions.
  getSuggestions(query: string): Book[] {
    return ALL_BOOKS.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Renders each suggestion item.
  renderSuggestion(book: Book, el: HTMLElement) {
    el.createEl("div", { text: book.title });
    el.createEl("small", { text: book.author });
  }

  // Perform action on the selected suggestion.
  onChooseSuggestion(book: Book, evt: MouseEvent | KeyboardEvent) {
    new Notice(`Selected ${book.title}`);
  }
}
```

In addition to `SuggestModal`, the Obsidian API provides an even more specialized type of modal for suggestions: the [`FuzzySuggestModal`](../reference/typescript/classes/FuzzySuggestModal.md). While it doesn't give you the same control of how each item is rendered, you get [fuzzy string search](https://en.wikipedia.org/wiki/Approximate_string_matching) out-of-the-box.

![Fuzzy string search](../../static/img/fuzzy-suggestion-modal.png)

```ts
export class ExampleModal extends FuzzySuggestModal<Book> {
  getItems(): Book[] {
    return ALL_BOOKS;
  }

  getItemText(book: Book): string {
    return book.title;
  }

  onChooseItem(book: Book, evt: MouseEvent | KeyboardEvent) {
    new Notice(`Selected ${book.title}`);
  }
}
```
