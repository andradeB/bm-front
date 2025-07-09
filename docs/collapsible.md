# Collapsible

Collapsible
===========

Used to expand and collapse additional content.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/collapsible)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-collapsible--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/collapsible.ts)[Ark](https://ark-ui.com/react/docs/components/collapsible)

[Usage](#usage)
---------------

```
import { Collapsible } from "@chakra-ui/react"
```

```
<Collapsible.Root>
  <Collapsible.Trigger />
  <Collapsible.Content />
</Collapsible.Root>
```

[Examples](#examples)
---------------------

### [Lazy Mounted](#lazy-mounted)

Use the `unmountOnExit` prop to make the content unmount when collapsed.

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`lazyMount`

`false`

`boolean`

Whether to enable lazy mounting

`unmountOnExit`

`false`

`boolean`

Whether to unmount on exit.

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`defaultOpen`

`boolean`

The initial open state of the collapsible when rendered. Use when you don't need to control the open state of the collapsible.

`disabled`

`boolean`

Whether the collapsible is disabled.

`ids`

`Partial<{ root: string; content: string; trigger: string }>`

The ids of the elements in the collapsible. Useful for composition.

`onExitComplete`

`VoidFunction`

The callback invoked when the exit animation completes.

`onOpenChange`

`(details: OpenChangeDetails) => void`

The callback invoked when the open state changes.

`open`

`boolean`

The controlled open state of the collapsible.

[

Previous

Close Button



](/docs/components/close-button)[

Next

Combobox



](/docs/components/combobox)