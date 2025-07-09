# Image

Image
=====

Used to display images

[Usage](#usage)
---------------

```
import { Image } from "@chakra-ui/react"
```

```
<Image src="..." />
```

[Examples](#examples)
---------------------

### [Height](#height)

Use the `height` prop to change the height of the image component.

### [Circular](#circular)

Here's an example of how to render a circular image.

### [Aspect Ratio](#aspect-ratio)

Use the `aspectRatio` prop to change the aspect ratio of the image component.

### [Fit](#fit)

By default, the image applies `object-fit: cover`. Use the `fit` prop to change the fit of the image component.

### [HTML Width and Height](#html-width-and-height)

Use the `htmlWidth` and `htmlHeight` props to set the native width and height of the image component.

### [Next.js Image](#nextjs-image)

Use the `asChild` prop to render the image as a child of the `Image` component.

```
// import NextImage from "next/image"

<Image asChild>
  <NextImage src="..." alt="..." />
</Image>
```

[Props](#props)
---------------

The `Image` component supports all native props for the `img` element.

[

Previous

Icon Button



](/docs/components/icon-button)[

Next

Input



](/docs/components/input)