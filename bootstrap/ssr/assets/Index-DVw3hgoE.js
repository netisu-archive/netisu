import { defineComponent, resolveComponent, unref, withCtx, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, useSSRContext, createVNode, Fragment, renderList } from "vue";
import { ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./Navbar-DmBRqlRZ.js";
import { S as Sidebar } from "./Sidebar-fXSZR0n1.js";
import { route, current } from "momentum-trail";
import { _ as _sfc_main$4 } from "./Footer-CxsG0LBb.js";
import { _ as _sfc_main$2 } from "../ssr.js";
import VLazyImage from "v-lazy-image";
import { usePage } from "@inertiajs/vue3";
import "axios";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash/throttle.js";
import "vue-tippy";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ForumSidebar",
  __ssrInlineRender: true,
  props: [
    "section_one",
    "section_two",
    "section_three"
  ],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[--><div class="gap-2 mb-2 align-middle flex-container align-justify"><div class="text-2xl fw-semibold"><i class="text-xl fad fa-message-code"></i> Forum</div></div><div class="collapsible" id="Official"><button class="d-block w-100 market-section-item"><div class="align-middle flex-container align-justify"><div class="text-sm text-danger"><i class="fa-solid fa-megaphone fa-xs"></i> Official</div><i class="text-xs fas fa-chevron-down text-muted"></i></div></button><div class="mb-2 collapsible-menu"><!--[-->`);
      ssrRenderList(__props.section_one, (Official) => {
        _push(ssrRenderComponent(_component_Link, {
          as: "button",
          key: Official.id,
          href: unref(route)("forum.page", { id: Official.id }),
          class: ["text-xs market-section-item", [unref(current)("forum.page", Official.id) ? "active" : ""]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (Official.role_required_to_post != null) {
                _push2(`<i class="fas fa-lock"${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(Official.name)}`);
            } else {
              return [
                Official.role_required_to_post != null ? (openBlock(), createBlock("i", {
                  key: 0,
                  class: "fas fa-lock"
                })) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString(Official.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="collapsible" id="Community"><button class="d-block w-100 market-section-item"><div class="align-middle flex-container align-justify"><div class="text-sm text-info"><i class="fa-solid fa-party-horn fa-xs"></i> Community</div><i class="text-xs fas fa-chevron-down text-muted"></i></div></button><div class="mb-2 collapsible-menu"><!--[-->`);
      ssrRenderList(__props.section_two, (Community) => {
        _push(ssrRenderComponent(_component_Link, {
          as: "button",
          key: Community.id,
          href: unref(route)("forum.page", { id: Community.id }),
          class: ["text-xs market-section-item", [unref(current)("forum.page", Community.id) ? "active" : ""]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (Community.role_required_to_post != null) {
                _push2(`<i class="fas fa-lock"${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(Community.name)}`);
            } else {
              return [
                Community.role_required_to_post != null ? (openBlock(), createBlock("i", {
                  key: 0,
                  class: "fas fa-lock"
                })) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString(Community.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="collapsible" id="Serious"><button class="d-block w-100 market-section-item"><div class="align-middle flex-container align-justify"><div class="text-sm text-warning"><i class="fa-solid fa-triangle-exclamation fa-xs"></i> Serious</div><i class="text-xs fas fa-chevron-down text-muted"></i></div></button><div class="mb-2 collapsible-menu"><!--[-->`);
      ssrRenderList(__props.section_three, (Serious) => {
        _push(ssrRenderComponent(_component_Link, {
          as: "button",
          key: Serious.id,
          href: unref(route)("forum.page", { id: Serious.id }),
          class: ["text-xs market-section-item", [unref(current)("forum.page", Serious.id) ? "active" : ""]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (Serious.role_required_to_post != null) {
                _push2(`<i class="fas fa-lock"${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(Serious.name)}`);
            } else {
              return [
                Serious.role_required_to_post != null ? (openBlock(), createBlock("i", {
                  key: 0,
                  class: "fas fa-lock"
                })) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString(Serious.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LayoutParts/ForumSidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    posts: { type: Object },
    section_one: { type: Object },
    section_two: { type: Object },
    section_three: { type: Object },
    topic: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_Pagination = resolveComponent("Pagination");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        pageTitle: "Discuss",
        description: "Here, You can discuss with the community surrounding several topics on " + unref(usePage)().props.site.name + ".",
        url: unref(route)("forum.page", { id: unref(usePage)().props.topic.id })
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cell large-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              topic: __props.topic,
              section_one: __props.section_one,
              section_two: __props.section_two,
              section_three: __props.section_three
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="cell large-10"${_scopeId}><div class="mb-2 align-right grid-x"${_scopeId}>`);
            if (unref(usePage)().props.auth.user) {
              _push2(`<div class="cell large-7"${_scopeId}><div class="gap-2 align-middle flex-container-lg"${_scopeId}><input type="text" class="flex-container mb-2 form form-xs form-has-section-color" placeholder="Search..." name="search"${_scopeId}><div class="mb-2 flex-container flex-child-grow"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(route)(`forum.your.posts`),
                as: "button",
                class: "text-center btn btn-info btn-xs flex-child-grow"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="fad fa-star-circle"${_scopeId2}></i>  Your Posts`);
                  } else {
                    return [
                      createVNode("i", { class: "fad fa-star-circle" }),
                      createTextVNode("  Your Posts")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-2 flex-container flex-child-grow"${_scopeId}>`);
              {
                _push2(ssrRenderComponent(_component_Link, {
                  as: "button",
                  href: unref(route)(`forum.create.page`, { id: unref(usePage)().props.topic.id }),
                  class: [unref(usePage)().props.auth.user.staff ? "btn-danger" : "btn-success", "text-center btn btn-xs flex-child-grow"]
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<i class="fad fa-hexagon-plus"${_scopeId2}></i>  Create Post`);
                    } else {
                      return [
                        createVNode("i", { class: "fad fa-hexagon-plus" }),
                        createTextVNode("  Create Post")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><nav class="alert alert-info py-1 alert-landing"${_scopeId}><div class="text-center fw-semibold"${_scopeId}><div class="gap-2 flex-container"${_scopeId}><div${_scopeId}><div class="gap-2 align-middle flex-container"${_scopeId}><div class="text-start"${_scopeId}><div class="text-md fw-semibold"${_scopeId}>${ssrInterpolate(unref(usePage)().props.topic.name)}</div><div class="text-xs fw-semibold"${_scopeId}>${ssrInterpolate(unref(usePage)().props.topic.description)}</div></div></div></div></div></div></nav><div class="card"${_scopeId}><div class="pb-0 card-body"${_scopeId}>`);
            if (!unref(usePage)().props.posts.data.length) {
              _push2(`<div class="gap-3 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fad fa-message-xmark text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No Forum Posts </div><div class="text-muted fw-semibold"${_scopeId}><p class="text-xs"${_scopeId}>There are currently no posts in this category.</p></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(unref(usePage)().props.posts.data, (post, index) => {
              _push2(`<div class="mb-3 row thread"${_scopeId}><div class="${ssrRenderClass([{ "divider": index !== 0 }, "mx-1 my-3"])}"${_scopeId}></div><div class="gap-2 align-middle flex-container"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(route)("user.profile", { username: post.creator.username })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(VLazyImage), {
                      src: post.creator.headshot,
                      width: "65",
                      class: "border headshot flex-child-shrink img-fluid rounded-circle border-secondary bg-dark",
                      alt: "Avatar",
                      "src-placeholder": "/assets/img/dummy_headshot.png"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(VLazyImage), {
                        src: post.creator.headshot,
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
                href: unref(route)("user.profile", { username: post.creator.username }),
                class: "text-sm fw-semibold text-body"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(post.creator.display_name)} • ${ssrInterpolate(post.DateHum)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(post.creator.display_name) + " • " + toDisplayString(post.DateHum), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="text-xs text-muted fw-semibold text-body"${_scopeId}>${ssrInterpolate("@" + post.creator.username)}</div></div></div></div></div>`);
            });
            _push2(`<!--]--><div class="${ssrRenderClass([{ divider: unref(usePage)().props.posts.data.length > 0 }, "mx-1 my-3"])}"${_scopeId}></div>`);
            if (unref(usePage)().props.posts.data.length) {
              _push2(ssrRenderComponent(_component_Pagination, {
                class: "mx-1 my-3",
                pagedata: unref(usePage)().props.posts
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "cell large-2" }, [
                createVNode(_sfc_main$1, {
                  topic: __props.topic,
                  section_one: __props.section_one,
                  section_two: __props.section_two,
                  section_three: __props.section_three
                }, null, 8, ["topic", "section_one", "section_two", "section_three"])
              ]),
              createVNode("div", { class: "cell large-10" }, [
                createVNode("div", { class: "mb-2 align-right grid-x" }, [
                  unref(usePage)().props.auth.user ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "cell large-7"
                  }, [
                    createVNode("div", { class: "gap-2 align-middle flex-container-lg" }, [
                      createVNode("input", {
                        type: "text",
                        class: "flex-container mb-2 form form-xs form-has-section-color",
                        placeholder: "Search...",
                        name: "search"
                      }),
                      createVNode("div", { class: "mb-2 flex-container flex-child-grow" }, [
                        createVNode(_component_Link, {
                          href: unref(route)(`forum.your.posts`),
                          as: "button",
                          class: "text-center btn btn-info btn-xs flex-child-grow"
                        }, {
                          default: withCtx(() => [
                            createVNode("i", { class: "fad fa-star-circle" }),
                            createTextVNode("  Your Posts")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      createVNode("div", { class: "mb-2 flex-container flex-child-grow" }, [
                        (openBlock(), createBlock(_component_Link, {
                          key: 0,
                          as: "button",
                          href: unref(route)(`forum.create.page`, { id: unref(usePage)().props.topic.id }),
                          class: [unref(usePage)().props.auth.user.staff ? "btn-danger" : "btn-success", "text-center btn btn-xs flex-child-grow"]
                        }, {
                          default: withCtx(() => [
                            createVNode("i", { class: "fad fa-hexagon-plus" }),
                            createTextVNode("  Create Post")
                          ]),
                          _: 1
                        }, 8, ["href", "class"]))
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("nav", { class: "alert alert-info py-1 alert-landing" }, [
                  createVNode("div", { class: "text-center fw-semibold" }, [
                    createVNode("div", { class: "gap-2 flex-container" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "gap-2 align-middle flex-container" }, [
                          createVNode("div", { class: "text-start" }, [
                            createVNode("div", { class: "text-md fw-semibold" }, toDisplayString(unref(usePage)().props.topic.name), 1),
                            createVNode("div", { class: "text-xs fw-semibold" }, toDisplayString(unref(usePage)().props.topic.description), 1)
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
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
                          createVNode("p", { class: "text-xs" }, "There are currently no posts in this category.")
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
                            href: unref(route)("user.profile", { username: post.creator.username })
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(VLazyImage), {
                                src: post.creator.headshot,
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
                                href: unref(route)("user.profile", { username: post.creator.username }),
                                class: "text-sm fw-semibold text-body"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(post.creator.display_name) + " • " + toDisplayString(post.DateHum), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              createVNode("div", { class: "text-xs text-muted fw-semibold text-body" }, toDisplayString("@" + post.creator.username), 1)
                            ])
                          ])
                        ])
                      ]);
                    }), 256)),
                    createVNode("div", {
                      class: [{ divider: unref(usePage)().props.posts.data.length > 0 }, "mx-1 my-3"]
                    }, null, 2),
                    unref(usePage)().props.posts.data.length ? (openBlock(), createBlock(_component_Pagination, {
                      key: 1,
                      class: "mx-1 my-3",
                      pagedata: unref(usePage)().props.posts
                    }, null, 8, ["pagedata"])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Forum/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
