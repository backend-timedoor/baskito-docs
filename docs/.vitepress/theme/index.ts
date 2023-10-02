import "./scss/main.scss";

import DefaultTheme from "vitepress/theme";
import Baskito from "@timedoor/baskito-ui";

import "./scss/custom-bootstrap.scss";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Baskito);
  },
};
