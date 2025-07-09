# Float

Float
=====

Used to anchor an element to the edge of a container.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/float)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-float--basic)

[Usage](#usage)
---------------

Float requires a parent element with `position: relative` style applied.

```
import { Box, Float } from "@chakra-ui/react"
```

```
<Box position="relative">
  <Float>
    <div />
  </Float>
</Box>
```

[Examples](#examples)
---------------------

### [Placement](#placement)

Use the `placement` prop to position the element along the edges of the container.

### [Offset X](#offset-x)

Use the `offsetX` prop to offset the element along the x-axis.

### [Offset Y](#offset-y)

Use the `offsetY` prop to offset the element along the y-axis.

### [Offset](#offset)

Use the `offset` prop to offset the element along both axes.

### [Avatar](#avatar)

Here's an example of composing a `Float` component with an `Avatar` component.

[Props](#props)
---------------

Prop

Default

Type

`placement`

`'top-end'`

`| ConditionalValue< | 'bottom-end' | 'bottom-start' | 'top-end' | 'top-start' | 'bottom-center' | 'top-center' | 'middle-center' | 'middle-end' | 'middle-start' > | undefined`

The placement of the indicator

`offsetX`

`SystemStyleObject['left'] | undefined`

The x offset of the indicator

`offsetY`

`SystemStyleObject['top'] | undefined`

The y offset of the indicator

`offset`

`SystemStyleObject['top'] | undefined`

The x and y offset of the indicator

[

Previous

Flex



](/docs/components/flex)[

Next

Grid



](/docs/components/grid)