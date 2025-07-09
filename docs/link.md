# Link

Link
====

Used to provide accessible navigation

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/link)[Storybook](https://storybook.chakra-ui.com/?path=/story/typography-link--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/link.ts)

[Usage](#usage)
---------------

```
import { Link } from "@chakra-ui/react"
```

```
<Link href="...">Click here</Link>
```

[Examples](#examples)
---------------------

### [Variants](#variants)

Use the `variant` prop to change the appearance of the `Link` component

### [Within Text](#within-text)

Use `Link` within a text to create a hyperlink

### [External](#external)

Add an external link icon to the `Link` component

### [Routing Library](#routing-library)

Use the `asChild` prop to compose `Link` with framework links like (Next.js)

```
import { Link as ChakraLink } from "@chakra-ui/react"
import NextLink from "next/link"

const Demo = () => {
  return (
    <ChakraLink asChild>
      <NextLink href="/about">Click here</NextLink>
    </ChakraLink>
  )
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

`variant`

`'plain'`

`'underline' | 'plain'`

The variant of the component

[

Previous

Kbd



](/docs/components/kbd)[

Next

Link Overlay



](/docs/components/link-overlay)