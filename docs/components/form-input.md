<script setup>
    import { ref } from 'vue';

    const overviewInputValue = ref('');
</script>

# Form Input

Use Stisla's custom input component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.

## Overview

Baskito `<BKInput>` component generate `<input>` element. Before using `<BKInput>` component, you need to understand the basic of [Vue Form Input Bindings](https://vuejs.org/guide/essentials/forms.html).

<BKInput v-model=overviewInputValue placeholder="Edit me!" />
Value: {{ overviewInputValue }}

```vue
<script setup>
import { ref } from "vue";

const text = ref("");
</script>
```

```html
<BKInput v-model="text" />
<p>Value: {{ text }}</p>
```

## Type

Use the `type` prop to style the input with a different type.

<BKInput style="margin-right: 10px; margin-bottom: 10px" type="text" placeholder="Text" />
<BKInput style="margin-right: 10px; margin-bottom: 10px" type="password" placeholder="Password" />
<BKInput style="margin-right: 10px; margin-bottom: 10px" type="email" placeholder="Email" />
<BKInput style="margin-right: 10px; margin-bottom: 10px" type="number" placeholder="Number" />

```html
<BKInput type="text" placeholder="Text" />
<BKInput type="password" placeholder="Password" />
<BKInput type="email" placeholder="Email" />
<BKInput type="number" placeholder="Number" />
```

## Size

Use the `size` prop to style the input with a different size.

<BKInput style="margin-right: 10px; margin-bottom: 10px" size="sm" placeholder="Small" />
<BKInput style="margin-right: 10px; margin-bottom: 10px" size="md" placeholder="Medium" />
<BKInput style="margin-right: 10px; margin-bottom: 10px" size="lg" placeholder="Large" />

```html
<BKInput size="sm" placeholder="Small" />
<BKInput size="md" placeholder="Medium" />
<BKInput size="lg" placeholder="Large" />
```

## Component Options

| Prop        | Type   | Default | Description                                                                                                                                                                            |
| ----------- | ------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type        | String | `text`  | The type of the input. Can be one of `button`, `checkbox` , `text` , `number`, `date`, `email`, `hidden`, `file`, `password`, `range`, `reset`, `submit`, `tel`, `time`, `url`, `week` |
| size        | String | `md`    | The size variant of the input. Can be one of `sm`, `md`, `lg`                                                                                                                          |
| v-model     | Object | `null`  | The model bindings for the input                                                                                                                                                       |
| placeholder | String | `null`  | The placeholder of the input                                                                                                                                                           |
