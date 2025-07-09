# Field

Field
=====

Used to add labels, help text, and error messages to form fields.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/field)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-field--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/field.ts)[Ark](https://ark-ui.com/react/docs/components/field)

[Usage](#usage)
---------------

```
import { Field } from "@chakra-ui/react"
```

```
<Field.Root>
  <Field.Label>
    <Field.RequiredIndicator />
  </Field.Label>
  <Input />
  <Field.HelperText />
  <Field.ErrorText />
</Field.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Examples](#examples)
---------------------

### [Error Text](#error-text)

Pass the `invalid` prop to `Field.Root` and use the `Field.ErrorText` to indicate that the field is invalid.

### [Helper Text](#helper-text)

Use the `Field.HelperText` to add helper text to the field.

### [Horizontal](#horizontal)

Use the `orientation="horizontal"` prop to align the label and input horizontally.

### [Disabled](#disabled)

Use the `disabled` prop to disable the field.

### [Textarea](#textarea)

Here's how to use the field component with a textarea.

### [Native Select](#native-select)

Here's how to use the field component with a native select.

### [Required](#required)

Pass the `required` prop to `Field.Root` and use the `Field.RequiredIndicator` to indicate that the field is required.

### [Optional](#optional)

Pass the `fallback` prop to the `Field.RequiredIndicator` to add optional text.

### [Closed Component](#closed-component)

Here's how to setup the Field for a closed component composition.

```
import { Field as ChakraField } from "@chakra-ui/react"
import * as React from "react"

export interface FieldProps extends Omit<ChakraField.RootProps, "label"> {
  label?: React.ReactNode
  helperText?: React.ReactNode
  errorText?: React.ReactNode
  optionalText?: React.ReactNode
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(props, ref) {
    const { label, children, helperText, errorText, optionalText, ...rest } =
      props
    return (
      <ChakraField.Root ref={ref} {...rest}>
        {label && (
          <ChakraField.Label>
            {label}
            <ChakraField.RequiredIndicator fallback={optionalText} />
          </ChakraField.Label>
        )}
        {children}
        {helperText && (
          <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
        )}
        {errorText && (
          <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>
        )}
      </ChakraField.Root>
    )
  },
)
```

If you want to automatically add the closed component to your project, run the command:

```
npx @chakra-ui/cli snippet add field
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

`orientation`

`'vertical'`

`'vertical' | 'horizontal'`

The orientation of the component

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`disabled`

`boolean`

Indicates whether the field is disabled.

`ids`

`ElementIds`

The ids of the field parts.

`invalid`

`boolean`

Indicates whether the field is invalid.

`readOnly`

`boolean`

Indicates whether the field is read-only.

`required`

`boolean`

Indicates whether the field is required.

`as`

`React.ElementType`

The underlying element to render.

`unstyled`

`boolean`

Whether to remove the component's style.

[

Previous

Empty State



](/docs/components/empty-state)[

Next

Fieldset



](/docs/components/fieldset)