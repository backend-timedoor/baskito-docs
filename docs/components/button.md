# Button

Use Stisla's custom button component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.

## Overview

Baskito `<BKButton>` component generate `<button>` element and `<BKLinkButton>` component generate `<a>` element with the styling of a button.

<BKButton>Button Primary</BKButton>

```vue
<script setup>
import { BKButton } from "@timedoor/baskito-ui";
</script>
```

```html
<BKButton>Button Primary</BKButton>
```

## Color

Use the `color` prop to style the button with a different color.

<BKButton style="margin-right: 10px; margin-bottom: 10px" color="primary">Button Primary</BKButton>
<BKButton style="margin-right: 10px; margin-bottom: 10px" color="secondary">Button Secondary</BKButton>
<BKButton style="margin-right: 10px; margin-bottom: 10px" color="success">Button Success</BKButton>
<BKButton style="margin-right: 10px; margin-bottom: 10px" color="danger">Button Danger</BKButton>
<BKButton style="margin-right: 10px; margin-bottom: 10px" color="warning">Button Warning</BKButton>
<BKButton style="margin-right: 10px; margin-bottom: 10px" color="info">Button Info</BKButton>
<BKButton style="margin-right: 10px; margin-bottom: 10px" color="light">Button Light</BKButton>
<BKButton style="margin-right: 10px; margin-bottom: 10px" color="dark">Button Dark</BKButton>

```html
<BKButton color="primary">Button Primary</BKButton>
<BKButton color="secondary">Button Secondary</BKButton>
<BKButton color="success">Button Success</BKButton>
<BKButton color="danger">Button Danger</BKButton>
<BKButton color="warning">Button Warning</BKButton>
<BKButton color="info">Button Info</BKButton>
<BKButton color="light">Button Light</BKButton>
<BKButton color="dark">Button Dark</BKButton>
```

## Variant

Use the `variant` prop to style the button with a different variant.

<BKButton style="margin-right: 10px; margin-bottom: 10px" variant="fill">Button Fill Variant</BKButton>
<BKButton style="margin-right: 10px; margin-bottom: 10px" variant="outline">Button Outline Variant</BKButton>

```html
<BKButton variant="fill">Button Fill Variant</BKButton>
<BKButton variant="outline">Button Outline Variant</BKButton>
```

## Block

Use the `block` prop to create a block button.

<BKButton block>Button Block</BKButton>

```html
<BKButton block>Button Block</BKButton>
```

## Size

Use the `size` prop to change the size of the button.

<BKButton style="margin-right: 10px; margin-bottom: 10px" size="sm">Button Small</BKButton>
<BKButton style="margin-right: 10px; margin-bottom: 10px" size="md">Button Medium</BKButton>
<BKButton style="margin-right: 10px; margin-bottom: 10px" size="lg">Button Large</BKButton>

```html
<BKButton size="sm">Button Small</BKButton>
<BKButton size="md">Button Medium</BKButton>
<BKButton size="lg">Button Large</BKButton>
```

## Shape

Use the `shape` prop to change the shape of the button.

<BKButton style="margin-right: 10px; margin-bottom: 10px" shape="default">Button Default</BKButton>
<BKButton style="margin-right: 10px; margin-bottom: 10px" shape="square">Button Square</BKButton>
<BKButton style="margin-right: 10px; margin-bottom: 10px" shape="pill">Button Pill</BKButton>

```html
<BKButton shape="default">Button Default</BKButton>
<BKButton shape="square">Button Square</BKButton>
<BKButton shape="pill">Button Pill</BKButton>
```

## Disabled

Use the `disabled` prop to disable the button.

<BKButton disabled>Button Disabled</BKButton>

```html
<BKButton disabled>Button Disabled</BKButton>
```

## Progress

Use the `progress` prop to show loading icon on the button.

<BKButton progress>Button Progress</BKButton>

```html
<BKButton progress>Button Progress</BKButton>
```

## Component Options

| Prop     | Type    | Default   | Description                                                                                                                   |
| -------- | ------- | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| color    | String  | `primary` | The color variant of the alert. Can be one of `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark` |
| variant  | String  | `fill`    | The variant of the button. Can be one of `fill`, `outline`                                                                    |
| block    | Boolean | `false`   | The block state of the button.                                                                                                |
| size     | String  | `md`      | The size of the button. Can be one of `sm`, `md`, `lg`                                                                        |
| shape    | String  | `default` | The shape of the button. Can be one of `default`, `square`, `pill`                                                            |
| disabled | Boolean | `false`   | The disabled state of the button.                                                                                             |
| progress | Boolean | `false`   | Show loading icon on the button.                                                                                              |
