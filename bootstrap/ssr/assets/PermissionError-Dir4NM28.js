import { defineComponent, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AdminNavbar-DM40yGYC.js";
import { _ as _sfc_main$1 } from "../ssr.js";
import "@inertiajs/vue3";
import "momentum-trail";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "vue-tippy";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PermissionError",
  __ssrInlineRender: true,
  props: {
    permission: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Access Denied",
        description: "You dont have the **" + _ctx.permission + "** permission."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="columns"${_scopeId}><div class="column is-3"${_scopeId}></div><div class="column"${_scopeId}><div class="card"${_scopeId}><div class="card-content"${_scopeId}><span class="is-size-1"${_scopeId}><i class="fad fa-warning"${_scopeId}></i></span><span class="is-size-1"${_scopeId}>Oops!</span><p${_scopeId}>You don&#39;t have the <span class="has-text-weight-semibold"${_scopeId}>**${ssrInterpolate(_ctx.permission)}**</span> permission. </p><p${_scopeId}>Please ask a Higher-up for help.</p></div></div></div><div class="column is-3"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "columns" }, [
                createVNode("div", { class: "column is-3" }),
                createVNode("div", { class: "column" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-content" }, [
                      createVNode("span", { class: "is-size-1" }, [
                        createVNode("i", { class: "fad fa-warning" })
                      ]),
                      createVNode("span", { class: "is-size-1" }, "Oops!"),
                      createVNode("p", null, [
                        createTextVNode("You don't have the "),
                        createVNode("span", { class: "has-text-weight-semibold" }, "**" + toDisplayString(_ctx.permission) + "**", 1),
                        createTextVNode(" permission. ")
                      ]),
                      createVNode("p", null, "Please ask a Higher-up for help.")
                    ])
                  ])
                ]),
                createVNode("div", { class: "column is-3" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Error/PermissionError.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
