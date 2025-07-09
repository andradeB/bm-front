# Bleed

Bleed
=====

Used to break an element from the boundaries of its container

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/bleed)[Storybook](https://storybook.chakra-ui.com/?path=/story/layout-bleed--basic)

[Usage](#usage)
---------------

```
import { Bleed } from "@chakra-ui/react"
```

```
<Bleed>
  <div />
</Bleed>
```

[Examples](#examples)
---------------------

### [Vertical](#vertical)

Use the `block` prop to make the element bleed vertically.

### [Specific Direction](#specific-direction)

Use the `inlineStart`, `inlineEnd`, `blockStart`, and `blockEnd` props to make the element bleed in a specific direction.

[Props](#props)
---------------

Prop

Default

Type

`inline`

`SystemStyleObject['marginInline'] | undefined`

The negative margin on the x-axis

`block`

`SystemStyleObject['marginBlock'] | undefined`

The negative margin on the y-axis

`inlineStart`

`SystemStyleObject['marginInlineStart'] | undefined`

The negative margin on the inline-start axis

`inlineEnd`

`SystemStyleObject['marginInlineEnd'] | undefined`

The negative margin on the inline-end axis

`blockStart`

`SystemStyleObject['marginBlockStart'] | undefined`

The negative margin on the block-start axis

`blockEnd`

`SystemStyleObject['marginBlockEnd'] | undefined`

The negative margin on the block-end axis

[

Previous

Aspect Ratio



](/docs/components/aspect-ratio)[

Next

Box



](/docs/components/box)