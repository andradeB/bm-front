# Link Overlay

Link Overlay
============

Used to stretch a link over a container.

[Usage](#usage)
---------------

The `LinkOverlay` component provides a semantic way to link an entire component or card.

```
import { LinkBox, LinkOverlay } from "@chakra-ui/react"
```

```
<LinkBox>
  <LinkOverlay />
</LinkBox>
```

[Examples](#examples)
---------------------

### [Article](#article)

Here's an example of using `LinkOverlay` to link an entire article.

### [Custom Link](#custom-link)

Use the `asChild` prop to add support for custom Link component like `next/link` or react router's `Link`

```
import { LinkBox, LinkOverlay } from "@chakra-ui/react"
import NextLink from "next/link"

function Example() {
  return (
    <LinkBox as="article">
      <h2>
        <LinkOverlay asChild>
          <NextLink href="#">Blog Post Title</NextLink>
        </LinkOverlay>
      </h2>
      <p>Some blog post content</p>
      <NextLink href="#inner-link">Some inner link</NextLink>
    </LinkBox>
  )
}
```

[Caveat](#caveat)
-----------------

One of the side-effects of this technique is that the content can't be "selectable" (i.e. with a pointing device), however, this seems to be pretty uncommon in web design.

[

Previous

Link



](/docs/components/link)[

Next

List



](/docs/components/list)