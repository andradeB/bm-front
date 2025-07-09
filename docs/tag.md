# Tag

Tag
===

Used for categorizing or labeling content

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/tag)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-tag--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/tag.ts)

[Usage](#usage)
---------------

```
import { Tag } from "@chakra-ui/react"
```

```
<Tag.Root>
  <Tag.Label>Tag here</Tag.Label>
</Tag.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Examples](#examples)
---------------------

### [Icon](#icon)

Use the `Tag.StartElement` and `Tag.EndElement` components to add an icon to the start or end of the tag

### [Variants](#variants)

Use the `variant` prop to change the appearance of the tag.

### [Sizes](#sizes)

Use the `size` prop to change the size of the tag.

### [Colors](#colors)

Use the `colorPalette` prop to change the color of the tag.

### [Closable](#closable)

Use the `Tag.CloseTrigger` within the `Tag.EndElement` to make the tag closable.

### [Overflow](#overflow)

Use the `maxWidth` prop to control the maximum width of the tag. When the content exceeds this width, it will be truncated with an ellipsis.

This is particularly useful when dealing with dynamic or user-generated content where the length might vary.

### [Avatar](#avatar)

The tag component has been designed to work well with the `Avatar` component.

Note: Set the avatar size to `full` to ensure it's sized correctly.

### [Render as button](#render-as-button)

Use the `asChild` prop to render the tag as a button.

### [Closed Component](#closed-component)

Here's how to setup the Tag for a closed component composition.

```
import { Tag as ChakraTag } from "@chakra-ui/react"
import * as React from "react"

export interface TagProps extends ChakraTag.RootProps {
  startElement?: React.ReactNode
  endElement?: React.ReactNode
  onClose?: VoidFunction
  closable?: boolean
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  function Tag(props, ref) {
    const {
      startElement,
      endElement,
      onClose,
      closable = !!onClose,
      children,
      ...rest
    } = props

    return (
      <ChakraTag.Root ref={ref} {...rest}>
        {startElement && (
          <ChakraTag.StartElement>{startElement}</ChakraTag.StartElement>
        )}
        <ChakraTag.Label>{children}</ChakraTag.Label>
        {endElement && (
          <ChakraTag.EndElement>{endElement}</ChakraTag.EndElement>
        )}
        {closable && (
          <ChakraTag.EndElement>
            <ChakraTag.CloseTrigger onClick={onClose} />
          </ChakraTag.EndElement>
        )}
      </ChakraTag.Root>
    )
  },
)
```

If you want to automatically add the closed component to your project, run the command:

```
npx @chakra-ui/cli snippet add tag
```

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`size`

`'md'`

`'sm' | 'md' | 'lg' | 'xl'`

The size of the component

`variant`

`'surface'`

`'subtle' | 'solid' | 'outline' | 'surface'`

The variant of the component

[

Previous

Table



](/docs/components/table)[

Next

Textarea



](/docs/components/textarea)