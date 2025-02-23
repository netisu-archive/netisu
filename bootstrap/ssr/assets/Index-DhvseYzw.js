import { defineComponent, resolveComponent, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { route } from "momentum-trail";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./AdminNavbar-DM40yGYC.js";
import { _ as _sfc_main$1 } from "../ssr.js";
import { _ as _sfc_main$3 } from "./AdminPagination-DQQg2fE1.js";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "vue-tippy";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Item Index",
        description: unref(usePage)().props.site.name + " Administration",
        url: unref(route)("admin.items.page")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card"${_scopeId}><div class="card-content"${_scopeId}><div class="columns"${_scopeId}><div class="column is-3"${_scopeId}><div class="select title is-6 is-fullwidth"${_scopeId}><select${_scopeId}><option${_scopeId}>Username</option><option${_scopeId}>Email</option></select></div></div><div class="column is-7"${_scopeId}><input class="input" type="Search" placeholder="Search"${_scopeId}></div><div class="column"${_scopeId}><a class="button is-fullwidth" href=""${_scopeId}>Search</a></div></div></div></div><br${_scopeId}><div class="card"${_scopeId}><div class="card-content"${_scopeId}><div class="column is-3"${_scopeId}><p class="title is-4"${_scopeId}>Official Items:</p></div><div class="column"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: unref(route)(`admin.items.create.create-item`),
              class: "button is-fullwidth"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`New Item`);
                } else {
                  return [
                    createTextVNode("New Item")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><br${_scopeId}><!--[-->`);
            ssrRenderList(unref(usePage)().props.items.data, (item, index) => {
              _push2(`<article class="media"${_scopeId}><figure class="media-left"${_scopeId}><p class="image is-128x128"${_scopeId}><img${ssrRenderAttr("src", item.thumbnail)}${_scopeId}></p></figure><div class="media-content"${_scopeId}><div class="content"${_scopeId}><br${_scopeId}><div class="title is-4"${_scopeId}><span class="mb-4"${_scopeId}>${ssrInterpolate(item.name)}</span><div class="mt-4 tags"${_scopeId}>`);
              if (item.isOffsale) {
                _push2(`<span class="tag is-dark"${_scopeId}>This item is offsale</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><p class="subtitle is-6"${_scopeId}>${ssrInterpolate(item.description ?? "This item does not have an description")}</p>`);
              _push2(ssrRenderComponent(_component_Link, {
                class: "button",
                href: unref(route)(`admin.items.manage-item`, { id: item.id })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Manage Item `);
                  } else {
                    return [
                      createTextVNode("Manage Item ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="media-right"${_scopeId}></div></article>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              pagedata: unref(usePage)().props.items
            }, null, _parent2, _scopeId));
            if (!unref(usePage)().props.items.data.length) {
              _push2(`<div${_scopeId}> No items found </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-content" }, [
                  createVNode("div", { class: "columns" }, [
                    createVNode("div", { class: "column is-3" }, [
                      createVNode("div", { class: "select title is-6 is-fullwidth" }, [
                        createVNode("select", null, [
                          createVNode("option", null, "Username"),
                          createVNode("option", null, "Email")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "column is-7" }, [
                      createVNode("input", {
                        class: "input",
                        type: "Search",
                        placeholder: "Search"
                      })
                    ]),
                    createVNode("div", { class: "column" }, [
                      createVNode("a", {
                        class: "button is-fullwidth",
                        href: ""
                      }, "Search")
                    ])
                  ])
                ])
              ]),
              createVNode("br"),
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-content" }, [
                  createVNode("div", { class: "column is-3" }, [
                    createVNode("p", { class: "title is-4" }, "Official Items:")
                  ]),
                  createVNode("div", { class: "column" }, [
                    createVNode(_component_Link, {
                      href: unref(route)(`admin.items.create.create-item`),
                      class: "button is-fullwidth"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("New Item")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  createVNode("br"),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(usePage)().props.items.data, (item, index) => {
                    return openBlock(), createBlock("article", {
                      class: "media",
                      key: index
                    }, [
                      createVNode("figure", { class: "media-left" }, [
                        createVNode("p", { class: "image is-128x128" }, [
                          createVNode("img", {
                            src: item.thumbnail
                          }, null, 8, ["src"])
                        ])
                      ]),
                      createVNode("div", { class: "media-content" }, [
                        createVNode("div", { class: "content" }, [
                          createVNode("br"),
                          createVNode("div", { class: "title is-4" }, [
                            createVNode("span", { class: "mb-4" }, toDisplayString(item.name), 1),
                            createVNode("div", { class: "mt-4 tags" }, [
                              item.isOffsale ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "tag is-dark"
                              }, "This item is offsale")) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("p", { class: "subtitle is-6" }, toDisplayString(item.description ?? "This item does not have an description"), 1),
                          createVNode(_component_Link, {
                            class: "button",
                            href: unref(route)(`admin.items.manage-item`, { id: item.id })
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Manage Item ")
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ])
                      ]),
                      createVNode("div", { class: "media-right" })
                    ]);
                  }), 128)),
                  createVNode(_sfc_main$3, {
                    pagedata: unref(usePage)().props.items
                  }, null, 8, ["pagedata"]),
                  !unref(usePage)().props.items.data.length ? (openBlock(), createBlock("div", { key: 0 }, " No items found ")) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Items/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
