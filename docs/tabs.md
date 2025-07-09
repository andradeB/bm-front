# Tabs

Tabs
====

Used to display content in a tabbed interface

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/tabs)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-tabs--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/tabs.ts)[Ark](https://ark-ui.com/react/docs/components/tabs)

[Usage](#usage)
---------------

```
import { Tabs } from "@chakra-ui/react"
```

```
<Tabs.Root>
  <Tabs.List>
    <Tabs.Trigger />
    <Tabs.Indicator />
  </Tabs.List>
  <Tabs.Content />
</Tabs.Root>
```

[Examples](#examples)
---------------------

### [Variants](#variants)

Use the `variant` prop to change the visual style of the tabs.

### [Lazy Mounted](#lazy-mounted)

Use the `lazyMount` and/or `unmountOnExit` prop to only render the tab content when it is active. This can be useful for performance optimization.

### [Indicator](#indicator)

Render the `Tabs.Indicator` component to display a visual indicator of the active tab.

### [Links](#links)

Pass the `asChild` to the `Tabs.Trigger` component to render a link as a tab. When a tab is clicked, the link will be navigated to.

When using custom router links, you need to set the `navigate` prop on the `Tabs.Root` component.

```
"use client"

import { Tabs } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Demo = () => {
  const navigate = useNavigate()
  return (
    <Tabs.Root navigate={({ value, node }) => navigate(`/${value}`)}>
      {/* ... */}
    </Tabs.Root>
  )
}
```

### [Fitted](#fitted)

Use the `fitted` prop to make the tabs fit the width of the container.

### [Controlled](#controlled)

Use the `value` and `onValueChange` prop to control the active tab.

### [Store](#store)

An alternative way to control the tabs is to use the `RootProvider` component and the `useTabs` store hook.

This way you can access the tabs state and methods from outside the tabs.

### [Disabled Tab](#disabled-tab)

Set the `disabled` prop on the `Tabs.Trigger` component to disable a tab.

### [Manual activation](#manual-activation)

By default, the tabs are selected when the arrow keys are pressed. Disable this behavior by setting the `activationBehavior` prop to `manual`.

In this mode, the tabs will only be selected when clicked or the enter key is pressed.

### [Dynamic](#dynamic)

Here's an example of how to dynamically add and remove tabs.

### [Animation](#animation)

Use the `_open` and `_close` conditional props to animate the tabs.

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`activationMode`

`'\'automatic\''`

`'manual' | 'automatic'`

The activation mode of the tabs. Can be \`manual\` or \`automatic\` - \`manual\`: Tabs are activated when clicked or press \`enter\` key. - \`automatic\`: Tabs are activated when receiving focus

`lazyMount`

`false`

`boolean`

Whether to enable lazy mounting

`loopFocus`

`true`

`boolean`

Whether the keyboard navigation will loop from last tab to first, and vice versa.

`orientation`

`'\'horizontal\''`

`'horizontal' | 'vertical'`

The orientation of the tabs. Can be \`horizontal\` or \`vertical\` - \`horizontal\`: only left and right arrow key navigation will work. - \`vertical\`: only up and down arrow key navigation will work.

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

`'sm' | 'md' | 'lg'`

The size of the component

`variant`

`'line'`

`'line' | 'subtle' | 'enclosed' | 'outline' | 'plain'`

The variant of the component

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`composite`

`boolean`

Whether the tab is composite

`defaultValue`

`string`

The initial selected tab value when rendered. Use when you don't need to control the selected tab value.

`deselectable`

`boolean`

Whether the active tab can be deselected when clicking on it.

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ root: string; trigger: string; list: string; content: string; indicator: string }>`

The ids of the elements in the tabs. Useful for composition.

`navigate`

`(details: NavigateDetails) => void`

Function to navigate to the selected tab when clicking on it. Useful if tab triggers are anchor elements.

`onFocusChange`

`(details: FocusChangeDetails) => void`

Callback to be called when the focused tab changes

`onValueChange`

`(details: ValueChangeDetails) => void`

Callback to be called when the selected/active tab changes

`translations`

`IntlTranslations`

Specifies the localized strings that identifies the accessibility elements and their states

`value`

`string`

The controlled selected tab value

`fitted`

`'true' | 'false'`

The fitted of the component

`justify`

`'start' | 'center' | 'end'`

The justify of the component

### [Trigger](#trigger)

Prop

Default

Type

`value` \*

`string`

The value of the tab

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`disabled`

`boolean`

Whether the tab is disabled

### [Content](#content)

Prop

Default

Type

`value` \*

`string`

The value of the tab

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

[

Previous

Switch



](/docs/components/switch)[

Next

Table



](/docs/components/table)