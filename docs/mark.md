# Mark

Mark
====

Used to mark text for emphasis.

[Usage](#usage)
---------------

```
import { Mark } from "@chakra-ui/react"
```

```
<Text>
  The <Mark>design system</Mark> is a collection of UI elements
</Text>
```

[Examples](#examples)
---------------------

### [Variants](#variants)

Use the `variant` prop to change the color of the mark.

The design system is a collection of UI elements

The design system is a collection of UI elements

The design system is a collection of UI elements

The design system is a collection of UI elements

```
import { For, Mark, Stack, Text } from "@chakra-ui/react"

const Demo = () => {
  return (
    <Stack gap="6">
      <For each={["subtle", "solid", "text", "plain"]}>
        {(variant) => (
          <Text key={variant}>
            The <Mark variant={variant}>design system</Mark> is a collection of
            UI elements
          </Text>
        )}
      </For>
    </Stack>
  )
}
```

[Props](#props)
---------------

[

Previous

List



](/docs/components/list)[

Next

Prose



](/docs/components/prose)