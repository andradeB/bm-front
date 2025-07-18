# Portal

Portal
======

Used to render an element outside the DOM hierarchy.

[Usage](#usage)
---------------

The `Portal` uses the `ReactDOM.createPortal` API to render an element at the end of `document.body` or specific container.

```
import { Portal } from "@chakra-ui/react"
```

```
<Portal>
  <div>Portal content</div>
</Portal>
```

[Examples](#examples)
---------------------

### [Custom Container](#custom-container)

Use the `container` prop to render the portal in a custom container.

```
import { Portal } from "@chakra-ui/react"

const Demo = () => {
  const containerRef = React.useRef()
  return (
    <>
      <Portal container={containerRef}>
        <div>Portal content</div>
      </Portal>
      <div ref={containerRef} />
    </>
  )
}
```

### [Disabled](#disabled)

Use the `disabled` prop to disable the portal. This will render the children in the same DOM hierarchy.

```
import { Portal } from "@chakra-ui/react"

const Demo = () => {
  return (
    <Portal disabled>
      <div>Will render the content in place</div>
    </Portal>
  )
}
```

[Server Rendering](#server-rendering)
-------------------------------------

During SSR, the `Portal` component directly renders its content. If you run into any mismatch warnings, we recommended conditionally rendering the `Portal` component only on the client-side.

[Props](#props)
---------------

Prop

Default

Type

`container`

`RefObject<HTMLElement | null>`

`disabled`

`boolean`

[

Previous

Presence



](/docs/components/presence)[

Next

Show



](/docs/components/show)