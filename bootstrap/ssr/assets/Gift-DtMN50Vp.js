import { defineComponent, ref, withCtx, unref, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AdminNavbar-DM40yGYC.js";
import { _ as _sfc_main$1 } from "../ssr.js";
import axios from "axios";
import { useForm, usePage } from "@inertiajs/vue3";
import { route } from "momentum-trail";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "portal-vue";
import "vue-tippy";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Gift",
  __ssrInlineRender: true,
  props: {
    permission: {}
  },
  setup(__props) {
    const Gifting = ref(false);
    const form = useForm({
      itemID: ""
    });
    const submit = () => {
      axios.get(`/sanctum/csrf-cookie`).then(() => {
        form.post(route(`api.admin.gift-item`, { itemID: form.itemID, userID: usePage().props.userID }), {
          onFinish: () => form.reset("itemID")
        });
      });
    };
    const AttemptGift = () => {
      Gifting.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Gift Item",
        description: "Gift items to well deserving users."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="columns"${_scopeId}><div class="column is-3"${_scopeId}></div><div class="column"${_scopeId}><div class="card"${_scopeId}><div class="card-content"${_scopeId}><form${_scopeId}><div class="columns"${_scopeId}><div class="column is-12 is-fullwidth"${_scopeId}><div class="title is-6 is-fullwidth"${_scopeId}> Item ID </div><input${ssrRenderAttr("value", unref(form).itemID)} class="input" type="text" placeholder="Item ID"${_scopeId}>`);
            if (unref(form).errors.itemID) {
              _push2(`<div class="subtitle text-danger"${_scopeId}>${ssrInterpolate(unref(form).errors.itemID)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="${ssrRenderClass([{ "is-loading": Gifting.value }, "button has-text-white is-danger is-fullwidth"])}" type="submit"${_scopeId}><i class="fad fa-gift"${_scopeId}></i> Gift to User ${ssrInterpolate(unref(usePage)().props.userID)}</button></form></div></div></div><div class="column is-3"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "columns" }, [
                createVNode("div", { class: "column is-3" }),
                createVNode("div", { class: "column" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-content" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode("div", { class: "columns" }, [
                          createVNode("div", { class: "column is-12 is-fullwidth" }, [
                            createVNode("div", { class: "title is-6 is-fullwidth" }, " Item ID "),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).itemID = $event,
                              class: "input",
                              type: "text",
                              placeholder: "Item ID"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).itemID]
                            ]),
                            unref(form).errors.itemID ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "subtitle text-danger"
                            }, toDisplayString(unref(form).errors.itemID), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("button", {
                          disabled: unref(form).processing,
                          onClick: AttemptGift,
                          class: [{ "is-loading": Gifting.value }, "button has-text-white is-danger is-fullwidth"],
                          type: "submit"
                        }, [
                          createVNode("i", { class: "fad fa-gift" }),
                          createTextVNode(" Gift to User " + toDisplayString(unref(usePage)().props.userID), 1)
                        ], 10, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Users/Gift.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
