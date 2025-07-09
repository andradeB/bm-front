# Password Input

Password Input
==============

Used to collect passwords.

[Setup](#setup)
---------------

If you don't already have the snippet, run the following command to add the `password-input` snippet

```
npx @chakra-ui/cli snippet add password-input
```

The snippet includes a closed component composition for the `PasswordInput` component.

[Usage](#usage)
---------------

```
import {
  PasswordInput,
  PasswordStrengthMeter,
} from "@/components/ui/password-input"
```

```
<PasswordInput />
<PasswordStrengthMeter />
```

[Examples](#examples)
---------------------

### [Sizes](#sizes)

Use the `size` prop to change the size of the password input.

The password input sizes are mapped to the `Input` component sizes.

### [Controlled](#controlled)

Use the `value` and `onChange` props to control the current page.

### [Hook Form](#hook-form)

Here's an example of how to use the `PasswordInput` component with `react-hook-form`.

### [Controlled Visibility](#controlled-visibility)

Use the `visible` and `onVisibleChange` props to control the visibility of the password input.

### [Strength Indicator](#strength-indicator)

Render the `PasswordStrengthMeter` component to show the strength of the password. Compute the `value` prop based on the password input `value`.

[Props](#props)
---------------

### [Root](#root)

Prop

Default

Type

`defaultVisible`

`false`

`boolean`

The default visibility state of the password input.

`visible`

`boolean`

The controlled visibility state of the password input.

`onVisibleChange`

`(visible: boolean) => void`

Callback invoked when the visibility state changes.

`visibilityIcon`

`{ on: React.ReactNode; off: React.ReactNode }`

Custom icons for the visibility toggle button.

[

Previous

Pagination



](/docs/components/pagination)[

Next

Pin Input



](/docs/components/pin-input)