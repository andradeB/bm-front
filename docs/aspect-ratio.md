# Aspect Ratio

Aspect Ratio
============

Used to embed responsive videos and maps, etc

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/aspect-ratio)[Storybook](https://storybook.chakra-ui.com/?path=/story/layout-aspectratio--responsive)

[Usage](#usage)
---------------

```
import { AspectRatio } from "@chakra-ui/react"
```

```
<AspectRatio>
  <iframe
    title="naruto"
    src="https://www.youtube.com/embed/QhBnZ6NPOY0"
    allowFullScreen
  />
</AspectRatio>
```

[Examples](#examples)
---------------------

### [Image](#image)

Here's how to embed an image that has a 4 by 3 aspect ratio.

### [Video](#video)

To embed a video with a specific aspect ratio, use an iframe with `src` pointing to the link of the video.

### [Google Map](#google-map)

Here's how to embed a responsive Google map using `AspectRatio`.

### [Responsive](#responsive)

Here's an example of applying a responsive aspect ratio to a box.

[Props](#props)
---------------

These props can be passed to the `AspectRatio` component.

Prop

Default

Type

`ratio`

`ConditionalValue<number> | undefined`

The aspect ratio of the Box. Common values are: \`21/9\`, \`16/9\`, \`9/16\`, \`4/3\`, \`1.85/1\`

[

Previous

Testing



](/docs/components/concepts/testing)[

Next

Bleed



](/docs/components/bleed)