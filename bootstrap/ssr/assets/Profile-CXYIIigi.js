import { defineComponent, ref, reactive, computed, onMounted, watch, resolveComponent, resolveDirective, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, mergeProps, withDirectives, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import axios from "axios";
import { usePage, Link } from "@inertiajs/vue3";
import { route } from "momentum-trail";
import VLazyImage from "v-lazy-image";
import { _ as _sfc_main$3 } from "./Footer-CxsG0LBb.js";
import { _ as _sfc_main$2 } from "./Navbar-30Vv0CN7.js";
import { S as Sidebar } from "./Sidebar-BQWvWV-r.js";
import { _ as _sfc_main$1 } from "../ssr.js";
import { I as ItemCardSkeleton } from "./ItemCardSkeleton-CFh_af1c.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash/throttle.js";
import "vue-tippy";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "portal-vue";
const __default__ = {
  methods: {
    showModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.toggle("active");
      }
    }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "Profile",
  __ssrInlineRender: true,
  props: {
    user: { type: Object },
    is_following: { type: Boolean },
    statuses: { type: Array }
  },
  setup(__props) {
    let following = ref(usePage().props.is_following);
    const toggleFollow = (id) => {
      if (following.value) {
        unfollowUser(id);
      } else {
        followUser(id);
      }
    };
    const items = ref([]);
    const CurentlyWearingItems = ref([]);
    const ItemLoading = ref(false);
    var userAvatar = reactive({
      color_head: computed(
        () => {
          var _a;
          return (_a = usePage().props.user.avatar) == null ? void 0 : _a["color_head"];
        }
      ),
      color_torso: computed(
        () => {
          var _a;
          return (_a = usePage().props.user.avatar) == null ? void 0 : _a["color_torso"];
        }
      ),
      color_left_arm: computed(
        () => {
          var _a;
          return (_a = usePage().props.user.avatar) == null ? void 0 : _a["color_left_arm"];
        }
      ),
      color_right_arm: computed(
        () => {
          var _a;
          return (_a = usePage().props.user.avatar) == null ? void 0 : _a["color_right_arm"];
        }
      ),
      color_left_leg: computed(
        () => {
          var _a;
          return (_a = usePage().props.user.avatar) == null ? void 0 : _a["color_left_leg"];
        }
      ),
      color_right_leg: computed(
        () => {
          var _a;
          return (_a = usePage().props.user.avatar) == null ? void 0 : _a["color_right_leg"];
        }
      ),
      image: computed(
        () => {
          var _a;
          return (_a = usePage().props.user.avatar) == null ? void 0 : _a["thumbnail"];
        }
      ),
      current_face: computed(
        () => {
          var _a;
          return (_a = usePage().props.user.avatar) == null ? void 0 : _a["current_face"];
        }
      )
    });
    function onImgErrorSmall(id) {
      let source = document.getElementById(id);
      source.src = "/assets/img/dummy-error.png";
      source.onerror = null;
      return true;
    }
    async function fetchItems() {
      try {
        ItemLoading.value = true;
        const response = await axios.get(
          route(`api.user.inventory`, { id: usePage().props.user.id })
        );
        items.value = response.data;
        ItemLoading.value = false;
      } catch (error) {
        console.error(error);
      }
    }
    async function fetchCurrentlyWearing() {
      try {
        ItemLoading.value = true;
        const response = await axios.get(
          route(`api.user.currently-wearing`, { id: usePage().props.user.id })
        );
        CurentlyWearingItems.value = response.data;
        ItemLoading.value = false;
      } catch (error) {
        console.error(error);
      }
    }
    const itemRoute = (itemId) => route(`store.item`, { id: itemId });
    const creatorRoute = (username) => route(`user.profile`, { username });
    const ActiveCategory = ref("Posts");
    function setActiveCategory(category) {
      ActiveCategory.value = category;
    }
    const showSuccessMessage = (message) => {
      console.log("Success:", message);
    };
    let followercount = ref(usePage().props.user.followers_count);
    const followUser = (id) => {
      axios.get(route(`api.user.follow`, { user: id })).then((response) => {
        const successMessage = response.data.message;
        showSuccessMessage(successMessage);
        following.value = true;
        followercount.value + 1;
      }).catch((error) => {
        console.error("Error following user:", error);
      });
    };
    const unfollowUser = (id) => {
      axios.post(route(`api.user.unfollow`, { user: id })).then((response) => {
        const successMessage = response.data.message;
        showSuccessMessage(successMessage);
        following.value = false;
        followercount.value - 1;
      }).catch((error) => {
        console.error("Error unfollowing user:", error);
      });
    };
    onMounted(() => {
      fetchItems(), fetchCurrentlyWearing();
    });
    watch(following, (newValue, oldValue) => {
      console.log("Following variable changed from", oldValue, "to", newValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_portal = resolveComponent("portal");
      const _component_Pagination = resolveComponent("Pagination");
      const _directive_tippy = resolveDirective("tippy");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: unref(usePage)().props.user.username + "'s Profile",
        description: unref(usePage)().props.user.about_me,
        url: unref(route)(`user.profile`, { username: unref(usePage)().props.user.username })
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, {
        alertsEnabled: false,
        image: unref(usePage)().props.user.settings.profile_banner_enabled ? unref(usePage)().props.user.settings.profile_banner_url : null,
        superBanActive: true,
        OfficialImageBackground: false,
        superBanType: "image"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="modal" id="following-modal"${_scopeId}><div class="modal-card modal-card-body"${_scopeId}><div class="section-borderless"${_scopeId}><div class="gap-2 align-middle flex-container align-justify"${_scopeId}><div class="text-lg fw-semibold"${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.display_name)}&#39;s Following </div><button class="btn-circle" data-toggle-modal="#following-modal" style="${ssrRenderStyle({ "margin-right": "-10px" })}"${_scopeId}><i class="fad fa-times"${_scopeId}></i></button></div></div><div class="section-borderless"${_scopeId}><div class="section"${_scopeId}><!--[-->`);
            ssrRenderList(unref(usePage)().props.user.following, (followingUser, index) => {
              _push2(`<!--[--><div class="gap-2 mt-2 mb-2 align-middle flex-container align-justify"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(VLazyImage), {
                src: followingUser.thumbnail,
                "src-default": "/assets/img/dummy_headshot.png",
                class: "headshot",
                width: "50"
              }, null, _parent2, _scopeId));
              _push2(`<div class="w-100"${_scopeId}><div class="fw-semibold"${_scopeId}>${ssrInterpolate(followingUser.display_name)}</div><div class="text-sm fw-semibold text-muted"${_scopeId}> @${ssrInterpolate(followingUser.username)}</div></div><div class="gap-2 mt-2 mb-2 align-middle flex-container align-justify"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)(`user.profile`, { username: followingUser.username }),
                class: "min-w-0 btn btn-info btn-sm text-truncate"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` View Profile `);
                  } else {
                    return [
                      createTextVNode(" View Profile ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
              if (index < unref(usePage)().props.user.following.length - 1) {
                _push2(`<div class="divider w-100"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div></div></div><div class="modal" id="followers-modal"${_scopeId}><div class="modal-card modal-card-body"${_scopeId}><div class="section-borderless"${_scopeId}><div class="gap-2 align-middle flex-container align-justify"${_scopeId}><div class="text-lg fw-semibold"${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.display_name)}&#39;s Followers </div><button class="btn-circle" data-toggle-modal="#followers-modal" style="${ssrRenderStyle({ "margin-right": "-10px" })}"${_scopeId}><i class="fad fa-times"${_scopeId}></i></button></div></div><div class="section-borderless"${_scopeId}><div class="section"${_scopeId}><!--[-->`);
            ssrRenderList(unref(usePage)().props.user.followers, (followerUser, index) => {
              _push2(`<!--[--><div class="gap-2 mt-2 mb-2 align-middle flex-container align-justify"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(VLazyImage), {
                src: followerUser.thumbnail,
                "src-default": "/assets/img/dummy_headshot.png",
                class: "headshot",
                width: "50"
              }, null, _parent2, _scopeId));
              _push2(`<div class="w-100"${_scopeId}><div class="fw-semibold"${_scopeId}>${ssrInterpolate(followerUser.display_name)}</div><div class="text-sm fw-semibold text-muted"${_scopeId}>${ssrInterpolate("@" + followerUser.username)}</div></div><div class="gap-2 mt-2 mb-2 align-middle flex-container align-justify"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)(`user.profile`, { username: followerUser.username }),
                class: "min-w-0 btn btn-info btn-sm text-truncate"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` View Profile `);
                  } else {
                    return [
                      createTextVNode(" View Profile ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
              if (index < unref(usePage)().props.user.followers.length - 1) {
                _push2(`<div class="divider w-100"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div></div></div><template${_scopeId}>`);
            _push2(ssrRenderComponent(_component_portal, { to: "bannerAsset" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c, _d;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VLazyImage), {
                    style: ((_a2 = unref(usePage)().props.user) == null ? void 0 : _a2.settings.calling_card_enabled) ? {
                      margin: "0",
                      "background-image": "url(" + ((_b2 = unref(usePage)().props.user) == null ? void 0 : _b2.settings.calling_card_url) + ")",
                      "background-repeat": "no-repeat",
                      "background-size": "cover",
                      "box-shadow": "inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important"
                    } : null,
                    src: unref(usePage)().props.user.headshot,
                    width: "100",
                    class: "space-image",
                    alt: "Headshot",
                    "src-placeholder": "assets/img/space-error.png"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VLazyImage), {
                      style: ((_c = unref(usePage)().props.user) == null ? void 0 : _c.settings.calling_card_enabled) ? {
                        margin: "0",
                        "background-image": "url(" + ((_d = unref(usePage)().props.user) == null ? void 0 : _d.settings.calling_card_url) + ")",
                        "background-repeat": "no-repeat",
                        "background-size": "cover",
                        "box-shadow": "inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important"
                      } : null,
                      src: unref(usePage)().props.user.headshot,
                      width: "100",
                      class: "space-image",
                      alt: "Headshot",
                      "src-placeholder": "assets/img/space-error.png"
                    }, null, 8, ["style", "src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_portal, { to: "bannerName" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-xl" style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId2}><div class="mb-1 flex-container align-middle gap-1 fw-semibold"${_scopeId2}>${ssrInterpolate(unref(usePage)().props.user.display_name)} `);
                  if (unref(usePage)().props.user.staff) {
                    _push3(`<i class="fad fa-gavel text-danger"${_scopeId2}></i>`);
                  } else if (unref(usePage)().props.user.settings.beta_tester) {
                    _push3(`<i class="fad fa-hard-hat text-success"${_scopeId2}></i>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(VLazyImage), {
                    src: "/assets/img/flags/" + unref(usePage)().props.user.settings.country_code + ".svg",
                    alt: "Country Flag",
                    style: { "width": "auto", "height": "20px" },
                    "src-placeholder": "/assets/img/flags/other/pirate.svg"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="text-sm text-muted fw-semibold"${_scopeId2}>${ssrInterpolate("@" + unref(usePage)().props.user.username)}</div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "text-xl",
                      style: { "line-height": "16px" }
                    }, [
                      createVNode("div", { class: "mb-1 flex-container align-middle gap-1 fw-semibold" }, [
                        createTextVNode(toDisplayString(unref(usePage)().props.user.display_name) + " ", 1),
                        unref(usePage)().props.user.staff ? (openBlock(), createBlock("i", {
                          key: 0,
                          class: "fad fa-gavel text-danger"
                        })) : unref(usePage)().props.user.settings.beta_tester ? (openBlock(), createBlock("i", {
                          key: 1,
                          class: "fad fa-hard-hat text-success"
                        })) : createCommentVNode("", true),
                        createVNode(unref(VLazyImage), {
                          src: "/assets/img/flags/" + unref(usePage)().props.user.settings.country_code + ".svg",
                          alt: "Country Flag",
                          style: { "width": "auto", "height": "20px" },
                          "src-placeholder": "/assets/img/flags/other/pirate.svg"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "text-sm text-muted fw-semibold" }, toDisplayString("@" + unref(usePage)().props.user.username), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_portal, { to: "bannerDescription" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(usePage)().props.user.status ?? "This user does not have a status.")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(usePage)().props.user.status ?? "This user does not have a status."), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_portal, { to: "bannerButtons" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(usePage)().props.auth.user && unref(usePage)().props.user.id != unref(usePage)().props.auth.user.id) {
                    _push3(`<div class="min-w-0 gap-2 mt-2 mb-3 flex-container"${_scopeId2}><button${ssrRenderAttrs(mergeProps({
                      class: ["text-xl", "squish", unref(following) ? "text-danger" : "text-info"],
                      content: unref(following) ? "Unfollow" : "Follow"
                    }, ssrGetDirectiveProps(_ctx, _directive_tippy, { placement: "bottom" })))}${_scopeId2}><i class="${ssrRenderClass(unref(following) ? "fad fa-user-minus" : "fad fa-user-plus")}"${_scopeId2}></i></button><button${ssrRenderAttrs(mergeProps({
                      class: "text-xl text-success squish",
                      content: "Chat With " + unref(usePage)().props.user.display_name
                    }, ssrGetDirectiveProps(_ctx, _directive_tippy, { placement: "bottom" })))}${_scopeId2}><i class="fad fa-message"${_scopeId2}></i></button>`);
                    if (unref(usePage)().props.auth.user.staff) {
                      _push3(`<a${ssrRenderAttrs(mergeProps({
                        as: "button",
                        href: unref(route)(`admin.users.manage-user`, { id: unref(usePage)().props.user.id }),
                        class: "text-xl text-danger squish",
                        content: "View in Panel"
                      }, ssrGetDirectiveProps(_ctx, _directive_tippy, { placement: "bottom" })))}${_scopeId2}><i class="fad fa-pen-to-square"${_scopeId2}></i></a>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(usePage)().props.auth.user && unref(usePage)().props.user.id != unref(usePage)().props.auth.user.id ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "min-w-0 gap-2 mt-2 mb-3 flex-container"
                    }, [
                      withDirectives((openBlock(), createBlock("button", {
                        class: ["text-xl", "squish", unref(following) ? "text-danger" : "text-info"],
                        onClick: ($event) => toggleFollow(unref(usePage)().props.user.id),
                        content: unref(following) ? "Unfollow" : "Follow"
                      }, [
                        createVNode("i", {
                          class: unref(following) ? "fad fa-user-minus" : "fad fa-user-plus"
                        }, null, 2)
                      ], 10, ["onClick", "content"])), [
                        [_directive_tippy, { placement: "bottom" }]
                      ]),
                      withDirectives((openBlock(), createBlock("button", {
                        class: "text-xl text-success squish",
                        content: "Chat With " + unref(usePage)().props.user.display_name
                      }, [
                        createVNode("i", { class: "fad fa-message" })
                      ], 8, ["content"])), [
                        [_directive_tippy, { placement: "bottom" }]
                      ]),
                      unref(usePage)().props.auth.user.staff ? withDirectives((openBlock(), createBlock("a", {
                        key: 0,
                        as: "button",
                        href: unref(route)(`admin.users.manage-user`, { id: unref(usePage)().props.user.id }),
                        class: "text-xl text-danger squish",
                        content: "View in Panel"
                      }, [
                        createVNode("i", { class: "fad fa-pen-to-square" })
                      ], 8, ["href"])), [
                        [_directive_tippy, { placement: "bottom" }]
                      ]) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</template><div class="cell medium-3"${_scopeId}><div class="mb-2 align-middle flex-container align-justify"${_scopeId}><div class="gap-3 align-middle flex-container"${_scopeId}></div></div><div class="${ssrRenderClass(["card", "card-body", "mb-2", "card-status", unref(usePage)().props.user.online ? "online" : "offline"])}" style="${ssrRenderStyle(unref(usePage)().props.user.settings.calling_card_enabled ? {
              "background-image": "url(" + unref(usePage)().props.user.settings.calling_card_url + ")",
              "background-repeat": "no-repeat",
              "background-size": "cover",
              "box-shadow": "inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important"
            } : null)}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VLazyImage), {
              src: unref(usePage)().props.user.thumbnail ? unref(usePage)().props.user.thumbnail : "/assets/img/dummy.png",
              "src-placeholder": "/assets/img/dummy.png"
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-2 text-sm text-center align-center text-info fw-semibold"${_scopeId}><div class="${ssrRenderClass(unref(usePage)().props.user.staff ? "text-danger" : "text-success")}"${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.staff ? unref(usePage)().props.user.position : "Netizen")}</div></div></div><div class="mb-1 card-body"${_scopeId}><div class="mt-2 text-center"${_scopeId}><div class="gap-3 text-sm flex-container align-center"${_scopeId}><button class="min-w-0 px-0 text-center fw-semibold text-muted text-truncate"${_scopeId}><span class="text-body"${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.following_count)}</span> Following </button><button class="min-w-0 px-0 text-center fw-semibold text-muted text-truncate"${_scopeId}><span class="text-body"${_scopeId}>${ssrInterpolate(unref(followercount))}</span> Followers </button></div>`);
            if (unref(usePage)().props.user.followsYou) {
              _push2(`<div class="text-sm text-info fw-semibold"${_scopeId}> Follows you </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><a class="gap-2 p-2 mt-1 mb-2 align-middle card card-inner flex-container"${_scopeId}><img src="assets/img/space_placeholder.png" class="headshot" width="40"${_scopeId}><div class="min-w-0" style="${ssrRenderStyle({ "line-height": "14px" })}"${_scopeId}><div class="text-xs text-truncate fw-bold text-muted text-uppercase"${_scopeId}> Primary Space </div><div class="text-sm text-truncate fw-semibold text-body"${_scopeId}> Namesnipe </div></div></a><div class="mb-1 text-xl fw-semibold"${_scopeId}>About Me</div><div class="mb-3 card card-body"${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.about_me)}</div><div class="mb-1 text-xl fw-semibold"${_scopeId}>Statistics</div><div class="mb-3 card card-body"${_scopeId}><div class="gap-1 align-middle flex-container flex-dir-column"${_scopeId}><div class="text-sm text-membership fw-semibold w-100"${_scopeId}><i class="text-center fad fa-rocket-launch text-membership" style="${ssrRenderStyle({ "width": "26px" })}"${_scopeId}></i> Premium Subscriber </div><div class="text-sm w-100"${_scopeId}><i class="text-center fad fa-medal text-muted" style="${ssrRenderStyle({ "width": "26px" })}"${_scopeId}></i> ${ssrInterpolate("Rank Lvl. " + unref(usePage)().props.user.level)}</div><div class="text-sm w-100"${_scopeId}><i class="text-center fad fa-users-medical text-muted" style="${ssrRenderStyle({ "width": "26px" })}"${_scopeId}></i> Joined on ${ssrInterpolate(unref(usePage)().props.user.joindate)}</div><div class="text-sm w-100"${_scopeId}><i class="text-center fad fa-clock text-muted" style="${ssrRenderStyle({ "width": "26px" })}"${_scopeId}></i> Last seen ${ssrInterpolate(unref(usePage)().props.user.DateHum)}</div><div class="text-sm w-100"${_scopeId}><i class="text-center fad fa-messages text-muted" style="${ssrRenderStyle({ "width": "26px" })}"${_scopeId}></i> ${ssrInterpolate(unref(usePage)().props.user.posts)} Discussion Posts </div></div></div><div class="mb-1 text-xl fw-semibold"${_scopeId}>Spaces</div><div class="mb-3 card card-body"${_scopeId}><div class="gap-3 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fad fa-planet-ringed text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No Spaces </div><div class="text-xs text-muted fw-semibold"${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.username)} has not joined any spaces. </div></div></div><div class="grid-x grid-margin-x grid-padding-y"${_scopeId}><div class="text-center cell medium-4 small-4"${_scopeId}><a href="#" class="text-body"${_scopeId}><img src="/assets/img/space_placeholder.png" class="mb-1"${_scopeId}><div${_scopeId}><div class="text-sm fw-semibold text-truncate"${_scopeId}><i class="mb-1 text-xs text-info fw-bold text-uppercase fad fa-star"${_scopeId}></i>  Namesnipe </div><div class="text-xs text-muted fw-semibold"${_scopeId}> 12K Members </div></div></a></div><div class="text-center cell medium-4 small-4"${_scopeId}><a href="#" class="text-body"${_scopeId}><img src="/assets/img/icon.png" class="mb-1"${_scopeId}><div${_scopeId}><div class="text-sm fw-semibold text-truncate"${_scopeId}> Project Eclipse </div><div class="text-xs text-muted fw-semibold"${_scopeId}>4 Members</div></div></a></div></div></div></div><div class="cell medium-9"${_scopeId}><div style="${ssrRenderStyle({ "height": "10px" })}"${_scopeId}></div><div class="mb-1 align-middle flex-container align-justify"${_scopeId}><div class="mb-1 text-xl fw-semibold"${_scopeId}>Acheivements</div><a href="#" class="btn btn-secondary btn-sm"${_scopeId}>View All</a></div><div class="mb-3 card card-body"${_scopeId}>`);
            if (!unref(usePage)().props.user.acheivements || !unref(usePage)().props.user.acheivements.length) {
              _push2(`<div class="gap-3 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fad fa-badge text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No Acheivements </div><div class="text-xs text-muted fw-semibold"${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.username)} has no acheivements. </div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex-wrap gap-3 flex-container align-center"${_scopeId}><!--[-->`);
            ssrRenderList(unref(usePage)().props.user.acheivements, (acheivement) => {
              _push2(`<div class="min-w-0 text-center" style="${ssrRenderStyle({ "width": "80px" })}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)(`achivements`)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", acheivement.image)}${_scopeId2}><div class="text-sm text-muted fw-semibold text-truncate"${_scopeId2}>${ssrInterpolate(acheivement.name)}</div>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: acheivement.image
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "text-sm text-muted fw-semibold text-truncate" }, toDisplayString(acheivement.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div><div class="mb-3 card card-body"${_scopeId}><div class="section"${_scopeId}><ul class="tabs"${_scopeId}><li class="tab-item"${_scopeId}><a class="${ssrRenderClass([{ active: "Posts" === ActiveCategory.value }, "tab-link squish"])}"${_scopeId}>Posts</a></li><li class="tab-item"${_scopeId}><a class="${ssrRenderClass([{ active: "Inventory" === ActiveCategory.value }, "tab-link squish"])}"${_scopeId}>Inventory</a></li></ul></div>`);
            if (ActiveCategory.value === "Posts") {
              _push2(`<div${_scopeId}>`);
              if (!((_a = __props.statuses.data) == null ? void 0 : _a["length"])) {
                _push2(`<div class="section"${_scopeId}><div class="gap-3 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fad fa-face-sleeping text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No Posts </div><div class="text-xs text-muted fw-semibold"${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.username)} has not posted anything to their feed. </div></div></div></div>`);
              } else {
                _push2(`<!--[-->`);
                ssrRenderList(__props.statuses.data, (status) => {
                  _push2(`<div class="gap-3 section flex-container flex-dir-column-sm"${_scopeId}><div class="mx-auto flex-child-grow" style="${ssrRenderStyle({ "width": "100px" })}"${_scopeId}><a href="#" class="text-sm text-center d-block squish"${_scopeId}><img src="/assets/img/dummy_headshot.png" class="mb-1 headshot" width="60"${_scopeId}><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-membership text-truncate"${_scopeId}>${ssrInterpolate(status.dname)}</div><div class="text-xs text-muted text-truncate"${_scopeId}>${ssrInterpolate("@" + status.name)}</div></div></a></div><div class="card card-body card-inner w-100"${_scopeId}><div class="align-middle flex-container align-justify"${_scopeId}><div class="w-100"${_scopeId}><div class="text-xs text-muted"${_scopeId}><i class="far fa-clock me-1" style="${ssrRenderStyle({ "vertical-align": "middle", "margin-top": "-2.5px", "font-size": "10px" })}"${_scopeId}></i> ${ssrInterpolate(status.DateHum)}</div><div${_scopeId}>${ssrInterpolate(status.message)}</div><div class="text-sm" style="${ssrRenderStyle({ "margin-left": "-6px" })}"${_scopeId}><button class="btn-like active squish"${_scopeId}><i class="far fa-heart"${_scopeId}></i>1 </button></div></div><div class="dropdown ms-auto position-relative"${_scopeId}><button class="btn-circle" style="${ssrRenderStyle({ "margin-right": "-10px" })}"${_scopeId}><i class="fad fa-ellipsis-vertical"${_scopeId}></i></button><ul class="dropdown-menu dropdown-menu-end"${_scopeId}><li class="dropdown-item"${_scopeId}><a href="#" class="dropdown-link dropdown-link-has-icon"${_scopeId}><i class="fad fa-flag dropdown-icon"${_scopeId}></i> Report </a></li><div class="align-middle flex-container"${_scopeId}><div class="dropdown-title"${_scopeId}>Moderation</div><li class="divider flex-child-grow"${_scopeId}></li></div><li class="dropdown-item"${_scopeId}><a href="#" class="dropdown-link dropdown-link-has-icon text-danger"${_scopeId}><i class="fad fa-trash text-danger dropdown-icon"${_scopeId}></i> Delete </a></li></ul></div></div><div class="my-2 align-middle flex-container"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Comments </div><div class="divider flex-child-grow"${_scopeId}></div></div><div class="gap-2 mb-2 flex-container"${_scopeId}><input type="text" class="form form-sm form-has-section-color" placeholder="What are your thoughts on this post?"${_scopeId}><input type="button" class="btn btn-success btn-sm" value="Post"${_scopeId}></div></div></div>`);
                });
                _push2(`<!--]-->`);
              }
              if (__props.statuses.data.length) {
                _push2(ssrRenderComponent(_component_Pagination, { pagedata: __props.statuses }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else if (ActiveCategory.value === "Inventory") {
              _push2(`<div class="my-2"${_scopeId}><span class="text-xl fw-semibold"${_scopeId}>Current Outfit</span><div class="grid-x"${_scopeId}><div class="text-center cell large-4 align-left"${_scopeId}><div class="text-center flex-container align-left"${_scopeId}><div class="text-center" style="${ssrRenderStyle({ "transform": "scale(0.7)", "margin-top": "-25px" })}"${_scopeId}><div style="${ssrRenderStyle({ "margin-bottom": "5px" })}"${_scopeId}><button class="avatar-body-part" id="head" style="${ssrRenderStyle({
                backgroundColor: "#" + unref(userAvatar).color_head,
                padding: "5px",
                borderRadius: "15px",
                marginTop: "-1px",
                width: "60",
                height: "50"
              })}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(VLazyImage), {
                src: unref(userAvatar).current_face,
                "src-placeholder": unref(usePage)().props.site.production.domains.storage + "/assets/default.png",
                width: "50",
                height: "50"
              }, null, _parent2, _scopeId));
              _push2(`</button></div><div style="${ssrRenderStyle({ "display": "flex", "margin-bottom": "5px" })}"${_scopeId}><button class="avatar-body-part" id="left_arm" style="${ssrRenderStyle({
                backgroundColor: "#" + unref(userAvatar).color_left_arm,
                padding: "50px",
                paddingRight: "0px"
              })}"${_scopeId}></button><button class="avatar-body-part" id="torso" style="${ssrRenderStyle({
                backgroundColor: "#" + unref(userAvatar).color_torso,
                padding: "50px"
              })}"${_scopeId}></button><button class="avatar-body-part" id="right_arm" style="${ssrRenderStyle({
                backgroundColor: "#" + unref(userAvatar).color_right_arm,
                padding: "50px",
                paddingRight: "0px"
              })}"${_scopeId}></button></div><div class="display: flex; margin-bottom: 5px"${_scopeId}><button class="avatar-body-part" name="left_leg" style="${ssrRenderStyle({
                backgroundColor: "#" + unref(userAvatar).color_left_leg,
                padding: "50px",
                paddingRight: "0px",
                paddingLeft: "47px"
              })}"${_scopeId}></button><button class="avatar-body-part" name="right_leg" style="${ssrRenderStyle({
                backgroundColor: "#" + unref(userAvatar).color_right_leg,
                padding: "50px",
                paddingRight: "0px",
                borderBottom: "15px",
                paddingLeft: "47px"
              })}"${_scopeId}></button></div></div></div></div><div class="text-center cell large-8"${_scopeId}><div class="flex-container text-start flex-row flex-nowrap overflow-x-scroll px-3 px-lg-0 mb-2 mb-lg-0"${_scopeId}>`);
              if (ItemLoading.value || items.value && items.value.length > 0) {
                _push2(`<div class="grid-x grid-margin-x grid-padding-y"${_scopeId}>`);
                if (ItemLoading.value) {
                  _push2(`<!--[-->`);
                  ssrRenderList(12, (n) => {
                    _push2(ssrRenderComponent(ItemCardSkeleton, { key: n }, null, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                } else {
                  _push2(`<!--[-->`);
                  ssrRenderList(CurentlyWearingItems.value, (item, index) => {
                    _push2(`<div class="cell large-4 medium-3 small-6"${_scopeId}>`);
                    _push2(ssrRenderComponent(unref(Link), {
                      href: itemRoute(item.id),
                      class: "d-block"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div class="p-2 mb-1 card card-item position-relative"${_scopeId2}><div style="${ssrRenderStyle({ "position": "absolute", "bottom": "10px", "left": "10px" })}"${_scopeId2}>`);
                          if (item.in_event) {
                            _push3(`<div class="mb-1 badge badge-warning fw-semibold"${_scopeId2}><i class="fas fa-calendar-star" style="${ssrRenderStyle({ "width": "18px" })}"${_scopeId2}></i>Event </div>`);
                          } else if (item.rare) {
                            _push3(`<div class="mb-1 badge badge-info fw-semibold"${_scopeId2}><i class="fas fa-star" style="${ssrRenderStyle({ "width": "18px" })}"${_scopeId2}></i>Rare </div>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(`</div><img${ssrRenderAttr("src", item.thumbnail)}${ssrRenderAttr("id", item.thumbnail)}${_scopeId2}></div><div class="text-body fw-semibold text-truncate"${_scopeId2}>${ssrInterpolate(item.name)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "p-2 mb-1 card card-item position-relative" }, [
                              createVNode("div", { style: { "position": "absolute", "bottom": "10px", "left": "10px" } }, [
                                item.in_event ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "mb-1 badge badge-warning fw-semibold"
                                }, [
                                  createVNode("i", {
                                    class: "fas fa-calendar-star",
                                    style: { "width": "18px" }
                                  }),
                                  createTextVNode("Event ")
                                ])) : item.rare ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "mb-1 badge badge-info fw-semibold"
                                }, [
                                  createVNode("i", {
                                    class: "fas fa-star",
                                    style: { "width": "18px" }
                                  }),
                                  createTextVNode("Rare ")
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("img", {
                                src: item.thumbnail,
                                id: item.thumbnail,
                                onError: ($event) => onImgErrorSmall(item.thumbnail)
                              }, null, 40, ["src", "id", "onError"])
                            ]),
                            createVNode("div", { class: "text-body fw-semibold text-truncate" }, toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`<div class="text-xs fw-semibold text-truncate"${_scopeId}><span class="text-muted"${_scopeId}>By:</span>  `);
                    _push2(ssrRenderComponent(unref(Link), {
                      href: creatorRoute(item.creator.username)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate("@" + item.creator.username)}<i class="fas fa-shield-check text-success ms-1"${_scopeId2}></i>`);
                        } else {
                          return [
                            createTextVNode(toDisplayString("@" + item.creator.username), 1),
                            createVNode("i", { class: "fas fa-shield-check text-success ms-1" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`</div></div>`);
                  });
                  _push2(`<!--]-->`);
                }
                _push2(`</div>`);
              } else if (items.value.message) {
                _push2(`<div class=""${_scopeId}><div class="pb-0 card-body"${_scopeId}><div class="gap-3 mb-2 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fas fa-store-slash text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted"${_scopeId}> Looks like a gremlin got into the code again! We&#39;re sending our best programmers with bug spray to fix the issue </div><div class="text-muted fw-semibold"${_scopeId}><p class="text-xs"${_scopeId}>${ssrInterpolate(items.value.message)}</p></div></div></div></div></div>`);
              } else {
                _push2(`<div class="align-center justify-center text-center flex-container"${_scopeId}><div class="pb-0 card-body"${_scopeId}><div class="gap-3 mb-2 align-center justify-center text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fad fa-person text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-muted fw-semibold"${_scopeId}><p class="text-xs"${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.username)} isn&#39;t wearing anything. </p></div></div></div></div></div>`);
              }
              _push2(`</div></div></div><div class="divider mx-1 my-4"${_scopeId}></div><div${_scopeId}><span class="text-xl fw-semibold"${_scopeId}>Inventory</span>`);
              if (ItemLoading.value || items.value && items.value.length > 0) {
                _push2(`<div class="grid-x grid-margin-x grid-padding-y"${_scopeId}>`);
                if (ItemLoading.value) {
                  _push2(`<!--[-->`);
                  ssrRenderList(12, (n) => {
                    _push2(ssrRenderComponent(ItemCardSkeleton, { key: n }, null, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                } else {
                  _push2(`<!--[-->`);
                  ssrRenderList(items.value, (item, index) => {
                    _push2(`<div class="cell large-3 medium-3 small-6"${_scopeId}>`);
                    _push2(ssrRenderComponent(unref(Link), {
                      href: itemRoute(item.id),
                      class: "d-block"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div class="p-2 mb-1 card card-item position-relative"${_scopeId2}><div style="${ssrRenderStyle({ "position": "absolute", "bottom": "10px", "left": "10px" })}"${_scopeId2}>`);
                          if (item.in_event) {
                            _push3(`<div class="mb-1 badge badge-warning fw-semibold"${_scopeId2}><i class="fas fa-calendar-star" style="${ssrRenderStyle({ "width": "18px" })}"${_scopeId2}></i>Event </div>`);
                          } else if (item.rare) {
                            _push3(`<div class="mb-1 badge badge-info fw-semibold"${_scopeId2}><i class="fas fa-star" style="${ssrRenderStyle({ "width": "18px" })}"${_scopeId2}></i>Rare </div>`);
                          } else if (item.sale_ongoing) {
                            _push3(`<div class="mb-1 badge badge-danger fw-semibold"${_scopeId2}><i class="fas fa-badge-percent" style="${ssrRenderStyle({ "width": "18px" })}"${_scopeId2}></i>${ssrInterpolate(item.percent_off + "%")} off </div>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(`</div><img${ssrRenderAttr("src", item.thumbnail)}${ssrRenderAttr("id", item.thumbnail)}${_scopeId2}></div><div class="text-body fw-semibold text-truncate"${_scopeId2}>${ssrInterpolate(item.name)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "p-2 mb-1 card card-item position-relative" }, [
                              createVNode("div", { style: { "position": "absolute", "bottom": "10px", "left": "10px" } }, [
                                item.in_event ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "mb-1 badge badge-warning fw-semibold"
                                }, [
                                  createVNode("i", {
                                    class: "fas fa-calendar-star",
                                    style: { "width": "18px" }
                                  }),
                                  createTextVNode("Event ")
                                ])) : item.rare ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "mb-1 badge badge-info fw-semibold"
                                }, [
                                  createVNode("i", {
                                    class: "fas fa-star",
                                    style: { "width": "18px" }
                                  }),
                                  createTextVNode("Rare ")
                                ])) : item.sale_ongoing ? (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: "mb-1 badge badge-danger fw-semibold"
                                }, [
                                  createVNode("i", {
                                    class: "fas fa-badge-percent",
                                    style: { "width": "18px" }
                                  }),
                                  createTextVNode(toDisplayString(item.percent_off + "%") + " off ", 1)
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("img", {
                                src: item.thumbnail,
                                id: item.thumbnail,
                                onError: ($event) => onImgErrorSmall(item.thumbnail)
                              }, null, 40, ["src", "id", "onError"])
                            ]),
                            createVNode("div", { class: "text-body fw-semibold text-truncate" }, toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`<div class="text-xs fw-semibold text-truncate"${_scopeId}><span class="text-muted"${_scopeId}>By:</span>  `);
                    _push2(ssrRenderComponent(unref(Link), {
                      href: creatorRoute(item.creator.username)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate("@" + item.creator.username)}<i class="fas fa-shield-check text-success ms-1"${_scopeId2}></i>`);
                        } else {
                          return [
                            createTextVNode(toDisplayString("@" + item.creator.username), 1),
                            createVNode("i", { class: "fas fa-shield-check text-success ms-1" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`</div></div>`);
                  });
                  _push2(`<!--]-->`);
                }
                _push2(`</div>`);
              } else if (items.value.message) {
                _push2(`<div class=""${_scopeId}><div class="pb-0 card-body"${_scopeId}><div class="gap-3 mb-2 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fas fa-store-slash text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted"${_scopeId}> Looks like a gremlin got into the code again! We&#39;re sending our best programmers with bug spray to fix the issue </div><div class="text-muted fw-semibold"${_scopeId}><p class="text-xs"${_scopeId}>${ssrInterpolate(items.value.message)}</p></div></div></div></div></div>`);
              } else {
                _push2(`<div class=""${_scopeId}><div class="pb-0 card-body"${_scopeId}><div class="gap-3 mb-2 text-center flex-container flex-dir-column"${_scopeId}><i class="text-5xl fad fa-crate-empty text-muted"${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> No Items </div><div class="text-muted fw-semibold"${_scopeId}><p class="text-xs"${_scopeId}>${ssrInterpolate(unref(usePage)().props.user.username)} has no items in their inventory. </p></div></div></div></div></div>`);
              }
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "modal",
                id: "following-modal"
              }, [
                createVNode("div", { class: "modal-card modal-card-body" }, [
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "gap-2 align-middle flex-container align-justify" }, [
                      createVNode("div", { class: "text-lg fw-semibold" }, toDisplayString(unref(usePage)().props.user.display_name) + "'s Following ", 1),
                      createVNode("button", {
                        onClick: ($event) => _ctx.showModal("following-modal"),
                        class: "btn-circle",
                        "data-toggle-modal": "#following-modal",
                        style: { "margin-right": "-10px" }
                      }, [
                        createVNode("i", { class: "fad fa-times" })
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "section" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(usePage)().props.user.following, (followingUser, index) => {
                        return openBlock(), createBlock(Fragment, { key: index }, [
                          createVNode("div", { class: "gap-2 mt-2 mb-2 align-middle flex-container align-justify" }, [
                            createVNode(unref(VLazyImage), {
                              src: followingUser.thumbnail,
                              "src-default": "/assets/img/dummy_headshot.png",
                              class: "headshot",
                              width: "50"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "w-100" }, [
                              createVNode("div", { class: "fw-semibold" }, toDisplayString(followingUser.display_name), 1),
                              createVNode("div", { class: "text-sm fw-semibold text-muted" }, " @" + toDisplayString(followingUser.username), 1)
                            ]),
                            createVNode("div", { class: "gap-2 mt-2 mb-2 align-middle flex-container align-justify" }, [
                              createVNode(unref(Link), {
                                href: unref(route)(`user.profile`, { username: followingUser.username }),
                                class: "min-w-0 btn btn-info btn-sm text-truncate"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" View Profile ")
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ])
                          ]),
                          index < unref(usePage)().props.user.following.length - 1 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "divider w-100"
                          })) : createCommentVNode("", true)
                        ], 64);
                      }), 128))
                    ])
                  ])
                ])
              ]),
              createVNode("div", {
                class: "modal",
                id: "followers-modal"
              }, [
                createVNode("div", { class: "modal-card modal-card-body" }, [
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "gap-2 align-middle flex-container align-justify" }, [
                      createVNode("div", { class: "text-lg fw-semibold" }, toDisplayString(unref(usePage)().props.user.display_name) + "'s Followers ", 1),
                      createVNode("button", {
                        onClick: ($event) => _ctx.showModal("followers-modal"),
                        class: "btn-circle",
                        "data-toggle-modal": "#followers-modal",
                        style: { "margin-right": "-10px" }
                      }, [
                        createVNode("i", { class: "fad fa-times" })
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "section" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(usePage)().props.user.followers, (followerUser, index) => {
                        return openBlock(), createBlock(Fragment, { key: index }, [
                          createVNode("div", { class: "gap-2 mt-2 mb-2 align-middle flex-container align-justify" }, [
                            createVNode(unref(VLazyImage), {
                              src: followerUser.thumbnail,
                              "src-default": "/assets/img/dummy_headshot.png",
                              class: "headshot",
                              width: "50"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "w-100" }, [
                              createVNode("div", { class: "fw-semibold" }, toDisplayString(followerUser.display_name), 1),
                              createVNode("div", { class: "text-sm fw-semibold text-muted" }, toDisplayString("@" + followerUser.username), 1)
                            ]),
                            createVNode("div", { class: "gap-2 mt-2 mb-2 align-middle flex-container align-justify" }, [
                              createVNode(unref(Link), {
                                href: unref(route)(`user.profile`, { username: followerUser.username }),
                                class: "min-w-0 btn btn-info btn-sm text-truncate"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" View Profile ")
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ])
                          ]),
                          index < unref(usePage)().props.user.followers.length - 1 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "divider w-100"
                          })) : createCommentVNode("", true)
                        ], 64);
                      }), 128))
                    ])
                  ])
                ])
              ]),
              createVNode("template", null, [
                createVNode(_component_portal, { to: "bannerAsset" }, {
                  default: withCtx(() => {
                    var _a2, _b2;
                    return [
                      createVNode(unref(VLazyImage), {
                        style: ((_a2 = unref(usePage)().props.user) == null ? void 0 : _a2.settings.calling_card_enabled) ? {
                          margin: "0",
                          "background-image": "url(" + ((_b2 = unref(usePage)().props.user) == null ? void 0 : _b2.settings.calling_card_url) + ")",
                          "background-repeat": "no-repeat",
                          "background-size": "cover",
                          "box-shadow": "inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important"
                        } : null,
                        src: unref(usePage)().props.user.headshot,
                        width: "100",
                        class: "space-image",
                        alt: "Headshot",
                        "src-placeholder": "assets/img/space-error.png"
                      }, null, 8, ["style", "src"])
                    ];
                  }),
                  _: 1
                }),
                createVNode(_component_portal, { to: "bannerName" }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "text-xl",
                      style: { "line-height": "16px" }
                    }, [
                      createVNode("div", { class: "mb-1 flex-container align-middle gap-1 fw-semibold" }, [
                        createTextVNode(toDisplayString(unref(usePage)().props.user.display_name) + " ", 1),
                        unref(usePage)().props.user.staff ? (openBlock(), createBlock("i", {
                          key: 0,
                          class: "fad fa-gavel text-danger"
                        })) : unref(usePage)().props.user.settings.beta_tester ? (openBlock(), createBlock("i", {
                          key: 1,
                          class: "fad fa-hard-hat text-success"
                        })) : createCommentVNode("", true),
                        createVNode(unref(VLazyImage), {
                          src: "/assets/img/flags/" + unref(usePage)().props.user.settings.country_code + ".svg",
                          alt: "Country Flag",
                          style: { "width": "auto", "height": "20px" },
                          "src-placeholder": "/assets/img/flags/other/pirate.svg"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "text-sm text-muted fw-semibold" }, toDisplayString("@" + unref(usePage)().props.user.username), 1)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_portal, { to: "bannerDescription" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(usePage)().props.user.status ?? "This user does not have a status."), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_portal, { to: "bannerButtons" }, {
                  default: withCtx(() => [
                    unref(usePage)().props.auth.user && unref(usePage)().props.user.id != unref(usePage)().props.auth.user.id ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "min-w-0 gap-2 mt-2 mb-3 flex-container"
                    }, [
                      withDirectives((openBlock(), createBlock("button", {
                        class: ["text-xl", "squish", unref(following) ? "text-danger" : "text-info"],
                        onClick: ($event) => toggleFollow(unref(usePage)().props.user.id),
                        content: unref(following) ? "Unfollow" : "Follow"
                      }, [
                        createVNode("i", {
                          class: unref(following) ? "fad fa-user-minus" : "fad fa-user-plus"
                        }, null, 2)
                      ], 10, ["onClick", "content"])), [
                        [_directive_tippy, { placement: "bottom" }]
                      ]),
                      withDirectives((openBlock(), createBlock("button", {
                        class: "text-xl text-success squish",
                        content: "Chat With " + unref(usePage)().props.user.display_name
                      }, [
                        createVNode("i", { class: "fad fa-message" })
                      ], 8, ["content"])), [
                        [_directive_tippy, { placement: "bottom" }]
                      ]),
                      unref(usePage)().props.auth.user.staff ? withDirectives((openBlock(), createBlock("a", {
                        key: 0,
                        as: "button",
                        href: unref(route)(`admin.users.manage-user`, { id: unref(usePage)().props.user.id }),
                        class: "text-xl text-danger squish",
                        content: "View in Panel"
                      }, [
                        createVNode("i", { class: "fad fa-pen-to-square" })
                      ], 8, ["href"])), [
                        [_directive_tippy, { placement: "bottom" }]
                      ]) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "cell medium-3" }, [
                createVNode("div", { class: "mb-2 align-middle flex-container align-justify" }, [
                  createVNode("div", { class: "gap-3 align-middle flex-container" })
                ]),
                createVNode("div", {
                  class: ["card", "card-body", "mb-2", "card-status", unref(usePage)().props.user.online ? "online" : "offline"],
                  style: unref(usePage)().props.user.settings.calling_card_enabled ? {
                    "background-image": "url(" + unref(usePage)().props.user.settings.calling_card_url + ")",
                    "background-repeat": "no-repeat",
                    "background-size": "cover",
                    "box-shadow": "inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important"
                  } : null
                }, [
                  createVNode(unref(VLazyImage), {
                    src: unref(usePage)().props.user.thumbnail ? unref(usePage)().props.user.thumbnail : "/assets/img/dummy.png",
                    "src-placeholder": "/assets/img/dummy.png"
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "mt-2 text-sm text-center align-center text-info fw-semibold" }, [
                    createVNode("div", {
                      class: unref(usePage)().props.user.staff ? "text-danger" : "text-success"
                    }, toDisplayString(unref(usePage)().props.user.staff ? unref(usePage)().props.user.position : "Netizen"), 3)
                  ])
                ], 6),
                createVNode("div", { class: "mb-1 card-body" }, [
                  createVNode("div", { class: "mt-2 text-center" }, [
                    createVNode("div", { class: "gap-3 text-sm flex-container align-center" }, [
                      createVNode("button", {
                        class: "min-w-0 px-0 text-center fw-semibold text-muted text-truncate",
                        onClick: ($event) => _ctx.showModal("following-modal")
                      }, [
                        createVNode("span", { class: "text-body" }, toDisplayString(unref(usePage)().props.user.following_count), 1),
                        createTextVNode(" Following ")
                      ], 8, ["onClick"]),
                      createVNode("button", {
                        class: "min-w-0 px-0 text-center fw-semibold text-muted text-truncate",
                        onClick: ($event) => _ctx.showModal("followers-modal")
                      }, [
                        createVNode("span", { class: "text-body" }, toDisplayString(unref(followercount)), 1),
                        createTextVNode(" Followers ")
                      ], 8, ["onClick"])
                    ]),
                    unref(usePage)().props.user.followsYou ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-sm text-info fw-semibold"
                    }, " Follows you ")) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("a", { class: "gap-2 p-2 mt-1 mb-2 align-middle card card-inner flex-container" }, [
                  createVNode("img", {
                    src: "assets/img/space_placeholder.png",
                    class: "headshot",
                    width: "40"
                  }),
                  createVNode("div", {
                    class: "min-w-0",
                    style: { "line-height": "14px" }
                  }, [
                    createVNode("div", { class: "text-xs text-truncate fw-bold text-muted text-uppercase" }, " Primary Space "),
                    createVNode("div", { class: "text-sm text-truncate fw-semibold text-body" }, " Namesnipe ")
                  ])
                ]),
                createVNode("div", { class: "mb-1 text-xl fw-semibold" }, "About Me"),
                createVNode("div", { class: "mb-3 card card-body" }, toDisplayString(unref(usePage)().props.user.about_me), 1),
                createVNode("div", { class: "mb-1 text-xl fw-semibold" }, "Statistics"),
                createVNode("div", { class: "mb-3 card card-body" }, [
                  createVNode("div", { class: "gap-1 align-middle flex-container flex-dir-column" }, [
                    createVNode("div", { class: "text-sm text-membership fw-semibold w-100" }, [
                      createVNode("i", {
                        class: "text-center fad fa-rocket-launch text-membership",
                        style: { "width": "26px" }
                      }),
                      createTextVNode(" Premium Subscriber ")
                    ]),
                    createVNode("div", { class: "text-sm w-100" }, [
                      createVNode("i", {
                        class: "text-center fad fa-medal text-muted",
                        style: { "width": "26px" }
                      }),
                      createTextVNode(" " + toDisplayString("Rank Lvl. " + unref(usePage)().props.user.level), 1)
                    ]),
                    createVNode("div", { class: "text-sm w-100" }, [
                      createVNode("i", {
                        class: "text-center fad fa-users-medical text-muted",
                        style: { "width": "26px" }
                      }),
                      createTextVNode(" Joined on " + toDisplayString(unref(usePage)().props.user.joindate), 1)
                    ]),
                    createVNode("div", { class: "text-sm w-100" }, [
                      createVNode("i", {
                        class: "text-center fad fa-clock text-muted",
                        style: { "width": "26px" }
                      }),
                      createTextVNode(" Last seen " + toDisplayString(unref(usePage)().props.user.DateHum), 1)
                    ]),
                    createVNode("div", { class: "text-sm w-100" }, [
                      createVNode("i", {
                        class: "text-center fad fa-messages text-muted",
                        style: { "width": "26px" }
                      }),
                      createTextVNode(" " + toDisplayString(unref(usePage)().props.user.posts) + " Discussion Posts ", 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "mb-1 text-xl fw-semibold" }, "Spaces"),
                createVNode("div", { class: "mb-3 card card-body" }, [
                  createVNode("div", { class: "gap-3 text-center flex-container flex-dir-column" }, [
                    createVNode("i", { class: "text-5xl fad fa-planet-ringed text-muted" }),
                    createVNode("div", { style: { "line-height": "16px" } }, [
                      createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " No Spaces "),
                      createVNode("div", { class: "text-xs text-muted fw-semibold" }, toDisplayString(unref(usePage)().props.user.username) + " has not joined any spaces. ", 1)
                    ])
                  ]),
                  createVNode("div", { class: "grid-x grid-margin-x grid-padding-y" }, [
                    createVNode("div", { class: "text-center cell medium-4 small-4" }, [
                      createVNode("a", {
                        href: "#",
                        class: "text-body"
                      }, [
                        createVNode("img", {
                          src: "/assets/img/space_placeholder.png",
                          class: "mb-1"
                        }),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-sm fw-semibold text-truncate" }, [
                            createVNode("i", { class: "mb-1 text-xs text-info fw-bold text-uppercase fad fa-star" }),
                            createTextVNode("  Namesnipe ")
                          ]),
                          createVNode("div", { class: "text-xs text-muted fw-semibold" }, " 12K Members ")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "text-center cell medium-4 small-4" }, [
                      createVNode("a", {
                        href: "#",
                        class: "text-body"
                      }, [
                        createVNode("img", {
                          src: "/assets/img/icon.png",
                          class: "mb-1"
                        }),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-sm fw-semibold text-truncate" }, " Project Eclipse "),
                          createVNode("div", { class: "text-xs text-muted fw-semibold" }, "4 Members")
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "cell medium-9" }, [
                createVNode("div", { style: { "height": "10px" } }),
                createVNode("div", { class: "mb-1 align-middle flex-container align-justify" }, [
                  createVNode("div", { class: "mb-1 text-xl fw-semibold" }, "Acheivements"),
                  createVNode("a", {
                    href: "#",
                    class: "btn btn-secondary btn-sm"
                  }, "View All")
                ]),
                createVNode("div", { class: "mb-3 card card-body" }, [
                  !unref(usePage)().props.user.acheivements || !unref(usePage)().props.user.acheivements.length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "gap-3 text-center flex-container flex-dir-column"
                  }, [
                    createVNode("i", { class: "text-5xl fad fa-badge text-muted" }),
                    createVNode("div", { style: { "line-height": "16px" } }, [
                      createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " No Acheivements "),
                      createVNode("div", { class: "text-xs text-muted fw-semibold" }, toDisplayString(unref(usePage)().props.user.username) + " has no acheivements. ", 1)
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "flex-wrap gap-3 flex-container align-center" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(usePage)().props.user.acheivements, (acheivement) => {
                      return openBlock(), createBlock("div", {
                        class: "min-w-0 text-center",
                        style: { "width": "80px" }
                      }, [
                        createVNode(unref(Link), {
                          href: unref(route)(`achivements`)
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: acheivement.image
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "text-sm text-muted fw-semibold text-truncate" }, toDisplayString(acheivement.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ]);
                    }), 256))
                  ])
                ]),
                createVNode("div", { class: "mb-3 card card-body" }, [
                  createVNode("div", { class: "section" }, [
                    createVNode("ul", { class: "tabs" }, [
                      createVNode("li", { class: "tab-item" }, [
                        createVNode("a", {
                          class: ["tab-link squish", { active: "Posts" === ActiveCategory.value }],
                          onClick: ($event) => setActiveCategory("Posts")
                        }, "Posts", 10, ["onClick"])
                      ]),
                      createVNode("li", { class: "tab-item" }, [
                        createVNode("a", {
                          class: ["tab-link squish", { active: "Inventory" === ActiveCategory.value }],
                          onClick: ($event) => setActiveCategory("Inventory")
                        }, "Inventory", 10, ["onClick"])
                      ])
                    ])
                  ]),
                  ActiveCategory.value === "Posts" ? (openBlock(), createBlock("div", { key: 0 }, [
                    !((_b = __props.statuses.data) == null ? void 0 : _b["length"]) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "section"
                    }, [
                      createVNode("div", { class: "gap-3 text-center flex-container flex-dir-column" }, [
                        createVNode("i", { class: "text-5xl fad fa-face-sleeping text-muted" }),
                        createVNode("div", { style: { "line-height": "16px" } }, [
                          createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " No Posts "),
                          createVNode("div", { class: "text-xs text-muted fw-semibold" }, toDisplayString(unref(usePage)().props.user.username) + " has not posted anything to their feed. ", 1)
                        ])
                      ])
                    ])) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(__props.statuses.data, (status) => {
                      return openBlock(), createBlock("div", { class: "gap-3 section flex-container flex-dir-column-sm" }, [
                        createVNode("div", {
                          class: "mx-auto flex-child-grow",
                          style: { "width": "100px" }
                        }, [
                          createVNode("a", {
                            href: "#",
                            class: "text-sm text-center d-block squish"
                          }, [
                            createVNode("img", {
                              src: "/assets/img/dummy_headshot.png",
                              class: "mb-1 headshot",
                              width: "60"
                            }),
                            createVNode("div", { style: { "line-height": "16px" } }, [
                              createVNode("div", { class: "text-membership text-truncate" }, toDisplayString(status.dname), 1),
                              createVNode("div", { class: "text-xs text-muted text-truncate" }, toDisplayString("@" + status.name), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "card card-body card-inner w-100" }, [
                          createVNode("div", { class: "align-middle flex-container align-justify" }, [
                            createVNode("div", { class: "w-100" }, [
                              createVNode("div", { class: "text-xs text-muted" }, [
                                createVNode("i", {
                                  class: "far fa-clock me-1",
                                  style: { "vertical-align": "middle", "margin-top": "-2.5px", "font-size": "10px" }
                                }),
                                createTextVNode(" " + toDisplayString(status.DateHum), 1)
                              ]),
                              createVNode("div", null, toDisplayString(status.message), 1),
                              createVNode("div", {
                                class: "text-sm",
                                style: { "margin-left": "-6px" }
                              }, [
                                createVNode("button", { class: "btn-like active squish" }, [
                                  createVNode("i", { class: "far fa-heart" }),
                                  createTextVNode("1 ")
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "dropdown ms-auto position-relative" }, [
                              createVNode("button", {
                                class: "btn-circle",
                                style: { "margin-right": "-10px" }
                              }, [
                                createVNode("i", { class: "fad fa-ellipsis-vertical" })
                              ]),
                              createVNode("ul", { class: "dropdown-menu dropdown-menu-end" }, [
                                createVNode("li", { class: "dropdown-item" }, [
                                  createVNode("a", {
                                    href: "#",
                                    class: "dropdown-link dropdown-link-has-icon"
                                  }, [
                                    createVNode("i", { class: "fad fa-flag dropdown-icon" }),
                                    createTextVNode(" Report ")
                                  ])
                                ]),
                                createVNode("div", { class: "align-middle flex-container" }, [
                                  createVNode("div", { class: "dropdown-title" }, "Moderation"),
                                  createVNode("li", { class: "divider flex-child-grow" })
                                ]),
                                createVNode("li", { class: "dropdown-item" }, [
                                  createVNode("a", {
                                    href: "#",
                                    class: "dropdown-link dropdown-link-has-icon text-danger"
                                  }, [
                                    createVNode("i", { class: "fad fa-trash text-danger dropdown-icon" }),
                                    createTextVNode(" Delete ")
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "my-2 align-middle flex-container" }, [
                            createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Comments "),
                            createVNode("div", { class: "divider flex-child-grow" })
                          ]),
                          createVNode("div", { class: "gap-2 mb-2 flex-container" }, [
                            createVNode("input", {
                              type: "text",
                              class: "form form-sm form-has-section-color",
                              placeholder: "What are your thoughts on this post?"
                            }),
                            createVNode("input", {
                              type: "button",
                              class: "btn btn-success btn-sm",
                              value: "Post"
                            })
                          ])
                        ])
                      ]);
                    }), 256)),
                    __props.statuses.data.length ? (openBlock(), createBlock(_component_Pagination, {
                      key: 2,
                      pagedata: __props.statuses
                    }, null, 8, ["pagedata"])) : createCommentVNode("", true)
                  ])) : ActiveCategory.value === "Inventory" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "my-2"
                  }, [
                    createVNode("span", { class: "text-xl fw-semibold" }, "Current Outfit"),
                    createVNode("div", { class: "grid-x" }, [
                      createVNode("div", { class: "text-center cell large-4 align-left" }, [
                        createVNode("div", { class: "text-center flex-container align-left" }, [
                          createVNode("div", {
                            class: "text-center",
                            style: { "transform": "scale(0.7)", "margin-top": "-25px" }
                          }, [
                            createVNode("div", { style: { "margin-bottom": "5px" } }, [
                              createVNode("button", {
                                class: "avatar-body-part",
                                id: "head",
                                style: {
                                  backgroundColor: "#" + unref(userAvatar).color_head,
                                  padding: "5px",
                                  borderRadius: "15px",
                                  marginTop: "-1px",
                                  width: "60",
                                  height: "50"
                                }
                              }, [
                                createVNode(unref(VLazyImage), {
                                  src: unref(userAvatar).current_face,
                                  "src-placeholder": unref(usePage)().props.site.production.domains.storage + "/assets/default.png",
                                  width: "50",
                                  height: "50"
                                }, null, 8, ["src", "src-placeholder"])
                              ], 4)
                            ]),
                            createVNode("div", { style: { "display": "flex", "margin-bottom": "5px" } }, [
                              createVNode("button", {
                                class: "avatar-body-part",
                                id: "left_arm",
                                style: {
                                  backgroundColor: "#" + unref(userAvatar).color_left_arm,
                                  padding: "50px",
                                  paddingRight: "0px"
                                }
                              }, null, 4),
                              createVNode("button", {
                                class: "avatar-body-part",
                                id: "torso",
                                style: {
                                  backgroundColor: "#" + unref(userAvatar).color_torso,
                                  padding: "50px"
                                }
                              }, null, 4),
                              createVNode("button", {
                                class: "avatar-body-part",
                                id: "right_arm",
                                style: {
                                  backgroundColor: "#" + unref(userAvatar).color_right_arm,
                                  padding: "50px",
                                  paddingRight: "0px"
                                }
                              }, null, 4)
                            ]),
                            createVNode("div", { class: "display: flex; margin-bottom: 5px" }, [
                              createVNode("button", {
                                class: "avatar-body-part",
                                name: "left_leg",
                                style: {
                                  backgroundColor: "#" + unref(userAvatar).color_left_leg,
                                  padding: "50px",
                                  paddingRight: "0px",
                                  paddingLeft: "47px"
                                }
                              }, null, 4),
                              createVNode("button", {
                                class: "avatar-body-part",
                                name: "right_leg",
                                style: {
                                  backgroundColor: "#" + unref(userAvatar).color_right_leg,
                                  padding: "50px",
                                  paddingRight: "0px",
                                  borderBottom: "15px",
                                  paddingLeft: "47px"
                                }
                              }, null, 4)
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "text-center cell large-8" }, [
                        createVNode("div", { class: "flex-container text-start flex-row flex-nowrap overflow-x-scroll px-3 px-lg-0 mb-2 mb-lg-0" }, [
                          ItemLoading.value || items.value && items.value.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "grid-x grid-margin-x grid-padding-y"
                          }, [
                            ItemLoading.value ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(12, (n) => {
                              return createVNode(ItemCardSkeleton, { key: n });
                            }), 64)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(CurentlyWearingItems.value, (item, index) => {
                              return openBlock(), createBlock("div", {
                                class: "cell large-4 medium-3 small-6",
                                key: index
                              }, [
                                createVNode(unref(Link), {
                                  href: itemRoute(item.id),
                                  class: "d-block"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "p-2 mb-1 card card-item position-relative" }, [
                                      createVNode("div", { style: { "position": "absolute", "bottom": "10px", "left": "10px" } }, [
                                        item.in_event ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "mb-1 badge badge-warning fw-semibold"
                                        }, [
                                          createVNode("i", {
                                            class: "fas fa-calendar-star",
                                            style: { "width": "18px" }
                                          }),
                                          createTextVNode("Event ")
                                        ])) : item.rare ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "mb-1 badge badge-info fw-semibold"
                                        }, [
                                          createVNode("i", {
                                            class: "fas fa-star",
                                            style: { "width": "18px" }
                                          }),
                                          createTextVNode("Rare ")
                                        ])) : createCommentVNode("", true)
                                      ]),
                                      createVNode("img", {
                                        src: item.thumbnail,
                                        id: item.thumbnail,
                                        onError: ($event) => onImgErrorSmall(item.thumbnail)
                                      }, null, 40, ["src", "id", "onError"])
                                    ]),
                                    createVNode("div", { class: "text-body fw-semibold text-truncate" }, toDisplayString(item.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
                                createVNode("div", { class: "text-xs fw-semibold text-truncate" }, [
                                  createVNode("span", { class: "text-muted" }, "By:"),
                                  createTextVNode("  "),
                                  createVNode(unref(Link), {
                                    href: creatorRoute(item.creator.username)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString("@" + item.creator.username), 1),
                                      createVNode("i", { class: "fas fa-shield-check text-success ms-1" })
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ])
                              ]);
                            }), 128))
                          ])) : items.value.message ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: ""
                          }, [
                            createVNode("div", { class: "pb-0 card-body" }, [
                              createVNode("div", { class: "gap-3 mb-2 text-center flex-container flex-dir-column" }, [
                                createVNode("i", { class: "text-5xl fas fa-store-slash text-muted" }),
                                createVNode("div", { style: { "line-height": "16px" } }, [
                                  createVNode("div", { class: "text-xs fw-bold text-muted" }, " Looks like a gremlin got into the code again! We're sending our best programmers with bug spray to fix the issue "),
                                  createVNode("div", { class: "text-muted fw-semibold" }, [
                                    createVNode("p", { class: "text-xs" }, toDisplayString(items.value.message), 1)
                                  ])
                                ])
                              ])
                            ])
                          ])) : (openBlock(), createBlock("div", {
                            key: 2,
                            class: "align-center justify-center text-center flex-container"
                          }, [
                            createVNode("div", { class: "pb-0 card-body" }, [
                              createVNode("div", { class: "gap-3 mb-2 align-center justify-center text-center flex-container flex-dir-column" }, [
                                createVNode("i", { class: "text-5xl fad fa-person text-muted" }),
                                createVNode("div", { style: { "line-height": "16px" } }, [
                                  createVNode("div", { class: "text-muted fw-semibold" }, [
                                    createVNode("p", { class: "text-xs" }, toDisplayString(unref(usePage)().props.user.username) + " isn't wearing anything. ", 1)
                                  ])
                                ])
                              ])
                            ])
                          ]))
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "divider mx-1 my-4" }),
                    createVNode("div", null, [
                      createVNode("span", { class: "text-xl fw-semibold" }, "Inventory"),
                      ItemLoading.value || items.value && items.value.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "grid-x grid-margin-x grid-padding-y"
                      }, [
                        ItemLoading.value ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(12, (n) => {
                          return createVNode(ItemCardSkeleton, { key: n });
                        }), 64)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(items.value, (item, index) => {
                          return openBlock(), createBlock("div", {
                            class: "cell large-3 medium-3 small-6",
                            key: index
                          }, [
                            createVNode(unref(Link), {
                              href: itemRoute(item.id),
                              class: "d-block"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "p-2 mb-1 card card-item position-relative" }, [
                                  createVNode("div", { style: { "position": "absolute", "bottom": "10px", "left": "10px" } }, [
                                    item.in_event ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "mb-1 badge badge-warning fw-semibold"
                                    }, [
                                      createVNode("i", {
                                        class: "fas fa-calendar-star",
                                        style: { "width": "18px" }
                                      }),
                                      createTextVNode("Event ")
                                    ])) : item.rare ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "mb-1 badge badge-info fw-semibold"
                                    }, [
                                      createVNode("i", {
                                        class: "fas fa-star",
                                        style: { "width": "18px" }
                                      }),
                                      createTextVNode("Rare ")
                                    ])) : item.sale_ongoing ? (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "mb-1 badge badge-danger fw-semibold"
                                    }, [
                                      createVNode("i", {
                                        class: "fas fa-badge-percent",
                                        style: { "width": "18px" }
                                      }),
                                      createTextVNode(toDisplayString(item.percent_off + "%") + " off ", 1)
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  createVNode("img", {
                                    src: item.thumbnail,
                                    id: item.thumbnail,
                                    onError: ($event) => onImgErrorSmall(item.thumbnail)
                                  }, null, 40, ["src", "id", "onError"])
                                ]),
                                createVNode("div", { class: "text-body fw-semibold text-truncate" }, toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"]),
                            createVNode("div", { class: "text-xs fw-semibold text-truncate" }, [
                              createVNode("span", { class: "text-muted" }, "By:"),
                              createTextVNode("  "),
                              createVNode(unref(Link), {
                                href: creatorRoute(item.creator.username)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString("@" + item.creator.username), 1),
                                  createVNode("i", { class: "fas fa-shield-check text-success ms-1" })
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ])
                          ]);
                        }), 128))
                      ])) : items.value.message ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: ""
                      }, [
                        createVNode("div", { class: "pb-0 card-body" }, [
                          createVNode("div", { class: "gap-3 mb-2 text-center flex-container flex-dir-column" }, [
                            createVNode("i", { class: "text-5xl fas fa-store-slash text-muted" }),
                            createVNode("div", { style: { "line-height": "16px" } }, [
                              createVNode("div", { class: "text-xs fw-bold text-muted" }, " Looks like a gremlin got into the code again! We're sending our best programmers with bug spray to fix the issue "),
                              createVNode("div", { class: "text-muted fw-semibold" }, [
                                createVNode("p", { class: "text-xs" }, toDisplayString(items.value.message), 1)
                              ])
                            ])
                          ])
                        ])
                      ])) : (openBlock(), createBlock("div", {
                        key: 2,
                        class: ""
                      }, [
                        createVNode("div", { class: "pb-0 card-body" }, [
                          createVNode("div", { class: "gap-3 mb-2 text-center flex-container flex-dir-column" }, [
                            createVNode("i", { class: "text-5xl fad fa-crate-empty text-muted" }),
                            createVNode("div", { style: { "line-height": "16px" } }, [
                              createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " No Items "),
                              createVNode("div", { class: "text-muted fw-semibold" }, [
                                createVNode("p", { class: "text-xs" }, toDisplayString(unref(usePage)().props.user.username) + " has no items in their inventory. ", 1)
                              ])
                            ])
                          ])
                        ])
                      ]))
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
