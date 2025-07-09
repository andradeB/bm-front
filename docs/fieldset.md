# Fieldset

Fieldset
========

A set of form controls optionally grouped under a common name.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/fieldset)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-fieldset--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/fieldset.ts)[Ark](https://ark-ui.com/react/docs/components/fieldset)

[Usage](#usage)
---------------

```
import { Fieldset } from "@chakra-ui/react"
```

```
<Fieldset.Root>
  <Fieldset.Legend />
  <Fieldset.Content />
</Fieldset.Root>
```

[Examples](#examples)
---------------------

### [Disabled](#disabled)

Use the `disabled` prop to disable the fieldset to disable all input elements within the fieldset.

### [Invalid](#invalid)

Use the `invalid` prop to mark the fieldset as invalid. This will show the error text.

Note: You need to pass the `invalid` prop to the `Field` component within the fieldset to make each input element invalid.

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

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`invalid`

`boolean`

Indicates whether the fieldset is invalid.

[

Previous

Field



](/docs/components/field)[

Next

File Upload



](/docs/components/file-upload)