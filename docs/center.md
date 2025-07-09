# Center

Center
======

Used to center its child within itself.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/center)[Storybook](https://storybook.chakra-ui.com/?path=/story/layout-center--basic)

[Usage](#usage)
---------------

```
import { AbsoluteCenter, Center, Circle, Square } from "@chakra-ui/react"
```

```
<Center bg="tomato" h="100px" color="white">
  This is the Center
</Center>
```

[Examples](#examples)
---------------------

### [Icon](#icon)

Center can be used to create frames around icons or numbers.

### [Center with Inline](#center-with-inline)

Use the `inline` to change the display to `inline-flex`.

### [Square](#square)

`Square` centers its child given the `size` (width and height).

### [Circle](#circle)

`Circle` centers its child given the `size` and creates a circle around it.

### [AbsoluteCenter](#absolutecenter)

`AbsoluteCenter` centers relative to its parent using the `position: absolute` strategy. Pass the `axis` prop to change the axis of alignment.

[Props](#props)
---------------

### [AbsoluteCenter](#absolutecenter-1)

Prop

Default

Type

`axis`

`'horizontal' | 'vertical' | 'both' | undefined`

[

Previous

Box



](/docs/components/box)[

Next

Container



](/docs/components/container)