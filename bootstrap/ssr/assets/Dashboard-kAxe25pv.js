import { defineComponent, ref, watch, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import axios from "axios";
import { route } from "momentum-trail";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./AdminNavbar-DM40yGYC.js";
import { _ as _sfc_main$1 } from "../ssr.js";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "vue-tippy";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const MaintenanceActive = ref(usePage().props.siteSettings.inMaintenance);
    const ForumActive = ref(usePage().props.siteSettings.discussion_enabled);
    const MarketActive = ref(usePage().props.siteSettings.market_enabled);
    const CustomizationActive = ref(usePage().props.siteSettings.customization_enabled);
    const SpacesActive = ref(usePage().props.siteSettings.spaces_enabled);
    const EnableMaintenance = async () => {
      try {
        await axios.post(route(`api.admin.enableMaintenance`));
        MaintenanceActive.value = 1;
      } catch (err) {
        console.error(err);
      }
    };
    const DisableMaintenance = async () => {
      try {
        await axios.post(route(`api.admin.disableMaintenance`));
        MaintenanceActive.value = 0;
      } catch (err) {
        console.error(err);
      }
    };
    watch(MaintenanceActive, (newValue, oldValue) => {
      console.log("Maintenance variable changed from", oldValue, "to", newValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Admin Dashboard",
        description: unref(usePage)().props.site.name + " Administration",
        url: unref(route)("admin.page")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="card"${_scopeId}><div class="card-content"${_scopeId}><div class="columns"${_scopeId}><div class="column is-2"${_scopeId}><figure class="image"${_scopeId}><img class="is-rounded"${ssrRenderAttr("src", (_b = (_a = unref(usePage)().props.auth) == null ? void 0 : _a.user) == null ? void 0 : _b.headshot)}${_scopeId}></figure></div><div class="column is-5"${_scopeId}><br${_scopeId}><p class="title is-2" style="${ssrRenderStyle({ "margin-bottom": "0.5rem" })}"${_scopeId}>Welcome back, ${ssrInterpolate((_d = (_c = unref(usePage)().props.auth) == null ? void 0 : _c.user) == null ? void 0 : _d.username)}</p><span class="tag is-danger is-medium"${_scopeId}>${ssrInterpolate((_f = (_e = unref(usePage)().props.auth) == null ? void 0 : _e.user) == null ? void 0 : _f.position)}</span></div></div><nav class="level"${_scopeId}><div class="level-item has-text-centered"${_scopeId}><div${_scopeId}><p class="heading"${_scopeId}>Admin Points</p><p class="title"${_scopeId}>${ssrInterpolate(unref(usePage)().props.stats.adminPoints)}</p></div></div><div class="level-item has-text-centered"${_scopeId}><div${_scopeId}><p class="heading"${_scopeId}>Content Approved</p><p class="title"${_scopeId}>1,500</p></div></div><div class="level-item has-text-centered"${_scopeId}><div${_scopeId}><p class="heading"${_scopeId}>Reports Dealt With</p><p class="title"${_scopeId}>34,247</p></div></div></nav></div></div><br${_scopeId}><div class="card"${_scopeId}><div class="card-content"${_scopeId}><p class="title is-4"${_scopeId}>Maintenance Mode</p><p class="subtitle is-6"${_scopeId}>Maintenance is currently ${ssrInterpolate(MaintenanceActive.value ? "ON" : "OFF")}!</p>`);
            if (unref(usePage)().props.stats.canControlMaintenance) {
              _push2(`<a class="${ssrRenderClass([{ "is-active": MaintenanceActive.value ? true : false }, "button"])}"${_scopeId}>Turn Maintenance ${ssrInterpolate(!MaintenanceActive.value ? "ON" : "OFF")}</a>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><br${_scopeId}><div class="card"${_scopeId}><div class="card-content"${_scopeId}><div class="columns"${_scopeId}><div class="column is-4"${_scopeId}><div class="buttons"${_scopeId}>`);
            if (unref(usePage)().props.stats.canControlMarketPurchases) {
              _push2(`<button class="${ssrRenderClass([{ "is-active": MarketActive.value ? true : false }, "button"])}"${_scopeId}>${ssrInterpolate(MarketActive.value ? "Enable" : "Disable")} Market</button>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(usePage)().props.stats.canControlDiscussion) {
              _push2(`<button class="${ssrRenderClass([{ "is-active": ForumActive.value ? true : false }, "button"])}"${_scopeId}>${ssrInterpolate(ForumActive.value ? "Enable" : "Disable")} Discussion</button>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(usePage)().props.stats.canControlCustomization) {
              _push2(`<button class="${ssrRenderClass([{ "is-active": CustomizationActive.value ? true : false }, "button"])}"${_scopeId}>${ssrInterpolate(CustomizationActive.value ? "Enable" : "Disable")} Customization</button>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(usePage)().props.stats.canControlSpaces) {
              _push2(`<button class="${ssrRenderClass([{ "is-active": SpacesActive.value ? true : false }, "button"])}"${_scopeId}>${ssrInterpolate(SpacesActive.value ? "Enable" : "Disable")} Spaces</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            if (unref(usePage)().props.stats.canEnableAnnouncement) {
              _push2(`<div class="column is-8"${_scopeId}><p class="title is-4"${_scopeId}> Change announcement message </p><div class="columns"${_scopeId}>`);
              if (unref(usePage)().props.stats.canEnableAnnouncement) {
                _push2(`<div class="column is-3"${_scopeId}><div class="select title is-6 is-fullwidth"${_scopeId}><select${_scopeId}><option${_scopeId}>Enable</option><option${_scopeId}>Disable</option></select></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="column is-7"${_scopeId}><input class="input" type="ID"${ssrRenderAttr("placeholder", unref(usePage)().props.site_config.announcement_message)}${_scopeId}></div><div class="column"${_scopeId}><a class="button is-fullwidth"${_scopeId}>Submit</a></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-content" }, [
                  createVNode("div", { class: "columns" }, [
                    createVNode("div", { class: "column is-2" }, [
                      createVNode("figure", { class: "image" }, [
                        createVNode("img", {
                          class: "is-rounded",
                          src: (_h = (_g = unref(usePage)().props.auth) == null ? void 0 : _g.user) == null ? void 0 : _h.headshot
                        }, null, 8, ["src"])
                      ])
                    ]),
                    createVNode("div", { class: "column is-5" }, [
                      createVNode("br"),
                      createVNode("p", {
                        class: "title is-2",
                        style: { "margin-bottom": "0.5rem" }
                      }, "Welcome back, " + toDisplayString((_j = (_i = unref(usePage)().props.auth) == null ? void 0 : _i.user) == null ? void 0 : _j.username), 1),
                      createVNode("span", { class: "tag is-danger is-medium" }, toDisplayString((_l = (_k = unref(usePage)().props.auth) == null ? void 0 : _k.user) == null ? void 0 : _l.position), 1)
                    ])
                  ]),
                  createVNode("nav", { class: "level" }, [
                    createVNode("div", { class: "level-item has-text-centered" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "heading" }, "Admin Points"),
                        createVNode("p", { class: "title" }, toDisplayString(unref(usePage)().props.stats.adminPoints), 1)
                      ])
                    ]),
                    createVNode("div", { class: "level-item has-text-centered" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "heading" }, "Content Approved"),
                        createVNode("p", { class: "title" }, "1,500")
                      ])
                    ]),
                    createVNode("div", { class: "level-item has-text-centered" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "heading" }, "Reports Dealt With"),
                        createVNode("p", { class: "title" }, "34,247")
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("br"),
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-content" }, [
                  createVNode("p", { class: "title is-4" }, "Maintenance Mode"),
                  createVNode("p", { class: "subtitle is-6" }, "Maintenance is currently " + toDisplayString(MaintenanceActive.value ? "ON" : "OFF") + "!", 1),
                  unref(usePage)().props.stats.canControlMaintenance ? (openBlock(), createBlock("a", {
                    key: 0,
                    class: ["button", { "is-active": MaintenanceActive.value ? true : false }],
                    onClick: ($event) => !MaintenanceActive.value ? EnableMaintenance() : DisableMaintenance()
                  }, "Turn Maintenance " + toDisplayString(!MaintenanceActive.value ? "ON" : "OFF"), 11, ["onClick"])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("br"),
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-content" }, [
                  createVNode("div", { class: "columns" }, [
                    createVNode("div", { class: "column is-4" }, [
                      createVNode("div", { class: "buttons" }, [
                        unref(usePage)().props.stats.canControlMarketPurchases ? (openBlock(), createBlock("button", {
                          key: 0,
                          class: [{ "is-active": MarketActive.value ? true : false }, "button"]
                        }, toDisplayString(MarketActive.value ? "Enable" : "Disable") + " Market", 3)) : createCommentVNode("", true),
                        unref(usePage)().props.stats.canControlDiscussion ? (openBlock(), createBlock("button", {
                          key: 1,
                          class: [{ "is-active": ForumActive.value ? true : false }, "button"]
                        }, toDisplayString(ForumActive.value ? "Enable" : "Disable") + " Discussion", 3)) : createCommentVNode("", true),
                        unref(usePage)().props.stats.canControlCustomization ? (openBlock(), createBlock("button", {
                          key: 2,
                          class: [{ "is-active": CustomizationActive.value ? true : false }, "button"]
                        }, toDisplayString(CustomizationActive.value ? "Enable" : "Disable") + " Customization", 3)) : createCommentVNode("", true),
                        unref(usePage)().props.stats.canControlSpaces ? (openBlock(), createBlock("button", {
                          key: 3,
                          class: [{ "is-active": SpacesActive.value ? true : false }, "button"]
                        }, toDisplayString(SpacesActive.value ? "Enable" : "Disable") + " Spaces", 3)) : createCommentVNode("", true)
                      ])
                    ]),
                    unref(usePage)().props.stats.canEnableAnnouncement ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "column is-8"
                    }, [
                      createVNode("p", { class: "title is-4" }, " Change announcement message "),
                      createVNode("div", { class: "columns" }, [
                        unref(usePage)().props.stats.canEnableAnnouncement ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "column is-3"
                        }, [
                          createVNode("div", { class: "select title is-6 is-fullwidth" }, [
                            createVNode("select", null, [
                              createVNode("option", null, "Enable"),
                              createVNode("option", null, "Disable")
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "column is-7" }, [
                          createVNode("input", {
                            class: "input",
                            type: "ID",
                            placeholder: unref(usePage)().props.site_config.announcement_message
                          }, null, 8, ["placeholder"])
                        ]),
                        createVNode("div", { class: "column" }, [
                          createVNode("a", { class: "button is-fullwidth" }, "Submit")
                        ])
                      ])
                    ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
