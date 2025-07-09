# Alert

Alert
=====

Used to communicate a state that affects a system, feature or page.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/alert)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-alert--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/alert.ts)

[Usage](#usage)
---------------

```
import { Alert } from "@chakra-ui/react"
```

```
<Alert.Root>
  <Alert.Indicator />
  <Alert.Content>
    <Alert.Title />
    <Alert.Description />
  </Alert.Content>
</Alert.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Examples](#examples)
---------------------

### [Description](#description)

Render the `Alert.Description` component to provide additional context to the alert.

### [Status](#status)

Change the status of the alerts by passing the `status` prop. This affects the color scheme and icon used. Alert supports `error`, `success`, `warning`, and `info` statuses.

### [Variants](#variants)

Use the `variant` prop to change the visual style of the alert. Values can be either `subtle`, `solid`, `outline`

### [With Close Button](#with-close-button)

Here's and example of how to compose the `Alert` with a close button.

### [With Spinner](#with-spinner)

Here's and example of how to compose the `Alert` with a spinner.

### [Custom Icon](#custom-icon)

Use the `icon` prop to pass a custom icon to the alert. This will override the default icon for the alert status.

### [Color Palette Override](#color-palette-override)

The default colorPalette is inferred from the `status` prop. To override the color palette, pass the `colorPalette` prop.

### [Customization](#customization)

You can style the `Alert` component using style props.

### [Closed Component](#closed-component)

Here's how to setup the `Alert` for a closed component composition.

```
import { Alert as ChakraAlert } from "@chakra-ui/react"
import * as React from "react"

export interface AlertProps extends Omit<ChakraAlert.RootProps, "title"> {
  startElement?: React.ReactNode
  endElement?: React.ReactNode
  title?: React.ReactNode
  icon?: React.ReactElement
}

export const AlertClosedComponent = React.forwardRef<
  HTMLDivElement,
  AlertProps
>(function Alert(props, ref) {
  const { title, children, icon, startElement, endElement, ...rest } = props
  return (
    <ChakraAlert.Root ref={ref} {...rest}>
      {startElement || <ChakraAlert.Indicator>{icon}</ChakraAlert.Indicator>}
      {children ? (
        <ChakraAlert.Content>
          <ChakraAlert.Title>{title}</ChakraAlert.Title>
          <ChakraAlert.Description>{children}</ChakraAlert.Description>
        </ChakraAlert.Content>
      ) : (
        <ChakraAlert.Title flex="1">{title}</ChakraAlert.Title>
      )}
      {endElement}
    </ChakraAlert.Root>
  )
})
```

If you want to automatically add the closed component to your project, run the command:

```
npx @chakra-ui/cli snippet add alert
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

`status`

`'info'`

`'info' | 'warning' | 'success' | 'error' | 'neutral'`

The status of the component

`variant`

`'subtle'`

`'subtle' | 'surface' | 'outline' | 'solid'`

The variant of the component

`size`

`'md'`

`'sm' | 'md' | 'lg'`

The size of the component

`inline`

`'true' | 'false'`

The inline of the component

[

Previous

Action Bar



](/docs/components/action-bar)[

Next

Avatar



](/docs/components/avatar)