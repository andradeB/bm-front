# Group

Group
=====

Used to group and attach elements together

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/group)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-group--basic)

[Usage](#usage)
---------------

```
import { Group } from "@chakra-ui/react"
```

```
<Group>
  <div />
  <div />
</Group>
```

[Examples](#examples)
---------------------

### [Button](#button)

Here's an example of using the `Group` component to group buttons together.

### [Attached](#attached)

Use the `attached` prop to attach the children together.

**Note:** When composing custom components and attaching them to a `Group`, ensure you forward props.

```
export const Demo = () => {
  return (
    <Group attached>
      <FocusButton />
      <IconButton variant="outline">Two</IconButton>
    </Group>
  )
}

function FocusButton(props: ButtonProps) {
  return (
    <IconButton variant="outline" {...props}>
      <LuFocus />
    </IconButton>
  )
}
```

### [Grow](#grow)

Use the `grow` prop to make the children grow to fill the available space.

[Props](#props)
---------------

[

Previous

Grid



](/docs/components/grid)[

Next

SimpleGrid



](/docs/components/simple-grid)