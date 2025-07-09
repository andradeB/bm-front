# Switch

Switch
======

Used to capture a binary state

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/switch)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-switch--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/switch.ts)[Ark](https://ark-ui.com/react/docs/components/switch)

[Usage](#usage)
---------------

```
import { Switch } from "@chakra-ui/react"
```

```
<Switch.Root>
  <Switch.HiddenInput />
  <Switch.Control>
    <Switch.Thumb />
  </Switch.Control>
  <Switch.Label />
</Switch.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Shortcuts](#shortcuts)
-----------------------

The `Switch` component also provides a set of shortcuts for common use cases.

### [SwitchControl](#switchcontrol)

The `Switch.Control` renders the `Switch.Thumb` within it by default.

This works:

```
<Switch.Control>
  <Switch.Thumb />
</Switch.Control>
```

This might be more concise, if you don't need to customize the thumb:

```
<Switch.Control />
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Pass the `size` prop to the `Switch.Root` component to change the size of the switch component.

### [Variants](#variants)

Pass the `variant` prop to the `Switch.Root` component to change the visual style of the switch.

### [Colors](#colors)

Pass the `colorPalette` prop to the `Switch.Root` component to change the color scheme of the component.

### [Controlled](#controlled)

Use the `checked` and `onCheckedChange` prop to control the state of the switch.

### [Hook Form](#hook-form)

Here's an example of integrating the switch with `react-hook-form`.

### [Disabled](#disabled)

Pass the `disabled` prop to the `Switch.Root` component to disable the switch.

### [Invalid](#invalid)

Pass the `invalid` prop to the `Switch.Root` component to indicate an error state for the switch.

### [Tooltip](#tooltip)

Here's an example of how to compose a switch with a tooltip.

### [Track Indicator](#track-indicator)

Use the `Switch.Indicator` component to display different indicators based on the checked state.

### [Thumb Indicator](#thumb-indicator)

Use the `Switch.ThumbIndicator` component to add an icon to the switch thumb.

### [Closed Component](#closed-component)

Here's how to setup the Switch for a closed component composition.

```
import { Switch as ChakraSwitch } from "@chakra-ui/react"
import * as React from "react"

export interface SwitchProps extends ChakraSwitch.RootProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  rootRef?: React.RefObject<HTMLLabelElement | null>
  trackLabel?: { on: React.ReactNode; off: React.ReactNode }
  thumbLabel?: { on: React.ReactNode; off: React.ReactNode }
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  function Switch(props, ref) {
    const { inputProps, children, rootRef, trackLabel, thumbLabel, ...rest } =
      props

    return (
      <ChakraSwitch.Root ref={rootRef} {...rest}>
        <ChakraSwitch.HiddenInput ref={ref} {...inputProps} />
        <ChakraSwitch.Control>
          <ChakraSwitch.Thumb>
            {thumbLabel && (
              <ChakraSwitch.ThumbIndicator fallback={thumbLabel?.off}>
                {thumbLabel?.on}
              </ChakraSwitch.ThumbIndicator>
            )}
          </ChakraSwitch.Thumb>
          {trackLabel && (
            <ChakraSwitch.Indicator fallback={trackLabel.off}>
              {trackLabel.on}
            </ChakraSwitch.Indicator>
          )}
        </ChakraSwitch.Control>
        {children != null && (
          <ChakraSwitch.Label>{children}</ChakraSwitch.Label>
        )}
      </ChakraSwitch.Root>
    )
  },
)
```

If you want to automatically add the closed component to your project, run the command:

```
npx @chakra-ui/cli snippet add switch
```

Here's how to use the it

```
<Switch>Activate Chakra</Switch>
```

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`value`

`'\'on\''`

`string | number`

The value of switch input. Useful for form submission.

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`variant`

`'solid'`

`'solid' | 'raised'`

The variant of the component

`size`

`'md'`

`'xs' | 'sm' | 'md' | 'lg'`

The size of the component

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`checked`

`boolean`

The controlled checked state of the switch

`disabled`

`boolean`

Whether the switch is disabled.

`ids`

`Partial<{ root: string; hiddenInput: string; control: string; label: string; thumb: string }>`

The ids of the elements in the switch. Useful for composition.

`invalid`

`boolean`

If \`true\`, the switch is marked as invalid.

`label`

`string`

Specifies the localized strings that identifies the accessibility elements and their states

`name`

`string`

The name of the input field in a switch (Useful for form submission).

`onCheckedChange`

`(details: CheckedChangeDetails) => void`

Function to call when the switch is clicked.

`readOnly`

`boolean`

Whether the switch is read-only

`required`

`boolean`

If \`true\`, the switch input is marked as required,

`as`

`React.ElementType`

The underlying element to render.

`unstyled`

`boolean`

Whether to remove the component's style.

[

Previous

Steps



](/docs/components/steps)[

Next

Tabs



](/docs/components/tabs)