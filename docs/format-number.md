# Format Number

Format Number
=============

Used to format numbers to a specific locale and options

[Storybook](https://storybook.chakra-ui.com/?path=/story/components-format-number--basic)[Ark](https://ark-ui.com/react/docs/utilities/format-number)

[Usage](#usage)
---------------

The number formatting logic is handled by the native `Intl.NumberFormat` API and smartly cached to avoid performance issues when using the same locale and options.

```
import { FormatNumber } from "@chakra-ui/react"
```

```
<FormatNumber value={1000} />
```

[Examples](#examples)
---------------------

### [Percentage](#percentage)

Use the `style=percentage` prop to change the number format to percentage.

### [Currency](#currency)

Use the `style=currency` prop to change the number format to currency.

### [Locale](#locale)

Wrap the `FormatNumber` component within the `LocaleProvider` to change the locale.

### [Unit](#unit)

Use the `style=unit` prop to change the number format to unit.

### [Compact Notation](#compact-notation)

Use the `notation=compact` prop to change the number format to compact notation.

[Props](#props)
---------------

The `FormatNumber` component supports all `Intl.NumberFormat` options in addition to the following props:

Prop

Default

Type

`value` \*

`number`

The number to format

[

Previous

For



](/docs/components/for)[

Next

FormatByte



](/docs/components/format-byte)