# Overlay Manager

Overlay Manager
===============

Used for programmatically controlling overlay components

[Usage](#usage)
---------------

The `createOverlay` function creates a new overlay component that can be programmatically controlled.

```
import { createOverlay } from "@chakra-ui/react"

const dialog = createOverlay<DialogProps>((props) => {
  const { title, description, content, ...rest } = props
  return (
    <Dialog.Root {...rest}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            {title && (
              <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
              </Dialog.Header>
            )}
            <Dialog.Body spaceY="4">
              {description && (
                <Dialog.Description>{description}</Dialog.Description>
              )}
              {content}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
})
```

Then render the `Viewport` component to see the overlay.

```
<dialog.Viewport />
```

[Examples](#examples)
---------------------

### [Dialog](#dialog)

Here's an example of a dialog component that can be programmatically controlled.

### [Drawer](#drawer)

Here's an example of a drawer component that can be programmatically controlled.

### [Update](#update)

Use the `.update` method to update the props of an overlay.

### [Return Value](#return-value)

Awaiting the result of the `.open()` method returns the value passed to the `.close()` method.

**Bonus:** You can also use the `.waitForExit()` method to wait for the exit animation to complete before opening a new overlay.

[API](#api)
-----------

### [Props](#props)

Props that are injected into the overlay component by the `createOverlay` function:

*   `open`: Whether the overlay is currently open
*   `onOpenChange`: Callback fired when the overlay's open state changes
*   `onExitComplete`: Callback fired when the overlay's exit animation completes

### [Methods](#methods)

### [`Viewport`](#viewport)

The root component that renders all active overlays.

### [`open(id, props)`](#openid-props)

Opens a new overlay with the given id and props. Returns a promise that resolves with any value.

### [`close(id, value)`](#closeid-value)

Closes the overlay with the given id and returns a promise that resolves when closed.

### [`update(id, props)`](#updateid-props)

Updates the props of the overlay with the given id.

### [`remove(id)`](#removeid)

Removes the overlay with the given id.

### [`removeAll()`](#removeall)

Removes all overlays.

### [`get(id)`](#getid)

Gets the props of the overlay with the given id.

### [`getSnapshot()`](#getsnapshot)

Gets the current snapshot of the overlays.

### [`waitForExit(id)`](#waitforexitid)

Waits for the exit animation to complete for the overlay with the given id.

[

Previous

LocaleProvider



](/docs/components/locale-provider)[

Next

Presence



](/docs/components/presence)