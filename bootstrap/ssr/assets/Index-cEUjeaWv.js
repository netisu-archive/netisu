import { defineComponent, computed, onMounted, resolveComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "../ssr.js";
import { _ as _sfc_main$2 } from "./Navbar-30Vv0CN7.js";
import { S as Sidebar } from "./Sidebar-BQWvWV-r.js";
import { _ as _sfc_main$3 } from "./Footer-CxsG0LBb.js";
import { usePage } from "@inertiajs/vue3";
import { route } from "momentum-trail";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "portal-vue";
import "vue-tippy";
import "axios";
import "v-lazy-image";
import "lodash/throttle.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    LandingItems: { type: Object },
    LandingPosts: { type: Object }
  },
  setup(__props) {
    const site = computed(() => usePage().props.site);
    const Welcome = [
      {
        en: {
          message: `Welcome to ${usePage().props.site.name}!`,
          desc: `${usePage().props.site.name} is a collaborative 3D sandbox community. Work together to build amazing things and have fun along the way!`
        },
        es: {
          message: `Bienvenido a ${usePage().props.site.name}!`,
          desc: `${usePage().props.site.name} es una comunidad colaborativa de sandbox 3D. ¡Trabajad juntos para construir cosas increíbles y divertíos en el camino!`
        },
        ru: {
          message: `Добро пожаловать в ${usePage().props.site.name}!`,
          desc: `${usePage().props.site.name}— это совместное сообщество 3D-песочниц. Работайте вместе, чтобы создавать удивительные вещи, и получайте от этого удовольствие!`
        },
        ja: {
          message: `${usePage().props.site.name}へようこそ！`,
          desc: `${usePage().props.site.name} は、協力的な 3D サンドボックス コミュニティです。協力して素晴らしいものを作り、その過程を楽しみましょう!`
        }
      }
    ];
    const lang = computed(() => usePage().props.locale);
    onMounted(() => {
      showLoading();
    });
    function onImgErrorSmall(id) {
      let source = document.getElementById(id);
      source.src = "/assets/img/dummy-error.png";
      source.onerror = null;
      return true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Welcome",
        description: "Join in on the action today. Buy & sell items, participate in spaces, make friends, and more.",
        url: unref(route)(`Welcome`)
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { landing: true }, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<header class="masthead-landing p-4 pt-4" data-v-245b617a${_scopeId}><img src="/assets/img/site-banners/stars-bg.png" style="${ssrRenderStyle({ "z-index": "1" })}" alt="background" data-v-245b617a${_scopeId}><div class="cell large-4" style="${ssrRenderStyle({ "position": "relative", "z-index": "3" })}" data-v-245b617a${_scopeId}><div class="min-w-0 gap-4 ml-4 flex-container row-landing" data-v-245b617a${_scopeId}><div class="row-landing" data-v-245b617a${_scopeId}><div class="text-white" data-v-245b617a${_scopeId}><span class="text-5xl fw-semibold" data-v-245b617a${_scopeId}><!--[-->`);
            ssrRenderList(Welcome, (messages) => {
              _push2(`<span data-v-245b617a${_scopeId}>${ssrInterpolate(messages[lang.value].message)}</span>`);
            });
            _push2(`<!--]--></span><!--[-->`);
            ssrRenderList(Welcome, (desc) => {
              _push2(`<h3 class="p-2 mt-3 text-wrap fw-semibold" data-v-245b617a${_scopeId}>${ssrInterpolate(desc[lang.value].desc)}</h3>`);
            });
            _push2(`<!--]--><div class="min-w-0 gap-2 mt-3 flex-container" data-v-245b617a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: unref(route)("auth.register.page"),
              class: "btn btn-landing btn-success"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="mr-1 fa-solid fa-person-to-portal show-for-medium" data-v-245b617a${_scopeId2}></i> Get Started `);
                } else {
                  return [
                    createVNode("i", { class: "mr-1 fa-solid fa-person-to-portal show-for-medium" }),
                    createTextVNode(" Get Started ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Link, {
              href: unref(route)("auth.login.page"),
              class: "btn btn-landing btn-info"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="mr-1 fa-solid fa-person-to-portal show-for-medium" data-v-245b617a${_scopeId2}></i> Login `);
                } else {
                  return [
                    createVNode("i", { class: "mr-1 fa-solid fa-person-to-portal show-for-medium" }),
                    createTextVNode(" Login ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div></header>`);
            if (unref(usePage)().props.site_config.announcement) {
              _push2(`<nav class="alert alert-danger alert-landing" data-v-245b617a${_scopeId}><div class="py-1 text-center fw-semibold" data-v-245b617a${_scopeId}><div class="gap-2 text-center align-middle flex-container align-center" data-v-245b617a${_scopeId}><div data-v-245b617a${_scopeId}>${ssrInterpolate(unref(usePage)().props.site_config.announcement_message)}</div></div></div></nav>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<main class="container" data-v-245b617a${_scopeId}><div class="justify-center grid-x grid-margin-x align-center grid-padding-y" data-v-245b617a${_scopeId}>`);
            if (((_a = __props.LandingItems) == null ? void 0 : _a["data"]) || ((_b = __props.LandingItems) == null ? void 0 : _b["data"].length) < 5) {
              _push2(`<div class="cell large-12" data-v-245b617a${_scopeId}><div class="align-middle grid-x" data-v-245b617a${_scopeId}><div class="p-2 mb-4 cell large-4" data-v-245b617a${_scopeId}><div class="landing-text-landing fw-semibold" data-v-245b617a${_scopeId}> Customize your Character </div><div data-v-245b617a${_scopeId}> Pick and choose from a collection of items created by the community to create you own unique character with. </div></div><div class="cell large-8" data-v-245b617a${_scopeId}><div class="grid-x grid-margin-x grid-padding-y" data-v-245b617a${_scopeId}><!--[-->`);
              ssrRenderList((_c = __props.LandingItems) == null ? void 0 : _c["data"], (item) => {
                _push2(`<div class="cell large-2 medium-4 small-6" data-v-245b617a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Link, {
                  href: unref(route)(`store.item`, { id: item.id }),
                  class: "d-block"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="p-2 mb-1 card card-item position-relative" data-v-245b617a${_scopeId2}><img${ssrRenderAttr("src", item.thumbnail)}${ssrRenderAttr("id", item.name)}${ssrRenderAttr("alt", item.name)} class="img-fluid" data-v-245b617a${_scopeId2}></div><div class="text-body fw-semibold text-truncate" data-v-245b617a${_scopeId2}>${ssrInterpolate(item.name)}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "p-2 mb-1 card card-item position-relative" }, [
                          createVNode("img", {
                            src: item.thumbnail,
                            id: item.name,
                            alt: item.name,
                            class: "img-fluid",
                            onError: ($event) => onImgErrorSmall(item.name)
                          }, null, 40, ["src", "id", "alt", "onError"])
                        ]),
                        createVNode("div", { class: "text-body fw-semibold text-truncate" }, toDisplayString(item.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="text-xs fw-semibold" data-v-245b617a${_scopeId}><span class="text-muted" data-v-245b617a${_scopeId}>By </span>`);
                _push2(ssrRenderComponent(_component_Link, {
                  href: unref(route)(`user.profile`, {
                    username: item.creator.username
                  }),
                  class: "text-info"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate("@" + item.creator.username)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString("@" + item.creator.username), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="cell large-12" data-v-245b617a${_scopeId}><div class="mb-1 align-middle grid-x" data-v-245b617a${_scopeId}><div class="cell large-8" data-v-245b617a${_scopeId}><div class="grid-x grid-margin-x grid-padding-y" data-v-245b617a${_scopeId}><!--[-->`);
            ssrRenderList((_d = __props.LandingPosts) == null ? void 0 : _d["data"], (post) => {
              _push2(`<div class="mb-1 cell large-3 medium-6 small-6" data-v-245b617a${_scopeId}><div class="gap-2 mb-3 card card-body flex-container flex-dir-column" data-v-245b617a${_scopeId}><div class="gap-2 flex-container" data-v-245b617a${_scopeId}><div class="gap-2 flex-container" data-v-245b617a${_scopeId}><button class="gap-2 align-middle flex-container squish" data-v-245b617a${_scopeId}><img class="headshot" src="assets/img/dummy_headshot.png" width="50" height="50" alt="Avatar" data-v-245b617a${_scopeId}></button><div data-v-245b617a${_scopeId}><p class="fw-semibold text-truncate" data-v-245b617a${_scopeId}>${ssrInterpolate(post.title)}</p><div class="text-sm fw-semibold text-muted" data-v-245b617a${_scopeId}> By: `);
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(route)(`user.profile`, { username: post.creator.username }),
                class: "text-info"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(post.creator.username)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(post.creator.username), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></div></div><div class="gap-4 my-3 mb-1 flex-container align-center flex-dir-column" data-v-245b617a${_scopeId}><div class="text-sm text-muted fw-semibold text-truncate" data-v-245b617a${_scopeId}><span data-v-245b617a${_scopeId}>${post.body ?? ""}</span></div></div><div class="divider-m0 w-100" data-v-245b617a${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(route)(`forum.post`, { id: post.id, slug: post.slug }),
                class: "min-w-0 w-100 text-center btn btn-info btn-sm text-truncate"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`View Post`);
                  } else {
                    return [
                      createTextVNode("View Post")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div></div><div class="p-5 mt-4 cell large-4" data-v-245b617a${_scopeId}><div class="landing-text-landing fw-semibold" data-v-245b617a${_scopeId}> Socialize With Others </div><div data-v-245b617a${_scopeId}> Head over to Discussion to socialize with all kinds of users on ${ssrInterpolate(site.value.name)}, from the funny to the professional, and find new friends! </div></div></div></div></div></main>`);
            _push2(ssrRenderComponent(_sfc_main$3, { isLanding: true }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("header", { class: "masthead-landing p-4 pt-4" }, [
                createVNode("img", {
                  src: "/assets/img/site-banners/stars-bg.png",
                  style: { "z-index": "1" },
                  alt: "background"
                }),
                createVNode("div", {
                  class: "cell large-4",
                  style: { "position": "relative", "z-index": "3" }
                }, [
                  createVNode("div", { class: "min-w-0 gap-4 ml-4 flex-container row-landing" }, [
                    createVNode("div", { class: "row-landing" }, [
                      createVNode("div", { class: "text-white" }, [
                        createVNode("span", { class: "text-5xl fw-semibold" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(Welcome, (messages) => {
                            return createVNode("span", null, toDisplayString(messages[lang.value].message), 1);
                          }), 64))
                        ]),
                        (openBlock(), createBlock(Fragment, null, renderList(Welcome, (desc) => {
                          return createVNode("h3", { class: "p-2 mt-3 text-wrap fw-semibold" }, toDisplayString(desc[lang.value].desc), 1);
                        }), 64)),
                        createVNode("div", { class: "min-w-0 gap-2 mt-3 flex-container" }, [
                          createVNode(_component_Link, {
                            href: unref(route)("auth.register.page"),
                            class: "btn btn-landing btn-success"
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "mr-1 fa-solid fa-person-to-portal show-for-medium" }),
                              createTextVNode(" Get Started ")
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          createVNode(_component_Link, {
                            href: unref(route)("auth.login.page"),
                            class: "btn btn-landing btn-info"
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "mr-1 fa-solid fa-person-to-portal show-for-medium" }),
                              createTextVNode(" Login ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              unref(usePage)().props.site_config.announcement ? (openBlock(), createBlock("nav", {
                key: 0,
                class: "alert alert-danger alert-landing"
              }, [
                createVNode("div", { class: "py-1 text-center fw-semibold" }, [
                  createVNode("div", { class: "gap-2 text-center align-middle flex-container align-center" }, [
                    createVNode("div", null, toDisplayString(unref(usePage)().props.site_config.announcement_message), 1)
                  ])
                ])
              ])) : createCommentVNode("", true),
              createVNode("main", { class: "container" }, [
                createVNode("div", { class: "justify-center grid-x grid-margin-x align-center grid-padding-y" }, [
                  ((_e = __props.LandingItems) == null ? void 0 : _e["data"]) || ((_f = __props.LandingItems) == null ? void 0 : _f["data"].length) < 5 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "cell large-12"
                  }, [
                    createVNode("div", { class: "align-middle grid-x" }, [
                      createVNode("div", { class: "p-2 mb-4 cell large-4" }, [
                        createVNode("div", { class: "landing-text-landing fw-semibold" }, " Customize your Character "),
                        createVNode("div", null, " Pick and choose from a collection of items created by the community to create you own unique character with. ")
                      ]),
                      createVNode("div", { class: "cell large-8" }, [
                        createVNode("div", { class: "grid-x grid-margin-x grid-padding-y" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList((_g = __props.LandingItems) == null ? void 0 : _g["data"], (item) => {
                            return openBlock(), createBlock("div", { class: "cell large-2 medium-4 small-6" }, [
                              createVNode(_component_Link, {
                                href: unref(route)(`store.item`, { id: item.id }),
                                class: "d-block"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "p-2 mb-1 card card-item position-relative" }, [
                                    createVNode("img", {
                                      src: item.thumbnail,
                                      id: item.name,
                                      alt: item.name,
                                      class: "img-fluid",
                                      onError: ($event) => onImgErrorSmall(item.name)
                                    }, null, 40, ["src", "id", "alt", "onError"])
                                  ]),
                                  createVNode("div", { class: "text-body fw-semibold text-truncate" }, toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              createVNode("div", { class: "text-xs fw-semibold" }, [
                                createVNode("span", { class: "text-muted" }, "By "),
                                createVNode(_component_Link, {
                                  href: unref(route)(`user.profile`, {
                                    username: item.creator.username
                                  }),
                                  class: "text-info"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString("@" + item.creator.username), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ])
                            ]);
                          }), 256))
                        ])
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "cell large-12" }, [
                    createVNode("div", { class: "mb-1 align-middle grid-x" }, [
                      createVNode("div", { class: "cell large-8" }, [
                        createVNode("div", { class: "grid-x grid-margin-x grid-padding-y" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList((_h = __props.LandingPosts) == null ? void 0 : _h["data"], (post) => {
                            return openBlock(), createBlock("div", { class: "mb-1 cell large-3 medium-6 small-6" }, [
                              createVNode("div", { class: "gap-2 mb-3 card card-body flex-container flex-dir-column" }, [
                                createVNode("div", { class: "gap-2 flex-container" }, [
                                  createVNode("div", { class: "gap-2 flex-container" }, [
                                    createVNode("button", { class: "gap-2 align-middle flex-container squish" }, [
                                      createVNode("img", {
                                        class: "headshot",
                                        src: "assets/img/dummy_headshot.png",
                                        width: "50",
                                        height: "50",
                                        alt: "Avatar"
                                      })
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("p", { class: "fw-semibold text-truncate" }, toDisplayString(post.title), 1),
                                      createVNode("div", { class: "text-sm fw-semibold text-muted" }, [
                                        createTextVNode(" By: "),
                                        createVNode(_component_Link, {
                                          href: unref(route)(`user.profile`, { username: post.creator.username }),
                                          class: "text-info"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(post.creator.username), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["href"])
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "gap-4 my-3 mb-1 flex-container align-center flex-dir-column" }, [
                                  createVNode("div", { class: "text-sm text-muted fw-semibold text-truncate" }, [
                                    createVNode("span", {
                                      innerHTML: post.body
                                    }, null, 8, ["innerHTML"])
                                  ])
                                ]),
                                createVNode("div", { class: "divider-m0 w-100" }),
                                createVNode(_component_Link, {
                                  href: unref(route)(`forum.post`, { id: post.id, slug: post.slug }),
                                  class: "min-w-0 w-100 text-center btn btn-info btn-sm text-truncate"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("View Post")
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ])
                            ]);
                          }), 256))
                        ])
                      ]),
                      createVNode("div", { class: "p-5 mt-4 cell large-4" }, [
                        createVNode("div", { class: "landing-text-landing fw-semibold" }, " Socialize With Others "),
                        createVNode("div", null, " Head over to Discussion to socialize with all kinds of users on " + toDisplayString(site.value.name) + ", from the funny to the professional, and find new friends! ", 1)
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode(_sfc_main$3, { isLanding: true })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Memberships/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-245b617a"]]);
export {
  Index as default
};
