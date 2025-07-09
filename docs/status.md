# Status

Status
======

Used to indicate the status of a process or state

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/status)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-status--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/status.ts)

[Usage](#usage)
---------------

```
import { Status } from "@chakra-ui/react"
```

```
<Status.Root>
  <Status.Indicator />
</Status.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Examples](#examples)
---------------------

### [Label](#label)

Render the label within the `Status.Root` component.

### [Sizes](#sizes)

Use the `size` prop to change the size of the status component.

### [Closed Component](#closed-component)

Here's how to setup the Status for a closed component composition.

```
import type { ColorPalette } from "@chakra-ui/react"
import { Status as ChakraStatus } from "@chakra-ui/react"
import * as React from "react"

type StatusValue = "success" | "error" | "warning" | "info"

export interface StatusProps extends ChakraStatus.RootProps {
  value?: StatusValue
}

const statusMap: Record<StatusValue, ColorPalette> = {
  success: "green",
  error: "red",
  warning: "orange",
  info: "blue",
}

export const Status = React.forwardRef<HTMLDivElement, StatusProps>(
  function Status(props, ref) {
    const { children, value = "info", ...rest } = props
    const colorPalette = rest.colorPalette ?? statusMap[value]
    return (
      <ChakraStatus.Root ref={ref} {...rest} colorPalette={colorPalette}>
        <ChakraStatus.Indicator />
        {children}
      </ChakraStatus.Root>
    )
  },
)
```

If you want to automatically add the closed component to your project, run the command:

```
npx @chakra-ui/cli snippet add status
```

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

`'sm' | 'md' | 'lg'`

The size of the component

[

Previous

Stat



](/docs/components/stat)[

Next

Steps



](/docs/components/steps)