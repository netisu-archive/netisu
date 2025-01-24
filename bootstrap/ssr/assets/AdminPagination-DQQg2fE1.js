import { defineComponent, mergeProps, createVNode, resolveDynamicComponent, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderVNode, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { usePaginator } from "momentum-paginator";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AdminPagination",
  __ssrInlineRender: true,
  props: {
    pagedata: {}
  },
  setup(__props) {
    const props = __props;
    const { previous, next, pages } = usePaginator(props.pagedata);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "pagination is-centered",
        role: "navigation",
        "aria-label": "pagination"
      }, _attrs))}>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent("Link"), {
        as: "a",
        href: unref(previous).url,
        class: {
          "pagination-previous is-hidden-mobile": unref(previous).isActive,
          "pagination-previous is-hidden-mobile is-disabled": !unref(previous).isActive
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-regular fa-chevron-left"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fa-regular fa-chevron-left" })
            ];
          }
        }),
        _: 1
      }), _parent);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent("Link"), {
        as: "a",
        href: unref(next).url,
        class: {
          "pagination-next is-hidden-mobile": unref(next).isActive,
          "pagination-next is-hidden-mobile is-disabled": !unref(next).isActive
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-regular fa-chevron-right"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fa-regular fa-chevron-right" })
            ];
          }
        }),
        _: 1
      }), _parent);
      _push(`<ul class="pagination-list"><!--[-->`);
      ssrRenderList(unref(pages), (page) => {
        _push(`<li>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent("Link"), {
          as: "button",
          href: page.url,
          class: {
            "pagination-link is-current": page.isCurrent,
            "pagination-link": page.isActive
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(page.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(page.label), 1)
              ];
            }
          }),
          _: 2
        }), _parent);
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AdminPagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
