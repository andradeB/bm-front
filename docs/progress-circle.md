# Progress Circle

Progress Circle
===============

Used to display a task's progress in a circular form.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/progress-circle)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-progress-circle--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/progress-circle.ts)[Ark](https://ark-ui.com/react/docs/components/progress-circular)

[Usage](#usage)
---------------

```
import { ProgressCircle } from "@chakra-ui/react"
```

```
<ProgressCircle.Root>
  <ProgressCircle.Circle>
    <ProgressCircle.Track />
    <ProgressCircle.Range />
  </ProgressCircle.Circle>
  <ProgressCircle.ValueText />
</ProgressCircle.Root>
```

[Examples](#examples)
---------------------

### [Rounded](#rounded)

Use the `strokeLinecap` prop on `ProgressCircle.Range` to make the ends of the progress circle rounded.

### [Sizes](#sizes)

Use the `size` prop to change the size of the progress circle component.

### [Colors](#colors)

Use the `colorPalette` prop to change the color scheme of the component.

### [Value Text](#value-text)

Render the `ProgressCircle.ValueText` component to display the progress value.

### [Custom Thickness](#custom-thickness)

Pass the `--thickness` css variable to the `ProgressCircleRing` component to change the thickness of the ring.

### [Indeterminate](#indeterminate)

Set the `value` prop to `null` to render the indeterminate state.

### [Color](#color)

Pass the `stroke` prop to the `ProgressCircle.Range` component to change the color of the range.

### [Closed Component](#closed-component)

Here's how to create a closed component using the `ProgressCircle` component.

```
import type { SystemStyleObject } from "@chakra-ui/react"
import {
  AbsoluteCenter,
  ProgressCircle as ChakraProgressCircle,
} from "@chakra-ui/react"
import * as React from "react"

interface ProgressCircleProps extends ChakraProgressCircle.RootProps {
  showValueText?: boolean
  valueText?: React.ReactNode
  trackColor?: SystemStyleObject["stroke"]
  cap?: SystemStyleObject["strokeLinecap"]
  thickness?: SystemStyleObject["strokeWidth"]
}

export const ProgressCircle = React.forwardRef<
  HTMLDivElement,
  ProgressCircleProps
>(function ProgressCircle(props, ref) {
  const {
    showValueText,
    valueText,
    trackColor,
    color,
    cap,
    thickness,
    ...rest
  } = props

  return (
    <ChakraProgressCircle.Root {...rest} ref={ref}>
      <ChakraProgressCircle.Circle css={{ "--thickness": thickness }}>
        <ChakraProgressCircle.Track stroke={trackColor} />
        <ChakraProgressCircle.Range stroke={color} strokeLinecap={cap} />
      </ChakraProgressCircle.Circle>
      {showValueText && (
        <AbsoluteCenter>
          <ChakraProgressCircle.ValueText>
            {valueText}
          </ChakraProgressCircle.ValueText>
        </AbsoluteCenter>
      )}
    </ChakraProgressCircle.Root>
  )
})
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

`'xs' | 'sm' | 'md' | 'lg' | 'xl'`

The size of the component

[

Previous

Popover



](/docs/components/popover)[

Next

Progress



](/docs/components/progress)