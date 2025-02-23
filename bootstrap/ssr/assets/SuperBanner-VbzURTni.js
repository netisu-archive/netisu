import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SuperBanner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: {
          "container-navbar": !unref(usePage)().props.site.frontend.sidebar_menu,
          "container": unref(usePage)().props.site.frontend.sidebar_menu
        }
      }, _attrs))}><div class="gap-4 align-middle flex-container" style="${ssrRenderStyle({ "z-index": "1", "position": "relative" })}">`);
      ssrRenderSlot(_ctx.$slots, "bannerAsset", {}, null, _push, _parent);
      _push(`<div class="text-start"><div class="text-2xl fw-semibold">`);
      ssrRenderSlot(_ctx.$slots, "bannerName", {}, null, _push, _parent);
      _push(`</div><div class="text-sm text-truncate fw-semibold text-muted">`);
      ssrRenderSlot(_ctx.$slots, "bannerDescription", {}, null, _push, _parent);
      _push(`</div><div class="gap-2 align-middle flex-container">`);
      ssrRenderSlot(_ctx.$slots, "bannerButtons", {}, null, _push, _parent);
      _push(`</div></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LayoutParts/SuperBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
