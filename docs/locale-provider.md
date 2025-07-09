# Locale Provider

Locale Provider
===============

Used for globally setting the locale

[Usage](#usage)
---------------

The `LocaleProvider` component sets the locale for your app, formatting dates, numbers, and other locale-specific data.

Most Chakra UI components that read the locale set by the `LocaleProvider`.

```
import { LocaleProvider, useLocaleContext } from "@chakra-ui/react"
```

```
<LocaleProvider locale="...">{/* Your App */}</LocaleProvider>
```

[Examples](#examples)
---------------------

### [Setting Locale](#setting-locale)

Set the `locale` prop to the locale you want to use.

```
<LocaleProvider locale="ar-BH">
  <Component />
</LocaleProvider>
```

### [Reading Locale](#reading-locale)

```
export const Usage = () => {
  const { locale, dir } = useLocaleContext()
  return <pre>{JSON.stringify({ locale, dir }, null, 2)}</pre>
}
```

[Props](#props)
---------------

Prop

Default

Type

`locale` \*

`''en-US''`

`string`

The locale to use for the application.

[

Previous

FormatByte



](/docs/components/format-byte)[

Next

Overlay Manager



](/docs/components/overlay-manager)