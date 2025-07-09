# Breadcrumb

Breadcrumb
==========

Used to display a page's location within a site's hierarchical structure

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/breadcrumb)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-breadcrumb--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/breadcrumb.ts)

[Usage](#usage)
---------------

```
import { Breadcrumb } from "@chakra-ui/react"
```

```
<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link />
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
  </Breadcrumb.List>
</Breadcrumb.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the breadcrumb component

### [Variants](#variants)

Use the `variant` prop to change the appearance of the breadcrumb component

### [With Separator](#with-separator)

Use the `Breadcrumb.Separator` component to add a custom separator

### [Icon](#icon)

Add a custom icon to the breadcrumb by rendering it within `Breadcrumb.Link`

### [Menu](#menu)

Wrap the `Breadcrumb.Link` inside the `MenuTrigger` to ensure it works correctly within the menu component

### [Ellipsis](#ellipsis)

Render the `Breadcrumb.Ellipsis` component to show an ellipsis after a breadcrumb item

### [Routing Library](#routing-library)

Use the `asChild` prop to change the underlying breadcrumb link

```
import { Breadcrumb } from "@chakra-ui/react"
import { Link } from "next/link"

export const Example = () => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link asChild>
            <Link href="/docs">Docs</Link>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}
```

### [Closed Component](#closed-component)

Here's how to setup the Breadcrumb for a closed component composition.

```
import {
  Breadcrumb as ChakraBreadcrumb,
  Show,
  type SystemStyleObject,
} from "@chakra-ui/react"
import * as React from "react"

export interface BreadcrumbProps extends ChakraBreadcrumb.RootProps {
  separator?: React.ReactNode
  separatorGap?: SystemStyleObject["gap"]
  items: Array<{ title: React.ReactNode; url?: string }>
}

export const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  function BreadcrumbRoot(props, ref) {
    const { separator, separatorGap, items, ...rest } = props

    return (
      <ChakraBreadcrumb.Root ref={ref} {...rest}>
        <ChakraBreadcrumb.List gap={separatorGap}>
          {items.map((item, index) => {
            const last = index === items.length - 1
            return (
              <React.Fragment key={index}>
                <ChakraBreadcrumb.Item>
                  <ChakraBreadcrumb.Link href={item.url}>
                    {item.title}
                  </ChakraBreadcrumb.Link>
                </ChakraBreadcrumb.Item>
                <Show
                  when={last}
                  fallback={
                    <ChakraBreadcrumb.Separator>
                      {separator}
                    </ChakraBreadcrumb.Separator>
                  }
                >
                  <ChakraBreadcrumb.Item>
                    <ChakraBreadcrumb.CurrentLink>
                      {item.title}
                    </ChakraBreadcrumb.CurrentLink>
                  </ChakraBreadcrumb.Item>
                </Show>
              </React.Fragment>
            )
          })}
        </ChakraBreadcrumb.List>
      </ChakraBreadcrumb.Root>
    )
  },
)
```

If you want to automatically add the closed component to your project, run the command:

```
npx @chakra-ui/cli snippet add breadcrumb
```

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

`variant`

`'plain'`

`'underline' | 'plain'`

The variant of the component

`size`

`'md'`

`'sm' | 'md' | 'lg'`

The size of the component

`separator`

`React.ReactNode`

`separatorGap`

`SystemStyleObject['gap']`

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

Badge



](/docs/components/badge)[

Next

Button



](/docs/components/button)