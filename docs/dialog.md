# Dialog

Dialog
======

Used to display a dialog prompt

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/dialog)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-dialog--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/dialog.ts)[Ark](https://ark-ui.com/react/docs/components/dialog)

[Usage](#usage)
---------------

```
import { Dialog } from "@chakra-ui/react"
```

```
<Dialog.Root>
  <Dialog.Trigger />
  <Dialog.Backdrop />
  <Dialog.Positioner>
    <Dialog.Content>
      <Dialog.CloseTrigger />
      <Dialog.Header>
        <Dialog.Title />
      </Dialog.Header>
      <Dialog.Body />
      <Dialog.Footer />
    </Dialog.Content>
  </Dialog.Positioner>
</Dialog.Root>
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the dialog component.

### [Cover](#cover)

Use the `size="cover"` prop to make the dialog component cover the entire screen while revealing a small portion of the page behind.

### [Fullscreen](#fullscreen)

Use the `size="full"` prop to make the dialog component take up the entire screen.

### [Placement](#placement)

Use the `placement` prop to change the placement of the dialog component.

### [Controlled](#controlled)

Use the `open` and `onOpenChange` prop to control the visibility of the dialog component.

### [Store](#store)

An alternative way to control the dialog is to use the `RootProvider` component and the `useDialog` store hook.

This way you can access the dialog state and methods from outside the dialog.

### [Context](#context)

Use the `DialogContext` component to access the dialog state and methods from outside the dialog.

### [Initial Focus](#initial-focus)

Use the `initialFocusEl` prop to set the initial focus of the dialog component.

### [Inside Scroll](#inside-scroll)

Use the `scrollBehavior=inside` prop to change the scroll behavior of the dialog when its content overflows.

### [Outside Scroll](#outside-scroll)

Use the `scrollBehavior=outside` prop to change the scroll behavior of the dialog when its content overflows.

### [Motion Preset](#motion-preset)

Use the `motionPreset` prop to change the animation of the dialog component.

### [Alert Dialog](#alert-dialog)

Set the `role: "alertdialog"` prop to change the dialog component to an alert dialog.

### [Close Button Outside](#close-button-outside)

Here's an example of how to customize the `Dialog.CloseTrigger` component to position the close button outside the dialog component.

### [Non-Modal Dialog](#non-modal-dialog)

We don't recommend using a non-modal dialog due to the accessibility concerns they present. In event you need it, here's what you can do:

*   set the `modal` prop to `false`
*   set `pointerEvents` to `none` on the `Dialog.Positioner` component
*   (optional)set the `closeOnInteractOutside` prop to `false`

### [DataList](#datalist)

Here's an example of how to compose the dialog component with the `DataList` component.

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`closeOnEscape`

`true`

`boolean`

Whether to close the dialog when the escape key is pressed

`closeOnInteractOutside`

`true`

`boolean`

Whether to close the dialog when the outside is clicked

`defaultOpen`

`false`

`boolean`

The initial open state of the dialog when rendered. Use when you don't need to control the open state of the dialog.

`lazyMount`

`false`

`boolean`

Whether to enable lazy mounting

`modal`

`true`

`boolean`

Whether to prevent pointer interaction outside the element and hide all content below it

`preventScroll`

`true`

`boolean`

Whether to prevent scrolling behind the dialog when it's opened

`role`

`'\'dialog\''`

`'dialog' | 'alertdialog'`

The dialog's role

`skipAnimationOnMount`

`false`

`boolean`

Whether to allow the initial presence animation.

`trapFocus`

`true`

`boolean`

Whether to trap focus inside the dialog when it's opened

`unmountOnExit`

`false`

`boolean`

Whether to unmount on exit.

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`placement`

`'top'`

`'center' | 'top' | 'bottom'`

The placement of the component

`scrollBehavior`

`'outside'`

`'inside' | 'outside'`

The scrollBehavior of the component

`size`

`'md'`

`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'cover' | 'full'`

The size of the component

`motionPreset`

`'scale'`

`'scale' | 'slide-in-bottom' | 'slide-in-top' | 'slide-in-left' | 'slide-in-right' | 'none'`

The motionPreset of the component

`aria-label`

`string`

Human readable label for the dialog, in event the dialog title is not rendered

`finalFocusEl`

`() => MaybeElement`

Element to receive focus when the dialog is closed

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ trigger: string positioner: string backdrop: string content: string closeTrigger: string title: string description: string }>`

The ids of the elements in the dialog. Useful for composition.

`immediate`

`boolean`

Whether to synchronize the present change immediately or defer it to the next frame

`initialFocusEl`

`() => MaybeElement`

Element to receive focus when the dialog is opened

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

Function to call when the dialog's open state changes

`onPointerDownOutside`

`(event: PointerDownOutsideEvent) => void`

Function called when the pointer is pressed down outside the component

`open`

`boolean`

The controlled open state of the dialog

`persistentElements`

`(() => Element | null)[]`

Returns the persistent elements that: - should not have pointer-events disabled - should not trigger the dismiss event

`present`

`boolean`

Whether the node is present (controlled by the user)

`restoreFocus`

`boolean`

Whether to restore focus to the element that had focus before the dialog was opened

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

Data List



](/docs/components/data-list)[

Next

Drawer



](/docs/components/drawer)