# For

For
===

Used to loop over an array and render a component for each item.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/for)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-for--basic)

[Usage](#usage)
---------------

The `For` component is used to render a list of items in a strongly typed manner. It is similar to the `.map()`.

```
import { For } from "@chakra-ui/react"
```

```
<For each={[]} fallback={...} />
```

[Examples](#examples)
---------------------

### [Object](#object)

Here's an example of using the `For` component to loop over an object.

### [Fallback](#fallback)

Use the `fallback` prop to render a fallback component when the array is empty or undefined.

[Props](#props)
---------------

Prop

Default

Type

`each`

`T[] | readonly T[] | undefined`

The array to iterate over

`fallback`

`React.ReactNode | undefined`

The fallback content to render when the array is empty

[

Previous

EnvironmentProvider



](/docs/components/environment-provider)[

Next

FormatNumber



](/docs/components/format-number)