# Stat

Stat
====

Used to display a statistic with a title and value.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/stat)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-stat--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/stat.ts)

[Usage](#usage)
---------------

```
import { Stat } from "@chakra-ui/react"
```

```
<Stat.Root>
  <Stat.Label />
  <Stat.ValueText />
  <Stat.HelpText />
  <Stat.UpIndicator />
</Stat.Root>
```

[Examples](#examples)
---------------------

### [Format Options](#format-options)

Use the `FormatNumber` component within `Stat.ValueText` to format the value.

### [Indicator](#indicator)

Here's an example of how to display a statistic with an indicator.

### [Info Tip](#info-tip)

Compose the `InfoTip` and `Stat.Label` components to display an info tip.

### [Value Unit](#value-unit)

Here's an example of how to display a value with a unit.

### [Progress Bar](#progress-bar)

Here's an example of how to display a statistic with a progress bar.

### [Icon](#icon)

Here's an example of how to display a statistic with an icon.

### [Trend](#trend)

Here's an example of how to display a statistic with a trend indicator.

### [Closed Component](#closed-component)

Here's how to setup the Stat for a closed component composition.

```
import { Badge, Stat as ChakraStat, FormatNumber, Show } from "@chakra-ui/react"
import { InfoTip } from "@/components/ui/toggle-tip"
import * as React from "react"

interface StatProps extends ChakraStat.RootProps {
  label?: React.ReactNode
  value?: number
  info?: React.ReactNode
  valueText?: React.ReactNode
  formatOptions?: Intl.NumberFormatOptions
  change?: number
}

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  function Stat(props, ref) {
    const { label, value, valueText, change, info, formatOptions, ...rest } =
      props
    return (
      <ChakraStat.Root {...rest}>
        {label && (
          <ChakraStat.Label>
            {label}
            {info && <InfoTip>{info}</InfoTip>}
          </ChakraStat.Label>
        )}
        <ChakraStat.ValueText {...rest} ref={ref}>
          {valueText ||
            (value != null && formatOptions && (
              <FormatNumber value={value} {...formatOptions} />
            ))}
        </ChakraStat.ValueText>
        {change != null && (
          <Badge colorPalette={change > 0 ? "green" : "red"} gap="0">
            <Show when={change > 0} fallback={<ChakraStat.DownIndicator />}>
              <ChakraStat.UpIndicator />
            </Show>
            <FormatNumber
              value={Math.abs(change)}
              style="percent"
              maximumFractionDigits={2}
            />
          </Badge>
        )}
      </ChakraStat.Root>
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

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`size`

`'md'`

`'sm' | 'md' | 'lg'`

The size of the component

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

Spinner



](/docs/components/spinner)[

Next

Status



](/docs/components/status)