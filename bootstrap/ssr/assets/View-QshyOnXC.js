import { defineComponent, resolveComponent, resolveDirective, unref, withCtx, createVNode, mergeProps, withDirectives, openBlock, createBlock, createCommentVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrGetDirectiveProps, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
import axios from "axios";
import { route } from "momentum-trail";
import { _ as _sfc_main$2 } from "./Navbar-30Vv0CN7.js";
import { _ as _sfc_main$1 } from "../ssr.js";
import { _ as _sfc_main$3 } from "./Footer-CxsG0LBb.js";
import { S as Sidebar } from "./Sidebar-BQWvWV-r.js";
import VLazyImage from "v-lazy-image";
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
  __name: "View",
  __ssrInlineRender: true,
  props: {
    spaces: { type: Array, required: true }
  },
  setup(__props) {
    const submit = () => {
      axios.get(`/sanctum/csrf-cookie`).then(() => {
        axios.post(route(`spaces.join`, { id: usePage().props.space.id }), {});
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_portal = resolveComponent("portal");
      const _directive_tippy = resolveDirective("tippy");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Spaces",
        description: "Find a space to join or create one!",
        url: unref(route)(`spaces.page`)
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<template>`);
      _push(ssrRenderComponent(_component_portal, { to: "bannerAsset" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VLazyImage), {
              src: unref(usePage)().props.space.thumbnail ?? "/assets/img/dummy-error.png",
              width: "100",
              class: "space-image",
              alt: "Space Thumbnail",
              "src-placeholder": "/assets/img/dummy-error.png"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VLazyImage), {
                src: unref(usePage)().props.space.thumbnail ?? "/assets/img/dummy-error.png",
                width: "100",
                class: "space-image",
                alt: "Space Thumbnail",
                "src-placeholder": "/assets/img/dummy-error.png"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_portal, { to: "bannerButtons" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(usePage)().props.auth.user && !unref(usePage)().props.isInSpace) {
              _push2(ssrRenderComponent(unref(Link), mergeProps({
                class: "text-xl text-success squish",
                href: "#",
                onClick: submit,
                content: "Join " + unref(usePage)().props.space.name,
                as: "button",
                style: { "outline": "none" }
              }, ssrGetDirectiveProps(_ctx, _directive_tippy, { placement: "bottom" })), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="fad fa-user-plus"${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("i", { class: "fad fa-user-plus" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(usePage)().props.auth.user && !unref(usePage)().props.isInSpace ? withDirectives((openBlock(), createBlock(unref(Link), {
                key: 0,
                class: "text-xl text-success squish",
                href: "#",
                onClick: submit,
                content: "Join " + unref(usePage)().props.space.name,
                as: "button",
                style: { "outline": "none" }
              }, {
                default: withCtx(() => [
                  createVNode("i", { class: "fad fa-user-plus" })
                ]),
                _: 1
              }, 8, ["content"])), [
                [_directive_tippy, { placement: "bottom" }]
              ]) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_portal, { to: "bannerName" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-xl" style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}>${ssrInterpolate(unref(usePage)().props.space.name)}</div>`);
          } else {
            return [
              createVNode("div", {
                class: "text-xl",
                style: { "line-height": "16px" }
              }, toDisplayString(unref(usePage)().props.space.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_portal, { to: "bannerDescription" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-muted"${_scopeId}>${ssrInterpolate(unref(usePage)().props.space.description)}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-muted" }, toDisplayString(unref(usePage)().props.space.description), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</template>`);
      _push(ssrRenderComponent(Sidebar, {
        superBanActive: true,
        alertsEnabled: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cell medium-3"${_scopeId}><div class="mb-1 text-xl fw-semibold"${_scopeId}>Actions</div><div class="gap-3 mt-3 mb-3 align-middle"${_scopeId}><ul class="tabs flex-dir-column"${_scopeId}><li class="tab-item"${_scopeId}><a class="tab-link squish active"${_scopeId}><i class="fa-solid fa-users"${_scopeId}></i> General </a></li><li class="tab-item"${_scopeId}><a class="tab-link squish"${_scopeId}><i class="fa-solid fa-store"${_scopeId}></i> Shop </a></li><li class="tab-item"${_scopeId}><a class="tab-link squish"${_scopeId}><i class="fa-solid fa-gamepad-alt"${_scopeId}></i> Games </a></li></ul></div><div class="mb-1 text-xl fw-semibold"${_scopeId}>Statistics</div><div class="mb-3 card card-body"${_scopeId}><div class="gap-1 align-middle flex-container flex-dir-column"${_scopeId}><div class="text-sm text-info w-100"${_scopeId}><i class="text-center fas fa-users-crown" style="${ssrRenderStyle({ "width": "26px" })}"${_scopeId}></i> ${ssrInterpolate(unref(usePage)().props.space.creator.username)}</div><div class="text-sm w-100"${_scopeId}><i class="text-center fas fa-user-group text-muted" style="${ssrRenderStyle({ "width": "26px" })}"${_scopeId}></i> 10k+ Members </div><div class="text-sm w-100"${_scopeId}><i class="text-center fas fa-clock text-muted" style="${ssrRenderStyle({ "width": "26px" })}"${_scopeId}></i> ${ssrInterpolate(unref(usePage)().props.space.DateHum)}</div></div></div></div><div class="cell medium-9"${_scopeId}><div style="${ssrRenderStyle({ "height": "6px" })}"${_scopeId}></div><div class="mb-3 card card-body"${_scopeId}><div class="section"${_scopeId}><ul class="tabs"${_scopeId}><li class="tab-item"${_scopeId}><a href="#" class="tab-link active squish"${_scopeId}>Members</a></li><li class="tab-item"${_scopeId}><a href="#" class="tab-link squish"${_scopeId}>Posts</a></li></ul></div><div class="section"${_scopeId}><div class="mb-2 align-middle grid-x"${_scopeId}><div class="cell large-3"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}> Members </div></div><div class="cell large-9"${_scopeId}><div class="gap-2 align-middle flex-container-lg"${_scopeId}><input type="text" class="mb-2 form form-xs form-has-section-color" placeholder="Search Members..."${_scopeId}><select class="mb-2 form form-xs form-select form-has-section-color"${_scopeId}><option value="1" selected${_scopeId}> Members </option><option value="2"${_scopeId}> Administrators </option><option value="3" disabled${_scopeId}> Creators </option></select></div></div></div><div class="flex-wrap gap-3 mt-2 mb-2 flex-container"${_scopeId}><div class="min-w-0 text-center" style="${ssrRenderStyle({ "width": "80px" })}"${_scopeId}><img src="/assets/img/dummy_headshot.png" class="headshot flex-child-grow" alt="headshot"${_scopeId}><div class="text-sm text-info fw-semibold text-truncate"${_scopeId}> Aeo </div></div><div class="min-w-0 text-center" style="${ssrRenderStyle({ "width": "80px" })}"${_scopeId}><img src="/assets/img/dummy_headshot.png" class="headshot flex-child-grow" alt="headshot"${_scopeId}><div class="text-sm text-danger fw-semibold text-truncate"${_scopeId}> Aeo </div></div><div class="min-w-0 text-center" style="${ssrRenderStyle({ "width": "80px" })}"${_scopeId}><img src="/assets/img/dummy_headshot.png" class="headshot flex-child-grow" alt="headshot"${_scopeId}><div class="text-sm fw-semibold text-truncate"${_scopeId}> Aeo </div></div></div></div><div class="section"${_scopeId}><ul class="pagination flex-container align-center"${_scopeId}><button class="page-link page-disabled"${_scopeId}><i class="fa-regular fa-chevron-left"${_scopeId}></i></button><button class="page-link page-active"${_scopeId}>1</button><button class="page-link"${_scopeId}>2</button><button class="page-link"${_scopeId}>3</button><button class="page-link"${_scopeId}><i class="fa-regular fa-chevron-right"${_scopeId}></i></button></ul></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "cell medium-3" }, [
                createVNode("div", { class: "mb-1 text-xl fw-semibold" }, "Actions"),
                createVNode("div", { class: "gap-3 mt-3 mb-3 align-middle" }, [
                  createVNode("ul", { class: "tabs flex-dir-column" }, [
                    createVNode("li", { class: "tab-item" }, [
                      createVNode("a", { class: "tab-link squish active" }, [
                        createVNode("i", { class: "fa-solid fa-users" }),
                        createTextVNode(" General ")
                      ])
                    ]),
                    createVNode("li", { class: "tab-item" }, [
                      createVNode("a", { class: "tab-link squish" }, [
                        createVNode("i", { class: "fa-solid fa-store" }),
                        createTextVNode(" Shop ")
                      ])
                    ]),
                    createVNode("li", { class: "tab-item" }, [
                      createVNode("a", { class: "tab-link squish" }, [
                        createVNode("i", { class: "fa-solid fa-gamepad-alt" }),
                        createTextVNode(" Games ")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "mb-1 text-xl fw-semibold" }, "Statistics"),
                createVNode("div", { class: "mb-3 card card-body" }, [
                  createVNode("div", { class: "gap-1 align-middle flex-container flex-dir-column" }, [
                    createVNode("div", { class: "text-sm text-info w-100" }, [
                      createVNode("i", {
                        class: "text-center fas fa-users-crown",
                        style: { "width": "26px" }
                      }),
                      createTextVNode(" " + toDisplayString(unref(usePage)().props.space.creator.username), 1)
                    ]),
                    createVNode("div", { class: "text-sm w-100" }, [
                      createVNode("i", {
                        class: "text-center fas fa-user-group text-muted",
                        style: { "width": "26px" }
                      }),
                      createTextVNode(" 10k+ Members ")
                    ]),
                    createVNode("div", { class: "text-sm w-100" }, [
                      createVNode("i", {
                        class: "text-center fas fa-clock text-muted",
                        style: { "width": "26px" }
                      }),
                      createTextVNode(" " + toDisplayString(unref(usePage)().props.space.DateHum), 1)
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "cell medium-9" }, [
                createVNode("div", { style: { "height": "6px" } }),
                createVNode("div", { class: "mb-3 card card-body" }, [
                  createVNode("div", { class: "section" }, [
                    createVNode("ul", { class: "tabs" }, [
                      createVNode("li", { class: "tab-item" }, [
                        createVNode("a", {
                          href: "#",
                          class: "tab-link active squish"
                        }, "Members")
                      ]),
                      createVNode("li", { class: "tab-item" }, [
                        createVNode("a", {
                          href: "#",
                          class: "tab-link squish"
                        }, "Posts")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "section" }, [
                    createVNode("div", { class: "mb-2 align-middle grid-x" }, [
                      createVNode("div", { class: "cell large-3" }, [
                        createVNode("div", { class: "mb-2 text-xl fw-semibold" }, " Members ")
                      ]),
                      createVNode("div", { class: "cell large-9" }, [
                        createVNode("div", { class: "gap-2 align-middle flex-container-lg" }, [
                          createVNode("input", {
                            type: "text",
                            class: "mb-2 form form-xs form-has-section-color",
                            placeholder: "Search Members..."
                          }),
                          createVNode("select", { class: "mb-2 form form-xs form-select form-has-section-color" }, [
                            createVNode("option", {
                              value: "1",
                              selected: ""
                            }, " Members "),
                            createVNode("option", { value: "2" }, " Administrators "),
                            createVNode("option", {
                              value: "3",
                              disabled: ""
                            }, " Creators ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex-wrap gap-3 mt-2 mb-2 flex-container" }, [
                      createVNode("div", {
                        class: "min-w-0 text-center",
                        style: { "width": "80px" }
                      }, [
                        createVNode("img", {
                          src: "/assets/img/dummy_headshot.png",
                          class: "headshot flex-child-grow",
                          alt: "headshot"
                        }),
                        createVNode("div", { class: "text-sm text-info fw-semibold text-truncate" }, " Aeo ")
                      ]),
                      createVNode("div", {
                        class: "min-w-0 text-center",
                        style: { "width": "80px" }
                      }, [
                        createVNode("img", {
                          src: "/assets/img/dummy_headshot.png",
                          class: "headshot flex-child-grow",
                          alt: "headshot"
                        }),
                        createVNode("div", { class: "text-sm text-danger fw-semibold text-truncate" }, " Aeo ")
                      ]),
                      createVNode("div", {
                        class: "min-w-0 text-center",
                        style: { "width": "80px" }
                      }, [
                        createVNode("img", {
                          src: "/assets/img/dummy_headshot.png",
                          class: "headshot flex-child-grow",
                          alt: "headshot"
                        }),
                        createVNode("div", { class: "text-sm fw-semibold text-truncate" }, " Aeo ")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "section" }, [
                    createVNode("ul", { class: "pagination flex-container align-center" }, [
                      createVNode("button", { class: "page-link page-disabled" }, [
                        createVNode("i", { class: "fa-regular fa-chevron-left" })
                      ]),
                      createVNode("button", { class: "page-link page-active" }, "1"),
                      createVNode("button", { class: "page-link" }, "2"),
                      createVNode("button", { class: "page-link" }, "3"),
                      createVNode("button", { class: "page-link" }, [
                        createVNode("i", { class: "fa-regular fa-chevron-right" })
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
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Spaces/View.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
