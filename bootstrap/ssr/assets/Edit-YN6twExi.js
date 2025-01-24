import { defineComponent, resolveDirective, mergeProps, useSSRContext, ref, computed, resolveComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, withDirectives, openBlock, createBlock, createCommentVNode, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./Navbar-30Vv0CN7.js";
import { S as Sidebar } from "./Sidebar-BQWvWV-r.js";
import { _ as _sfc_main$6 } from "./Footer-CxsG0LBb.js";
import _sfc_main$4 from "./DeleteUserForm-em7H3L-H.js";
import _sfc_main$5 from "./UpdatePasswordForm-DrtGGYO5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { usePage } from "@inertiajs/vue3";
import { route } from "momentum-trail";
import axios from "axios";
import { _ as _sfc_main$2 } from "../ssr.js";
import VLazyImage from "v-lazy-image";
import "lodash/throttle.js";
import "vue-tippy";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "portal-vue";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Upload",
  __ssrInlineRender: true,
  props: {
    modal: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_modal = resolveDirective("modal");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card card-body card-inner w-100" }, _attrs))} data-v-599486ff><input${ssrRenderAttrs(mergeProps({
        type: "file",
        id: "file"
      }, ssrGetDirectiveProps(_ctx, _directive_modal, props.modal)))} data-v-599486ff><div class="align-center flex-container text-center" data-v-599486ff><div class="w-100" data-v-599486ff><div class="text-5xl mb-3 text-muted" data-v-599486ff><i class="fad fa-upload" style="${ssrRenderStyle({ "vertical-align": "middle", "margin-top": "-2.5px" })}" data-v-599486ff></i></div><div class="text-md text-muted fw-semibold" data-v-599486ff>Upload</div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Upload.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Upload = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-599486ff"]]);
