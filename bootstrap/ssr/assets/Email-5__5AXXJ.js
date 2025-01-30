import { defineComponent, ref, resolveComponent, unref, withCtx, createVNode, toDisplayString, withModifiers, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Navbar-DmBRqlRZ.js";
import { S as Sidebar } from "./Sidebar-fXSZR0n1.js";
import { _ as _sfc_main$2 } from "./Footer-CxsG0LBb.js";
import { route } from "momentum-trail";
import axios from "axios";
import "@inertiajs/vue3";
import "v-lazy-image";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash/throttle.js";
import "../ssr.js";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "vue-tippy";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Email",
  __ssrInlineRender: true,
  props: {
    message: {}
  },
  setup(__props) {
    const message = ref("");
    const sendEmail = () => {
      axios.get(`/sanctum/csrf-cookie`).then((message2) => {
        axios.post(route(`verification.send`)).then((message3) => {
          message3.value = message3;
        });
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHead = resolveComponent("AppHead");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHead, {
        pageTitle: "Email Verification",
        description: "Please verify your email to continue.",
        url: unref(route)("Welcome")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { landing: false }, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cell medium-7"${_scopeId}><div class="text-center card"${_scopeId}><div class="card-body"${_scopeId}><i class="mb-3 fad fa-envelope-open-text text-muted" style="${ssrRenderStyle({ "font-size": "80px" })}"${_scopeId}></i><h3${_scopeId}>Email Verification</h3><p class="text-muted text-sm"${_scopeId}>${ssrInterpolate(message.value ? message.value : "This will take less than 5 minutes.")}</p><div class="min-w-0 gap-2 mt-3 flex-container align-center"${_scopeId}><form${_scopeId}><button type="submit" class="btn btn-xs btn-success"${_scopeId}><i class="fad fa-badge-check"${_scopeId}></i> Verify </button><button type="button" class="btn btn-xs btn-danger"${_scopeId}><i class="fad fa-right-from-bracket"${_scopeId}></i> Logout </button></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "cell medium-7" }, [
                createVNode("div", { class: "text-center card" }, [
                  createVNode("div", { class: "card-body" }, [
                    createVNode("i", {
                      class: "mb-3 fad fa-envelope-open-text text-muted",
                      style: { "font-size": "80px" }
                    }),
                    createVNode("h3", null, "Email Verification"),
                    createVNode("p", { class: "text-muted text-sm" }, toDisplayString(message.value ? message.value : "This will take less than 5 minutes."), 1),
                    createVNode("div", { class: "min-w-0 gap-2 mt-3 flex-container align-center" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(sendEmail, ["prevent"])
                      }, [
                        createVNode("button", {
                          type: "submit",
                          class: "btn btn-xs btn-success"
                        }, [
                          createVNode("i", { class: "fad fa-badge-check" }),
                          createTextVNode(" Verify ")
                        ]),
                        createVNode("button", {
                          type: "button",
                          class: "btn btn-xs btn-danger"
                        }, [
                          createVNode("i", { class: "fad fa-right-from-bracket" }),
                          createTextVNode(" Logout ")
                        ])
                      ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/App/Verify/Email.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
