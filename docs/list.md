# List

List
====

Used to display a list of items

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/list)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-list--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/list.ts)

[Usage](#usage)
---------------

```
import { List } from "@chakra-ui/react"
```

```
<List.Root>
  <List.Item>Item 1</List.Item>
  <List.Item>Item 2</List.Item>
</List.Root>
```

[Examples](#examples)
---------------------

### [Ordered](#ordered)

Pass the `as="ol"` prop to create an ordered list

### [Icon](#icon)

Use the `List.Indicator` component to add an icon to the list

### [Nested](#nested)

Here's an example of a nested list

### [Marker Style](#marker-style)

Use the `_marker` prop to style the marker of the list

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

`'marker'`

`'marker' | 'plain'`

The variant of the component

`align`

`'center' | 'start' | 'end'`

The align of the component

[

Previous

Link Overlay



](/docs/components/link-overlay)[

Next

Mark



](/docs/components/mark)