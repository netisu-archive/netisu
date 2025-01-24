import { defineComponent, resolveComponent, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Navbar-30Vv0CN7.js";
import { S as Sidebar } from "./Sidebar-BQWvWV-r.js";
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
    function typeIcon(type) {
      const iconMap = {
        user: "fad fa-user",
        gift: "fad fa-gift"
        // Add more icon mappings here
      };
      return iconMap[type] || null;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            _push2(`<div class="cell large-10 medium-12"${_scopeId}><div class="mb-2 align-middle flex-container align-justify"${_scopeId}><div class="text-xl fw-semibold"${_scopeId}>Notifications</div><a href="#" class="btn btn-success btn-sm"${_scopeId}><i class="fas fa-envelope me-2"${_scopeId}></i>Read All</a></div><div class="card card-body"${_scopeId}>`);
            if (!((_b = (_a = unref(usePage)().props.auth) == null ? void 0 : _a.user) == null ? void 0 : _b.notifications.length)) {
              _push2(`<div class="text-center dropdown-item"${_scopeId}><div class="gap-3 flex-container flex-dir-column"${_scopeId}><i class="text-5xl fad fa-face-sleeping text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No Notifications </div><div class="text-xs text-muted fw-semibold"${_scopeId}> You have not recieved any notifications recently. </div></div></div></div>`);
            } else {
              _push2(`<!--[-->`);
              ssrRenderList((_d = (_c = unref(usePage)().props.auth) == null ? void 0 : _c.user) == null ? void 0 : _d.notifications, (notification) => {
                _push2(`<div class="dropdown-item"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Link, {
                  href: notification.data.route,
                  class: "dropdown-link"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="gap-1 align-middle flex-container"${_scopeId2}><i style="${ssrRenderStyle({ "width": "38px" })}" class="${ssrRenderClass([typeIcon(notification.data.type), "text-lg text-center fas fa-comments-alt flex-child-grow"])}"${_scopeId2}></i><div class="gap-2 align-middle flex-container w-100"${_scopeId2}><div class="min-w-0" style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId2}><div class="text-sm text-truncate"${_scopeId2}>`);
                      if (notification.data.object) {
                        _push3(`<span class="search-keyword"${_scopeId2}>${ssrInterpolate(notification.data.object)}  </span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<span class="text-sm text-muted"${_scopeId2}>${ssrInterpolate(notification.data.message)}</span></div><div class="text-xs text-muted"${_scopeId2}>${ssrInterpolate(notification.DateHum)}</div></div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "gap-1 align-middle flex-container" }, [
                          createVNode("i", {
                            class: ["text-lg text-center fas fa-comments-alt flex-child-grow", typeIcon(notification.data.type)],
                            style: { "width": "38px" }
                          }, null, 2),
                          createVNode("div", { class: "gap-2 align-middle flex-container w-100" }, [
                            createVNode("div", {
                              class: "min-w-0",
                              style: { "line-height": "16px" }
                            }, [
                              createVNode("div", { class: "text-sm text-truncate" }, [
                                notification.data.object ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "search-keyword"
                                }, toDisplayString(notification.data.object) + "  ", 1)) : createCommentVNode("", true),
                                createVNode("span", { class: "text-sm text-muted" }, toDisplayString(notification.data.message), 1)
                              ]),
                              createVNode("div", { class: "text-xs text-muted" }, toDisplayString(notification.DateHum), 1)
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
            }
            _push2(`<div class="${ssrRenderClass({ "mx-1 my-3 divider": ((_g = (_f = (_e = unref(usePage)().props.auth) == null ? void 0 : _e.user) == null ? void 0 : _f.notifications) == null ? void 0 : _g.data) > 0 })}"${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "cell large-10 medium-12" }, [
                createVNode("div", { class: "mb-2 align-middle flex-container align-justify" }, [
                  createVNode("div", { class: "text-xl fw-semibold" }, "Notifications"),
                  createVNode("a", {
                    href: "#",
                    class: "btn btn-success btn-sm"
                  }, [
                    createVNode("i", { class: "fas fa-envelope me-2" }),
                    createTextVNode("Read All")
                  ])
                ]),
                createVNode("div", { class: "card card-body" }, [
                  !((_i = (_h = unref(usePage)().props.auth) == null ? void 0 : _h.user) == null ? void 0 : _i.notifications.length) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-center dropdown-item"
                  }, [
                    createVNode("div", { class: "gap-3 flex-container flex-dir-column" }, [
                      createVNode("i", { class: "text-5xl fad fa-face-sleeping text-muted" }),
                      createVNode("div", { style: { "line-height": "16px" } }, [
                        createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " No Notifications "),
                        createVNode("div", { class: "text-xs text-muted fw-semibold" }, " You have not recieved any notifications recently. ")
                      ])
                    ])
                  ])) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList((_k = (_j = unref(usePage)().props.auth) == null ? void 0 : _j.user) == null ? void 0 : _k.notifications, (notification) => {
                    return openBlock(), createBlock("div", { class: "dropdown-item" }, [
                      createVNode(_component_Link, {
                        href: notification.data.route,
                        class: "dropdown-link"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "gap-1 align-middle flex-container" }, [
                            createVNode("i", {
                              class: ["text-lg text-center fas fa-comments-alt flex-child-grow", typeIcon(notification.data.type)],
                              style: { "width": "38px" }
                            }, null, 2),
                            createVNode("div", { class: "gap-2 align-middle flex-container w-100" }, [
                              createVNode("div", {
                                class: "min-w-0",
                                style: { "line-height": "16px" }
                              }, [
                                createVNode("div", { class: "text-sm text-truncate" }, [
                                  notification.data.object ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "search-keyword"
                                  }, toDisplayString(notification.data.object) + "  ", 1)) : createCommentVNode("", true),
                                  createVNode("span", { class: "text-sm text-muted" }, toDisplayString(notification.data.message), 1)
                                ]),
                                createVNode("div", { class: "text-xs text-muted" }, toDisplayString(notification.DateHum), 1)
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ]);
                  }), 256)),
                  createVNode("div", {
                    class: { "mx-1 my-3 divider": ((_n = (_m = (_l = unref(usePage)().props.auth) == null ? void 0 : _l.user) == null ? void 0 : _m.notifications) == null ? void 0 : _n.data) > 0 }
                  }, null, 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Notifications/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
