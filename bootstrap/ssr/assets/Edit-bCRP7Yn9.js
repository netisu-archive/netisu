import { defineComponent, ref, unref, withCtx, createVNode, toDisplayString, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, vModelCheckbox, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "../ssr.js";
import { _ as _sfc_main$2 } from "./Navbar-30Vv0CN7.js";
import { S as Sidebar } from "./Sidebar-BQWvWV-r.js";
import { _ as _sfc_main$3 } from "./Footer-CxsG0LBb.js";
import { usePage, useForm } from "@inertiajs/vue3";
import { route } from "momentum-trail";
import VLazyImage from "v-lazy-image";
import axios from "axios";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "portal-vue";
import "vue-tippy";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash/throttle.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Edit",
  __ssrInlineRender: true,
  setup(__props) {
    const Uploading = ref(false);
    const item = usePage().props.item;
    const form = useForm({
      name: "",
      description: "",
      cost_coins: "",
      cost_bucks: "",
      isOnsale: true
    });
    const submit = () => {
      axios.get(`/sanctum/csrf-cookie`).then(() => {
        form.post(route(`store.edit.validate`, { id: item.id }), {
          onFinish: () => form.reset("description")
        });
      });
    };
    const AttemptUpload = () => {
      Uploading.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Edit Item",
        description: "Edit" + unref(item).name + ".",
        url: unref(route)(`store.edit`, { id: unref(item).id })
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cell medium-4"${_scopeId}><div class="mb-2"${_scopeId}><div class="text-2xl fw-semibold"${_scopeId}>Item Thumbnail</div></div><div${_scopeId}></div><div class="card card-body"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VLazyImage), {
              src: unref(item).thumbnail
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="cell medium-5"${_scopeId}><div class="mb-2"${_scopeId}><div class="text-2xl fw-semibold"${_scopeId}>${ssrInterpolate("Edit " + unref(item).name)}</div></div><div${_scopeId}></div><div class="card card-body"${_scopeId}><form${_scopeId}><div class="mb-2"${_scopeId}><div class="${ssrRenderClass([{ "text-danger": unref(form).errors.name }, "text-xs fw-bold text-muted text-uppercase"])}"${_scopeId}> Item Name </div><input type="text"${ssrRenderAttr("value", unref(form).name)} class="form" placeholder="Item Name..."${_scopeId}>`);
            if (unref(form).errors.name) {
              _push2(`<div class="text-xs text-danger fw-semibold"${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mb-2"${_scopeId}><div class="${ssrRenderClass([{ "text-danger": unref(form).errors.description }, "text-xs fw-bold text-muted text-uppercase"])}"${_scopeId}> Description </div><textarea type="password" class="mb-2 form pe-5" rows="5" placeholder="Description...."${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
            if (unref(form).errors.description) {
              _push2(`<div class="text-xs text-danger fw-semibold"${_scopeId}>${ssrInterpolate(unref(form).errors.description)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="gap-3 mb-2 text-sm flex-container align-center"${_scopeId}><div class="w-100"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}>Price Coins</div><input type="text"${ssrRenderAttr("value", unref(form).cost_coins)} class="form" placeholder="1"${_scopeId}>`);
            if (unref(form).errors.cost_coins) {
              _push2(`<div class="text-xs text-danger fw-semibold"${_scopeId}>${ssrInterpolate(unref(form).errors.cost_coins)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="w-100"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}>Price Bucks</div><input type="text"${ssrRenderAttr("value", unref(form).cost_bucks)} class="form" placeholder="10"${_scopeId}>`);
            if (unref(form).errors.cost_bucks) {
              _push2(`<div class="text-xs text-danger fw-semibold"${_scopeId}>${ssrInterpolate(unref(form).errors.cost_bucks)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="form-check"${_scopeId}><input class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(unref(form).isOnsale) ? ssrLooseContain(unref(form).isOnsale, "") : unref(form).isOnsale) ? " checked" : ""} type="checkbox" value="" id="flexCheckChecked" checked${_scopeId}><label class="form-check-label" for="flexCheckChecked"${_scopeId}> Onsale </label></div><div class="mx-1 my-3 divider"${_scopeId}></div><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="${ssrRenderClass([{ "is-loading": Uploading.value }, "my-2 mt-2 btn btn-success btn-block"])}" value="Upload"${_scopeId}><i class="fad fa-pen me-1"${_scopeId}></i> edit </button></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "cell medium-4" }, [
                createVNode("div", { class: "mb-2" }, [
                  createVNode("div", { class: "text-2xl fw-semibold" }, "Item Thumbnail")
                ]),
                createVNode("div"),
                createVNode("div", { class: "card card-body" }, [
                  createVNode(unref(VLazyImage), {
                    src: unref(item).thumbnail
                  }, null, 8, ["src"])
                ])
              ]),
              createVNode("div", { class: "cell medium-5" }, [
                createVNode("div", { class: "mb-2" }, [
                  createVNode("div", { class: "text-2xl fw-semibold" }, toDisplayString("Edit " + unref(item).name), 1)
                ]),
                createVNode("div"),
                createVNode("div", { class: "card card-body" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("div", {
                        class: [{ "text-danger": unref(form).errors.name }, "text-xs fw-bold text-muted text-uppercase"]
                      }, " Item Name ", 2),
                      withDirectives(createVNode("input", {
                        type: "text",
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        class: "form",
                        placeholder: "Item Name..."
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).name]
                      ]),
                      unref(form).errors.name ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-xs text-danger fw-semibold"
                      }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("div", {
                        class: [{ "text-danger": unref(form).errors.description }, "text-xs fw-bold text-muted text-uppercase"]
                      }, " Description ", 2),
                      withDirectives(createVNode("textarea", {
                        type: "password",
                        "onUpdate:modelValue": ($event) => unref(form).description = $event,
                        class: "mb-2 form pe-5",
                        rows: "5",
                        placeholder: "Description...."
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).description]
                      ]),
                      unref(form).errors.description ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-xs text-danger fw-semibold"
                      }, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "gap-3 mb-2 text-sm flex-container align-center" }, [
                      createVNode("div", { class: "w-100" }, [
                        createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, "Price Coins"),
                        withDirectives(createVNode("input", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(form).cost_coins = $event,
                          class: "form",
                          placeholder: "1"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).cost_coins]
                        ]),
                        unref(form).errors.cost_coins ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs text-danger fw-semibold"
                        }, toDisplayString(unref(form).errors.cost_coins), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "w-100" }, [
                        createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, "Price Bucks"),
                        withDirectives(createVNode("input", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(form).cost_bucks = $event,
                          class: "form",
                          placeholder: "10"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).cost_bucks]
                        ]),
                        unref(form).errors.cost_bucks ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs text-danger fw-semibold"
                        }, toDisplayString(unref(form).errors.cost_bucks), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "form-check" }, [
                      withDirectives(createVNode("input", {
                        class: "form-check-input",
                        "onUpdate:modelValue": ($event) => unref(form).isOnsale = $event,
                        type: "checkbox",
                        value: "",
                        id: "flexCheckChecked",
                        checked: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelCheckbox, unref(form).isOnsale]
                      ]),
                      createVNode("label", {
                        class: "form-check-label",
                        for: "flexCheckChecked"
                      }, " Onsale ")
                    ]),
                    createVNode("div", { class: "mx-1 my-3 divider" }),
                    createVNode("button", {
                      disabled: unref(form).processing,
                      onClick: AttemptUpload,
                      class: [{ "is-loading": Uploading.value }, "my-2 mt-2 btn btn-success btn-block"],
                      value: "Upload"
                    }, [
                      createVNode("i", { class: "fad fa-pen me-1" }),
                      createTextVNode(" edit ")
                    ], 10, ["disabled"])
                  ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Store/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
