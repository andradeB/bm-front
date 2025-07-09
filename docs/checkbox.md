# Checkbox

Checkbox
========

Used in forms when a user needs to select multiple values from several options

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/checkbox)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-checkbox--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/checkbox.ts)[Ark](https://ark-ui.com/react/docs/components/checkbox)

[Usage](#usage)
---------------

```
import { Checkbox } from "@chakra-ui/react"
```

```
<Checkbox.Root>
  <Checkbox.HiddenInput />
  <Checkbox.Control>
    <Checkbox.Indicator />
  </Checkbox.Control>
  <Checkbox.Label />
</Checkbox.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Shortcuts](#shortcuts)
-----------------------

The `Checkbox` component also provides a set of shortcuts for common use cases.

### [CheckboxControl](#checkboxcontrol)

This component renders the `Checkbox.Indicator` within it by default.

This works:

```
<Checkbox.Control>
  <Checkbox.Indicator />
</Checkbox.Control>
```

This might be more concise, if you don't need to customize the indicator:

```
<Checkbox.Control />
```

[Examples](#examples)
---------------------

### [Variants](#variants)

Pass the `variant` prop to the `Checkbox.Root` component to change the visual style of the checkbox.

### [Colors](#colors)

Pass the `colorPalette` prop to the `Checkbox.Root` component to change the color of the checkbox.

### [Sizes](#sizes)

Pass the `size` prop to the `Checkbox.Root` component to change the size of the checkbox.

### [States](#states)

Pass the `disabled` or `invalid` prop to the `Checkbox.Root` component to change the visual state of the checkbox.

### [Controlled](#controlled)

Use the `checked` and `onCheckedChange` props to control the state of the checkbox.

### [Label Position](#label-position)

Here's an example of how to change the label position to the right.

### [Store](#store)

An alternative way to control the checkbox is to use the `RootProvider` component and the `useCheckbox` store hook.

This way you can access the checkbox state and methods from outside the checkbox.

### [Composition](#composition)

Here's an example of how to compose a checkbox with a field component.

### [Hook Form](#hook-form)

Here's an example of how to use the `Checkbox` component with the `react-hook-form` library.

### [Group](#group)

Use the `CheckboxGroup` component to group multiple checkboxes together.

### [Group Hook Form](#group-hook-form)

Here's an example of how to use the `CheckboxGroup` component with the `react-hook-form` library.

### [Custom Icon](#custom-icon)

Render a custom icon within `Checkbox.Control` to change the icon of the checkbox.

### [Indeterminate](#indeterminate)

Set the `checked` prop to `indeterminate` to show the checkbox in an indeterminate state.

### [Description](#description)

Here's an example of how to add some further description to the checkbox.

### [Link](#link)

Render an anchor tag within the `Checkbox.Label` to add a link to the label.

### [Closed Component](#closed-component)

Here's how to setup the Checkbox for a closed component composition.

```
import { Checkbox as ChakraCheckbox } from "@chakra-ui/react"
import * as React from "react"

export interface CheckboxProps extends ChakraCheckbox.RootProps {
  icon?: React.ReactNode
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  rootRef?: React.RefObject<HTMLLabelElement | null>
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props, ref) {
    const { icon, children, inputProps, rootRef, ...rest } = props
    return (
      <ChakraCheckbox.Root ref={rootRef} {...rest}>
        <ChakraCheckbox.HiddenInput ref={ref} {...inputProps} />
        <ChakraCheckbox.Control>
          {icon || <ChakraCheckbox.Indicator />}
        </ChakraCheckbox.Control>
        {children != null && (
          <ChakraCheckbox.Label>{children}</ChakraCheckbox.Label>
        )}
      </ChakraCheckbox.Root>
    )
  },
)
```

If you want to automatically add the closed component to your project, run the command:

```
npx @chakra-ui/cli snippet add checkbox
```

Here's how to use the it

```
<Checkbox>Accept terms and conditions</Checkbox>
```

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`value`

`'\'on\''`

`string`

The value of checkbox input. Useful for form submission.

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`size`

`'md'`

`'xs' | 'sm' | 'md' | 'lg'`

The size of the component

`variant`

`'solid'`

`'outline' | 'solid' | 'subtle'`

The variant of the component

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`checked`

`CheckedState`

The controlled checked state of the checkbox

`defaultChecked`

`CheckedState`

The initial checked state of the checkbox when rendered. Use when you don't need to control the checked state of the checkbox.

`disabled`

`boolean`

Whether the checkbox is disabled

`form`

`string`

The id of the form that the checkbox belongs to.

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ root: string; hiddenInput: string; control: string; label: string }>`

The ids of the elements in the checkbox. Useful for composition.

`invalid`

`boolean`

Whether the checkbox is invalid

`name`

`string`

The name of the input field in a checkbox. Useful for form submission.

`onCheckedChange`

`(details: CheckedChangeDetails) => void`

The callback invoked when the checked state changes.

`readOnly`

`boolean`

Whether the checkbox is read-only

`required`

`boolean`

Whether the checkbox is required

`as`

`React.ElementType`

The underlying element to render.

`unstyled`

`boolean`

Whether to remove the component's style.

[

Previous

Checkbox Card



](/docs/components/checkbox-card)[

Next

Clipboard



](/docs/components/clipboard)