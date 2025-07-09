# Accordion

Accordion
=========

Used to show and hide sections of related content on a page

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/accordion)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-accordion--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/accordion.ts)[Ark](https://ark-ui.com/react/docs/components/accordion)

[Usage](#usage)
---------------

```
import { Accordion } from "@chakra-ui/react"
```

```
<Accordion.Root>
  <Accordion.Item>
    <Accordion.ItemTrigger>
      <Accordion.ItemIndicator />
    </Accordion.ItemTrigger>
    <Accordion.ItemContent>
      <Accordion.ItemBody />
    </Accordion.ItemContent>
  </Accordion.Item>
</Accordion.Root>
```

[Examples](#examples)
---------------------

### [Controlled](#controlled)

Set the accordion that shows up by default.

### [With Icon](#with-icon)

Here's an example of rendering a custom icon in each accordion item.

### [Expand Multiple Items](#expand-multiple-items)

Use the `multiple` prop to allow multiple items to be expanded at once.

### [Sizes](#sizes)

Use the `size` prop to change the size of the accordion.

### [Variants](#variants)

Use the `variant` prop to change the visual style of the accordion. Values can be either `outline`, `subtle`, `enclosed` or `plain`.

### [Disabled Item](#disabled-item)

Pass the `disabled` prop to any `Accordion.Item` to prevent it from being expanded or collapsed.

### [With Avatar](#with-avatar)

Here's an example of composing an accordion with an avatar.

### [With Subtext](#with-subtext)

Here's an example of adding a subtext to an accordion item.

### [With Actions](#with-actions)

Here's an example of adding actions to an accordion item trigger.

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`collapsible`

`false`

`boolean`

Whether an accordion item can be closed after it has been expanded.

`lazyMount`

`false`

`boolean`

Whether to enable lazy mounting

`multiple`

`false`

`boolean`

Whether multiple accordion items can be expanded at the same time.

`orientation`

`'\'vertical\''`

`'horizontal' | 'vertical'`

The orientation of the accordion items.

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

`'outline' | 'subtle' | 'enclosed' | 'plain'`

The variant of the component

`size`

`'md'`

`'sm' | 'md' | 'lg'`

The size of the component

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`defaultValue`

`string[]`

The initial value of the expanded accordion items. Use when you don't need to control the value of the accordion.

`disabled`

`boolean`

Whether the accordion items are disabled

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ root: string item(value: string): string itemContent(value: string): string itemTrigger(value: string): string }>`

The ids of the elements in the accordion. Useful for composition.

`onFocusChange`

`(details: FocusChangeDetails) => void`

The callback fired when the focused accordion item changes.

`onValueChange`

`(details: ValueChangeDetails) => void`

The callback fired when the state of expanded/collapsed accordion items changes.

`value`

`string[]`

The controlled value of the expanded accordion items.

### [Item](#item)

Prop

Default

Type

`value` \*

`string`

The value of the accordion item.

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`disabled`

`boolean`

Whether the accordion item is disabled.

[

Previous

Text



](/docs/components/text)[

Next

Action Bar



](/docs/components/action-bar)