import { defineComponent, ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import axios from "axios";
import { route } from "momentum-trail";
import { _ as _sfc_main$2 } from "./Navbar-Mp_kEPSl.js";
import { _ as _sfc_main$1 } from "../ssr.js";
import { _ as _sfc_main$3 } from "./Footer-CxsG0LBb.js";
import { S as Sidebar } from "./Sidebar-DDhf-Q4i.js";
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
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    spaces: { type: Array, required: true },
    search: { type: String, required: false }
  },
  setup(__props) {
    const SpaceSearchLoading = ref(false);
    const search = ref("");
    const results = ref([]);
    const performSearch = async () => {
      if (search.value !== "") {
        SpaceSearchLoading.value = true;
        await axios.get(route("spaces.page", { search: search.value })).then((response) => {
          results.value = response.data.results;
          SpaceSearchLoading.value = false;
        }).catch((err) => console.log(err));
      } else {
        SpaceSearchLoading.value = true;
        results.value = [];
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Spaces",
        description: "Find a space to join or create one!",
        url: unref(route)(`spaces.page`)
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cell large-12"${_scopeId}><div class="mb-2 align-middle grid-x"${_scopeId}><div class="cell large-6"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}><i class="text-xl fad fa-planet-ringed"${_scopeId}></i> Spaces</div></div><div class="cell large-6"${_scopeId}><div class="gap-2 align-middle flex-container-lg"${_scopeId}><input type="text" class="mb-2 form form-xs form-has-section-color" placeholder="Search..." name="search"${ssrRenderAttr("value", search.value)}${_scopeId}><div class="mb-2 flex-container flex-child-grow"${_scopeId}><input type="submit" class="btn btn-xs btn-success w-100" value="Search"${_scopeId}></div><div class="mb-2 flex-container flex-child-grow"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: unref(route)(`spaces.create.page`),
              class: "text-center btn btn-info btn-xs flex-child-grow"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="fad fa-planet-ringed"${_scopeId2}></i>  Create Space`);
                } else {
                  return [
                    createVNode("i", { class: "fad fa-planet-ringed" }),
                    createTextVNode("  Create Space")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
            if (__props.spaces.data.length) {
              _push2(`<div class="grid-x grid-margin-x grid-padding-y"${_scopeId}><!--[-->`);
              ssrRenderList(__props.spaces.data, (space, index) => {
                _push2(`<div class="cell large-3 medium-6 small-3"${_scopeId}><a href="#" class="d-block squish"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(VLazyImage), {
                  sizes: "(max-width: 320px) 280px, 440px",
                  src: space.thumbnail,
                  class: "mb-2 space-thumbnail"
                }, null, _parent2, _scopeId));
                _push2(`<div style="${ssrRenderStyle({ "line-height": "18px" })}"${_scopeId}><div class="d-block fw-semibold text-body"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: unref(route)("spaces.view", { id: space.id, slug: space.slug }),
                  style: { "color": "inherit", "font-weight": "600" }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(space.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(space.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="text-xs text-muted fw-semibold text-truncate"${_scopeId}>${ssrInterpolate(space.description ?? "This space does not have a description.")}</div><div class="mt-1 text-xs fw-semibold text-muted"${_scopeId}>${ssrInterpolate(space.member_count)} Members <span class="mx-1"${_scopeId}>•</span>Created ${ssrInterpolate(space.DateHum)}</div></div></a></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class=""${_scopeId}><div class="pb-0 card-body"${_scopeId}><div class="gap-3 mb-2 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fad fa-face-sad-cry text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No spaces found. </div><div class="text-muted fw-semibold"${_scopeId}><p class="text-xs"${_scopeId}> There are currently no spaces found, maybe you should create one! </p></div></div></div></div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "cell large-12" }, [
                createVNode("div", { class: "mb-2 align-middle grid-x" }, [
                  createVNode("div", { class: "cell large-6" }, [
                    createVNode("div", { class: "mb-2 text-xl fw-semibold" }, [
                      createVNode("i", { class: "text-xl fad fa-planet-ringed" }),
                      createTextVNode(" Spaces")
                    ])
                  ]),
                  createVNode("div", { class: "cell large-6" }, [
                    createVNode("div", { class: "gap-2 align-middle flex-container-lg" }, [
                      withDirectives(createVNode("input", {
                        type: "text",
                        class: "mb-2 form form-xs form-has-section-color",
                        placeholder: "Search...",
                        name: "search",
                        "onUpdate:modelValue": ($event) => search.value = $event,
                        onInput: performSearch
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, search.value]
                      ]),
                      createVNode("div", { class: "mb-2 flex-container flex-child-grow" }, [
                        createVNode("input", {
                          type: "submit",
                          class: "btn btn-xs btn-success w-100",
                          value: "Search"
                        })
                      ]),
                      createVNode("div", { class: "mb-2 flex-container flex-child-grow" }, [
                        createVNode(unref(Link), {
                          href: unref(route)(`spaces.create.page`),
                          class: "text-center btn btn-info btn-xs flex-child-grow"
                        }, {
                          default: withCtx(() => [
                            createVNode("i", { class: "fad fa-planet-ringed" }),
                            createTextVNode("  Create Space")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ])
                  ])
                ]),
                __props.spaces.data.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid-x grid-margin-x grid-padding-y"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.spaces.data, (space, index) => {
                    return openBlock(), createBlock("div", {
                      class: "cell large-3 medium-6 small-3",
                      key: index
                    }, [
                      createVNode("a", {
                        href: "#",
                        class: "d-block squish"
                      }, [
                        createVNode(unref(VLazyImage), {
                          sizes: "(max-width: 320px) 280px, 440px",
                          src: space.thumbnail,
                          class: "mb-2 space-thumbnail"
                        }, null, 8, ["src"]),
                        createVNode("div", { style: { "line-height": "18px" } }, [
                          createVNode("div", { class: "d-block fw-semibold text-body" }, [
                            createVNode(unref(Link), {
                              href: unref(route)("spaces.view", { id: space.id, slug: space.slug }),
                              style: { "color": "inherit", "font-weight": "600" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(space.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ]),
                          createVNode("div", { class: "text-xs text-muted fw-semibold text-truncate" }, toDisplayString(space.description ?? "This space does not have a description."), 1),
                          createVNode("div", { class: "mt-1 text-xs fw-semibold text-muted" }, [
                            createTextVNode(toDisplayString(space.member_count) + " Members ", 1),
                            createVNode("span", { class: "mx-1" }, "•"),
                            createTextVNode("Created " + toDisplayString(space.DateHum), 1)
                          ])
                        ])
                      ])
                    ]);
                  }), 128))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: ""
                }, [
                  createVNode("div", { class: "pb-0 card-body" }, [
                    createVNode("div", { class: "gap-3 mb-2 text-center flex-container flex-dir-column" }, [
                      createVNode("i", { class: "text-5xl fad fa-face-sad-cry text-muted" }),
                      createVNode("div", { style: { "line-height": "16px" } }, [
                        createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " No spaces found. "),
                        createVNode("div", { class: "text-muted fw-semibold" }, [
                          createVNode("p", { class: "text-xs" }, " There are currently no spaces found, maybe you should create one! ")
                        ])
                      ])
                    ])
                  ])
                ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Spaces/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
