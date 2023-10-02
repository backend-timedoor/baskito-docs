<script setup>
const showOverviewModal = () => {
    $('#overview-modal').modal('show');
}

const showSmallModal = () => {
    $('#small-modal').modal('show');
}

const showMediumModal = () => {
    $('#medium-modal').modal('show');
}

const showLargeModal = () => {
    $('#large-modal').modal('show');
}
</script>

# Modal

Modals are streamlined, but flexible dialog prompts powered by JavaScript and CSS. They support a number of use cases from user notification to completely custom content and feature a handful of helpful sub-components, sizes, variants, accessibility, and more.

## Overview

Modal is a dialog box/popup window that is displayed on top of the current page.

<BKButton @click="showOverviewModal">Open Modal</BKButton>

```html
<BKButton data-toggle="modal" data-target="#demo-modal">Open Modal</BKButton>
```

```html
<Teleport to="body">
  <BKModal id="demo-modal" title="Modal Title">
    <p>Modal body text goes here.</p>
  </BKModal>
</Teleport>
```

::: info
Using `<Teleport>` is optional. You can use `<Teleport>` component to move the modal to the body element.
:::

::: tip
If you want to trigger modal from script, you need to trigger the modal from jQuery. For example:

```html
<BKButton @click="handleClick">Open Modal</BKButton>

<BKModal id="demo-modal" title="Modal Title">
  <p>Modal body text goes here.</p>
</BKModal>
```

---

```vue
<script setup>
const handleClick = () => {
  $("#demo-modal").modal("show");
};
</script>
```

:::

## Size

You can set the size of the modal by using the `size` prop. The default size is `md`.

<div class="d-flex" style="gap: 5px">
    <BKButton @click="showSmallModal">Small Modal</BKButton>
    <BKButton @click="showMediumModal">Medium Modal</BKButton>
    <BKButton @click="showLargeModal">Large Modal</BKButton>
</div>

<ClientOnly>
  <Teleport to="body">
    <BKModal id="overview-modal" title="Modal Title"><p>Modal body text goes here.</p></BKModal>
    <BKModal id="small-modal" title="Small Modal" size="sm"><p>Modal body text goes here.</p></BKModal>
    <BKModal id="medium-modal" title="Medium Modal" size="md"><p>Modal body text goes here.</p></BKModal>
    <BKModal id="large-modal" title="Large Modal" size="lg"><p>Modal body text goes here.</p></BKModal>
  </Teleport>
</ClientOnly>

```html
<BKModal id="small-modal" title="Small Modal" size="sm">
  <p>Modal body text goes here.</p>
</BKModal>
<BKModal id="medium-modal" title="Medium Modal" size="md">
  <p>Modal body text goes here.</p>
</BKModal>
<BKModal id="large-modal" title="Large Modal" size="lg">
  <p>Modal body text goes here.</p>
</BKModal>
```

## Event

You can handle event when user click submit button by using `submit` event.

```vue
<script setup lang="ts">
const handleSubmit = () => {
  // do something
};
</script>
```

```html
<BKModal id="demo-modal" title="Modal Title" @submit="handleSubmit">
  <p>Modal body text goes here.</p>
</BKModal>
```

## Component Options

| Prop       | Type    | Default        | Description                   |
| ---------- | ------- | -------------- | ----------------------------- |
| id         | String  | `undefined`    | The id of the modal.          |
| title      | String  | `""`           | The size of the modal         |
| size       | String  | `md`           | The size of the modal         |
| closeText  | String  | `Close`        | The text of the close button  |
| submitText | String  | `Save Changes` | The text of the submit button |
| isCenter   | Boolean | `false`        | Center the modal              |
| withFade   | Boolean | `true`         | Fade effect                   |

| Event  | Description                                |
| ------ | ------------------------------------------ |
| submit | Handle event when user click Submit Button |
