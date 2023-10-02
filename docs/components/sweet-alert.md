<script setup>
import { useSweetAlert } from "@timedoor/baskito-ui";

const { sweetAlert } = useSweetAlert();

const showSweetAlert = () => {
  sweetAlert({
    title: "Hello There!",
    text: "You clicked the button!",
  });
};
</script>

# Sweet Alert

Sweet Alert is a beautiful replacement for JavaScript's "Alert". It's highly customizable, modular, and can be used for both informational and error alerts. Baskito use [sweetalert](https://sweetalert.js.org/) library.

## Overview

Baskito provides composable API for using sweetalert. You can use the API to show alert, confirm, prompt, and toast. You just need to import the `useSweetAlert` composable function and use it as you like.

<BKButton @click="showSweetAlert">Click me!</BKButton>

```vue
<script setup>
import { useSweetAlert } from "@timedoor/baskito-ui";

const { sweetAlert } = useSweetAlert();

const showSweetAlert = () => {
  sweetAlert({
    title: "Hello There!",
    text: "You clicked the button!",
  });
};
</script>
```

## Composable API

### useSweetAlert

The `useSweetAlert` composable function returns an methods:

- `sweetAlert`: show alert with default configuration
- `successAlert`: show alert with success theme configuration
- `warningAlert`: show alert with warning theme configuration
- `errorAlert`: show alert with error theme configuration
- `infoAlert`: show alert with info theme configuration

## Options

When you call the one of `useSweetAlert` API methods, you can pass an options object to customize the alert. You can see the available options [here](https://sweetalert.js.org/docs/#configuration)
