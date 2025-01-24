import { defineComponent, resolveComponent, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Navbar-30Vv0CN7.js";
import { S as Sidebar } from "./Sidebar-BQWvWV-r.js";
import { _ as _sfc_main$2 } from "./Footer-CxsG0LBb.js";
import { route } from "momentum-trail";
import "@inertiajs/vue3";
import "axios";
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
  __name: "ProfileDisabled",
  __ssrInlineRender: true,
  props: {
    username: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHead = resolveComponent("AppHead");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHead, {
        pageTitle: props.username + "'s Profile",
        description: props.username + "'s Profile is disabled.",
        url: unref(route)(`user.profile`, { username: props.username })
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cell medium-7"${_scopeId}><div class="text-center card"${_scopeId}><div class="card-body"${_scopeId}><i class="mb-3 fas fa-shield-plus text-muted" style="${ssrRenderStyle({ "font-size": "80px" })}"${_scopeId}></i><h3${_scopeId}>Nothing to see here</h3><p${_scopeId}>${ssrInterpolate(props.username)} has their profile disabled.</p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "cell medium-7" }, [
                createVNode("div", { class: "text-center card" }, [
                  createVNode("div", { class: "card-body" }, [
                    createVNode("i", {
                      class: "mb-3 fas fa-shield-plus text-muted",
                      style: { "font-size": "80px" }
                    }),
                    createVNode("h3", null, "Nothing to see here"),
                    createVNode("p", null, toDisplayString(props.username) + " has their profile disabled.", 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/App/ProfileDisabled.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
