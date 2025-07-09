# Input

Input
=====

Used to get user input in a text field.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/input)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-input--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/input.ts)

[Usage](#usage)
---------------

```
import { Input } from "@chakra-ui/react"
```

```
<Input />
```

[Examples](#examples)
---------------------

### [Variants](#variants)

Use the `variant` prop to change the visual style of the input.

### [Sizes](#sizes)

Use the `size` prop to change the size of the input.

### [Helper Text](#helper-text)

Pair the input with the `Field` component to add helper text.

### [Error Text](#error-text)

Pair the input with the `Field` component to add error text.

### [Field](#field)

Compose the input with the `Field` component to add a label, helper text, and error text.

### [Hook Form](#hook-form)

Here's an example of how to integrate the input with `react-hook-form`.

### [Element](#element)

Use the `startElement` and `endElement` on the `InputGroup` component to add an element to the start and end of the input.

#### [Start Icon](#start-icon)

#### [Start Text](#start-text)

#### [Start and End Text](#start-and-end-text)

#### [Kbd](#kbd)

#### [Select](#select)

### [Addon](#addon)

Use the `InputAddon` and `Group` components to add an addon to the input.

#### [Start Addon](#start-addon)

#### [End Addon](#end-addon)

#### [Start and End Addon](#start-and-end-addon)

### [Disabled](#disabled)

Use the `disabled` prop to disable the input.

### [Button](#button)

Use the `Group` component to attach a button to the input.

### [Focus and Error Color](#focus-and-error-color)

Use the `--focus-color` and `--error-color` CSS custom properties to change the color of the input when it is focused or in an error state.

### [Placeholder Style](#placeholder-style)

Use the `_placeholder` prop to style the placeholder text.

### [Floating Label](#floating-label)

Here's an example of how to build a floating label to the input.

### [Mask](#mask)

Here's an example of using the `use-mask-input` library to mask the input shape.

### [Character Counter](#character-counter)

Here's an example of how to add a character counter to the input.

### [Card Number](#card-number)

Here's an example of using `react-payment-inputs` to create a card number input.

You can create a full card inputs for a card number, expiry date, and CVC.

### [Clear Button](#clear-button)

Combine the `Input` and `CloseButton` components to create a clear button. This is useful for building search inputs.

[Props](#props)
---------------

Prop

Default

Type

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

[

Previous

Image



](/docs/components/image)[

Next

Menu



](/docs/components/menu)