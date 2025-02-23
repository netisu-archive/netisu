import { defineComponent, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { route } from "momentum-trail";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./AdminNavbar-DM40yGYC.js";
import { _ as _sfc_main$1 } from "../ssr.js";
import axios from "axios";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "vue-tippy";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Manage",
  __ssrInlineRender: true,
  setup(__props) {
    const purge = (type, id) => {
      axios.get(`/sanctum/csrf-cookie`).then(() => {
        axios.post(route(`api.admin.purge`, { type, assetId: id }));
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Manage Item",
        description: "Manage" + unref(usePage)().props.item.name,
        url: unref(route)("admin.items.manage-item", { id: unref(usePage)().props.item.id })
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card"${_scopeId}><div class="card-content"${_scopeId}><div class="columns"${_scopeId}><div class="column is-2"${_scopeId}><figure class="image"${_scopeId}><img${ssrRenderAttr("src", unref(usePage)().props.item.thumbnail)}${_scopeId}></figure></div><div class="column is-5"${_scopeId}><br${_scopeId}><p class="title is-2"${_scopeId}>${ssrInterpolate(unref(usePage)().props.item.name)}</p><div class="content"${_scopeId}><blockquote${_scopeId}>${ssrInterpolate(unref(usePage)().props.item.description ?? "This item does not have a description.")}</blockquote></div></div><div class="column"${_scopeId}><label${_scopeId}><strong${_scopeId}>Moderation Actions:</strong></label><br${_scopeId}><a class="button is-danger is-outlined"${_scopeId}>Purge Item Name</a><a href="purgeitem.html" class="button is-danger is-outlined"${_scopeId}>Purge Item Description</a><a href="purgeitem.html" class="button is-danger is-outlined"${_scopeId}>Delete Item</a></div></div><nav class="level"${_scopeId}><div class="level-item has-text-centered"${_scopeId}><div${_scopeId}><p class="heading"${_scopeId}>ID</p><p class="title"${_scopeId}>${ssrInterpolate(unref(usePage)().props.item.id)}</p></div></div><div class="level-item has-text-centered"${_scopeId}><div${_scopeId}><p class="heading"${_scopeId}>Category</p><p class="title"${_scopeId}>${ssrInterpolate(unref(usePage)().props.item.item_type)}</p></div></div><div class="level-item has-text-centered"${_scopeId}><div${_scopeId}><p class="heading"${_scopeId}>Sold Amount</p><p class="title"${_scopeId}>${ssrInterpolate(unref(usePage)().props.item.sold)}</p></div></div><div class="level-item has-text-centered"${_scopeId}><div${_scopeId}><p class="heading"${_scopeId}>Onsale</p><p class="title"${_scopeId}>${ssrInterpolate(unref(usePage)().props.item.isOnsale ? "Yes" : "No")}</p></div></div><div class="level-item has-text-centered"${_scopeId}><div${_scopeId}><p class="heading"${_scopeId}>Rare</p><p class="title"${_scopeId}>${ssrInterpolate(unref(usePage)().props.item.isRare ? "Yes" : "No")}</p></div></div>`);
            if (unref(usePage)().props.item.isRare) {
              _push2(`<div class="level-item has-text-centered"${_scopeId}><div${_scopeId}><p class="heading"${_scopeId}>Stock</p><p class="title"${_scopeId}>${ssrInterpolate(unref(usePage)().props.item.remaining_stock)} out of ${ssrInterpolate(unref(usePage)().props.item.initial_stock)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</nav></div></div><br${_scopeId}><div class="card"${_scopeId}><div class="card-content"${_scopeId}><p class="title is-4"${_scopeId}>Item Status</p><div class="columns"${_scopeId}><div class="column is-7"${_scopeId}><div class="select title is-6 is-fullwidth"${_scopeId}><select${_scopeId}><option${_scopeId}>Onsale</option><option${_scopeId}>Offsale</option></select></div></div><div class="column"${_scopeId}><a class="button is-fullwidth" href="itemsubmit.html"${_scopeId}>Submit</a></div></div><p class="title is-4"${_scopeId}>Make Item Rare</p><p class="subtitle is-6"${_scopeId}>Provide quantity below</p><div class="columns"${_scopeId}><div class="column is-3"${_scopeId}><div class="select title is-6 is-fullwidth"${_scopeId}><select${_scopeId}><option${_scopeId}>Yes</option><option${_scopeId}>No</option></select></div></div><div class="column is-7"${_scopeId}><input class="input" type="ID" placeholder="Input"${_scopeId}></div><div class="column"${_scopeId}><a class="button is-fullwidth" href="itemsubmit.html"${_scopeId}>Submit</a></div></div><p class="title is-4"${_scopeId}>Change Item Price</p><div class="columns"${_scopeId}><div class="column is-3"${_scopeId}><div class="select title is-6 is-fullwidth"${_scopeId}><select${_scopeId}><option${_scopeId}>Cash</option><option${_scopeId}>Coins</option></select></div></div><div class="column is-7"${_scopeId}><input class="input" type="ID" placeholder="Input"${_scopeId}></div><div class="column"${_scopeId}><a class="button is-fullwidth" href="itemsubmit.html"${_scopeId}>Submit</a></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-content" }, [
                  createVNode("div", { class: "columns" }, [
                    createVNode("div", { class: "column is-2" }, [
                      createVNode("figure", { class: "image" }, [
                        createVNode("img", {
                          src: unref(usePage)().props.item.thumbnail
                        }, null, 8, ["src"])
                      ])
                    ]),
                    createVNode("div", { class: "column is-5" }, [
                      createVNode("br"),
                      createVNode("p", { class: "title is-2" }, toDisplayString(unref(usePage)().props.item.name), 1),
                      createVNode("div", { class: "content" }, [
                        createVNode("blockquote", null, toDisplayString(unref(usePage)().props.item.description ?? "This item does not have a description."), 1)
                      ])
                    ]),
                    createVNode("div", { class: "column" }, [
                      createVNode("label", null, [
                        createVNode("strong", null, "Moderation Actions:")
                      ]),
                      createVNode("br"),
                      createVNode("a", {
                        onClick: ($event) => purge("item", unref(usePage)().props.item.id),
                        class: "button is-danger is-outlined"
                      }, "Purge Item Name", 8, ["onClick"]),
                      createVNode("a", {
                        href: "purgeitem.html",
                        class: "button is-danger is-outlined"
                      }, "Purge Item Description"),
                      createVNode("a", {
                        href: "purgeitem.html",
                        class: "button is-danger is-outlined"
                      }, "Delete Item")
                    ])
                  ]),
                  createVNode("nav", { class: "level" }, [
                    createVNode("div", { class: "level-item has-text-centered" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "heading" }, "ID"),
                        createVNode("p", { class: "title" }, toDisplayString(unref(usePage)().props.item.id), 1)
                      ])
                    ]),
                    createVNode("div", { class: "level-item has-text-centered" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "heading" }, "Category"),
                        createVNode("p", { class: "title" }, toDisplayString(unref(usePage)().props.item.item_type), 1)
                      ])
                    ]),
                    createVNode("div", { class: "level-item has-text-centered" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "heading" }, "Sold Amount"),
                        createVNode("p", { class: "title" }, toDisplayString(unref(usePage)().props.item.sold), 1)
                      ])
                    ]),
                    createVNode("div", { class: "level-item has-text-centered" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "heading" }, "Onsale"),
                        createVNode("p", { class: "title" }, toDisplayString(unref(usePage)().props.item.isOnsale ? "Yes" : "No"), 1)
                      ])
                    ]),
                    createVNode("div", { class: "level-item has-text-centered" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "heading" }, "Rare"),
                        createVNode("p", { class: "title" }, toDisplayString(unref(usePage)().props.item.isRare ? "Yes" : "No"), 1)
                      ])
                    ]),
                    unref(usePage)().props.item.isRare ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "level-item has-text-centered"
                    }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "heading" }, "Stock"),
                        createVNode("p", { class: "title" }, toDisplayString(unref(usePage)().props.item.remaining_stock) + " out of " + toDisplayString(unref(usePage)().props.item.initial_stock), 1)
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createVNode("br"),
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-content" }, [
                  createVNode("p", { class: "title is-4" }, "Item Status"),
                  createVNode("div", { class: "columns" }, [
                    createVNode("div", { class: "column is-7" }, [
                      createVNode("div", { class: "select title is-6 is-fullwidth" }, [
                        createVNode("select", null, [
                          createVNode("option", null, "Onsale"),
                          createVNode("option", null, "Offsale")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "column" }, [
                      createVNode("a", {
                        class: "button is-fullwidth",
                        href: "itemsubmit.html"
                      }, "Submit")
                    ])
                  ]),
                  createVNode("p", { class: "title is-4" }, "Make Item Rare"),
                  createVNode("p", { class: "subtitle is-6" }, "Provide quantity below"),
                  createVNode("div", { class: "columns" }, [
                    createVNode("div", { class: "column is-3" }, [
                      createVNode("div", { class: "select title is-6 is-fullwidth" }, [
                        createVNode("select", null, [
                          createVNode("option", null, "Yes"),
                          createVNode("option", null, "No")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "column is-7" }, [
                      createVNode("input", {
                        class: "input",
                        type: "ID",
                        placeholder: "Input"
                      })
                    ]),
                    createVNode("div", { class: "column" }, [
                      createVNode("a", {
                        class: "button is-fullwidth",
                        href: "itemsubmit.html"
                      }, "Submit")
                    ])
                  ]),
                  createVNode("p", { class: "title is-4" }, "Change Item Price"),
                  createVNode("div", { class: "columns" }, [
                    createVNode("div", { class: "column is-3" }, [
                      createVNode("div", { class: "select title is-6 is-fullwidth" }, [
                        createVNode("select", null, [
                          createVNode("option", null, "Cash"),
                          createVNode("option", null, "Coins")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "column is-7" }, [
                      createVNode("input", {
                        class: "input",
                        type: "ID",
                        placeholder: "Input"
                      })
                    ]),
                    createVNode("div", { class: "column" }, [
                      createVNode("a", {
                        class: "button is-fullwidth",
                        href: "itemsubmit.html"
                      }, "Submit")
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Items/Manage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
