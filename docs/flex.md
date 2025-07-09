# Flex

Flex
====

Used to manage flex layouts

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/flex)

[Usage](#usage)
---------------

```
import { Flex } from "@chakra-ui/react"
```

```
<Flex>
  <div />
  <div />
</Flex>
```

[Examples](#examples)
---------------------

### [Direction](#direction)

Use the `direction` or `flexDirection` prop to change the direction of the flex

### [Align](#align)

Use the `align` or `alignItems` prop to align the children along the cross axis.

### [Justify](#justify)

Use the `justify` or `justifyContent` prop to align the children along the main axis.

### [Order](#order)

Use the `order` prop to change the order of the children.

### [Auto Margin](#auto-margin)

Apply margin to a flex item to push it away from its siblings.

### [Wrap](#wrap)

Use the `wrap` or `flexWrap` prop to wrap the children when they overflow the parent.

[Props](#props)
---------------

Prop

Default

Type

`align`

`SystemStyleObject['alignItems'] | undefined`

`justify`

`SystemStyleObject['justifyContent'] | undefined`

`wrap`

`SystemStyleObject['flexWrap'] | undefined`

`direction`

`SystemStyleObject['flexDirection'] | undefined`

`basis`

`SystemStyleObject['flexBasis'] | undefined`

`grow`

`SystemStyleObject['flexGrow'] | undefined`

`shrink`

`SystemStyleObject['flexShrink'] | undefined`

`inline`

`boolean | undefined`

[

Previous

Container



](/docs/components/container)[

Next

Float



](/docs/components/float)