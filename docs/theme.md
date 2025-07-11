# Theme

Theme
=====

Used to force a part of the tree to light or dark mode.

[Usage](#usage)
---------------

```
import { Theme } from "@chakra-ui/react"
```

```
<Theme appearance="dark">
  <div />
</Theme>
```

[Examples](#examples)
---------------------

### [Nested](#nested)

The theme can be nested to apply different appearances to different parts of the tree. This is useful for applying a global appearance and then overriding some parts of it.

Good to know: We use native CSS selectors to achieve this.

### [Portalled](#portalled)

Use the `asChild` prop to force the appearance of portalled elements like the popover and modal content.

### [Page Specific Color Mode](#page-specific-color-mode)

To lock a page to a specific color mode (light or dark), wrap the entire page with the `Theme` component.

You can also combine it with the `ColorModeProvider` if you use the `useColorMode` hook.

```
import { ColorModeProvider } from "@/components/ui/color-mode"
import { Theme } from "@chakra-ui/react"

export const ForcedColorMode = ({ children }) => {
  return (
    <ColorModeProvider forcedTheme="dark">
      <Theme appearance="dark">{/* Rest of the page */}</Theme>
    </ColorModeProvider>
  )
}
```

[

Previous

Visually Hidden



](/docs/components/visually-hidden)[

Next

Installation



](/docs/charts/installation)