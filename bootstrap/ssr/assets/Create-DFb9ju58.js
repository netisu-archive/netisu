import { defineComponent, ref, unref, withCtx, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "../ssr.js";
import { _ as _sfc_main$2 } from "./Navbar-30Vv0CN7.js";
import { S as Sidebar } from "./Sidebar-BQWvWV-r.js";
import { _ as _sfc_main$3 } from "./Footer-CxsG0LBb.js";
import { useForm } from "@inertiajs/vue3";
import { route } from "momentum-trail";
import axios from "axios";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "portal-vue";
import "vue-tippy";
import "v-lazy-image";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash/throttle.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const Uploading = ref(false);
    const form = useForm({
      name: "",
      description: "",
      image: ""
    });
    const submit = () => {
      axios.get(`/sanctum/csrf-cookie`).then(() => {
        form.post(route(`spaces.create.validate`), {
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
        pageTitle: "Create",
        description: "Create A Space Here.",
        url: unref(route)(`spaces.create.page`)
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cell medium-5"${_scopeId}><div class="mb-2"${_scopeId}><div class="text-2xl fw-semibold"${_scopeId}>Create Space</div></div><div${_scopeId}></div><div class="card card-body"${_scopeId}><form${_scopeId}><div class="mb-2"${_scopeId}><div class="${ssrRenderClass([{ "text-danger": unref(form).errors.name }, "text-xs fw-bold text-muted text-uppercase"])}"${_scopeId}> Space Name </div><input type="text"${ssrRenderAttr("value", unref(form).name)} class="form" placeholder="Space Name..."${_scopeId}>`);
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
            _push2(`</div><div class="gap-3 text-sm flex-container align-center"${_scopeId}><div class="w-100"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}>Icon</div><input class="form text-body" type="file"${_scopeId}>`);
            if (unref(form).errors.image) {
              _push2(`<div class="text-xs text-danger fw-semibold"${_scopeId}>${ssrInterpolate(unref(form).errors.image)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="mx-1 my-3 divider"${_scopeId}></div><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="${ssrRenderClass([{ "is-loading": Uploading.value }, "my-2 mt-2 btn btn-success btn-block"])}" value="Upload"${_scopeId}><i class="fab fa-cloud-arrow me-1"${_scopeId}></i> Upload </button></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "cell medium-5" }, [
                createVNode("div", { class: "mb-2" }, [
                  createVNode("div", { class: "text-2xl fw-semibold" }, "Create Space")
                ]),
                createVNode("div"),
                createVNode("div", { class: "card card-body" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("div", {
                        class: [{ "text-danger": unref(form).errors.name }, "text-xs fw-bold text-muted text-uppercase"]
                      }, " Space Name ", 2),
                      withDirectives(createVNode("input", {
                        type: "text",
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        class: "form",
                        placeholder: "Space Name..."
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
                    createVNode("div", { class: "gap-3 text-sm flex-container align-center" }, [
                      createVNode("div", { class: "w-100" }, [
                        createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, "Icon"),
                        createVNode("input", {
                          class: "form text-body",
                          onInput: ($event) => unref(form).image = $event.target.files[0],
                          type: "file"
                        }, null, 40, ["onInput"]),
                        unref(form).errors.image ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs text-danger fw-semibold"
                        }, toDisplayString(unref(form).errors.image), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "mx-1 my-3 divider" }),
                    createVNode("button", {
                      disabled: unref(form).processing,
                      onClick: AttemptUpload,
                      class: [{ "is-loading": Uploading.value }, "my-2 mt-2 btn btn-success btn-block"],
                      value: "Upload"
                    }, [
                      createVNode("i", { class: "fab fa-cloud-arrow me-1" }),
                      createTextVNode(" Upload ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Spaces/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
