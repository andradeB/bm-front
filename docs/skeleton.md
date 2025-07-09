# Skeleton

Skeleton
========

Used to render a placeholder while the content is loading.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/skeleton)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-skeleton--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/skeleton.ts)

[Usage](#usage)
---------------

```
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react"
```

```
<Stack gap="6" maxW="xs">
  <HStack width="full">
    <SkeletonCircle size="10" />
    <SkeletonText noOfLines={2} />
  </HStack>
  <Skeleton height="200px" />
</Stack>
```

[Examples](#examples)
---------------------

### [Feed](#feed)

Use the `Skeleton` component to create a feed skeleton.

### [Text](#text)

Use the `SkeletonText` component to create a skeleton for text.

### [With Children](#with-children)

Use the `loading` prop to show the skeleton while the content is loading.

### [Variants](#variants)

Use the `variant` prop to change the visual style of the Skeleton.

### [Content Loading](#content-loading)

When `loading` is changed to `false`, the Skeleton component will fade in.

### [Start and End Color](#start-and-end-color)

Use the `--start-color` and `--end-color` CSS variables to change the start and end color of the skeleton.

[Props](#props)
---------------

Prop

Default

Type

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`loading`

`true`

`'true' | 'false'`

The loading of the component

`variant`

`'pulse'`

`'pulse' | 'shine' | 'none'`

The variant of the component

[

Previous

Separator



](/docs/components/separator)[

Next

Slider



](/docs/components/slider)