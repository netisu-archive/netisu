import { defineComponent, resolveComponent, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Navbar-30Vv0CN7.js";
import { S as Sidebar } from "./Sidebar-BQWvWV-r.js";
import { _ as _sfc_main$2 } from "./Footer-CxsG0LBb.js";
import { route } from "momentum-trail";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "axios";
import "v-lazy-image";
import "lodash/throttle.js";
import "../ssr.js";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "portal-vue";
import "vue-tippy";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Error",
  __ssrInlineRender: true,
  props: {
    status: {},
    adonis_error: {},
    message: {},
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHead = resolveComponent("AppHead");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHead, {
        pageTitle: _ctx.status,
        description: _ctx.message,
        url: unref(route)("Welcome")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { landing: false }, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cell medium-7" data-v-cc9391bb${_scopeId}><div class="text-center card" data-v-cc9391bb${_scopeId}><div class="card-body" data-v-cc9391bb${_scopeId}><i class="${ssrRenderClass([_ctx.icon, "mb-3"])}" style="${ssrRenderStyle({ "font-size": "80px" })}" data-v-cc9391bb${_scopeId}></i><h3 data-v-cc9391bb${_scopeId}>${ssrInterpolate(_ctx.status)}</h3><p data-v-cc9391bb${_scopeId}>${ssrInterpolate(_ctx.message)}</p></div></div><p class="mt-2 text-muted" data-v-cc9391bb${_scopeId}><i data-v-cc9391bb${_scopeId}>${ssrInterpolate(_ctx.adonis_error)}</i></p></div>`);
          } else {
            return [
              createVNode("div", { class: "cell medium-7" }, [
                createVNode("div", { class: "text-center card" }, [
                  createVNode("div", { class: "card-body" }, [
                    createVNode("i", {
                      class: ["mb-3", _ctx.icon],
                      style: { "font-size": "80px" }
                    }, null, 2),
                    createVNode("h3", null, toDisplayString(_ctx.status), 1),
                    createVNode("p", null, toDisplayString(_ctx.message), 1)
                  ])
                ]),
                createVNode("p", { class: "mt-2 text-muted" }, [
                  createVNode("i", null, toDisplayString(_ctx.adonis_error), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/App/Error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Error = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cc9391bb"]]);
export {
  Error as default
};
