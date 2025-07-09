# Action Bar

Action Bar
==========

Used to display a bottom action bar with a set of actions

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/action-bar)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-action-bar--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/action-bar.ts)

[Usage](#usage)
---------------

The action bar is designed to be controlled by table or checkbox selections. It provides a set of actions that can be performed on the selected items.

```
import { ActionBar } from "@chakra-ui/react"
```

```
<ActionBar.Root>
  <ActionBar.Positioner>
    <ActionBar.Content>
      <ActionBar.CloseTrigger />
      <ActionBar.SelectionTrigger />
      <ActionBar.Separator />
    </ActionBar.Content>
  </ActionBar.Positioner>
</ActionBar.Root>
```

[Examples](#examples)
---------------------

### [Close Trigger](#close-trigger)

Render the `ActionBar.CloseTrigger` to close the action bar, and pass the `onOpenChange` handler to control the visibility of the action bar.

The `open` and `onOpenChange` props control the visibility of the action bar.

### [Within Dialog](#within-dialog)

Here's an example of composing the `ActionBar` and the `Dialog` to perform a delete action on a set of selected items.

Press the `Delete projects` button to open the dialog.

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

Accordion



](/docs/components/accordion)[

Next

Alert



](/docs/components/alert)