# Wrap

Wrap
====

Used to add space between elements and wraps automatically if there isn't enough space.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/wrap)

[Usage](#usage)
---------------

By default, `Wrap` applies `display: flex`, `flex-wrap: wrap`, and `gap: 8px` to its children.

```
import { Wrap, WrapItem } from "@chakra-ui/react"
```

```
<Wrap>
  <div />
  <div />
</Wrap>
```

[Examples](#examples)
---------------------

### [Gap or Spacing](#gap-or-spacing)

Pass the `gap` prop to apply a consistent spacing between each child, even if it wraps.

### [Alignment](#alignment)

Pass the `align` prop to change the alignment of the child along the cross axis.

### [Justify](#justify)

Pass the `justify` prop to change the alignment of the child along the main axis.

### [Row and Column Gap](#row-and-column-gap)

Pass the `rowGap` and `columnGap` props to apply a consistent spacing between the rows and columns.

### [Responsive](#responsive)

Use responsive values for the `gap`, `rowGap`, and `columnGap` props to apply responsive spacing between each child.

[

Previous

Stack



](/docs/components/stack)[

Next

Blockquote



](/docs/components/blockquote)