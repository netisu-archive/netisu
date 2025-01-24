import { defineComponent, resolveComponent, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
import "portal-vue";
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
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "User Index",
        description: unref(usePage)().props.site.name + " Administration",
        url: unref(route)("auth.login.page")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card" style="${ssrRenderStyle("background:url(" + unref(usePage)().props.user.settings.profile_banner_enabled ? unref(usePage)().props.user.settings.profile_banner_url : "null);")}"${_scopeId}><div class="card-content"${_scopeId}><div class="columns"${_scopeId}><div class="column is-2"${_scopeId}><figure class="image"${_scopeId}><img width="250" height="250"${ssrRenderAttr("src", unref(usePage)().props.user.thumbnail)}${_scopeId}></figure></div><div class="column is-5"${_scopeId}><br${_scopeId}><p class="title is-2"${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.display_name)} <span class="title is-size-6 has-text-grey"${_scopeId}>${ssrInterpolate("@" + unref(usePage)().props.user.username)}</span></p><div class="content"${_scopeId}><blockquote${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.about_me ?? unref(usePage)().props.user.username + "does not hava an about me yet.")}</blockquote></div>`);
            if (unref(usePage)().props.permissions.canMangeUser) {
              _push2(`<!--[--><label${_scopeId}><strong${_scopeId}>UID:</strong></label> <label${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.id)}</label><br${_scopeId}><label${_scopeId}><strong${_scopeId}>IP:</strong></label> <label${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.lastIp)}</label><br${_scopeId}><label${_scopeId}><strong${_scopeId}>Email:</strong></label> <label${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.email)}</label><br${_scopeId}><label${_scopeId}><strong${_scopeId}>Past Usernames:</strong></label> <label${_scopeId}>Username, Usersname, User, Bitch</label><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="column"${_scopeId}>`);
            if (unref(usePage)().props.permissions.canMangeUser) {
              _push2(`<div${_scopeId}><label${_scopeId}><strong${_scopeId}>User:</strong></label><br${_scopeId}><div class="buttons"${_scopeId}><a${ssrRenderAttr("href", unref(route)(`user.profile`, { username: unref(usePage)().props.user.username }))} class="button is-outlined"${_scopeId}>View Profile</a>`);
              if (unref(usePage)().props.permissions.canGiftUser) {
                _push2(`<a href="grant.html" class="button is-outlined"${_scopeId}>Grant Achievement (not working atm)</a>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(usePage)().props.permissions.canGiftUser) {
                _push2(ssrRenderComponent(_component_Link, {
                  href: unref(route)(`admin.users.gift-user`, { id: unref(usePage)().props.user.id }),
                  class: "button is-outlined"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Gift Item`);
                    } else {
                      return [
                        createTextVNode(" Gift Item")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(usePage)().props.permissions.canMangeUserSettings) {
              _push2(`<div${_scopeId}><br${_scopeId}><label${_scopeId}><strong${_scopeId}>Moderation Actions:</strong></label><br${_scopeId}><div class="buttons"${_scopeId}><a class="button is-danger is-outlined"${_scopeId}>Purge Username</a><a href="purge.html" class="button is-danger is-outlined"${_scopeId}>Purge Bio</a><a href="banuser.html" class="button is-danger is-outlined"${_scopeId}>Ban User</a></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><nav class="level"${_scopeId}><div class="level-item has-text-centered"${_scopeId}><div${_scopeId}><p class="heading"${_scopeId}>Bucks</p><p class="title"${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.bucks)}</p></div></div><div class="level-item has-text-centered"${_scopeId}><div${_scopeId}><p class="heading"${_scopeId}>Coins</p><p class="title"${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.coins)}</p></div></div><div class="level-item has-text-centered"${_scopeId}><div${_scopeId}><p class="heading"${_scopeId}>Last Seen</p><p class="title"${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.DateHum)}</p></div></div><div class="level-item has-text-centered"${_scopeId}><div${_scopeId}><p class="heading"${_scopeId}>Registered On</p><p class="title"${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.joined)}</p></div></div></nav></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "card",
                style: "background:url(" + unref(usePage)().props.user.settings.profile_banner_enabled ? unref(usePage)().props.user.settings.profile_banner_url : "null);"
              }, [
                createVNode("div", { class: "card-content" }, [
                  createVNode("div", { class: "columns" }, [
                    createVNode("div", { class: "column is-2" }, [
                      createVNode("figure", { class: "image" }, [
                        createVNode("img", {
                          width: "250",
                          height: "250",
                          src: unref(usePage)().props.user.thumbnail
                        }, null, 8, ["src"])
                      ])
                    ]),
                    createVNode("div", { class: "column is-5" }, [
                      createVNode("br"),
                      createVNode("p", { class: "title is-2" }, [
                        createTextVNode(toDisplayString(unref(usePage)().props.user.display_name) + " ", 1),
                        createVNode("span", { class: "title is-size-6 has-text-grey" }, toDisplayString("@" + unref(usePage)().props.user.username), 1)
                      ]),
                      createVNode("div", { class: "content" }, [
                        createVNode("blockquote", null, toDisplayString(unref(usePage)().props.user.about_me ?? unref(usePage)().props.user.username + "does not hava an about me yet."), 1)
                      ]),
                      unref(usePage)().props.permissions.canMangeUser ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode("label", null, [
                          createVNode("strong", null, "UID:")
                        ]),
                        createTextVNode(),
                        createVNode("label", null, toDisplayString(unref(usePage)().props.user.id), 1),
                        createVNode("br"),
                        createVNode("label", null, [
                          createVNode("strong", null, "IP:")
                        ]),
                        createTextVNode(),
                        createVNode("label", null, toDisplayString(unref(usePage)().props.user.lastIp), 1),
                        createVNode("br"),
                        createVNode("label", null, [
                          createVNode("strong", null, "Email:")
                        ]),
                        createTextVNode(),
                        createVNode("label", null, toDisplayString(unref(usePage)().props.user.email), 1),
                        createVNode("br"),
                        createVNode("label", null, [
                          createVNode("strong", null, "Past Usernames:")
                        ]),
                        createTextVNode(),
                        createVNode("label", null, "Username, Usersname, User, Bitch")
                      ], 64)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "column" }, [
                      unref(usePage)().props.permissions.canMangeUser ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("label", null, [
                          createVNode("strong", null, "User:")
                        ]),
                        createVNode("br"),
                        createVNode("div", { class: "buttons" }, [
                          createVNode("a", {
                            href: unref(route)(`user.profile`, { username: unref(usePage)().props.user.username }),
                            class: "button is-outlined"
                          }, "View Profile", 8, ["href"]),
                          unref(usePage)().props.permissions.canGiftUser ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: "grant.html",
                            class: "button is-outlined"
                          }, "Grant Achievement (not working atm)")) : createCommentVNode("", true),
                          unref(usePage)().props.permissions.canGiftUser ? (openBlock(), createBlock(_component_Link, {
                            key: 1,
                            href: unref(route)(`admin.users.gift-user`, { id: unref(usePage)().props.user.id }),
                            class: "button is-outlined"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Gift Item")
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ])
                      ])) : createCommentVNode("", true),
                      unref(usePage)().props.permissions.canMangeUserSettings ? (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode("br"),
                        createVNode("label", null, [
                          createVNode("strong", null, "Moderation Actions:")
                        ]),
                        createVNode("br"),
                        createVNode("div", { class: "buttons" }, [
                          createVNode("a", {
                            onClick: ($event) => purge("user", unref(usePage)().props.user.id),
                            class: "button is-danger is-outlined"
                          }, "Purge Username", 8, ["onClick"]),
                          createVNode("a", {
                            href: "purge.html",
                            class: "button is-danger is-outlined"
                          }, "Purge Bio"),
                          createVNode("a", {
                            href: "banuser.html",
                            class: "button is-danger is-outlined"
                          }, "Ban User")
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("nav", { class: "level" }, [
                    createVNode("div", { class: "level-item has-text-centered" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "heading" }, "Bucks"),
                        createVNode("p", { class: "title" }, toDisplayString(unref(usePage)().props.user.bucks), 1)
                      ])
                    ]),
                    createVNode("div", { class: "level-item has-text-centered" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "heading" }, "Coins"),
                        createVNode("p", { class: "title" }, toDisplayString(unref(usePage)().props.user.coins), 1)
                      ])
                    ]),
                    createVNode("div", { class: "level-item has-text-centered" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "heading" }, "Last Seen"),
                        createVNode("p", { class: "title" }, toDisplayString(unref(usePage)().props.user.DateHum), 1)
                      ])
                    ]),
                    createVNode("div", { class: "level-item has-text-centered" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "heading" }, "Registered On"),
                        createVNode("p", { class: "title" }, toDisplayString(unref(usePage)().props.user.joined), 1)
                      ])
                    ])
                  ])
                ])
              ], 4)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Users/Manage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
