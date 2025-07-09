# Radio Card

Radio Card
==========

Used to select an option from list

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/radio-card)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-radio-card--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/radio-card.ts)[Ark](https://ark-ui.com/react/docs/components/radio-group)

[Usage](#usage)
---------------

```
import { RadioCard } from "@chakra-ui/react"
```

```
<RadioCard.Root>
  <RadioCard.Label />
  <RadioCard.Item>
    <RadioCard.ItemHiddenInput />
    <RadioCard.ItemControl>
      <RadioCard.ItemContent>
        <RadioCard.ItemText />
        <RadioCard.ItemDescription />
      </RadioCard.ItemContent>
      <RadioCard.ItemIndicator />
    </RadioCard.ItemControl>
  </RadioCard.Item>
</RadioCard.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Examples](#examples)
---------------------

### [Description](#description)

Here's an example of how to add some further description to the radio card.

### [Sizes](#sizes)

Pass the `size` prop to the `RadioCard.Root` component to change the size of the radio card.

### [Colors](#colors)

Pass the `colorPalette` prop to the `RadioCard.Root` component to change the color of the radio card.

### [Variants](#variants)

Pass the `variant` prop to the `RadioCard.Root` component to change the visual style of the radio card.

### [Icon](#icon)

Render a custom icon inside the radio card by placing it within `RadioCard.ItemContent`.

### [No Indicator](#no-indicator)

Here's an example of how to use the radio card without an indicator.

### [No Indicator (Vertical)](#no-indicator-vertical)

Here's an example of a radio card with no indicator and content aligned vertically.

### [Centered](#centered)

Here's an example of a radio card with centered text.

### [Composition](#composition)

Here's an example of composing the RadioCard with the `Group` component.

### [Addon](#addon)

Use the `RadioCard.ItemAddon` component to add metadata to the radio card.

### [Closed Component](#closed-component)

Here's how to setup the Radio card for a closed component composition.

```
import { RadioCard } from "@chakra-ui/react"
import * as React from "react"

interface RadioCardItemProps extends RadioCard.ItemProps {
  icon?: React.ReactElement
  label?: React.ReactNode
  description?: React.ReactNode
  addon?: React.ReactNode
  indicator?: React.ReactNode | null
  indicatorPlacement?: "start" | "end" | "inside"
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const RadioCardItem = React.forwardRef<
  HTMLInputElement,
  RadioCardItemProps
>(function RadioCardItem(props, ref) {
  const {
    inputProps,
    label,
    description,
    addon,
    icon,
    indicator = <RadioCard.ItemIndicator />,
    indicatorPlacement = "end",
    ...rest
  } = props

  const hasContent = label || description || icon
  const ContentWrapper = indicator ? RadioCard.ItemContent : React.Fragment

  return (
    <RadioCard.Item {...rest}>
      <RadioCard.ItemHiddenInput ref={ref} {...inputProps} />
      <RadioCard.ItemControl>
        {indicatorPlacement === "start" && indicator}
        {hasContent && (
          <ContentWrapper>
            {icon}
            {label && <RadioCard.ItemText>{label}</RadioCard.ItemText>}
            {description && (
              <RadioCard.ItemDescription>
                {description}
              </RadioCard.ItemDescription>
            )}
            {indicatorPlacement === "inside" && indicator}
          </ContentWrapper>
        )}
        {indicatorPlacement === "end" && indicator}
      </RadioCard.ItemControl>
      {addon && <RadioCard.ItemAddon>{addon}</RadioCard.ItemAddon>}
    </RadioCard.Item>
  )
})

export const RadioCardRoot = RadioCard.Root
export const RadioCardLabel = RadioCard.Label
export const RadioCardItemIndicator = RadioCard.ItemIndicator
```

If you want to automatically add the closed component to your project, run the command:

```
npx @chakra-ui/cli snippet add radio-card
```

Here's how to use the it

```
<RadioCardRoot>
  <RadioCardLabel />
  <RadioCardItem />
</RadioCardRoot>
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

QR Code



](/docs/components/qr-code)[

Next

Radio



](/docs/components/radio)