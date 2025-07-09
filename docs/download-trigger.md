# Download Trigger

Download Trigger
================

Used to trigger a download of a file.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/download-trigger)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-download-trigger--basic)[Ark](https://ark-ui.com/docs/utilities/download-trigger)

[Usage](#usage)
---------------

```
import { DownloadTrigger } from "@chakra-ui/react"
```

```
<DownloadTrigger data="..." fileName="x.png" mimeType="image/png" />
```

[Examples](#examples)
---------------------

### [Basic](#basic)

Pass the data you want to download to the `data` prop, and specify the `fileName` and `mimeType` of the file.

### [Download SVG](#download-svg)

Here's an example of how to download an SVG file.

### [Promise](#promise)

You can also trigger downloads from a promise that returns a `Blob`, `File`, or `string`.

### [File Size](#file-size)

Compose the `DownloadTrigger` with the `FormatByte` component to display the size of the file in a human-readable format.

[Props](#props)
---------------

[

Previous

ClientOnly



](/docs/components/client-only)[

Next

EnvironmentProvider



](/docs/components/environment-provider)