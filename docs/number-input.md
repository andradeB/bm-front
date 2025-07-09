# Number Input

Number Input
============

Used to enter a number, and increment or decrement the value using stepper buttons.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/number-input)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-numberinput--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/number-input.ts)[Ark](https://ark-ui.com/react/docs/components/number-input)

[Usage](#usage)
---------------

```
import { NumberInput } from "@chakra-ui/react"
```

```
<NumberInput.Root>
  <NumberInput.Label />
  <NumberInput.ValueText />
  <NumberInput.Control>
    <NumberInput.IncrementTrigger />
    <NumberInput.DecrementTrigger />
  </NumberInput.Control>
  <NumberInput.Scrubber />
  <NumberInput.Input />
</NumberInput.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Shortcuts](#shortcuts)
-----------------------

The `NumberInput` component provides a set of shortcuts for common use cases

### [NumberInputControl](#numberinputcontrol)

This component renders the `NumberInput.IncrementTrigger` and `NumberInput.DecrementTrigger` within it by default.

Writing this:

```
<NumberInput.Control />
```

is shorthand for writing this if you don't need to customize the triggers:

```
<NumberInput.Control>
  <NumberInput.IncrementTrigger />
  <NumberInput.DecrementTrigger />
</NumberInput.Control>
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Pass the `size` prop to the `NumberInput.Root` component to change the size of the number input.

### [Formatting](#formatting)

Pass the `formatOptions` prop to the `NumberInput.Root` component to format the number input value. The value of this maps to `Intl.NumberFormatOptions` and is applied based on the current locale.

### [Min and Max](#min-and-max)

Pass the `min` and `max` props to the `NumberInput.Root` component to set the minimum and maximum values of the number input.

If value entered is less than `min` or greater than `max`, the value will be clamped to the nearest boundary on blur, or enter key press.

### [Step](#step)

Pass the `step` prop to the `NumberInput.Root` component to change the increment or decrement interval of the number input.

### [Controlled](#controlled)

Pass the `value` and `onValueChange` props to the `NumberInput.Root` component to control the value of the number input.

### [Mobile Stepper](#mobile-stepper)

Here's an example of how to compose the number input as a mobile stepper.

### [Mouse Wheel](#mouse-wheel)

Pass the `allowMouseWheel` prop to the `NumberInput.Root` component to enable or disable the mouse wheel to change

### [Disabled](#disabled)

Pass the `disabled` prop to the `NumberInput.Root` component to disable the number input.

### [Invalid](#invalid)

Use the `Field` component and the `invalid` prop to indicate that the number input is invalid.

### [Helper Text](#helper-text)

Compose the `Field` and `Field.HelperText` components to add helper text to the number input.

### [Element](#element)

Here's an example of how to compose the number input with the input group component to add an element on either the left or right.

### [Scrubber](#scrubber)

Use the `NumberInput.Scrubber` component to make the number input supports scrubber interactions.

### [Hook Form](#hook-form)

Here is an example of how to use the `NumberInput` component with `react-hook-form`.

### [Closed Component](#closed-component)

Here's how to setup the Number Input for a closed component composition.

```
import { NumberInput as ChakraNumberInput } from "@chakra-ui/react"
import * as React from "react"

export interface NumberInputProps extends ChakraNumberInput.RootProps {}

export const NumberInputRoot = React.forwardRef<
  HTMLDivElement,
  NumberInputProps
>(function NumberInput(props, ref) {
  const { children, ...rest } = props
  return (
    <ChakraNumberInput.Root ref={ref} variant="outline" {...rest}>
      {children}
      <ChakraNumberInput.Control>
        <ChakraNumberInput.IncrementTrigger />
        <ChakraNumberInput.DecrementTrigger />
      </ChakraNumberInput.Control>
    </ChakraNumberInput.Root>
  )
})

export const NumberInputField = ChakraNumberInput.Input
export const NumberInputScrubber = ChakraNumberInput.Scrubber
export const NumberInputLabel = ChakraNumberInput.Label
```

If you want to automatically add the closed component to your project, run the command:

```
npx @chakra-ui/cli snippet add number-input
```

Here's how to use the it

```
<NumberInputRoot>
  <NumberInputField />
</NumberInputRoot>
```

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`allowOverflow`

`true`

`boolean`

Whether to allow the value overflow the min/max range

`clampValueOnBlur`

`true`

`boolean`

Whether to clamp the value when the input loses focus (blur)

`focusInputOnChange`

`true`

`boolean`

Whether to focus input when the value changes

`inputMode`

`'\'decimal\''`

`InputMode`

Hints at the type of data that might be entered by the user. It also determines the type of keyboard shown to the user on mobile devices

`locale`

`'\'en-US\''`

`string`

The current locale. Based on the BCP 47 definition.

`max`

`'Number.MAX_SAFE_INTEGER'`

`number`

The maximum value of the number input

`min`

`'Number.MIN_SAFE_INTEGER'`

`number`

The minimum value of the number input

`pattern`

`'\'[0-9]*(.[0-9]+)?\''`

`string`

The pattern used to check the <input> element's value against

`spinOnPress`

`true`

`boolean`

Whether to spin the value when the increment/decrement button is pressed

`step`

`'1'`

`number`

The amount to increment or decrement the value by

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`size`

`'md'`

`'xs' | 'sm' | 'md' | 'lg'`

The size of the component

`variant`

`'outline'`

`'outline' | 'subtle' | 'flushed'`

The variant of the component

`allowMouseWheel`

`boolean`

Whether to allow mouse wheel to change the value

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`defaultValue`

`string`

The initial value of the input when rendered. Use when you don't need to control the value of the input.

`disabled`

`boolean`

Whether the number input is disabled.

`form`

`string`

The associate form of the input element.

`formatOptions`

`NumberFormatOptions`

The options to pass to the \`Intl.NumberFormat\` constructor

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ root: string label: string input: string incrementTrigger: string decrementTrigger: string scrubber: string }>`

The ids of the elements in the number input. Useful for composition.

`invalid`

`boolean`

Whether the number input value is invalid.

`name`

`string`

The name attribute of the number input. Useful for form submission.

`onFocusChange`

`(details: FocusChangeDetails) => void`

Function invoked when the number input is focused

`onValueChange`

`(details: ValueChangeDetails) => void`

Function invoked when the value changes

`onValueInvalid`

`(details: ValueInvalidDetails) => void`

Function invoked when the value overflows or underflows the min/max range

`readOnly`

`boolean`

Whether the number input is readonly

`required`

`boolean`

Whether the number input is required

`translations`

`IntlTranslations`

Specifies the localized strings that identifies the accessibility elements and their states

`value`

`string`

The controlled value of the input

[

Previous

Menu



](/docs/components/menu)[

Next

Pagination



](/docs/components/pagination)