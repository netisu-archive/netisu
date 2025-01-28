import { defineComponent, ref, resolveComponent, unref, withCtx, createVNode, toDisplayString, createTextVNode, withModifiers, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { S as Sidebar } from "./Sidebar-fXSZR0n1.js";
import { _ as _sfc_main$2 } from "./Navbar-DmBRqlRZ.js";
import { _ as _sfc_main$3 } from "./Footer-CxsG0LBb.js";
import { _ as _sfc_main$1 } from "../ssr.js";
import { usePage } from "@inertiajs/vue3";
import { route } from "momentum-trail";
import axios from "axios";
import throttle from "lodash/throttle.js";
import "v-lazy-image";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "vue-tippy";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
const __default__ = {
  name: "MyComponent",
  methods: {
    isNewItem(created_at) {
      const currentTime = /* @__PURE__ */ new Date();
      const itemTime = new Date(created_at);
      const timeDifference = currentTime - itemTime;
      const twoHoursInMillis = 2 * 60 * 60 * 1e3;
      return timeDifference < twoHoursInMillis;
    }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  props: {
    item: {},
    recommendations: {},
    itemOwnership: {}
  },
  setup(__props) {
    const JSONDATA = Array;
    const thumbnail = ref(null);
    let isPreview = ref(false);
    function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    function showModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.toggle("active");
      }
    }
    const purchaseBucks = () => {
      showModal("purchase-with-bucks-modal");
      axios.get(`/sanctum/csrf-cookie`).then(() => {
        axios.post(route(`api.store.purchase`, { id: usePage().props.item.id, currencyType: "bucks" })).then((response) => {
          const { message, type } = response.data;
          JSONDATA.value = { message, type };
        }).catch((error) => {
          console.error(error);
        });
      });
    };
    const purchaseCoins = () => {
      showModal("purchase-with-coins-modal");
      axios.get(`/sanctum/csrf-cookie`).then(() => {
        axios.post(route(`api.store.purchase`, { id: usePage().props.item.id, currencyType: "coins" })).then((response) => {
          const { message, type } = response.data;
          JSONDATA.value = { message, type };
        }).catch((error) => {
          console.error(error);
        });
      });
    };
    const reRender = throttle(() => {
      axios.get(`/sanctum/csrf-cookie`).then(() => {
        axios.post(route(`api.item.rerender`, { id: usePage().props.item.id })).then((response) => {
          const { message, type } = response.data;
          JSONDATA.value = { message, type };
        }).catch((error) => {
          console.error(error);
        });
      });
    }, 5e3);
    const swap = () => {
      if (isPreview.value) {
        isPreview.value = false;
      } else {
        isPreview.value = true;
      }
      const thumbnail2 = document.getElementById("thumbnail");
      thumbnail2.src = isPreview.value ? usePage().props.item.preview : usePage().props.item.thumbnail;
    };
    function onImgErrorSmall(id) {
      let source = document.getElementById(id);
      source.src = "/assets/img/dummy-error.png";
      source.onerror = null;
      return true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: unref(usePage)().props.item.name,
        description: unref(usePage)().props.item.description,
        url: unref(route)(`store.item`, { id: unref(usePage)().props.item.id }),
        item: true,
        iid: unref(usePage)().props.item.id,
        itime: unref(usePage)().props.item.time_off_sale,
        cover: unref(usePage)().props.item.thumbnail
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, {
        showJsonAlert: unref(JSONDATA).value ? true : false,
        JSONALERT: unref(JSONDATA)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal" id="purchase-with-bucks-modal"${_scopeId}><div class="modal-card modal-card-body modal-card-sm"${_scopeId}><div class="section-borderless"${_scopeId}><div class="gap-2 align-middle flex-container align-justify"${_scopeId}><div class="text-lg fw-semibold"${_scopeId}>Confirm Purchase</div><button class="btn-circle" data-toggle-modal="#purchase-with-bucks-modal" style="${ssrRenderStyle({ "margin-right": "-10px" })}"${_scopeId}><i class="fas fa-times"${_scopeId}></i></button></div></div><div class="section-borderless"${_scopeId}><div class="text-sm text-muted fw-semibold"${_scopeId}> Are you sure you want to buy <span class="text-body fw-semibold"${_scopeId}>${ssrInterpolate(unref(usePage)().props.item.name)}</span> for <span class="text-success"${_scopeId}><i class="fas fa-money-bill-1-wave me-1"${_scopeId}></i> ${ssrInterpolate(unref(usePage)().props.item.cost_bucks)} Bucks </span>? </div></div><div class="gap-2 flex-container align-right section-borderless"${_scopeId}><form${_scopeId}><button type="submit" class="btn btn-success btn-sm"${_scopeId}>Buy Now</button><button type="button" class="btn btn-secondary btn-sm" data-toggle-modal="#purchase-with-bucks-modal"${_scopeId}> Cancel </button></form></div></div></div><div class="modal" id="purchase-with-coins-modal"${_scopeId}><div class="modal-card modal-card-body modal-card-sm"${_scopeId}><div class="section-borderless"${_scopeId}><div class="gap-2 align-middle flex-container align-justify"${_scopeId}><div class="text-lg fw-semibold"${_scopeId}>Confirm Purchase</div><button class="btn-circle" data-toggle-modal="#purchase-with-coins-modal" style="${ssrRenderStyle({ "margin-right": "-10px" })}"${_scopeId}><i class="fas fa-times"${_scopeId}></i></button></div></div><div class="section-borderless"${_scopeId}><div class="text-sm text-muted fw-semibold"${_scopeId}> Are you sure you want to buy <span class="text-body fw-semibold"${_scopeId}>${ssrInterpolate(unref(usePage)().props.item.name)}</span> for <span class="text-warning"${_scopeId}><i class="fas fa-coins me-1"${_scopeId}></i> ${ssrInterpolate(unref(usePage)().props.item.cost_coins)} Coins </span>? </div></div><div class="gap-2 flex-container align-right section-borderless"${_scopeId}><form${_scopeId}><button type="submit" class="btn btn-warning btn-sm"${_scopeId}>Buy Now</button><button class="btn btn-secondary btn-sm" type="button" data-toggle-modal="#purchase-with-coins-modal"${_scopeId}> Cancel </button></form></div></div></div><div class="cell large-12"${_scopeId}>`);
            if (!unref(usePage)().props.item.public_view) {
              _push2(`<div class="alert alert-danger mb-3"${_scopeId}><i class="fad fa-shield"${_scopeId}></i> This item is hidden, only you and staff can see it. </div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(usePage)().props.item.status === "pending") {
              _push2(`<div class="alert alert-danger"${_scopeId}><i class="fad fa-clock"${_scopeId}></i> This item is pending approval. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="grid-x grid-margin-x grid-padding-y"${_scopeId}><div class="cell large-4"${_scopeId}><div class="mb-3 overflow-hidden"${_scopeId}><div class="p-4 position-relative"${_scopeId}><div style="${ssrRenderStyle({ "position": "absolute", "top": "10px", "left": "10px" })}"${_scopeId}>`);
            if (unref(usePage)().props.item.rare) {
              _push2(`<div class="mb-1"${_scopeId}><span class="badge badge-witch fw-semibold"${_scopeId}><i class="fas fa-star" style="${ssrRenderStyle({ "width": "18px" })}"${_scopeId}></i>Showpiece </span></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.isNewItem(unref(usePage)().props.item.created_at)) {
              _push2(`<div class="mb-1"${_scopeId}><span class="badge badge-info fw-semibold"${_scopeId}><i class="fas fa-fire" style="${ssrRenderStyle({ "width": "18px" })}"${_scopeId}></i>New </span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mb-1"${_scopeId}>`);
            if (unref(usePage)().props.item.sale_ongoing) {
              _push2(`<div class="mb-1 badge badge-danger fw-semibold"${_scopeId}><i class="fas fa-badge-percent" style="${ssrRenderStyle({ "width": "18px" })}"${_scopeId}></i>${ssrInterpolate(unref(usePage)().props.item.percent_off + "%")} off </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="gap-1 flex-container flex-dir-column" style="${ssrRenderStyle({ "position": "absolute", "bottom": "10px", "right": "10px" })}"${_scopeId}>`);
            if (unref(usePage)().props.auth.user && unref(usePage)().props.auth.user.pendingAssets != null) {
              _push2(`<div class="ms-auto"${_scopeId}><button class="btn btn-danger btn-xs"${_scopeId}><i class="fad fa-rotate"${_scopeId}></i> Rerender </button></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="ms-auto"${_scopeId}>`);
            if (unref(usePage)().props.item.preview) {
              _push2(`<button class="btn btn-secondary btn-xs"${_scopeId}><i class="fad fa-shirt"${_scopeId}></i> ${ssrInterpolate(unref(isPreview) ? "View Item" : "View Preview")}</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(usePage)().props.item.type == "crate") {
              _push2(`<div class="ms-auto"${_scopeId}><button class="btn btn-success btn-xs" data-toggle-modal="#view-crate-content-modal"${_scopeId}> View Contents </button></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><img${ssrRenderAttr("src", unref(usePage)().props.item.thumbnail)} class="mx-auto d-block" id="thumbnail" width="512" height="512"${_scopeId}></div>`);
            if (_ctx.itemOwnership) {
              _push2(`<div class="gap-2 py-2 overflow-hidden text-sm text-center align-middle flex-container align-center bg-success fw-semibold"${_scopeId}><i class="text-lg fad fa-party-horn"${_scopeId}></i> Yahoo! You own this item. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(usePage)().props.item.type == "crate") {
              _push2(`<div class="gap-3 mb-3 align-middle flex-container"${_scopeId}><button class="btn btn-info btn-xs w-100" data-toggle-modal="#crate-roll-modal"${_scopeId}> Open Crate </button><div class="text-xs text-center flex-child-grow text-danger fw-bold text-uppercase"${_scopeId}> 9 Owned </div><button class="text-muted" data-toggle-modal="#crate-info-modal"${_scopeId}><i class="fad fa-question-circle"${_scopeId}></i></button></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(usePage)().props.item.rare) {
              _push2(`<div${_scopeId}><div class="mb-1 text-xl fw-semibold"${_scopeId}> Private Sellers <span class="text-xs fw-semibold text-muted"${_scopeId}>This item has 3 listings</span></div><div class="card card-body"${_scopeId}><div class="gap-4 align-middle section flex-container"${_scopeId}><div class="gap-2 align-middle flex-container flex-child-grow"${_scopeId}><img src="/assets/img/dummy_headshot.png" class="headshot" width="50"${_scopeId}><div style="${ssrRenderStyle({ "line-height": "10px" })}"${_scopeId}><div class="text-lg fw-semibold"${_scopeId}> Nabrious </div><div class="text-xs fw-semibold text-muted"${_scopeId}> Copy #1 of 200 </div></div></div><button class="btn btn-success btn-xs w-100" data-toggle-modal="#purchase-with-bucks-modal"${_scopeId}><i class="fas fa-money-bill-1-wave" style="${ssrRenderStyle({ "width": "30px" })}"${_scopeId}></i>10 Bucks </button></div><div class="gap-4 align-middle section flex-container"${_scopeId}><div class="gap-2 align-middle flex-container flex-child-grow"${_scopeId}><img src="/assets/img/dummy_headshot.png" class="headshot" width="50"${_scopeId}><div style="${ssrRenderStyle({ "line-height": "10px" })}"${_scopeId}><div class="text-lg fw-semibold"${_scopeId}> Nabrious </div><div class="text-xs fw-semibold text-muted"${_scopeId}> Copy #1 of 200 </div></div></div><button class="btn btn-success btn-xs w-100" data-toggle-modal="#purchase-with-bucks-modal"${_scopeId}><i class="fas fa-money-bill-1-wave" style="${ssrRenderStyle({ "width": "30px" })}"${_scopeId}></i>10 Bucks </button></div><div class="gap-4 align-middle section flex-container"${_scopeId}><div class="gap-2 align-middle flex-container flex-child-grow"${_scopeId}><img src="/assets/img/dummy_headshot.png" class="headshot" width="50"${_scopeId}><div style="${ssrRenderStyle({ "line-height": "10px" })}"${_scopeId}><div class="text-lg fw-semibold"${_scopeId}> Nabrious </div><div class="text-xs fw-semibold text-muted"${_scopeId}> Copy #1 of 200 </div></div></div><button class="btn btn-success btn-xs w-100" data-toggle-modal="#purchase-with-bucks-modal"${_scopeId}><i class="fas fa-money-bill-1-wave" style="${ssrRenderStyle({ "width": "30px" })}"${_scopeId}></i>10 Bucks </button></div><div class="gap-4 align-middle section flex-container"${_scopeId}><div class="gap-2 align-middle flex-container flex-child-grow"${_scopeId}><img src="/assets/img/dummy_headshot.png" class="headshot" width="50"${_scopeId}><div style="${ssrRenderStyle({ "line-height": "10px" })}"${_scopeId}><div class="text-lg fw-semibold"${_scopeId}> Nabrious </div><div class="text-xs fw-semibold text-muted"${_scopeId}> Copy #1 of 200 </div></div></div><button class="btn btn-success btn-xs w-100" data-toggle-modal="#purchase-with-bucks-modal"${_scopeId}><i class="fas fa-money-bill-1-wave" style="${ssrRenderStyle({ "width": "30px" })}"${_scopeId}></i>10 Bucks </button></div><ul class="section pagination flex-container align-center"${_scopeId}><button class="page-link page-disabled"${_scopeId}><i class="fa-regular fa-chevron-left"${_scopeId}></i></button><button class="page-link page-active"${_scopeId}> 1 </button><button class="page-link"${_scopeId}>2</button><button class="page-link"${_scopeId}>3</button><button class="page-link"${_scopeId}><i class="fa-regular fa-chevron-right"${_scopeId}></i></button></ul></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="cell large-8"${_scopeId}><div class="card-body"${_scopeId}><div class="gap-2 mb-2 align-middle flex-container align-justify"${_scopeId}><div class="text-3xl fw-semibold"${_scopeId}>${ssrInterpolate(unref(usePage)().props.item.name)}</div><div class="position-relative" style="${ssrRenderStyle({ "margin-right": "-10px" })}"${_scopeId}>`);
            if (unref(usePage)().props.auth.user && unref(usePage)().props.auth.user.id == unref(usePage)().props.item.creator.id) {
              _push2(ssrRenderComponent(_component_Link, {
                as: "button",
                href: unref(route)(`store.edit`, { id: unref(usePage)().props.item.id }),
                class: "btn-circle",
                "data-tooltip-title": "More",
                "data-tooltip-placement": "bottom"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="fad fa-pen"${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("i", { class: "fad fa-pen" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="gap-2 mb-3 align-middle flex-container fw-semibold"${_scopeId}><div class="text-xs text-muted text-uppercase fw-bold"${_scopeId}> By </div>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: unref(route)("user.profile", { username: unref(usePage)().props.item.creator.username }),
              class: ["gap-2 align-middle flex-container", { "text-danger": unref(usePage)().props.item.creator.staff }]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", unref(usePage)().props.item.creator.thumbnail)} class="headshot" width="38"${_scopeId2}><div style="${ssrRenderStyle({ "line-height": "17px" })}"${_scopeId2}><div${_scopeId2}>${ssrInterpolate(unref(usePage)().props.item.creator.displayname)}</div><div class="text-xs text-muted text-truncate" style="${ssrRenderStyle({ "max-width": "140px" })}"${_scopeId2}>${ssrInterpolate("@" + unref(usePage)().props.item.creator.username)}</div></div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: unref(usePage)().props.item.creator.thumbnail,
                      class: "headshot",
                      width: "38"
                    }, null, 8, ["src"]),
                    createVNode("div", { style: { "line-height": "17px" } }, [
                      createVNode("div", null, toDisplayString(unref(usePage)().props.item.creator.displayname), 1),
                      createVNode("div", {
                        class: "text-xs text-muted text-truncate",
                        style: { "max-width": "140px" }
                      }, toDisplayString("@" + unref(usePage)().props.item.creator.username), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-1 text-xs fw-bold text-muted"${_scopeId}>`);
            if (unref(usePage)().props.auth.user && _ctx.itemOwnership != true && unref(usePage)().props.item.onsale) {
              _push2(`<span class="text-uppercase"${_scopeId}> Purchase With </span>`);
            } else if (!unref(usePage)().props.item.onsale) {
              _push2(`<span class="text-md text-muted"${_scopeId}> This item is offsale. </span>`);
            } else if (_ctx.itemOwnership) {
              _push2(`<span class="text-md text-info"${_scopeId}> You already own this item. </span>`);
            } else {
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(route)("auth.login.page"),
                class: "text-md text-warning squish",
                as: "span"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Login to Purchase ${ssrInterpolate(unref(usePage)().props.item.name)}`);
                  } else {
                    return [
                      createTextVNode(" Login to Purchase " + toDisplayString(unref(usePage)().props.item.name), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`</div>`);
            if (unref(usePage)().props.auth.user && _ctx.itemOwnership != true && unref(usePage)().props.item.onsale) {
              _push2(`<div class="gap-2 align-middle flex-container-lg"${_scopeId}><button class="mb-2 btn btn-success btn-sm w-100" data-toggle-modal="#purchase-with-bucks-modal"${_scopeId}><i class="fas fa-money-bill-1-wave" style="${ssrRenderStyle({ "width": "34px" })}"${_scopeId}></i>${ssrInterpolate(unref(usePage)().props.item.cost_bucks)} Bucks </button><div class="mb-2 text-xs fw-bold text-uppercase text-muted"${_scopeId}> or </div><button class="mb-2 btn btn-warning btn-sm w-100" data-toggle-modal="#purchase-with-coins-modal"${_scopeId}><i class="fas fa-coins" style="${ssrRenderStyle({ "width": "34px" })}"${_scopeId}></i>${ssrInterpolate(unref(usePage)().props.item.cost_coins)} Coins </button></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="p-3 mb-3"${_scopeId}><div class="grid-x grid-margin-x"${_scopeId}><div class="mb-2 cell large-6"${_scopeId}><div class="text-xs fw-bold text-uppercase text-muted text-truncate"${_scopeId}> Date Created </div><div class="fw-semibold text-truncate"${_scopeId}>${ssrInterpolate(unref(usePage)().props.item.DateHum)}</div></div><div class="mb-2 cell large-6"${_scopeId}><div class="text-xs fw-bold text-uppercase text-muted text-truncate"${_scopeId}> Last Updated </div><div class="fw-semibold text-truncate"${_scopeId}>${ssrInterpolate(unref(usePage)().props.item.UpdateHum)}</div></div><div class="mb-2 cell large-6 mb-md-0"${_scopeId}><div class="text-xs fw-bold text-uppercase text-muted text-truncate"${_scopeId}> Type </div><div class="fw-semibold text-capitalize text-truncate"${_scopeId}>${ssrInterpolate(capitalizeFirstLetter(unref(usePage)().props.item.item_type))}</div></div><div class="cell large-6"${_scopeId}><div class="text-xs fw-bold text-uppercase text-muted text-truncate"${_scopeId}> Owners </div><div class="fw-semibold text-truncate"${_scopeId}>${ssrInterpolate(unref(usePage)().props.item.owners)}</div></div></div></div>`);
            if (unref(usePage)().props.item.rare) {
              _push2(`<div${_scopeId}><div class="mb-1 text-xl fw-semibold"${_scopeId}> Price Chart </div><div class="card card-body"${_scopeId}><div class="text-xs fw-bold text-uppercase text-muted"${_scopeId}> PRICE CHART GOES HERE </div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="mb-1 text-xl fw-semibold"${_scopeId}> Description </div><div class="divider mx-1 my-2"${_scopeId}></div><div class="mb-3 text-md"${_scopeId}>${ssrInterpolate(unref(usePage)().props.item.description ? unref(usePage)().props.item.description : "This item does not have a description.")}</div><div class="mb-1 text-xl fw-semibold"${_scopeId}> Items by ${ssrInterpolate(unref(usePage)().props.item.creator.username)}</div><div class="divider mx-1 my-2"${_scopeId}></div><div class="text-sm text-muted mt-2"${_scopeId}><div class="mb-2 text-sm text-body fw-semibold"${_scopeId}>`);
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
              _push2(`<div class="text-sm fw-bold text-muted"${_scopeId}> There is no other items from this creator </div>`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "modal",
                id: "purchase-with-bucks-modal"
              }, [
                createVNode("div", { class: "modal-card modal-card-body modal-card-sm" }, [
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "gap-2 align-middle flex-container align-justify" }, [
                      createVNode("div", { class: "text-lg fw-semibold" }, "Confirm Purchase"),
                      createVNode("button", {
                        class: "btn-circle",
                        onClick: ($event) => showModal("purchase-with-bucks-modal"),
                        "data-toggle-modal": "#purchase-with-bucks-modal",
                        style: { "margin-right": "-10px" }
                      }, [
                        createVNode("i", { class: "fas fa-times" })
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "text-sm text-muted fw-semibold" }, [
                      createTextVNode(" Are you sure you want to buy "),
                      createVNode("span", { class: "text-body fw-semibold" }, toDisplayString(unref(usePage)().props.item.name), 1),
                      createTextVNode(" for "),
                      createVNode("span", { class: "text-success" }, [
                        createVNode("i", { class: "fas fa-money-bill-1-wave me-1" }),
                        createTextVNode(" " + toDisplayString(unref(usePage)().props.item.cost_bucks) + " Bucks ", 1)
                      ]),
                      createTextVNode("? ")
                    ])
                  ]),
                  createVNode("div", { class: "gap-2 flex-container align-right section-borderless" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(purchaseBucks, ["prevent"])
                    }, [
                      createVNode("button", {
                        type: "submit",
                        class: "btn btn-success btn-sm"
                      }, "Buy Now"),
                      createVNode("button", {
                        type: "button",
                        class: "btn btn-secondary btn-sm",
                        onClick: ($event) => showModal("purchase-with-bucks-modal"),
                        "data-toggle-modal": "#purchase-with-bucks-modal"
                      }, " Cancel ", 8, ["onClick"])
                    ], 32)
                  ])
                ])
              ]),
              createVNode("div", {
                class: "modal",
                id: "purchase-with-coins-modal"
              }, [
                createVNode("div", { class: "modal-card modal-card-body modal-card-sm" }, [
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "gap-2 align-middle flex-container align-justify" }, [
                      createVNode("div", { class: "text-lg fw-semibold" }, "Confirm Purchase"),
                      createVNode("button", {
                        class: "btn-circle",
                        onClick: ($event) => showModal("purchase-with-coins-modal"),
                        "data-toggle-modal": "#purchase-with-coins-modal",
                        style: { "margin-right": "-10px" }
                      }, [
                        createVNode("i", { class: "fas fa-times" })
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "text-sm text-muted fw-semibold" }, [
                      createTextVNode(" Are you sure you want to buy "),
                      createVNode("span", { class: "text-body fw-semibold" }, toDisplayString(unref(usePage)().props.item.name), 1),
                      createTextVNode(" for "),
                      createVNode("span", { class: "text-warning" }, [
                        createVNode("i", { class: "fas fa-coins me-1" }),
                        createTextVNode(" " + toDisplayString(unref(usePage)().props.item.cost_coins) + " Coins ", 1)
                      ]),
                      createTextVNode("? ")
                    ])
                  ]),
                  createVNode("div", { class: "gap-2 flex-container align-right section-borderless" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(purchaseCoins, ["prevent"])
                    }, [
                      createVNode("button", {
                        type: "submit",
                        class: "btn btn-warning btn-sm"
                      }, "Buy Now"),
                      createVNode("button", {
                        class: "btn btn-secondary btn-sm",
                        type: "button",
                        onClick: ($event) => showModal("purchase-with-coins-modal"),
                        "data-toggle-modal": "#purchase-with-coins-modal"
                      }, " Cancel ", 8, ["onClick"])
                    ], 32)
                  ])
                ])
              ]),
              createVNode("div", { class: "cell large-12" }, [
                !unref(usePage)().props.item.public_view ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "alert alert-danger mb-3"
                }, [
                  createVNode("i", { class: "fad fa-shield" }),
                  createTextVNode(" This item is hidden, only you and staff can see it. ")
                ])) : createCommentVNode("", true),
                unref(usePage)().props.item.status === "pending" ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "alert alert-danger"
                }, [
                  createVNode("i", { class: "fad fa-clock" }),
                  createTextVNode(" This item is pending approval. ")
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "grid-x grid-margin-x grid-padding-y" }, [
                  createVNode("div", { class: "cell large-4" }, [
                    createVNode("div", { class: "mb-3 overflow-hidden" }, [
                      createVNode("div", { class: "p-4 position-relative" }, [
                        createVNode("div", { style: { "position": "absolute", "top": "10px", "left": "10px" } }, [
                          unref(usePage)().props.item.rare ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mb-1"
                          }, [
                            createVNode("span", { class: "badge badge-witch fw-semibold" }, [
                              createVNode("i", {
                                class: "fas fa-star",
                                style: { "width": "18px" }
                              }),
                              createTextVNode("Showpiece ")
                            ])
                          ])) : createCommentVNode("", true),
                          _ctx.isNewItem(unref(usePage)().props.item.created_at) ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "mb-1"
                          }, [
                            createVNode("span", { class: "badge badge-info fw-semibold" }, [
                              createVNode("i", {
                                class: "fas fa-fire",
                                style: { "width": "18px" }
                              }),
                              createTextVNode("New ")
                            ])
                          ])) : createCommentVNode("", true),
                          createVNode("div", { class: "mb-1" }, [
                            unref(usePage)().props.item.sale_ongoing ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mb-1 badge badge-danger fw-semibold"
                            }, [
                              createVNode("i", {
                                class: "fas fa-badge-percent",
                                style: { "width": "18px" }
                              }),
                              createTextVNode(toDisplayString(unref(usePage)().props.item.percent_off + "%") + " off ", 1)
                            ])) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", {
                          class: "gap-1 flex-container flex-dir-column",
                          style: { "position": "absolute", "bottom": "10px", "right": "10px" }
                        }, [
                          unref(usePage)().props.auth.user && unref(usePage)().props.auth.user.pendingAssets != null ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "ms-auto"
                          }, [
                            createVNode("button", {
                              class: "btn btn-danger btn-xs",
                              onClick: ($event) => unref(reRender)(unref(usePage)().props.item.id)
                            }, [
                              createVNode("i", { class: "fad fa-rotate" }),
                              createTextVNode(" Rerender ")
                            ], 8, ["onClick"])
                          ])) : createCommentVNode("", true),
                          createVNode("div", { class: "ms-auto" }, [
                            unref(usePage)().props.item.preview ? (openBlock(), createBlock("button", {
                              key: 0,
                              class: "btn btn-secondary btn-xs",
                              onClick: ($event) => swap()
                            }, [
                              createVNode("i", { class: "fad fa-shirt" }),
                              createTextVNode(" " + toDisplayString(unref(isPreview) ? "View Item" : "View Preview"), 1)
                            ], 8, ["onClick"])) : createCommentVNode("", true)
                          ]),
                          unref(usePage)().props.item.type == "crate" ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "ms-auto"
                          }, [
                            createVNode("button", {
                              class: "btn btn-success btn-xs",
                              "data-toggle-modal": "#view-crate-content-modal",
                              onClick: ($event) => showModal("view-crate-content-modal")
                            }, " View Contents ", 8, ["onClick"])
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("img", {
                          src: unref(usePage)().props.item.thumbnail,
                          onError: ($event) => onImgErrorSmall("thumbnail"),
                          class: "mx-auto d-block",
                          id: "thumbnail",
                          ref_key: "thumbnail",
                          ref: thumbnail,
                          width: "512",
                          height: "512"
                        }, null, 40, ["src", "onError"])
                      ]),
                      _ctx.itemOwnership ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "gap-2 py-2 overflow-hidden text-sm text-center align-middle flex-container align-center bg-success fw-semibold"
                      }, [
                        createVNode("i", { class: "text-lg fad fa-party-horn" }),
                        createTextVNode(" Yahoo! You own this item. ")
                      ])) : createCommentVNode("", true)
                    ]),
                    unref(usePage)().props.item.type == "crate" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "gap-3 mb-3 align-middle flex-container"
                    }, [
                      createVNode("button", {
                        class: "btn btn-info btn-xs w-100",
                        "data-toggle-modal": "#crate-roll-modal",
                        onClick: ($event) => showModal("crate-roll-modal")
                      }, " Open Crate ", 8, ["onClick"]),
                      createVNode("div", { class: "text-xs text-center flex-child-grow text-danger fw-bold text-uppercase" }, " 9 Owned "),
                      createVNode("button", {
                        class: "text-muted",
                        "data-toggle-modal": "#crate-info-modal",
                        onClick: ($event) => showModal("crate-info-modal")
                      }, [
                        createVNode("i", { class: "fad fa-question-circle" })
                      ], 8, ["onClick"])
                    ])) : createCommentVNode("", true),
                    unref(usePage)().props.item.rare ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("div", { class: "mb-1 text-xl fw-semibold" }, [
                        createTextVNode(" Private Sellers "),
                        createVNode("span", { class: "text-xs fw-semibold text-muted" }, "This item has 3 listings")
                      ]),
                      createVNode("div", { class: "card card-body" }, [
                        createVNode("div", { class: "gap-4 align-middle section flex-container" }, [
                          createVNode("div", { class: "gap-2 align-middle flex-container flex-child-grow" }, [
                            createVNode("img", {
                              src: "/assets/img/dummy_headshot.png",
                              class: "headshot",
                              width: "50"
                            }),
                            createVNode("div", { style: { "line-height": "10px" } }, [
                              createVNode("div", { class: "text-lg fw-semibold" }, " Nabrious "),
                              createVNode("div", { class: "text-xs fw-semibold text-muted" }, " Copy #1 of 200 ")
                            ])
                          ]),
                          createVNode("button", {
                            class: "btn btn-success btn-xs w-100",
                            "data-toggle-modal": "#purchase-with-bucks-modal"
                          }, [
                            createVNode("i", {
                              class: "fas fa-money-bill-1-wave",
                              style: { "width": "30px" }
                            }),
                            createTextVNode("10 Bucks ")
                          ])
                        ]),
                        createVNode("div", { class: "gap-4 align-middle section flex-container" }, [
                          createVNode("div", { class: "gap-2 align-middle flex-container flex-child-grow" }, [
                            createVNode("img", {
                              src: "/assets/img/dummy_headshot.png",
                              class: "headshot",
                              width: "50"
                            }),
                            createVNode("div", { style: { "line-height": "10px" } }, [
                              createVNode("div", { class: "text-lg fw-semibold" }, " Nabrious "),
                              createVNode("div", { class: "text-xs fw-semibold text-muted" }, " Copy #1 of 200 ")
                            ])
                          ]),
                          createVNode("button", {
                            class: "btn btn-success btn-xs w-100",
                            "data-toggle-modal": "#purchase-with-bucks-modal"
                          }, [
                            createVNode("i", {
                              class: "fas fa-money-bill-1-wave",
                              style: { "width": "30px" }
                            }),
                            createTextVNode("10 Bucks ")
                          ])
                        ]),
                        createVNode("div", { class: "gap-4 align-middle section flex-container" }, [
                          createVNode("div", { class: "gap-2 align-middle flex-container flex-child-grow" }, [
                            createVNode("img", {
                              src: "/assets/img/dummy_headshot.png",
                              class: "headshot",
                              width: "50"
                            }),
                            createVNode("div", { style: { "line-height": "10px" } }, [
                              createVNode("div", { class: "text-lg fw-semibold" }, " Nabrious "),
                              createVNode("div", { class: "text-xs fw-semibold text-muted" }, " Copy #1 of 200 ")
                            ])
                          ]),
                          createVNode("button", {
                            class: "btn btn-success btn-xs w-100",
                            "data-toggle-modal": "#purchase-with-bucks-modal"
                          }, [
                            createVNode("i", {
                              class: "fas fa-money-bill-1-wave",
                              style: { "width": "30px" }
                            }),
                            createTextVNode("10 Bucks ")
                          ])
                        ]),
                        createVNode("div", { class: "gap-4 align-middle section flex-container" }, [
                          createVNode("div", { class: "gap-2 align-middle flex-container flex-child-grow" }, [
                            createVNode("img", {
                              src: "/assets/img/dummy_headshot.png",
                              class: "headshot",
                              width: "50"
                            }),
                            createVNode("div", { style: { "line-height": "10px" } }, [
                              createVNode("div", { class: "text-lg fw-semibold" }, " Nabrious "),
                              createVNode("div", { class: "text-xs fw-semibold text-muted" }, " Copy #1 of 200 ")
                            ])
                          ]),
                          createVNode("button", {
                            class: "btn btn-success btn-xs w-100",
                            "data-toggle-modal": "#purchase-with-bucks-modal"
                          }, [
                            createVNode("i", {
                              class: "fas fa-money-bill-1-wave",
                              style: { "width": "30px" }
                            }),
                            createTextVNode("10 Bucks ")
                          ])
                        ]),
                        createVNode("ul", { class: "section pagination flex-container align-center" }, [
                          createVNode("button", { class: "page-link page-disabled" }, [
                            createVNode("i", { class: "fa-regular fa-chevron-left" })
                          ]),
                          createVNode("button", { class: "page-link page-active" }, " 1 "),
                          createVNode("button", { class: "page-link" }, "2"),
                          createVNode("button", { class: "page-link" }, "3"),
                          createVNode("button", { class: "page-link" }, [
                            createVNode("i", { class: "fa-regular fa-chevron-right" })
                          ])
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "cell large-8" }, [
                    createVNode("div", { class: "card-body" }, [
                      createVNode("div", { class: "gap-2 mb-2 align-middle flex-container align-justify" }, [
                        createVNode("div", { class: "text-3xl fw-semibold" }, toDisplayString(unref(usePage)().props.item.name), 1),
                        createVNode("div", {
                          class: "position-relative",
                          style: { "margin-right": "-10px" }
                        }, [
                          unref(usePage)().props.auth.user && unref(usePage)().props.auth.user.id == unref(usePage)().props.item.creator.id ? (openBlock(), createBlock(_component_Link, {
                            key: 0,
                            as: "button",
                            href: unref(route)(`store.edit`, { id: unref(usePage)().props.item.id }),
                            class: "btn-circle",
                            "data-tooltip-title": "More",
                            "data-tooltip-placement": "bottom"
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fad fa-pen" })
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "gap-2 mb-3 align-middle flex-container fw-semibold" }, [
                        createVNode("div", { class: "text-xs text-muted text-uppercase fw-bold" }, " By "),
                        createVNode(_component_Link, {
                          href: unref(route)("user.profile", { username: unref(usePage)().props.item.creator.username }),
                          class: ["gap-2 align-middle flex-container", { "text-danger": unref(usePage)().props.item.creator.staff }]
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: unref(usePage)().props.item.creator.thumbnail,
                              class: "headshot",
                              width: "38"
                            }, null, 8, ["src"]),
                            createVNode("div", { style: { "line-height": "17px" } }, [
                              createVNode("div", null, toDisplayString(unref(usePage)().props.item.creator.displayname), 1),
                              createVNode("div", {
                                class: "text-xs text-muted text-truncate",
                                style: { "max-width": "140px" }
                              }, toDisplayString("@" + unref(usePage)().props.item.creator.username), 1)
                            ])
                          ]),
                          _: 1
                        }, 8, ["href", "class"])
                      ]),
                      createVNode("div", { class: "mb-1 text-xs fw-bold text-muted" }, [
                        unref(usePage)().props.auth.user && _ctx.itemOwnership != true && unref(usePage)().props.item.onsale ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-uppercase"
                        }, " Purchase With ")) : !unref(usePage)().props.item.onsale ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-md text-muted"
                        }, " This item is offsale. ")) : _ctx.itemOwnership ? (openBlock(), createBlock("span", {
                          key: 2,
                          class: "text-md text-info"
                        }, " You already own this item. ")) : (openBlock(), createBlock(_component_Link, {
                          key: 3,
                          href: unref(route)("auth.login.page"),
                          class: "text-md text-warning squish",
                          as: "span"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Login to Purchase " + toDisplayString(unref(usePage)().props.item.name), 1)
                          ]),
                          _: 1
                        }, 8, ["href"]))
                      ]),
                      unref(usePage)().props.auth.user && _ctx.itemOwnership != true && unref(usePage)().props.item.onsale ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "gap-2 align-middle flex-container-lg"
                      }, [
                        createVNode("button", {
                          class: "mb-2 btn btn-success btn-sm w-100",
                          "data-toggle-modal": "#purchase-with-bucks-modal",
                          onClick: ($event) => showModal("purchase-with-bucks-modal")
                        }, [
                          createVNode("i", {
                            class: "fas fa-money-bill-1-wave",
                            style: { "width": "34px" }
                          }),
                          createTextVNode(toDisplayString(unref(usePage)().props.item.cost_bucks) + " Bucks ", 1)
                        ], 8, ["onClick"]),
                        createVNode("div", { class: "mb-2 text-xs fw-bold text-uppercase text-muted" }, " or "),
                        createVNode("button", {
                          class: "mb-2 btn btn-warning btn-sm w-100",
                          "data-toggle-modal": "#purchase-with-coins-modal",
                          onClick: ($event) => showModal("purchase-with-coins-modal")
                        }, [
                          createVNode("i", {
                            class: "fas fa-coins",
                            style: { "width": "34px" }
                          }),
                          createTextVNode(toDisplayString(unref(usePage)().props.item.cost_coins) + " Coins ", 1)
                        ], 8, ["onClick"])
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "p-3 mb-3" }, [
                      createVNode("div", { class: "grid-x grid-margin-x" }, [
                        createVNode("div", { class: "mb-2 cell large-6" }, [
                          createVNode("div", { class: "text-xs fw-bold text-uppercase text-muted text-truncate" }, " Date Created "),
                          createVNode("div", { class: "fw-semibold text-truncate" }, toDisplayString(unref(usePage)().props.item.DateHum), 1)
                        ]),
                        createVNode("div", { class: "mb-2 cell large-6" }, [
                          createVNode("div", { class: "text-xs fw-bold text-uppercase text-muted text-truncate" }, " Last Updated "),
                          createVNode("div", { class: "fw-semibold text-truncate" }, toDisplayString(unref(usePage)().props.item.UpdateHum), 1)
                        ]),
                        createVNode("div", { class: "mb-2 cell large-6 mb-md-0" }, [
                          createVNode("div", { class: "text-xs fw-bold text-uppercase text-muted text-truncate" }, " Type "),
                          createVNode("div", { class: "fw-semibold text-capitalize text-truncate" }, toDisplayString(capitalizeFirstLetter(unref(usePage)().props.item.item_type)), 1)
                        ]),
                        createVNode("div", { class: "cell large-6" }, [
                          createVNode("div", { class: "text-xs fw-bold text-uppercase text-muted text-truncate" }, " Owners "),
                          createVNode("div", { class: "fw-semibold text-truncate" }, toDisplayString(unref(usePage)().props.item.owners), 1)
                        ])
                      ])
                    ]),
                    unref(usePage)().props.item.rare ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("div", { class: "mb-1 text-xl fw-semibold" }, " Price Chart "),
                      createVNode("div", { class: "card card-body" }, [
                        createVNode("div", { class: "text-xs fw-bold text-uppercase text-muted" }, " PRICE CHART GOES HERE ")
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "mb-1 text-xl fw-semibold" }, " Description "),
                createVNode("div", { class: "divider mx-1 my-2" }),
                createVNode("div", { class: "mb-3 text-md" }, toDisplayString(unref(usePage)().props.item.description ? unref(usePage)().props.item.description : "This item does not have a description."), 1),
                createVNode("div", { class: "mb-1 text-xl fw-semibold" }, " Items by " + toDisplayString(unref(usePage)().props.item.creator.username), 1),
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
                    }, " There is no other items from this creator "))
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Store/Item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
