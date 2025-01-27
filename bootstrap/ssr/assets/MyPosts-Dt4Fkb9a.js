import { defineComponent, resolveComponent, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Navbar-Mp_kEPSl.js";
import { S as Sidebar } from "./Sidebar-DDhf-Q4i.js";
import { _ as _sfc_main$2 } from "./Footer-CxsG0LBb.js";
import { usePage } from "@inertiajs/vue3";
import { route } from "momentum-trail";
import VLazyImage from "v-lazy-image";
import "axios";
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
  __name: "MyPosts",
  __ssrInlineRender: true,
  props: {
    posts: { type: Object }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cell medium-10"${_scopeId}><div class="text-xl text-base bg-primary mb-2"${_scopeId}>My Posts</div><div class="card"${_scopeId}><div class="pb-0 card-body"${_scopeId}>`);
            if (!unref(usePage)().props.posts.data.length) {
              _push2(`<div class="gap-3 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fad fa-message-xmark text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No Forum Posts </div><div class="text-muted fw-semibold"${_scopeId}><p class="text-xs"${_scopeId}>You have no posts.</p>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(route)(`forum.create.page`, { id: 4 }),
                class: "text-xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`New Post`);
                  } else {
                    return [
                      createTextVNode("New Post")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(unref(usePage)().props.posts.data, (post, index) => {
              _push2(`<div class="mb-3 row thread"${_scopeId}><div class="${ssrRenderClass([{ "divider": index !== 0 }, "mx-1 my-3"])}"${_scopeId}></div><div class="gap-2 align-middle flex-container"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(route)("user.profile", { username: post.username })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(VLazyImage), {
                      src: post.headshot,
                      width: "65",
                      class: "border headshot flex-child-shrink img-fluid rounded-circle border-secondary bg-dark",
                      alt: "Avatar",
                      "src-placeholder": "/assets/img/dummy_headshot.png"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(VLazyImage), {
                        src: post.headshot,
                        width: "65",
                        class: "border headshot flex-child-shrink img-fluid rounded-circle border-secondary bg-dark",
                        alt: "Avatar",
                        "src-placeholder": "/assets/img/dummy_headshot.png"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start" style="${ssrRenderStyle({ "flex-direction": "column" })}"${_scopeId}><div class="text-start"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(route)("forum.post", { id: post.id, slug: post.seo }),
                class: "text-md"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(post.name)} `);
                    if (post.pinned) {
                      _push3(`<span${_scopeId2}><i class="text-danger fas fa-thumbtack"${_scopeId2}></i></span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(` `);
                    if (post.locked) {
                      _push3(`<span${_scopeId2}><i class="text-warning fas fa-lock"${_scopeId2}></i></span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createTextVNode(toDisplayString(post.name) + " ", 1),
                      post.pinned ? (openBlock(), createBlock("span", { key: 0 }, [
                        createVNode("i", { class: "text-danger fas fa-thumbtack" })
                      ])) : createCommentVNode("", true),
                      createTextVNode(),
                      post.locked ? (openBlock(), createBlock("span", { key: 1 }, [
                        createVNode("i", { class: "text-warning fas fa-lock" })
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(route)("user.profile", { username: post.username }),
                class: "text-sm fw-semibold text-body"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(post.display_name)} • ${ssrInterpolate(post.DateHum)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(post.display_name) + " • " + toDisplayString(post.DateHum), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="text-xs text-muted fw-semibold text-body"${_scopeId}> @${ssrInterpolate(post.username)}</div></div></div></div></div>`);
            });
            _push2(`<!--]--><div class="${ssrRenderClass([{ divider: unref(usePage)().props.posts.data.length > 0 }, "mx-1 my-3"])}"${_scopeId}></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "cell medium-10" }, [
                createVNode("div", { class: "text-xl text-base bg-primary mb-2" }, "My Posts"),
                createVNode("div", { class: "card" }, [
                  createVNode("div", { class: "pb-0 card-body" }, [
                    !unref(usePage)().props.posts.data.length ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "gap-3 text-center flex-container flex-dir-column"
                    }, [
                      createVNode("i", { class: "text-5xl fad fa-message-xmark text-muted" }),
                      createVNode("div", { style: { "line-height": "16px" } }, [
                        createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " No Forum Posts "),
                        createVNode("div", { class: "text-muted fw-semibold" }, [
                          createVNode("p", { class: "text-xs" }, "You have no posts."),
                          createVNode(_component_Link, {
                            href: unref(route)(`forum.create.page`, { id: 4 }),
                            class: "text-xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("New Post")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])
                    ])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(usePage)().props.posts.data, (post, index) => {
                      return openBlock(), createBlock("div", { class: "mb-3 row thread" }, [
                        createVNode("div", {
                          class: ["mx-1 my-3", { "divider": index !== 0 }]
                        }, null, 2),
                        createVNode("div", { class: "gap-2 align-middle flex-container" }, [
                          createVNode(_component_Link, {
                            href: unref(route)("user.profile", { username: post.username })
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(VLazyImage), {
                                src: post.headshot,
                                width: "65",
                                class: "border headshot flex-child-shrink img-fluid rounded-circle border-secondary bg-dark",
                                alt: "Avatar",
                                "src-placeholder": "/assets/img/dummy_headshot.png"
                              }, null, 8, ["src"])
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode("div", {
                            class: "flex-wrap col-md-4 d-flex justify-content-center align-content-start",
                            style: { "flex-direction": "column" }
                          }, [
                            createVNode("div", { class: "text-start" }, [
                              createVNode(_component_Link, {
                                href: unref(route)("forum.post", { id: post.id, slug: post.seo }),
                                class: "text-md"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(post.name) + " ", 1),
                                  post.pinned ? (openBlock(), createBlock("span", { key: 0 }, [
                                    createVNode("i", { class: "text-danger fas fa-thumbtack" })
                                  ])) : createCommentVNode("", true),
                                  createTextVNode(),
                                  post.locked ? (openBlock(), createBlock("span", { key: 1 }, [
                                    createVNode("i", { class: "text-warning fas fa-lock" })
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              createVNode("div"),
                              createVNode(_component_Link, {
                                href: unref(route)("user.profile", { username: post.username }),
                                class: "text-sm fw-semibold text-body"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(post.display_name) + " • " + toDisplayString(post.DateHum), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              createVNode("div", { class: "text-xs text-muted fw-semibold text-body" }, " @" + toDisplayString(post.username), 1)
                            ])
                          ])
                        ])
                      ]);
                    }), 256)),
                    createVNode("div", {
                      class: [{ divider: unref(usePage)().props.posts.data.length > 0 }, "mx-1 my-3"]
                    }, null, 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Forum/MyPosts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
