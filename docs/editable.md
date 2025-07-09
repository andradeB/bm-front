# Editable

Editable
========

Used for inline renaming of some text.

[Source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/editable)[Storybook](https://storybook.chakra-ui.com/?path=/story/components-editable--basic)[Recipe](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/theme/recipes/editable.ts)[Ark](https://ark-ui.com/react/docs/components/editable)

[Usage](#usage)
---------------

```
import { Editable } from "@chakra-ui/react"
```

```
<Editable.Root>
  <Editable.Preview />
  <Editable.Input />
</Editable.Root>
```

[Examples](#examples)
---------------------

### [Double Click](#double-click)

Use the `activationMode` prop to make the content editable when users double click.

### [Disabled](#disabled)

Use the `disabled` prop to disable the editable component.

### [Textarea](#textarea)

You can make a text area editable.

### [With Controls](#with-controls)

Add controls such as "edit", "cancel" and "submit" to `Editable` for better user experience.

### [Controlled](#controlled)

Use the `value` and `onValueChange` props to control the editable component.

### [Store](#store)

An alternative way to control the editable component is to use the `RootProvider` component and the `useEditable` store hook.

This way you can access the editable state and methods from outside the editable.

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`activationMode`

`'\'focus\''`

`ActivationMode`

The activation mode for the preview element. - "focus" - Enter edit mode when the preview is focused - "dblclick" - Enter edit mode when the preview is double-clicked - "click" - Enter edit mode when the preview is clicked - "none" - Edit can be triggered programmatically only

`selectOnFocus`

`true`

`boolean`

Whether to select the text in the input when it is focused.

`submitMode`

`'\'both\''`

`SubmitMode`

The action that triggers submit in the edit mode: - "enter" - Trigger submit when the enter key is pressed - "blur" - Trigger submit when the editable is blurred - "none" - No action will trigger submit. You need to use the submit button - "both" - Pressing \`Enter\` and blurring the input will trigger submit

`colorPalette`

`'gray'`

`'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'`

The color palette of the component

`size`

`'md'`

`'sm' | 'md' | 'lg'`

The size of the component

`asChild`

`boolean`

Use the provided child element as the default rendered element, combining their props and behavior.

For more details, read our [Composition](/docs/components/concepts/composition) guide.

`autoResize`

`boolean`

Whether the editable should auto-resize to fit the content.

`defaultEdit`

`boolean`

Whether the editable is in edit mode by default.

`defaultValue`

`string`

The initial value of the editable when rendered. Use when you don't need to control the value of the editable.

`disabled`

`boolean`

Whether the editable is disabled.

`edit`

`boolean`

Whether the editable is in edit mode.

`finalFocusEl`

`() => HTMLElement | null`

The element to receive focus when the editable is closed.

`form`

`string`

The associate form of the underlying input.

`id`

`string`

The unique identifier of the machine.

`ids`

`Partial<{ root: string area: string label: string preview: string input: string control: string submitTrigger: string cancelTrigger: string editTrigger: string }>`

The ids of the elements in the editable. Useful for composition.

`invalid`

`boolean`

Whether the input's value is invalid.

`maxLength`

`number`

The maximum number of characters allowed in the editable

`name`

`string`

The name attribute of the editable component. Used for form submission.

`onEditChange`

`(details: EditChangeDetails) => void`

Function to call when the edit mode changes.

`onFocusOutside`

`(event: FocusOutsideEvent) => void`

Function called when the focus is moved outside the component

`onInteractOutside`

`(event: InteractOutsideEvent) => void`

Function called when an interaction happens outside the component

`onPointerDownOutside`

`(event: PointerDownOutsideEvent) => void`

Function called when the pointer is pressed down outside the component

`onValueChange`

`(details: ValueChangeDetails) => void`

Function to call when the value changes.

`onValueCommit`

`(details: ValueChangeDetails) => void`

Function to call when the value is committed.

`onValueRevert`

`(details: ValueChangeDetails) => void`

Function to call when the value is reverted.

`placeholder`

`string | { edit: string; preview: string }`

The placeholder text for the editable.

`readOnly`

`boolean`

Whether the editable is read-only.

`required`

`boolean`

Whether the editable is required.

`translations`

`IntlTranslations`

The translations for the editable.

`value`

`string`

The controlled value of the editable.

[

Previous

Drawer



](/docs/components/drawer)[

Next

Empty State



](/docs/components/empty-state)