# Drawer

Drawer
======

Used to render a content that slides in from the side of the screen.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/drawer)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-drawer--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/drawer.ts)[Ark](https://ark-ui.com/react/docs/components/dialog)

[Usage](#usage)
---------------

```
import { Drawer } from "@chakra-ui/react"
```

```
<Drawer.Root>
  <Drawer.Backdrop />
  <Drawer.Trigger />
  <Drawer.Positioner>
    <Drawer.Content>
      <Drawer.CloseTrigger />
      <Drawer.Header>
        <Drawer.Title />
      </Drawer.Header>
      <Drawer.Body />
      <Drawer.Footer />
    </Drawer.Content>
  </Drawer.Positioner>
</Drawer.Root>
```

[Examples](#examples)
---------------------

### [Controlled](#controlled)

Use the `open` and `onOpenChange` props to control the drawer component.

### [Sizes](#sizes)

Use the `size` prop to change the size of the drawer component.

### [Context](#context)

Use the `DrawerContext` component to access the drawer state and methods from outside the drawer.

### [Offset](#offset)

Pass the `offset` prop to the `DrawerContent` to change the offset of the drawer component.

### [Placement](#placement)

Use the `placement` prop to change the placement of the drawer component.

### [Initial Focus](#initial-focus)

Use the `initialFocusEl` prop to set the initial focus of the drawer component.

### [Custom Container](#custom-container)

Here's an example of how to render the drawer component in a custom container.

Consider setting `closeOnInteractOutside` to `false` to prevent the drawer from closing when interacting outside the drawer.

### [Header Actions](#header-actions)

Here's an example of rendering actions in the header of the drawer component.

### [Drawer with conditional variants](#drawer-with-conditional-variants)

Here is an example of how to change variants based on the different breakpoints.

This example uses the `mdDown` breakpoint to change the drawer's placement on smaller screens. This approach is recommended because both conditions are translated into CSS media queries, which helps avoid base style merging issues.

If you really want to use the base condition instead, you’ll also need to define corresponding sizes.  
For example: `<Drawer.Root placement={{ base: "bottom", md: "end" }} size={{ base: "xs", md: "md" }}>`

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`size`

`'xs'`

`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'`

The size of the component

`placement`

`'end'`

`'start' | 'end' | 'top' | 'bottom'`

The placement of the component

`contained`

`'true' | 'false'`

The contained of the component

`as`

`React.ElementType`

The underlying element to render.

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`unstyled`

`boolean`

Whether to remove the component's style.

[

Previous

Dialog



](/docs/components/dialog)[

Next

Editable



](/docs/components/editable)