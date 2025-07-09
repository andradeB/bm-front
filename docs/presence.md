# Presence

Presence
========

Used to animate the entry and exit of an element while controlled the render behavior

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/presence)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-presence--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/presence.ts)[Ark](https://ark-ui.com/react/docs/components/presence)

[Usage](#usage)
---------------

```
import { Presence } from "@chakra-ui/react"
```

```
<Presence present={true}>
  <div>Presence content</div>
</Presence>
```

Think of `Presence` like the `AnimatePresence` component from Framer Motion, except that it's built for CSS animations instead.

The key things to note:

*   the `present` prop is a boolean that controls the presence state of the component.
*   the `_open` condition is used to style the open state.
*   the `_closed` condition is used to style the closed state.

[Examples](#examples)
---------------------

### [Fade](#fade)

Setting the animation name to `fade-in` and `fade-out`, the component will animate the entry and exit of the element.

### [Scale Fade](#scale-fade)

Using the animation styles `scale-fade-in` and `scale-fade-out`, the component will animate the entry and exit of the element.

### [Slide Fade](#slide-fade)

Here's an example that uses the animation names `slide-from-bottom` and `slide-to-bottom` to animate the entry and exit of the element.

### [Slide](#slide)

Here's an example that uses the animation names `slide-from-bottom-full` and `slide-to-bottom-full` to animate the entry and exit of the element.

### [Lazy Mount](#lazy-mount)

Use the `lazyMount` prop to delay the mount of the component until it's present.

### [Unmount On Exit](#unmount-on-exit)

Use the `unmountOnExit` prop to unmount the component when it's not present.

[

Previous

Overlay Manager



](/docs/components/overlay-manager)[

Next

Portal



](/docs/components/portal)