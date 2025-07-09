# Segmented Control

Segmented Control
=================

Used to pick one choice from a linear set of options

[Storybook](https://storybook.chakra-ui.com/?path=/story/components-segmented-control--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/segment-group.ts)[Ark](https://ark-ui.com/react/docs/components/segment-group)

[Usage](#usage)
---------------

```
import { SegmentGroup } from "@chakra-ui/react"
```

```
<SegmentGroup.Root>
  <SegmentGroup.Indicator />
  <SegmentGroup.Item>
    <SegmentGroup.ItemText />
    <SegmentGroup.ItemHiddenInput />
  </SegmentGroup.Item>
</SegmentGroup.Root>
```

[Shortcuts](#shortcuts)
-----------------------

The `SegmentGroup` component also provides a set of shortcuts for common use cases.

### [SegmentGroupItems](#segmentgroupitems)

The `SegmentGroupItems` shortcut renders a list of items based on the `items` prop.

This works:

```
<>
  {items.map((item) => (
    <SegmentGroup.Item key={item.value} value={item.value}>
      <SegmentGroup.ItemText>{item.label}</SegmentGroup.ItemText>
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  ))}
</>
```

This might be more concise, if you don't need to customize the items:

```
<SegmentGroup.Items items={items} />
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the segmented control.

### [Controlled](#controlled)

Use the `value` and `onValueChange` props to control the selected item.

### [Hook Form](#hook-form)

Here's an example of how to use the `SegmentedControl` with `react-hook-form`.

### [Vertical](#vertical)

By default, the segmented control is horizontal. Set the `orientation` prop to `vertical` to change the orientation of the segmented control.

### [Disabled](#disabled)

Use the `disabled` prop to disable the segmented control.

### [Disabled Item](#disabled-item)

Use the `disabled` prop on the item to disable it.

### [Icon](#icon)

Render the `label` as a `ReactNode` to render an icon.

### [Card](#card)

Here's an example of how to use the `SegmentedControl` within a `Card`.

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

`size`

`'md'`

`'xs' | 'sm' | 'md' | 'lg'`

The size of the component

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`defaultValue`

`string`

The initial value of the checked radio when rendered. Use when you don't need to control the value of the radio group.

`disabled`

`boolean`

If \`true\`, the radio group will be disabled

`form`

`string`

The associate form of the underlying input.

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ root: string label: string indicator: string item(value: string): string itemLabel(value: string): string itemControl(value: string): string itemHiddenInput(value: string): string }>`

The ids of the elements in the radio. Useful for composition.

`name`

`string`

The name of the input fields in the radio (Useful for form submission).

`onValueChange`

`(details: ValueChangeDetails) => void`

Function called once a radio is checked

`orientation`

`'horizontal' | 'vertical'`

Orientation of the radio group

`readOnly`

`boolean`

Whether the checkbox is read-only

`value`

`string`

The controlled value of the radio group

`as`

`React.ElementType`

The underlying element to render.

`unstyled`

`boolean`

Whether to remove the component's style.

[

Previous

Rating



](/docs/components/rating)[

Next

Select (Native)



](/docs/components/native-select)