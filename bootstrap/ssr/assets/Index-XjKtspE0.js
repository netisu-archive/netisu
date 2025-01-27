import { defineComponent, resolveComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Navbar-Mp_kEPSl.js";
import { _ as _sfc_main$1 } from "../ssr.js";
import { _ as _sfc_main$3 } from "./Footer-CxsG0LBb.js";
import { S as Sidebar } from "./Sidebar-DDhf-Q4i.js";
import { route } from "momentum-trail";
import { usePage, Link } from "@inertiajs/vue3";
import VLazyImage from "v-lazy-image";
import "axios";
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
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Pagination = resolveComponent("Pagination");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Users",
        description: "View all users here.",
        url: unref(route)(`user.page`)
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="cell small-12"${_scopeId}><div class="mb-2 text-3xl fw-semibold align-center"${_scopeId}>Users</div><div class="grid-x align-center"${_scopeId}><!--[-->`);
            ssrRenderList(unref(usePage)().props.users.data, (user) => {
              _push2(`<div class="${ssrRenderClass([[user.online ? "online" : "offline"], "mx-2 mb-3 row card avatar card-body card-status"])}"${_scopeId}><div class="gap-2 align-middle flex-container"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)("user.profile", { username: user.username })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(VLazyImage), {
                      src: user.avatar,
                      width: "45",
                      class: "border img-fluid headshot rounded-circle border-secondary bg-dark",
                      alt: user.username
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(VLazyImage), {
                        src: user.avatar,
                        width: "45",
                        class: "border img-fluid headshot rounded-circle border-secondary bg-dark",
                        alt: user.username
                      }, null, 8, ["src", "alt"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start" style="${ssrRenderStyle({ "flex-direction": "column" })}"${_scopeId}><div class="text-start"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)("user.profile", { username: user.username }),
                class: "text-md"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(user.dname)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(user.dname), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}></div>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)("user.profile", { username: user.username }),
                class: "text-sm fw-semibold text-body"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate("@" + user.username)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString("@" + user.username), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}></div></div></div></div></div>`);
            });
            _push2(`<!--]--></div>`);
            if (!((_a = unref(usePage)().props.users.data) == null ? void 0 : _a["length"])) {
              _push2(`<div class="text-danger fw-semibold"${_scopeId}>ERR T100: No users found</div>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_b = unref(usePage)().props.users.data) == null ? void 0 : _b["length"]) {
              _push2(`<div class="mx-3 my-3 divider"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_c = unref(usePage)().props.users.data) == null ? void 0 : _c["length"]) {
              _push2(ssrRenderComponent(_component_Pagination, {
                pagedata: unref(usePage)().props.users
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "cell small-12" }, [
                createVNode("div", { class: "mb-2 text-3xl fw-semibold align-center" }, "Users"),
                createVNode("div", { class: "grid-x align-center" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(usePage)().props.users.data, (user) => {
                    return openBlock(), createBlock("div", {
                      class: ["mx-2 mb-3 row card avatar card-body card-status", [user.online ? "online" : "offline"]],
                      key: unref(usePage)().props.users.id
                    }, [
                      createVNode("div", { class: "gap-2 align-middle flex-container" }, [
                        createVNode(unref(Link), {
                          href: unref(route)("user.profile", { username: user.username })
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(VLazyImage), {
                              src: user.avatar,
                              width: "45",
                              class: "border img-fluid headshot rounded-circle border-secondary bg-dark",
                              alt: user.username
                            }, null, 8, ["src", "alt"])
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createVNode("div", {
                          class: "flex-wrap col-md-4 d-flex justify-content-center align-content-start",
                          style: { "flex-direction": "column" }
                        }, [
                          createVNode("div", { class: "text-start" }, [
                            createVNode(unref(Link), {
                              href: unref(route)("user.profile", { username: user.username }),
                              class: "text-md"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(user.dname), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"]),
                            createVNode("div"),
                            createVNode(unref(Link), {
                              href: unref(route)("user.profile", { username: user.username }),
                              class: "text-sm fw-semibold text-body"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString("@" + user.username), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"]),
                            createVNode("div")
                          ])
                        ])
                      ])
                    ], 2);
                  }), 128))
                ]),
                !((_d = unref(usePage)().props.users.data) == null ? void 0 : _d["length"]) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-danger fw-semibold"
                }, "ERR T100: No users found")) : createCommentVNode("", true),
                ((_e = unref(usePage)().props.users.data) == null ? void 0 : _e["length"]) ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "mx-3 my-3 divider"
                })) : createCommentVNode("", true),
                ((_f = unref(usePage)().props.users.data) == null ? void 0 : _f["length"]) ? (openBlock(), createBlock(_component_Pagination, {
                  key: 2,
                  pagedata: unref(usePage)().props.users
                }, null, 8, ["pagedata"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
