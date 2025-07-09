# Format Byte

Format Byte
===========

Used to format bytes to a human-readable format

[Storybook](https://storybook.chakra-ui.com/?path=/story/components-format-byte--basic)[Ark](https://ark-ui.com/react/docs/utilities/format-byte)

[Usage](#usage)
---------------

```
import { FormatByte } from "@chakra-ui/react"
```

```
<FormatByte value={1000} />
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

The format functions works for any size of bytes.

### [Format Bits](#format-bits)

Use the `unit` prop to change the byte format to bits.

### [Locale](#locale)

Wrap the `FormatByte` component within the `LocaleProvider` to change the locale.

### [Unit Display](#unit-display)

Use the `unitDisplay` prop to change the byte format to compact notation.

[Props](#props)
---------------

Prop

Default

Type

`value` \*

`number`

The byte size to format

`unit`

`'bit' | 'byte'`

The unit granularity to display

`unitDisplay`

`'long' | 'short' | 'narrow'`

The unit display

[

Previous

FormatNumber



](/docs/components/format-number)[

Next

LocaleProvider



](/docs/components/locale-provider)