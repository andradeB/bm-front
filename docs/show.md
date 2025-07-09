# Show

Show
====

Used to conditional render part of the view based on a condition.

[Usage](#usage)
---------------

The `Show` component renders its children when the `when` value is truthy, otherwise it renders the `fallback` prop.

```
import { Show } from "@chakra-ui/react"
```

```
<Show when={...} fallback={...}>
  <div>Content</div>
</Show>
```

[Examples](#examples)
---------------------

### [Fallback](#fallback)

Use the `fallback` prop to render a fallback component when the array is empty or undefined.

### [Render Prop](#render-prop)

Use the `children` render prop to narrow the type of the `when` value and remove `undefined` | `null`

[Props](#props)
---------------

Prop

Default

Type

`when`

`T | null | undefined`

If \`true\`, it'll render the \`children\` prop

`fallback`

`React.ReactNode | undefined`

The fallback content to render if \`when\` is \`false\`

[

Previous

Portal



](/docs/components/portal)[

Next

Visually Hidden



](/docs/components/visually-hidden)