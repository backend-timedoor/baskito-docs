# Alert

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

## Overview

Alerts are available for any length of text, as well as an optional dismiss button (and optional auto-dismissing).

<div style="display: flex; flex-direction: column; gap: 10px;">
    <BKAlert>This is a primary alert—check it out!</BKAlert>
    <BKAlert dismissible>This is a dismissible alert</BKAlert>
</div>

```vue
<script setup>
import { BKAlert } from "@timedoor/baskito-ui";
</script>
```

```html
<BKAlert>This is a primary alert—check it out!</BKAlert>
<BKAlert dismissible>This is a primary alert—check it out!</BKAlert>
```

::: tip
You are not required to import the component manually. All components are registered globally.
:::

## Variants

Use the `color` prop to style the alert with a different color.

<div style="display: flex; flex-direction: column; gap: 10px;">
    <BKAlert color="primary">This is a primary alert</BKAlert>
    <BKAlert color="secondary">This is a secondary alert</BKAlert>
    <BKAlert color="success">This is a success alert</BKAlert>
    <BKAlert color="danger">This is a danger alert</BKAlert>
    <BKAlert color="warning">This is a warning alert</BKAlert>
    <BKAlert color="info">This is a info alert</BKAlert>
    <BKAlert color="light">This is a light alert</BKAlert>
    <BKAlert color="dark">This is a dark alert</BKAlert>
</div>

```html
<BKAlert color="primary">This is a primary alert</BKAlert>
<BKAlert color="secondary">This is a secondary alert</BKAlert>
<BKAlert color="success">This is a success alert</BKAlert>
<BKAlert color="danger">This is a danger alert</BKAlert>
<BKAlert color="warning">This is a warning alert</BKAlert>
<BKAlert color="info">This is a info alert</BKAlert>
<BKAlert color="light">This is a light alert</BKAlert>
<BKAlert color="dark">This is a dark alert</BKAlert>
```

## Icon

Use the `icon` prop to add an icon to the alert. You can use any icon from [Font Awesome](https://fontawesome.com/v5/search?o=r&m=free).

<div style="display: flex; flex-direction: column; gap: 10px;">
    <BKAlert icon="far fa-lightbulb">This is alert with icon</BKAlert>
</div>

```html
<BKAlert icon="far fa-lightbulb">This is alert with icon</BKAlert>
```

## Title

Use the `title` prop to add a title to the alert.

<BKAlert title="Title">This is alert with title</BKAlert>

```html
<BKAlert title="Title">This is alert with title</BKAlert>
```

::: tip
You can use the `title` prop with the `icon` prop together.
<BKAlert icon="far fa-lightbulb" title="Title">This is alert with icon and title</BKAlert>

```html
<BKAlert icon="far fa-lightbulb" title="Title">
  This is alert with icon and title
</BKAlert>
```

:::

## Dismissible

Use the `dismissible` prop to add a close button to the alert for dismissing it.

<BKAlert dismissible>This is dismissible alert</BKAlert>

```html
<BKAlert dismissible>This is dismissible alert</BKAlert>
```

::: tip
If you want to add fade effect when the alert is closed, add the `fade` prop.

```html
<BKAlert dismissible fade>This is dismissible alert</BKAlert>
```

:::

## Component Options

| Prop        | Type    | Default   | Description                                                                                                                   |
| ----------- | ------- | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| color       | String  | `primary` | The color variant of the alert. Can be one of `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark` |
| icon        | String  | `null`    | The icon of the alert. You can use any icon from [Font Awesome](https://fontawesome.com/v5/search?o=r&m=free)                 |
| title       | String  | `null`    | The title of the alert                                                                                                        |
| dismissible | Boolean | `false`   | Whether the alert can be dismissed by the user or not                                                                         |
| show        | Boolean | `true`    | Whether the alert is visible or not                                                                                           |
| fade        | Boolean | `false`   | Whether the alert should fade in and out                                                                                      |
