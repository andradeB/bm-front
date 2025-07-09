# Blockquote

Blockquote
==========

Used to quote text content from an external source

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/blockquote)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-blockquote--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/blockquote.ts)

[Usage](#usage)
---------------

```
import { Blockquote } from "@chakra-ui/react"
```

```
<Blockquote.Root>
  <Blockquote.Content cite="https://" />
  <Blockquote.Caption>
    <cite>Uzumaki Naruto</cite>
  </Blockquote.Caption>
</Blockquote.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Examples](#examples)
---------------------

### [With Cite](#with-cite)

To provide reference about the blockquote:

*   pass the `cite` prop to `Blockquote.Content` pointing to the quote url
*   render the `Blockquote.Caption` component to display name of quote author

### [Colors](#colors)

Use the `colorPalette` prop to change the color of the blockquote.

### [Variants](#variants)

Use the `variant` prop to change the visual style of the blockquote.

### [Icon](#icon)

Here's an example of how to compose the `Float` and `BlockquoteIcon` to show an icon on the blockquote. The default icon is a double quote.

Alternatively, you can render a custom icon.

### [Justify](#justify)

Use the `justify` prop to change the alignment of the blockquote.

### [With Avatar](#with-avatar)

Here's an example of how to compose the `Blockquote`, `Avatar` and `Float` components to create a stunning testimonial component.

### [Closed Component](#closed-component)

Here's an example of how to create a closed component composition

```
import { Blockquote as ChakraBlockquote } from "@chakra-ui/react"
import * as React from "react"

export interface BlockquoteProps extends ChakraBlockquote.RootProps {
  cite?: React.ReactNode
  citeUrl?: string
  icon?: React.ReactNode
  showDash?: boolean
}

export const Blockquote = React.forwardRef<HTMLDivElement, BlockquoteProps>(
  function Blockquote(props, ref) {
    const { children, cite, citeUrl, showDash, icon, ...rest } = props

    return (
      <ChakraBlockquote.Root ref={ref} {...rest}>
        {icon}
        <ChakraBlockquote.Content cite={citeUrl}>
          {children}
        </ChakraBlockquote.Content>
        {cite && (
          <ChakraBlockquote.Caption>
            {showDash ? <>&mdash;</> : null} <cite>{cite}</cite>
          </ChakraBlockquote.Caption>
        )}
      </ChakraBlockquote.Root>
    )
  },
)

export const BlockquoteIcon = ChakraBlockquote.Icon
```

If you want to automatically add the closed component to your project, run the command:

```
npx @chakra-ui/cli snippet add blockquote
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

`justify`

`'start'`

`'start' | 'center' | 'end'`

The justify of the component

`variant`

`'subtle'`

`'subtle' | 'solid' | 'plain'`

The variant of the component

[

Previous

Wrap



](/docs/components/wrap)[

Next

Code



](/docs/components/code)