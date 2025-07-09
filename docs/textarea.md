# Textarea

Textarea
========

Used to enter multiple lines of text.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/textarea)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-textarea--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/textarea.ts)

[Usage](#usage)
---------------

```
import { Textarea } from "@chakra-ui/react"
```

```
<Textarea placeholder="..." />
```

[Examples](#examples)
---------------------

### [Variants](#variants)

Use the `variant` prop to change the appearance of the textarea.

### [Sizes](#sizes)

Use the `size` prop to change the size of the textarea.

### [Helper Text](#helper-text)

Pair the textarea with the `Field` component to add helper text.

### [Error Text](#error-text)

Pair the textarea with the `Field` component to add error text.

### [Field](#field)

Compose the textarea with the `Field` component to add a label, helper text, and error text.

### [Hook Form](#hook-form)

Here's an example of how to integrate the textarea with `react-hook-form`.

### [Resize](#resize)

Use the `resize` prop to control the resize behavior of the textarea.

To limit the maximum height (or rows) of the textarea, we recommend using the `maxHeight` prop and setting the value to a `lh` unit.

```
<Textarea autoresize maxH="5lh" />
```

### [Autoresize](#autoresize)

Use the `autoresize` prop to make the textarea autoresize vertically as you type.

### [Ref](#ref)

Here's how to access the underlying element reference

```
const Demo = () => {
  const ref = useRef<HTMLTextAreaElement | null>(null)
  return <Textarea ref={ref} />
}
```

[Props](#props)
---------------

Prop

Default

Type

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`size`

`'md'`

`'xs' | 'sm' | 'md' | 'lg' | 'xl'`

The size of the component

`variant`

`'outline'`

`'outline' | 'subtle' | 'flushed'`

The variant of the component

[

Previous

Tag



](/docs/components/tag)[

Next

Timeline



](/docs/components/timeline)