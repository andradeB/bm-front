# Color Picker

Color Picker
============

Used to select colors from a color area or a set of defined swatches

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/color-picker)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-color-picker--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/color-picker.ts)[Ark](https://ark-ui.com/react/docs/components/color-picker)

[Usage](#usage)
---------------

```
import { ColorPicker } from "@chakra-ui/react"
```

```
<ColorPicker.Root>
  <ColorPicker.HiddenInput />
  <ColorPicker.Label />
  <ColorPicker.Control>
    <ColorPicker.Input />
    <ColorPicker.Trigger />
  </ColorPicker.Control>
  <ColorPicker.Positioner>
    <ColorPicker.Content>
      <ColorPicker.Area />
      <ColorPicker.EyeDropper />
      <ColorPicker.Sliders />
      <ColorPicker.SwatchGroup>
        <ColorPicker.SwatchTrigger>
          <ColorPicker.Swatch />
        </ColorPicker.SwatchTrigger>
      </ColorPicker.SwatchGroup>
    </ColorPicker.Content>
  </ColorPicker.Positioner>
</ColorPicker.Root>
```

[Shortcuts](#shortcuts)
-----------------------

### [ColorPicker.ChannelSlider](#colorpickerchannelslider)

This component renders the slider track, thumb and transparency grid.

```
<ColorPicker.ChannelSlider />
```

is the same as:

```
<ColorPicker.ChannelSlider>
  <ColorPickerTransparencyGrid />
  <ColorPickerChannelSliderTrack />
  <ColorPickerChannelSliderThumb />
</ColorPicker.ChannelSlider>
```

### [ColorPicker.Sliders](#colorpickersliders)

This is a shortcut component for the hue and alpha sliders:

```
<Stack>
  <ColorPickerChannelSlider channel="hue" />
  <ColorPickerChannelSlider channel="alpha" />
</Stack>
```

### [ColorPicker.Area](#colorpickerarea)

This component renders the color area thumb and background.

```
<ColorPicker.Area>
  <ColorPicker.AreaThumb />
  <ColorPicker.AreaBackground />
</ColorPicker.Area>
```

is the same as:

```
<ColorPicker.Area />
```

### [ColorPicker.EyeDropper](#colorpickereyedropper)

This is a shortcut component for:

```
<ColorPicker.EyeDropperTrigger asChild>
  <IconButton>
    <LuPipette />
  </IconButton>
</ColorPicker.EyeDropperTrigger>
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the color picker.

### [Variants](#variants)

Use the `variant` prop to change the visual style of the color picker. Values can be either `outline` or `subtle`.

### [Input Only](#input-only)

Combine the `ColorPicker.ValueSwatch` and the `ColorPicker.EyeDropper` on the `InputGroup` to render a color picker that contains only an input.

### [Swatch Only](#swatch-only)

Use the `ColorPicker.SwatchGroup` and `ColorPicker.SwatchTrigger` to render only the color swatches.

### [Trigger Only](#trigger-only)

Compose the color picker to initially show only a trigger using the `ColorPicker.ValueSwatch` and `ColorPicker.ValueText`.

### [Trigger Inside Input](#trigger-inside-input)

Compose the color picker to trigger in input using the `InputGroup` and `ColorPickerInput`.

### [Controlled](#controlled)

Use the `value` and `onValueChange` props to control the state of the color picker.

### [Store](#store)

An alternative way to control the color picker is to use the `RootProvider` component and the `useColorPicker` store hook.

This way you can access the color picker state and methods from outside the color picker.

### [Change End](#change-end)

Use the `onValueChangeEnd` to listen to when the user finishes selecting a color, rather than while they are scrubbing or dragging through the color area.

### [Channel Slider](#channel-slider)

Combine the `ColorPickerChannelSliders` and the `format` prop to add the different color channels to the color picker.

### [Hook Form](#hook-form)

Here's an example of how to integrate the color picker with `react-hook-form`.

### [Inline](#inline)

Here's an example of how to display an inline version of the color picker.

### [Disabled](#disabled)

Pass the `disabled` prop to disable the color picker.

### [Channel Input](#channel-input)

Use the `ChannelFormat.Select` and `ColorPicker.ChannelInput` to create a color picker that allows users to select their preferred channel.

### [Fit Content](#fit-content)

Pass the `data-fit-content` attribute to the `ColorPicker.Trigger` to make it fit the content.

### [ReadOnly](#readonly)

Use the `readOnly` prop to make the color picker component read-only.

### [Save Swatch](#save-swatch)

Here's an example of how to save a selected color as a swatch.

### [Swatches](#swatches)

Here's an example of how to combine the color picker with pre-defined swatches.

### [Swatch and Input](#swatch-and-input)

Here's how to compose a swatch with an input.

### [Swatch and Trigger](#swatch-and-trigger)

Here's how to compose a swatch with a trigger.

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`closeOnSelect`

`false`

`boolean`

Whether to close the color picker when a swatch is selected

`defaultFormat`

`'\'rgba\''`

`ColorFormat`

The initial color format when rendered. Use when you don't need to control the color format of the color picker.

`defaultValue`

`'#000000'`

`Color`

The initial color value when rendered. Use when you don't need to control the color value of the color picker.

`lazyMount`

`false`

`boolean`

Whether to enable lazy mounting

`openAutoFocus`

`true`

`boolean`

Whether to auto focus the color picker when it is opened

`skipAnimationOnMount`

`false`

`boolean`

Whether to allow the initial presence animation.

`unmountOnExit`

`false`

`boolean`

Whether to unmount on exit.

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

`'outline' | 'subtle'`

The variant of the component

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`defaultOpen`

`boolean`

The initial open state of the color picker when rendered. Use when you don't need to control the open state of the color picker.

`disabled`

`boolean`

Whether the color picker is disabled

`format`

`ColorFormat`

The controlled color format to use

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ root: string; control: string; trigger: string; label: string; input: string; hiddenInput: string; content: string; area: string; areaGradient: string; positioner: string; formatSelect: string; areaThumb: string; channelInput(id: string): string; channelSliderTrack(id: ColorChannel): string; channelSliderT...`

The ids of the elements in the color picker. Useful for composition.

`immediate`

`boolean`

Whether to synchronize the present change immediately or defer it to the next frame

`initialFocusEl`

`() => HTMLElement | null`

The initial focus element when the color picker is opened.

`invalid`

`boolean`

Whether the color picker is invalid

`name`

`string`

The name for the form input

`onExitComplete`

`VoidFunction`

Function called when the animation ends in the closed state

`onFocusOutside`

`(event: FocusOutsideEvent) => void`

Function called when the focus is moved outside the component

`onFormatChange`

`(details: FormatChangeDetails) => void`

Function called when the color format changes

`onInteractOutside`

`(event: InteractOutsideEvent) => void`

Function called when an interaction happens outside the component

`onOpenChange`

`(details: OpenChangeDetails) => void`

Handler that is called when the user opens or closes the color picker.

`onPointerDownOutside`

`(event: PointerDownOutsideEvent) => void`

Function called when the pointer is pressed down outside the component

`onValueChange`

`(details: ValueChangeDetails) => void`

Handler that is called when the value changes, as the user drags.

`onValueChangeEnd`

`(details: ValueChangeDetails) => void`

Handler that is called when the user stops dragging.

`open`

`boolean`

The controlled open state of the color picker

`positioning`

`PositioningOptions`

The positioning options for the color picker

`present`

`boolean`

Whether the node is present (controlled by the user)

`readOnly`

`boolean`

Whether the color picker is read-only

`required`

`boolean`

Whether the color picker is required

`value`

`Color`

The controlled color value of the color picker

`as`

`React.ElementType`

The underlying element to render.

`unstyled`

`boolean`

Whether to remove the component's style.

[

Previous

Combobox



](/docs/components/combobox)[

Next

Color Swatch



](/docs/components/color-swatch)