import { defineComponent, resolveComponent, mergeProps, unref, withCtx, renderSlot, useSSRContext, ref, computed, createVNode, createTextVNode, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { current, route } from "momentum-trail";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AdminNavLink",
  __ssrInlineRender: true,
  props: {
    link: {},
    active_link: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(ssrRenderComponent(_component_Link, mergeProps({
        href: _ctx.link,
        class: [[unref(current)(_ctx.active_link) ? "has-text-link" : "has-text-white"], "navbar-item"],
        prefetch: ""
      }, _attrs), {
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AdminNavLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AdminNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = ref(false);
    const topbar = [
      {
        url: route(`admin.page`),
        active_link: "admin.page",
        icon: "fad fa-home",
        en: { title: "Dashboard" },
        es: { title: "Dashboard" },
        ru: { title: "Панель приборов" },
        ja: { title: "ダッシュボード" }
      },
      {
        url: route(`admin.users.page`),
        active_link: "admin.users.page",
        icon: "fad fa-user",
        en: { title: "User Search" },
        es: { title: "búsqueda de usuarios" },
        ru: { title: "Поиск пользователей" },
        ja: { title: "ユーザー検索" }
      },
      {
        url: route(`admin.items.page`),
        active_link: "admin.items.*",
        icon: "fad fa-tshirt",
        en: { title: "Item Search" },
        es: { title: "Búsqueda de artículos" },
        ru: { title: "Поиск предметов" },
        ja: { title: "アイテム検索" }
      }
    ];
    const lang = computed(() => props.locale);
    const { props } = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[--><nav class="navbar" role="navigation" aria-label="main navigation"><div class="navbar-brand"><div class="navbar-item has-text-white">${ssrInterpolate(unref(props).site.name)} Administration </div><a${ssrRenderAttr("aria-expanded", isActive.value)} class="${ssrRenderClass([{ "is-active": isActive.value }, "navbar-burger"])}" role="button" aria-label="menu" data-target="collapse"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></a></div><div id="navbar " class="${ssrRenderClass([{ "is-active": isActive.value }, "navbar-menu"])}"><div class="navbar-start"><a class="navbar-item"${ssrRenderAttr("href", unref(props).site.production.domains.main)}><i class="fas fa-arrow-left"></i>   Return To ${ssrInterpolate(unref(props).site.name)}</a><!--[-->`);
      ssrRenderList(topbar, (topbarlinks) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          link: topbarlinks.url,
          active_link: topbarlinks.active_link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="${ssrRenderClass(topbarlinks.icon)}"${_scopeId}></i>   ${ssrInterpolate(topbarlinks[lang.value].title)}`);
            } else {
              return [
                createVNode("i", {
                  class: topbarlinks.icon
                }, null, 2),
                createTextVNode("   " + toDisplayString(topbarlinks[lang.value].title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><div class="navbar-dropdown"></div></div></div><div class="navbar-end"><div class="navbar-item"><a href="report.html" class="navbar-item"><i class="far fa-flag"></i> Reports <span class="tag is-danger">9+</span></a>`);
      _push(ssrRenderComponent(_component_Link, {
        href: unref(route)("admin.assets.approve"),
        class: "navbar-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="far fa-folder"${_scopeId}></i> Content Approval <span class="tag is-danger"${_scopeId}>${ssrInterpolate(unref(props).auth.user.pendingAssets)}</span>`);
          } else {
            return [
              createVNode("i", { class: "far fa-folder" }),
              createTextVNode(" Content Approval "),
              createVNode("span", { class: "tag is-danger" }, toDisplayString(unref(props).auth.user.pendingAssets), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></nav><br><div class="container">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<footer class="footer"><div class="content has-text-centered"><p class="is-title"> Confidential: Deliberately leaking sensitive data through the admin panel will result in immediate termination. </p></div></footer></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LayoutParts/Admin/AdminNavbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
