# Tooltip

Tooltip
=======

Used to display additional information when a user hovers over an element.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/tooltip)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-tooltip--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/tooltip.ts)[Ark](https://ark-ui.com/react/docs/components/tooltip)

[Setup](#setup)
---------------

For ease of use, create a closed component composition for the `Tooltip` component.

```
import { Tooltip as ChakraTooltip, Portal } from "@chakra-ui/react"
import * as React from "react"

export interface TooltipProps extends ChakraTooltip.RootProps {
  showArrow?: boolean
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
  content: React.ReactNode
  contentProps?: ChakraTooltip.ContentProps
  disabled?: boolean
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const {
      showArrow,
      children,
      disabled,
      portalled = true,
      content,
      contentProps,
      portalRef,
      ...rest
    } = props

    if (disabled) return children

    return (
      <ChakraTooltip.Root {...rest}>
        <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
        <Portal disabled={!portalled} container={portalRef}>
          <ChakraTooltip.Positioner>
            <ChakraTooltip.Content ref={ref} {...contentProps}>
              {showArrow && (
                <ChakraTooltip.Arrow>
                  <ChakraTooltip.ArrowTip />
                </ChakraTooltip.Arrow>
              )}
              {content}
            </ChakraTooltip.Content>
          </ChakraTooltip.Positioner>
        </Portal>
      </ChakraTooltip.Root>
    )
  },
)
```

Alternatively, you can add it to your project using the following command.

```
npx @chakra-ui/cli snippet add tooltip
```

[Usage](#usage)
---------------

```
import { Tooltip } from "@/components/ui/tooltip"
```

```
<Tooltip content="...">
  <button />
</Tooltip>
```

[Examples](#examples)
---------------------

### [Arrow](#arrow)

Use the `showArrow` prop to show an arrow on the tooltip.

### [Placement](#placement)

Use the `positioning.placement` prop to change the position of the tooltip.

### [Offset](#offset)

Use the `positioning.offset` prop to change the offset of the tooltip.

### [Delay](#delay)

Use the `openDelay` and `closeDelay` prop to change the delay of the tooltip.

### [Custom Background](#custom-background)

Use the `--tooltip-bg` CSS variable to change the background color of the tooltip.

### [Controlled](#controlled)

Use the `open` and `onOpenChange` prop to control the visibility of the tooltip.

### [Store](#store)

An alternative way to control the tooltip is to use the `RootProvider` component and the `useTooltip` store hook.

This way you can access the tooltip state and methods from outside the tooltip.

### [Interactive](#interactive)

Use the `interactive` prop to keep the tooltip open when interacting with its content.

### [Disabled](#disabled)

Use the `disabled` prop to disable the tooltip. When disabled, the tooltip will not be shown.

### [With Avatar](#with-avatar)

Here's an example of how to use the `Tooltip` component with an `Avatar` component.

### [With Checkbox](#with-checkbox)

Here's an example of how to use the `Tooltip` component with a `Checkbox` component.

### [With MenuItem](#with-menuitem)

Here's an example of how to use the `Tooltip` with a `MenuItem` component.

### [With MenuTrigger](#with-menutrigger)

Here's an example of how to use the `Tooltip` with a `MenuTrigger` component.

### [With Switch](#with-switch)

Here's an example of how to wrap `Tooltip` around a `Switch` component.

### [With Tabs](#with-tabs)

Here's an example of how to wrap `Tooltip` around a `Tabs` component.

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`closeDelay`

`'500'`

`number`

The close delay of the tooltip.

`closeOnClick`

`true`

`boolean`

Whether the tooltip should close on click

`closeOnEscape`

`true`

`boolean`

Whether to close the tooltip when the Escape key is pressed.

`closeOnPointerDown`

`true`

`boolean`

Whether to close the tooltip on pointerdown.

`closeOnScroll`

`true`

`boolean`

Whether the tooltip should close on scroll

`interactive`

`false`

`boolean`

Whether the tooltip's content is interactive. In this mode, the tooltip will remain open when user hovers over the content.

`lazyMount`

`false`

`boolean`

Whether to enable lazy mounting

`openDelay`

`'1000'`

`number`

The open delay of the tooltip.

`skipAnimationOnMount`

`false`

`boolean`

Whether to allow the initial presence animation.

`unmountOnExit`

`false`

`boolean`

Whether to unmount on exit.

`aria-label`

`string`

Custom label for the tooltip.

`defaultOpen`

`boolean`

The initial open state of the tooltip when rendered. Use when you don't need to control the open state of the tooltip.

`disabled`

`boolean`

Whether the tooltip is disabled

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ trigger: string; content: string; arrow: string; positioner: string }>`

The ids of the elements in the tooltip. Useful for composition.

`immediate`

`boolean`

Whether to synchronize the present change immediately or defer it to the next frame

`onExitComplete`

`VoidFunction`

Function called when the animation ends in the closed state

`onOpenChange`

`(details: OpenChangeDetails) => void`

Function called when the tooltip is opened.

`open`

`boolean`

The controlled open state of the tooltip

`positioning`

`PositioningOptions`

The user provided options used to position the popover content

`present`

`boolean`

Whether the node is present (controlled by the user)

[

Previous

Toggle Tip



](/docs/components/toggle-tip)[

Next

Tree View



](/docs/components/tree-view)