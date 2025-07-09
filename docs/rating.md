# Rating

Rating
======

Used to show reviews and ratings in a visual format.

[Storybook](https://storybook.chakra-ui.com/?path=/story/components-rating--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/rating.ts)[Ark](https://ark-ui.com/react/docs/components/rating-group)

[Usage](#usage)
---------------

```
import { RatingGroup } from "@chakra-ui/react"
```

```
<RatingGroup.Root>
  <RatingGroup.Label />
  <RatingGroup.HiddenInput />
  <RatingGroup.Control>
    <RatingGroup.Item>
      <RatingGroup.ItemIndicator />
    </RatingGroup.Item>
  </RatingGroup.Control>
</RatingGroup.Root>
```

If you prefer a closed component composition, check out the [snippet below](#closed-component).

[Shortcuts](#shortcuts)
-----------------------

The `Rating` component also provides a set of shortcuts for common use cases.

### [RatingControl](#ratingcontrol)

This component renders the number of rating items specified in the `count` prop.

This works:

```
<RatingGroup.Control>
  {Array.from({ length: 5 }).map((_, index) => (
    <RatingGroup.Item key={index} index={index + 1}>
      <RatingGroup.ItemIndicator />
    </RatingGroup.Item>
  ))}
</RatingGroup.Control>
```

This might be more concise, if you don't need to customize the rating icons:

```
<RatingGroup.Control />
```

[Examples](#examples)
---------------------

### [Basic](#basic)

### [Sizes](#sizes)

Use the `size` prop to change the size of the rating component.

### [Controlled](#controlled)

Use the `value` and `onValueChange` prop to control the rating value.

### [Store](#store)

An alternative way to control the rating is to use the `RootProvider` component and the `useRatingGroup` store hook.

This way you can access the rating state and methods from outside the component.

### [ReadOnly](#readonly)

Use the `readOnly` prop to make the rating component read-only.

### [Hook Form](#hook-form)

Here's an example of how to use rating with `react-hook-form`.

### [Custom Icon](#custom-icon)

Use the `icon` prop to pass a custom icon to the rating component. This will override the default star icon.

### [Label](#label)

Render the `RatingGroup.Label` component to provide a human-readable label for the rating component.

### [Half Star](#half-star)

Use the `allowHalf` prop to allow half-star ratings.

### [Emoji](#emoji)

Compose the rating component with emojis.

### [Colors](#colors)

Use the `colorPalette` prop to change the color of the rating

### [Testimonial](#testimonial)

Use the rating component to show testimonials.

### [Closed Component](#closed-component)

Here's how to setup the Rating for a closed component composition.

```
import { RatingGroup } from "@chakra-ui/react"
import * as React from "react"

export interface RatingProps extends RatingGroup.RootProps {
  icon?: React.ReactElement
  count?: number
  label?: React.ReactNode
}

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  function Rating(props, ref) {
    const { icon, count = 5, label, ...rest } = props
    return (
      <RatingGroup.Root ref={ref} count={count} {...rest}>
        {label && <RatingGroup.Label>{label}</RatingGroup.Label>}
        <RatingGroup.HiddenInput />
        <RatingGroup.Control>
          {Array.from({ length: count }).map((_, index) => (
            <RatingGroup.Item key={index} index={index + 1}>
              <RatingGroup.ItemIndicator icon={icon} />
            </RatingGroup.Item>
          ))}
        </RatingGroup.Control>
      </RatingGroup.Root>
    )
  },
)
```

Here's how to use the it

```
<Rating defaultValue={3} size="sm" />
```

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`count`

`'5'`

`number`

The total number of ratings.

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`size`

`'md'`

`'xs' | 'sm' | 'md' | 'lg'`

The size of the component

`allowHalf`

`boolean`

Whether to allow half stars.

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`autoFocus`

`boolean`

Whether to autofocus the rating.

`defaultValue`

`number`

The initial value of the rating when rendered. Use when you don't need to control the value of the rating.

`disabled`

`boolean`

Whether the rating is disabled.

`form`

`string`

The associate form of the underlying input element.

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ root: string label: string hiddenInput: string control: string item(id: string): string }>`

The ids of the elements in the rating. Useful for composition.

`name`

`string`

The name attribute of the rating element (used in forms).

`onHoverChange`

`(details: HoverChangeDetails) => void`

Function to be called when the rating value is hovered.

`onValueChange`

`(details: ValueChangeDetails) => void`

Function to be called when the rating value changes.

`readOnly`

`boolean`

Whether the rating is readonly.

`required`

`boolean`

Whether the rating is required.

`translations`

`IntlTranslations`

Specifies the localized strings that identifies the accessibility elements and their states

`value`

`number`

The controlled value of the rating

`as`

`React.ElementType`

The underlying element to render.

`unstyled`

`boolean`

Whether to remove the component's style.

### [Item](#item)

Prop

Default

Type

`index` \*

`number`

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

[

Previous

Radio



](/docs/components/radio)[

Next

Segmented Control



](/docs/components/segmented-control)