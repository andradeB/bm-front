# Highlight

Highlight
=========

Used to highlight substrings of a text.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/highlight)[Storybook](https://storybook.chakra-ui.com/?path=/story/typography-highlight--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/highlight.ts)[Ark](https://ark-ui.com/react/docs/utilities/highlight)

[Usage](#usage)
---------------

```
import { Highlight } from "@chakra-ui/react"
```

```
<Highlight query="Hello">Hello World</Highlight>
```

[Examples](#examples)
---------------------

### [Multiple](#multiple)

Pass an array of strings to the `query` prop to highlight multiple substrings.

### [Custom Style](#custom-style)

Use the `styles` prop to customize the style of the highlighted text.

### [Search Query](#search-query)

Use the highlight component to highlight search query results.

### [With Squiggle](#with-squiggle)

Here's an example of how to render a custom squiggle image around the highlighted text. Useful for a more fancy effect.

[Props](#props)
---------------

Prop

Default

Type

`query` \*

`string | string[]`

The query to highlight in the text

`text` \*

`string`

The text to highlight

`ignoreCase`

`boolean | undefined`

Whether to ignore case while matching

`matchAll`

`boolean | undefined`

Whether to match multiple instances of the query

`styles`

`SystemStyleObject | undefined`

[

Previous

Heading



](/docs/components/heading)[

Next

Kbd



](/docs/components/kbd)