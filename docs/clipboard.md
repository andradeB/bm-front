# Clipboard

Clipboard
=========

Used to copy text to the clipboard

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/clipboard)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-clipboard--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/clipboard.ts)[Ark](https://ark-ui.com/react/docs/components/clipboard)

[Usage](#usage)
---------------

```
import { Clipboard } from "@chakra-ui/react"
```

```
<Clipboard.Root>
  <Clipboard.Trigger>
    <Clipboard.CopyText />
    <Clipboard.Indicator />
  </Clipboard.Trigger>
  <Clipboard.Input />
</Clipboard.Root>
```

[Examples](#examples)
---------------------

### [Button](#button)

Use the `Clipboard.Trigger` component to create a copy button.

### [Input](#input)

Use the `Clipboard.Input` component to create a copy input.

### [Timeout](#timeout)

Use the `timeout` prop to change the duration of the copy message.

### [Link Appearance](#link-appearance)

Here's an example that combines the `Clipboard.Trigger` and `Clipboard.ValueText` components to create a link appearance.

### [Store](#store)

Alternatively, you can use the `useClipboard` hook to create a custom component.

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`timeout`

`'3000'`

`number`

The timeout for the copy operation

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`defaultValue`

`string`

The initial value to be copied to the clipboard when rendered. Use when you don't need to control the value of the clipboard.

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ root: string; input: string; label: string }>`

The ids of the elements in the clipboard. Useful for composition.

`onStatusChange`

`(details: CopyStatusDetails) => void`

The function to be called when the value is copied to the clipboard

`onValueChange`

`(details: ValueChangeDetails) => void`

The function to be called when the value changes

`value`

`string`

The controlled value of the clipboard

[

Previous

Checkbox



](/docs/components/checkbox)[

Next

Close Button



](/docs/components/close-button)