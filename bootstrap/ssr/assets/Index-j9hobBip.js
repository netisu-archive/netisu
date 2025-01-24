import { defineComponent, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Navbar-30Vv0CN7.js";
import { S as Sidebar } from "./Sidebar-BQWvWV-r.js";
import { _ as _sfc_main$3 } from "./Footer-CxsG0LBb.js";
import { _ as _sfc_main$1 } from "../ssr.js";
import { route } from "momentum-trail";
import { usePage } from "@inertiajs/vue3";
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
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    XP: { type: Array },
    Bucks: { type: Array }
  },
  setup(__props) {
    const TopList = (indexKey) => {
      if (indexKey === 1) {
        return "text-warning";
      } else if (indexKey === 2) {
        return "text-info";
      } else if (indexKey === 3) {
        return "text-danger";
      } else {
        return "text-body";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Leaderboard",
        description: "Top users on " + unref(usePage)().props.site.name + ".",
        url: unref(route)("leaderboard.page")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="cell large-6"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}>Top Level Leaders</div><div class="card"${_scopeId}><div class="pb-0 card-body"${_scopeId}>`);
            if (!((_a = __props.XP) == null ? void 0 : _a["length"])) {
              _push2(`<div class="gap-3 text-center mb-3 flex-container flex-dir-column"${_scopeId}><i class="text-5xl fad fa-arrow-up text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No Leaders </div><div class="text-muted fw-semibold"${_scopeId}><p class="text-xs"${_scopeId}> There are currently no leaders. </p></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(__props.XP, (top, index) => {
              _push2(`<div class="mb-3 row thread"${_scopeId}><div class="gap-3 align-middle flex-container"${_scopeId}><div class="${ssrRenderClass([TopList(Number(index + 1)), "text-2xl fw-semibold"])}"${_scopeId}>${ssrInterpolate("#" + Number(index + 1))}</div><div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start" style="${ssrRenderStyle({ "flex-direction": "column" })}"${_scopeId}><div class="text-start"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(route)("user.profile", {
                  username: top.username
                }),
                class: "text-md"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(top.username)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(top.username), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}></div><div class="text-sm fw-semibold text-muted"${_scopeId}>${ssrInterpolate("Rank Lvl. " + top.experience.level_id)}<span class="mx-1"${_scopeId}>•</span>${ssrInterpolate(top.experience.experience_points + "XP")}</div></div></div></div><div class="mx-1 my-3 divider"${_scopeId}></div></div>`);
            });
            _push2(`<!--]--></div></div></div><div class="cell large-6"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}>Top Cash Earners</div><div class="card"${_scopeId}><div class="pb-0 card-body"${_scopeId}>`);
            if (!((_b = __props.Bucks) == null ? void 0 : _b["length"])) {
              _push2(`<div class="gap-3 text-center mb-3 flex-container flex-dir-column"${_scopeId}><i class="text-5xl fad fa-coins text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No Leaders </div><div class="text-muted fw-semibold"${_scopeId}><p class="text-xs"${_scopeId}> There are currently no leaders. </p></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(__props.Bucks, (topBucks, index) => {
              _push2(`<div class="mb-3 row thread"${_scopeId}><div class="gap-3 align-middle flex-container"${_scopeId}><div class="${ssrRenderClass([TopList(Number(index + 1)), "text-2xl fw-semibold"])}"${_scopeId}>${ssrInterpolate("#" + Number(index + 1))}</div><div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start" style="${ssrRenderStyle({ "flex-direction": "column" })}"${_scopeId}><div class="text-start"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(route)("user.profile", {
                  username: topBucks.username
                }),
                class: "text-md"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(topBucks.username)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(topBucks.username), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}></div><div class="text-sm fw-semibold text-success"${_scopeId}><i class="fas fa-money-bill-1-wave"${_scopeId}> </i>${ssrInterpolate(topBucks.bucks)}</div></div></div></div><div class="mx-1 my-3 divider"${_scopeId}></div></div>`);
            });
            _push2(`<!--]--></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "cell large-6" }, [
                createVNode("div", { class: "mb-2 text-xl fw-semibold" }, "Top Level Leaders"),
                createVNode("div", { class: "card" }, [
                  createVNode("div", { class: "pb-0 card-body" }, [
                    !((_c = __props.XP) == null ? void 0 : _c["length"]) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "gap-3 text-center mb-3 flex-container flex-dir-column"
                    }, [
                      createVNode("i", { class: "text-5xl fad fa-arrow-up text-muted" }),
                      createVNode("div", { style: { "line-height": "16px" } }, [
                        createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " No Leaders "),
                        createVNode("div", { class: "text-muted fw-semibold" }, [
                          createVNode("p", { class: "text-xs" }, " There are currently no leaders. ")
                        ])
                      ])
                    ])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.XP, (top, index) => {
                      return openBlock(), createBlock("div", {
                        class: "mb-3 row thread",
                        key: index
                      }, [
                        createVNode("div", { class: "gap-3 align-middle flex-container" }, [
                          createVNode("div", {
                            class: ["text-2xl fw-semibold", TopList(Number(index + 1))]
                          }, toDisplayString("#" + Number(index + 1)), 3),
                          createVNode("div", {
                            class: "flex-wrap col-md-4 d-flex justify-content-center align-content-start",
                            style: { "flex-direction": "column" }
                          }, [
                            createVNode("div", { class: "text-start" }, [
                              createVNode(_component_Link, {
                                href: unref(route)("user.profile", {
                                  username: top.username
                                }),
                                class: "text-md"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(top.username), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              createVNode("div"),
                              createVNode("div", { class: "text-sm fw-semibold text-muted" }, [
                                createTextVNode(toDisplayString("Rank Lvl. " + top.experience.level_id), 1),
                                createVNode("span", { class: "mx-1" }, "•"),
                                createTextVNode(toDisplayString(top.experience.experience_points + "XP"), 1)
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "mx-1 my-3 divider" })
                      ]);
                    }), 128))
                  ])
                ])
              ]),
              createVNode("div", { class: "cell large-6" }, [
                createVNode("div", { class: "mb-2 text-xl fw-semibold" }, "Top Cash Earners"),
                createVNode("div", { class: "card" }, [
                  createVNode("div", { class: "pb-0 card-body" }, [
                    !((_d = __props.Bucks) == null ? void 0 : _d["length"]) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "gap-3 text-center mb-3 flex-container flex-dir-column"
                    }, [
                      createVNode("i", { class: "text-5xl fad fa-coins text-muted" }),
                      createVNode("div", { style: { "line-height": "16px" } }, [
                        createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " No Leaders "),
                        createVNode("div", { class: "text-muted fw-semibold" }, [
                          createVNode("p", { class: "text-xs" }, " There are currently no leaders. ")
                        ])
                      ])
                    ])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.Bucks, (topBucks, index) => {
                      return openBlock(), createBlock("div", {
                        class: "mb-3 row thread",
                        key: index
                      }, [
                        createVNode("div", { class: "gap-3 align-middle flex-container" }, [
                          createVNode("div", {
                            class: ["text-2xl fw-semibold", TopList(Number(index + 1))]
                          }, toDisplayString("#" + Number(index + 1)), 3),
                          createVNode("div", {
                            class: "flex-wrap col-md-4 d-flex justify-content-center align-content-start",
                            style: { "flex-direction": "column" }
                          }, [
                            createVNode("div", { class: "text-start" }, [
                              createVNode(_component_Link, {
                                href: unref(route)("user.profile", {
                                  username: topBucks.username
                                }),
                                class: "text-md"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(topBucks.username), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              createVNode("div"),
                              createVNode("div", { class: "text-sm fw-semibold text-success" }, [
                                createVNode("i", { class: "fas fa-money-bill-1-wave" }, " "),
                                createTextVNode(toDisplayString(topBucks.bucks), 1)
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "mx-1 my-3 divider" })
                      ]);
                    }), 128))
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Leaderboard/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