const __default__ = {
  data() {
    return {
      activeTheme: ""
    };
  },
  mounted() {
    const theme = localStorage.getItem("theme") || "light";
    this.activeTheme = theme;
    this.applyTheme(theme);
    const storedTheme = localStorage.getItem("theme");
    const themeBtn = document.getElementById(theme + "-theme-btn");
    if (themeBtn) {
      if (themeBtn.classList.contains("active")) {
        themeBtn.classList.remove("active");
      } else if (storedTheme === theme || this.activeTheme === theme) {
        themeBtn.classList.add("active");
      }
    }
  },
  methods: {
    capitalized(name) {
      const capitalizedFirst = name[0].toUpperCase();
      const rest = name.slice(1);
      return capitalizedFirst + rest;
    },
    applyTheme(theme) {
      var lowercaseTheme = theme.toLowerCase();
      let style = document.getElementById("theme-style");
      const themeBtn = document.getElementById(lowercaseTheme + "-theme-btn");
      if (!style) {
        style = document.createElement("link");
        style.id = "theme-style";
        style.rel = "stylesheet";
        document.head.appendChild(style);
      }
      style.href = `/assets/css/themes/variables-${lowercaseTheme}.css`;
      localStorage.setItem("theme", theme);
      const storedTheme = localStorage.getItem("theme");
      if (themeBtn) {
        if (themeBtn.classList.contains("active")) {
          themeBtn.classList.remove("active");
        } else if (storedTheme === theme || this.activeTheme === theme) {
          themeBtn.classList.add("active");
        }
      }
    },
    setTheme(theme) {
      const storedTheme = localStorage.getItem("theme") || "light";
      const newtheme = theme || "light";
      if (storedTheme != newtheme) {
        document.getElementById(storedTheme + "-theme-btn").classList.remove("active");
      }
      this.applyTheme(theme);
      if (storedTheme === newtheme) {
        document.getElementById(theme + "-theme-btn").classList.add("active");
      }
    }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {},
    status: {},
    categories: {},
    themes: {}
  },
  setup(__props) {
    function showModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.toggle("active");
      }
    }
    ref(usePage().props.auth.user.settings.profile_banner_enabled);
    const ActiveCategory = ref("General");
    function setActiveCategory(category) {
      ActiveCategory.value = category;
    }
    function changeCountry(country2) {
      axios.post(route(`api.settings.changeCountry`, { country: country2 })).then((response) => {
        console.error("Success:", response);
      }).catch((error) => {
        console.error("Error setting your country:", error);
      });
      console.log(country2);
    }
    const currentTheme = localStorage.getItem("theme");
    const isVerifiedEmail = computed(() => {
      return usePage().props.auth.user.settings.verified_email || false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_portal = resolveComponent("portal");
      const _directive_tippy = resolveDirective("tippy");
      let _temp0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        pageTitle: "Account Settings",
        description: "Change your account Settings.",
        url: unref(route)(`user.settings.page`)
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, {
        alertsEnabled: false,
        image: unref(usePage)().props.auth.user.settings.profile_banner_enabled ? unref(usePage)().props.auth.user.settings.profile_banner_url : null,
        superBanActive: true,
        OfficialImageBackground: false,
        superBanType: "image"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<template${_scopeId}>`);
            _push2(ssrRenderComponent(_component_portal, { to: "bannerAsset" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VLazyImage), {
                    style: unref(usePage)().props.auth.user.settings.calling_card_enabled ? {
                      margin: "0",
                      "background-image": "url(" + unref(usePage)().props.auth.user.settings.calling_card_url + ")",
                      "background-repeat": "no-repeat",
                      "background-size": "cover",
                      "box-shadow": "inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important"
                    } : null,
                    src: unref(usePage)().props.auth.user.headshot,
                    width: "100",
                    class: "space-image",
                    alt: "Headshot",
                    "src-placeholder": "assets/img/space-error.png"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VLazyImage), {
                      style: unref(usePage)().props.auth.user.settings.calling_card_enabled ? {
                        margin: "0",
                        "background-image": "url(" + unref(usePage)().props.auth.user.settings.calling_card_url + ")",
                        "background-repeat": "no-repeat",
                        "background-size": "cover",
                        "box-shadow": "inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important"
                      } : null,
                      src: unref(usePage)().props.auth.user.headshot,
                      width: "100",
                      class: "space-image",
                      alt: "Headshot",
                      "src-placeholder": "assets/img/space-error.png"
                    }, null, 8, ["style", "src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_portal, { to: "bannerName" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-xl" style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId2}><div class="mb-1 flex-container align-middle gap-1 fw-semibold"${_scopeId2}>${ssrInterpolate(unref(usePage)().props.auth.user.display_name)} `);
                  if (unref(usePage)().props.auth.user.staff) {
                    _push3(`<i${ssrRenderAttrs(_temp0 = mergeProps({
                      content: unref(usePage)().props.auth.user.staff.Position,
                      class: "fad fa-gavel text-danger"
                    }, ssrGetDirectiveProps(_ctx, _directive_tippy, { placement: "bottom" })))}${_scopeId2}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</i>`);
                  } else if (unref(usePage)().props.auth.user.settings.beta_tester) {
                    _push3(`<i class="fad fa-hard-hat text-success"${_scopeId2}></i>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(VLazyImage), {
                    src: "/assets/img/flags/" + unref(usePage)().props.auth.user.settings.country_code + ".svg",
                    alt: "Country Flag",
                    style: { "width": "auto", "height": "20px" },
                    "src-placeholder": "/assets/img/flags/other/pirate.svg"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="text-sm text-muted fw-semibold"${_scopeId2}> Profile Preview </div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "text-xl",
                      style: { "line-height": "16px" }
                    }, [
                      createVNode("div", { class: "mb-1 flex-container align-middle gap-1 fw-semibold" }, [
                        createTextVNode(toDisplayString(unref(usePage)().props.auth.user.display_name) + " ", 1),
                        unref(usePage)().props.auth.user.staff ? withDirectives((openBlock(), createBlock("i", {
                          key: 0,
                          content: unref(usePage)().props.auth.user.staff.Position,
                          class: "fad fa-gavel text-danger"
                        }, null, 8, ["content"])), [
                          [_directive_tippy, { placement: "bottom" }]
                        ]) : unref(usePage)().props.auth.user.settings.beta_tester ? (openBlock(), createBlock("i", {
                          key: 1,
                          class: "fad fa-hard-hat text-success"
                        })) : createCommentVNode("", true),
                        createVNode(unref(VLazyImage), {
                          src: "/assets/img/flags/" + unref(usePage)().props.auth.user.settings.country_code + ".svg",
                          alt: "Country Flag",
                          style: { "width": "auto", "height": "20px" },
                          "src-placeholder": "/assets/img/flags/other/pirate.svg"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "text-sm text-muted fw-semibold" }, " Profile Preview ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_portal, { to: "bannerButtons" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button${ssrRenderAttrs(mergeProps({
                    class: "text-lg text-success squish",
                    content: "Change Calling Card"
                  }, ssrGetDirectiveProps(_ctx, _directive_tippy, { placement: "bottom" })))}${_scopeId2}><i class="fad fa-user"${_scopeId2}></i></button><button${ssrRenderAttrs(mergeProps({
                    class: "text-lg text-info squish",
                    content: "Change Banner"
                  }, ssrGetDirectiveProps(_ctx, _directive_tippy, { placement: "bottom" })))}${_scopeId2}><i class="fad fa-pen"${_scopeId2}></i></button>`);
                } else {
                  return [
                    withDirectives((openBlock(), createBlock("button", {
                      class: "text-lg text-success squish",
                      content: "Change Calling Card"
                    }, [
                      createVNode("i", { class: "fad fa-user" })
                    ])), [
                      [_directive_tippy, { placement: "bottom" }]
                    ]),
                    withDirectives((openBlock(), createBlock("button", {
                      onClick: ($event) => showModal("banner-modal"),
                      class: "text-lg text-info squish",
                      content: "Change Banner"
                    }, [
                      createVNode("i", { class: "fad fa-pen" })
                    ], 8, ["onClick"])), [
                      [_directive_tippy, { placement: "bottom" }]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</template><div class="modal" id="email-modal"${_scopeId}><div class="modal-card modal-card-body modal-card-sm"${_scopeId}><div class="section-borderless"${_scopeId}><div class="gap-2 align-middle flex-container align-justify"${_scopeId}><div class="text-lg fw-semibold"${_scopeId}>Change Email</div><button class="btn-circle" data-toggle-modal="#email-modal" style="${ssrRenderStyle({ "margin-right": "-10px" })}"${_scopeId}><i class="fad fa-times"${_scopeId}></i></button></div></div><div class="section-borderless"${_scopeId}><div class="mb-2"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> New Email </div><input type="text" class="form" placeholder="New Email..."${_scopeId}></div><div class="mb-2"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Password </div><input type="password" class="form" placeholder="Password..."${_scopeId}></div><div class="text-xs text-muted fw-semibold"${_scopeId}> After changing your email address, a confirmation email will be sent to your inbox to confirm your identity. </div></div><div class="flex-wrap gap-2 flex-container justify-content-end section-borderless"${_scopeId}><button class="btn btn-secondary"${_scopeId}> Cancel </button><input type="submit" class="btn btn-success" value="Change Email"${_scopeId}></div></div></div><div class="modal" id="banner-modal"${_scopeId}><div class="modal-card modal-card-body modal-card-sm"${_scopeId}><div class="section-borderless"${_scopeId}><div class="gap-2 align-middle flex-container align-justify"${_scopeId}><div class="text-lg fw-semibold"${_scopeId}>Change Banner</div><button class="btn-circle" data-toggle-modal="#email-modal" style="${ssrRenderStyle({ "margin-right": "-10px" })}"${_scopeId}><i class="fad fa-times"${_scopeId}></i></button></div></div><div class="section-borderless"${_scopeId}><div class="mb-1"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Visibility </div><button class="btn btn-success btn-sm w-100"${_scopeId}> Enable Banner</button></div><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(Upload, { modal: "" }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-xs text-muted fw-semibold"${_scopeId}> After changing your email address, a confirmation email will be sent to your inbox to confirm your identity. </div></div><div class="flex-wrap gap-2 flex-container justify-content-end section-borderless"${_scopeId}><button class="btn btn-secondary"${_scopeId}> Cancel </button><input type="submit" class="btn btn-success" value="Change Email"${_scopeId}></div></div></div><div class="modal" id="username-modal"${_scopeId}><div class="modal-card modal-card-body modal-card-sm"${_scopeId}><div class="section-borderless"${_scopeId}><div class="gap-2 align-middle flex-container align-justify"${_scopeId}><div class="text-lg fw-semibold"${_scopeId}>Change Username</div><button class="btn-circle" data-toggle-modal="#username-modal" style="${ssrRenderStyle({ "margin-right": "-10px" })}"${_scopeId}><i class="fad fa-times"${_scopeId}></i></button></div></div><div class="section-borderless"${_scopeId}><div class="mb-2"${_scopeId}><div class="text-xs fw-bold text-danger text-uppercase"${_scopeId}> Username </div><input type="text" class="form" placeholder="New Username..."${_scopeId}><div class="text-xs text-danger fw-semibold"${_scopeId}> This username is already taken. Try @Nabrious123 instead. </div></div><div class="mb-2"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Password </div><input type="password" class="form" placeholder="Password..."${_scopeId}></div><div class="text-xs text-muted fw-semibold"${_scopeId}> Changing your username costs <span class="mx-1 text-success"${_scopeId}><i class="fad fa-money-bill-1-wave"${_scopeId}></i> ${ssrInterpolate(unref(usePage)().props.site.price.username)} Bucks </span></div></div><div class="flex-wrap gap-2 flex-container justify-content-end section-borderless"${_scopeId}><button class="btn btn-secondary"${_scopeId}> Cancel </button><input type="submit" class="btn btn-success" value="Change Username"${_scopeId}></div></div></div><div class="modal" id="displayname-modal"${_scopeId}><div class="modal-card modal-card-body modal-card-sm"${_scopeId}><div class="section-borderless"${_scopeId}><div class="gap-2 align-middle flex-container align-justify"${_scopeId}><div class="text-lg fw-semibold"${_scopeId}> Change Display Name </div><button class="btn-circle" style="${ssrRenderStyle({ "margin-right": "-10px" })}"${_scopeId}><i class="fad fa-times"${_scopeId}></i></button></div></div><div class="section-borderless"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> New Display Name </div><input type="text" class="mb-2 form" placeholder="New Display Name..."${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Password </div><input type="password" class="mb-2 form" placeholder="Password..."${_scopeId}><div class="text-xs text-muted fw-semibold"${_scopeId}> Changing your your display name is free but can only be done once every two weeks. </div></div><div class="flex-wrap gap-2 flex-container justify-content-end section-borderless"${_scopeId}><button class="btn btn-secondary"${_scopeId}> Cancel </button><input type="submit" class="btn btn-success" value="Change Display Name"${_scopeId}></div></div></div><div class="cell medium-3"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}>Account Settings</div><ul class="tabs flex-dir-column"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.categories, (category) => {
              _push2(`<li class="tab-item"${_scopeId}><a href="#" class="${ssrRenderClass([{ active: category === ActiveCategory.value }, "tab-link squish"])}"${_scopeId}>${ssrInterpolate(_ctx.capitalized(category))}</a></li>`);
            });
            _push2(`<!--]--></ul></div><div class="cell medium-8"${_scopeId}>`);
            if (ActiveCategory.value === "General") {
              _push2(`<div${_scopeId}><div class="mb-2 gap-4 align-middle flex-container align-justify"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}>General</div><div class="gap-2 align-middle flex-container-lg"${_scopeId}><select class="mb-2 form form-xs form-select form-has-section-color"${_scopeId}><!--[-->`);
              ssrRenderList(unref(usePage)().props.countries, (country2) => {
                _push2(`<option${ssrRenderAttr("value", country2.code)}${_scopeId}>${ssrInterpolate(country2.name)}</option>`);
              });
              _push2(`<!--]--></select></div></div><div class="section-borderless"${_scopeId}><div class="card card-body"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}> Account Information </div><div class="section-borderless"${_scopeId}><div class="grid-x grid-margin-x"${_scopeId}><div class="mb-3 cell medium-6"${_scopeId}><div class="gap-2 align-middle card card-body card-inner flex-container align-justify h-100"${_scopeId}><div class="min-w-0"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> User ID </div><div class="text-truncate fw-semibold"${_scopeId}>${ssrInterpolate(unref(usePage)().props.auth.user.id)}</div></div>`);
              _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
              _push2(`</div></div><div class="mb-3 cell medium-6"${_scopeId}><div class="gap-2 align-middle card card-body card-inner flex-container align-justify"${_scopeId}><div class="min-w-0"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Username </div><div class="text-truncate fw-semibold"${_scopeId}>${ssrInterpolate("@" + unref(usePage)().props.auth.user.username)}</div></div><button class="btn btn-info btn-circle"${_scopeId}><i class="fad fa-pencil"${_scopeId}></i></button></div></div><div class="mb-3 cell medium-6"${_scopeId}><div class="gap-2 align-middle card card-body card-inner flex-container align-justify"${_scopeId}><div class="min-w-0"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Display Name </div><div class="text-truncate fw-semibold"${_scopeId}>${ssrInterpolate(unref(usePage)().props.auth.user.display_name)}</div></div><button class="btn btn-info btn-circle"${_scopeId}><i class="fad fa-pencil"${_scopeId}></i></button></div></div><div class="mb-3 cell medium-6"${_scopeId}><div class="gap-2 align-middle card card-body card-inner flex-container align-justify"${_scopeId}><div class="min-w-0"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Email Address <span style="${ssrRenderStyle({ "font-size": "10px" })}" class="${ssrRenderClass([{ "text-success": isVerifiedEmail.value, "text-danger": !isVerifiedEmail.value }, "ms-2"])}"${_scopeId}><i class="${ssrRenderClass([{ "fa-check": isVerifiedEmail.value, "fa-times": !isVerifiedEmail.value }, "fad me-1"])}"${_scopeId}></i> ${ssrInterpolate(isVerifiedEmail.value ? "Verified" : "Unverified")}</span></div><div class="text-truncate fw-semibold"${_scopeId}>${ssrInterpolate(unref(usePage)().props.auth.user.email)}</div></div><button class="btn btn-info btn-circle"${_scopeId}><i class="fad fa-pen"${_scopeId}></i></button></div></div><div class="mb-3 cell medium-6"${_scopeId}><div class="gap-2 align-middle card card-body card-inner flex-container align-justify"${_scopeId}><div class="min-w-0"${_scopeId}><div class="text-xs text-truncate fw-bold text-muted text-uppercase"${_scopeId}> Date of Birth </div><div class="text-truncate fw-semibold"${_scopeId}>${ssrInterpolate(unref(usePage)().props.auth.user.birthdate)}</div><div class="text-xs fw-semibold text-muted"${_scopeId}> If you want to change your date of birth, <a href="#"${_scopeId}>contact support</a>. </div></div></div></div></div><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> About You </div><div class="mb-3 position-relative"${_scopeId}><textarea class="form form-has-button pe-5" rows="5"${_scopeId}>${ssrInterpolate(unref(usePage)().props.auth.user.about_me)}</textarea><input type="button" class="btn btn-success btn-sm" value="Update" style="${ssrRenderStyle({ "position": "absolute", "bottom": "10px", "right": "10px" })}"${_scopeId}></div><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Forum Signature </div><div class="gap-2 align-middle flex-container"${_scopeId}><input type="text" class="form form-sm btn-sm"${ssrRenderAttr("value", unref(usePage)().props.auth.user.Signature)}${_scopeId}><input type="submit" class="btn btn-success btn-sm" value="Update"${_scopeId}></div></div></div></div><div class="section-borderless"${_scopeId}><div class="card card-body"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}> Website Theme </div><div id="theme-switcher-container" class="grid-x grid-margin-x grid-padding-y"${_scopeId}><!--[-->`);
              ssrRenderList(_ctx.themes, (theme, index) => {
                _push2(`<div class="cell large-6"${_scopeId}><div class="${ssrRenderClass([{ active: unref(currentTheme) === theme.lowercase }, "mb-2 theme-selection squish card card-body card-inner mb-lg-0"])}"${ssrRenderAttr("id", theme.lowercase + "-theme-btn")}${_scopeId}><div class="gap-4 align-middle flex-container"${_scopeId}><div class="selection-circle flex-child-grow show-for-large"${_scopeId}></div><div class="gap-1 align-middle flex-container flex-dir-column" style="${ssrRenderStyle({ "min-width": "0" })}"${_scopeId}><div class="${ssrRenderClass("theme-circle " + theme.lowercase)}"${_scopeId}></div><div class="text-lg fw-semibold text-truncate"${_scopeId}>${ssrInterpolate(theme.name)} Theme </div><div class="selection-circle flex-child-grow show-for-small hide-for-large"${_scopeId}></div></div></div></div></div>`);
              });
              _push2(`<!--]--></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (ActiveCategory.value === "Security & Privacy") {
              _push2(`<div${_scopeId}><div class="mb-1 text-xl fw-semibold"${_scopeId}> Security &amp; Privacy </div><div class="section-borderless"${_scopeId}><div class="card card-body"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}>Security</div><div class="cell medium-12"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
              _push2(`</div></div></div><div class="section-borderless"${_scopeId}><div class="card card-body"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}>Other</div><div class="mb-3 card card-inner card-body"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}> Privacy </div><div class="mb-2"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Who Can view My Profile </div><select class="form form-select form-has-section-color"${_scopeId}><option value="1"${_scopeId}>Everyone</option><option value="2"${_scopeId}>No One</option></select></div><div class="mb-2"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Who Can See My Posts? </div><select class="form form-select form-has-section-color"${_scopeId}><option value="1"${_scopeId}>Everyone</option><option value="2"${_scopeId}> Followers Only </option></select></div><div class="mb-2"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Who Can Send Me Messages </div><select class="form form-select form-has-section-color"${_scopeId}><option value="1"${_scopeId}>Everyone</option><option value="2"${_scopeId}> Followers Only </option><option value="3"${_scopeId}>No One</option></select></div><div class="mb-2"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Who Can Send Me Trade Requests </div><select class="form form-select form-has-section-color"${_scopeId}><option value="1"${_scopeId}>Everyone</option><option value="2"${_scopeId}> Followers Only </option><option value="3"${_scopeId}>No One</option></select></div><button class="btn btn-success"${_scopeId}> Save Settings </button></div><div class="card card-inner card-body"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}> Blocked Players </div><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Player Username </div><div class="gap-2 mb-2 flex-container"${_scopeId}><input type="text" class="form form-has-section-color" placeholder="Player Username..."${_scopeId}><button class="btn btn-danger"${_scopeId}> Block </button></div><div class="card card-body"${_scopeId}><div class="gap-3 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fad fa-user-slash text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No Blocked Players </div><div class="text-xs text-muted fw-semibold"${_scopeId}> Yahoo! You have not blocked any players. </div></div></div></div></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (ActiveCategory.value === "Billing") {
              _push2(`<div${_scopeId}><div class="mb-2 align-middle flex-container align-justify"${_scopeId}><div class="text-xl fw-semibold"${_scopeId}>Billing</div><a href="#" class="btn btn-upgrade btn-sm"${_scopeId}><i class="fad fa-rocket-launch me-2"${_scopeId}></i>Upgrade</a></div><div class="mb-3 card card-body"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}> Active Membership </div><div class="card card-inner card-body"${_scopeId}><div class="gap-3 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fad fa-rocket-launch text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No Active Membership </div><div class="text-xs text-muted fw-semibold"${_scopeId}> You currently do not have any active membership to manage. </div></div></div></div></div><div class="card card-body"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}> Previous Purchases </div><div class="card card-inner card-body"${_scopeId}><div class="gap-3 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fad fa-envelope-open-text text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No Previous Purchases </div><div class="text-xs text-muted fw-semibold"${_scopeId}> You have not made any purchases. </div></div></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("template", null, [
                createVNode(_component_portal, { to: "bannerAsset" }, {
                  default: withCtx(() => [
                    createVNode(unref(VLazyImage), {
                      style: unref(usePage)().props.auth.user.settings.calling_card_enabled ? {
                        margin: "0",
                        "background-image": "url(" + unref(usePage)().props.auth.user.settings.calling_card_url + ")",
                        "background-repeat": "no-repeat",
                        "background-size": "cover",
                        "box-shadow": "inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important"
                      } : null,
                      src: unref(usePage)().props.auth.user.headshot,
                      width: "100",
                      class: "space-image",
                      alt: "Headshot",
                      "src-placeholder": "assets/img/space-error.png"
                    }, null, 8, ["style", "src"])
                  ]),
                  _: 1
                }),
                createVNode(_component_portal, { to: "bannerName" }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "text-xl",
                      style: { "line-height": "16px" }
                    }, [
                      createVNode("div", { class: "mb-1 flex-container align-middle gap-1 fw-semibold" }, [
                        createTextVNode(toDisplayString(unref(usePage)().props.auth.user.display_name) + " ", 1),
                        unref(usePage)().props.auth.user.staff ? withDirectives((openBlock(), createBlock("i", {
                          key: 0,
                          content: unref(usePage)().props.auth.user.staff.Position,
                          class: "fad fa-gavel text-danger"
                        }, null, 8, ["content"])), [
                          [_directive_tippy, { placement: "bottom" }]
                        ]) : unref(usePage)().props.auth.user.settings.beta_tester ? (openBlock(), createBlock("i", {
                          key: 1,
                          class: "fad fa-hard-hat text-success"
                        })) : createCommentVNode("", true),
                        createVNode(unref(VLazyImage), {
                          src: "/assets/img/flags/" + unref(usePage)().props.auth.user.settings.country_code + ".svg",
                          alt: "Country Flag",
                          style: { "width": "auto", "height": "20px" },
                          "src-placeholder": "/assets/img/flags/other/pirate.svg"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "text-sm text-muted fw-semibold" }, " Profile Preview ")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_portal, { to: "bannerButtons" }, {
                  default: withCtx(() => [
                    withDirectives((openBlock(), createBlock("button", {
                      class: "text-lg text-success squish",
                      content: "Change Calling Card"
                    }, [
                      createVNode("i", { class: "fad fa-user" })
                    ])), [
                      [_directive_tippy, { placement: "bottom" }]
                    ]),
                    withDirectives((openBlock(), createBlock("button", {
                      onClick: ($event) => showModal("banner-modal"),
                      class: "text-lg text-info squish",
                      content: "Change Banner"
                    }, [
                      createVNode("i", { class: "fad fa-pen" })
                    ], 8, ["onClick"])), [
                      [_directive_tippy, { placement: "bottom" }]
                    ])
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", {
                class: "modal",
                id: "email-modal"
              }, [
                createVNode("div", { class: "modal-card modal-card-body modal-card-sm" }, [
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "gap-2 align-middle flex-container align-justify" }, [
                      createVNode("div", { class: "text-lg fw-semibold" }, "Change Email"),
                      createVNode("button", {
                        onClick: ($event) => showModal("email-modal"),
                        class: "btn-circle",
                        "data-toggle-modal": "#email-modal",
                        style: { "margin-right": "-10px" }
                      }, [
                        createVNode("i", { class: "fad fa-times" })
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " New Email "),
                      createVNode("input", {
                        type: "text",
                        class: "form",
                        placeholder: "New Email..."
                      })
                    ]),
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Password "),
                      createVNode("input", {
                        type: "password",
                        class: "form",
                        placeholder: "Password..."
                      })
                    ]),
                    createVNode("div", { class: "text-xs text-muted fw-semibold" }, " After changing your email address, a confirmation email will be sent to your inbox to confirm your identity. ")
                  ]),
                  createVNode("div", { class: "flex-wrap gap-2 flex-container justify-content-end section-borderless" }, [
                    createVNode("button", {
                      class: "btn btn-secondary",
                      onClick: ($event) => showModal("email-modal")
                    }, " Cancel ", 8, ["onClick"]),
                    createVNode("input", {
                      type: "submit",
                      class: "btn btn-success",
                      value: "Change Email"
                    })
                  ])
                ])
              ]),
              createVNode("div", {
                class: "modal",
                id: "banner-modal"
              }, [
                createVNode("div", { class: "modal-card modal-card-body modal-card-sm" }, [
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "gap-2 align-middle flex-container align-justify" }, [
                      createVNode("div", { class: "text-lg fw-semibold" }, "Change Banner"),
                      createVNode("button", {
                        onClick: ($event) => showModal("email-modal"),
                        class: "btn-circle",
                        "data-toggle-modal": "#email-modal",
                        style: { "margin-right": "-10px" }
                      }, [
                        createVNode("i", { class: "fad fa-times" })
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "mb-1" }, [
                      createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Visibility "),
                      createVNode("button", {
                        onChange: ($event) => changeCountry($event.target.value),
                        class: "btn btn-success btn-sm w-100"
                      }, " Enable Banner", 40, ["onChange"])
                    ]),
                    createVNode("div", { class: "mb-2" }, [
                      createVNode(Upload, { modal: "" })
                    ]),
                    createVNode("div", { class: "text-xs text-muted fw-semibold" }, " After changing your email address, a confirmation email will be sent to your inbox to confirm your identity. ")
                  ]),
                  createVNode("div", { class: "flex-wrap gap-2 flex-container justify-content-end section-borderless" }, [
                    createVNode("button", {
                      class: "btn btn-secondary",
                      onClick: ($event) => showModal("banner-modal")
                    }, " Cancel ", 8, ["onClick"]),
                    createVNode("input", {
                      type: "submit",
                      class: "btn btn-success",
                      value: "Change Email"
                    })
                  ])
                ])
              ]),
              createVNode("div", {
                class: "modal",
                id: "username-modal"
              }, [
                createVNode("div", { class: "modal-card modal-card-body modal-card-sm" }, [
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "gap-2 align-middle flex-container align-justify" }, [
                      createVNode("div", { class: "text-lg fw-semibold" }, "Change Username"),
                      createVNode("button", {
                        onClick: ($event) => showModal("username-modal"),
                        class: "btn-circle",
                        "data-toggle-modal": "#username-modal",
                        style: { "margin-right": "-10px" }
                      }, [
                        createVNode("i", { class: "fad fa-times" })
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("div", { class: "text-xs fw-bold text-danger text-uppercase" }, " Username "),
                      createVNode("input", {
                        type: "text",
                        class: "form",
                        placeholder: "New Username..."
                      }),
                      createVNode("div", { class: "text-xs text-danger fw-semibold" }, " This username is already taken. Try @Nabrious123 instead. ")
                    ]),
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Password "),
                      createVNode("input", {
                        type: "password",
                        class: "form",
                        placeholder: "Password..."
                      })
                    ]),
                    createVNode("div", { class: "text-xs text-muted fw-semibold" }, [
                      createTextVNode(" Changing your username costs "),
                      createVNode("span", { class: "mx-1 text-success" }, [
                        createVNode("i", { class: "fad fa-money-bill-1-wave" }),
                        createTextVNode(" " + toDisplayString(unref(usePage)().props.site.price.username) + " Bucks ", 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex-wrap gap-2 flex-container justify-content-end section-borderless" }, [
                    createVNode("button", {
                      class: "btn btn-secondary",
                      onClick: ($event) => showModal("username-modal")
                    }, " Cancel ", 8, ["onClick"]),
                    createVNode("input", {
                      type: "submit",
                      class: "btn btn-success",
                      value: "Change Username"
                    })
                  ])
                ])
              ]),
              createVNode("div", {
                class: "modal",
                id: "displayname-modal"
              }, [
                createVNode("div", { class: "modal-card modal-card-body modal-card-sm" }, [
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "gap-2 align-middle flex-container align-justify" }, [
                      createVNode("div", { class: "text-lg fw-semibold" }, " Change Display Name "),
                      createVNode("button", {
                        class: "btn-circle",
                        onClick: ($event) => showModal("displayname-modal"),
                        style: { "margin-right": "-10px" }
                      }, [
                        createVNode("i", { class: "fad fa-times" })
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " New Display Name "),
                    createVNode("input", {
                      type: "text",
                      class: "mb-2 form",
                      placeholder: "New Display Name..."
                    }),
                    createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Password "),
                    createVNode("input", {
                      type: "password",
                      class: "mb-2 form",
                      placeholder: "Password..."
                    }),
                    createVNode("div", { class: "text-xs text-muted fw-semibold" }, " Changing your your display name is free but can only be done once every two weeks. ")
                  ]),
                  createVNode("div", { class: "flex-wrap gap-2 flex-container justify-content-end section-borderless" }, [
                    createVNode("button", {
                      class: "btn btn-secondary",
                      onClick: ($event) => showModal("displayname-modal")
                    }, " Cancel ", 8, ["onClick"]),
                    createVNode("input", {
                      type: "submit",
                      class: "btn btn-success",
                      value: "Change Display Name"
                    })
                  ])
                ])
              ]),
              createVNode("div", { class: "cell medium-3" }, [
                createVNode("div", { class: "mb-2 text-xl fw-semibold" }, "Account Settings"),
                createVNode("ul", { class: "tabs flex-dir-column" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.categories, (category) => {
                    return openBlock(), createBlock("li", { class: "tab-item" }, [
                      createVNode("a", {
                        href: "#",
                        onClick: ($event) => setActiveCategory(category),
                        class: [{ active: category === ActiveCategory.value }, "tab-link squish"]
                      }, toDisplayString(_ctx.capitalized(category)), 11, ["onClick"])
                    ]);
                  }), 256))
                ])
              ]),
              createVNode("div", { class: "cell medium-8" }, [
                ActiveCategory.value === "General" ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("div", { class: "mb-2 gap-4 align-middle flex-container align-justify" }, [
                    createVNode("div", { class: "mb-2 text-xl fw-semibold" }, "General"),
                    createVNode("div", { class: "gap-2 align-middle flex-container-lg" }, [
                      createVNode("select", {
                        onChange: ($event) => changeCountry($event.target.value),
                        class: "mb-2 form form-xs form-select form-has-section-color"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(usePage)().props.countries, (country2) => {
                          return openBlock(), createBlock("option", {
                            key: country2.code,
                            value: country2.code
                          }, toDisplayString(country2.name), 9, ["value"]);
                        }), 128))
                      ], 40, ["onChange"])
                    ])
                  ]),
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "card card-body" }, [
                      createVNode("div", { class: "mb-2 text-xl fw-semibold" }, " Account Information "),
                      createVNode("div", { class: "section-borderless" }, [
                        createVNode("div", { class: "grid-x grid-margin-x" }, [
                          createVNode("div", { class: "mb-3 cell medium-6" }, [
                            createVNode("div", { class: "gap-2 align-middle card card-body card-inner flex-container align-justify h-100" }, [
                              createVNode("div", { class: "min-w-0" }, [
                                createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " User ID "),
                                createVNode("div", { class: "text-truncate fw-semibold" }, toDisplayString(unref(usePage)().props.auth.user.id), 1)
                              ]),
                              createVNode(_sfc_main$4)
                            ])
                          ]),
                          createVNode("div", { class: "mb-3 cell medium-6" }, [
                            createVNode("div", { class: "gap-2 align-middle card card-body card-inner flex-container align-justify" }, [
                              createVNode("div", { class: "min-w-0" }, [
                                createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Username "),
                                createVNode("div", { class: "text-truncate fw-semibold" }, toDisplayString("@" + unref(usePage)().props.auth.user.username), 1)
                              ]),
                              createVNode("button", {
                                class: "btn btn-info btn-circle",
                                onClick: ($event) => showModal("username-modal")
                              }, [
                                createVNode("i", { class: "fad fa-pencil" })
                              ], 8, ["onClick"])
                            ])
                          ]),
                          createVNode("div", { class: "mb-3 cell medium-6" }, [
                            createVNode("div", { class: "gap-2 align-middle card card-body card-inner flex-container align-justify" }, [
                              createVNode("div", { class: "min-w-0" }, [
                                createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Display Name "),
                                createVNode("div", { class: "text-truncate fw-semibold" }, toDisplayString(unref(usePage)().props.auth.user.display_name), 1)
                              ]),
                              createVNode("button", {
                                class: "btn btn-info btn-circle",
                                onClick: ($event) => showModal("displayname-modal")
                              }, [
                                createVNode("i", { class: "fad fa-pencil" })
                              ], 8, ["onClick"])
                            ])
                          ]),
                          createVNode("div", { class: "mb-3 cell medium-6" }, [
                            createVNode("div", { class: "gap-2 align-middle card card-body card-inner flex-container align-justify" }, [
                              createVNode("div", { class: "min-w-0" }, [
                                createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, [
                                  createTextVNode(" Email Address "),
                                  createVNode("span", {
                                    style: { "font-size": "10px" },
                                    class: [{ "text-success": isVerifiedEmail.value, "text-danger": !isVerifiedEmail.value }, "ms-2"]
                                  }, [
                                    createVNode("i", {
                                      class: ["fad me-1", { "fa-check": isVerifiedEmail.value, "fa-times": !isVerifiedEmail.value }]
                                    }, null, 2),
                                    createTextVNode(" " + toDisplayString(isVerifiedEmail.value ? "Verified" : "Unverified"), 1)
                                  ], 2)
                                ]),
                                createVNode("div", { class: "text-truncate fw-semibold" }, toDisplayString(unref(usePage)().props.auth.user.email), 1)
                              ]),
                              createVNode("button", {
                                class: "btn btn-info btn-circle",
                                onClick: ($event) => showModal("email-modal")
                              }, [
                                createVNode("i", { class: "fad fa-pen" })
                              ], 8, ["onClick"])
                            ])
                          ]),
                          createVNode("div", { class: "mb-3 cell medium-6" }, [
                            createVNode("div", { class: "gap-2 align-middle card card-body card-inner flex-container align-justify" }, [
                              createVNode("div", { class: "min-w-0" }, [
                                createVNode("div", { class: "text-xs text-truncate fw-bold text-muted text-uppercase" }, " Date of Birth "),
                                createVNode("div", { class: "text-truncate fw-semibold" }, toDisplayString(unref(usePage)().props.auth.user.birthdate), 1),
                                createVNode("div", { class: "text-xs fw-semibold text-muted" }, [
                                  createTextVNode(" If you want to change your date of birth, "),
                                  createVNode("a", { href: "#" }, "contact support"),
                                  createTextVNode(". ")
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " About You "),
                        createVNode("div", { class: "mb-3 position-relative" }, [
                          createVNode("textarea", {
                            class: "form form-has-button pe-5",
                            rows: "5"
                          }, toDisplayString(unref(usePage)().props.auth.user.about_me), 1),
                          createVNode("input", {
                            type: "button",
                            class: "btn btn-success btn-sm",
                            value: "Update",
                            style: { "position": "absolute", "bottom": "10px", "right": "10px" }
                          })
                        ]),
                        createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Forum Signature "),
                        createVNode("div", { class: "gap-2 align-middle flex-container" }, [
                          createVNode("input", {
                            type: "text",
                            class: "form form-sm btn-sm",
                            value: unref(usePage)().props.auth.user.Signature
                          }, null, 8, ["value"]),
                          createVNode("input", {
                            type: "submit",
                            class: "btn btn-success btn-sm",
                            value: "Update"
                          })
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "card card-body" }, [
                      createVNode("div", { class: "mb-2 text-xl fw-semibold" }, " Website Theme "),
                      createVNode("div", {
                        id: "theme-switcher-container",
                        class: "grid-x grid-margin-x grid-padding-y"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.themes, (theme, index) => {
                          return openBlock(), createBlock("div", {
                            class: "cell large-6",
                            key: index
                          }, [
                            createVNode("div", {
                              class: [{ active: unref(currentTheme) === theme.lowercase }, "mb-2 theme-selection squish card card-body card-inner mb-lg-0"],
                              id: theme.lowercase + "-theme-btn",
                              onClick: ($event) => _ctx.setTheme(theme.lowercase)
                            }, [
                              createVNode("div", { class: "gap-4 align-middle flex-container" }, [
                                createVNode("div", { class: "selection-circle flex-child-grow show-for-large" }),
                                createVNode("div", {
                                  class: "gap-1 align-middle flex-container flex-dir-column",
                                  style: { "min-width": "0" }
                                }, [
                                  createVNode("div", {
                                    class: "theme-circle " + theme.lowercase
                                  }, null, 2),
                                  createVNode("div", { class: "text-lg fw-semibold text-truncate" }, toDisplayString(theme.name) + " Theme ", 1),
                                  createVNode("div", { class: "selection-circle flex-child-grow show-for-small hide-for-large" })
                                ])
                              ])
                            ], 10, ["id", "onClick"])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true),
                ActiveCategory.value === "Security & Privacy" ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "mb-1 text-xl fw-semibold" }, " Security & Privacy "),
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "card card-body" }, [
                      createVNode("div", { class: "mb-2 text-xl fw-semibold" }, "Security"),
                      createVNode("div", { class: "cell medium-12" }, [
                        createVNode(_sfc_main$5)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "card card-body" }, [
                      createVNode("div", { class: "mb-2 text-xl fw-semibold" }, "Other"),
                      createVNode("div", { class: "mb-3 card card-inner card-body" }, [
                        createVNode("div", { class: "mb-2 text-xl fw-semibold" }, " Privacy "),
                        createVNode("div", { class: "mb-2" }, [
                          createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Who Can view My Profile "),
                          createVNode("select", { class: "form form-select form-has-section-color" }, [
                            createVNode("option", { value: "1" }, "Everyone"),
                            createVNode("option", { value: "2" }, "No One")
                          ])
                        ]),
                        createVNode("div", { class: "mb-2" }, [
                          createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Who Can See My Posts? "),
                          createVNode("select", { class: "form form-select form-has-section-color" }, [
                            createVNode("option", { value: "1" }, "Everyone"),
                            createVNode("option", { value: "2" }, " Followers Only ")
                          ])
                        ]),
                        createVNode("div", { class: "mb-2" }, [
                          createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Who Can Send Me Messages "),
                          createVNode("select", { class: "form form-select form-has-section-color" }, [
                            createVNode("option", { value: "1" }, "Everyone"),
                            createVNode("option", { value: "2" }, " Followers Only "),
                            createVNode("option", { value: "3" }, "No One")
                          ])
                        ]),
                        createVNode("div", { class: "mb-2" }, [
                          createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Who Can Send Me Trade Requests "),
                          createVNode("select", { class: "form form-select form-has-section-color" }, [
                            createVNode("option", { value: "1" }, "Everyone"),
                            createVNode("option", { value: "2" }, " Followers Only "),
                            createVNode("option", { value: "3" }, "No One")
                          ])
                        ]),
                        createVNode("button", { class: "btn btn-success" }, " Save Settings ")
                      ]),
                      createVNode("div", { class: "card card-inner card-body" }, [
                        createVNode("div", { class: "mb-2 text-xl fw-semibold" }, " Blocked Players "),
                        createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Player Username "),
                        createVNode("div", { class: "gap-2 mb-2 flex-container" }, [
                          createVNode("input", {
                            type: "text",
                            class: "form form-has-section-color",
                            placeholder: "Player Username..."
                          }),
                          createVNode("button", { class: "btn btn-danger" }, " Block ")
                        ]),
                        createVNode("div", { class: "card card-body" }, [
                          createVNode("div", { class: "gap-3 text-center flex-container flex-dir-column" }, [
                            createVNode("i", { class: "text-5xl fad fa-user-slash text-muted" }),
                            createVNode("div", { style: { "line-height": "16px" } }, [
                              createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " No Blocked Players "),
                              createVNode("div", { class: "text-xs text-muted fw-semibold" }, " Yahoo! You have not blocked any players. ")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true),
                ActiveCategory.value === "Billing" ? (openBlock(), createBlock("div", { key: 2 }, [
                  createVNode("div", { class: "mb-2 align-middle flex-container align-justify" }, [
                    createVNode("div", { class: "text-xl fw-semibold" }, "Billing"),
                    createVNode("a", {
                      href: "#",
                      class: "btn btn-upgrade btn-sm"
                    }, [
                      createVNode("i", { class: "fad fa-rocket-launch me-2" }),
                      createTextVNode("Upgrade")
                    ])
                  ]),
                  createVNode("div", { class: "mb-3 card card-body" }, [
                    createVNode("div", { class: "mb-2 text-xl fw-semibold" }, " Active Membership "),
                    createVNode("div", { class: "card card-inner card-body" }, [
                      createVNode("div", { class: "gap-3 text-center flex-container flex-dir-column" }, [
                        createVNode("i", { class: "text-5xl fad fa-rocket-launch text-muted" }),
                        createVNode("div", { style: { "line-height": "16px" } }, [
                          createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " No Active Membership "),
                          createVNode("div", { class: "text-xs text-muted fw-semibold" }, " You currently do not have any active membership to manage. ")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card card-body" }, [
                    createVNode("div", { class: "mb-2 text-xl fw-semibold" }, " Previous Purchases "),
                    createVNode("div", { class: "card card-inner card-body" }, [
                      createVNode("div", { class: "gap-3 text-center flex-container flex-dir-column" }, [
                        createVNode("i", { class: "text-5xl fad fa-envelope-open-text text-muted" }),
                        createVNode("div", { style: { "line-height": "16px" } }, [
                          createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " No Previous Purchases "),
                          createVNode("div", { class: "text-xs text-muted fw-semibold" }, " You have not made any purchases. ")
                        ])
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
