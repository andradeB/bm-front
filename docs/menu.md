# Menu

Menu
====

Used to create an accessible dropdown menu

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/menu)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-menu--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/menu.ts)[Ark](https://ark-ui.com/react/docs/components/menu)

[Usage](#usage)
---------------

```
import { Menu } from "@chakra-ui/react"
```

```
<Menu.Root>
  <Menu.Trigger />
  <Menu.Positioner>
    <Menu.Content>
      <Menu.Item />

      <Menu.ItemGroup>
        <Menu.Item />
      </Menu.ItemGroup>

      <Menu.Separator />
      <Menu.Arrow />

      <Menu.CheckboxItem>
        <Menu.ItemIndicator />
      </Menu.CheckboxItem>

      <Menu.RadioItemGroup>
        <Menu.RadioItem>
          <Menu.ItemIndicator />
        </Menu.RadioItem>
      </Menu.RadioItemGroup>
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>
```

[Examples](#examples)
---------------------

### [Command](#command)

Use the `Menu.ItemCommand` component to display a command in the menu.

### [Context menu](#context-menu)

Use the `Menu.ContextTrigger` component to create a context menu.

### [Group](#group)

Use the `Menu.ItemGroup` component to group related menu items.

### [Danger Item](#danger-item)

Here's an example of how to style a menu item that is used to delete an item.

### [Submenu](#submenu)

Here's an example of how to create a submenu.

### [Links](#links)

Pass the `asChild` prop to the `Menu.Item` component to render a link.

When using custom router links, you need to set the `navigate` prop on the `Menu.Root` component.

```
"use client"

import { Menu } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Demo = () => {
  const navigate = useNavigate()
  return (
    <Menu.Root navigate={({ value, node }) => navigate(`/${value}`)}>
      {/* ... */}
    </Menu.Root>
  )
}
```

### [Radio Items](#radio-items)

Here's an example of how to create a menu with radio items.

### [Checkbox Items](#checkbox-items)

Here's an example of how to create a menu with checkbox items.

### [Icon and Command](#icon-and-command)

Compose the menu to include icons and commands.

### [Placement](#placement)

Use the `positioning.placement` prop to control the placement of the menu.

### [Avatar](#avatar)

Here's an example that composes the `Menu` with the `Avatar` component to display a menu underneath an avatar.

### [Anchor Point](#anchor-point)

Use the `positioning.anchorPoint` prop to control the anchor point of the menu.

You can derive it from the `getBoundingClientRect` of a DOM element, or use something like `DOMRect.fromRect({ x: 0, y: 0, width: 1, height: 1 })` to create a new rect.

### [Mixed Layout](#mixed-layout)

Here's an example of how to create a mixed layout of menu items. In this layout, the top horizontal menu includes common menu items.

### [Hide When Detached](#hide-when-detached)

When the menu is rendered in an scrolling container, set the `positioning.hideWhenDetached` to `true` to hide the menu when the trigger is scrolled out of view.

### [Within Dialog](#within-dialog)

To use the `Menu` within a `Dialog`, you need to avoid portalling the `Menu.Positioner` to the document's body.

```
-<Portal>
  <Menu.Positioner>
    <Menu.Content>
      {/* ... */}
    </Menu.Content>
  </Menu.Positioner>
-</Portal>
```

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`closeOnSelect`

`true`

`boolean`

Whether to close the menu when an option is selected

`composite`

`true`

`boolean`

Whether the menu is a composed with other composite widgets like a combobox or tabs

`lazyMount`

`false`

`boolean`

Whether to enable lazy mounting

`loopFocus`

`false`

`boolean`

Whether to loop the keyboard navigation.

`skipAnimationOnMount`

`false`

`boolean`

Whether to allow the initial presence animation.

`typeahead`

`true`

`boolean`

Whether the pressing printable characters should trigger typeahead navigation

`unmountOnExit`

`false`

`boolean`

Whether to unmount on exit.

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`variant`

`'subtle'`

`'subtle' | 'solid'`

The variant of the component

`size`

`'md'`

`'sm' | 'md'`

The size of the component

`anchorPoint`

`Point`

The positioning point for the menu. Can be set by the context menu trigger or the button trigger.

`aria-label`

`string`

The accessibility label for the menu

`defaultHighlightedValue`

`string`

The initial highlighted value of the menu item when rendered. Use when you don't need to control the highlighted value of the menu item.

`defaultOpen`

`boolean`

The initial open state of the menu when rendered. Use when you don't need to control the open state of the menu.

`highlightedValue`

`string`

The controlled highlighted value of the menu item.

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ trigger: string contextTrigger: string content: string groupLabel(id: string): string group(id: string): string positioner: string arrow: string }>`

The ids of the elements in the menu. Useful for composition.

`immediate`

`boolean`

Whether to synchronize the present change immediately or defer it to the next frame

`navigate`

`(details: NavigateDetails) => void`

Function to navigate to the selected item if it's an anchor element

`onEscapeKeyDown`

`(event: KeyboardEvent) => void`

Function called when the escape key is pressed

`onExitComplete`

`VoidFunction`

Function called when the animation ends in the closed state

`onFocusOutside`

`(event: FocusOutsideEvent) => void`

Function called when the focus is moved outside the component

`onHighlightChange`

`(details: HighlightChangeDetails) => void`

Function called when the highlighted menu item changes.

`onInteractOutside`

`(event: InteractOutsideEvent) => void`

Function called when an interaction happens outside the component

`onOpenChange`

`(details: OpenChangeDetails) => void`

Function called when the menu opens or closes

`onPointerDownOutside`

`(event: PointerDownOutsideEvent) => void`

Function called when the pointer is pressed down outside the component

`onSelect`

`(details: SelectionDetails) => void`

Function called when a menu item is selected.

`open`

`boolean`

The controlled open state of the menu

`positioning`

`PositioningOptions`

The options used to dynamically position the menu

`present`

`boolean`

Whether the node is present (controlled by the user)

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

### [Item](#item)

Prop

Default

Type

`value` \*

`string`

The unique value of the menu item option.

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`closeOnSelect`

`boolean`

Whether the menu should be closed when the option is selected.

`disabled`

`boolean`

Whether the menu item is disabled

`onSelect`

`VoidFunction`

The function to call when the item is selected

`valueText`

`string`

The textual value of the option. Used in typeahead navigation of the menu. If not provided, the text content of the menu item will be used.

[

Previous

Input



](/docs/components/input)[

Next

Number Input



](/docs/components/number-input)