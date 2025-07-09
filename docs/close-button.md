# Close Button

Close Button
============

Used to trigger close functionality

[Storybook](https://storybook.chakra-ui.com/?path=/story/components-close-button--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/close-button.ts)

[Usage](#usage)
---------------

```
import { CloseButton } from "@chakra-ui/react"
```

```
<CloseButton />
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the close button.

### [Variants](#variants)

Use the `variant` prop to change the appearance of the close button.

### [Custom Icon](#custom-icon)

Pass the custom icon to the `children` of the `CloseButton` component.

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

`loading`

`boolean | undefined`

If \`true\`, the button will show a loading spinner.

`loadingText`

`React.ReactNode | undefined`

The text to show while loading.

`spinner`

`React.ReactNode | undefined`

The spinner to show while loading.

[

Previous

Clipboard



](/docs/components/clipboard)[

Next

Collapsible



](/docs/components/collapsible)