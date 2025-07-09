# Client Only

Client Only
===========

Used to render content only on the client side.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/client-only)

[Usage](#usage)
---------------

```
import { ClientOnly, Skeleton } from "@chakra-ui/react"
```

```
<ClientOnly>
  <ColorModeButton />
</ClientOnly>
```

[Examples](#examples)
---------------------

### [Fallback](#fallback)

Use the `fallback` prop to render a loading state while the client-side content is being prepared.

```
<ClientOnly fallback={<Skeleton boxSize="8" />}>
  <ColorModeButton />
</ClientOnly>
```

### [Render Prop (Recommended)](#render-prop-recommended)

When your component accesses browser-only APIs (like `window`, `document`, or `localStorage`), use the render prop pattern to prevent server-side rendering issues:

```
<ClientOnly fallback={<Skeleton />}>
  {() => (
    <div>
      Current URL: {window.location.href}
      Screen width: {window.innerWidth}px
    </div>
  )}
</ClientOnly>
```

This pattern ensures that components accessing browser APIs are only evaluated on the client side, preventing hydration mismatches and server-side errors.

It can also be used for rendering heavy components that are not needed on the server side.

### [Direct Children (Use with Caution)](#direct-children-use-with-caution)

While you can pass components directly as children, be careful with components that access browser APIs:

```
/* ❌ This may cause server-side errors */
<ClientOnly fallback={<Skeleton />}>
  <ComponentThatUsesWindow />
</ClientOnly>

/* ✅ This is safe */
<ClientOnly fallback={<Skeleton />}>
  {() => <ComponentThatUsesWindow />}
</ClientOnly>
```

[Props](#props)
---------------

These props can be passed to the `ClientOnly` component.

Prop

Default

Type

`fallback`

`React.ReactNode | undefined`

The fallback content to render while the component is mounting on the client side.

[

Previous

Tree View



](/docs/components/tree-view)[

Next

Download Trigger



](/docs/components/download-trigger)