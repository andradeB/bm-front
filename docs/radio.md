# Radio

Radio
=====

Used to select one option from several options

[Storybook](https://storybook.chakra-ui.com/?path=/story/components-radio--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/radio-group.ts)[Ark](https://ark-ui.com/react/docs/components/radio-group)

[Usage](#usage)
---------------

```
import { RadioGroup } from "@chakra-ui/react"
```

```
<RadioGroup.Root>
  <RadioGroup.Item>
    <RadioGroup.ItemHiddenInput />
    <RadioGroup.ItemIndicator />
    <RadioGroup.ItemText />
  </RadioGroup.Item>
</RadioGroup.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Examples](#examples)
---------------------

### [Controlled](#controlled)

Pass the `value` and `onValueChange` prop to the `RadioGroup.Root` component to control the selected radio button.

### [Colors](#colors)

Pass the `colorPalette` prop to the `RadioGroup.Root` component to change the color scheme of the component.

### [Sizes](#sizes)

Pass the `size` prop to the `RadioGroup.Root` component to change the size of the radio component.

### [Variants](#variants)

Pass the `variant` prop to the `RadioGroup.Root` component to change the appearance of the radio component.

### [Disabled](#disabled)

Pass the `disabled` prop to the `RadioGroup.Item` component to make the radio disabled.

### [Hook Form](#hook-form)

Use the `Controller` component from `react-hook-form` to control the radio group withing a form

### [Closed Component](#closed-component)

Here's how to setup the Radio for a closed component composition.

```
import { RadioGroup as ChakraRadioGroup } from "@chakra-ui/react"
import * as React from "react"

export interface RadioProps extends ChakraRadioGroup.ItemProps {
  rootRef?: React.RefObject<HTMLDivElement | null>
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  function Radio(props, ref) {
    const { children, inputProps, rootRef, ...rest } = props
    return (
      <ChakraRadioGroup.Item ref={rootRef} {...rest}>
        <ChakraRadioGroup.ItemHiddenInput ref={ref} {...inputProps} />
        <ChakraRadioGroup.ItemIndicator />
        {children && (
          <ChakraRadioGroup.ItemText>{children}</ChakraRadioGroup.ItemText>
        )}
      </ChakraRadioGroup.Item>
    )
  },
)

export const RadioGroup = ChakraRadioGroup.Root
```

If you want to automatically add the closed component to your project, run the command:

```
npx @chakra-ui/cli snippet add radio
```

Here's how to use the it

```
<RadioGroup>
  <Radio />
</RadioGroup>
```

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`variant`

`'solid'`

`'outline' | 'subtle' | 'solid'`

The variant of the component

`size`

`'md'`

`'xs' | 'sm' | 'md' | 'lg'`

The size of the component

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`defaultValue`

`string`

The initial value of the checked radio when rendered. Use when you don't need to control the value of the radio group.

`disabled`

`boolean`

If \`true\`, the radio group will be disabled

`form`

`string`

The associate form of the underlying input.

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ root: string label: string indicator: string item(value: string): string itemLabel(value: string): string itemControl(value: string): string itemHiddenInput(value: string): string }>`

The ids of the elements in the radio. Useful for composition.

`name`

`string`

The name of the input fields in the radio (Useful for form submission).

`onValueChange`

`(details: ValueChangeDetails) => void`

Function called once a radio is checked

`orientation`

`'horizontal' | 'vertical'`

Orientation of the radio group

`readOnly`

`boolean`

Whether the checkbox is read-only

`value`

`string`

The controlled value of the radio group

[

Previous

Radio Card



](/docs/components/radio-card)[

Next

Rating



](/docs/components/rating)