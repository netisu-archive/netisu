import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Skeletor = resolveComponent("Skeletor");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "cell large-2 medium-3 small-6" }, _attrs))}><div class="d-block"><div class="p-2 mb-1 card card-item position-relative"><div style="${ssrRenderStyle({ "position": "absolute", "bottom": "10px", "left": "10px" })}"></div>`);
  _push(ssrRenderComponent(_component_Skeletor, { height: "120" }, null, _parent));
  _push(`</div><div class="text-body fw-semibold text-truncate">`);
  _push(ssrRenderComponent(_component_Skeletor, { width: "80" }, null, _parent));
  _push(`</div><div class="text-body fw-semibold text-truncate">`);
  _push(ssrRenderComponent(_component_Skeletor, { width: "40" }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ItemCardSkeleton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ItemCardSkeleton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ItemCardSkeleton as I
};
