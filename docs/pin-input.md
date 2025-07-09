# Pin Input

Pin Input
=========

Used to capture a pin code or otp from the user

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/pin-input)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-pin-input--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/pin-input.ts)[Ark](https://ark-ui.com/react/docs/components/pin-input)

[Usage](#usage)
---------------

```
import { PinInput } from "@chakra-ui/react"
```

```
<PinInput.Root>
  <PinInput.HiddenInput />
  <PinInput.Control>
    <PinInput.Input />
  </PinInput.Control>
</PinInput.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Pass the `size` prop to the `PinInput.Root` component to change the size of the pin input component

### [One time code](#one-time-code)

Pass the `otp` prop to the `PinInput.Root` component to make the pin input component behave like a one-time code input. This helps improve the user experience when entering OTP codes

### [Mask](#mask)

Pass the `mask` prop to the `PinInput.Root` component to obscure the entered pin code

### [Placeholder](#placeholder)

Pass the `placeholder` prop to the `PinInPut.Root` component to add a placeholder to the pin input

### [Field](#field)

Here's an example of how to compose the `Field` and the `PinInput` components

### [Hook Form](#hook-form)

Here's an example of how to compose the `Field` and the `PinInput` components with `react-hook-form`

### [Controlled](#controlled)

Pass the `value` and `onValueChange` props to the `PinInPut.Root` component to control the value of the pin input

### [Store](#store)

An alternative way to control the pin input is to use the `RootProvider` component and the `usePinInput` store hook.

This way you can access the pin input state and methods from outside the component.

### [Attached](#attached)

Pass the `attached` prop to the `PinInput.Root` component to attach the pin input to the input field

### [Alphanumeric](#alphanumeric)

Pass the `type` prop to the `PinInput.Root` component to allow the user to enter alphanumeric characters. Values can be either `alphanumeric`, `numeric`, or `alphabetic`

### [Closed Component](#closed-component)

Here's how to setup the Pin input for a closed component composition.

```
import { PinInput as ChakraPinInput, Group } from "@chakra-ui/react"
import * as React from "react"

export interface PinInputProps extends ChakraPinInput.RootProps {
  rootRef?: React.RefObject<HTMLDivElement | null>
  count?: number
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  attached?: boolean
}

export const PinInput = React.forwardRef<HTMLInputElement, PinInputProps>(
  function PinInput(props, ref) {
    const { count = 4, inputProps, rootRef, attached, ...rest } = props
    return (
      <ChakraPinInput.Root ref={rootRef} {...rest}>
        <ChakraPinInput.HiddenInput ref={ref} {...inputProps} />
        <ChakraPinInput.Control>
          <Group attached={attached}>
            {Array.from({ length: count }).map((_, index) => (
              <ChakraPinInput.Input key={index} index={index} />
            ))}
          </Group>
        </ChakraPinInput.Control>
      </ChakraPinInput.Root>
    )
  },
)
```

#### [Usage](#usage-1)

```
<PinInput mask />
```

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`placeholder`

`'\'○\''`

`string`

The placeholder text for the input

`type`

`'\'numeric\''`

`'numeric' | 'alphabetic' | 'alphanumeric'`

The type of value the pin-input should allow

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`size`

`'md'`

`'2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'`

The size of the component

`variant`

`'outline'`

`'outline' | 'subtle' | 'flushed'`

The variant of the component

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`autoFocus`

`boolean`

Whether to auto-focus the first input.

`blurOnComplete`

`boolean`

Whether to blur the input when the value is complete

`count`

`number`

The number of inputs to render to improve SSR aria attributes. This will be required in next major version.

`defaultValue`

`string[]`

The initial value of the the pin input when rendered. Use when you don't need to control the value of the pin input.

`disabled`

`boolean`

Whether the inputs are disabled

`form`

`string`

The associate form of the underlying input element.

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ root: string hiddenInput: string label: string control: string input(id: string): string }>`

The ids of the elements in the pin input. Useful for composition.

`invalid`

`boolean`

Whether the pin input is in the invalid state

`mask`

`boolean`

If \`true\`, the input's value will be masked just like \`type=password\`

`name`

`string`

The name of the input element. Useful for form submission.

`onValueChange`

`(details: ValueChangeDetails) => void`

Function called on input change

`onValueComplete`

`(details: ValueChangeDetails) => void`

Function called when all inputs have valid values

`onValueInvalid`

`(details: ValueInvalidDetails) => void`

Function called when an invalid value is entered

`otp`

`boolean`

If \`true\`, the pin input component signals to its fields that they should use \`autocomplete="one-time-code"\`.

`pattern`

`string`

The regular expression that the user-entered input value is checked against.

`readOnly`

`boolean`

Whether the pin input is in the valid state

`required`

`boolean`

Whether the pin input is required

`selectOnFocus`

`boolean`

Whether to select input value when input is focused

`translations`

`IntlTranslations`

Specifies the localized strings that identifies the accessibility elements and their states

`value`

`string[]`

The controlled value of the the pin input.

`attached`

`'true' | 'false'`

The attached of the component

[

Previous

Password Input



](/docs/components/password-input)[

Next

Popover



](/docs/components/popover)