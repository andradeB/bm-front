# Empty State

Empty State
===========

Used to indicate when a resource is empty or unavailable.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/empty-state)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-empty-state--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/empty-state.ts)

[Usage](#usage)
---------------

```
import { EmptyState } from "@chakra-ui/react"
```

```
<EmptyState.Root>
  <EmptyState.Content>
    <EmptyState.Indicator />
    <EmptyState.Title />
    <EmptyState.Description />
  </EmptyState.Content>
</EmptyState.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to set the size of the Empty state.

### [Action](#action)

Here's an example of an empty state with an action button.

### [List](#list)

Here's an example of an empty state with a list.

### [Closed Component](#closed-component)

Here's how to setup the Empty State for a closed component composition.

```
import { EmptyState as ChakraEmptyState, VStack } from "@chakra-ui/react"
import * as React from "react"

export interface EmptyStateProps extends ChakraEmptyState.RootProps {
  title: string
  description?: string
  icon?: React.ReactNode
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  function EmptyState(props, ref) {
    const { title, description, icon, children, ...rest } = props
    return (
      <ChakraEmptyState.Root ref={ref} {...rest}>
        <ChakraEmptyState.Content>
          {icon && (
            <ChakraEmptyState.Indicator>{icon}</ChakraEmptyState.Indicator>
          )}
          {description ? (
            <VStack textAlign="center">
              <ChakraEmptyState.Title>{title}</ChakraEmptyState.Title>
              <ChakraEmptyState.Description>
                {description}
              </ChakraEmptyState.Description>
            </VStack>
          ) : (
            <ChakraEmptyState.Title>{title}</ChakraEmptyState.Title>
          )}
          {children}
        </ChakraEmptyState.Content>
      </ChakraEmptyState.Root>
    )
  },
)
```

If you want to automatically add the closed component to your project, run the command:

```
npx @chakra-ui/cli snippet add empty-state
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

`size`

`'md'`

`'sm' | 'md' | 'lg'`

The size of the component

[

Previous

Editable



](/docs/components/editable)[

Next

Field



](/docs/components/field)