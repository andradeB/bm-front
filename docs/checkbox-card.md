# Checkbox Card

Checkbox Card
=============

Used to select or deselect options displayed within cards.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/checkbox-card)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-checkbox-card--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/checkbox-card.ts)[Ark](https://ark-ui.com/react/docs/components/checkbox)

[Usage](#usage)
---------------

```
import { CheckboxCard } from "@chakra-ui/react"
```

```
<CheckboxCard.Root>
  <CheckboxCard.HiddenInput />
  <CheckboxCard.Control>
    <CheckboxCard.Content>
      <CheckboxCard.Label />
      <CheckboxCard.Description />
    </CheckboxCard.Content>
    <CheckboxCard.Indicator />
  </CheckboxCard.Control>
</CheckboxCard.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Examples](#examples)
---------------------

### [Description](#description)

Use the `CheckboxCard.Description` component to add a description to the checkbox card.

### [Group](#group)

Use the `CheckboxCardGroup` component to group multiple checkbox cards.

### [Sizes](#sizes)

Pass the `size` prop to the `CheckboxCard.Root` component to change the size of the checkbox card.

### [Variants](#variants)

Use the `variant` prop to Pass the `variant` prop to the `CheckboxCard.Root` component to change the variant of the checkbox card.

### [Disabled](#disabled)

Pass the `disabled` prop to the `CheckboxCard.Root` component to make the checkbox card disabled.

### [Addon](#addon)

Render additional content within the `CheckboxCard.Addon` component to add some more context to the checkbox card.

### [No Indicator](#no-indicator)

Here's an example of how to use the checkbox card without an indicator.

### [Icon](#icon)

Here's an example of how to render custom icons within the checkbox card.

### [Closed Component](#closed-component)

Here's how to setup the Checkbox card for a closed component composition.

```
import { CheckboxCard as ChakraCheckboxCard } from "@chakra-ui/react"
import * as React from "react"

export interface CheckboxCardProps extends ChakraCheckboxCard.RootProps {
  icon?: React.ReactElement
  label?: React.ReactNode
  description?: React.ReactNode
  addon?: React.ReactNode
  indicator?: React.ReactNode | null
  indicatorPlacement?: "start" | "end" | "inside"
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const CheckboxCard = React.forwardRef<
  HTMLInputElement,
  CheckboxCardProps
>(function CheckboxCard(props, ref) {
  const {
    inputProps,
    label,
    description,
    icon,
    addon,
    indicator = <ChakraCheckboxCard.Indicator />,
    indicatorPlacement = "end",
    ...rest
  } = props

  const hasContent = label || description || icon
  const ContentWrapper = indicator ? ChakraCheckboxCard.Content : React.Fragment

  return (
    <ChakraCheckboxCard.Root {...rest}>
      <ChakraCheckboxCard.HiddenInput ref={ref} {...inputProps} />
      <ChakraCheckboxCard.Control>
        {indicatorPlacement === "start" && indicator}
        {hasContent && (
          <ContentWrapper>
            {icon}
            {label && (
              <ChakraCheckboxCard.Label>{label}</ChakraCheckboxCard.Label>
            )}
            {description && (
              <ChakraCheckboxCard.Description>
                {description}
              </ChakraCheckboxCard.Description>
            )}
            {indicatorPlacement === "inside" && indicator}
          </ContentWrapper>
        )}
        {indicatorPlacement === "end" && indicator}
      </ChakraCheckboxCard.Control>
      {addon && <ChakraCheckboxCard.Addon>{addon}</ChakraCheckboxCard.Addon>}
    </ChakraCheckboxCard.Root>
  )
})

export const CheckboxCardIndicator = ChakraCheckboxCard.Indicator
```

If you want to automatically add the closed component to your project, run the command:

```
npx @chakra-ui/cli snippet add checkbox-card
```

Here's how to use the it

```
<CheckboxCard label="Checkbox Card" />
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

`size`

`'md'`

`'sm' | 'md' | 'lg'`

The size of the component

`variant`

`'outline'`

`'surface' | 'subtle' | 'outline' | 'solid'`

The variant of the component

`align`

`'start'`

`'start' | 'end' | 'center'`

The align of the component

`orientation`

`'horizontal'`

`'vertical' | 'horizontal'`

The orientation of the component

`justify`

`'start' | 'end' | 'center'`

The justify of the component

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

Card



](/docs/components/card)[

Next

Checkbox



](/docs/components/checkbox)