import { defineComponent, resolveComponent, withCtx, unref, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "../ssr.js";
import { _ as _sfc_main$2 } from "./Navbar-30Vv0CN7.js";
import { S as Sidebar } from "./Sidebar-BQWvWV-r.js";
import VLazyImage from "v-lazy-image";
import "momentum-trail";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "portal-vue";
import "vue-tippy";
import "axios";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash/throttle.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Game",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_portal = resolveComponent("portal");
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, { title: "Aeo's Game" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, {
        image: "/assets/img/site-banners/landing-melody.png",
        alertsEnabled: false,
        superBanActive: true,
        OfficialImageBackground: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<template${_scopeId}>`);
            _push2(ssrRenderComponent(_component_portal, { to: "bannerAsset" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VLazyImage), {
                    src: "/assets/img/dummy-error.png",
                    width: "100",
                    class: "space-image",
                    alt: "Game Thumbnail",
                    "src-placeholder": "/assets/img/dummy-error.png"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VLazyImage), {
                      src: "/assets/img/dummy-error.png",
                      width: "100",
                      class: "space-image",
                      alt: "Game Thumbnail",
                      "src-placeholder": "/assets/img/dummy-error.png"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_portal, { to: "bannerButtons" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Link, {
                    class: "btn btn-info btn-xs text-white squish",
                    as: "button",
                    style: { "outline": "none" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<i class="fad fa-gamepad-modern"${_scopeId3}></i> Play Game `);
                      } else {
                        return [
                          createVNode("i", { class: "fad fa-gamepad-modern" }),
                          createTextVNode(" Play Game ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Link, {
                      class: "btn btn-info btn-xs text-white squish",
                      as: "button",
                      style: { "outline": "none" }
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fad fa-gamepad-modern" }),
                        createTextVNode(" Play Game ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_portal, { to: "bannerName" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-xl" style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId2}>Aeo&#39;s Game</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "text-xl",
                      style: { "line-height": "16px" }
                    }, "Aeo's Game")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_portal, { to: "bannerDescription" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Created by: <a href="#" class="text-link text-truncate"${_scopeId2}>aeo</a>`);
                } else {
                  return [
                    createTextVNode(" Created by: "),
                    createVNode("a", {
                      href: "#",
                      class: "text-link text-truncate"
                    }, "aeo")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</template><div class="cell medium-12"${_scopeId}><div class="mb-1 align-middle navbar-grid"${_scopeId}><div class="cell large-12"${_scopeId}><div class="grid-x grid-margin-x grid-padding-y"${_scopeId}><div class="mb-1 cell large-3 medium-6 small-6"${_scopeId}><div class="text-center"${_scopeId}><div class="card-body"${_scopeId}><h3 class="text-muted"${_scopeId}><i class="fad fa-swords"${_scopeId}></i> Combat</h3><p${_scopeId}>Genere</p></div></div></div><div class="mb-1 cell large-3 medium-6 small-6"${_scopeId}><div class="text-center"${_scopeId}><div class="card-body"${_scopeId}><h3 class="text-muted"${_scopeId}><i class="fad fa-user"${_scopeId}></i> 5</h3><p${_scopeId}>Active</p></div></div></div><div class="mb-1 cell large-3 medium-6 small-6"${_scopeId}><div class="text-center"${_scopeId}><div class="card-body"${_scopeId}><h3 class="text-muted"${_scopeId}><i class="fad fa-heart"${_scopeId}></i> 1</h3><p${_scopeId}>Favorite</p></div></div></div><div class="mb-1 cell large-3 medium-6 small-6"${_scopeId}><div class="text-center"${_scopeId}><div class="card-body"${_scopeId}><h3${_scopeId}>21</h3><p${_scopeId}>Communities</p></div></div></div></div></div></div><div class="mb-2 text-xl fw-semibold"${_scopeId}>Description</div><div class="card card-body"${_scopeId}><span href="#" class="text-md"${_scopeId}>Thumbnail </span></div></div><div class="cell medium-4"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}>Active Servers</div><div class="card card-body"${_scopeId}><div class="section-borderless"${_scopeId}><div class="section"${_scopeId}><a class="gap-2 mt-2 mb-2 align-middle flex-container align-justify squish"${_scopeId}><div class="headshot-group"${_scopeId}><div class="headshot"${_scopeId}><img src="/assets/img/dummy_headshot.png" width="50"${_scopeId}></div><div class="headshot"${_scopeId}><img src="/assets/img/dummy_headshot.png" width="50"${_scopeId}></div><div class="headshot"${_scopeId}><span class="text-lg text-muted flex-container text-center align-center flex-child-grow"${_scopeId}> 50+ </span></div></div><a class="min-w-0 btn btn-info btn-sm text-truncate hide-for-medium-only"${_scopeId}><i class="fad fa-user"${_scopeId}></i> Join </a></a><div class="divider w-100"${_scopeId}></div></div></div></div></div><div class="cell medium-8"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}>Comments</div><div class="card card-body"${_scopeId}><div class="gap-3 section flex-container flex-dir-column-sm"${_scopeId}><div class="mx-auto flex-child-grow" style="${ssrRenderStyle({ "width": "100px" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: "#",
              class: "text-sm text-center d-block squish"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VLazyImage), {
                    src: "/assets/img/dummy_headshot.png",
                    width: "60",
                    class: "headshot",
                    alt: "Avatar",
                    "src-placeholder": "/assets/img/dummy_headshot.png"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId2}><div class="text-truncate"${_scopeId2}>aeno</div><div class="text-xs text-muted text-truncate"${_scopeId2}> @aeo </div></div>`);
                } else {
                  return [
                    createVNode(unref(VLazyImage), {
                      src: "/assets/img/dummy_headshot.png",
                      width: "60",
                      class: "headshot",
                      alt: "Avatar",
                      "src-placeholder": "/assets/img/dummy_headshot.png"
                    }),
                    createVNode("div", { style: { "line-height": "16px" } }, [
                      createVNode("div", { class: "text-truncate" }, "aeno"),
                      createVNode("div", { class: "text-xs text-muted text-truncate" }, " @aeo ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="card card-body card-inner w-100"${_scopeId}><div class="align-middle flex-container align-justify"${_scopeId}><div class="w-100"${_scopeId}><div class="text-xs text-muted"${_scopeId}><i class="far fa-clock me-1" style="${ssrRenderStyle({ "vertical-align": "middle", "margin-top": "-2.5px", "font-size": "10px" })}"${_scopeId}></i> Posted 2m ago </div><div${_scopeId}> placeholder comment </div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("template", null, [
                createVNode(_component_portal, { to: "bannerAsset" }, {
                  default: withCtx(() => [
                    createVNode(unref(VLazyImage), {
                      src: "/assets/img/dummy-error.png",
                      width: "100",
                      class: "space-image",
                      alt: "Game Thumbnail",
                      "src-placeholder": "/assets/img/dummy-error.png"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_portal, { to: "bannerButtons" }, {
                  default: withCtx(() => [
                    createVNode(_component_Link, {
                      class: "btn btn-info btn-xs text-white squish",
                      as: "button",
                      style: { "outline": "none" }
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fad fa-gamepad-modern" }),
                        createTextVNode(" Play Game ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_portal, { to: "bannerName" }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "text-xl",
                      style: { "line-height": "16px" }
                    }, "Aeo's Game")
                  ]),
                  _: 1
                }),
                createVNode(_component_portal, { to: "bannerDescription" }, {
                  default: withCtx(() => [
                    createTextVNode(" Created by: "),
                    createVNode("a", {
                      href: "#",
                      class: "text-link text-truncate"
                    }, "aeo")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "cell medium-12" }, [
                createVNode("div", { class: "mb-1 align-middle navbar-grid" }, [
                  createVNode("div", { class: "cell large-12" }, [
                    createVNode("div", { class: "grid-x grid-margin-x grid-padding-y" }, [
                      createVNode("div", { class: "mb-1 cell large-3 medium-6 small-6" }, [
                        createVNode("div", { class: "text-center" }, [
                          createVNode("div", { class: "card-body" }, [
                            createVNode("h3", { class: "text-muted" }, [
                              createVNode("i", { class: "fad fa-swords" }),
                              createTextVNode(" Combat")
                            ]),
                            createVNode("p", null, "Genere")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mb-1 cell large-3 medium-6 small-6" }, [
                        createVNode("div", { class: "text-center" }, [
                          createVNode("div", { class: "card-body" }, [
                            createVNode("h3", { class: "text-muted" }, [
                              createVNode("i", { class: "fad fa-user" }),
                              createTextVNode(" 5")
                            ]),
                            createVNode("p", null, "Active")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mb-1 cell large-3 medium-6 small-6" }, [
                        createVNode("div", { class: "text-center" }, [
                          createVNode("div", { class: "card-body" }, [
                            createVNode("h3", { class: "text-muted" }, [
                              createVNode("i", { class: "fad fa-heart" }),
                              createTextVNode(" 1")
                            ]),
                            createVNode("p", null, "Favorite")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mb-1 cell large-3 medium-6 small-6" }, [
                        createVNode("div", { class: "text-center" }, [
                          createVNode("div", { class: "card-body" }, [
                            createVNode("h3", null, "21"),
                            createVNode("p", null, "Communities")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "mb-2 text-xl fw-semibold" }, "Description"),
                createVNode("div", { class: "card card-body" }, [
                  createVNode("span", {
                    href: "#",
                    class: "text-md"
                  }, "Thumbnail ")
                ])
              ]),
              createVNode("div", { class: "cell medium-4" }, [
                createVNode("div", { class: "mb-2 text-xl fw-semibold" }, "Active Servers"),
                createVNode("div", { class: "card card-body" }, [
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "section" }, [
                      createVNode("a", { class: "gap-2 mt-2 mb-2 align-middle flex-container align-justify squish" }, [
                        createVNode("div", { class: "headshot-group" }, [
                          createVNode("div", { class: "headshot" }, [
                            createVNode("img", {
                              src: "/assets/img/dummy_headshot.png",
                              width: "50"
                            })
                          ]),
                          createVNode("div", { class: "headshot" }, [
                            createVNode("img", {
                              src: "/assets/img/dummy_headshot.png",
                              width: "50"
                            })
                          ]),
                          createVNode("div", { class: "headshot" }, [
                            createVNode("span", { class: "text-lg text-muted flex-container text-center align-center flex-child-grow" }, " 50+ ")
                          ])
                        ]),
                        createVNode("a", { class: "min-w-0 btn btn-info btn-sm text-truncate hide-for-medium-only" }, [
                          createVNode("i", { class: "fad fa-user" }),
                          createTextVNode(" Join ")
                        ])
                      ]),
                      createVNode("div", { class: "divider w-100" })
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "cell medium-8" }, [
                createVNode("div", { class: "mb-2 text-xl fw-semibold" }, "Comments"),
                createVNode("div", { class: "card card-body" }, [
                  createVNode("div", { class: "gap-3 section flex-container flex-dir-column-sm" }, [
                    createVNode("div", {
                      class: "mx-auto flex-child-grow",
                      style: { "width": "100px" }
                    }, [
                      createVNode(_component_Link, {
                        href: "#",
                        class: "text-sm text-center d-block squish"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(VLazyImage), {
                            src: "/assets/img/dummy_headshot.png",
                            width: "60",
                            class: "headshot",
                            alt: "Avatar",
                            "src-placeholder": "/assets/img/dummy_headshot.png"
                          }),
                          createVNode("div", { style: { "line-height": "16px" } }, [
                            createVNode("div", { class: "text-truncate" }, "aeno"),
                            createVNode("div", { class: "text-xs text-muted text-truncate" }, " @aeo ")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "card card-body card-inner w-100" }, [
                      createVNode("div", { class: "align-middle flex-container align-justify" }, [
                        createVNode("div", { class: "w-100" }, [
                          createVNode("div", { class: "text-xs text-muted" }, [
                            createVNode("i", {
                              class: "far fa-clock me-1",
                              style: { "vertical-align": "middle", "margin-top": "-2.5px", "font-size": "10px" }
                            }),
                            createTextVNode(" Posted 2m ago ")
                          ]),
                          createVNode("div", null, " placeholder comment ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Games/Game.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
