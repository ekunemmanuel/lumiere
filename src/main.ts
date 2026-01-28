import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";

// Force scroll to top on reload
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

const app = createApp(App);

app.use(router);

app.mount("#app");
