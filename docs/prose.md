# Prose

Prose
=====

Used to style remote HTML content

[Setup](#setup)
---------------

If you don't already have the snippet, run the following command to add the `prose` snippet

```
npx @chakra-ui/cli snippet add prose
```

[Usage](#usage)
---------------

```
import { Prose } from "@/components/ui/prose"
```

```
<Prose>
  <div dangerouslySetInnerHTML={{ __html: "..." }} />
</Prose>
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the `Prose` component

### [Blockquote](#blockquote)

Blockquote elements are styled to match the design language of the `Blockquote` component.

### [List](#list)

List elements are styled to match the design language of the `List` component.

### [React Markdown](#react-markdown)

Here's an example of using the `react-markdown` library to render markdown content.

### [Table](#table)

The table elements are styled to match the design language of the `Table` component.

[

Previous

Mark



](/docs/components/mark)[

Next

Text



](/docs/components/text)