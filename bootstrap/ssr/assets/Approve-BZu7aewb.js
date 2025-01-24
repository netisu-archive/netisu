import { defineComponent, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { route } from "momentum-trail";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./AdminNavbar-DM40yGYC.js";
import { _ as _sfc_main$1 } from "../ssr.js";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "portal-vue";
import "vue-tippy";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Approve",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Admin Dashboard",
        description: unref(usePage)().props.site.name + " Administration",
        url: unref(route)("admin.page")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card"${_scopeId}><div class="card-content"${_scopeId}><p class="title is-4"${_scopeId}>Content Approval</p><br${_scopeId}><!--[-->`);
            ssrRenderList(unref(usePage)().props.pendingAssets, (item) => {
              _push2(`<article class="media"${_scopeId}><figure class="media-left"${_scopeId}><p class="image is-128x128"${_scopeId}><img${ssrRenderAttr("src", item.data.thumbnail)}${_scopeId}></p></figure><div class="media-content"${_scopeId}><div class="content"${_scopeId}><p class="title is-4"${_scopeId}>${ssrInterpolate(item.data.name)}</p><p class="subtitle is-6"${_scopeId}>${ssrInterpolate(item.data.description)}</p><div class="buttons"${_scopeId}><a class="button"${_scopeId}>Approve</a><a class="button is-danger"${_scopeId}>Deny</a></div></div></div><div class="media-right"${_scopeId}><p class="title is-6"${_scopeId}>Type: ${ssrInterpolate(item.type)}</p><p class="title is-6"${_scopeId}>Created: ${ssrInterpolate(item.data.DateHum)}</p><p class="subtitle is-6"${_scopeId}>Created by: `);
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(route)("admin.users.manage-user", { id: item.data.creator.id }),
                class: "has-text-link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.data.creator.username)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.data.creator.username), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</p><div class="media-content"${_scopeId}><div class="content"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                class: "button",
                href: unref(route)(`admin.items.manage-item`, { id: item.data.id })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`View Item`);
                  } else {
                    return [
                      createTextVNode("View Item")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></div></article>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-content" }, [
                  createVNode("p", { class: "title is-4" }, "Content Approval"),
                  createVNode("br"),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(usePage)().props.pendingAssets, (item) => {
                    return openBlock(), createBlock("article", { class: "media" }, [
                      createVNode("figure", { class: "media-left" }, [
                        createVNode("p", { class: "image is-128x128" }, [
                          createVNode("img", {
                            src: item.data.thumbnail
                          }, null, 8, ["src"])
                        ])
                      ]),
                      createVNode("div", { class: "media-content" }, [
                        createVNode("div", { class: "content" }, [
                          createVNode("p", { class: "title is-4" }, toDisplayString(item.data.name), 1),
                          createVNode("p", { class: "subtitle is-6" }, toDisplayString(item.data.description), 1),
                          createVNode("div", { class: "buttons" }, [
                            createVNode("a", { class: "button" }, "Approve"),
                            createVNode("a", { class: "button is-danger" }, "Deny")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "media-right" }, [
                        createVNode("p", { class: "title is-6" }, "Type: " + toDisplayString(item.type), 1),
                        createVNode("p", { class: "title is-6" }, "Created: " + toDisplayString(item.data.DateHum), 1),
                        createVNode("p", { class: "subtitle is-6" }, [
                          createTextVNode("Created by: "),
                          createVNode(_component_Link, {
                            href: unref(route)("admin.users.manage-user", { id: item.data.creator.id }),
                            class: "has-text-link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.data.creator.username), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ]),
                        createVNode("div", { class: "media-content" }, [
                          createVNode("div", { class: "content" }, [
                            createVNode(_component_Link, {
                              class: "button",
                              href: unref(route)(`admin.items.manage-item`, { id: item.data.id })
                            }, {
                              default: withCtx(() => [
                                createTextVNode("View Item")
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ])
                        ])
                      ])
                    ]);
                  }), 256))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Assets/Approve.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
