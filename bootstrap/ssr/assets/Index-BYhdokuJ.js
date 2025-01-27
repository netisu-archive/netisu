import { defineComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Navbar-Mp_kEPSl.js";
import { S as Sidebar } from "./Sidebar-DDhf-Q4i.js";
import { _ as _sfc_main$2 } from "./Footer-CxsG0LBb.js";
import { usePage } from "@inertiajs/vue3";
import "axios";
import "momentum-trail";
import "v-lazy-image";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
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
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="cell large-10 medium-12" id="mainframe"${_scopeId}><div class="card card-body"${_scopeId}><div class="text-xl text-info"${_scopeId}>Games are coming soon</div><div class="divider"${_scopeId}></div><p${_scopeId}> Games are currently coming soon, our development team are working very hard to bring you a stable client, if you have any questions, you can email our support team over at <a${ssrRenderAttr("href", "mailto:" + ((_c = (_b = (_a = unref(usePage)().props.site) == null ? void 0 : _a.production) == null ? void 0 : _b.domains) == null ? void 0 : _c.support))}${_scopeId}>${ssrInterpolate((_f = (_e = (_d = unref(usePage)().props.site) == null ? void 0 : _d.production) == null ? void 0 : _e.domains) == null ? void 0 : _f.support)}</a></p></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "cell large-10 medium-12",
                id: "mainframe"
              }, [
                createVNode("div", { class: "card card-body" }, [
                  createVNode("div", { class: "text-xl text-info" }, "Games are coming soon"),
                  createVNode("div", { class: "divider" }),
                  createVNode("p", null, [
                    createTextVNode(" Games are currently coming soon, our development team are working very hard to bring you a stable client, if you have any questions, you can email our support team over at "),
                    createVNode("a", {
                      href: "mailto:" + ((_i = (_h = (_g = unref(usePage)().props.site) == null ? void 0 : _g.production) == null ? void 0 : _h.domains) == null ? void 0 : _i.support)
                    }, toDisplayString((_l = (_k = (_j = unref(usePage)().props.site) == null ? void 0 : _j.production) == null ? void 0 : _k.domains) == null ? void 0 : _l.support), 9, ["href"])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Games/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
