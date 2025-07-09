# Pagination

Pagination
==========

Used to navigate through a series of pages.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/pagination)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-pagination--basic)[Ark](https://ark-ui.com/react/docs/components/pagination)

[Usage](#usage)
---------------

```
import { Pagination } from "@chakra-ui/react"
```

```
<Pagination.Root>
  <Pagination.PrevTrigger />
  <Pagination.Ellipsis />
  <Pagination.Item />
  <Pagination.PageText />
  <Pagination.NextTrigger />
</Pagination.Root>
```

[Shortcuts](#shortcuts)
-----------------------

The `Pagination` component also provides a set of shortcuts for common use cases.

### [PaginationItems](#paginationitems)

This component renders the number of pages based on the `count` and `pageSize` props.

Rendering this:

```
<Pagination.Items />
```

is shorthand for this:

```
<Pagination.Context>
  {({ pages }) =>
    pages.map((page, index) =>
      page.type === "page" ? (
        <Pagination.Item key={index} {...page} />
      ) : (
        <Pagination.Ellipsis key={index} index={index} />
      ),
    )
  }
</Pagination.Context>
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the pagination.

The pagination sizes are mapped to the `Button` component sizes.

### [Variants](#variants)

Use the `variant` prop to control the variant of the pagination items and ellipsis.

The variant matches the `Button` component variant.

### [Controlled](#controlled)

Use the `page` and `onPageChange` props to control the current page.

### [Sibling Count](#sibling-count)

Use `siblingCount` to control the number of sibling pages to show before and after the current page.

### [Compact](#compact)

Use the `Pagination.PageText` to create a compact pagination. This can be useful for mobile views.

### [As Link](#as-link)

Here's an example of rendering the pagination as links.

### [Attached](#attached)

Here's an example of composing the pagination with the `Group` component to attach the pagination items and triggers.

### [Count Text](#count-text)

Pass `format="long"` to the `Pagination.PageText` component to show the count text.

### [Data Driven](#data-driven)

Here's an example of controlling the pagination state and using the state to chunk the data.

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`defaultPage`

`'1'`

`number`

The initial active page when rendered. Use when you don't need to control the active page of the pagination.

`defaultPageSize`

`'10'`

`number`

The initial number of data items per page when rendered. Use when you don't need to control the page size of the pagination.

`siblingCount`

`'1'`

`number`

Number of pages to show beside active page

`type`

`'\'button\''`

`'button' | 'link'`

The type of the trigger element

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`count`

`number`

Total number of data items

`ids`

`Partial<{ root: string ellipsis(index: number): string prevTrigger: string nextTrigger: string item(page: number): string }>`

The ids of the elements in the accordion. Useful for composition.

`onPageChange`

`(details: PageChangeDetails) => void`

Called when the page number is changed

`onPageSizeChange`

`(details: PageSizeChangeDetails) => void`

Called when the page size is changed

`page`

`number`

The controlled active page

`pageSize`

`number`

The controlled number of data items per page

`translations`

`IntlTranslations`

Specifies the localized strings that identifies the accessibility elements and their states

[

Previous

Number Input



](/docs/components/number-input)[

Next

Password Input



](/docs/components/password-input)