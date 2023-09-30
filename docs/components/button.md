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

## Component Options

| Prop        | Type    | Default   | Description                                                                                                                   |
| ----------- | ------- | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| color       | String  | `primary` | The color variant of the alert. Can be one of `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark` |
| icon        | String  | `null`    | The icon of the alert. You can use any icon from [Font Awesome](https://fontawesome.com/v5/search?o=r&m=free)                 |
| title       | String  | `null`    | The title of the alert                                                                                                        |
| dismissible | Boolean | `false`   | Whether the alert can be dismissed by the user or not                                                                         |
| show        | Boolean | `true`    | Whether the alert is visible or not                                                                                           |
| fade        | Boolean | `false`   | Whether the alert should fade in and out                                                                                      |
