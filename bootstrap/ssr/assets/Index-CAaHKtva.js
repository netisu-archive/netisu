import { defineComponent, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { route } from "momentum-trail";
import { _ as _sfc_main$2 } from "./AdminNavbar-DM40yGYC.js";
import { _ as _sfc_main$1 } from "../ssr.js";
import "@inertiajs/vue3";
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
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Admin Dashboard",
        description: _ctx.usePage().props.site.name + " Administration",
        url: unref(route)("admin.page")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "background-color": "#1b1b1b" })}"${_scopeId}><div class="navbar-item has-text-white" style="${ssrRenderStyle({ "background-color": "#1b1b1b" })}"${_scopeId}> Admin Chat </div></div><br${_scopeId}><div class="columns"${_scopeId}><div class="card column is-12"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}><p class="card-header-title"${_scopeId}><div class="tag is-medium is-info"${_scopeId}>Aeo</div>  * 2m </p></div><div class="card-content"${_scopeId}><div class="content"${_scopeId}>updates soon</div></div></div><div class="flex-item-2"${_scopeId}><form${_scopeId}><div class="field has-addons"${_scopeId}><div class="control"${_scopeId}><input class="input" type="text" placeholder="Type your message..."${_scopeId}></div><div class="control"${_scopeId}><button type="submit" class="button"${_scopeId}> Send </button></div></div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { style: { "background-color": "#1b1b1b" } }, [
                createVNode("div", {
                  class: "navbar-item has-text-white",
                  style: { "background-color": "#1b1b1b" }
                }, " Admin Chat ")
              ]),
              createVNode("br"),
              createVNode("div", { class: "columns" }, [
                createVNode("div", { class: "card column is-12" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("p", { class: "card-header-title" }, [
                        createVNode("div", { class: "tag is-medium is-info" }, "Aeo"),
                        createTextVNode("  * 2m ")
                      ])
                    ]),
                    createVNode("div", { class: "card-content" }, [
                      createVNode("div", { class: "content" }, "updates soon")
                    ])
                  ]),
                  createVNode("div", { class: "flex-item-2" }, [
                    createVNode("form", null, [
                      createVNode("div", { class: "field has-addons" }, [
                        createVNode("div", { class: "control" }, [
                          createVNode("input", {
                            class: "input",
                            type: "text",
                            placeholder: "Type your message..."
                          })
                        ]),
                        createVNode("div", { class: "control" }, [
                          createVNode("button", {
                            type: "submit",
                            class: "button"
                          }, " Send ")
                        ])
                      ])
                    ])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Messaging/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
