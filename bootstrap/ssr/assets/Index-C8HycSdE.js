import { defineComponent, resolveComponent, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Navbar-Mp_kEPSl.js";
import { S as Sidebar } from "./Sidebar-DDhf-Q4i.js";
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
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    achievements: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHead = resolveComponent("AppHead");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHead, {
        pageTitle: "Acheivements",
        description: "A List of all Achievements",
        url: unref(route)("acheivements")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cell medium-9"${_scopeId}><div class="text-xl fw-semibold mb-1"${_scopeId}>Achievements</div><div class="card card-body mb-3"${_scopeId}><div class="section flex-container align-middle gap-3"${_scopeId}><img src="file:///home/chronos/u-b99c190e11ee42e371d918a0399d97cb71a388b8/MyFiles/eclipse-frontend/assets/img/achievement_dummy.png" width="100"${_scopeId}><div${_scopeId}><div class="text-lg fw-semibold"${_scopeId}> Administrator<span class="text-xs fw-semibold text-muted mx-1"${_scopeId}>•</span><span class="text-xs fw-semibold text-muted"${_scopeId}> 2 users have made this achievement. </span></div><div class="text-muted text-sm"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div></div></div><div class="section flex-container align-middle gap-3"${_scopeId}><img src="file:///home/chronos/u-b99c190e11ee42e371d918a0399d97cb71a388b8/MyFiles/eclipse-frontend/assets/img/achievement_dummy.png" width="100"${_scopeId}><div${_scopeId}><div class="text-lg fw-semibold"${_scopeId}> Administrator<span class="text-xs fw-semibold text-muted mx-1"${_scopeId}>•</span><span class="text-xs fw-semibold text-muted"${_scopeId}> 2 users have made this achievement. </span></div><div class="text-muted text-sm"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div></div></div><div class="section flex-container align-middle gap-3"${_scopeId}><img src="file:///home/chronos/u-b99c190e11ee42e371d918a0399d97cb71a388b8/MyFiles/eclipse-frontend/assets/img/achievement_dummy.png" width="100"${_scopeId}><div${_scopeId}><div class="text-lg fw-semibold"${_scopeId}> Administrator<span class="text-xs fw-semibold text-muted mx-1"${_scopeId}>•</span><span class="text-xs fw-semibold text-muted"${_scopeId}> 2 users have made this achievement. </span></div><div class="text-muted text-sm"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "cell medium-9" }, [
                createVNode("div", { class: "text-xl fw-semibold mb-1" }, "Achievements"),
                createVNode("div", { class: "card card-body mb-3" }, [
                  createVNode("div", { class: "section flex-container align-middle gap-3" }, [
                    createVNode("img", {
                      src: "file:///home/chronos/u-b99c190e11ee42e371d918a0399d97cb71a388b8/MyFiles/eclipse-frontend/assets/img/achievement_dummy.png",
                      width: "100"
                    }),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-lg fw-semibold" }, [
                        createTextVNode(" Administrator"),
                        createVNode("span", { class: "text-xs fw-semibold text-muted mx-1" }, "•"),
                        createVNode("span", { class: "text-xs fw-semibold text-muted" }, " 2 users have made this achievement. ")
                      ]),
                      createVNode("div", { class: "text-muted text-sm" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
                    ])
                  ]),
                  createVNode("div", { class: "section flex-container align-middle gap-3" }, [
                    createVNode("img", {
                      src: "file:///home/chronos/u-b99c190e11ee42e371d918a0399d97cb71a388b8/MyFiles/eclipse-frontend/assets/img/achievement_dummy.png",
                      width: "100"
                    }),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-lg fw-semibold" }, [
                        createTextVNode(" Administrator"),
                        createVNode("span", { class: "text-xs fw-semibold text-muted mx-1" }, "•"),
                        createVNode("span", { class: "text-xs fw-semibold text-muted" }, " 2 users have made this achievement. ")
                      ]),
                      createVNode("div", { class: "text-muted text-sm" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
                    ])
                  ]),
                  createVNode("div", { class: "section flex-container align-middle gap-3" }, [
                    createVNode("img", {
                      src: "file:///home/chronos/u-b99c190e11ee42e371d918a0399d97cb71a388b8/MyFiles/eclipse-frontend/assets/img/achievement_dummy.png",
                      width: "100"
                    }),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-lg fw-semibold" }, [
                        createTextVNode(" Administrator"),
                        createVNode("span", { class: "text-xs fw-semibold text-muted mx-1" }, "•"),
                        createVNode("span", { class: "text-xs fw-semibold text-muted" }, " 2 users have made this achievement. ")
                      ]),
                      createVNode("div", { class: "text-muted text-sm" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Acheivements/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
