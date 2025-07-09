# Stack

Stack
=====

Used to layout its children in a vertical or horizontal stack.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/stack)

[Usage](#usage)
---------------

By default, Stack applies `flex-direction: column` and `gap: 8px` to its children.

```
import { HStack, Stack, VStack } from "@chakra-ui/react"
```

```
<Stack>
  <div />
  <div />
</Stack>
```

[Examples](#examples)
---------------------

### [Horizontal](#horizontal)

Use the `direction` prop to change the direction of the stack.

### [HStack](#hstack)

Alternatively, you can use the `HStack` to create a horizontal stack and align its children horizontally.

### [VStack](#vstack)

Use the `VStack` to create a vertical stack and align its children vertically.

### [Separator](#separator)

Use the `separator` prop to add a separator between the stack items.

### [Responsive Direction](#responsive-direction)

Use the `direction` prop to change the direction of the stack responsively.

[

Previous

SimpleGrid



](/docs/components/simple-grid)[

Next

Wrap



](/docs/components/wrap)