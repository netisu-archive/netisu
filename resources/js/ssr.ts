// フレームワーク
import "vue-skeletor/dist/vue-skeletor.css";
import "../css/NProgress.css";

// アプリの作成
import type { DefineComponent } from "vue";

import { trail } from "momentum-trail";
import { Skeletor } from "vue-skeletor";
import AppHead from "./Components/AppHead.vue";
import routes from "../routes/js/routing.json";
import Pagination from "./Components/Pagination.vue";
import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";

import PortalVue from "portal-vue";
import "../css/style.css";
import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
axios.defaults.withXSRFToken = true;

if (import.meta.hot) {
    import.meta.hot.accept();
}

// エクストラ
import VueTippy from "vue-tippy";
import "tippy.js/dist/tippy-bundle.umd.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env?.["VITE_APP_NAME"] || "Laravel";
createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        progress: { includeCSS: true, showSpinner: false },
        title: (title) => `${title} - ${appName}`,
        resolve: name => {
            const pages = import.meta.glob('./Pages/**/*.vue', { eager: false })
            return pages[`./Pages/${name}.vue`]()
          },
        setup({ App, props, plugin }) {
            return createSSRApp({ render: () => h(App, props) })
                .use(trail, {
                    routes,
                    url: props.initialPage.url,
                })
                .use(plugin)
                .use(VueTippy)
                .use(PortalVue)
                .component("Head", Head)
                .component("Link", Link)
                .component("AppHead", AppHead)
                .component("Skeletor", Skeletor)
                .component("Pagination", Pagination);
        },
    }).then((app) => {
        const appRender = app;
        appRender.body = appRender.body.replace(/data-page=".*?"/, "");
        return appRender;
    }),
);