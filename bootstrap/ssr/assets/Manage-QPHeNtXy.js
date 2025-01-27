import { defineComponent, ref, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Navbar-Mp_kEPSl.js";
import { S as Sidebar } from "./Sidebar-DDhf-Q4i.js";
import { usePoll, usePage } from "@inertiajs/vue3";
import { route } from "momentum-trail";
import { _ as _sfc_main$1 } from "../ssr.js";
import { _ as _sfc_main$3 } from "./Footer-CxsG0LBb.js";
import "axios";
import "v-lazy-image";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash/throttle.js";
import "vue-tippy";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "portal-vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Manage",
  __ssrInlineRender: true,
  setup(__props) {
    const ActiveCategory = ref("Information");
    function setActiveCategory(category) {
      ActiveCategory.value = category;
    }
    usePoll(1e4, { only: ["purchases"] });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Money",
        description: "Manage your finances on " + unref(usePage)().props.site.name + ".",
        url: unref(route)("my.money.page")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cell medium-3"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}>Manage Currencies</div><ul class="tabs flex-dir-column"${_scopeId}><li class="tab-item"${_scopeId}><a href="#" class="${ssrRenderClass([{ active: "Information" === ActiveCategory.value }, "tab-link squish"])}"${_scopeId}> Information </a><a href="#" class="${ssrRenderClass([{ active: "Convert" === ActiveCategory.value }, "tab-link squish"])}"${_scopeId}> Convert </a></li></ul></div><div class="cell medium-8"${_scopeId}>`);
            if (ActiveCategory.value === "Information") {
              _push2(`<div${_scopeId}><div class="grid-x grid-margin-x"${_scopeId}><div class="cell medium-6"${_scopeId}><div class="card card-body"${_scopeId}><div class="align-middle w-100 h-100 flex-container flex-dir-column align-center"${_scopeId}><div class="text-3xl text-warning"${_scopeId}><i class="text-3xl fad fa-coins"${_scopeId}></i> ${ssrInterpolate(unref(usePage)().props.auth.user.coins)}</div><div class="text-sm fw-semibold text-warning"${_scopeId}> Coins </div><button class="text-info text-sm"${_scopeId}>${ssrInterpolate(unref(usePage)().props.auth.user.next_currency_payout)}</button></div></div></div><div class="cell medium-6"${_scopeId}><div class="card card-body"${_scopeId}><div class="align-middle w-100 h-100 flex-container flex-dir-column align-center"${_scopeId}><div class="text-3xl text-success"${_scopeId}><i class="text-3xl fad fa-money-bill-1-wave"${_scopeId}></i> ${ssrInterpolate(unref(usePage)().props.auth.user.bucks)}</div><div class="text-sm fw-semibold text-success"${_scopeId}> Bucks </div><button class="text-info text-sm"${_scopeId}>${ssrInterpolate(unref(usePage)().props.auth.user.next_currency_payout)}</button></div></div></div></div><div class="mb-2 text-xl fw-semibold"${_scopeId}>Purchases</div><!--[-->`);
              ssrRenderList(unref(usePage)().props.purchases.data, (purchase) => {
                _push2(`<div class="card card-body"${_scopeId}><div class="gap-2 align-middle flex-container"${_scopeId}><img${ssrRenderAttr("src", purchase.thumbnail)} width="70" height="70"${_scopeId}><div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start" style="${ssrRenderStyle({ "flex-direction": "column" })}"${_scopeId}><div class="text-start"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Link, {
                  class: "text-md",
                  href: unref(route)(`store.item`, { id: purchase.id })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(purchase.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(purchase.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div${_scopeId}></div><p class="${ssrRenderClass([{
                  "text-warning": purchase.currency_used === "coins",
                  " text-success": purchase.currency_used === "bucks"
                }, "text-sm fw-semibold"])}"${_scopeId}><i class="${ssrRenderClass([{
                  " fa-coins": purchase.currency_used === "coins",
                  "  fa-money-bill-1-wave": purchase.currency_used === "bucks"
                }, "fad"])}"${_scopeId}></i> ${ssrInterpolate(purchase.price + " " + purchase.currency_used)}</p><div class="text-xs text-muted fw-semibold text-body"${_scopeId}>${ssrInterpolate(purchase.DateHum)}</div></div></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (ActiveCategory.value === "Convert") {
              _push2(`<div${_scopeId}><div class="card card-body"${_scopeId}> test2 </div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "cell medium-3" }, [
                createVNode("div", { class: "mb-2 text-xl fw-semibold" }, "Manage Currencies"),
                createVNode("ul", { class: "tabs flex-dir-column" }, [
                  createVNode("li", { class: "tab-item" }, [
                    createVNode("a", {
                      href: "#",
                      class: ["tab-link squish", { active: "Information" === ActiveCategory.value }],
                      onClick: ($event) => setActiveCategory("Information")
                    }, " Information ", 10, ["onClick"]),
                    createVNode("a", {
                      href: "#",
                      class: ["tab-link squish", { active: "Convert" === ActiveCategory.value }],
                      onClick: ($event) => setActiveCategory("Convert")
                    }, " Convert ", 10, ["onClick"])
                  ])
                ])
              ]),
              createVNode("div", { class: "cell medium-8" }, [
                ActiveCategory.value === "Information" ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("div", { class: "grid-x grid-margin-x" }, [
                    createVNode("div", { class: "cell medium-6" }, [
                      createVNode("div", { class: "card card-body" }, [
                        createVNode("div", { class: "align-middle w-100 h-100 flex-container flex-dir-column align-center" }, [
                          createVNode("div", { class: "text-3xl text-warning" }, [
                            createVNode("i", { class: "text-3xl fad fa-coins" }),
                            createTextVNode(" " + toDisplayString(unref(usePage)().props.auth.user.coins), 1)
                          ]),
                          createVNode("div", { class: "text-sm fw-semibold text-warning" }, " Coins "),
                          createVNode("button", { class: "text-info text-sm" }, toDisplayString(unref(usePage)().props.auth.user.next_currency_payout), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "cell medium-6" }, [
                      createVNode("div", { class: "card card-body" }, [
                        createVNode("div", { class: "align-middle w-100 h-100 flex-container flex-dir-column align-center" }, [
                          createVNode("div", { class: "text-3xl text-success" }, [
                            createVNode("i", { class: "text-3xl fad fa-money-bill-1-wave" }),
                            createTextVNode(" " + toDisplayString(unref(usePage)().props.auth.user.bucks), 1)
                          ]),
                          createVNode("div", { class: "text-sm fw-semibold text-success" }, " Bucks "),
                          createVNode("button", { class: "text-info text-sm" }, toDisplayString(unref(usePage)().props.auth.user.next_currency_payout), 1)
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mb-2 text-xl fw-semibold" }, "Purchases"),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(usePage)().props.purchases.data, (purchase) => {
                    return openBlock(), createBlock("div", { class: "card card-body" }, [
                      createVNode("div", { class: "gap-2 align-middle flex-container" }, [
                        createVNode("img", {
                          src: purchase.thumbnail,
                          width: "70",
                          height: "70"
                        }, null, 8, ["src"]),
                        createVNode("div", {
                          class: "flex-wrap col-md-4 d-flex justify-content-center align-content-start",
                          style: { "flex-direction": "column" }
                        }, [
                          createVNode("div", { class: "text-start" }, [
                            createVNode(_component_Link, {
                              class: "text-md",
                              href: unref(route)(`store.item`, { id: purchase.id })
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(purchase.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"]),
                            createVNode("div"),
                            createVNode("p", {
                              class: ["text-sm fw-semibold", {
                                "text-warning": purchase.currency_used === "coins",
                                " text-success": purchase.currency_used === "bucks"
                              }]
                            }, [
                              createVNode("i", {
                                class: ["fad", {
                                  " fa-coins": purchase.currency_used === "coins",
                                  "  fa-money-bill-1-wave": purchase.currency_used === "bucks"
                                }]
                              }, null, 2),
                              createTextVNode(" " + toDisplayString(purchase.price + " " + purchase.currency_used), 1)
                            ], 2),
                            createVNode("div", { class: "text-xs text-muted fw-semibold text-body" }, toDisplayString(purchase.DateHum), 1)
                          ])
                        ])
                      ])
                    ]);
                  }), 256))
                ])) : createCommentVNode("", true),
                ActiveCategory.value === "Convert" ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "card card-body" }, " test2 ")
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Money/Manage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
