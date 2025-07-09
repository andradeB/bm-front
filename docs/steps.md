# Steps

Steps
=====

Used to indicate progress through a multi-step process

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/steps)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-steps--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/steps.ts)[Ark](https://ark-ui.com/react/docs/components/steps)

[Usage](#usage)
---------------

```
import { Steps } from "@chakra-ui/react"
```

```
<Steps.Root>
  <Steps.List>
    <Steps.Item>
      <Steps.Trigger>
        <Steps.Indicator />
        <Steps.Title />
        <Steps.Description />
      </Steps.Trigger>
      <Steps.Separator />
    </Steps.Item>
  </Steps.List>
  <Steps.Content />
  <Steps.CompletedContent />
  <Steps.PrevTrigger />
  <Steps.NextTrigger />
</Steps.Root>
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the steps component.

### [Variants](#variants)

Use the `variant` prop to change the appearance of the steps component.

### [Colors](#colors)

Use the `colorPalette` prop to change the color scheme of the component.

### [Trigger](#trigger)

Use the `Steps.Trigger` component to make the step clickable.

### [Vertical](#vertical)

Use the `orientation` prop to change the orientation of the steps component.

### [Controlled](#controlled)

Use the `step` and `onStepChange` props to control the current step of the steps component.

### [Store](#store)

An alternative way to control the steps is to use the `RootProvider` component and the `useSteps` store hook.

This way you can access the steps state and methods from outside the steps.

### [Icon](#icon)

Pass the `icon` prop to the `StepsItem` component to display an icon.

### [Description](#description)

Pass the `description` prop to the `StepsItem` component to display a description.

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`orientation`

`'horizontal'`

`'vertical' | 'horizontal'`

The orientation of the component

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`variant`

`'solid'`

`'solid' | 'subtle'`

The variant of the component

`size`

`'md'`

`'xs' | 'sm' | 'md' | 'lg'`

The size of the component

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`count`

`number`

The total number of steps

`defaultStep`

`number`

The initial value of the stepper when rendered. Use when you don't need to control the value of the stepper.

`ids`

`ElementIds`

The custom ids for the stepper elements

`linear`

`boolean`

If \`true\`, the stepper requires the user to complete the steps in order

`onStepChange`

`(details: StepChangeDetails) => void`

Callback to be called when the value changes

`onStepComplete`

`VoidFunction`

Callback to be called when a step is completed

`step`

`number`

The controlled value of the stepper

`as`

`React.ElementType`

The underlying element to render.

`unstyled`

`boolean`

Whether to remove the component's style.

[

Previous

Status



](/docs/components/status)[

Next

Switch



](/docs/components/switch)