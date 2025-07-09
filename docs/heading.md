# Heading

Heading
=======

Used to render semantic HTML heading elements.

[Usage](#usage)
---------------

```
import { Heading } from "@chakra-ui/react"
```

```
<Heading>I'm a Heading</Heading>
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the heading component.

### [Highlight](#highlight)

Compose the `Heading` component with the `Highlight` component to highlight text.

### [As another element](#as-another-element)

Use the `as` prop to render the heading as another HTML element.

### [Weights](#weights)

Use the `fontWeight` prop to change the weight of the heading component.

### [Composition](#composition)

Use the `Heading` component to compose other components.

[Customization](#customization)
-------------------------------

To override the `fontSize`, we recommend using the `textStyle` prop since it considers the line height and letter spacing as well.

### [Base style](#base-style)

Here's an example of customizing the `Heading` component.

provider.tsx

```
import { createSystem, defineRecipe } from "@chakra-ui/react"
import { defaultConfig } from "@chakra-ui/react"

const headingRecipe = defineRecipe({
  base: {
    fontWeight: "normal",
    textStyle: "4xl",
  },
})

const system = createSystem(defaultConfig, {
  theme: {
    recipes: { heading: headingRecipe },
  },
})
```

### [Custom Size](#custom-size)

Update the `variants.size` property to create a custom size.

provider.tsx

```
import { createSystem, defineRecipe } from "@chakra-ui/react"
import { defaultConfig } from "@chakra-ui/react"

const headingRecipe = defineRecipe({
  variants: {
    size: {
      custom: {
        fontSize: "100px",
        lineHeight: "100px",
        letterSpacing: "-2px",
      },
    },
  },
})

const system = createSystem(defaultConfig, {
  theme: {
    recipes: { heading: headingRecipe },
  },
})
```

Then, use the `custom` variant to create a custom size.

```
<Heading size="custom">I'm a custom size</Heading>
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

`'xl'`

`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'`

The size of the component

[

Previous

Em



](/docs/components/em)[

Next

Highlight



](/docs/components/highlight)