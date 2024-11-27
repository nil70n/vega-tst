import { createApp } from "vue";
import "./style.css";
import "@heartlandone/vega/style/vega.css";
import App from "./App.vue";

import { VegaComponentLibrary } from "atlas-js-libs";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(VegaComponentLibrary);
app.use(vuetify);

VegaComponentLibrary.isReady().then(() => {
  app.mount("#app");
});
