# Component

Baskito use [Vue.js v3](https://vuejs.org) for the components. so make sure you have learned about Vue.js before using Baskito.

In the latest version of Baskito, we introduce a new npm package called `@timedoor/baskito-ui` that contains all the components and utilities that you need to build a admin page. The components are integrated with [stisla](https://github.com/stisla/stisla) admin template.

You can see all of the available components in the [components page](/components/).

## Usage

For example of using `<BKButton>` component in baskito project.

<BKButton>Button Primary</BKButton>

```vue
<template>
  <BKButton>Button Primary</BKButton>
</template>

<script setup>
import { BKButton } from "@timedoor/baskito-ui";
</script>
```

::: tip
You are not required to import the component manually. All components are registered globally.
:::
