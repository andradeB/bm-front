# Slider

Slider
======

Used to allow users to make selections from a range of values.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/slider)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-slider--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/slider.ts)[Ark](https://ark-ui.com/react/docs/components/slider)

[Usage](#usage)
---------------

```
import { Slider } from "@chakra-ui/react"
```

```
<Slider.Root>
  <Slider.Label />
  <Slider.ValueText />
  <Slider.Control>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb>
      <Slider.DraggingIndicator />
      <Slider.HiddenInput />
    </Slider.Thumb>
    <Slider.MarkerGroup>
      <Slider.Marker />
    </Slider.MarkerGroup>
  </Slider.Control>
</Slider.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Shortcuts](#shortcuts)
-----------------------

### [`Slider.Thumbs`](#sliderthumbs)

This component renders the `Slider.Thumb` and `Slider.HiddenInput` components for each value.

The code below works:

```
<Slider.Thumb index={0}>
  <Slider.HiddenInput />
</Slider.Thumb>
```

but this might be better if you don't need to customize the thumb:

```
<Slider.Thumbs />
```

### [`Slider.Marks`](#slidermarks)

This component renders the `Slider.MarkerGroup` and `Slider.Marker` components for each value.

The code below works:

```
<Slider.MarkerGroup>
  <Slider.Marker value={0} />
  <Slider.Marker value={50} />
</Slider.MarkerGroup>
```

but this might be better if you don't need to customize the marker:

```
<Slider.Marks marks={[0, 50]} />
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the slider.

### [Variants](#variants)

Use the `variant` prop to change the visual style of the slider.

### [Colors](#colors)

Use the `colorPalette` prop to change the color of the slider.

### [Label](#label)

Use the `label` prop to add a label to the slider.

### [Range Slider](#range-slider)

Set the `value` or `defaultValue` prop to an array to create a range slider.

### [Prevent Overlap](#prevent-overlap)

Use the `minStepsBetweenThumbs` prop to avoid thumbs with the same value.

### [Customization](#customization)

Here's an example of customizing the thumb with custom icon and background.

### [Value Text](#value-text)

Use the `Slider.ValueText` component to show the current value of the slider.

### [Controlled](#controlled)

Use the `value` and `onValueChange` props to control the value of the slider.

### [Store](#store)

An alternative way to control the slider is to use the `RootProvider` component and the `useSlider` store hook.

This way you can access the slider state and methods from outside the slider.

### [Hook Form](#hook-form)

Here's an example of how to integrate a slider with `react-hook-form`.

### [Disabled](#disabled)

Use the `disabled` prop to disable the slider.

### [Change End](#change-end)

Use the `onValueChangeEnd` prop to listen to the end of the slider change.

### [Steps](#steps)

Use the `step` prop to set the step value of the slider.

### [Thumb Alignment](#thumb-alignment)

Use the `thumbAlignment` and `thumbSize` prop to align the thumb within the track. By default, the thumb is aligned to the start of the track.

### [Marks](#marks)

Use the `marks` prop to display marks on the slider.

You can also add labels to the marks using the `marks` prop.

### [Vertical](#vertical)

Use the `orientation` prop to change the orientation of the slider.

### [Vertical with Marks](#vertical-with-marks)

Here's an example of a vertical slider with marks.

### [Dragging Indicator](#dragging-indicator)

Render the the `Slider.DraggingIndicator` component to show an indicator or tooltip when dragging the thumb.

Pro Tip: You can render the `Slider.ValueText` component inside the `Slider.DraggingIndicator` to show the current value.

### [Closed Component](#closed-component)

If you prefer a closed component composition, check out the snippet below.

```
import { Slider as ChakraSlider, HStack } from "@chakra-ui/react"
import * as React from "react"

export interface SliderProps extends ChakraSlider.RootProps {
  marks?: Array<number | { value: number; label: React.ReactNode }>
  label?: React.ReactNode
  showValue?: boolean
}

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  function Slider(props, ref) {
    const { label, showValue, marks, ...rest } = props
    return (
      <ChakraSlider.Root ref={ref} thumbAlignment="center" {...rest}>
        {label && !showValue && (
          <ChakraSlider.Label>{label}</ChakraSlider.Label>
        )}
        {label && showValue && (
          <HStack justify="space-between">
            <ChakraSlider.Label>{label}</ChakraSlider.Label>
            <ChakraSlider.ValueText />
          </HStack>
        )}
        <ChakraSlider.Control>
          <ChakraSlider.Track>
            <ChakraSlider.Range />
          </ChakraSlider.Track>
          <ChakraSlider.Thumbs />
          <ChakraSlider.Marks marks={marks} />
        </ChakraSlider.Control>
      </ChakraSlider.Root>
    )
  },
)
```

If you want to automatically add the closed component to your project, run the command:

```
npx @chakra-ui/cli snippet add slider
```

[Props](#props)
---------------

Prop

Default

Type

`max`

`'100'`

`number`

The maximum value of the slider

`min`

`'0'`

`number`

The minimum value of the slider

`minStepsBetweenThumbs`

`'0'`

`number`

The minimum permitted steps between multiple thumbs. \`minStepsBetweenThumbs\` \* \`step\` should reflect the gap between the thumbs. - \`step: 1\` and \`minStepsBetweenThumbs: 10\` => gap is \`10\` - \`step: 10\` and \`minStepsBetweenThumbs: 2\` => gap is \`20\`

`orientation`

`'horizontal'`

`'vertical' | 'horizontal'`

The orientation of the component

`origin`

`'\'start\''`

`'center' | 'end' | 'start'`

The origin of the slider range. The track is filled from the origin to the thumb for single values. - "start": Useful when the value represents an absolute value - "center": Useful when the value represents an offset (relative) - "end": Useful when the value represents an offset from the end

`step`

`'1'`

`number`

The step value of the slider

`thumbAlignment`

`'\'contain\''`

`'center' | 'contain'`

The alignment of the slider thumb relative to the track - \`center\`: the thumb will extend beyond the bounds of the slider track. - \`contain\`: the thumb will be contained within the bounds of the track.

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

`'outline' | 'solid'`

The variant of the component

`aria-label`

`string[]`

The aria-label of each slider thumb. Useful for providing an accessible name to the slider

`aria-labelledby`

`string[]`

The \`id\` of the elements that labels each slider thumb. Useful for providing an accessible name to the slider

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`defaultValue`

`number[]`

The initial value of the slider when rendered. Use when you don't need to control the value of the slider.

`disabled`

`boolean`

Whether the slider is disabled

`form`

`string`

The associate form of the underlying input element.

`getAriaValueText`

`(details: ValueTextDetails) => string`

Function that returns a human readable value for the slider thumb

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ root: string thumb(index: number): string hiddenInput(index: number): string control: string track: string range: string label: string valueText: string marker(index: number): string }>`

The ids of the elements in the slider. Useful for composition.

`invalid`

`boolean`

Whether the slider is invalid

`name`

`string`

The name associated with each slider thumb (when used in a form)

`onFocusChange`

`(details: FocusChangeDetails) => void`

Function invoked when the slider's focused index changes

`onValueChange`

`(details: ValueChangeDetails) => void`

Function invoked when the value of the slider changes

`onValueChangeEnd`

`(details: ValueChangeDetails) => void`

Function invoked when the slider value change is done

`readOnly`

`boolean`

Whether the slider is read-only

`thumbSize`

`{ width: number; height: number }`

The slider thumbs dimensions

`value`

`number[]`

The controlled value of the slider

[

Previous

Skeleton



](/docs/components/skeleton)[

Next

Spinner



](/docs/components/spinner)