# Popover

Popover
=======

Used to show detailed information inside a pop-up

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/popover)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-popover--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/popover.ts)[Ark](https://ark-ui.com/react/docs/components/popover)

[Usage](#usage)
---------------

```
import { Popover } from "@chakra-ui/react"
```

```
<Popover.Root>
  <Popover.Trigger />
  <Popover.Positioner>
    <Popover.Content>
      <Popover.CloseTrigger />
      <Popover.Arrow>
        <Popover.ArrowTip />
      </Popover.Arrow>
      <Popover.Body>
        <Popover.Title />
      </Popover.Body>
    </Popover.Content>
  </Popover.Positioner>
</Popover.Root>
```

[Shortcuts](#shortcuts)
-----------------------

The `Popover` provides a shortcuts for common use cases.

### [Arrow](#arrow)

The `Popover.Arrow` renders the `Popover.ArrowTip` component within in by default.

This works:

```
<Popover.Arrow>
  <Popover.ArrowTip />
</Popover.Arrow>
```

This might be more concise, if you don't need to customize the arrow tip.

```
<Popover.Arrow />
```

[Examples](#examples)
---------------------

### [Controlled](#controlled)

Use the `open` and `onOpenChange` to control the visibility of the popover.

### [Sizes](#sizes)

Use the `size` prop to change the size of the popover component.

### [Lazy Mount](#lazy-mount)

Use the `lazyMounted` and/or `unmountOnExit` prop to defer the mounting of the popover content until it's opened.

### [Placement](#placement)

Use the `positioning.placement` prop to configure the underlying `floating-ui` positioning logic.

### [Offset](#offset)

Use the `positioning.offset` prop to adjust the position of the popover content.

### [Same Width](#same-width)

Use the `positioning.sameWidth` prop to make the popover content the same width as the trigger.

### [Nested Popover](#nested-popover)

When nesting overlay elements like popover, select, menu, inside of the popover, set `portalled=false` on them.

Here's an example of a popover inside another popover.

### [Initial Focus](#initial-focus)

Use the `initialFocusEl` prop to set the initial focus of the popover content.

### [Form](#form)

Here's an example of a popover with a form inside.

### [Custom Background](#custom-background)

Use the `--popover-bg` CSS variable to change the background color of the popover content and its arrow.

### [Within Dialog](#within-dialog)

To use the `Popover` within a `Dialog`, you need to avoid portalling the `Popover.Positioner` to the document's body.

```
-<Portal>
  <Popover.Positioner>
    <Popover.Content>
      {/* ... */}
    </Popover.Content>
  </Popover.Positioner>
-</Portal>
```

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`autoFocus`

`true`

`boolean`

Whether to automatically set focus on the first focusable content within the popover when opened.

`closeOnEscape`

`true`

`boolean`

Whether to close the popover when the escape key is pressed.

`closeOnInteractOutside`

`true`

`boolean`

Whether to close the popover when the user clicks outside of the popover.

`lazyMount`

`false`

`boolean`

Whether to enable lazy mounting

`modal`

`false`

`boolean`

Whether the popover should be modal. When set to \`true\`: - interaction with outside elements will be disabled - only popover content will be visible to screen readers - scrolling is blocked - focus is trapped within the popover

`portalled`

`true`

`boolean`

Whether the popover is portalled. This will proxy the tabbing behavior regardless of the DOM position of the popover content.

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

The initial open state of the popover when rendered. Use when you don't need to control the open state of the popover.

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ anchor: string trigger: string content: string title: string description: string closeTrigger: string positioner: string arrow: string }>`

The ids of the elements in the popover. Useful for composition.

`immediate`

`boolean`

Whether to synchronize the present change immediately or defer it to the next frame

`initialFocusEl`

`() => HTMLElement | null`

The element to focus on when the popover is opened.

`onEscapeKeyDown`

`(event: KeyboardEvent) => void`

Function called when the escape key is pressed

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

Function invoked when the popover opens or closes

`onPointerDownOutside`

`(event: PointerDownOutsideEvent) => void`

Function called when the pointer is pressed down outside the component

`open`

`boolean`

The controlled open state of the popover

`persistentElements`

`(() => Element | null)[]`

Returns the persistent elements that: - should not have pointer-events disabled - should not trigger the dismiss event

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

Pin Input



](/docs/components/pin-input)[

Next

Progress Circle



](/docs/components/progress-circle)