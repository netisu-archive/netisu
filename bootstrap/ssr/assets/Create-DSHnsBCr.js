import { defineComponent, ref, unref, withCtx, createVNode, withModifiers, withDirectives, vModelSelect, openBlock, createBlock, toDisplayString, createCommentVNode, vModelText, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import axios from "axios";
import { route } from "momentum-trail";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./AdminNavbar-DM40yGYC.js";
import { _ as _sfc_main$1 } from "../ssr.js";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "portal-vue";
import "vue-tippy";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const Uploading = ref(false);
    const form = useForm({
      type: "",
      name: "",
      description: "",
      price_coins: "",
      price_bucks: "",
      image: null,
      modal: null
    });
    const submit = () => {
      axios.get(`/sanctum/csrf-cookie`).then(() => {
        form.post(route(`admin.items.create.validate`), {
          onFinish: () => form.reset("description")
        });
      });
    };
    const AttemptUpload = () => {
      Uploading.value = true;
    };
    const handleImageUpload = (event) => {
      form.image = event.target.files[0];
    };
    const handleModalUpload = (event) => {
      form.modal = event.target.files[0];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Create Item",
        description: "Create a brand new item.",
        url: unref(route)("admin.items.create.create-item")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="columns"${_scopeId}><div class="column is-3"${_scopeId}></div><div class="column"${_scopeId}><br${_scopeId}><p class="title is-4"${_scopeId}>Create Item</p><div class="card"${_scopeId}><div class="card-content"${_scopeId}><form${_scopeId}><label${_scopeId}><strong${_scopeId}>Item Type</strong></label><br${_scopeId}><div class="select title is-6 is-fullwidth"${_scopeId}><select${_scopeId}><option value="hat"${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "hat") : ssrLooseEqual(unref(form).type, "hat")) ? " selected" : ""}${_scopeId}>Hat</option><option value="addon"${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "addon") : ssrLooseEqual(unref(form).type, "addon")) ? " selected" : ""}${_scopeId}>Add-on</option><option value="tool"${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "tool") : ssrLooseEqual(unref(form).type, "tool")) ? " selected" : ""}${_scopeId}>Tool</option><option value="face"${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "face") : ssrLooseEqual(unref(form).type, "face")) ? " selected" : ""}${_scopeId}>Face</option><option value="head"${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "head") : ssrLooseEqual(unref(form).type, "head")) ? " selected" : ""}${_scopeId}>Head</option></select>`);
            if (unref(form).errors.type) {
              _push2(`<div class="subtitle text-danger"${_scopeId}>${ssrInterpolate(unref(form).errors.type)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><br${_scopeId}><label${_scopeId}><strong${_scopeId}>Item Name</strong></label><br${_scopeId}><div class="title is-6 is-fullwidth"${_scopeId}><input${ssrRenderAttr("value", unref(form).name)} class="input" placeholder="Item Name"${_scopeId}>`);
            if (unref(form).errors.name) {
              _push2(`<div class="subtitle text-danger"${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><p class="title is-6"${_scopeId}>Item Description</p><div class="field"${_scopeId}><p class="control"${_scopeId}><textarea class="textarea has-fixed-size" placeholder="Description"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
            if (unref(form).errors.description) {
              _push2(`<div class="subtitle text-danger"${_scopeId}>${ssrInterpolate(unref(form).errors.description)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</p></div><div class="columns"${_scopeId}><div class="column is-6"${_scopeId}><div class="title is-6 is-fullwidth"${_scopeId}> Cost Coins </div><input${ssrRenderAttr("value", unref(form).price_coins)} class="input" type="text" placeholder="Cost Coins"${_scopeId}>`);
            if (unref(form).errors.price_coins) {
              _push2(`<div class="subtitle text-danger"${_scopeId}>${ssrInterpolate(unref(form).errors.price_coins)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="column is-6 is-fullwidth"${_scopeId}><div class="title is-6 is-fullwidth"${_scopeId}> Cost Bucks </div><input${ssrRenderAttr("value", unref(form).price_bucks)} class="input" type="text" placeholder="Cost Bucks"${_scopeId}>`);
            if (unref(form).errors.price_bucks) {
              _push2(`<div class="subtitle text-danger"${_scopeId}>${ssrInterpolate(unref(form).errors.price_bucks)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="content"${_scopeId}><div class="columns"${_scopeId}><div class="${ssrRenderClass([{ "is-6": unref(form) && unref(form).type !== "face", "is-12": unref(form) && unref(form).type === "face" }, "column is-6"])}"${_scopeId}><div class="title is-6 is-fullwidth"${_scopeId}> Image </div><input class="input" type="file"${_scopeId}>`);
            if (unref(form).errors.image) {
              _push2(`<div class="has-text-weight-semibold is-size-6 has-text-danger"${_scopeId}>${ssrInterpolate(unref(form).errors.image)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(form) && unref(form).type !== "face") {
              _push2(`<div class="column is-6 is-fullwidth"${_scopeId}><div class="title is-6 is-fullwidth"${_scopeId}> Modal </div><input class="input" type="file"${_scopeId}>`);
              if (unref(form).errors.modal) {
                _push2(`<div class="subtitle text-danger"${_scopeId}>${ssrInterpolate(unref(form).errors.modal)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(form).image) {
              _push2(`<span${_scopeId}> File Output ${ssrInterpolate(unref(form).image.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(form).modal) {
              _push2(`<span${_scopeId}> File Output ${ssrInterpolate(unref(form).modal.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="${ssrRenderClass([{ "is-loading": Uploading.value }, "button has-text-white is-danger is-fullwidth"])}" type="submit"${_scopeId}><i class="fas fa-cloud"${_scopeId}> </i> Upload</button></div></form></div></div></div><div class="column is-3"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "columns" }, [
                createVNode("div", { class: "column is-3" }),
                createVNode("div", { class: "column" }, [
                  createVNode("br"),
                  createVNode("p", { class: "title is-4" }, "Create Item"),
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-content" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode("label", null, [
                          createVNode("strong", null, "Item Type")
                        ]),
                        createVNode("br"),
                        createVNode("div", { class: "select title is-6 is-fullwidth" }, [
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => unref(form).type = $event
                          }, [
                            createVNode("option", { value: "hat" }, "Hat"),
                            createVNode("option", { value: "addon" }, "Add-on"),
                            createVNode("option", { value: "tool" }, "Tool"),
                            createVNode("option", { value: "face" }, "Face"),
                            createVNode("option", { value: "head" }, "Head")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(form).type]
                          ]),
                          unref(form).errors.type ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "subtitle text-danger"
                          }, toDisplayString(unref(form).errors.type), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("br"),
                        createVNode("label", null, [
                          createVNode("strong", null, "Item Name")
                        ]),
                        createVNode("br"),
                        createVNode("div", { class: "title is-6 is-fullwidth" }, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            class: "input",
                            placeholder: "Item Name"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).name]
                          ]),
                          unref(form).errors.name ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "subtitle text-danger"
                          }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("p", { class: "title is-6" }, "Item Description"),
                        createVNode("div", { class: "field" }, [
                          createVNode("p", { class: "control" }, [
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(form).description = $event,
                              class: "textarea has-fixed-size",
                              placeholder: "Description"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).description]
                            ]),
                            unref(form).errors.description ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "subtitle text-danger"
                            }, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "columns" }, [
                          createVNode("div", { class: "column is-6" }, [
                            createVNode("div", { class: "title is-6 is-fullwidth" }, " Cost Coins "),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).price_coins = $event,
                              class: "input",
                              type: "text",
                              placeholder: "Cost Coins"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).price_coins]
                            ]),
                            unref(form).errors.price_coins ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "subtitle text-danger"
                            }, toDisplayString(unref(form).errors.price_coins), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "column is-6 is-fullwidth" }, [
                            createVNode("div", { class: "title is-6 is-fullwidth" }, " Cost Bucks "),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).price_bucks = $event,
                              class: "input",
                              type: "text",
                              placeholder: "Cost Bucks"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).price_bucks]
                            ]),
                            unref(form).errors.price_bucks ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "subtitle text-danger"
                            }, toDisplayString(unref(form).errors.price_bucks), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "content" }, [
                          createVNode("div", { class: "columns" }, [
                            createVNode("div", {
                              class: ["column is-6", { "is-6": unref(form) && unref(form).type !== "face", "is-12": unref(form) && unref(form).type === "face" }]
                            }, [
                              createVNode("div", { class: "title is-6 is-fullwidth" }, " Image "),
                              createVNode("input", {
                                class: "input",
                                onChange: ($event) => handleImageUpload($event),
                                type: "file"
                              }, null, 40, ["onChange"]),
                              unref(form).errors.image ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "has-text-weight-semibold is-size-6 has-text-danger"
                              }, toDisplayString(unref(form).errors.image), 1)) : createCommentVNode("", true)
                            ], 2),
                            unref(form) && unref(form).type !== "face" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "column is-6 is-fullwidth"
                            }, [
                              createVNode("div", { class: "title is-6 is-fullwidth" }, " Modal "),
                              createVNode("input", {
                                class: "input",
                                onChange: ($event) => handleModalUpload($event),
                                type: "file"
                              }, null, 40, ["onChange"]),
                              unref(form).errors.modal ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "subtitle text-danger"
                              }, toDisplayString(unref(form).errors.modal), 1)) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true)
                          ]),
                          unref(form).image ? (openBlock(), createBlock("span", { key: 0 }, " File Output " + toDisplayString(unref(form).image.name), 1)) : createCommentVNode("", true),
                          unref(form).modal ? (openBlock(), createBlock("span", { key: 1 }, " File Output " + toDisplayString(unref(form).modal.name), 1)) : createCommentVNode("", true),
                          createVNode("button", {
                            disabled: unref(form).processing,
                            onClick: AttemptUpload,
                            class: [{ "is-loading": Uploading.value }, "button has-text-white is-danger is-fullwidth"],
                            type: "submit"
                          }, [
                            createVNode("i", { class: "fas fa-cloud" }, " "),
                            createTextVNode(" Upload")
                          ], 10, ["disabled"])
                        ])
                      ], 32)
                    ])
                  ])
                ]),
                createVNode("div", { class: "column is-3" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Items/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
