# Toast

Toast
=====

Used to display a temporary message to the user

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/toast)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-toast--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/toast.ts)[Ark](https://ark-ui.com/react/docs/components/toast)

[Setup](#setup)
---------------

If you don't already have the snippet, run the following command to add the `toaster` snippet

```
npx @chakra-ui/cli snippet add toaster
```

The snippet includes a closed component composition for the `Toast` component.

[Usage](#usage)
---------------

```
import { Toaster, toaster } from "@/components/ui/toaster"
```

First, render the `Toaster` component in your app.

```
<Toaster />
```

Then, create a toast by calling the `toaster` function.

```
toaster.create({
  title: "Toast Title",
  description: "Toast Description",
})
```

[Examples](#examples)
---------------------

### [Closable Toast](#closable-toast)

Set the `closable` prop to `true` to create a closable toast.

### [External Close](#external-close)

Use the `toaster.dismiss` method to close a toast.

*   `toaster.dismiss(id)`: Dismiss a toast by its id.
*   `toaster.dismiss()`: Dismiss all toasts.

### [Types](#types)

Here's an example of each type of toast.

### [With Action](#with-action)

Use the `action` and `actionLabel` prop to add an action to the toast.

When the action trigger is clicked, the toast will be closed.

### [Persistent Toast](#persistent-toast)

Set the `type` prop to `"loading"` to create a persistent toast.

### [Promise](#promise)

Use the `toaster.promise` to create a toast that resolves when the promise is resolved.

Next, you can define the toast options (title, description, etc.) for each state of the promise.

### [Custom Duration](#custom-duration)

Use the `duration` prop to set the duration of the toast.

### [Pause and Play](#pause-and-play)

Use the `pause` and `resume` methods on the `toaster` object to pause and play the toast.

Pausing a toast prevents it from timing out, while resuming it will reenable the timeout using the remaining duration.

### [Lifecycle](#lifecycle)

Use the `onStatusChange` prop on the `toaster` function to listen for changes to the toast's status.

### [Maximum Visible Toasts](#maximum-visible-toasts)

Set the `max` prop on the `createToaster` function to define the maximum number of toasts that can be rendered at any one time. Any extra toasts will be queued and rendered when a toast has been dismissed.

@/components/ui/toaster.tsx

```
const toaster = createToaster({
  max: 3,
})
```

### [Placement](#placement)

Toasts can be displayed on all four corners of a page. We recommend picking one desired position and configure it in the `createToaster` function.

@/components/ui/toaster.tsx

```
const toaster = createToaster({
  placement: "top-end",
})
```

### [Overlapping Toasts](#overlapping-toasts)

By default, toasts are stacked on top of each other. To make the toasts overlap each other, set the `overlap` prop to `true` in the `createToaster` function.

@/components/ui/toaster.tsx

```
const toaster = createToaster({
  placement: "top-end",
  overlap: true,
})
```

### [Offset](#offset)

Set the `offset` prop in the `createToaster` function to offset the toasts from the edges of the screen.

@/components/ui/toaster.tsx

```
const toaster = createToaster({
  offsets: "20px",
})
```

Alternatively, you can use the `offset` prop to set the offset for each edge of the screen.

@/components/ui/toaster.tsx

```
const toaster = createToaster({
  offsets: { left: "20px", top: "20px", right: "20px", bottom: "20px" },
})
```

[

Previous

Timeline



](/docs/components/timeline)[

Next

Toggle Tip



](/docs/components/toggle-tip)