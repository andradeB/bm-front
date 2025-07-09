# Hover Card

Hover Card
==========

Used to display content when hovering over an element

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/hover-card)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-hover-card--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/hover-card.ts)[Ark](https://ark-ui.com/react/docs/components/hover-card)

[Usage](#usage)
---------------

```
import { HoverCard } from "@chakra-ui/react"
```

```
<HoverCard.Root>
  <HoverCard.Trigger />
  <HoverCard.Positioner>
    <HoverCard.Content>
      <HoverCard.Arrow>
        <HoverCard.ArrowTip />
      </HoverCard.Arrow>
    </HoverCard.Content>
  </HoverCard.Positioner>
</HoverCard.Root>
```

[Shortcuts](#shortcuts)
-----------------------

The `HoverCard` provides a shortcuts for common use cases.

### [Arrow](#arrow)

The `HoverCard.Arrow` renders the `HoverCard.ArrowTip` component within in by default.

This works:

```
<HoverCard.Arrow>
  <HoverCard.ArrowTip />
</HoverCard.Arrow>
```

This might be more concise, if you don't need to customize the arrow tip.

```
<HoverCard.Arrow />
```

[Examples](#examples)
---------------------

### [Controlled](#controlled)

Use the `open` and `onOpenChange` to control the visibility of the hover card.

### [Delays](#delays)

Control the open and close delays using the `openDelay` and `closeDelay` props.

### [Placement](#placement)

Use the `positioning.placement` prop to configure the underlying `floating-ui` positioning logic.

### [Within Dialog](#within-dialog)

To use the `HoverCard` within a `Dialog`, you need to avoid portalling the `HoverCard.Positioner` to the document's body.

```
-<Portal>
  <HoverCard.Positioner>
    <HoverCard.Content>
      {/* ... */}
    </HoverCard.Content>
  </HoverCard.Positioner>
-</Portal>
```

[Accessibility](#accessibility)
-------------------------------

HoverCard should be used solely for supplementary information that is not essential for understanding the context.

It is inaccessible to screen readers and cannot be activated via keyboard, so avoid placing crucial content within it.

[Props](#props)
---------------

Prop

Default

Type

`closeDelay`

`'300'`

`number`

The duration from when the mouse leaves the trigger or content until the hover card closes.

`lazyMount`

`false`

`boolean`

Whether to enable lazy mounting

`openDelay`

`'700'`

`number`

The duration from when the mouse enters the trigger until the hover card opens.

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

`size`

`'md'`

`'xs' | 'sm' | 'md' | 'lg'`

The size of the component

`defaultOpen`

`boolean`

The initial open state of the hover card when rendered. Use when you don't need to control the open state of the hover card.

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ trigger: string; content: string; positioner: string; arrow: string }>`

The ids of the elements in the popover. Useful for composition.

`immediate`

`boolean`

Whether to synchronize the present change immediately or defer it to the next frame

`onExitComplete`

`VoidFunction`

Function called when the animation ends in the closed state

`onFocusOutside`

`(event: FocusOutsideEvent) => void`

Function called when the focus is moved outside the component

`onInteractOutside`

`(event: InteractOutsideEvent) => void`

Function called when an interaction happens outside the component

`onOpenChange`

`(details: OpenChangeDetails) => void`

Function called when the hover card opens or closes.

`onPointerDownOutside`

`(event: PointerDownOutsideEvent) => void`

Function called when the pointer is pressed down outside the component

`open`

`boolean`

The controlled open state of the hover card

`positioning`

`PositioningOptions`

The user provided options used to position the popover content

`present`

`boolean`

Whether the node is present (controlled by the user)

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

File Upload



](/docs/components/file-upload)[

Next

Icon



](/docs/components/icon)