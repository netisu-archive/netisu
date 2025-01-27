import { defineComponent, mergeProps, unref, useSSRContext, resolveComponent, withCtx, createVNode, toDisplayString, renderSlot, ref, computed, resolveDirective, createTextVNode, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrGetDirectiveProps } from "vue/server-renderer";
import { usePage, router } from "@inertiajs/vue3";
import axios from "axios";
import { route, current } from "momentum-trail";
import VLazyImage from "v-lazy-image";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import throttle from "lodash/throttle.js";
import "../ssr.js";
import { directive } from "vue-tippy";
const __default__$1 = {
  props: {
    locales: Object
    // Receive the locales data from Laravel
  },
  methods: {
    showModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.toggle("active");
      }
    },
    setLocale(locale) {
      router.get(route(`auth.language`, { language: locale }));
    }
  }
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  __name: "LanguageModal",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const locale_active = (_a = usePage().props) == null ? void 0 : _a["locale"];
    const locales = (_b = usePage().props) == null ? void 0 : _b["locales"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "modal",
        id: "LanguageSettings"
      }, _attrs))}><div class="modal-card modal-card-body"><div class="section-borderless"><div class="gap-2 align-middle flex-container align-justify"><div class="text-lg fw-semibold"> Change Language </div><button class="btn-circle" data-toggle-modal="#LanguageSettings" style="${ssrRenderStyle({ "margin-right": "-10px" })}"><i class="fas fa-times"></i></button></div></div><div class="section-borderless"><div class="section"><div id="theme-switcher-container" class="grid-x grid-margin-x grid-padding-y"><!--[-->`);
      ssrRenderList(unref(locales), (name, locale) => {
        _push(`<div class="cell large-6"><div class="${ssrRenderClass([{ "language-active": unref(locale_active) === locale }, "squish card card-body card-inner mb-lg-0"])}" style="${ssrRenderStyle({ "cursor": "pointer" })}"><div class="align-middle"><div class="gap-2 align-start flex-container" style="${ssrRenderStyle({ "min-width": "0" })}"><div class="selection-circle language"><i class="${ssrRenderClass({ "fa-duotone fa-check": unref(locale_active) === locale })}"></i></div><div class="fw-semibold text-language text-truncate">${ssrInterpolate(name)}</div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal/LanguageModal.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SearchResult",
  __ssrInlineRender: true,
  props: {
    link: {},
    name: {},
    image: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "dropdown-item" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.link,
        class: "dropdown-link",
        prefetch: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="align-middle flex-container align-justify"${_scopeId}><div class="gap-2 align-middle flex-container"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VLazyImage), {
              class: "headshot flex-child-grow",
              alt: "headshot",
              width: "40",
              src: _ctx.image,
              "src-placeholder": "/assets/img/dummy_headshot.png"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>${ssrInterpolate(_ctx.name)}</div></div><i class="px-1 fas fa-chevron-right text-muted"${_scopeId}></i></div>`);
          } else {
            return [
              createVNode("div", { class: "align-middle flex-container align-justify" }, [
                createVNode("div", { class: "gap-2 align-middle flex-container" }, [
                  createVNode(unref(VLazyImage), {
                    class: "headshot flex-child-grow",
                    alt: "headshot",
                    width: "40",
                    src: _ctx.image,
                    "src-placeholder": "/assets/img/dummy_headshot.png"
                  }, null, 8, ["src"]),
                  createVNode("div", null, toDisplayString(_ctx.name), 1)
                ]),
                createVNode("i", { class: "px-1 fas fa-chevron-right text-muted" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SearchResult.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    link: {},
    active_link: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "nav-item cell shrink show-for-large" }, _attrs))}><div class="side-item">`);
      _push(ssrRenderComponent(_component_Link, {
        class: ["nav-link", [unref(current)(_ctx.active_link) ? "active" : ""]],
        href: _ctx.link,
        prefetch: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></li>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    link: { type: String },
    IsBlock: { type: Boolean },
    ColorClass: { type: String }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      if (__props.link) {
        _push(ssrRenderComponent(_component_Link, mergeProps({ href: __props.link }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([[__props.IsBlock ? "my-2 mt-2 btn-block" : "", __props.ColorClass], "btn"])}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["btn", [__props.IsBlock ? "my-2 mt-2 btn-block" : "", __props.ColorClass]]
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 2)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Button.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Link = resolveComponent("Link");
  const _component_Skeletor = resolveComponent("Skeletor");
  _push(`<!--[--><li class="dropdown-item">`);
  _push(ssrRenderComponent(_component_Link, { class: "dropdown-link" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="align-middle flex-container align-justify"${_scopeId}><div class="gap-2 align-middle flex-container"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Skeletor, {
          class: "headshot flex-child-grow",
          width: "40",
          height: "40"
        }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Skeletor, { width: "100" }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Skeletor, { width: "40" }, null, _parent2, _scopeId));
        _push2(`</div></div></div><i class="px-1 fas fa-chevron-right text-muted"${_scopeId}></i></div>`);
      } else {
        return [
          createVNode("div", { class: "align-middle flex-container align-justify" }, [
            createVNode("div", { class: "gap-2 align-middle flex-container" }, [
              createVNode(_component_Skeletor, {
                class: "headshot flex-child-grow",
                width: "40",
                height: "40"
              }),
              createVNode("div", null, [
                createVNode(_component_Skeletor, { width: "100" }),
                createVNode("div", null, [
                  createVNode(_component_Skeletor, { width: "40" })
                ])
              ])
            ]),
            createVNode("i", { class: "px-1 fas fa-chevron-right text-muted" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="dropdown-item">`);
  _push(ssrRenderComponent(_component_Link, { class: "dropdown-link" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="align-middle flex-container align-justify"${_scopeId}><div class="gap-2 align-middle flex-container"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Skeletor, {
          class: "headshot flex-child-grow",
          width: "40",
          height: "40"
        }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Skeletor, { width: "100" }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Skeletor, { width: "40" }, null, _parent2, _scopeId));
        _push2(`</div></div></div><i class="px-1 fas fa-chevron-right text-muted"${_scopeId}></i></div>`);
      } else {
        return [
          createVNode("div", { class: "align-middle flex-container align-justify" }, [
            createVNode("div", { class: "gap-2 align-middle flex-container" }, [
              createVNode(_component_Skeletor, {
                class: "headshot flex-child-grow",
                width: "40",
                height: "40"
              }),
              createVNode("div", null, [
                createVNode(_component_Skeletor, { width: "100" }),
                createVNode("div", null, [
                  createVNode(_component_Skeletor, { width: "40" })
                ])
              ])
            ]),
            createVNode("i", { class: "px-1 fas fa-chevron-right text-muted" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="dropdown-item">`);
  _push(ssrRenderComponent(_component_Link, { class: "dropdown-link" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="align-middle flex-container align-justify"${_scopeId}><div class="gap-2 align-middle flex-container"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Skeletor, {
          class: "headshot flex-child-grow",
          width: "40",
          height: "40"
        }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Skeletor, { width: "100" }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Skeletor, { width: "40" }, null, _parent2, _scopeId));
        _push2(`</div></div></div><i class="px-1 fas fa-chevron-right text-muted"${_scopeId}></i></div>`);
      } else {
        return [
          createVNode("div", { class: "align-middle flex-container align-justify" }, [
            createVNode("div", { class: "gap-2 align-middle flex-container" }, [
              createVNode(_component_Skeletor, {
                class: "headshot flex-child-grow",
                width: "40",
                height: "40"
              }),
              createVNode("div", null, [
                createVNode(_component_Skeletor, { width: "100" }),
                createVNode("div", null, [
                  createVNode(_component_Skeletor, { width: "40" })
                ])
              ])
            ]),
            createVNode("i", { class: "px-1 fas fa-chevron-right text-muted" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="dropdown-item">`);
  _push(ssrRenderComponent(_component_Link, { class: "dropdown-link" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="align-middle flex-container align-justify"${_scopeId}><div class="gap-2 align-middle flex-container"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Skeletor, {
          class: "headshot flex-child-grow",
          width: "40",
          height: "40"
        }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Skeletor, { width: "100" }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Skeletor, { width: "40" }, null, _parent2, _scopeId));
        _push2(`</div></div></div><i class="px-1 fas fa-chevron-right text-muted"${_scopeId}></i></div>`);
      } else {
        return [
          createVNode("div", { class: "align-middle flex-container align-justify" }, [
            createVNode("div", { class: "gap-2 align-middle flex-container" }, [
              createVNode(_component_Skeletor, {
                class: "headshot flex-child-grow",
                width: "40",
                height: "40"
              }),
              createVNode("div", null, [
                createVNode(_component_Skeletor, { width: "100" }),
                createVNode("div", null, [
                  createVNode(_component_Skeletor, { width: "40" })
                ])
              ])
            ]),
            createVNode("i", { class: "px-1 fas fa-chevron-right text-muted" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="dropdown-item">`);
  _push(ssrRenderComponent(_component_Link, { class: "dropdown-link" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="align-middle flex-container align-justify"${_scopeId}><div class="gap-2 align-middle flex-container"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Skeletor, {
          class: "headshot flex-child-grow",
          width: "40",
          height: "40"
        }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Skeletor, { width: "100" }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Skeletor, { width: "40" }, null, _parent2, _scopeId));
        _push2(`</div></div></div><i class="px-1 fas fa-chevron-right text-muted"${_scopeId}></i></div>`);
      } else {
        return [
          createVNode("div", { class: "align-middle flex-container align-justify" }, [
            createVNode("div", { class: "gap-2 align-middle flex-container" }, [
              createVNode(_component_Skeletor, {
                class: "headshot flex-child-grow",
                width: "40",
                height: "40"
              }),
              createVNode("div", null, [
                createVNode(_component_Skeletor, { width: "100" }),
                createVNode("div", null, [
                  createVNode(_component_Skeletor, { width: "40" })
                ])
              ])
            ]),
            createVNode("i", { class: "px-1 fas fa-chevron-right text-muted" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SearchResultSkeleton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SearchResultSkeleton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PageLoader",
  __ssrInlineRender: true,
  props: {
    isLoading: { type: Boolean }
  },
  setup(__props) {
    const isPageLoading = ref(false);
    const props = __props;
    const loadingMessages = [
      "Loading...",
      "Use code (ImBored) for a free item!",
      "Please wait... (unless you have better things to do)",
      "One moment... gathering magical space hamsters to power this up.",
      "Fetching data faster than a squirrel with a nut allergy!",
      "We are not crashing, we are just taking a very scenic route.",
      "Hold on, coding a tiny dance for the loading bar.",
      "Just making sure the internet isn't filled with cat videos first.",
      "Shh, be vewy vewy quiet. We're hunting bugs.",
      "Did you know? The inventor of the loading bar is still waiting for it to finish.",
      "Don't worry, we paused Netflix for this.",
      "Please wait patiently... or impatiently, we don't judge.",
      "If this takes too long, blame the internet, not us.",
      "Calibrating the awesome meter. It's almost there!",
      "Just making sure it looks good on your grandma's flip phone.",
      "Taking a coffee break. You should too!",
      "Unicorns are galloping to bring you the data.",
      "Would you prefer a hamster wheel or a dance break while you wait?",
      "Warning: May cause extreme boredom or existential dread.",
      "Success is just around the corner... maybe.",
      "We are currently out of patience. Please send more coffee."
    ];
    const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    return (_ctx, _push, _parent, _attrs) => {
      if (isPageLoading.value || props.isLoading) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading-page flex-dir-column py-5" }, _attrs))} data-v-51c8f51a><div class="loader__container flex-container-lg align-center" data-v-51c8f51a><div class="mb-1" data-v-51c8f51a><img${ssrRenderAttr("src", unref(usePage)().props.site.icon)} width="150" height="150" data-v-51c8f51a>`);
        if (unref(usePage)().props.site.frontend.loading_messages) {
          _push(`<div class="text-md text-muted fw-semibold" data-v-51c8f51a>${ssrInterpolate(unref(randomMessage))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="progress" data-v-51c8f51a></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Loaders/PageLoader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PageLoader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-51c8f51a"]]);
const __default__ = {
  beforeMount() {
    this.$nextTick(function() {
      const theme = localStorage.getItem("theme") || "light";
      this.applyTheme(theme);
    });
  },
  directives: {
    tippy: directive
  },
  methods: {
    applyTheme(theme) {
      var lowercaseTheme = theme.toLowerCase();
      const style = document.getElementById("theme-style");
      if (!style) {
        let style2 = document.createElement("link");
        style2.id = "theme-style";
        style2.rel = "stylesheet";
        document.head.appendChild(style2);
      }
      if (style) {
        style.href = `/assets/css/themes/variables-${lowercaseTheme}.css`;
      } else {
        return console.log("Theme Error");
      }
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("theme", theme);
      } else if (typeof sessionStorage !== "undefined") {
        sessionStorage.setItem("theme", theme);
      } else {
        console.log("Web Storage is not supported in this environment.");
      }
    },
    showModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.toggle("active");
      }
    },
    addActiveClass(elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.classList.toggle("active");
      }
    },
    sidebarOpen() {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) {
        if (sidebar.classList.contains("show-for-large")) {
          sidebar.classList.remove("show-for-large");
          sidebar.classList.add("hide-for-large");
        } else {
          sidebar.classList.add("show-for-large");
        }
      }
    },
    addActiveClassSSInput(elementId) {
      const element = document.getElementById(elementId);
      const isEmpty = (str) => !str.trim().length;
      if (element) {
        element.addEventListener("input", function() {
          if (isEmpty(this.value)) {
            return;
          } else {
            element.classList.toggle("hide");
          }
        });
      }
    }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "Navbar",
  __ssrInlineRender: true,
  props: {
    landing: { type: Boolean, default: false }
  },
  setup(__props) {
    const SearchLoading = ref(false);
    const search = ref("");
    const results = ref([]);
    throttle(async () => {
      if (search.value !== "") {
        SearchLoading.value = true;
        await axios.get(route("api.search", { search: search.value })).then((response) => {
          results.value = response.data.results;
          SearchLoading.value = false;
        }).catch((err) => console.log(err));
      } else {
        SearchLoading.value = true;
        results.value = [];
      }
    }, 1e3);
    const topbar = [
      {
        url: route(`games.page`),
        active_link: "games.*",
        icon: "fad fa-gamepad-modern",
        en: { title: "Games" },
        es: { title: "Juegos" },
        ru: { title: "Игры" },
        ja: { title: "ゲーム" }
      },
      {
        url: route(`store.page`),
        active_link: "store.*",
        icon: "fad fa-store",
        en: { title: "Market" },
        es: { title: "Mercado" },
        ru: { title: "Маркет" },
        ja: { title: "市場" }
      },
      {
        url: route(`forum.page`, { id: 1 }),
        active_link: "forum.*",
        icon: "fad fa-message-code",
        en: { title: "Discuss" },
        es: { title: "Conversar" },
        ru: { title: "Обсуждение" },
        ja: { title: "議論" }
      },
      {
        url: route(`spaces.page`),
        active_link: "spaces.*",
        icon: "fad fa-planet-ringed",
        en: { title: "Spaces" },
        es: { title: "Espacios" },
        ru: { title: "Развивать" },
        ja: { title: "スペース" }
      }
    ];
    const left = [
      {
        url: "#",
        active_link: "develop.*",
        icon: "fad fa-code",
        en: { title: "Develop" },
        es: { title: "Desarrollar" },
        ru: { title: "Мои создания" },
        ja: { title: "発展" }
      },
      {
        url: route(`user.page`),
        active_link: "user.*",
        section: "SOCIAL",
        icon: "fad fa-users",
        en: { title: "Players" },
        es: { title: "Jugadoras" },
        ru: { title: "Игроки" },
        ja: { title: "発展" }
      }
    ];
    const right = [
      {
        url: route(`leaderboard.page`),
        active_link: route(`leaderboard.page`),
        icon: "fad fa-list-ol",
        en: { title: "Leaderboard" },
        es: { title: "Tabla de clasificación" },
        ru: { title: "Таблица лидеров" },
        ja: { title: "リーダーボード" }
      },
      {
        url: "#",
        icon: "fad fa-rocket-launch",
        active_link: "upgade.*",
        en: { title: "Upgrade" },
        es: { title: "Mejora" },
        ru: { title: "Подписки" },
        ja: { title: "アップグレード" }
      }
    ];
    const lang = computed(() => props.locale);
    const props = usePage().props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya;
      const _component_Link = resolveComponent("Link");
      const _directive_tippy = resolveDirective("tippy");
      _push(`<!--[-->`);
      if (unref(props).site.page_loader) {
        _push(ssrRenderComponent(PageLoader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      if ((_a = unref(props).auth) == null ? void 0 : _a.user) {
        _push(`<div class="modal" id="profile-modal"><div class="modal-card modal-card-body" style="${ssrRenderStyle(
          ((_c = (_b = unref(props).auth) == null ? void 0 : _b.user) == null ? void 0 : _c.settings.profile_banner_enabled) ? {
            background: "url(" + ((_e = (_d = unref(props).auth) == null ? void 0 : _d.user) == null ? void 0 : _e.settings.profile_banner_url) + ")",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "box-shadow": "inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important"
          } : null
        )}"><div class="section-borderless"><div class="gap-2 align-middle flex-container align-justify"><button class="gap-2 align-middle flex-container squish">`);
        _push(ssrRenderComponent(unref(VLazyImage), {
          src: (_g = (_f = unref(usePage)().props.auth) == null ? void 0 : _f.user) == null ? void 0 : _g.headshot,
          width: "40",
          class: "headshot",
          alt: "Avatar",
          "src-placeholder": "/assets/img/dummy_headshot.png",
          style: ((_i = (_h = unref(props).auth) == null ? void 0 : _h.user) == null ? void 0 : _i.settings.calling_card_enabled) ? {
            margin: "0",
            border: "0",
            "background-image": "url(" + ((_k = (_j = unref(props).auth) == null ? void 0 : _j.user) == null ? void 0 : _k.settings.calling_card_url) + ")",
            "background-repeat": "no-repeat",
            "background-size": "cover"
          } : null
        }, null, _parent));
        _push(`<div class="text-start"><div class="text-sm fw-semibold text-body">${ssrInterpolate((_m = (_l = unref(props).auth) == null ? void 0 : _l.user) == null ? void 0 : _m.display_name)}<span class="text-xs text-muted"> (${ssrInterpolate("@" + ((_o = (_n = unref(props).auth) == null ? void 0 : _n.user) == null ? void 0 : _o.username))} • ${ssrInterpolate("Lvl. " + ((_q = (_p = unref(props).auth) == null ? void 0 : _p.user) == null ? void 0 : _q.level))})</span></div>`);
        if ((_s = (_r = unref(props).auth) == null ? void 0 : _r.user) == null ? void 0 : _s.staff) {
          _push(`<div class="mt-1 mb-1 badge badge-danger fw-semibold">${ssrInterpolate((_u = (_t = unref(props).auth) == null ? void 0 : _t.user) == null ? void 0 : _u.position)}</div>`);
        } else if ((_w = (_v = unref(props).auth) == null ? void 0 : _v.user) == null ? void 0 : _w.settings.beta_tester) {
          _push(`<div class="mt-1 mb-1 badge badge-success fw-semibold"> Beta Tester </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></button><button class="btn-circle text-body" data-toggle-modal="#following-modal" style="${ssrRenderStyle({ "margin-right": "-10px" })}"><i class="fad fa-times"></i></button></div></div><div class="section-borderless"><div class="gap-2 section flex-container">`);
        _push(ssrRenderComponent(_component_Link, {
          href: unref(route)(`user.profile`, { username: (_y = (_x = unref(props).auth) == null ? void 0 : _x.user) == null ? void 0 : _y.username }),
          class: "min-w-0 btn btn-info btn-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fad fa-user-crown"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "fad fa-user-crown" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Link, {
          href: unref(route)(`avatar.page`),
          class: "min-w-0 btn btn-success btn-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fad fa-palette"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "fad fa-palette" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Link, {
          href: unref(route)(`user.settings.page`),
          class: "min-w-0 btn btn-warning btn-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fad fa-wrench"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "fad fa-wrench" })
              ];
            }
          }),
          _: 1
        }, _parent));
        if (((_z = unref(props).auth) == null ? void 0 : _z.user) && ((_B = (_A = unref(props).auth) == null ? void 0 : _A.user) == null ? void 0 : _B.staff)) {
          _push(`<a${ssrRenderAttr("href", unref(route)("admin.page"))} class="min-w-0 btn btn-danger btn-sm show-for-small-only"><i class="fad fa-gavel"></i></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_Link, {
          href: unref(route)("auth.logout"),
          method: "post",
          class: "min-w-0 btn btn-danger btn-sm",
          as: "button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fad fa-right-from-bracket"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "fad fa-right-from-bracket" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<nav class="${ssrRenderClass([{ "navbar-landing": _ctx.landing }, "navbar"])}"><ul class="navbar-nav grid-x"><li class="nav-item cell shrink show-for-small hide-for-large me-1"><button class="btn-circle squish" id="sidebar-toggler"><i class="text-xl fad fa-bars"></i></button></li>`);
      _push(ssrRenderComponent(_component_Link, {
        as: "li",
        class: "nav-item cell shrink",
        href: unref(route)(`Welcome`)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VLazyImage), {
              src: unref(props).site.logo,
              class: "show-for-medium",
              width: "180"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VLazyImage), {
              src: unref(props).site.icon,
              class: "show-for-small-only",
              width: "43"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VLazyImage), {
                src: unref(props).site.logo,
                class: "show-for-medium",
                width: "180"
              }, null, 8, ["src"]),
              createVNode(unref(VLazyImage), {
                src: unref(props).site.icon,
                class: "show-for-small-only",
                width: "43"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(topbar, (topbarlinks) => {
        _push(ssrRenderComponent(_sfc_main$4, {
          link: topbarlinks.url,
          active_link: topbarlinks.active_link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="${ssrRenderClass(topbarlinks.icon)}"${_scopeId}></i>   <span${_scopeId}>${ssrInterpolate(topbarlinks[lang.value].title)}</span>`);
            } else {
              return [
                createVNode("i", {
                  class: topbarlinks.icon
                }, null, 2),
                createTextVNode("   "),
                createVNode("span", null, toDisplayString(topbarlinks[lang.value].title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><li class="nav-item text-danger cell shrink show-for-large"><div class="side-item">`);
      if (((_C = unref(props).auth) == null ? void 0 : _C.user) && ((_E = (_D = unref(props).auth) == null ? void 0 : _D.user) == null ? void 0 : _E.staff)) {
        _push(`<a${ssrRenderAttr("href", unref(route)("admin.page"))} class="nav-link"><i class="fad fa-gavel"></i>   <span>Admin</span></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></li><li class="mx-1 align-middle nav-item cell auto nav-search mx-md-3">`);
      if (unref(props).site.frontend.search_bar) {
        _push(`<input${ssrRenderAttr("value", search.value)} type="text" class="form" id="global-search-bar" name="hidden" autocomplete="off" placeholder="Search...">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="${ssrRenderClass(["dropdown-menu", { hide: search.value === "" }])}" id="global-search-results"><li class="dropdown-title">Quick Results</li>`);
      if (!SearchLoading.value) {
        _push(`<!--[-->`);
        ssrRenderList(results.value, (result) => {
          _push(ssrRenderComponent(_sfc_main$5, {
            href: "#",
            link: result.url,
            name: result.name,
            image: result.image
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(SearchResultSkeleton, null, null, _parent));
      }
      if (!SearchLoading.value && !results.value) {
        _push(`<li class="px-2 py-2 text-center dropdown-item"><div class="gap-3 flex-container flex-dir-column"><i class="text-5xl fa-solid fa-folder-magnifying-glass text-muted"></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"><div class="text-xs fw-bold text-muted text-uppercase"> No Results </div><div class="text-xs text-muted fw-semibold"> My mighty search came up empty! Try a different keyword? </div></div></div></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li class="divider"></li><li class="dropdown-item">`);
      _push(ssrRenderComponent(_component_Link, {
        href: "#",
        class: "dropdown-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="align-middle flex-container align-justify"${_scopeId}><div class="gap-2 align-middle flex-container"${_scopeId}><i class="text-xl align-middle fad fa-telescope headshot text-muted flex-container align-center flex-child-grow" style="${ssrRenderStyle({ "height": "40px", "width": "40px" })}"${_scopeId}></i><div${_scopeId}> Show all results for &quot;<span class="search-keyword"${_scopeId}>${ssrInterpolate(search.value)}</span>&quot; </div></div><i class="px-1 fad fa-chevron-right text-muted"${_scopeId}></i></div>`);
          } else {
            return [
              createVNode("div", { class: "align-middle flex-container align-justify" }, [
                createVNode("div", { class: "gap-2 align-middle flex-container" }, [
                  createVNode("i", {
                    class: "text-xl align-middle fad fa-telescope headshot text-muted flex-container align-center flex-child-grow",
                    style: { "height": "40px", "width": "40px" }
                  }),
                  createVNode("div", null, [
                    createTextVNode(' Show all results for "'),
                    createVNode("span", { class: "search-keyword" }, toDisplayString(search.value), 1),
                    createTextVNode('" ')
                  ])
                ]),
                createVNode("i", { class: "px-1 fad fa-chevron-right text-muted" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul>`);
      if (unref(props).site.frontend.search_bar) {
        _push(`<button content="Search" data-tooltip-placement="bottom"><i class="fad fa-search"></i></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
      if (!((_F = unref(props).auth) == null ? void 0 : _F.user)) {
        _push(ssrRenderComponent(_sfc_main$3, {
          link: unref(route)("auth.register.page"),
          ColorClass: "btn-success",
          class: "nav-item cell show-for-large shrink me-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fad fa-person-to-Teleport"${_scopeId}></i>   Get Started `);
            } else {
              return [
                createVNode("i", { class: "fad fa-person-to-Teleport" }),
                createTextVNode("   Get Started ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!((_G = unref(props).auth) == null ? void 0 : _G.user)) {
        _push(ssrRenderComponent(_sfc_main$3, {
          link: unref(route)("auth.login.page"),
          ColorClass: "btn-info",
          class: "nav-item cell show-for-large shrink me-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fad fa-door-open"${_scopeId}></i>   Login `);
            } else {
              return [
                createVNode("i", { class: "fad fa-door-open" }),
                createTextVNode("   Login ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (((_H = unref(props).auth) == null ? void 0 : _H.user) && ((_J = (_I = unref(props).auth) == null ? void 0 : _I.user) == null ? void 0 : _J.settings.notifications_enabled)) {
        _push(`<li class="position-relative nav-item cell shrink"><div class="show-for-small-only position-relative">`);
        _push(ssrRenderComponent(_component_Link, {
          href: unref(route)("notification.page"),
          class: "px-2 btn-circle squish text-body"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2;
            if (_push2) {
              if ((_b2 = (_a2 = unref(props).auth) == null ? void 0 : _a2.user) == null ? void 0 : _b2.notifications.length) {
                _push2(`<span class="notification-circle"${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<i class="text-xl fad fa-bell"${_scopeId}></i>`);
            } else {
              return [
                ((_d2 = (_c2 = unref(props).auth) == null ? void 0 : _c2.user) == null ? void 0 : _d2.notifications.length) ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "notification-circle"
                })) : createCommentVNode("", true),
                createVNode("i", { class: "text-xl fad fa-bell" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="dropdown show-for-medium position-relative" id="notification_dropdown"><div class="btn-circle squish"><button${ssrRenderAttrs(mergeProps({
          class: "px-2 text-body",
          content: "Notifications",
          "data-tooltip-placement": "bottom"
        }, ssrGetDirectiveProps(_ctx, _directive_tippy)))}>`);
        if ((_L = (_K = unref(props).auth) == null ? void 0 : _K.user) == null ? void 0 : _L.notifications.length) {
          _push(`<span class="notification-circle"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<i class="text-xl fad fa-bell"></i></button></div><ul class="dropdown-menu dropdown-menu-end" style="${ssrRenderStyle({ "width": "340px" })}"><div class="align-middle flex-container"><div class="dropdown-title">Notifications</div><li class="divider flex-child-grow"></li></div>`);
        if (!((_N = (_M = unref(props).auth) == null ? void 0 : _M.user) == null ? void 0 : _N.notifications.length)) {
          _push(`<li class="px-2 py-2 text-center dropdown-item"><div class="gap-3 flex-container flex-dir-column"><i class="text-5xl fad fa-face-sleeping text-muted"></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"><div class="text-xs fw-bold text-muted text-uppercase"> No Notifications </div><div class="text-xs text-muted fw-semibold"> You have not recieved any notifications recently. </div></div></div></li>`);
        } else {
          _push(`<!--[-->`);
          ssrRenderList((_P = (_O = unref(props).auth) == null ? void 0 : _O.user) == null ? void 0 : _P.notifications, (notification) => {
            _push(`<li class="dropdown-item">`);
            _push(ssrRenderComponent(_component_Link, {
              href: notification.data.route,
              class: "dropdown-link"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="gap-1 align-middle flex-container"${_scopeId}><i class="${ssrRenderClass([{ "fad fa-gift text-warning": notification.data.type === "gift", "fad fa-comments-alt text-info": notification.data.type !== "gift" }, "text-lg text-center flex-child-grow"])}" style="${ssrRenderStyle({ "width": "38px" })}"${_scopeId}></i><div class="gap-2 align-middle flex-container w-100"${_scopeId}><div class="min-w-0" style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-sm text-truncate"${_scopeId}>`);
                  if (notification.data.object) {
                    _push2(`<span class="search-keyword"${_scopeId}>${ssrInterpolate(notification.data.object)}  </span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<span class="text-sm text-muted"${_scopeId}>${ssrInterpolate(notification.data.message)}</span></div><div class="text-xs text-muted"${_scopeId}>${ssrInterpolate(notification.DateHum)}</div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "gap-1 align-middle flex-container" }, [
                      createVNode("i", {
                        class: ["text-lg text-center flex-child-grow", { "fad fa-gift text-warning": notification.data.type === "gift", "fad fa-comments-alt text-info": notification.data.type !== "gift" }],
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
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]-->`);
        }
        _push(`<li class="divider"></li>`);
        if ((_R = (_Q = unref(props).auth) == null ? void 0 : _Q.user) == null ? void 0 : _R.notifications.length) {
          _push(`<li class="dropdown-item"><a class="dropdown-link"><div class="align-middle flex-container align-justify"><div class="gap-2 align-middle flex-container">`);
          if (unref(props).site.frontend.sidebar_menu) {
            _push(`<i class="text-lg align-middle fad fa-check headshot text-muted flex-container align-center flex-child-grow" style="${ssrRenderStyle({ "height": "38px", "width": "38px" })}"></i>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="text-sm">Mark All As Read</div></div></div></a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<li class="dropdown-item">`);
        _push(ssrRenderComponent(_component_Link, {
          href: unref(route)("notification.page"),
          class: "dropdown-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="align-middle flex-container align-justify"${_scopeId}><div class="gap-2 align-middle flex-container"${_scopeId}>`);
              if (unref(props).site.frontend.sidebar_menu) {
                _push2(`<i class="text-lg align-middle fad fa-bell headshot text-muted flex-container align-center flex-child-grow" style="${ssrRenderStyle({ "height": "38px", "width": "38px" })}"${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="text-sm"${_scopeId}>Show All Notifications</div></div><i class="px-1 text-sm fad fa-chevron-right text-muted"${_scopeId}></i></div>`);
            } else {
              return [
                createVNode("div", { class: "align-middle flex-container align-justify" }, [
                  createVNode("div", { class: "gap-2 align-middle flex-container" }, [
                    unref(props).site.frontend.sidebar_menu ? (openBlock(), createBlock("i", {
                      key: 0,
                      class: "text-lg align-middle fad fa-bell headshot text-muted flex-container align-center flex-child-grow",
                      style: { "height": "38px", "width": "38px" }
                    })) : createCommentVNode("", true),
                    createVNode("div", { class: "text-sm" }, "Show All Notifications")
                  ]),
                  createVNode("i", { class: "px-1 text-sm fad fa-chevron-right text-muted" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div></li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_S = unref(props).auth) == null ? void 0 : _S.user) {
        _push(`<li class="nav-item cell shrink show-for-large"><a${ssrRenderAttrs(mergeProps({
          href: "#",
          class: "text-sm nav-link",
          style: { "line-height": "20px" },
          content: ((_U = (_T = unref(props).auth) == null ? void 0 : _T.user) == null ? void 0 : _U.coins) + ` Coin${((_W = (_V = unref(props).auth) == null ? void 0 : _V.user) == null ? void 0 : _W.coins) > 1 ? "s" : ""} & ` + ((_Y = (_X = unref(props).auth) == null ? void 0 : _X.user) == null ? void 0 : _Y.bucks) + ` Buck${((__ = (_Z = unref(props).auth) == null ? void 0 : _Z.user) == null ? void 0 : __.bucks) > 1 ? "s" : ""} `,
          "data-tooltip-placement": "bottom"
        }, ssrGetDirectiveProps(_ctx, _directive_tippy)))}><div class="text-warning"><i class="fad fa-coins" style="${ssrRenderStyle({ "width": "22px" })}"></i>${ssrInterpolate((_aa = (_$ = unref(props).auth) == null ? void 0 : _$.user) == null ? void 0 : _aa.coins)}</div><div class="text-success"><i class="fad fa-money-bill-1-wave" style="${ssrRenderStyle({ "width": "22px" })}"></i>${ssrInterpolate((_ca = (_ba = unref(props).auth) == null ? void 0 : _ba.user) == null ? void 0 : _ca.bucks)}</div></a></li>`);
      } else {
        _push(`<!---->`);
      }
      if (((_da = unref(props).auth) == null ? void 0 : _da.user) && unref(props).site.frontend.sidebar_menu) {
        _push(`<li class="dropdown position-relative nav-item cell shrink ms-1" id="user_dropdown"><button class="gap-2 align-middle flex-container squish">`);
        _push(ssrRenderComponent(unref(VLazyImage), {
          src: (_fa = (_ea = unref(usePage)().props.auth) == null ? void 0 : _ea.user) == null ? void 0 : _fa.headshot,
          width: "40",
          class: "headshot",
          alt: "Avatar",
          "src-placeholder": "assets/img/dummy_headshot.png"
        }, null, _parent));
        _push(`<div class="text-start show-for-large"><div class="text-sm fw-semibold text-body">${ssrInterpolate((_ha = (_ga = unref(props).auth) == null ? void 0 : _ga.user) == null ? void 0 : _ha.display_name)}</div>`);
        if ((_ja = (_ia = unref(props).auth) == null ? void 0 : _ia.user) == null ? void 0 : _ja.staff) {
          _push(`<div class="mb-1 badge badge-position badge-danger fw-semibold">${ssrInterpolate((_la = (_ka = unref(props).auth) == null ? void 0 : _ka.user) == null ? void 0 : _la.position)}</div>`);
        } else if (((_oa = (_na = (_ma = unref(props).auth) == null ? void 0 : _ma.user) == null ? void 0 : _na.settings) == null ? void 0 : _oa.beta_tester) != false) {
          _push(`<div class="mb-1 badge badge-position badge-success fw-semibold"> Beta Tester </div>`);
        } else {
          _push(`<div class="text-xs text-muted fw-semibold">${ssrInterpolate("@" + ((_qa = (_pa = unref(props).auth) == null ? void 0 : _pa.user) == null ? void 0 : _qa.username))} • ${ssrInterpolate("Lvl. " + ((_sa = (_ra = unref(props).auth) == null ? void 0 : _ra.user) == null ? void 0 : _sa.level))}</div>`);
        }
        _push(`</div><i class="text-sm fad fa-chevron-down text-muted show-for-large"></i></button></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></nav>`);
      if (!unref(props).site.frontend.sidebar_menu) {
        _push(`<nav class="${ssrRenderClass([{ "navbar-landing": _ctx.landing }, "navbar bottom_nav"])}"><ul class="navbar-nav grid-x"><li class="nav-item cell shrink show-for-small hide-for-large me-1"><button class="btn-circle squish" id="sidebar-toggler"><i class="text-xl fad fa-bars"></i></button></li><!--[-->`);
        ssrRenderList(left, (leftside) => {
          _push(ssrRenderComponent(_sfc_main$4, {
            link: leftside.url,
            active_link: leftside.active_link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="${ssrRenderClass(leftside.icon)}"${_scopeId}></i>   <span${_scopeId}>${ssrInterpolate(leftside[lang.value].title)}</span>`);
              } else {
                return [
                  createVNode("i", {
                    class: leftside.icon
                  }, null, 2),
                  createTextVNode("   "),
                  createVNode("span", null, toDisplayString(leftside[lang.value].title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><li class="nav-item text-danger cell shrink show-for-large"><div class="side-item">`);
        if (((_ta = unref(props).auth) == null ? void 0 : _ta.user) && ((_va = (_ua = unref(props).auth) == null ? void 0 : _ua.user) == null ? void 0 : _va.staff)) {
          _push(`<a${ssrRenderAttr("href", unref(route)("admin.page"))} class="nav-link"><i class="fad fa-gavel"></i>   <span>Admin</span></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></li><li class="mx-1 align-middle nav-item cell auto nav-search mx-md-3"></li><!--[-->`);
        ssrRenderList(right, (rightside) => {
          _push(ssrRenderComponent(_sfc_main$4, {
            link: rightside.url,
            active_link: rightside.active_link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="${ssrRenderClass(rightside.icon)}"${_scopeId}></i>   <span${_scopeId}>${ssrInterpolate(rightside[lang.value].title)}</span>`);
              } else {
                return [
                  createVNode("i", {
                    class: rightside.icon
                  }, null, 2),
                  createTextVNode("   "),
                  createVNode("span", null, toDisplayString(rightside[lang.value].title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        if ((_wa = unref(props).auth) == null ? void 0 : _wa.user) {
          _push(`<li class="dropdown position-relative nav-item cell shrink ms-1" id="user_dropdown"><button class="gap-2 align-middle flex-container squish">`);
          _push(ssrRenderComponent(unref(VLazyImage), {
            src: (_ya = (_xa = unref(usePage)().props.auth) == null ? void 0 : _xa.user) == null ? void 0 : _ya.headshot,
            width: "30",
            class: "headshot",
            alt: "Avatar",
            "src-placeholder": "assets/img/dummy_headshot.png"
          }, null, _parent));
          _push(`</button></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></nav>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LayoutParts/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
