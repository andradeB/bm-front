# Progress

Progress
========

Used to display the progress status for a task.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/progress)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-progress--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/progress.ts)[Ark](https://ark-ui.com/react/docs/components/progress-linear)

[Usage](#usage)
---------------

```
import { Progress } from "@chakra-ui/react"
```

```
<Progress.Root>
  <Progress.Track>
    <Progress.Range />
  </Progress.Track>
  <Progress.Label />
  <Progress.ValueText />
</Progress.Root>
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the progress bar.

### [Variants](#variants)

Use the `variant` prop to change the visual style of the progress bar.

### [Colors](#colors)

Use the `colorPalette` prop to change the color of the progress bar.

### [Inline Label](#inline-label)

Compose the `Progress.Label` and `Progress.ValueText` components to create an inline label for the progress bar.

### [Info tip](#info-tip)

Use the `info` prop to add a tooltip to the progress bar.

### [Indeterminate](#indeterminate)

Set the value to `null` to show an indeterminate progress bar.

### [Stripes](#stripes)

Set the `striped` prop to `true` to add stripes to the progress bar.

### [Animated Stripes](#animated-stripes)

Set the `animated` prop to `true` to animate the stripes.

### [Closed Component](#closed-component)

Here's how to create a closed component using the `Progress` component.

```
import { Progress as ChakraProgress } from "@chakra-ui/react"
import { InfoTip } from "@/components/ui/toggle-tip"
import * as React from "react"

interface ProgressProps extends ChakraProgress.RootProps {
  showValueText?: boolean
  valueText?: React.ReactNode
  label?: React.ReactNode
  info?: React.ReactNode
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  function Progress(props, ref) {
    const { showValueText, valueText, label, info, ...rest } = props
    return (
      <ChakraProgress.Root {...rest} ref={ref}>
        {label && (
          <ChakraProgress.Label>
            {label} {info && <InfoTip>{info}</InfoTip>}
          </ChakraProgress.Label>
        )}
        <ChakraProgress.Track>
          <ChakraProgress.Range />
        </ChakraProgress.Track>
        {showValueText && (
          <ChakraProgress.ValueText>{valueText}</ChakraProgress.ValueText>
        )}
      </ChakraProgress.Root>
    )
  },
)
```

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`defaultValue`

`'50'`

`number`

The initial value of the progress bar when rendered. Use when you don't need to control the value of the progress bar.

`formatOptions`

`'{ style: \'percent\' }'`

`NumberFormatOptions`

The options to use for formatting the value.

`locale`

`'\'en-US\''`

`string`

The locale to use for formatting the value.

`max`

`'100'`

`number`

The maximum allowed value of the progress bar.

`min`

`'0'`

`number`

The minimum allowed value of the progress bar.

`orientation`

`'\'horizontal\''`

`'horizontal' | 'vertical'`

The orientation of the element.

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`variant`

`'outline'`

`'outline' | 'subtle'`

The variant of the component

`shape`

`'rounded'`

`'square' | 'rounded' | 'full'`

The shape of the component

`size`

`'md'`

`'xs' | 'sm' | 'md' | 'lg' | 'xl'`

The size of the component

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ root: string; track: string; label: string; circle: string }>`

The ids of the elements in the progress bar. Useful for composition.

`onValueChange`

`(details: ValueChangeDetails) => void`

Callback fired when the value changes.

`translations`

`IntlTranslations`

The localized messages to use.

`value`

`number`

The controlled value of the progress bar.

`striped`

`'true' | 'false'`

The striped of the component

`animated`

`'true' | 'false'`

The animated of the component

`as`

`React.ElementType`

The underlying element to render.

`unstyled`

`boolean`

Whether to remove the component's style.

[

Previous

Progress Circle



](/docs/components/progress-circle)[

Next

QR Code



](/docs/components/qr-code)