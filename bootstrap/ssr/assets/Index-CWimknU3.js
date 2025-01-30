import { defineComponent, ref, reactive, computed, onMounted, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Navbar-DmBRqlRZ.js";
import { S as Sidebar } from "./Sidebar-fXSZR0n1.js";
import { _ as _sfc_main$3 } from "./Footer-CxsG0LBb.js";
import { _ as _sfc_main$1 } from "../ssr.js";
import axios from "axios";
import { route } from "momentum-trail";
import { usePage } from "@inertiajs/vue3";
import VLazyImage from "v-lazy-image";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash/throttle.js";
import "vue-tippy";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const colors = usePage().props.colors;
    const currentcat = ref("hat");
    const CategoryItems = ref([]);
    const wearingItems = ref([]);
    const wearingHats = ref([]);
    const SelectedItemID = ref();
    const slotValue = ref();
    const AdvancedEditor = ref(false);
    var userAvatar = reactive({
      color_head: computed(
        () => {
          var _a;
          return (_a = usePage().props.avatar) == null ? void 0 : _a["color_head"];
        }
      ),
      color_torso: computed(
        () => {
          var _a;
          return (_a = usePage().props.avatar) == null ? void 0 : _a["color_torso"];
        }
      ),
      color_left_arm: computed(
        () => {
          var _a;
          return (_a = usePage().props.avatar) == null ? void 0 : _a["color_left_arm"];
        }
      ),
      color_right_arm: computed(
        () => {
          var _a;
          return (_a = usePage().props.avatar) == null ? void 0 : _a["color_right_arm"];
        }
      ),
      color_left_leg: computed(
        () => {
          var _a;
          return (_a = usePage().props.avatar) == null ? void 0 : _a["color_left_leg"];
        }
      ),
      color_right_leg: computed(
        () => {
          var _a;
          return (_a = usePage().props.avatar) == null ? void 0 : _a["color_right_leg"];
        }
      ),
      image: computed(
        () => {
          var _a;
          return (_a = usePage().props.avatar) == null ? void 0 : _a["thumbnail"];
        }
      ),
      current_face: computed(
        () => {
          var _a;
          return (_a = usePage().props.avatar) == null ? void 0 : _a["current_face"];
        }
      )
    });
    const selectedPart = ref(null);
    const selectedColor = ref(null);
    const VrcRequest = ref(false);
    const imageRefreshKey = ref(0);
    let thumbnail = "";
    function showModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.toggle("active");
      }
    }
    const partNames = {
      head: "Head",
      left_arm: "Left Arm",
      torso: "Torso",
      right_arm: "Right Arm",
      left_leg: "Left Leg",
      right_leg: "Right Leg"
    };
    function VRCReset() {
      VrcRequest.value = true;
      const requestData = {
        action: "reset"
      };
      axios.post(route(`avatar.update`), requestData).then((response) => {
        console.log(response.data);
        imageRefreshKey.value += 1;
        thumbnail = response.data;
        VrcRequest.value = false;
        getCurrentlyWearingItems();
      }).catch((error) => {
        VrcRequest.value = false;
        console.error(error);
      });
      console.log(`Resetting`);
    }
    function changeColor(color, part) {
      if (!part) {
        console.error("Part is null or undefined");
        return Promise.reject("Part is null or undefined");
      } else {
        console.log(part);
      }
      VrcRequest.value = true;
      const requestData = {
        action: "color",
        body_part: part,
        color
      };
      axios.post(route(`avatar.update`), requestData).then((response) => {
        imageRefreshKey.value += 1;
        thumbnail = response.data;
        selectedColor.value = color;
        VrcRequest.value = false;
      }).catch((error) => {
        VrcRequest.value = false;
        console.error(error);
      });
      const updatedUserAvatar = { ...userAvatar };
      if (part === "head") {
        updatedUserAvatar.color_head = color;
      } else if (part === "left_arm") {
        updatedUserAvatar.color_left_arm = color;
      } else if (part === "torso") {
        updatedUserAvatar.color_torso = color;
      } else if (part === "right_arm") {
        updatedUserAvatar.color_right_arm = color;
      } else if (part === "left_leg") {
        updatedUserAvatar.color_left_leg = color;
      } else {
        updatedUserAvatar.color_right_leg = color;
      }
      userAvatar = updatedUserAvatar;
      console.log(`Changing ${part} color to: ${color}`);
    }
    function selectPart(part) {
      selectedPart.value = part;
    }
    function setColor(color) {
      selectedColor.value = color;
    }
    function handlePartSelection(part) {
      if (AdvancedEditor.value == true) {
        showModal("PartsModalAdvanced");
      } else {
        showModal("PartsModal");
      }
      selectPart(part);
    }
    const SortItemByType = async (id, type, action) => {
      if (action === "wear") {
        if (type === "hat") {
          SelectedItemID.value = id;
          showModal("SlotModal");
        } else {
          WearItem(id, "none");
        }
      } else {
        if (type === "hat") {
          SelectedItemID.value = id;
          showModal("RemoveSlotModal");
        } else {
          TakeOffItem(id, "none");
        }
      }
    };
    const getItemsbyCategory = async (category) => {
      try {
        const response = await axios.get(route(`api.avatar.items`, { category }));
        CategoryItems.value = response.data;
        currentcat.value = category;
      } catch (error) {
        console.error("Error fetching all items:", error);
        return [];
      }
    };
    const getCurrentlyWearingItems = async () => {
      try {
        const response = await axios.get(route(`api.user.currently-wearing`, { id: usePage().props.auth.user.id }));
        wearingItems.value = response.data;
      } catch (error) {
        console.error("Error fetching currently wearing items:", error);
        return [];
      }
    };
    const getCurrentlyWearingHats = async () => {
      try {
        const response = await axios.get(route(`api.avatar.wearing-hats`));
        wearingHats.value = response.data;
      } catch (error) {
        console.error("Error fetching currently wearing items:", error);
        return [];
      }
    };
    const WearItem = async (id, slot) => {
      try {
        VrcRequest.value = true;
        const response = await axios.get(
          route(`api.avatar.wear-item`, { id, slot })
        );
        imageRefreshKey.value += 1;
        thumbnail = response.data.thumbnail;
        VrcRequest.value = false;
        getCurrentlyWearingItems();
      } catch (error) {
        VrcRequest.value = false;
        console.error("Error wearing item:", error);
        return [];
      }
    };
    const TakeOffItem = async (id, slot) => {
      try {
        VrcRequest.value = true;
        const response = await axios.get(
          route(`api.avatar.remove-item`, { id, slot })
        );
        imageRefreshKey.value += 1;
        thumbnail = response.data.thumbnail;
        VrcRequest.value = false;
        getCurrentlyWearingItems();
      } catch (error) {
        VrcRequest.value = false;
        console.error("Error wearing item:", error);
        return [];
      }
    };
    function setSlotValue(e) {
      slotValue.value = e.target.value;
    }
    onMounted(() => {
      getCurrentlyWearingItems(), getCurrentlyWearingHats();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_Pagination = resolveComponent("Pagination");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Customize",
        description: "Customize your charcter.",
        url: unref(route)("auth.login.page")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal" id="RemoveSlotModal" data-v-2dd35863${_scopeId}><div class="modal-card modal-card-body modal-card-sm" data-v-2dd35863${_scopeId}><div class="section-borderless" data-v-2dd35863${_scopeId}><div class="gap-2 align-middle flex-container align-justify" data-v-2dd35863${_scopeId}><div class="text-lg fw-semibold" data-v-2dd35863${_scopeId}>Pick a Slot</div><button class="btn-circle" data-toggle-modal="#RemoveSlotModal" style="${ssrRenderStyle({ "margin-right": "-10px" })}" data-v-2dd35863${_scopeId}><i class="fas fa-times" data-v-2dd35863${_scopeId}></i></button></div></div><div class="section-borderless" data-v-2dd35863${_scopeId}><div class="mb-2" data-v-2dd35863${_scopeId}><div class="flex-wrap gap-1 flex-container align-center" data-v-2dd35863${_scopeId}><!--[-->`);
            ssrRenderList(6, (n) => {
              _push2(`<button class="btn btn-info"${ssrRenderAttr("value", n)} data-v-2dd35863${_scopeId}><i class="mr-1 fa-solid fa-hat-beach" data-v-2dd35863${_scopeId}></i> Slot ${ssrInterpolate(n)}</button>`);
            });
            _push2(`<!--]--></div></div></div><div class="flex-wrap gap-2 flex-container justify-content-end section-borderless" data-v-2dd35863${_scopeId}><button type="button" class="btn btn-secondary" data-v-2dd35863${_scopeId}> Cancel </button>`);
            if (!VrcRequest.value) {
              _push2(`<button type="submit" class="btn btn-success" data-v-2dd35863${_scopeId}> Take Off </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="modal" id="SlotModal" data-v-2dd35863${_scopeId}><div class="modal-card modal-card-body modal-card-sm" data-v-2dd35863${_scopeId}><div class="section-borderless" data-v-2dd35863${_scopeId}><div class="gap-2 align-middle flex-container align-justify" data-v-2dd35863${_scopeId}><div class="text-lg fw-semibold" data-v-2dd35863${_scopeId}>Pick a Slot</div><button class="btn-circle" data-toggle-modal="#SlotModal" style="${ssrRenderStyle({ "margin-right": "-10px" })}" data-v-2dd35863${_scopeId}><i class="fas fa-times" data-v-2dd35863${_scopeId}></i></button></div></div><div class="section-borderless" data-v-2dd35863${_scopeId}><div class="mb-2" data-v-2dd35863${_scopeId}><div class="flex-wrap gap-1 flex-container align-center" data-v-2dd35863${_scopeId}><!--[-->`);
            ssrRenderList(6, (n) => {
              _push2(`<button class="btn btn-info"${ssrRenderAttr("value", n)} data-v-2dd35863${_scopeId}><i class="mr-1 fa-solid fa-hat-beach" data-v-2dd35863${_scopeId}></i> Slot ${ssrInterpolate(n)}</button>`);
            });
            _push2(`<!--]--></div></div></div><div class="flex-wrap gap-2 flex-container justify-content-end section-borderless" data-v-2dd35863${_scopeId}><button type="button" class="btn btn-secondary" data-v-2dd35863${_scopeId}> Cancel </button>`);
            if (!VrcRequest.value) {
              _push2(`<button type="submit" class="btn btn-success" data-v-2dd35863${_scopeId}> Wear </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="modal" id="PartsModal" data-v-2dd35863${_scopeId}><div class="modal-card modal-card-body modal-card-sm" data-v-2dd35863${_scopeId}><div class="section-borderless" data-v-2dd35863${_scopeId}><div class="gap-2 align-middle flex-container align-justify" data-v-2dd35863${_scopeId}>`);
            if (selectedPart.value) {
              _push2(`<div class="text-lg fw-semibold" data-v-2dd35863${_scopeId}> Change ${ssrInterpolate(partNames[selectedPart.value])} Color </div>`);
            } else {
              _push2(`<div class="text-lg fw-semibold" data-v-2dd35863${_scopeId}> Select a part to change its color </div>`);
            }
            _push2(`<button class="btn-circle" data-toggle-modal="#PartsModal" style="${ssrRenderStyle({ "margin-right": "-10px" })}" data-v-2dd35863${_scopeId}><i class="fas fa-times" data-v-2dd35863${_scopeId}></i></button></div></div><div class="mr-2 section-borderless grid-x" data-v-2dd35863${_scopeId}><!--[-->`);
            ssrRenderList(unref(colors), (color, index) => {
              _push2(`<div class="mr-2" data-v-2dd35863${_scopeId}><div class="${ssrRenderClass([{
                active: selectedColor.value === color || unref(userAvatar)[`color_${selectedPart.value}`] === color
              }, "ColorPickerItem"])}" style="${ssrRenderStyle({
                backgroundColor: "#" + color,
                display: "inline-block",
                width: "32px",
                height: "32px"
              })}" data-v-2dd35863${_scopeId}></div></div>`);
            });
            _push2(`<!--]--><div class="text-xs text-muted fw-semibold" data-v-2dd35863${_scopeId}> After changing your avatar part your avatar will rerender with the changes applied. </div><div class="flex-wrap gap-2 flex-container justify-content-end section-borderless" data-v-2dd35863${_scopeId}><button class="btn btn-secondary" data-v-2dd35863${_scopeId}> Cancel </button>`);
            if (selectedPart.value && !VrcRequest.value) {
              _push2(`<input type="submit" class="btn btn-success" value="Submit" data-v-2dd35863${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div><div class="modal" id="PartsModalAdvanced" data-v-2dd35863${_scopeId}><div class="modal-card modal-card-body modal-card-sm" data-v-2dd35863${_scopeId}><div class="section-borderless" data-v-2dd35863${_scopeId}><div class="gap-2 align-middle flex-container align-justify" data-v-2dd35863${_scopeId}>`);
            if (selectedPart.value) {
              _push2(`<div class="text-lg fw-semibold" data-v-2dd35863${_scopeId}> Change ${ssrInterpolate(partNames[selectedPart.value])} Color </div>`);
            } else {
              _push2(`<div class="text-lg fw-semibold" data-v-2dd35863${_scopeId}> Select a part to change its color </div>`);
            }
            _push2(`<button class="btn-circle" data-toggle-modal="#PartsModal" style="${ssrRenderStyle({ "margin-right": "-10px" })}" data-v-2dd35863${_scopeId}><i class="fas fa-times" data-v-2dd35863${_scopeId}></i></button></div></div><div class="mr-2 flex-wrap gap-1 flex-container align-center section-borderless grid-x" data-v-2dd35863${_scopeId}><div class="color-picker" data-v-2dd35863${_scopeId}><input type="color" data-v-2dd35863${_scopeId}></div></div><div class="text-xs text-muted fw-semibold" data-v-2dd35863${_scopeId}> After changing your avatar part your avatar will rerender with the changes applied. </div><div class="flex-wrap gap-2 flex-container justify-content-end section-borderless" data-v-2dd35863${_scopeId}><button class="btn btn-secondary" data-v-2dd35863${_scopeId}> Cancel </button>`);
            if (selectedPart.value && !VrcRequest.value) {
              _push2(`<input type="submit" class="btn btn-success" value="Submit" data-v-2dd35863${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="cell medium-3" data-v-2dd35863${_scopeId}><div class="mb-3 card card-body" style="${ssrRenderStyle({ "background": "transparent", "border-color": "transparent" })}" data-v-2dd35863${_scopeId}><div id="avatarDiv" data-v-2dd35863${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VLazyImage), {
              src: unref(thumbnail),
              "src-placeholder": unref(userAvatar).image,
              style: { "display": "block", "margin": "0 auto !important" }
            }, null, _parent2, _scopeId));
            if (VrcRequest.value) {
              _push2(`<div id="avatar-loading" style="${ssrRenderStyle({ "width": "inherit", "height": "inherit", "visibility": "none", "position": "absolute", "inset": "0px", "background-color": "rgba(0, 0, 0, 0.58)", "display": "inline-grid", "justify-content": "center", "align-items": "center" })}" data-v-2dd35863${_scopeId}><i class="justify-center text-3xl text-center align-middle fa-duotone fa-spinner flex-container flex-dir-column text-info" style="${ssrRenderStyle({ "animation-iteration-count": "infinite", "animation-timing-function": "linear", "animation-name": "spin", "animation-duration": "0.7s", "font-size": "3em" })}" data-v-2dd35863${_scopeId}></i></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="min-w-0 gap-2 mt-3 flex-container" data-v-2dd35863${_scopeId}><button class="btn btn-danger btn-sm text-truncate w-100" data-v-2dd35863${_scopeId}> Reset </button><button class="btn btn-info btn-sm text-truncate w-100" data-v-2dd35863${_scopeId}>Random</button></div></div></div><div class="cell medium-9" data-v-2dd35863${_scopeId}><div class="flex-container gap-2" data-v-2dd35863${_scopeId}><span class="text-xl fw-semibold" data-v-2dd35863${_scopeId}>Current Outfit</span><button class="btn btn-info btn-xs text-truncate" data-v-2dd35863${_scopeId}>Advanced Editor</button></div><div class="mb-3 card-body" data-v-2dd35863${_scopeId}><div class="grid-x" data-v-2dd35863${_scopeId}><div class="text-center cell medium-4 align-left" data-v-2dd35863${_scopeId}><div class="text-center flex-container align-center" data-v-2dd35863${_scopeId}><div class="text-center" style="${ssrRenderStyle({ "transform": "scale(0.7)", "margin-top": "-25px" })}" data-v-2dd35863${_scopeId}><div style="${ssrRenderStyle({ "margin-bottom": "5px" })}" data-v-2dd35863${_scopeId}><button class="avatar-body-part" id="head" style="${ssrRenderStyle({
              backgroundColor: "#" + unref(userAvatar).color_head,
              padding: "5px",
              borderRadius: "15px",
              marginTop: "-1px",
              width: "60",
              height: "50"
            })}" data-v-2dd35863${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VLazyImage), {
              src: unref(userAvatar).current_face,
              "src-placeholder": unref(usePage)().props.site.production.domains.storage + "/assets/default.png",
              width: "50",
              height: "50"
            }, null, _parent2, _scopeId));
            _push2(`</button></div><div style="${ssrRenderStyle({ "display": "flex", "margin-bottom": "5px" })}" data-v-2dd35863${_scopeId}><button class="avatar-body-part" id="left_arm" style="${ssrRenderStyle({
              backgroundColor: "#" + unref(userAvatar).color_left_arm,
              padding: "50px",
              paddingRight: "0px"
            })}" data-v-2dd35863${_scopeId}></button><button class="avatar-body-part" id="torso" style="${ssrRenderStyle({
              backgroundColor: "#" + unref(userAvatar).color_torso,
              padding: "50px"
            })}" data-v-2dd35863${_scopeId}></button><button class="avatar-body-part" id="right_arm" style="${ssrRenderStyle({
              backgroundColor: "#" + unref(userAvatar).color_right_arm,
              padding: "50px",
              paddingRight: "0px"
            })}" data-v-2dd35863${_scopeId}></button></div><div class="display: flex; margin-bottom: 5px" data-v-2dd35863${_scopeId}><button class="avatar-body-part" name="left_leg" style="${ssrRenderStyle({
              backgroundColor: "#" + unref(userAvatar).color_left_leg,
              padding: "50px",
              paddingRight: "0px",
              paddingLeft: "47px"
            })}" data-v-2dd35863${_scopeId}></button><button class="avatar-body-part" name="right_leg" style="${ssrRenderStyle({
              backgroundColor: "#" + unref(userAvatar).color_right_leg,
              padding: "50px",
              paddingRight: "0px",
              borderBottom: "15px",
              paddingLeft: "47px"
            })}" data-v-2dd35863${_scopeId}></button></div></div></div></div><div class="text-center cell medium-8" data-v-2dd35863${_scopeId}><div class="flex-container text-start flex-row flex-nowrap overflow-x-scroll px-3 px-lg-0 mb-2 mb-lg-0" data-v-2dd35863${_scopeId}><div class="grid-x grid-margin-x grid-padding-y" data-v-2dd35863${_scopeId}><!--[-->`);
            ssrRenderList(wearingItems.value, (item, index) => {
              _push2(`<div class="cell large-3 medium-3 small-6" data-v-2dd35863${_scopeId}><div class="d-block" data-v-2dd35863${_scopeId}><div class="p-2 mb-1 card card-item position-relative" data-v-2dd35863${_scopeId}><div style="${ssrRenderStyle({ "position": "absolute", "bottom": "10px", "left": "10px" })}" data-v-2dd35863${_scopeId}>`);
              if (item.in_event) {
                _push2(`<div class="mb-1 badge badge-warning fw-semibold" data-v-2dd35863${_scopeId}><i class="fas fa-calendar-star" style="${ssrRenderStyle({ "width": "18px" })}" data-v-2dd35863${_scopeId}></i>Event </div>`);
              } else if (item.rare) {
                _push2(`<div class="mb-1 badge badge-info fw-semibold" data-v-2dd35863${_scopeId}><i class="fas fa-star" style="${ssrRenderStyle({ "width": "18px" })}" data-v-2dd35863${_scopeId}></i>Rare </div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><img${ssrRenderAttr("src", item.thumbnail)}${ssrRenderAttr("id", item.thumbnail)} data-v-2dd35863${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_Link, {
                as: "p",
                style: { "cursor": "pointer" },
                href: unref(route)(`store.item`, { id: item.id }),
                class: "text-body text-center fw-semibold text-truncate"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (!wearingItems.value.length) {
              _push2(`<div class="gap-3 text-start flex-container flex-dir-column" data-v-2dd35863${_scopeId}><div class="text-md text-muted fw-semibold" data-v-2dd35863${_scopeId}> You are not wearing any items. </div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div><div class="mb-3 card-body cell medium-12" data-v-2dd35863${_scopeId}><div class="mb-2 align-middle grid-x" data-v-2dd35863${_scopeId}><div class="cell large-9" data-v-2dd35863${_scopeId}><div class="mb-2 text-xl fw-semibold" data-v-2dd35863${_scopeId}>Inventory</div></div><div class="cell large-3" data-v-2dd35863${_scopeId}><div class="gap-2 align-middle flex-container-lg" data-v-2dd35863${_scopeId}><select class="mb-2 form form-xs form-select form-has-section-color" data-v-2dd35863${_scopeId}><!--[-->`);
            ssrRenderList(unref(usePage)().props.categories, (category) => {
              _push2(`<option${ssrRenderAttr("value", category.internal)}${ssrRenderAttr("active", currentcat.value === category.internal)} data-v-2dd35863${_scopeId}>${ssrInterpolate(category.name)}</option>`);
            });
            _push2(`<!--]--></select></div></div></div><div class="section" data-v-2dd35863${_scopeId}><div class="gap-3 text-center flex-container flex-dir-column" data-v-2dd35863${_scopeId}><div class="grid-x grid-margin-x" data-v-2dd35863${_scopeId}><!--[-->`);
            ssrRenderList(CategoryItems.value.data, (item) => {
              _push2(`<div class="cell large-2 medium-3 small-3" data-v-2dd35863${_scopeId}><div class="d-block" data-v-2dd35863${_scopeId}><div class="p-2 mb-1 card card-inner position-relative" data-v-2dd35863${_scopeId}><img${ssrRenderAttr("src", item.thumbnail)} data-v-2dd35863${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_Link, {
                as: "p",
                style: { "cursor": "pointer" },
                href: unref(route)(`store.item`, { id: item.id }),
                class: "text-body fw-semibold text-truncate"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (CategoryItems.value.data) {
              _push2(ssrRenderComponent(_component_Pagination, { pagedata: CategoryItems.value }, null, _parent2, _scopeId));
            } else if (!CategoryItems.value.data || !CategoryItems.value.length) {
              _push2(`<div class="gap-3 text-center flex-container flex-dir-column" data-v-2dd35863${_scopeId}><i class="text-5xl fad fa-crate-apple text-muted" data-v-2dd35863${_scopeId}></i><div style="${ssrRenderStyle({ "line-height": "16px" })}" data-v-2dd35863${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase" data-v-2dd35863${_scopeId}>No Items</div><div class="text-xs text-muted fw-semibold" data-v-2dd35863${_scopeId}> You have no ${ssrInterpolate(currentcat.value)}${ssrInterpolate(currentcat.value !== "pants" ? "s" : null)}. </div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "modal",
                id: "RemoveSlotModal"
              }, [
                createVNode("div", { class: "modal-card modal-card-body modal-card-sm" }, [
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "gap-2 align-middle flex-container align-justify" }, [
                      createVNode("div", { class: "text-lg fw-semibold" }, "Pick a Slot"),
                      createVNode("button", {
                        onClick: ($event) => showModal("RemoveSlotModal"),
                        class: "btn-circle",
                        "data-toggle-modal": "#RemoveSlotModal",
                        style: { "margin-right": "-10px" }
                      }, [
                        createVNode("i", { class: "fas fa-times" })
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("div", { class: "flex-wrap gap-1 flex-container align-center" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(6, (n) => {
                          return createVNode("button", {
                            class: "btn btn-info",
                            key: n,
                            value: n,
                            onClick: ($event) => setSlotValue($event)
                          }, [
                            createVNode("i", { class: "mr-1 fa-solid fa-hat-beach" }),
                            createTextVNode(" Slot " + toDisplayString(n), 1)
                          ], 8, ["value", "onClick"]);
                        }), 64))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex-wrap gap-2 flex-container justify-content-end section-borderless" }, [
                    createVNode("button", {
                      type: "button",
                      class: "btn btn-secondary",
                      onClick: ($event) => showModal("RemoveSlotModal")
                    }, " Cancel ", 8, ["onClick"]),
                    !VrcRequest.value ? (openBlock(), createBlock("button", {
                      key: 0,
                      type: "submit",
                      class: "btn btn-success",
                      onClick: ($event) => TakeOffItem(SelectedItemID.value, slotValue.value)
                    }, " Take Off ", 8, ["onClick"])) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createVNode("div", {
                class: "modal",
                id: "SlotModal"
              }, [
                createVNode("div", { class: "modal-card modal-card-body modal-card-sm" }, [
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "gap-2 align-middle flex-container align-justify" }, [
                      createVNode("div", { class: "text-lg fw-semibold" }, "Pick a Slot"),
                      createVNode("button", {
                        onClick: ($event) => showModal("SlotModal"),
                        class: "btn-circle",
                        "data-toggle-modal": "#SlotModal",
                        style: { "margin-right": "-10px" }
                      }, [
                        createVNode("i", { class: "fas fa-times" })
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("div", { class: "flex-wrap gap-1 flex-container align-center" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(6, (n) => {
                          return createVNode("button", {
                            class: "btn btn-info",
                            key: n,
                            value: n,
                            onClick: ($event) => setSlotValue($event)
                          }, [
                            createVNode("i", { class: "mr-1 fa-solid fa-hat-beach" }),
                            createTextVNode(" Slot " + toDisplayString(n), 1)
                          ], 8, ["value", "onClick"]);
                        }), 64))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex-wrap gap-2 flex-container justify-content-end section-borderless" }, [
                    createVNode("button", {
                      type: "button",
                      class: "btn btn-secondary",
                      onClick: ($event) => showModal("SlotModal")
                    }, " Cancel ", 8, ["onClick"]),
                    !VrcRequest.value ? (openBlock(), createBlock("button", {
                      key: 0,
                      type: "submit",
                      class: "btn btn-success",
                      onClick: ($event) => WearItem(SelectedItemID.value, slotValue.value)
                    }, " Wear ", 8, ["onClick"])) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createVNode("div", {
                class: "modal",
                id: "PartsModal"
              }, [
                createVNode("div", { class: "modal-card modal-card-body modal-card-sm" }, [
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "gap-2 align-middle flex-container align-justify" }, [
                      selectedPart.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-lg fw-semibold"
                      }, " Change " + toDisplayString(partNames[selectedPart.value]) + " Color ", 1)) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-lg fw-semibold"
                      }, " Select a part to change its color ")),
                      createVNode("button", {
                        onClick: ($event) => showModal("PartsModal"),
                        class: "btn-circle",
                        "data-toggle-modal": "#PartsModal",
                        style: { "margin-right": "-10px" }
                      }, [
                        createVNode("i", { class: "fas fa-times" })
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "mr-2 section-borderless grid-x" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(colors), (color, index) => {
                      return openBlock(), createBlock("div", {
                        class: "mr-2",
                        key: index
                      }, [
                        createVNode("div", {
                          class: ["ColorPickerItem", {
                            active: selectedColor.value === color || unref(userAvatar)[`color_${selectedPart.value}`] === color
                          }],
                          onClick: ($event) => setColor(color),
                          style: {
                            backgroundColor: "#" + color,
                            display: "inline-block",
                            width: "32px",
                            height: "32px"
                          }
                        }, null, 14, ["onClick"])
                      ]);
                    }), 128)),
                    createVNode("div", { class: "text-xs text-muted fw-semibold" }, " After changing your avatar part your avatar will rerender with the changes applied. "),
                    createVNode("div", { class: "flex-wrap gap-2 flex-container justify-content-end section-borderless" }, [
                      createVNode("button", {
                        class: "btn btn-secondary",
                        onClick: ($event) => showModal("PartsModal")
                      }, " Cancel ", 8, ["onClick"]),
                      selectedPart.value && !VrcRequest.value ? (openBlock(), createBlock("input", {
                        key: 0,
                        onClick: ($event) => changeColor(selectedColor.value, selectedPart.value),
                        type: "submit",
                        class: "btn btn-success",
                        value: "Submit"
                      }, null, 8, ["onClick"])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ]),
              createVNode("div", {
                class: "modal",
                id: "PartsModalAdvanced"
              }, [
                createVNode("div", { class: "modal-card modal-card-body modal-card-sm" }, [
                  createVNode("div", { class: "section-borderless" }, [
                    createVNode("div", { class: "gap-2 align-middle flex-container align-justify" }, [
                      selectedPart.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-lg fw-semibold"
                      }, " Change " + toDisplayString(partNames[selectedPart.value]) + " Color ", 1)) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-lg fw-semibold"
                      }, " Select a part to change its color ")),
                      createVNode("button", {
                        onClick: ($event) => showModal("PartsModalAdvanced"),
                        class: "btn-circle",
                        "data-toggle-modal": "#PartsModal",
                        style: { "margin-right": "-10px" }
                      }, [
                        createVNode("i", { class: "fas fa-times" })
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "mr-2 flex-wrap gap-1 flex-container align-center section-borderless grid-x" }, [
                    createVNode("div", { class: "color-picker" }, [
                      createVNode("input", {
                        type: "color",
                        onChange: ($event) => setColor($event.target.value.replace("#", ""))
                      }, null, 40, ["onChange"])
                    ])
                  ]),
                  createVNode("div", { class: "text-xs text-muted fw-semibold" }, " After changing your avatar part your avatar will rerender with the changes applied. "),
                  createVNode("div", { class: "flex-wrap gap-2 flex-container justify-content-end section-borderless" }, [
                    createVNode("button", {
                      class: "btn btn-secondary",
                      onClick: ($event) => showModal("PartsModalAdvanced")
                    }, " Cancel ", 8, ["onClick"]),
                    selectedPart.value && !VrcRequest.value ? (openBlock(), createBlock("input", {
                      key: 0,
                      onClick: ($event) => changeColor(selectedColor.value, selectedPart.value),
                      type: "submit",
                      class: "btn btn-success",
                      value: "Submit"
                    }, null, 8, ["onClick"])) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createVNode("div", { class: "cell medium-3" }, [
                createVNode("div", {
                  class: "mb-3 card card-body",
                  style: { "background": "transparent", "border-color": "transparent" }
                }, [
                  createVNode("div", { id: "avatarDiv" }, [
                    createVNode(unref(VLazyImage), {
                      src: unref(thumbnail),
                      "src-placeholder": unref(userAvatar).image,
                      style: { "display": "block", "margin": "0 auto !important" }
                    }, null, 8, ["src", "src-placeholder"]),
                    VrcRequest.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      id: "avatar-loading",
                      style: { "width": "inherit", "height": "inherit", "visibility": "none", "position": "absolute", "inset": "0px", "background-color": "rgba(0, 0, 0, 0.58)", "display": "inline-grid", "justify-content": "center", "align-items": "center" }
                    }, [
                      createVNode("i", {
                        class: "justify-center text-3xl text-center align-middle fa-duotone fa-spinner flex-container flex-dir-column text-info",
                        style: { "animation-iteration-count": "infinite", "animation-timing-function": "linear", "animation-name": "spin", "animation-duration": "0.7s", "font-size": "3em" }
                      })
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "min-w-0 gap-2 mt-3 flex-container" }, [
                    createVNode("button", {
                      onClick: ($event) => VRCReset(),
                      class: "btn btn-danger btn-sm text-truncate w-100"
                    }, " Reset ", 8, ["onClick"]),
                    createVNode("button", { class: "btn btn-info btn-sm text-truncate w-100" }, "Random")
                  ])
                ])
              ]),
              createVNode("div", { class: "cell medium-9" }, [
                createVNode("div", { class: "flex-container gap-2" }, [
                  createVNode("span", { class: "text-xl fw-semibold" }, "Current Outfit"),
                  createVNode("button", {
                    onClick: ($event) => AdvancedEditor.value = !AdvancedEditor.value,
                    class: "btn btn-info btn-xs text-truncate"
                  }, "Advanced Editor", 8, ["onClick"])
                ]),
                createVNode("div", { class: "mb-3 card-body" }, [
                  createVNode("div", { class: "grid-x" }, [
                    createVNode("div", { class: "text-center cell medium-4 align-left" }, [
                      createVNode("div", { class: "text-center flex-container align-center" }, [
                        createVNode("div", {
                          class: "text-center",
                          style: { "transform": "scale(0.7)", "margin-top": "-25px" }
                        }, [
                          createVNode("div", { style: { "margin-bottom": "5px" } }, [
                            createVNode("button", {
                              class: "avatar-body-part",
                              onClick: ($event) => handlePartSelection("head"),
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
                            ], 12, ["onClick"])
                          ]),
                          createVNode("div", { style: { "display": "flex", "margin-bottom": "5px" } }, [
                            createVNode("button", {
                              class: "avatar-body-part",
                              onClick: ($event) => handlePartSelection("left_arm"),
                              id: "left_arm",
                              style: {
                                backgroundColor: "#" + unref(userAvatar).color_left_arm,
                                padding: "50px",
                                paddingRight: "0px"
                              }
                            }, null, 12, ["onClick"]),
                            createVNode("button", {
                              class: "avatar-body-part",
                              onClick: ($event) => handlePartSelection("torso"),
                              id: "torso",
                              style: {
                                backgroundColor: "#" + unref(userAvatar).color_torso,
                                padding: "50px"
                              }
                            }, null, 12, ["onClick"]),
                            createVNode("button", {
                              class: "avatar-body-part",
                              onClick: ($event) => handlePartSelection("right_arm"),
                              id: "right_arm",
                              style: {
                                backgroundColor: "#" + unref(userAvatar).color_right_arm,
                                padding: "50px",
                                paddingRight: "0px"
                              }
                            }, null, 12, ["onClick"])
                          ]),
                          createVNode("div", { class: "display: flex; margin-bottom: 5px" }, [
                            createVNode("button", {
                              class: "avatar-body-part",
                              onClick: ($event) => handlePartSelection("left_leg"),
                              name: "left_leg",
                              style: {
                                backgroundColor: "#" + unref(userAvatar).color_left_leg,
                                padding: "50px",
                                paddingRight: "0px",
                                paddingLeft: "47px"
                              }
                            }, null, 12, ["onClick"]),
                            createVNode("button", {
                              class: "avatar-body-part",
                              onClick: ($event) => handlePartSelection("right_leg"),
                              name: "right_leg",
                              style: {
                                backgroundColor: "#" + unref(userAvatar).color_right_leg,
                                padding: "50px",
                                paddingRight: "0px",
                                borderBottom: "15px",
                                paddingLeft: "47px"
                              }
                            }, null, 12, ["onClick"])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "text-center cell medium-8" }, [
                      createVNode("div", { class: "flex-container text-start flex-row flex-nowrap overflow-x-scroll px-3 px-lg-0 mb-2 mb-lg-0" }, [
                        createVNode("div", { class: "grid-x grid-margin-x grid-padding-y" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(wearingItems.value, (item, index) => {
                            return openBlock(), createBlock("div", {
                              class: "cell large-3 medium-3 small-6",
                              key: index
                            }, [
                              createVNode("div", {
                                class: "d-block",
                                onClick: ($event) => SortItemByType(item.id, item.item_type, "remove")
                              }, [
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
                                    onError: ($event) => _ctx.onImgErrorSmall(item.thumbnail)
                                  }, null, 40, ["src", "id", "onError"])
                                ]),
                                createVNode(_component_Link, {
                                  as: "p",
                                  style: { "cursor": "pointer" },
                                  href: unref(route)(`store.item`, { id: item.id }),
                                  class: "text-body text-center fw-semibold text-truncate"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ], 8, ["onClick"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      !wearingItems.value.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "gap-3 text-start flex-container flex-dir-column"
                      }, [
                        createVNode("div", { class: "text-md text-muted fw-semibold" }, " You are not wearing any items. ")
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "mb-3 card-body cell medium-12" }, [
                createVNode("div", { class: "mb-2 align-middle grid-x" }, [
                  createVNode("div", { class: "cell large-9" }, [
                    createVNode("div", { class: "mb-2 text-xl fw-semibold" }, "Inventory")
                  ]),
                  createVNode("div", { class: "cell large-3" }, [
                    createVNode("div", { class: "gap-2 align-middle flex-container-lg" }, [
                      createVNode("select", {
                        onChange: ($event) => getItemsbyCategory($event.target.value),
                        class: "mb-2 form form-xs form-select form-has-section-color"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(usePage)().props.categories, (category) => {
                          return openBlock(), createBlock("option", {
                            key: category.internal,
                            value: category.internal,
                            active: currentcat.value === category.internal
                          }, toDisplayString(category.name), 9, ["value", "active"]);
                        }), 128))
                      ], 40, ["onChange"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "section" }, [
                  createVNode("div", { class: "gap-3 text-center flex-container flex-dir-column" }, [
                    createVNode("div", { class: "grid-x grid-margin-x" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(CategoryItems.value.data, (item) => {
                        return openBlock(), createBlock("div", {
                          class: "cell large-2 medium-3 small-3",
                          onClick: ($event) => SortItemByType(item.id, item.type, "wear")
                        }, [
                          createVNode("div", { class: "d-block" }, [
                            createVNode("div", { class: "p-2 mb-1 card card-inner position-relative" }, [
                              createVNode("img", {
                                src: item.thumbnail
                              }, null, 8, ["src"])
                            ]),
                            createVNode(_component_Link, {
                              as: "p",
                              style: { "cursor": "pointer" },
                              href: unref(route)(`store.item`, { id: item.id }),
                              class: "text-body fw-semibold text-truncate"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ])
                        ], 8, ["onClick"]);
                      }), 256))
                    ])
                  ]),
                  CategoryItems.value.data ? (openBlock(), createBlock(_component_Pagination, {
                    key: 0,
                    pagedata: CategoryItems.value
                  }, null, 8, ["pagedata"])) : !CategoryItems.value.data || !CategoryItems.value.length ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "gap-3 text-center flex-container flex-dir-column"
                  }, [
                    createVNode("i", { class: "text-5xl fad fa-crate-apple text-muted" }),
                    createVNode("div", { style: { "line-height": "16px" } }, [
                      createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, "No Items"),
                      createVNode("div", { class: "text-xs text-muted fw-semibold" }, " You have no " + toDisplayString(currentcat.value) + toDisplayString(currentcat.value !== "pants" ? "s" : null) + ". ", 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Customize/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2dd35863"]]);
export {
  Index as default
};
