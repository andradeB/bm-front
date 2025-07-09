# Button

Button
======

Used to trigger an action or event

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/button)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-button--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/button.ts)

[Usage](#usage)
---------------

```
import { Button, ButtonGroup } from "@chakra-ui/react"
```

```
<Button>Click me</Button>
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the button.

### [Variants](#variants)

Use the `variant` prop to change the visual style of the Button.

### [Icon](#icon)

Use icons within a button

### [Color](#color)

Use the `colorPalette` prop to change the color of the button

### [Disabled](#disabled)

Use the `disabled` prop to disable the button.

### [Disabled Link](#disabled-link)

When using the `disabled` prop with a link, you need to prevent the default behavior of the link and add the `data-disabled` attribute.

### [Loading](#loading)

Pass the `loading` and `loadingText` props to the `Button` component to show a loading spinner and add a loading text.

Here's an example of how to toggle the loading state of a button while keeping the width of the button the same.

### [Spinner Placement](#spinner-placement)

Use the `spinnerPlacement` prop to change the placement of the spinner.

### [Custom Spinner](#custom-spinner)

Use the `spinner` prop to change the spinner.

### [Group](#group)

Use the `ButtonGroup` component to group buttons together. This component allows you pass common recipe properties to inner buttons.

To flush the buttons, pass the `attached` prop.

### [Radius](#radius)

Use the `rounded` prop to change the radius of the button.

### [As Link](#as-link)

Use the `asChild` prop to render a button as a link.

### [Ref](#ref)

Here's how to access the underlying element reference

```
const Demo = () => {
  const ref = useRef<HTMLButtonElement | null>(null)
  return <Button ref={ref}>Click me</Button>
}
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

Breadcrumb



](/docs/components/breadcrumb)[

Next

Card



](/docs/components/card)