# Grid

Grid
====

Used to manage grid layouts

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/grid)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-grid--basic)

[Usage](#usage)
---------------

```
import { Grid, GridItem } from "@chakra-ui/react"
```

```
<Grid>
  <GridItem />
  <GridItem />
</Grid>
```

[Examples](#examples)
---------------------

### [Col Span](#col-span)

Pass `colSpan` prop to `GridItem` to span across columns.

### [Spanning Columns](#spanning-columns)

In some layouts, you may need certain grid items to span specific amount of columns or rows instead of an even distribution

[Props](#props)
---------------

Prop

Default

Type

`templateColumns`

`SystemStyleObject['gridTemplateColumns'] | undefined`

`autoFlow`

`SystemStyleObject['gridAutoFlow'] | undefined`

`autoRows`

`SystemStyleObject['gridAutoRows'] | undefined`

`autoColumns`

`SystemStyleObject['gridAutoColumns'] | undefined`

`templateRows`

`SystemStyleObject['gridTemplateRows'] | undefined`

`templateAreas`

`SystemStyleObject['gridTemplateAreas'] | undefined`

`column`

`SystemStyleObject['gridColumn'] | undefined`

`row`

`SystemStyleObject['gridRow'] | undefined`

`inline`

`boolean | undefined`

[

Previous

Float



](/docs/components/float)[

Next

Group



](/docs/components/group)