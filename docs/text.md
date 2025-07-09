# Text

Text
====

Used to render text and paragraphs within an interface.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/typography)

[Usage](#usage)
---------------

```
import { Text } from "@chakra-ui/react"
```

```
<Text>This is the text component</Text>
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `fontSize` or `textStyle` prop to change the size of the text.

### [Weights](#weights)

Use the `fontWeight` prop to change the weight of the text.

### [Truncation](#truncation)

Use the `truncate` prop to truncate the text after a single line.

### [Line Clamp](#line-clamp)

Use the `lineClamp` prop to truncate the text after a certain number of lines.

### [Ref](#ref)

Here's how to access the underlying element reference

```
const Demo = () => {
  const ref = useRef<HTMLParagraphElement | null>(null)
  return <Text ref={ref}>This is the text component</Text>
}
```

[

Previous

Prose



](/docs/components/prose)[

Next

Accordion



](/docs/components/accordion)