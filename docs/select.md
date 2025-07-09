# Select

Select
======

Used to pick a value from predefined options.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/select)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-select--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/select.ts)[Ark](https://ark-ui.com/react/docs/components/select)

[Usage](#usage)
---------------

```
import { Select } from "@chakra-ui/react"
```

```
<Select.Root>
  <Select.HiddenSelect />
  <Select.Label />

  <Select.Control>
    <Select.Trigger>
      <Select.ValueText />
    </Select.Trigger>
    <Select.IndicatorGroup>
      <Select.Indicator />
      <Select.ClearTrigger />
    </Select.IndicatorGroup>
  </Select.Control>

  <Select.Positioner>
    <Select.Content>
      <Select.Item />

      <Select.ItemGroup>
        <Select.ItemGroupLabel />
        <Select.Item />
      </Select.ItemGroup>
    </Select.Content>
  </Select.Positioner>
</Select.Root>
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the select component.

### [Variants](#variants)

Use the `variant` prop to change the appearance of the select component.

### [Option Group](#option-group)

Use the `Select.ItemGroup` component to group select options.

### [Controlled](#controlled)

Use the `value` and `onValueChange` props to control the select component.

### [Async Loading](#async-loading)

Here's an example of how to populate the select `collection` from a remote source.

### [Hook Form](#hook-form)

Here's an example of how to use the `Select` component with `react-hook-form`.

### [Disabled](#disabled)

Use the `disabled` prop to disable the select component.

### [Invalid](#invalid)

Here's an example of how to compose the `Select` component with the `Field` component to display an error state.

### [Multiple](#multiple)

Use the `multiple` prop to allow multiple selections.

### [Positioning](#positioning)

Use the `positioning` prop to control the underlying `floating-ui` options of the select component.

### [Clear Trigger](#clear-trigger)

Render the `Select.ClearTrigger` component to show a clear button. Clicking the clear button will clear the selected value.

### [Overflow](#overflow)

When the options are too many, the options will overflow the container due to the `maxHeight` set.

### [Item Description](#item-description)

Here's an example of how to render a description for each item.

### [Within Popover](#within-popover)

Here's an example of how to use the `Select` within a `Popover` component.

### [Within Dialog](#within-dialog)

To use the `Select` within a `Dialog`, you need to avoid portalling the `Select.Positioner` to the document's body.

```
-<Portal>
  <Select.Positioner>
    <Select.Content>
      {/* ... */}
    </Select.Content>
  </Select.Positioner>
-</Portal>
```

### [Avatar Select](#avatar-select)

Here's an example of how to compose the `Select` and the `Avatar`.

### [Country Select](#country-select)

Here's an example of how to use the `Select` component to select a country.

### [Icon Button](#icon-button)

Here's an example of how to trigger the select component with an `IconButton`.

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`collection` \*

`ListCollection<T>`

The collection of items

`closeOnSelect`

`true`

`boolean`

Whether the select should close after an item is selected

`composite`

`true`

`boolean`

Whether the select is a composed with other composite widgets like tabs or combobox

`lazyMount`

`false`

`boolean`

Whether to enable lazy mounting

`loopFocus`

`false`

`boolean`

Whether to loop the keyboard navigation through the options

`skipAnimationOnMount`

`false`

`boolean`

Whether to allow the initial presence animation.

`unmountOnExit`

`false`

`boolean`

Whether to unmount on exit.

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`variant`

`'outline'`

`'outline' | 'subtle'`

The variant of the component

`size`

`'md'`

`'xs' | 'sm' | 'md' | 'lg'`

The size of the component

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`defaultHighlightedValue`

`string`

The initial value of the highlighted item when opened. Use when you don't need to control the highlighted value of the select.

`defaultOpen`

`boolean`

Whether the select's open state is controlled by the user

`defaultValue`

`string[]`

The initial default value of the select when rendered. Use when you don't need to control the value of the select.

`deselectable`

`boolean`

Whether the value can be cleared by clicking the selected item. \*\*Note:\*\* this is only applicable for single selection

`disabled`

`boolean`

Whether the select is disabled

`form`

`string`

The associate form of the underlying select.

`highlightedValue`

`string`

The controlled key of the highlighted item

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ root: string content: string control: string trigger: string clearTrigger: string label: string hiddenSelect: string positioner: string item(id: string | number): string itemGroup(id: string | number): string itemGroupLabel(id: string | number): string }>`

The ids of the elements in the select. Useful for composition.

`immediate`

`boolean`

Whether to synchronize the present change immediately or defer it to the next frame

`invalid`

`boolean`

Whether the select is invalid

`multiple`

`boolean`

Whether to allow multiple selection

`name`

`string`

The \`name\` attribute of the underlying select.

`onExitComplete`

`VoidFunction`

Function called when the animation ends in the closed state

`onFocusOutside`

`(event: FocusOutsideEvent) => void`

Function called when the focus is moved outside the component

`onHighlightChange`

`(details: HighlightChangeDetails<T>) => void`

The callback fired when the highlighted item changes.

`onInteractOutside`

`(event: InteractOutsideEvent) => void`

Function called when an interaction happens outside the component

`onOpenChange`

`(details: OpenChangeDetails) => void`

Function called when the popup is opened

`onPointerDownOutside`

`(event: PointerDownOutsideEvent) => void`

Function called when the pointer is pressed down outside the component

`onSelect`

`(details: SelectionDetails) => void`

Function called when an item is selected

`onValueChange`

`(details: ValueChangeDetails<T>) => void`

The callback fired when the selected item changes.

`open`

`boolean`

Whether the select menu is open

`positioning`

`PositioningOptions`

The positioning options of the menu.

`present`

`boolean`

Whether the node is present (controlled by the user)

`readOnly`

`boolean`

Whether the select is read-only

`required`

`boolean`

Whether the select is required

`scrollToIndexFn`

`(details: ScrollToIndexDetails) => void`

Function to scroll to a specific index

`value`

`string[]`

The controlled keys of the selected items

`as`

`React.ElementType`

The underlying element to render.

`unstyled`

`boolean`

Whether to remove the component's style.

[

Previous

Select (Native)



](/docs/components/native-select)[

Next

Separator



](/docs/components/separator)