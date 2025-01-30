import { defineComponent, mergeProps, unref, useSSRContext, resolveComponent, withCtx, createVNode, toDisplayString, ref, onMounted, createTextVNode, openBlock, createBlock, Fragment, renderList, withDirectives, vModelText, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import axios from "axios";
import { route } from "momentum-trail";
import { useForm, usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./Navbar-DmBRqlRZ.js";
import { S as Sidebar } from "./Sidebar-fXSZR0n1.js";
import { _ as _sfc_main$4 } from "../ssr.js";
import { _ as _sfc_main$6 } from "./Footer-CxsG0LBb.js";
import VLazyImage from "v-lazy-image";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import throttle from "lodash/throttle.js";
import "vue-tippy";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NewsCard",
  __ssrInlineRender: true,
  props: {
    link: {},
    title: {},
    desc: {},
    creator: {},
    date: {},
    image: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))}><a${ssrRenderAttr("href", _ctx.link)} class="d-block squish">`);
      _push(ssrRenderComponent(unref(VLazyImage), {
        style: { "max-height": "100%", "max-width": "100%", "display": "block" },
        src: _ctx.image,
        class: "mb-2 blog-thumbnail"
      }, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "line-height": "18px" })}"><div class="d-block fw-semibold text-body">${ssrInterpolate(_ctx.title)}</div><div class="text-xs text-muted fw-semibold text-truncate">${ssrInterpolate(_ctx.desc)}</div><div class="mt-1 text-xs fw-semibold text-muted">${ssrInterpolate(_ctx.creator)}<span class="mx-1">•</span>${ssrInterpolate(_ctx.date)}</div></div></a></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NewsCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "StatusCard",
  __ssrInlineRender: true,
  props: {
    name: {},
    DisplayName: {},
    date: {},
    message: {},
    Thumbnail: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gap-3 section flex-container flex-dir-column-sm" }, _attrs))}><div class="mx-auto flex-child-grow" style="${ssrRenderStyle({ "width": "100px" })}">`);
      _push(ssrRenderComponent(_component_Link, {
        href: unref(route)(`user.profile`, { username: _ctx.name }),
        class: "text-sm text-center d-block squish"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VLazyImage), {
              src: _ctx.Thumbnail,
              width: "60",
              class: "headshot",
              alt: "Avatar",
              "src-placeholder": "/assets/img/dummy_headshot.png"
            }, null, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-truncate"${_scopeId}>${ssrInterpolate(_ctx.DisplayName)}</div><div class="text-xs text-muted text-truncate"${_scopeId}>${ssrInterpolate("@" + _ctx.name)}</div></div>`);
          } else {
            return [
              createVNode(unref(VLazyImage), {
                src: _ctx.Thumbnail,
                width: "60",
                class: "headshot",
                alt: "Avatar",
                "src-placeholder": "/assets/img/dummy_headshot.png"
              }, null, 8, ["src"]),
              createVNode("div", { style: { "line-height": "16px" } }, [
                createVNode("div", { class: "text-truncate" }, toDisplayString(_ctx.DisplayName), 1),
                createVNode("div", { class: "text-xs text-muted text-truncate" }, toDisplayString("@" + _ctx.name), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="card card-body card-inner w-100"><div class="align-middle flex-container align-justify"><div class="w-100"><div class="text-xs text-muted"><i class="far fa-clock me-1" style="${ssrRenderStyle({ "vertical-align": "middle", "margin-top": "-2.5px", "font-size": "10px" })}"></i> Posted ${ssrInterpolate(_ctx.date)}</div><div>${ssrInterpolate(_ctx.message)}</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/StatusCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Skeletor = resolveComponent("Skeletor");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Skeletor, {
    width: "200",
    height: "130",
    class: "mb-2 blog-thumbnail"
  }, null, _parent));
  _push(`<div style="${ssrRenderStyle({ "line-height": "18px" })}"><div class="d-block fw-semibold text-body">`);
  _push(ssrRenderComponent(_component_Skeletor, { width: "80" }, null, _parent));
  _push(`</div><div class="text-xs text-muted fw-semibold text-truncate">`);
  _push(ssrRenderComponent(_component_Skeletor, { width: "40" }, null, _parent));
  _push(`</div><div class="mt-1 text-xs fw-semibold text-muted">`);
  _push(ssrRenderComponent(_component_Skeletor, { width: "80" }, null, _parent));
  _push(` <span class="mx-1 text-muted">•  </span>`);
  _push(ssrRenderComponent(_component_Skeletor, { width: "60" }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NewsCardSkeleton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NewsCardSkeleton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  data() {
    return {
      Feed: [],
      NewsLoading: false,
      StatusLoading: false
    };
  },
  mounted() {
    this.getFeed();
  },
  methods: {
    async getFeed() {
      try {
        this.NewsLoading = true;
        const response = await axios.get(route("api.rss"));
        this.Feed = response.data;
        this.NewsLoading = false;
      } catch (error) {
        this.NewsLoading = true;
        console.error(error);
      }
    }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    recommendations: {}
  },
  setup(__props) {
    const form = useForm({
      message: ""
    });
    const statuses = ref([]);
    const getStatuses = async () => {
      try {
        const response = await axios.get(route(`api.dashboard.statuses`));
        statuses.value = response.data;
      } catch (error) {
        console.error("Error fetching statuses:", error);
      }
    };
    const initialData = statuses;
    const ActiveCategory = ref("Feed");
    function setActiveCategory(category) {
      ActiveCategory.value = category;
    }
    function createStatusUpdate(status) {
      return {
        name: usePage().props.auth.user.username,
        dname: usePage().props.auth.user.display_name,
        DateHum: "Just Now",
        message: status,
        thumbnail: usePage().props.auth.user.headshot
      };
    }
    const addStatus = throttle((status) => {
      const newStatus = createStatusUpdate(status);
      initialData.value.unshift(newStatus);
      axios.post(route(`my.dashboard.validate`), {
        message: status
      }).then((status2) => {
        console.log("Your status " + status2 + "has been posted successfully.");
      }).catch((error) => {
        console.error("Error:", error);
      });
    }, 15e3);
    const getXPProgressWidth = (currentxp, nextxp) => {
      const progress = currentxp / nextxp * 100;
      return `${progress}%`;
    };
    onMounted(() => {
      getStatuses();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$4, {
        pageTitle: "Dashboard",
        description: "Login to" + unref(usePage)().props.site.name + ".",
        url: unref(route)("auth.login.page")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 cell medium-11"${_scopeId}><div class="gap-3 align-middle flex-container"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: unref(route)(`user.profile`, { username: unref(usePage)().props.auth.user.username })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VLazyImage), {
                    src: unref(usePage)().props.auth.user.headshot,
                    width: "100",
                    class: "border headshot flex-child-shrink img-fluid rounded-circle border-secondary bg-dark v-lazy-image v-lazy-image-loaded flex-wrap col-md-4 d-flex justify-content-center align-content-start",
                    style: { "flex-direction": "column" },
                    alt: "Avatar",
                    "src-placeholder": "/assets/img/dummy_headshot.png"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VLazyImage), {
                      src: unref(usePage)().props.auth.user.headshot,
                      width: "100",
                      class: "border headshot flex-child-shrink img-fluid rounded-circle border-secondary bg-dark v-lazy-image v-lazy-image-loaded flex-wrap col-md-4 d-flex justify-content-center align-content-start",
                      style: { "flex-direction": "column" },
                      alt: "Avatar",
                      "src-placeholder": "/assets/img/dummy_headshot.png"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start" style="${ssrRenderStyle({ "flex-direction": "column" })}"${_scopeId}><div class="text-start"${_scopeId}><span class="text-base text-2xl fw-semibold"${_scopeId}> Welcome Back </span><div${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_Link, {
              class: "text-base text-2xl fw-semibold",
              href: unref(route)(`user.profile`, { username: unref(usePage)().props.auth.user.username })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate("@" + unref(usePage)().props.auth.user.username)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString("@" + unref(usePage)().props.auth.user.username), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div><div class="cell medium-3"${_scopeId}><div class="gap-2 mb-3 align-middle card-body flex-container flex-dir-column"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VLazyImage), {
              src: unref(usePage)().props.auth.user.thumbnail,
              width: "200",
              alt: "Avatar",
              "src-placeholder": "/assets/img/dummy.png"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-center fw-semibold text-md" style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="${ssrRenderClass(unref(usePage)().props.auth.user.staff ? "text-danger" : "text-success")}"${_scopeId}>${ssrInterpolate(unref(usePage)().props.auth.user.staff ? unref(usePage)().props.auth.user.position : "Netizen")}</div></div><div class="divider w-100"${_scopeId}></div><div class="w-100"${_scopeId}><div class="gap-3 align-middle flex-container"${_scopeId}><i class="text-3xl fas fa-medal text-info" style="${ssrRenderStyle({ "width": "40px" })}"${_scopeId}></i><div class="w-100"${_scopeId}><div class="mb-1 flex-container align-justify"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Rank ${ssrInterpolate("Lvl. " + unref(usePage)().props.auth.user.level)}</div><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}>${ssrInterpolate(unref(usePage)().props.auth.user.xp + "/" + unref(usePage)().props.nextlevelxp)} EXP </div></div><div class="progress-bar"${_scopeId}><span class="progress" style="${ssrRenderStyle({ width: getXPProgressWidth(unref(usePage)().props.auth.user.xp, unref(usePage)().props.nextlevelxp) })}"${_scopeId}></span></div></div></div></div></div></div><div class="cell medium-9"${_scopeId}><div class="section"${_scopeId}><ul class="tabs"${_scopeId}><li class="tab-item"${_scopeId}><a class="${ssrRenderClass([{ active: "Feed" === ActiveCategory.value }, "tab-link squish"])}"${_scopeId}>Feed</a></li><li class="tab-item"${_scopeId}><a class="${ssrRenderClass([{ active: "Stats" === ActiveCategory.value }, "tab-link squish"])}"${_scopeId}>Stats</a></li></ul></div>`);
            if (ActiveCategory.value === "Feed") {
              _push2(`<div class="section no-divider"${_scopeId}><div class="mb-1 text-xl fw-semibold"${_scopeId}> The ${ssrInterpolate(unref(usePage)().props.site.name)} Times </div>`);
              if (_ctx.NewsLoading) {
                _push2(`<div class="gap-2 cell medium-4 mb-1 align-justify flex-container"${_scopeId}>`);
                _push2(ssrRenderComponent(NewsCardSkeleton, null, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(NewsCardSkeleton, null, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(NewsCardSkeleton, null, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<div class="cell large-4 medium-4 small-1"${_scopeId}>`);
                if (!_ctx.Feed) {
                  _push2(`<div class="gap-3 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fas fa-face-sleeping text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "18px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No Blog Posts </div><div class="text-xs text-muted fw-semibold"${_scopeId}> When we publish a post it will appear here. </div></div></div>`);
                } else if (_ctx.Feed.error) {
                  _push2(`<div class="text-sm text-danger fw-semibold"${_scopeId}>${ssrInterpolate(_ctx.Feed.error)}</div>`);
                } else {
                  _push2(`<div class="grid-x grid-margin-x grid-padding-y"${_scopeId}><!--[-->`);
                  ssrRenderList(_ctx.Feed, (Bpost) => {
                    _push2(ssrRenderComponent(_sfc_main$3, {
                      class: "cell large-4 medium-6 small-12",
                      key: Bpost.link,
                      link: Bpost.link,
                      creator: Bpost.creator,
                      image: Bpost.image,
                      title: Bpost.title,
                      desc: Bpost.desc,
                      date: Bpost.date
                    }, null, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></div>`);
                }
                _push2(`</div>`);
              }
              _push2(`<div class="mb-1 text-xl fw-semibold show-for-small-only"${_scopeId}> Feed </div><div class="mb-3"${_scopeId}><div class="position-relative"${_scopeId}><textarea class="mb-2 form form-has-button form-has-section-color pe-5" rows="5" placeholder="How are you doing?"${_scopeId}>${ssrInterpolate(unref(form).message)}</textarea><input type="submit" class="btn btn-success btn-sm has-ripple" value="Post" style="${ssrRenderStyle({ "position": "absolute", "bottom": "10px", "right": "10px" })}"${_scopeId}></div></div><div class="mb-1 text-xl fw-semibold"${_scopeId}>Posts</div><div class="card card-body"${_scopeId}>`);
              if (!statuses.value.length) {
                _push2(`<div class="gap-3 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fas fa-face-sleeping text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No Posts </div><div class="text-xs text-muted fw-semibold"${_scopeId}> Start following players and their posts will appear here. </div></div></div>`);
              } else {
                _push2(`<!--[-->`);
                ssrRenderList(unref(initialData), (status, index) => {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    key: index,
                    DisplayName: status.dname,
                    Thumbnail: status.thumbnail,
                    name: status.name,
                    message: status.message,
                    date: status.DateHum
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }
              _push2(`</div></div>`);
            } else if (ActiveCategory.value === "Stats") {
              _push2(`<div class="section no-divider"${_scopeId}><div class="grid-x grid-margin-x grid-padding-y"${_scopeId}><div class="card card-body cell large-4 medium-6 small-12"${_scopeId}><div class="flex-container"${_scopeId}><div class="text-start"${_scopeId}><div class="text-xs fw-semibold text-warning text-uppercase"${_scopeId}><i class="fad fa-crown"${_scopeId}></i> Total Sales</div><div class="mb-1 text-xl text-uppercase"${_scopeId}>${ssrInterpolate(unref(usePage)().props.totalSales)}</div></div></div></div><div class="card card-body cell large-4 medium-6 small-12"${_scopeId}><div class="flex-container"${_scopeId}><div class="text-start"${_scopeId}><div class="text-xs fw-semibold text-success text-uppercase"${_scopeId}><i class="fad fa-user"${_scopeId}></i> Total Followers</div><div class="mb-1 text-xl text-uppercase"${_scopeId}>${ssrInterpolate(unref(usePage)().props.totalFollowers)}</div></div></div></div><div class="card card-body cell large-4 medium-6 small-12"${_scopeId}><div class="flex-container"${_scopeId}><div class="text-start"${_scopeId}><div class="text-xs fw-semibold text-info text-uppercase"${_scopeId}><i class="fad fa-message"${_scopeId}></i> Total Posts</div><div class="mb-1 text-xl text-uppercase"${_scopeId}>${ssrInterpolate(unref(usePage)().props.totalPosts)}</div></div></div></div>`);
              if (unref(usePage)().props.auth.user.staff) {
                _push2(`<div class="card card-body cell large-4 medium-6 small-12"${_scopeId}><div class="flex-container"${_scopeId}><div class="text-start"${_scopeId}><div class="text-xs fw-semibold text-danger text-uppercase"${_scopeId}><i class="fad fa-gavel"${_scopeId}></i> Pending Assets</div><div class="mb-1 text-xl text-uppercase"${_scopeId}>${ssrInterpolate(unref(usePage)().props.auth.user.pendingAssets)}</div></div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mb-1 text-xl fw-semibold"${_scopeId}> Today&#39;s Reccomendations </div><div class="divider mx-1 my-2"${_scopeId}></div><div class="text-sm text-muted mt-2"${_scopeId}><div class="mb-2 text-sm text-body fw-semibold"${_scopeId}>`);
              if (_ctx.recommendations.length) {
                _push2(`<div class="grid-x grid-margin-x"${_scopeId}><!--[-->`);
                ssrRenderList(_ctx.recommendations, (suggestion) => {
                  _push2(`<div class="cell large-2 medium-3 small-6"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Link, {
                    href: unref(route)("store.item", { id: suggestion.id }),
                    class: "d-block"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="p-2 mb-1 card card-inner position-relative"${_scopeId2}><img${ssrRenderAttr("src", suggestion.thumbnail)}${_scopeId2}></div><div class="text-body text-md fw-semibold text-truncate"${_scopeId2}>${ssrInterpolate(suggestion.name)}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "p-2 mb-1 card card-inner position-relative" }, [
                            createVNode("img", {
                              src: suggestion.thumbnail
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "text-body text-md fw-semibold text-truncate" }, toDisplayString(suggestion.name), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<div class="text-sm fw-bold text-muted"${_scopeId}> There is no reccomendations. </div>`);
              }
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 cell medium-11" }, [
                createVNode("div", { class: "gap-3 align-middle flex-container" }, [
                  createVNode(_component_Link, {
                    href: unref(route)(`user.profile`, { username: unref(usePage)().props.auth.user.username })
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(VLazyImage), {
                        src: unref(usePage)().props.auth.user.headshot,
                        width: "100",
                        class: "border headshot flex-child-shrink img-fluid rounded-circle border-secondary bg-dark v-lazy-image v-lazy-image-loaded flex-wrap col-md-4 d-flex justify-content-center align-content-start",
                        style: { "flex-direction": "column" },
                        alt: "Avatar",
                        "src-placeholder": "/assets/img/dummy_headshot.png"
                      }, null, 8, ["src"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode("div", {
                    class: "flex-wrap col-md-4 d-flex justify-content-center align-content-start",
                    style: { "flex-direction": "column" }
                  }, [
                    createVNode("div", { class: "text-start" }, [
                      createVNode("span", { class: "text-base text-2xl fw-semibold" }, " Welcome Back "),
                      createVNode("div"),
                      createVNode(_component_Link, {
                        class: "text-base text-2xl fw-semibold",
                        href: unref(route)(`user.profile`, { username: unref(usePage)().props.auth.user.username })
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString("@" + unref(usePage)().props.auth.user.username), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "cell medium-3" }, [
                createVNode("div", { class: "gap-2 mb-3 align-middle card-body flex-container flex-dir-column" }, [
                  createVNode(unref(VLazyImage), {
                    src: unref(usePage)().props.auth.user.thumbnail,
                    width: "200",
                    alt: "Avatar",
                    "src-placeholder": "/assets/img/dummy.png"
                  }, null, 8, ["src"]),
                  createVNode("div", {
                    class: "text-center fw-semibold text-md",
                    style: { "line-height": "16px" }
                  }, [
                    createVNode("div", {
                      class: unref(usePage)().props.auth.user.staff ? "text-danger" : "text-success"
                    }, toDisplayString(unref(usePage)().props.auth.user.staff ? unref(usePage)().props.auth.user.position : "Netizen"), 3)
                  ]),
                  createVNode("div", { class: "divider w-100" }),
                  createVNode("div", { class: "w-100" }, [
                    createVNode("div", { class: "gap-3 align-middle flex-container" }, [
                      createVNode("i", {
                        class: "text-3xl fas fa-medal text-info",
                        style: { "width": "40px" }
                      }),
                      createVNode("div", { class: "w-100" }, [
                        createVNode("div", { class: "mb-1 flex-container align-justify" }, [
                          createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Rank " + toDisplayString("Lvl. " + unref(usePage)().props.auth.user.level), 1),
                          createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, toDisplayString(unref(usePage)().props.auth.user.xp + "/" + unref(usePage)().props.nextlevelxp) + " EXP ", 1)
                        ]),
                        createVNode("div", { class: "progress-bar" }, [
                          createVNode("span", {
                            class: "progress",
                            style: { width: getXPProgressWidth(unref(usePage)().props.auth.user.xp, unref(usePage)().props.nextlevelxp) }
                          }, null, 4)
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "cell medium-9" }, [
                createVNode("div", { class: "section" }, [
                  createVNode("ul", { class: "tabs" }, [
                    createVNode("li", { class: "tab-item" }, [
                      createVNode("a", {
                        class: ["tab-link squish", { active: "Feed" === ActiveCategory.value }],
                        onClick: ($event) => setActiveCategory("Feed")
                      }, "Feed", 10, ["onClick"])
                    ]),
                    createVNode("li", { class: "tab-item" }, [
                      createVNode("a", {
                        class: ["tab-link squish", { active: "Stats" === ActiveCategory.value }],
                        onClick: ($event) => setActiveCategory("Stats")
                      }, "Stats", 10, ["onClick"])
                    ])
                  ])
                ]),
                ActiveCategory.value === "Feed" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "section no-divider"
                }, [
                  createVNode("div", { class: "mb-1 text-xl fw-semibold" }, " The " + toDisplayString(unref(usePage)().props.site.name) + " Times ", 1),
                  _ctx.NewsLoading ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "gap-2 cell medium-4 mb-1 align-justify flex-container"
                  }, [
                    createVNode(NewsCardSkeleton),
                    createVNode(NewsCardSkeleton),
                    createVNode(NewsCardSkeleton)
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "cell large-4 medium-4 small-1"
                  }, [
                    !_ctx.Feed ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "gap-3 text-center flex-container flex-dir-column"
                    }, [
                      createVNode("i", { class: "text-5xl fas fa-face-sleeping text-muted" }),
                      createVNode("div", { style: { "line-height": "18px" } }, [
                        createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " No Blog Posts "),
                        createVNode("div", { class: "text-xs text-muted fw-semibold" }, " When we publish a post it will appear here. ")
                      ])
                    ])) : _ctx.Feed.error ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-sm text-danger fw-semibold"
                    }, toDisplayString(_ctx.Feed.error), 1)) : (openBlock(), createBlock("div", {
                      key: 2,
                      class: "grid-x grid-margin-x grid-padding-y"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.Feed, (Bpost) => {
                        return openBlock(), createBlock(_sfc_main$3, {
                          class: "cell large-4 medium-6 small-12",
                          key: Bpost.link,
                          link: Bpost.link,
                          creator: Bpost.creator,
                          image: Bpost.image,
                          title: Bpost.title,
                          desc: Bpost.desc,
                          date: Bpost.date
                        }, null, 8, ["link", "creator", "image", "title", "desc", "date"]);
                      }), 128))
                    ]))
                  ])),
                  createVNode("div", { class: "mb-1 text-xl fw-semibold show-for-small-only" }, " Feed "),
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("div", { class: "position-relative" }, [
                      withDirectives(createVNode("textarea", {
                        class: "mb-2 form form-has-button form-has-section-color pe-5",
                        rows: "5",
                        "onUpdate:modelValue": ($event) => unref(form).message = $event,
                        placeholder: "How are you doing?"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).message]
                      ]),
                      createVNode("input", {
                        type: "submit",
                        onClick: ($event) => unref(addStatus)(unref(form).message),
                        class: "btn btn-success btn-sm has-ripple",
                        value: "Post",
                        style: { "position": "absolute", "bottom": "10px", "right": "10px" }
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "mb-1 text-xl fw-semibold" }, "Posts"),
                  createVNode("div", { class: "card card-body" }, [
                    !statuses.value.length ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "gap-3 text-center flex-container flex-dir-column"
                    }, [
                      createVNode("i", { class: "text-5xl fas fa-face-sleeping text-muted" }),
                      createVNode("div", { style: { "line-height": "16px" } }, [
                        createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " No Posts "),
                        createVNode("div", { class: "text-xs text-muted fw-semibold" }, " Start following players and their posts will appear here. ")
                      ])
                    ])) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(initialData), (status, index) => {
                      return openBlock(), createBlock(_sfc_main$2, {
                        key: index,
                        DisplayName: status.dname,
                        Thumbnail: status.thumbnail,
                        name: status.name,
                        message: status.message,
                        date: status.DateHum
                      }, null, 8, ["DisplayName", "Thumbnail", "name", "message", "date"]);
                    }), 128))
                  ])
                ])) : ActiveCategory.value === "Stats" ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "section no-divider"
                }, [
                  createVNode("div", { class: "grid-x grid-margin-x grid-padding-y" }, [
                    createVNode("div", { class: "card card-body cell large-4 medium-6 small-12" }, [
                      createVNode("div", { class: "flex-container" }, [
                        createVNode("div", { class: "text-start" }, [
                          createVNode("div", { class: "text-xs fw-semibold text-warning text-uppercase" }, [
                            createVNode("i", { class: "fad fa-crown" }),
                            createTextVNode(" Total Sales")
                          ]),
                          createVNode("div", { class: "mb-1 text-xl text-uppercase" }, toDisplayString(unref(usePage)().props.totalSales), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "card card-body cell large-4 medium-6 small-12" }, [
                      createVNode("div", { class: "flex-container" }, [
                        createVNode("div", { class: "text-start" }, [
                          createVNode("div", { class: "text-xs fw-semibold text-success text-uppercase" }, [
                            createVNode("i", { class: "fad fa-user" }),
                            createTextVNode(" Total Followers")
                          ]),
                          createVNode("div", { class: "mb-1 text-xl text-uppercase" }, toDisplayString(unref(usePage)().props.totalFollowers), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "card card-body cell large-4 medium-6 small-12" }, [
                      createVNode("div", { class: "flex-container" }, [
                        createVNode("div", { class: "text-start" }, [
                          createVNode("div", { class: "text-xs fw-semibold text-info text-uppercase" }, [
                            createVNode("i", { class: "fad fa-message" }),
                            createTextVNode(" Total Posts")
                          ]),
                          createVNode("div", { class: "mb-1 text-xl text-uppercase" }, toDisplayString(unref(usePage)().props.totalPosts), 1)
                        ])
                      ])
                    ]),
                    unref(usePage)().props.auth.user.staff ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "card card-body cell large-4 medium-6 small-12"
                    }, [
                      createVNode("div", { class: "flex-container" }, [
                        createVNode("div", { class: "text-start" }, [
                          createVNode("div", { class: "text-xs fw-semibold text-danger text-uppercase" }, [
                            createVNode("i", { class: "fad fa-gavel" }),
                            createTextVNode(" Pending Assets")
                          ]),
                          createVNode("div", { class: "mb-1 text-xl text-uppercase" }, toDisplayString(unref(usePage)().props.auth.user.pendingAssets), 1)
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "mb-1 text-xl fw-semibold" }, " Today's Reccomendations "),
                  createVNode("div", { class: "divider mx-1 my-2" }),
                  createVNode("div", { class: "text-sm text-muted mt-2" }, [
                    createVNode("div", { class: "mb-2 text-sm text-body fw-semibold" }, [
                      _ctx.recommendations.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "grid-x grid-margin-x"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.recommendations, (suggestion) => {
                          return openBlock(), createBlock("div", { class: "cell large-2 medium-3 small-6" }, [
                            createVNode(_component_Link, {
                              href: unref(route)("store.item", { id: suggestion.id }),
                              class: "d-block"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "p-2 mb-1 card card-inner position-relative" }, [
                                  createVNode("img", {
                                    src: suggestion.thumbnail
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", { class: "text-body text-md fw-semibold text-truncate" }, toDisplayString(suggestion.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ]);
                        }), 256))
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-sm fw-bold text-muted"
                      }, " There is no reccomendations. "))
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
