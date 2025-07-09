# Icon Button

Icon Button
===========

Used to render an icon within a button

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/button)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-icon-button--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/button.ts)

[Usage](#usage)
---------------

```
import { IconButton } from "@chakra-ui/react"
```

```
<IconButton aria-label="Search database">
  <LuSearch />
</IconButton>
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the button.

### [Variants](#variants)

Use the `variant` prop to change its visual style

### [Color](#color)

Use the `colorPalette` prop to change the color of the button

### [Rounded](#rounded)

Set `rounded="full"` to make the button fully rounded

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

`'solid'`

`'solid' | 'subtle' | 'surface' | 'outline' | 'ghost' | 'plain'`

The variant of the component

`spinnerPlacement`

`'start'`

`'start' | 'end' | undefined`

The placement of the spinner

`spinner`

`React.ReactNode | undefined`

The spinner to show while loading.

[

Previous

Icon



](/docs/components/icon)[

Next

Image



](/docs/components/image)