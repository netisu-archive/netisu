import { defineComponent, resolveComponent, mergeProps, unref, withCtx, renderSlot, useSSRContext, ref, computed, watch, onMounted, createVNode, toDisplayString, createTextVNode, openBlock, createBlock } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
import { current, route } from "momentum-trail";
import VLazyImage from "v-lazy-image";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SideLink",
  __ssrInlineRender: true,
  props: {
    link: {},
    ActiveLink: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "side-item" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Link, {
        class: ["side-link", [unref(current)(_ctx.ActiveLink) ? "active" : ""]],
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
      _push(`</li>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SideLink.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __default__$1 = {
  data() {
    return {
      showToast: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.showToast = true;
    }, 1e3);
    setTimeout(() => {
      this.showToast = false;
    }, 6e3);
  }
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  __name: "FlashMessages",
  __ssrInlineRender: true,
  props: {
    ShowJsonAlert: { type: Boolean },
    flash: {}
  },
  setup(__props) {
    const props = __props;
    const show = ref(props.ShowJsonAlert);
    const message = computed(() => {
      var _a;
      return (_a = props.flash) == null ? void 0 : _a.message;
    });
    const type = computed(() => {
      var _a;
      return (_a = props.flash) == null ? void 0 : _a.type;
    });
    watch(
      [message, type],
      () => {
        show.value = true;
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (message.value && show.value) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          class: ["toast-menu", { "toast-menu-slide": _ctx.showToast }],
          id: "ToastNotif"
        }, _attrs))}>`);
        if (type.value === "success" && message.value && show.value) {
          _push(`<div class="py-2 mb-1 text-center alert alert-toast alert-success fw-semibold"><div class="gap-2 align-middle flex-container"><i class="text-lg fad fa-check-circle"></i> ${ssrInterpolate(message.value)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (type.value === "error" && message.value && show.value) {
          _push(`<div class="py-2 mb-1 text-center alert alert-danger fw-semibold"><div class="gap-2 align-middle flex-container"><i class="text-lg fad fa-circle-xmark"></i><div>${ssrInterpolate(message.value)}</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (type.value === "warning" && message.value && show.value) {
          _push(`<div class="py-2 mb-1 text-center alert alert-warning fw-semibold"><div class="gap-2 align-middle flex-container"><i class="text-lg fad fa-exclamation-circle"></i><div>${ssrInterpolate(message.value)}</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Messages/FlashMessages.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SuperBanner",
  __ssrInlineRender: true,
  props: {
    bannerType: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_portal_target = resolveComponent("portal-target");
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: {
          "container-navbar": !unref(usePage)().props.site.frontend.sidebar_menu,
          container: unref(usePage)().props.site.frontend.sidebar_menu
        }
      }, _attrs))}><div class="gap-4 align-middle flex-container" style="${ssrRenderStyle({ "z-index": "1", "position": "relative" })}">`);
      _push(ssrRenderComponent(_component_portal_target, { name: "bannerAsset" }, null, _parent));
      if (props.bannerType == "image") {
        _push(ssrRenderComponent(unref(VLazyImage), {
          src: props == null ? void 0 : props["bannerAsset"],
          width: "100",
          class: "space-image",
          alt: "Space Thumbnail",
          "src-placeholder": "/assets/img/space-error.png"
        }, null, _parent));
      } else if (props.bannerType == "icon") {
        _push(`<i class="${ssrRenderClass([props == null ? void 0 : props["bannerAsset"], "text-5xl text-muted"])}"></i>`);
      } else {
        _push(`<!--[--><!--]-->`);
      }
      _push(`<div class="text-start"><div class="text-2xl fw-semibold">`);
      _push(ssrRenderComponent(_component_portal_target, { name: "bannerName" }, null, _parent));
      _push(`</div><div class="text-sm text-truncate fw-semibold text-muted">`);
      _push(ssrRenderComponent(_component_portal_target, { name: "bannerDescription" }, null, _parent));
      _push(`</div><div class="gap-2 align-middle flex-container">`);
      _push(ssrRenderComponent(_component_portal_target, { name: "bannerButtons" }, null, _parent));
      _push(`</div></div></div></main>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LayoutParts/SuperBanner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __default__ = {
  methods: {
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
    addActiveClassSSInput(elementId) {
      const element = document.getElementById(
        elementId
      );
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
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    image: {},
    showJsonAlert: { type: Boolean, default: false },
    JSONALERT: { default: [] },
    superBanActive: { type: Boolean, default: false },
    alertsEnabled: { type: Boolean, default: true },
    OfficialImageBackground: { type: Boolean, default: false },
    navSpaces: {}
  },
  setup(__props) {
    const chatToggle = ref(false);
    const { props } = usePage();
    const googleAdUrl = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    const adblock = ref(false);
    const messages = ref([
      {
        username: "aeo",
        displayname: "ae-no",
        message: "test array",
        type: "type",
        DateHum: "Just Now"
      }
    ]);
    async function detectAdBlock() {
      try {
        await fetch(new Request(googleAdUrl)).catch(
          adblock.value = true
        );
      } catch (e) {
        adblock.value = true;
      }
    }
    onMounted(() => {
      detectAdBlock();
    });
    const sidebarsections = [
      {
        en: { name: "NAVIGATION" },
        es: { name: "NAVEGACIÓN" },
        ru: { name: "НАВИГАЦИЯ" },
        ja: { name: "ナビゲーション" }
      },
      {
        en: { name: "SOCIAL" },
        es: { name: "Sociable" },
        ru: { name: "СОЦИАЛЬНОЕ" },
        ja: { name: "ソーシャル" }
      },
      {
        en: { name: "BOOST YOUR ACCOUNT" },
        es: { name: "IMPULSA TU CUENTA" },
        ru: { name: "ПОДДЕРЖИТЕ СВОЙ АККАУНТ" },
        ja: { name: "アカウントを強化する" }
      }
    ];
    const sidebar = [
      {
        url: route(`games.page`),
        active_link: "games.*",
        section: "NAVIGATION",
        icon: "fad fa-gamepad-modern",
        en: { title: "Games" },
        es: { title: "Juegos" },
        ru: { title: "Игры" },
        ja: { title: "ゲーム" }
      },
      {
        url: route(`store.page`),
        section: "NAVIGATION",
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
        icon: "fad fa-messages",
        section: "NAVIGATION",
        en: { title: "Discuss" },
        es: { title: "Conversar" },
        ru: { title: "Обсуждение" },
        ja: { title: "議論" }
      },
      {
        url: "#",
        section: "NAVIGATION",
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
        ja: { title: "ユーザー" }
      },
      {
        url: route(`spaces.page`),
        section: "SOCIAL",
        active_link: "spaces.*",
        icon: "fad fa-planet-ringed",
        en: { title: "Spaces" },
        es: { title: "Espacios" },
        ru: { title: "Пространства" },
        ja: { title: "スペース" }
      },
      {
        url: route(`leaderboard.page`),
        section: "SOCIAL",
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
        section: "BOOST YOUR ACCOUNT",
        en: { title: "Upgrade" },
        es: { title: "Mejora" },
        ru: { title: "Подписки" },
        ja: { title: "アップグレード" }
      }
    ];
    const lang = computed(() => usePage().props.locale);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (unref(props).site.frontend.sidebar_menu) {
        _push(`<nav class="sidebar show-for-large" id="sidebar" data-v-1ed9e27d><ul class="sidebar-nav" data-v-1ed9e27d>`);
        if (!unref(props).auth.user) {
          _push(`<div class="hide-for-large" data-v-1ed9e27d><li class="side-item side-title" data-v-1ed9e27d>Account</li>`);
          _push(ssrRenderComponent(_sfc_main$3, {
            link: unref(route)("auth.register.page"),
            ActiveLink: unref(route)("auth.register.page")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="fad fa-user-plus side-icon" data-v-1ed9e27d${_scopeId}></i><span data-v-1ed9e27d${_scopeId}>Get Started</span>`);
              } else {
                return [
                  createVNode("i", { class: "fad fa-user-plus side-icon" }),
                  createVNode("span", null, "Get Started")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_sfc_main$3, {
            link: unref(route)("auth.login.page"),
            ActiveLink: unref(route)("auth.login.page")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="fad fa-sign-in side-icon" data-v-1ed9e27d${_scopeId}></i><span data-v-1ed9e27d${_scopeId}>Log In</span>`);
              } else {
                return [
                  createVNode("i", { class: "fad fa-sign-in side-icon" }),
                  createVNode("span", null, "Log In")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$3, {
          link: unref(route)("Welcome"),
          ActiveLink: unref(props).auth.user ? "my.dashboard.page" : "Welcome"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fad fa-home side-icon" data-v-1ed9e27d${_scopeId}></i><span data-v-1ed9e27d${_scopeId}>${ssrInterpolate(unref(props).auth.user ? "Dashboard" : "Welcome")}</span>`);
            } else {
              return [
                createVNode("i", { class: "fad fa-home side-icon" }),
                createVNode("span", null, toDisplayString(unref(props).auth.user ? "Dashboard" : "Welcome"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--[-->`);
        ssrRenderList(sidebarsections, (sidesections) => {
          _push(`<!--[--><li class="side-item side-title" data-v-1ed9e27d>${ssrInterpolate(sidesections[lang.value].name)}</li><!--[-->`);
          ssrRenderList(sidebar.filter(
            (link) => link.section === sidesections.en.name
          ), (sidelink) => {
            _push(ssrRenderComponent(_sfc_main$3, {
              class: "side-item",
              link: sidelink.url,
              ActiveLink: sidelink.active_link
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<i class="${ssrRenderClass([sidelink.icon, "side-icon"])}" data-v-1ed9e27d${_scopeId}></i><span data-v-1ed9e27d${_scopeId}>${ssrInterpolate(sidelink[lang.value].title)}</span>`);
                } else {
                  return [
                    createVNode("i", {
                      class: ["side-icon", sidelink.icon]
                    }, null, 2),
                    createVNode("span", null, toDisplayString(sidelink[lang.value].title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]-->`);
        if (unref(usePage)().props.auth.user) {
          _push(`<div data-v-1ed9e27d><li class="side-item side-title" data-v-1ed9e27d> My Spaces </li>`);
          if (unref(usePage)().props.auth.user.navSpaces.length) {
            _push(`<!--[-->`);
            ssrRenderList(unref(usePage)().props.auth.user.navSpaces, (space, index) => {
              _push(`<li class="side-item" data-v-1ed9e27d>`);
              _push(ssrRenderComponent(unref(Link), {
                href: unref(route)(`spaces.view`, { id: space.id, slug: space.slug }),
                class: "side-link side-link-has-img"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<span class="side-img" data-v-1ed9e27d${_scopeId}>`);
                    _push2(ssrRenderComponent(unref(VLazyImage), {
                      src: space.thumbnail
                    }, null, _parent2, _scopeId));
                    _push2(`</span><span data-v-1ed9e27d${_scopeId}>${ssrInterpolate(space.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "side-img" }, [
                        createVNode(unref(VLazyImage), {
                          src: space.thumbnail
                        }, null, 8, ["src"])
                      ]),
                      createVNode("span", null, toDisplayString(space.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</li>`);
            });
            _push(`<!--]-->`);
          } else {
            _push(`<li class="side-item" data-v-1ed9e27d>`);
            _push(ssrRenderComponent(unref(Link), {
              href: unref(route)("spaces.page"),
              class: "side-link side-link-has-img"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<button class="gap-2 align-middle flex-container squish" style="${ssrRenderStyle({ "outline": "none" })}" data-v-1ed9e27d${_scopeId}><span class="side-img" data-v-1ed9e27d${_scopeId}><i class="fad fa-square-xmark" data-v-1ed9e27d${_scopeId}></i></span><div class="text-start show-for-large" data-v-1ed9e27d${_scopeId}><div class="text-sm fw-semibold text-body" data-v-1ed9e27d${_scopeId}>No spaces found</div><div class="mb-1 text-xs text-muted fw-semibold" data-v-1ed9e27d${_scopeId}> Join a space here </div></div></button>`);
                } else {
                  return [
                    createVNode("button", {
                      class: "gap-2 align-middle flex-container squish",
                      style: { "outline": "none" }
                    }, [
                      createVNode("span", { class: "side-img" }, [
                        createVNode("i", { class: "fad fa-square-xmark" })
                      ]),
                      createVNode("div", { class: "text-start show-for-large" }, [
                        createVNode("div", { class: "text-sm fw-semibold text-body" }, "No spaces found"),
                        createVNode("div", { class: "mb-1 text-xs text-muted fw-semibold" }, " Join a space here ")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</li>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></nav>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(props).site_config.announcement) {
        _push(`<nav class="sitewide-alert" data-v-1ed9e27d><div class="py-2 text-center alert alert-danger alert-wide fw-semibold" data-v-1ed9e27d><div class="gap-2 text-center align-middle flex-container align-center" data-v-1ed9e27d><div data-v-1ed9e27d>${ssrInterpolate(unref(props).site_config.announcement_message)}</div></div></div></nav>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.image) {
        _push(`<div class="${ssrRenderClass([{ special: _ctx.OfficialImageBackground }, "profile-banner"])}" data-v-1ed9e27d><img class="masoqi" style="${ssrRenderStyle({
          backgroundImage: `url(${_ctx.image})`,
          backgroundRepeat: _ctx.OfficialImageBackground ? "repeat" : "no-repeat",
          backgroundSize: _ctx.OfficialImageBackground ? "" : "cover",
          backgroundPosition: "center"
        })}" data-v-1ed9e27d></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$2, {
        ShowJsonAlert: _ctx.showJsonAlert,
        flash: _ctx.JSONALERT
      }, null, _parent));
      if (_ctx.superBanActive) {
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<main class="${ssrRenderClass({
        "container-navbar": !unref(props).site.frontend.sidebar_menu,
        container: unref(props).site.frontend.sidebar_menu
      })}" data-v-1ed9e27d>`);
      if (_ctx.alertsEnabled) {
        _push(`<div data-v-1ed9e27d>`);
        if (adblock.value) {
          _push(`<div class="py-2 mb-4 text-center alert alert-danger fw-semibold" data-v-1ed9e27d><div class="gap-2 align-middle flex-container align-justify" data-v-1ed9e27d><i class="text-lg far fa-triangle-exclamation pe-2" data-v-1ed9e27d></i><div data-v-1ed9e27d> Looks like you&#39;re using an adblocker! Please consider disabling your adblocker to support ${ssrInterpolate(unref(props).site.name)}. </div><i class="text-lg far fa-triangle-exclamation pe-2" data-v-1ed9e27d></i></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(props).site_config.in_maintenance) {
          _push(`<div class="py-2 mb-4 text-center text-white alert alert-danger" data-v-1ed9e27d><div class="gap-2 align-middle flex-container align-justify" data-v-1ed9e27d><i class="text-lg fad fa-hammer pe-2" data-v-1ed9e27d></i><div data-v-1ed9e27d> You are currently in maintenance mode. `);
          _push(ssrRenderComponent(unref(Link), {
            href: unref(route)("maintenance.exit"),
            class: "ml-2 text-white fw-semibold"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Exit`);
              } else {
                return [
                  createTextVNode("Exit")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div><i class="text-lg fad fa-hammer pe-2" data-v-1ed9e27d></i></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(props).auth.user && unref(props).auth.user.email_verified_at === null) {
          _push(ssrRenderComponent(unref(Link), {
            as: "div",
            style: { "cursor": "pointer" },
            href: unref(route)("verification.notice"),
            class: "py-2 mb-4 text-center text-white alert alert-danger"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="gap-2 align-middle flex-container align-justify" data-v-1ed9e27d${_scopeId}><i class="text-lg fad fa-envelope pe-2" data-v-1ed9e27d${_scopeId}></i><div data-v-1ed9e27d${_scopeId}>`);
                if (unref(props).auth.user.settings.verified_email) {
                  _push2(`<span data-v-1ed9e27d${_scopeId}> Please check your email at <span class="fw-semibold" data-v-1ed9e27d${_scopeId}>${ssrInterpolate(unref(props).auth.user.email)}</span>. If you dont see the email, check your spam folder. </span>`);
                } else {
                  _push2(`<span class="d-block" data-v-1ed9e27d${_scopeId}> We need to verify your email at <span class="fw-semibold" data-v-1ed9e27d${_scopeId}>${ssrInterpolate(unref(props).auth.user.email)}</span> to keep your account in good standing. </span>`);
                }
                _push2(`</div><i class="text-lg fad fa-envelope pe-2" data-v-1ed9e27d${_scopeId}></i></div>`);
              } else {
                return [
                  createVNode("div", { class: "gap-2 align-middle flex-container align-justify" }, [
                    createVNode("i", { class: "text-lg fad fa-envelope pe-2" }),
                    createVNode("div", null, [
                      unref(props).auth.user.settings.verified_email ? (openBlock(), createBlock("span", { key: 0 }, [
                        createTextVNode(" Please check your email at "),
                        createVNode("span", { class: "fw-semibold" }, toDisplayString(unref(props).auth.user.email), 1),
                        createTextVNode(". If you dont see the email, check your spam folder. ")
                      ])) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: "d-block"
                      }, [
                        createTextVNode(" We need to verify your email at "),
                        createVNode("span", { class: "fw-semibold" }, toDisplayString(unref(props).auth.user.email), 1),
                        createTextVNode(" to keep your account in good standing. ")
                      ]))
                    ]),
                    createVNode("i", { class: "text-lg fad fa-envelope pe-2" })
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid-x grid-margin-x align-center" data-v-1ed9e27d>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (chatToggle.value) {
        _push(`<div id="chat-container" class="chat-container chat-vis focused" style="${ssrRenderStyle({ "right": "66px", "z-index": "1060" })}" data-v-1ed9e27d><div class="chat-windows-header chat-header bg-info hover" data-v-1ed9e27d><div class="chat-header-action" data-v-1ed9e27d><i class="chat-icon fad fa-message-xmark chat-link-icon" data-v-1ed9e27d></i><i class="chat-icon fad fa-cog chat-link-icon" data-v-1ed9e27d></i><i class="chat-icon fad fa-gamepad-modern chat-link-icon" data-v-1ed9e27d></i></div><div class="chat-header-label" data-v-1ed9e27d><span class="chat-caption-header text-overflow chat-header-title" data-v-1ed9e27d> Aeo </span></div></div><div class="chat-main" data-v-1ed9e27d><div class="chat-body card-chat card-chat-body no-corners" data-v-1ed9e27d><!--[-->`);
        ssrRenderList(messages.value, (message) => {
          _push(`<div class="gap-2 p-2 mb-2 align-middle squish flex-container align-justify" data-v-1ed9e27d><div class="gap-2 align-middle flex-container" data-v-1ed9e27d><img src="/assets/img/dummy_headshot.png" class="headshot" width="50" data-v-1ed9e27d><div class="w-100" data-v-1ed9e27d><div class="fw-semibold" data-v-1ed9e27d>${ssrInterpolate(message.displayname)}</div><div class="text-sm fw-semibold text-muted" data-v-1ed9e27d> @${ssrInterpolate(message.username)}</div><div class="text-xs fw-semibold text-muted" data-v-1ed9e27d>${ssrInterpolate(message.DateHum)}</div></div></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LayoutParts/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ed9e27d"]]);
export {
  Sidebar as S,
  _sfc_main$2 as _
};
