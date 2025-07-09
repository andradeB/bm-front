# Toggle Tip

Toggle Tip
==========

Looks like a tooltip, but works like a popover.

[Setup](#setup)
---------------

For ease of use, create a closed component composition for the `ToggleTip` component.

```
import {
  Popover as ChakraPopover,
  IconButton,
  type IconButtonProps,
  Portal,
} from "@chakra-ui/react"
import * as React from "react"
import { HiOutlineInformationCircle } from "react-icons/hi"

export interface ToggleTipProps extends ChakraPopover.RootProps {
  showArrow?: boolean
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
  content?: React.ReactNode
}

export const ToggleTip = React.forwardRef<HTMLDivElement, ToggleTipProps>(
  function ToggleTip(props, ref) {
    const {
      showArrow,
      children,
      portalled = true,
      content,
      portalRef,
      ...rest
    } = props

    return (
      <ChakraPopover.Root
        {...rest}
        positioning={{ ...rest.positioning, gutter: 4 }}
      >
        <ChakraPopover.Trigger asChild>{children}</ChakraPopover.Trigger>
        <Portal disabled={!portalled} container={portalRef}>
          <ChakraPopover.Positioner>
            <ChakraPopover.Content
              width="auto"
              px="2"
              py="1"
              textStyle="xs"
              rounded="sm"
              ref={ref}
            >
              {showArrow && (
                <ChakraPopover.Arrow>
                  <ChakraPopover.ArrowTip />
                </ChakraPopover.Arrow>
              )}
              {content}
            </ChakraPopover.Content>
          </ChakraPopover.Positioner>
        </Portal>
      </ChakraPopover.Root>
    )
  },
)

export interface InfoTipProps extends Partial<ToggleTipProps> {
  buttonProps?: IconButtonProps | undefined
}

export const InfoTip = React.forwardRef<HTMLDivElement, InfoTipProps>(
  function InfoTip(props, ref) {
    const { children, buttonProps, ...rest } = props
    return (
      <ToggleTip content={children} {...rest} ref={ref}>
        <IconButton
          variant="ghost"
          aria-label="info"
          size="2xs"
          colorPalette="gray"
          {...buttonProps}
        >
          <HiOutlineInformationCircle />
        </IconButton>
      </ToggleTip>
    )
  },
)
```

Alternatively, you can add it to your project using the following command.

```
npx @chakra-ui/cli snippet add toggle-tip
```

The snippet includes a closed component composition for the `Popover` component.

[Usage](#usage)
---------------

```
import { InfoTip, ToggleTip } from "@/components/ui/toggle-tip"
```

```
<ToggleTip content="...">
  <button />
</ToggleTip>
```

[Examples](#examples)
---------------------

### [Info Tip](#info-tip)

Use the `InfoTip` component to display an info tip. This component renders an icon button with an info icon by default.

Useful for landing pages to display additional information about a feature.

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

Toast



](/docs/components/toast)[

Next

Tooltip



](/docs/components/tooltip)