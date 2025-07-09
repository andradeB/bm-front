# Table

Table
=====

Used to display data in a tabular format.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/table)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-table--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/table.ts)

[Usage](#usage)
---------------

```
import { Table } from "@chakra-ui/react"
```

```
<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeader />
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell />
    </Table.Row>
  </Table.Body>
  <Table.Footer>
    <Table.Row>
      <Table.Cell />
    </Table.Row>
  </Table.Footer>
</Table.Root>
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the table.

### [Variants](#variants)

Use the `variant` prop to change the appearance of the table.

### [Striped](#striped)

Use the `striped` prop to add zebra-stripes to the table.

### [Column Border](#column-border)

Use the `showColumnBorder` prop to add borders between columns.

### [Overflow](#overflow)

Render the `Table.ScrollArea` component to enable horizontal scrolling.

### [Sticky Header](#sticky-header)

Use the `stickyHeader` prop to make the table header sticky.

### [Highlight on Hover](#highlight-on-hover)

Use the `interactive` prop to highlight rows on hover.

### [Pagination](#pagination)

Here's an example of how to compose a table with pagination.

### [Action Bar](#action-bar)

Here's an example of how to compose a table with an action bar and checkboxes. This is useful for showing actions for selected table rows.

### [Column Group](#column-group)

Use the `Table.ColumnGroup` component to distribute the column widths using the html `colgroup` element.

The only prop that works for this component is `htmlWidth`

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`variant`

`'line'`

`'line' | 'outline'`

The variant of the component

`size`

`'md'`

`'sm' | 'md' | 'lg'`

The size of the component

`interactive`

`'true' | 'false'`

The interactive of the component

`stickyHeader`

`'true' | 'false'`

The stickyHeader of the component

`striped`

`'true' | 'false'`

The striped of the component

`showColumnBorder`

`'true' | 'false'`

The showColumnBorder of the component

`native`

`boolean | undefined`

If \`true\`, the table will style its descendants with nested selectors

`as`

`React.ElementType`

The underlying element to render.

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`unstyled`

`boolean`

Whether to remove the component's style.

[

Previous

Tabs



](/docs/components/tabs)[

Next

Tag



](/docs/components/tag)