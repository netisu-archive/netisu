import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import "momentum-trail";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card card-inner card-body" }, _attrs))}><form class="mt-6 space-y-6"><div class="mb-2"><div class="mb-2 text-xl fw-semibold"> Change Password </div><div class="mb-2"><div class="text-xs fw-bold text-muted text-uppercase"> Current Password </div><input id="current_password"${ssrRenderAttr("value", unref(form).current_password)} type="password" class="form form-has-section-color" autocomplete="current-password" placeholder="Current Password..."><div${ssrRenderAttr("message", unref(form).errors.current_password)} class="text-danger fw-semibold mt-2"></div></div><div class="mb-2"><div class="text-xs fw-bold text-muted text-uppercase"> New Password </div><input id="password"${ssrRenderAttr("value", unref(form).password)} type="password" autocomplete="new-password" class="form form-has-section-color" placeholder="Current Password..."><div${ssrRenderAttr("message", unref(form).errors.password)} class="text-danger fw-semibold mt-2"></div></div><div class="mb-2"><div class="text-xs fw-bold text-muted text-uppercase"> Confirm Password </div><input id="password_confirmation"${ssrRenderAttr("value", unref(form).password_confirmation)} type="password" autocomplete="new-password" class="form form-has-section-color" placeholder="Current Password..."><div${ssrRenderAttr("message", unref(form).errors.password_confirmation)} class="text-danger fw-semibold mt-2"></div></div></div><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="btn btn-success"> Change Password </button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Partials/UpdatePasswordForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
