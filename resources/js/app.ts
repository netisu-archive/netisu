// フレームワーク
// import "./bootstrap";
import "vue-skeletor/dist/vue-skeletor.css";
import "../css/NProgress.css";

// アプリの作成
import { Skeletor } from "vue-skeletor";
import { createSSRApp, h } from "vue";
import type { DefineComponent } from "vue";
import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import Pagination from "./Components/Pagination.vue";
import AppHead from "./Components/AppHead.vue";
import { trail } from "momentum-trail";
import routes from "../routes/js/routing.json";
import PortalVue from "portal-vue";

if (import.meta.hot) {
    import.meta.hot.accept();
}

// エクストラ

import VueTippy from "vue-tippy";
import "tippy.js/dist/tippy-bundle.umd.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env?.["VITE_APP_NAME"] || "Laravel";

createInertiaApp({
    progress: { includeCSS: true, showSpinner: false },
    title: (title) => `${title} - ${appName}`,
        resolve: name => {
            const pages = import.meta.glob<DefineComponent>('./Pages/**/*.vue', { eager: false })
            return pages[`./Pages/${name}.vue`]()
          },
    setup({ el, App, props, plugin }) {
        createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(trail, { routes })
            .use(VueTippy)
            .use(PortalVue)
            .component("Head", Head)
            .component("Link", Link)
            .component("AppHead", AppHead)
            .component("Skeletor", Skeletor)
            .component("Pagination", Pagination)
            .mount(el);
    },
}).then(() => {
    document.getElementById("app").removeAttribute("data-page");
});
