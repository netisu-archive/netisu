import { defineComponent, ref, onMounted, useSSRContext, mergeProps, computed, provide, resolveComponent, resolveDirective, unref, withCtx, createVNode, withDirectives, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList } from "vue";
import { ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderStyle } from "vue/server-renderer";
import axios from "axios";
import { usePage } from "@inertiajs/vue3";
import { directive } from "vue-tippy";
import { _ as _sfc_main$3 } from "../ssr.js";
import { _ as _sfc_main$4 } from "./Navbar-Mp_kEPSl.js";
import { S as Sidebar } from "./Sidebar-DDhf-Q4i.js";
import { _ as _sfc_main$5 } from "./Footer-CxsG0LBb.js";
import { route } from "momentum-trail";
import { I as ItemCardSkeleton } from "./ItemCardSkeleton-CFh_af1c.js";
import VLazyImage from "v-lazy-image";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "portal-vue";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash/throttle.js";
const __default__ = {
  directives: {
    tippy: directive
  }
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "MarketSidebar",
  __ssrInlineRender: true,
  props: {
    categories: {},
    selectCategory: { type: Function }
  },
  emits: ["categorySelected"],
  setup(__props, { emit: __emit }) {
    const selectedCategory = ref(null);
    const selectedSubCategory = ref("general");
    const emit = __emit;
    function selectCategory(category) {
      selectedCategory.value = category;
      emit("categorySelected", category);
    }
    onMounted(() => {
      var _a;
      if (((_a = __props.categories) == null ? void 0 : _a["length"]) > 0) {
        selectCategory(__props.categories[0]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(_ctx.categories, (category, categoryName) => {
        _push(`<div class="collapsible"${ssrRenderAttr("id", categoryName)}><button class="d-block w-100 market-section-item"><div class="align-middle flex-container align-justify"><div class="text-sm"><i class="${ssrRenderClass([category.icon, "text-md icon-fixed-width"])}"></i> ${ssrInterpolate(categoryName)}</div><i class="text-xs fas fa-chevron-down text-muted"></i></div></button>`);
        if (selectedSubCategory.value === categoryName) {
          _push(`<div${ssrRenderAttr("id", categoryName + "_List")} class="mt-1 mb-1 collapsible-menu"><!--[-->`);
          ssrRenderList(category, (item, index) => {
            _push(`<button class="${ssrRenderClass([{ active: selectedCategory.value === item.name }, "text-xs market-section-item"])}">${ssrInterpolate(item.name)}</button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LayoutParts/MarketSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MarketSorting",
  __ssrInlineRender: true,
  props: {
    selectedSubCategory: {},
    selectedCategory: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 align-middle grid-x" }, _attrs))}><div class="cell large-3">`);
      if (_ctx.selectedCategory) {
        _push(`<div class="text-xl fw-semibold">${ssrInterpolate(_ctx.selectedCategory)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([!_ctx.selectedCategory ? "text-xl fw-semibold" : "mb-2 text-xs text-muted fw-semibold"])}">${ssrInterpolate(_ctx.selectedSubCategory)}</div></div><div class="cell large-9"><div class="gap-2 align-middle flex-container-lg"><input type="text" class="mb-2 form form-xs form-has-section-color" placeholder="Search..."><select class="mb-2 form form-xs form-select form-has-section-color"><option value="1" selected disabled> Advanced Sorting... </option></select><div class="mb-2 flex-container flex-child-grow"><input type="submit" class="btn btn-xs btn-success w-100" value="Search"></div><div class="mb-2 flex-container flex-child-grow"><a href="#" class="text-center btn btn-info btn-xs flex-child-grow">Buy Currency</a></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LayoutParts/MarketSorting.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    categories: Object
  },
  setup(__props) {
    const props = __props;
    const items = ref([]);
    const categories = computed(() => props.categories);
    const ItemLoading = ref(false);
    const selectedCategory = ref("");
    const selectedSubCategory = ref("");
    async function fetchItems(selectedcat) {
      if (selectedSubCategory) {
        try {
          selectedSubCategory.value = selectedcat.name;
          ItemLoading.value = true;
          const response = await axios.get(
            route(`api.store.items`, { category: selectedcat.internal })
          );
          items.value = response.data;
          ItemLoading.value = false;
        } catch (error) {
          console.error(error);
        }
      }
    }
    function selectCategory(category) {
      selectedSubCategory.value = category;
      ItemLoading.value = true;
    }
    function onImgErrorSmall(id) {
      let source = document.getElementById(id);
      source.src = "/assets/img/dummy-error.png";
      source.onerror = null;
      return true;
    }
    const itemRoute = (itemId) => route(`store.item`, { id: itemId });
    const creatorRoute = (username) => route(`user.profile`, { username });
    provide("selectedCategory", selectedCategory);
    provide("selectedSubCategory", selectedSubCategory);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_portal = resolveComponent("portal");
      const _component_Link = resolveComponent("Link");
      const _directive_tippy = resolveDirective("tippy");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, {
        pageTitle: "Market",
        description: "Level up your style.",
        url: unref(route)(`store.page`)
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { landing: false }, null, _parent));
      _push(ssrRenderComponent(Sidebar, {
        image: "/assets/img/site-banners/market-background.svg",
        superBanActive: true,
        OfficialImageBackground: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<template${_scopeId}>`);
            _push2(ssrRenderComponent(_component_portal, { to: "bannerAsset" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="text-5xl fad fa-store text-info"${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "text-5xl fad fa-store text-info" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_portal, { to: "bannerButtons" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(usePage)().props.auth.user) {
                    _push3(ssrRenderComponent(_component_Link, mergeProps({
                      class: "text-xl text-success squish",
                      href: unref(route)(`store.create.page`),
                      content: "Create Item",
                      as: "button",
                      style: { "outline": "none" }
                    }, ssrGetDirectiveProps(_ctx, _directive_tippy, { placement: "bottom" })), {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<i class="fad fa-square-pen"${_scopeId3}></i>`);
                        } else {
                          return [
                            createVNode("i", { class: "fad fa-square-pen" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(usePage)().props.auth.user ? withDirectives((openBlock(), createBlock(_component_Link, {
                      key: 0,
                      class: "text-xl text-success squish",
                      href: unref(route)(`store.create.page`),
                      content: "Create Item",
                      as: "button",
                      style: { "outline": "none" }
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fad fa-square-pen" })
                      ]),
                      _: 1
                    }, 8, ["href"])), [
                      [_directive_tippy, { placement: "bottom" }]
                    ]) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_portal, { to: "bannerName" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-xl" style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(VLazyImage), {
                    src: "/assets/img/site-banners/market-title.png",
                    alt: "Market",
                    style: { "width": "auto", "height": "50px" }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "text-xl",
                      style: { "line-height": "16px" }
                    }, [
                      createVNode(unref(VLazyImage), {
                        src: "/assets/img/site-banners/market-title.png",
                        alt: "Market",
                        style: { "width": "auto", "height": "50px" }
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_portal, { to: "bannerDescription" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted text-wrap fw-semibold"${_scopeId2}>Craving something new? Create it or find it here.</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted text-wrap fw-semibold" }, "Craving something new? Create it or find it here.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</template><div class="cell large-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              categories: categories.value,
              selectCategory,
              onCategorySelected: fetchItems
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="cell large-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              selectedCategory: selectedCategory.value,
              selectedSubCategory: selectedSubCategory.value
            }, null, _parent2, _scopeId));
            if (ItemLoading.value || items.value && items.value.length > 0) {
              _push2(`<div class="grid-x grid-margin-x grid-padding-y"${_scopeId}>`);
              if (ItemLoading.value) {
                _push2(`<!--[-->`);
                ssrRenderList(12, (n) => {
                  _push2(ssrRenderComponent(ItemCardSkeleton, { key: n }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!--[-->`);
                ssrRenderList(items.value, (item, index) => {
                  _push2(`<div class="cell large-2 medium-3 small-6"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Link, {
                    href: itemRoute(item.id),
                    class: "d-block"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="p-2 mb-1 card card-item position-relative"${_scopeId2}><div style="${ssrRenderStyle({ "position": "absolute", "bottom": "10px", "left": "10px" })}"${_scopeId2}>`);
                        if (item.in_event) {
                          _push3(`<div class="mb-1 badge badge-warning fw-semibold"${_scopeId2}><i class="fas fa-calendar-star" style="${ssrRenderStyle({ "width": "18px" })}"${_scopeId2}></i>Event </div>`);
                        } else if (item.rare) {
                          _push3(`<div class="mb-1 badge badge-info fw-semibold"${_scopeId2}><i class="fas fa-star" style="${ssrRenderStyle({ "width": "18px" })}"${_scopeId2}></i>Rare </div>`);
                        } else if (item.sale_ongoing) {
                          _push3(`<div class="mb-1 badge badge-danger fw-semibold"${_scopeId2}><i class="fas fa-badge-percent" style="${ssrRenderStyle({ "width": "18px" })}"${_scopeId2}></i>${ssrInterpolate(item.percent_off + "%")} off </div>`);
                        } else if (item.time_off_sale != null) {
                          _push3(`<div class="mb-1 badge badge-warning fw-semibold"${_scopeId2}><i class="fas fa-clock" style="${ssrRenderStyle({ "width": "18px" })}"${_scopeId2}></i>Timed </div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (!item.onsale) {
                          _push3(`<div class="mb-1 badge badge-secondary fw-semibold"${_scopeId2}><i class="fas fa-shield" style="${ssrRenderStyle({ "width": "18px" })}"${_scopeId2}></i>Offsale </div>`);
                        } else {
                          _push3(`<div${_scopeId2}><div class="min-w-0 gap-1 mt-3 flex-container align-center"${_scopeId2}><div class="mb-1 badge badge-success fw-semibold"${_scopeId2}><i class="fad fa-money-bill-1-wave" style="${ssrRenderStyle({ "width": "18px" })}"${_scopeId2}></i>${ssrInterpolate(item.cost_bucks)}</div><div class="mb-1 badge badge-warning fw-semibold"${_scopeId2}><i class="fad fa-coins" style="${ssrRenderStyle({ "width": "18px" })}"${_scopeId2}></i>${ssrInterpolate(item.cost_coins)}</div></div></div>`);
                        }
                        _push3(`</div><img${ssrRenderAttr("src", item.thumbnail)}${ssrRenderAttr("id", item.thumbnail)}${_scopeId2}></div><div class="text-body fw-semibold text-truncate"${_scopeId2}>${ssrInterpolate(item.name)}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "p-2 mb-1 card card-item position-relative" }, [
                            createVNode("div", { style: { "position": "absolute", "bottom": "10px", "left": "10px" } }, [
                              item.in_event ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mb-1 badge badge-warning fw-semibold"
                              }, [
                                createVNode("i", {
                                  class: "fas fa-calendar-star",
                                  style: { "width": "18px" }
                                }),
                                createTextVNode("Event ")
                              ])) : item.rare ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "mb-1 badge badge-info fw-semibold"
                              }, [
                                createVNode("i", {
                                  class: "fas fa-star",
                                  style: { "width": "18px" }
                                }),
                                createTextVNode("Rare ")
                              ])) : item.sale_ongoing ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: "mb-1 badge badge-danger fw-semibold"
                              }, [
                                createVNode("i", {
                                  class: "fas fa-badge-percent",
                                  style: { "width": "18px" }
                                }),
                                createTextVNode(toDisplayString(item.percent_off + "%") + " off ", 1)
                              ])) : item.time_off_sale != null ? (openBlock(), createBlock("div", {
                                key: 3,
                                class: "mb-1 badge badge-warning fw-semibold"
                              }, [
                                createVNode("i", {
                                  class: "fas fa-clock",
                                  style: { "width": "18px" }
                                }),
                                createTextVNode("Timed ")
                              ])) : createCommentVNode("", true),
                              !item.onsale ? (openBlock(), createBlock("div", {
                                key: 4,
                                class: "mb-1 badge badge-secondary fw-semibold"
                              }, [
                                createVNode("i", {
                                  class: "fas fa-shield",
                                  style: { "width": "18px" }
                                }),
                                createTextVNode("Offsale ")
                              ])) : (openBlock(), createBlock("div", { key: 5 }, [
                                createVNode("div", { class: "min-w-0 gap-1 mt-3 flex-container align-center" }, [
                                  createVNode("div", { class: "mb-1 badge badge-success fw-semibold" }, [
                                    createVNode("i", {
                                      class: "fad fa-money-bill-1-wave",
                                      style: { "width": "18px" }
                                    }),
                                    createTextVNode(toDisplayString(item.cost_bucks), 1)
                                  ]),
                                  createVNode("div", { class: "mb-1 badge badge-warning fw-semibold" }, [
                                    createVNode("i", {
                                      class: "fad fa-coins",
                                      style: { "width": "18px" }
                                    }),
                                    createTextVNode(toDisplayString(item.cost_coins), 1)
                                  ])
                                ])
                              ]))
                            ]),
                            createVNode("img", {
                              src: item.thumbnail,
                              id: item.thumbnail,
                              onError: ($event) => onImgErrorSmall(item.thumbnail)
                            }, null, 40, ["src", "id", "onError"])
                          ]),
                          createVNode("div", { class: "text-body fw-semibold text-truncate" }, toDisplayString(item.name), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`<div class="text-xs fw-semibold text-truncate"${_scopeId}><span class="text-muted"${_scopeId}>By:</span>  `);
                  _push2(ssrRenderComponent(_component_Link, {
                    href: creatorRoute(item.creator.username)
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate("@" + item.creator.username)}<i class="fas fa-shield-check text-success ms-1"${_scopeId2}></i>`);
                      } else {
                        return [
                          createTextVNode(toDisplayString("@" + item.creator.username), 1),
                          createVNode("i", { class: "fas fa-shield-check text-success ms-1" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div></div>`);
                });
                _push2(`<!--]-->`);
              }
              _push2(`</div>`);
            } else if (items.value.message) {
              _push2(`<div class=""${_scopeId}><div class="pb-0 card-body"${_scopeId}><div class="gap-3 mb-2 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fas fa-store-slash text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted"${_scopeId}> Looks like a gremlin got into the code again! We&#39;re sending our best programmers with bug spray to fix the issue </div><div class="text-muted fw-semibold"${_scopeId}><p class="text-xs"${_scopeId}>${ssrInterpolate(items.value.message)}</p></div></div></div></div></div>`);
            } else {
              _push2(`<div class=""${_scopeId}><div class="pb-0 card-body"${_scopeId}><div class="gap-3 mb-2 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fad fa-cart-xmark text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No Items </div><div class="text-muted fw-semibold"${_scopeId}><p class="text-xs"${_scopeId}> There are currently no items in this category. </p></div></div></div></div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("template", null, [
                createVNode(_component_portal, { to: "bannerAsset" }, {
                  default: withCtx(() => [
                    createVNode("i", { class: "text-5xl fad fa-store text-info" })
                  ]),
                  _: 1
                }),
                createVNode(_component_portal, { to: "bannerButtons" }, {
                  default: withCtx(() => [
                    unref(usePage)().props.auth.user ? withDirectives((openBlock(), createBlock(_component_Link, {
                      key: 0,
                      class: "text-xl text-success squish",
                      href: unref(route)(`store.create.page`),
                      content: "Create Item",
                      as: "button",
                      style: { "outline": "none" }
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fad fa-square-pen" })
                      ]),
                      _: 1
                    }, 8, ["href"])), [
                      [_directive_tippy, { placement: "bottom" }]
                    ]) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_portal, { to: "bannerName" }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "text-xl",
                      style: { "line-height": "16px" }
                    }, [
                      createVNode(unref(VLazyImage), {
                        src: "/assets/img/site-banners/market-title.png",
                        alt: "Market",
                        style: { "width": "auto", "height": "50px" }
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_portal, { to: "bannerDescription" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted text-wrap fw-semibold" }, "Craving something new? Create it or find it here.")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "cell large-2" }, [
                createVNode(_sfc_main$2, {
                  categories: categories.value,
                  selectCategory,
                  onCategorySelected: fetchItems
                }, null, 8, ["categories"])
              ]),
              createVNode("div", { class: "cell large-10" }, [
                createVNode(_sfc_main$1, {
                  selectedCategory: selectedCategory.value,
                  selectedSubCategory: selectedSubCategory.value
                }, null, 8, ["selectedCategory", "selectedSubCategory"]),
                ItemLoading.value || items.value && items.value.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid-x grid-margin-x grid-padding-y"
                }, [
                  ItemLoading.value ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(12, (n) => {
                    return createVNode(ItemCardSkeleton, { key: n });
                  }), 64)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(items.value, (item, index) => {
                    return openBlock(), createBlock("div", {
                      class: "cell large-2 medium-3 small-6",
                      key: index
                    }, [
                      createVNode(_component_Link, {
                        href: itemRoute(item.id),
                        class: "d-block"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "p-2 mb-1 card card-item position-relative" }, [
                            createVNode("div", { style: { "position": "absolute", "bottom": "10px", "left": "10px" } }, [
                              item.in_event ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mb-1 badge badge-warning fw-semibold"
                              }, [
                                createVNode("i", {
                                  class: "fas fa-calendar-star",
                                  style: { "width": "18px" }
                                }),
                                createTextVNode("Event ")
                              ])) : item.rare ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "mb-1 badge badge-info fw-semibold"
                              }, [
                                createVNode("i", {
                                  class: "fas fa-star",
                                  style: { "width": "18px" }
                                }),
                                createTextVNode("Rare ")
                              ])) : item.sale_ongoing ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: "mb-1 badge badge-danger fw-semibold"
                              }, [
                                createVNode("i", {
                                  class: "fas fa-badge-percent",
                                  style: { "width": "18px" }
                                }),
                                createTextVNode(toDisplayString(item.percent_off + "%") + " off ", 1)
                              ])) : item.time_off_sale != null ? (openBlock(), createBlock("div", {
                                key: 3,
                                class: "mb-1 badge badge-warning fw-semibold"
                              }, [
                                createVNode("i", {
                                  class: "fas fa-clock",
                                  style: { "width": "18px" }
                                }),
                                createTextVNode("Timed ")
                              ])) : createCommentVNode("", true),
                              !item.onsale ? (openBlock(), createBlock("div", {
                                key: 4,
                                class: "mb-1 badge badge-secondary fw-semibold"
                              }, [
                                createVNode("i", {
                                  class: "fas fa-shield",
                                  style: { "width": "18px" }
                                }),
                                createTextVNode("Offsale ")
                              ])) : (openBlock(), createBlock("div", { key: 5 }, [
                                createVNode("div", { class: "min-w-0 gap-1 mt-3 flex-container align-center" }, [
                                  createVNode("div", { class: "mb-1 badge badge-success fw-semibold" }, [
                                    createVNode("i", {
                                      class: "fad fa-money-bill-1-wave",
                                      style: { "width": "18px" }
                                    }),
                                    createTextVNode(toDisplayString(item.cost_bucks), 1)
                                  ]),
                                  createVNode("div", { class: "mb-1 badge badge-warning fw-semibold" }, [
                                    createVNode("i", {
                                      class: "fad fa-coins",
                                      style: { "width": "18px" }
                                    }),
                                    createTextVNode(toDisplayString(item.cost_coins), 1)
                                  ])
                                ])
                              ]))
                            ]),
                            createVNode("img", {
                              src: item.thumbnail,
                              id: item.thumbnail,
                              onError: ($event) => onImgErrorSmall(item.thumbnail)
                            }, null, 40, ["src", "id", "onError"])
                          ]),
                          createVNode("div", { class: "text-body fw-semibold text-truncate" }, toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["href"]),
                      createVNode("div", { class: "text-xs fw-semibold text-truncate" }, [
                        createVNode("span", { class: "text-muted" }, "By:"),
                        createTextVNode("  "),
                        createVNode(_component_Link, {
                          href: creatorRoute(item.creator.username)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString("@" + item.creator.username), 1),
                            createVNode("i", { class: "fas fa-shield-check text-success ms-1" })
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ])
                    ]);
                  }), 128))
                ])) : items.value.message ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: ""
                }, [
                  createVNode("div", { class: "pb-0 card-body" }, [
                    createVNode("div", { class: "gap-3 mb-2 text-center flex-container flex-dir-column" }, [
                      createVNode("i", { class: "text-5xl fas fa-store-slash text-muted" }),
                      createVNode("div", { style: { "line-height": "16px" } }, [
                        createVNode("div", { class: "text-xs fw-bold text-muted" }, " Looks like a gremlin got into the code again! We're sending our best programmers with bug spray to fix the issue "),
                        createVNode("div", { class: "text-muted fw-semibold" }, [
                          createVNode("p", { class: "text-xs" }, toDisplayString(items.value.message), 1)
                        ])
                      ])
                    ])
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 2,
                  class: ""
                }, [
                  createVNode("div", { class: "pb-0 card-body" }, [
                    createVNode("div", { class: "gap-3 mb-2 text-center flex-container flex-dir-column" }, [
                      createVNode("i", { class: "text-5xl fad fa-cart-xmark text-muted" }),
                      createVNode("div", { style: { "line-height": "16px" } }, [
                        createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " No Items "),
                        createVNode("div", { class: "text-muted fw-semibold" }, [
                          createVNode("p", { class: "text-xs" }, " There are currently no items in this category. ")
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
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Store/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
