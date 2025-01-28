import { defineComponent, resolveDirective, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps } from "vue/server-renderer";
import axios from "axios";
import { route } from "momentum-trail";
import { _ as _sfc_main$1 } from "../ssr.js";
import { usePage } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "vue-tippy";
const __default__ = {
  data() {
    return {
      password: "",
      showError: false,
      errorMsg: "",
      activation: 0,
      classOptions: [
        "text-muted",
        "text-upgrade",
        "text-danger",
        "text-info",
        "text-warning"
      ]
    };
  },
  methods: {
    countClicks() {
      this.activation++;
      this.changeClassByNumber("icon", this.activation, this.classOptions);
      if (this.activation >= 5) {
        this.showModal("DeveloperCode");
      }
    },
    showModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.toggle("active");
      }
    },
    changeClassByNumber(element, val, classes) {
      for (const className of classes) {
        const iconwheel = document.getElementById(element);
        if (!iconwheel) {
          return;
        }
        if (classes.length) {
          iconwheel.classList.add(classes[val]);
          return;
        } else if (val !== 1) {
          iconwheel.classList.remove(className);
        }
      }
    },
    submitPassword() {
      this.showError = false;
      this.errorMsg = "";
      if (!this.password) {
        this.errorMsg = "Please provide a password.";
        this.showError = true;
        return;
      }
      axios.post(route(`maintenance.authenticate.password`), { password: this.password }).then((response) => {
        if (response.data.error) {
          this.errorMsg = response.data.error;
          this.showError = true;
        }
      }).catch((error) => {
        console.error(error);
        this.errorMsg = "An error occurred while processing the request.";
        this.showError = true;
      });
    }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const { props } = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_tippy = resolveDirective("tippy");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Maintenence",
        description: "We are working on " + unref(usePage)().props.site.name + ", We'll be back soon.",
        url: unref(route)(`maintenance.page`),
        maintenance: true
      }, null, _parent));
      _push(`<div class="modal" id="DeveloperCode" data-v-8b951dee><form data-v-8b951dee><div class="modal-card modal-card-body modal-card-sm" data-v-8b951dee><div class="section-borderless" data-v-8b951dee><div class="gap-2 align-middle flex-container align-justify" data-v-8b951dee><div class="text-lg fw-semibold" data-v-8b951dee>Developer Access</div><button class="btn-circle" data-toggle-modal="#DeveloperCode" style="${ssrRenderStyle({ "margin-right": "-10px" })}" data-v-8b951dee><i class="fas fa-times" data-v-8b951dee></i></button></div></div><div class="section-borderless" data-v-8b951dee><div class="mb-2" data-v-8b951dee><div class="text-xs fw-bold text-muted text-uppercase" data-v-8b951dee> Enter Your Developer Code </div><input class="form" type="password" placeholder="Developer Code"${ssrRenderAttr("value", _ctx.password)} data-v-8b951dee></div>`);
      if (_ctx.showError) {
        _push(`<div class="text-xs text-danger fw-semibold" data-v-8b951dee>${ssrInterpolate(_ctx.errorMsg)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="text-xs text-muted fw-semibold" data-v-8b951dee>${ssrInterpolate(unref(usePage)().props.disclaimer)}</div></div><div class="flex-wrap gap-2 flex-container justify-content-end section-borderless" data-v-8b951dee><button class="btn btn-secondary" data-v-8b951dee> Cancel </button><button class="btn btn-info" type="submit" data-v-8b951dee>Enter</button></div></div></form></div><main class="container px-4 text-center flex-dir-column loading-page" data-v-8b951dee><i class="fas fa-screwdriver-wrench fa-gradient text-info text-7xl" focusable="false" id="icon" data-v-8b951dee></i><h1 class="mt-3 mb-0" data-v-8b951dee>We&#39;ll be back soon!</h1><h3 class="mt-0 text-muted" data-v-8b951dee>We&#39;re performing some maintenance at the moment.</h3><div class="flex-wrap gap-2 flex-container justify-content-center align-center section-borderless" data-v-8b951dee>`);
      if (unref(props).site.socials.discord) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: unref(props).site.socials.discord,
          class: "text-2xl footer-media text-muted",
          content: "Join us on Discord"
        }, ssrGetDirectiveProps(_ctx, _directive_tippy)))} data-v-8b951dee><i class="fab fa-discord" data-v-8b951dee></i></a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(props).site.socials.twitter) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: unref(props).site.socials.twitter,
          class: "text-2xl footer-media text-muted",
          content: "Follow us on Twitter"
        }, ssrGetDirectiveProps(_ctx, _directive_tippy)))} data-v-8b951dee><i class="fab fa-twitter" data-v-8b951dee></i></a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(props).site.socials.twitch) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: unref(props).site.socials.twitch,
          class: "text-2xl footer-media text-muted",
          content: "Follow us on Twitch"
        }, ssrGetDirectiveProps(_ctx, _directive_tippy)))} data-v-8b951dee><i class="fab fa-twitch" data-v-8b951dee></i></a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(props).site.socials.tiktok) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: unref(props).site.socials.tiktok,
          class: "text-2xl footer-media text-muted",
          content: "Follow us on TikTok"
        }, ssrGetDirectiveProps(_ctx, _directive_tippy)))} data-v-8b951dee><i class="fab fa-tiktok" data-v-8b951dee></i></a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(props).site.socials.facebook) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: unref(props).site.socials.facebook,
          class: "text-2xl footer-media text-muted",
          content: "Follow us on Facebook"
        }, ssrGetDirectiveProps(_ctx, _directive_tippy)))} data-v-8b951dee><i class="fab fa-facebook" data-v-8b951dee></i></a>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Maintenance/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b951dee"]]);
export {
  Index as default
};
