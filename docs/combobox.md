# Combobox

Combobox
========

A versatile input component that combines a text input with a listbox, allowing users to filter a list of options and select single or multiple values.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/combobox)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-combobox--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/combobox.ts)[Ark](https://ark-ui.com/react/docs/components/combobox)

[Usage](#usage)
---------------

```
import { Combobox } from "@chakra-ui/react"
```

```
<Combobox.Root>
  <Combobox.Label />

  <Combobox.Control>
    <Combobox.Input />
    <Combobox.IndicatorGroup>
      <Combobox.ClearTrigger />
      <Combobox.Trigger />
    </Combobox.IndicatorGroup>
  </Combobox.Control>

  <Combobox.Positioner>
    <Combobox.Content>
      <Combobox.Empty />
      <Combobox.Item />

      <Combobox.ItemGroup>
        <Combobox.ItemGroupLabel />
        <Combobox.Item />
      </Combobox.ItemGroup>
    </Combobox.Content>
  </Combobox.Positioner>
</Combobox.Root>
```

To setup combobox, you might need to import the following hooks:

*   `useListCollection`: Used to manage the list of items in the combobox, providing helpful methods for filtering and mutating the list.
    
*   `useFilter`: Used to provide the filtering logic for the combobox based on [`Intl.Collator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) APIs.
    

[Examples](#examples)
---------------------

### [Basic](#basic)

The basic combobox provides a searchable dropdown with single selection.

### [Sizes](#sizes)

Pass the `size` prop to the `Combobox.Root` to change the size of the combobox.

### [Variants](#variants)

Pass the `variant` prop to the `Combobox.Root` to change the appearance of the combobox.

### [Multiple](#multiple)

Pass the `multiple` prop to the `Combobox.Root` to enable multiple selection. This allows users to select multiple items from the list.

When this is set, the combobox will always clear the input value when an item is selected.

### [Async Loading](#async-loading)

Here's an example of loading the `collection` asynchronously as users type, perfect for API-driven search interfaces.

### [Highlight Matching Text](#highlight-matching-text)

Here's an example of composing the `Combobox.Item` and `Highlight` components to highlight matching text in search results.

### [Open on Click](#open-on-click)

Use the `openOnClick` prop to open the combobox when the user clicks on the input.

### [Custom Objects](#custom-objects)

By default, the combobox collection expects an array of objects with `label` and `value` properties. In some cases, you may need to deal with custom objects.

Use the `itemToString` and `itemToValue` props to map the custom object to the required interface.

```
const items = [
  { country: "United States", code: "US", flag: "🇺🇸" },
  { country: "Canada", code: "CA", flag: "🇨🇦" },
  { country: "Australia", code: "AU", flag: "🇦🇺" },
  // ...
]

const { collection } = useListCollection({
  initialItems: items,
  itemToString: (item) => item.country,
  itemToValue: (item) => item.code,
})
```

### [Minimum Characters](#minimum-characters)

Use the `openOnChange` prop to set a minimum number of characters before filtering the list.

```
<Combobox.Root openOnChange={(e) => e.inputValue.length > 2} />
```

### [Field](#field)

Compose the `Combobox` component with the `Field` component to wrap the combobox in a form field. Useful for form layouts.

### [Disabled State](#disabled-state)

Pass the `disabled` prop to the `Combobox.Root` to disable the entire combobox.

### [Disabled Item](#disabled-item)

Disable specific items in the dropdown, add the `disabled` prop to the collection item.

```
const items = [
  { label: "Item 1", value: "item-1", disabled: true },
  { label: "Item 2", value: "item-2" },
]

const { collection } = useListCollection({
  initialItems: items,
  // ...
})
```

### [Input Group](#input-group)

Combine with InputGroup to add icons or other elements.

### [Invalid](#invalid)

Pass the `invalid` prop to the `Combobox.Root` to show the error state.

### [Controlled Value](#controlled-value)

Use the `value` and `onValueChange` props to control the combobox's value programmatically.

### [Store](#store)

An alternative way to control the combobox is to use the `Combobox.RootProvider` component and the `useCombobox` store hook.

```
import { Combobox, useCombobox } from "@chakra-ui/react"

function Demo() {
  const combobox = useCombobox()

  return (
    <Combobox.RootProvider value={combobox}>{/* ... */}</Combobox.RootProvider>
  )
}
```

This way you can access the combobox state and methods from outside the combobox.

### [Controlled Open](#controlled-open)

Use the `open` and `onOpenChange` props to control the combobox's open state programmatically.

### [Limit Large Datasets](#limit-large-datasets)

The recommended way of managing large lists is to use the `limit` property on the `useListCollection` hook. This will limit the number of rendered items in the DOM to improve performance.

### [Virtualization](#virtualization)

Alternatively, you can leverage virtualization from the `@tanstack/react-virtual` package to render large datasets efficiently.

### [Links](#links)

Use the `asChild` prop to render the combobox items as links.

For custom router links, you can customize the `navigate` prop on the `Combobox.Root` component.

Here's an example of using the Tanstack Router.

```
import { Combobox } from "@chakra-ui/react"
import { useNavigate } from "@tanstack/react-router"

function Demo() {
  const navigate = useNavigate()
  return (
    <Combobox.Root
      navigate={({ href }) => {
        navigate({ to: href })
      }}
    >
      {/* ... */}
    </Combobox.Root>
  )
}
```

### [Rehydrate Value](#rehydrate-value)

In some cases, where a combobox has a `defaultValue` but the collection is not loaded yet, here's an example of how to rehydrate the value and populate the input value.

### [Custom Item](#custom-item)

Customize the appearance of items in the dropdown with your own components.

### [Custom Filter](#custom-filter)

Here's an example of a custom filter that matches multiple properties of an item.

### [Custom Animation](#custom-animation)

To customize the animation of the combobox, pass the `_open` and `_closed` prop to the `Combobox.Content` component.

### [Popover](#popover)

To use the combobox within a popover component, avoid wrapping the `Combobox.Positioner` within the `Portal`.

```
-<Portal>
  <Combobox.Positioner>
    <Combobox.Content>
      {/* ... */}
    </Combobox.Content>
  </Combobox.Positioner>
-</Portal>
```

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`collection` \*

`ListCollection<T>`

The collection of items

`composite`

`true`

`boolean`

Whether the combobox is a composed with other composite widgets like tabs

`defaultInputValue`

`'\'\''`

`string`

The initial value of the combobox's input when rendered. Use when you don't need to control the value of the combobox's input.

`defaultValue`

`'[]'`

`string[]`

The initial value of the combobox's selected items when rendered. Use when you don't need to control the value of the combobox's selected items.

`inputBehavior`

`'\'none\''`

`'none' | 'autohighlight' | 'autocomplete'`

Defines the auto-completion behavior of the combobox. - \`autohighlight\`: The first focused item is highlighted as the user types - \`autocomplete\`: Navigating the listbox with the arrow keys selects the item and the input is updated

`lazyMount`

`false`

`boolean`

Whether to enable lazy mounting

`loopFocus`

`true`

`boolean`

Whether to loop the keyboard navigation through the items

`openOnChange`

`true`

`boolean | ((details: InputValueChangeDetails) => boolean)`

Whether to show the combobox when the input value changes

`openOnClick`

`false`

`boolean`

Whether to open the combobox popup on initial click on the input

`openOnKeyPress`

`true`

`boolean`

Whether to open the combobox on arrow key press

`positioning`

`'{ placement: \'bottom-start\' }'`

`PositioningOptions`

The positioning options to dynamically position the menu

`selectionBehavior`

`'\'replace\''`

`'replace' | 'clear' | 'preserve'`

The behavior of the combobox input when an item is selected - \`replace\`: The selected item string is set as the input value - \`clear\`: The input value is cleared - \`preserve\`: The input value is preserved

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

`'outline' | 'subtle' | 'flushed'`

The variant of the component

`size`

`'md'`

`'xs' | 'sm' | 'md' | 'lg'`

The size of the component

`allowCustomValue`

`boolean`

Whether to allow typing custom values in the input

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`autoFocus`

`boolean`

Whether to autofocus the input on mount

`closeOnSelect`

`boolean`

Whether to close the combobox when an item is selected.

`defaultHighlightedValue`

`string`

The initial highlighted value of the combobox when rendered. Use when you don't need to control the highlighted value of the combobox.

`defaultOpen`

`boolean`

The initial open state of the combobox when rendered. Use when you don't need to control the open state of the combobox.

`disabled`

`boolean`

Whether the combobox is disabled

`disableLayer`

`boolean`

Whether to disable registering this a dismissable layer

`form`

`string`

The associate form of the combobox.

`highlightedValue`

`string`

The controlled highlighted value of the combobox

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ root: string label: string control: string input: string content: string trigger: string clearTrigger: string item(id: string, index?: number | undefined): string positioner: string itemGroup(id: string | number): string itemGroupLabel(id: string | number): string }>`

The ids of the elements in the combobox. Useful for composition.

`immediate`

`boolean`

Whether to synchronize the present change immediately or defer it to the next frame

`inputValue`

`string`

The controlled value of the combobox's input

`invalid`

`boolean`

Whether the combobox is invalid

`multiple`

`boolean`

Whether to allow multiple selection. \*\*Good to know:\*\* When \`multiple\` is \`true\`, the \`selectionBehavior\` is automatically set to \`clear\`. It is recommended to render the selected items in a separate container.

`name`

`string`

The \`name\` attribute of the combobox's input. Useful for form submission

`navigate`

`(details: NavigateDetails) => void`

Function to navigate to the selected item

`onExitComplete`

`VoidFunction`

Function called when the animation ends in the closed state

`onFocusOutside`

`(event: FocusOutsideEvent) => void`

Function called when the focus is moved outside the component

`onHighlightChange`

`(details: HighlightChangeDetails<T>) => void`

Function called when an item is highlighted using the pointer or keyboard navigation.

`onInputValueChange`

`(details: InputValueChangeDetails) => void`

Function called when the input's value changes

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

Function called when a new item is selected

`open`

`boolean`

The controlled open state of the combobox

`placeholder`

`string`

The placeholder text of the combobox's input

`present`

`boolean`

Whether the node is present (controlled by the user)

`readOnly`

`boolean`

Whether the combobox is readonly. This puts the combobox in a "non-editable" mode but the user can still interact with it

`required`

`boolean`

Whether the combobox is required

`scrollToIndexFn`

`(details: ScrollToIndexDetails) => void`

Function to scroll to a specific index

`translations`

`IntlTranslations`

Specifies the localized strings that identifies the accessibility elements and their states

`value`

`string[]`

The controlled value of the combobox's selected items

### [Item](#item)

Prop

Default

Type

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`item`

`any`

The item to render

`persistFocus`

`boolean`

Whether hovering outside should clear the highlighted state

[

Previous

Collapsible



](/docs/components/collapsible)[

Next

Color Picker



](/docs/components/color-picker)