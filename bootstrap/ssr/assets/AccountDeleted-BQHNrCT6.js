import { defineComponent, resolveComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Navbar-DmBRqlRZ.js";
import { S as Sidebar } from "./Sidebar-fXSZR0n1.js";
import { _ as _sfc_main$2 } from "./Footer-CxsG0LBb.js";
import { route } from "momentum-trail";
import { usePage } from "@inertiajs/vue3";
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
import "vue-tippy";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AccountDeleted",
  __ssrInlineRender: true,
  props: {
    ban: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Sidebar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="cell medium-7"${_scopeId2}><div class="mb-3 card card-body"${_scopeId2}><div class="mb-3"${_scopeId2}><div class="text-xl" style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId2}><div class="mb-1 fw-semibold"${_scopeId2}><div class="text-xl"${_scopeId2}>${ssrInterpolate(_ctx.ban.type)}</div></div><div class="text-sm text-muted fw-semibold mb-3"${_scopeId2}> We noticed some activity on your account that are violate the Terms of Service. To keep using ${ssrInterpolate(unref(usePage)().props.site.name)}, make sure you&#39;re following the community guidelines. Treat others with respect, avoid sharing inappropriate content, and play fair. A quick refresh on the <a class="link text-primary"${_scopeId2}>rules</a> can help you stay in the game! <div class="p-2 mt-3 mb-1 card card-body card-item position-relative"${_scopeId2}>${ssrInterpolate(_ctx.ban.note)}</div></div><div class="divider-m0"${_scopeId2}></div><div class="mt-2 mb-3 text-center text-md text-info fw-semibold"${_scopeId2}> You can reinstate your account on ${ssrInterpolate(_ctx.ban.DateHum)} at ${ssrInterpolate(_ctx.ban.exactTime)}. </div><div class="min-w-0 gap-2 align-center flex-container"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Link, {
                    href: unref(route)("auth.logout"),
                    method: "post",
                    class: "min-w-0 btn btn-danger btn-xs text-truncate",
                    as: "button"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<i class="fad fa-right-from-bracket"${_scopeId3}></i> Logout `);
                      } else {
                        return [
                          createVNode("i", { class: "fad fa-right-from-bracket" }),
                          createTextVNode(" Logout ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (_ctx.ban.cleared) {
                    _push3(`<button class="btn btn-xs btn-info"${_scopeId2}> Reinstate your account </button>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "cell medium-7" }, [
                      createVNode("div", { class: "mb-3 card card-body" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("div", {
                            class: "text-xl",
                            style: { "line-height": "16px" }
                          }, [
                            createVNode("div", { class: "mb-1 fw-semibold" }, [
                              createVNode("div", { class: "text-xl" }, toDisplayString(_ctx.ban.type), 1)
                            ]),
                            createVNode("div", { class: "text-sm text-muted fw-semibold mb-3" }, [
                              createTextVNode(" We noticed some activity on your account that are violate the Terms of Service. To keep using " + toDisplayString(unref(usePage)().props.site.name) + ", make sure you're following the community guidelines. Treat others with respect, avoid sharing inappropriate content, and play fair. A quick refresh on the ", 1),
                              createVNode("a", { class: "link text-primary" }, "rules"),
                              createTextVNode(" can help you stay in the game! "),
                              createVNode("div", { class: "p-2 mt-3 mb-1 card card-body card-item position-relative" }, toDisplayString(_ctx.ban.note), 1)
                            ]),
                            createVNode("div", { class: "divider-m0" }),
                            createVNode("div", { class: "mt-2 mb-3 text-center text-md text-info fw-semibold" }, " You can reinstate your account on " + toDisplayString(_ctx.ban.DateHum) + " at " + toDisplayString(_ctx.ban.exactTime) + ". ", 1),
                            createVNode("div", { class: "min-w-0 gap-2 align-center flex-container" }, [
                              createVNode(_component_Link, {
                                href: unref(route)("auth.logout"),
                                method: "post",
                                class: "min-w-0 btn btn-danger btn-xs text-truncate",
                                as: "button"
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fad fa-right-from-bracket" }),
                                  createTextVNode(" Logout ")
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              _ctx.ban.cleared ? (openBlock(), createBlock("button", {
                                key: 0,
                                class: "btn btn-xs btn-info"
                              }, " Reinstate your account ")) : createCommentVNode("", true)
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Sidebar, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "cell medium-7" }, [
                    createVNode("div", { class: "mb-3 card card-body" }, [
                      createVNode("div", { class: "mb-3" }, [
                        createVNode("div", {
                          class: "text-xl",
                          style: { "line-height": "16px" }
                        }, [
                          createVNode("div", { class: "mb-1 fw-semibold" }, [
                            createVNode("div", { class: "text-xl" }, toDisplayString(_ctx.ban.type), 1)
                          ]),
                          createVNode("div", { class: "text-sm text-muted fw-semibold mb-3" }, [
                            createTextVNode(" We noticed some activity on your account that are violate the Terms of Service. To keep using " + toDisplayString(unref(usePage)().props.site.name) + ", make sure you're following the community guidelines. Treat others with respect, avoid sharing inappropriate content, and play fair. A quick refresh on the ", 1),
                            createVNode("a", { class: "link text-primary" }, "rules"),
                            createTextVNode(" can help you stay in the game! "),
                            createVNode("div", { class: "p-2 mt-3 mb-1 card card-body card-item position-relative" }, toDisplayString(_ctx.ban.note), 1)
                          ]),
                          createVNode("div", { class: "divider-m0" }),
                          createVNode("div", { class: "mt-2 mb-3 text-center text-md text-info fw-semibold" }, " You can reinstate your account on " + toDisplayString(_ctx.ban.DateHum) + " at " + toDisplayString(_ctx.ban.exactTime) + ". ", 1),
                          createVNode("div", { class: "min-w-0 gap-2 align-center flex-container" }, [
                            createVNode(_component_Link, {
                              href: unref(route)("auth.logout"),
                              method: "post",
                              class: "min-w-0 btn btn-danger btn-xs text-truncate",
                              as: "button"
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fad fa-right-from-bracket" }),
                                createTextVNode(" Logout ")
                              ]),
                              _: 1
                            }, 8, ["href"]),
                            _ctx.ban.cleared ? (openBlock(), createBlock("button", {
                              key: 0,
                              class: "btn btn-xs btn-info"
                            }, " Reinstate your account ")) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AccountDeleted.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
