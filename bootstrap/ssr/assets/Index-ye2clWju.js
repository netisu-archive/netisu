import { defineComponent, resolveComponent, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
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
import "portal-vue";
import "vue-tippy";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "User Index",
        description: "Login to",
        url: unref(route)("auth.login.page")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card"${_scopeId}><div class="card-content"${_scopeId}><div class="columns"${_scopeId}><div class="column is-3"${_scopeId}><div class="select title is-6 is-fullwidth"${_scopeId}><select${_scopeId}><option${_scopeId}>Username</option><option${_scopeId}>Email</option></select></div></div><div class="column is-7"${_scopeId}><input class="input" type="Search" placeholder="Search"${_scopeId}></div><div class="column"${_scopeId}><a class="button is-fullwidth" href=""${_scopeId}>Search</a></div></div></div></div><br${_scopeId}><div class="card"${_scopeId}><div class="card-content"${_scopeId}><p class="title is-4"${_scopeId}>Users:</p><br${_scopeId}><!--[-->`);
            ssrRenderList(unref(usePage)().props.users.data, (user, index) => {
              _push2(`<article class="media"${_scopeId}><figure class="media-left"${_scopeId}><p class="image is-128x128"${_scopeId}><img class="is-rounded"${ssrRenderAttr("src", user.headshot)} style="${ssrRenderStyle({ "border": "2px solid #616161 !important" })}"${_scopeId}></p></figure><div class="media-content"${_scopeId}><div class="content"${_scopeId}><br${_scopeId}><div class="title is-4"${_scopeId}><span class="mb-4"${_scopeId}>${ssrInterpolate(user.display_name)} <span class="has-text-grey"${_scopeId}>(${ssrInterpolate("@" + user.username)})</span></span><div class="mt-4 tags"${_scopeId}>`);
              if (user.isBanned) {
                _push2(`<span class="tag is-danger"${_scopeId}>This user is banned</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (user.isStaff) {
                _push2(`<span class="tag is-info"${_scopeId}>${ssrInterpolate(user.position)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><p class="subtitle is-6"${_scopeId}>${ssrInterpolate(user.email)}</p><div class="buttons"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                class: "button",
                href: unref(route)(`admin.users.manage-user`, { id: user.id })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Manage User`);
                  } else {
                    return [
                      createTextVNode("Manage User")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<a class="button is-disabled is-"${ssrRenderAttr("href", unref(route)(`user.profile`, { username: user.username }))}${_scopeId}>Go to Profile</a></div></div></div><div class="media-right"${_scopeId}></div></article>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              pagedata: unref(usePage)().props.users
            }, null, _parent2, _scopeId));
            if (!unref(usePage)().props.users.data.length) {
              _push2(`<div${_scopeId}> No users found </div>`);
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
                  createVNode("p", { class: "title is-4" }, "Users:"),
                  createVNode("br"),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(usePage)().props.users.data, (user, index) => {
                    return openBlock(), createBlock("article", {
                      class: "media",
                      key: index
                    }, [
                      createVNode("figure", { class: "media-left" }, [
                        createVNode("p", { class: "image is-128x128" }, [
                          createVNode("img", {
                            class: "is-rounded",
                            src: user.headshot,
                            style: { "border": "2px solid #616161 !important" }
                          }, null, 8, ["src"])
                        ])
                      ]),
                      createVNode("div", { class: "media-content" }, [
                        createVNode("div", { class: "content" }, [
                          createVNode("br"),
                          createVNode("div", { class: "title is-4" }, [
                            createVNode("span", { class: "mb-4" }, [
                              createTextVNode(toDisplayString(user.display_name) + " ", 1),
                              createVNode("span", { class: "has-text-grey" }, "(" + toDisplayString("@" + user.username) + ")", 1)
                            ]),
                            createVNode("div", { class: "mt-4 tags" }, [
                              user.isBanned ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "tag is-danger"
                              }, "This user is banned")) : createCommentVNode("", true),
                              user.isStaff ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "tag is-info"
                              }, toDisplayString(user.position), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("p", { class: "subtitle is-6" }, toDisplayString(user.email), 1),
                          createVNode("div", { class: "buttons" }, [
                            createVNode(_component_Link, {
                              class: "button",
                              href: unref(route)(`admin.users.manage-user`, { id: user.id })
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Manage User")
                              ]),
                              _: 2
                            }, 1032, ["href"]),
                            createVNode("a", {
                              class: "button is-disabled is-",
                              href: unref(route)(`user.profile`, { username: user.username })
                            }, "Go to Profile", 8, ["href"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "media-right" })
                    ]);
                  }), 128)),
                  createVNode(_sfc_main$3, {
                    pagedata: unref(usePage)().props.users
                  }, null, 8, ["pagedata"]),
                  !unref(usePage)().props.users.data.length ? (openBlock(), createBlock("div", { key: 0 }, " No users found ")) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Users/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
