import { defineComponent, resolveComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Navbar-30Vv0CN7.js";
import { S as Sidebar } from "./Sidebar-BQWvWV-r.js";
import { _ as _sfc_main$2 } from "./Footer-CxsG0LBb.js";
import { useForm } from "@inertiajs/vue3";
import { route } from "momentum-trail";
import axios from "axios";
import "v-lazy-image";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash/throttle.js";
import "../ssr.js";
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
  props: {
    topic: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      title: "",
      body: ""
    });
    const submit = () => {
      axios.get(`/sanctum/csrf-cookie`).then(() => {
        var _a;
        form.post(route(`forum.create.validate`, { id: (_a = props.topic) == null ? void 0 : _a["id"] }), {
          onFinish: () => form.reset("body")
        });
      });
    };
    const addText = (text) => {
      form.body += text;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 cell medium-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: unref(route)(`forum.page`, { id: __props.topic.id })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="fad fa-arrow-left"${_scopeId2}></i> Back to Discuss `);
                } else {
                  return [
                    createVNode("i", { class: "fad fa-arrow-left" }),
                    createTextVNode(" Back to Discuss ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="text-xl text-body fw-semibold bg-primary"${_scopeId}>Create a Post in ${ssrInterpolate(__props.topic.name)}</div><div class="text-xs text-muted bg-primary"${_scopeId}> Make sure you post in the appropriate sub-forum and that your post does not break any site rules. </div><div class="mx-1 my-2 divider"${_scopeId}></div><form${_scopeId}><label for="post-title" class="mb-2 text-xs fw-bold text-uppercase"${_scopeId}>Post Title</label><input id="post-title" class="mb-2 form-has-section-color form" type="text" name="title"${ssrRenderAttr("value", unref(form).title)} placeholder="Title" maxlength="64"${_scopeId}><label for="post-body" class="mb-2 text-xs fw-bold text-uppercase"${_scopeId}>Post Content</label><div class="position-relative"${_scopeId}><textarea id="post-body" name="body" class="mb-2 form form-has-button form-has-section-color pe-5" maxlength="4096" rows="5" placeholder="Post your thoughts here."${_scopeId}>${ssrInterpolate(unref(form).body)}</textarea><input type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="btn btn-success btn-sm has-ripple" value="Post" style="${ssrRenderStyle({ "position": "absolute", "bottom": "10px", "right": "10px" })}"${_scopeId}></div></form></div><div class="cell medium-4"${_scopeId}><div class="gap-2 mt-3 grid-x"${_scopeId}><button class="btn btn-info"${_scopeId}>Add Color</button><button class="btn btn-warning"${_scopeId}>Bold Text</button><button class="btn btn-success"${_scopeId}>Italic Text</button><button class="btn btn-success"${_scopeId}>Underline Text</button><button class="btn btn-info"${_scopeId}>Insert an Image</button><button class="btn btn-danger"${_scopeId}>Link To Website</button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 cell medium-8" }, [
                createVNode(_component_Link, {
                  href: unref(route)(`forum.page`, { id: __props.topic.id })
                }, {
                  default: withCtx(() => [
                    createVNode("i", { class: "fad fa-arrow-left" }),
                    createTextVNode(" Back to Discuss ")
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode("div", { class: "text-xl text-body fw-semibold bg-primary" }, "Create a Post in " + toDisplayString(__props.topic.name), 1),
                createVNode("div", { class: "text-xs text-muted bg-primary" }, " Make sure you post in the appropriate sub-forum and that your post does not break any site rules. "),
                createVNode("div", { class: "mx-1 my-2 divider" }),
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"])
                }, [
                  createVNode("label", {
                    for: "post-title",
                    class: "mb-2 text-xs fw-bold text-uppercase"
                  }, "Post Title"),
                  withDirectives(createVNode("input", {
                    id: "post-title",
                    class: "mb-2 form-has-section-color form",
                    type: "text",
                    name: "title",
                    "onUpdate:modelValue": ($event) => unref(form).title = $event,
                    placeholder: "Title",
                    maxlength: "64"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).title]
                  ]),
                  createVNode("label", {
                    for: "post-body",
                    class: "mb-2 text-xs fw-bold text-uppercase"
                  }, "Post Content"),
                  createVNode("div", { class: "position-relative" }, [
                    withDirectives(createVNode("textarea", {
                      id: "post-body",
                      name: "body",
                      "onUpdate:modelValue": ($event) => unref(form).body = $event,
                      class: "mb-2 form form-has-button form-has-section-color pe-5",
                      maxlength: "4096",
                      rows: "5",
                      placeholder: "Post your thoughts here."
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).body]
                    ]),
                    createVNode("input", {
                      type: "submit",
                      disabled: unref(form).processing,
                      class: "btn btn-success btn-sm has-ripple",
                      value: "Post",
                      style: { "position": "absolute", "bottom": "10px", "right": "10px" }
                    }, null, 8, ["disabled"])
                  ])
                ], 32)
              ]),
              createVNode("div", { class: "cell medium-4" }, [
                createVNode("div", { class: "gap-2 mt-3 grid-x" }, [
                  createVNode("button", {
                    class: "btn btn-info",
                    onClick: ($event) => addText("[color=#hexcodehere]Colored Text[/color]")
                  }, "Add Color", 8, ["onClick"]),
                  createVNode("button", {
                    class: "btn btn-warning",
                    onClick: ($event) => addText("[b]Bold Text[/b]")
                  }, "Bold Text", 8, ["onClick"]),
                  createVNode("button", {
                    class: "btn btn-success",
                    onClick: ($event) => addText("[i]Italic Text[/i]")
                  }, "Italic Text", 8, ["onClick"]),
                  createVNode("button", {
                    class: "btn btn-success",
                    onClick: ($event) => addText("[u]Underlined Text[/u]")
                  }, "Underline Text", 8, ["onClick"]),
                  createVNode("button", {
                    class: "btn btn-info",
                    onClick: ($event) => addText("[img]Image Link[/img]")
                  }, "Insert an Image", 8, ["onClick"]),
                  createVNode("button", {
                    class: "btn btn-danger",
                    onClick: ($event) => addText("[url=https://yourlinkhere]Link Text[/url]")
                  }, "Link To Website", 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Forum/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
