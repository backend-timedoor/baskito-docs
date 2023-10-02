<script setup>
    import { ref } from 'vue';

    const select = ref('');
</script>

# Form Select

Use [Select2](https://select2.org/) library for managing select input.

## Overview

Baskito `<BKSelect>` component generate `<select>` element. Before using `<BKSelect>` component, you need to understand the basic of [Vue Form Input Bindings](https://vuejs.org/guide/essentials/forms.html).

<BKSelect v-model="select">
    <option value="">Select</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
</BKSelect>

Selected value: {{ select }}

```vue
<script setup>
import { ref } from "vue";

const select = ref("");
</script>
```

```html
<BKSelect v-model="select">
  <option value="">Select</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</BKSelect>
```

## Component Options

| Prop       | Type    | Default | Description                                                                                                          |
| ---------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| v-model    | Object  | -       | The model binding of the select input.                                                                               |
| options    | Object  | -       | The options of the select input. You can the available options [here](https://select2.org/configuration/options-api) |
| allowEmpty | Boolean | false   | Allow empty value of the select input.                                                                               |
