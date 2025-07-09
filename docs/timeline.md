# Timeline

Timeline
========

Used to display a list of events in chronological order

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/timeline)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-timeline--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/timeline.ts)

[Usage](#usage)
---------------

```
import { Timeline } from "@chakra-ui/react"
```

```
<Timeline.Root>
  <Timeline.Item>
    <Timeline.Connector>
      <Timeline.Separator />
      <Timeline.Indicator />
    </Timeline.Connector>
    <Timeline.Content>
      <Timeline.Title />
      <Timeline.Description />
    </Timeline.Content>
  </Timeline.Item>
</Timeline.Root>
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the timeline.

### [Variants](#variants)

Use the `variant` prop to change the variant of the timeline.

### [Content Before](#content-before)

Here's an example of a timeline with content before the timeline indicator.

### [Alternating Content](#alternating-content)

Here's an example of a timeline with alternating content.

### [Composition](#composition)

Here's an example of how to compose the timeline with other components to create a consistent-looking timeline.

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

`variant`

`'solid'`

`'subtle' | 'solid' | 'outline' | 'plain'`

The variant of the component

`size`

`'md'`

`'sm' | 'md' | 'lg' | 'xl'`

The size of the component

[

Previous

Textarea



](/docs/components/textarea)[

Next

Toast



](/docs/components/toast)