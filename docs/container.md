# Container

Container
=========

Used to constrain a content's width to the current breakpoint, while keeping it fluid.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/container)[Storybook](https://storybook.chakra-ui.com/?path=/story/layout-container--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/container.ts)

[Usage](#usage)
---------------

The default `maxWidth` is `8xl` which maps to `90rem (1440px)`.

```
import { Container } from "@chakra-ui/react"
```

```
<Container>
  <div />
</Container>
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `maxWidth` prop to change the size of the container.

### [Fluid](#fluid)

Use the `fluid` prop to make the container stretch to fill the width of its parent.

[Props](#props)
---------------

Prop

Default

Type

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`centerContent`

`'true' | 'false'`

The centerContent of the component

`fluid`

`'true' | 'false'`

The fluid of the component

[

Previous

Center



](/docs/components/center)[

Next

Flex



](/docs/components/flex)