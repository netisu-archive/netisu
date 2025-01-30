import { defineComponent, ref, resolveComponent, resolveDirective, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, mergeProps, withDirectives, Fragment, renderList, withModifiers, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Navbar-DmBRqlRZ.js";
import { S as Sidebar } from "./Sidebar-fXSZR0n1.js";
import { _ as _sfc_main$4 } from "./Footer-CxsG0LBb.js";
import { a as _sfc_main$3 } from "../ssr.js";
import { route } from "momentum-trail";
import axios from "axios";
import { useForm, usePoll, usePage } from "@inertiajs/vue3";
import VLazyImage from "v-lazy-image";
import { _ as _sfc_main$2 } from "./SuperBanner-VbzURTni.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash/throttle.js";
import "vue-tippy";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Post",
  __ssrInlineRender: true,
  props: {
    topic: {},
    post: {},
    replies: {}
  },
  setup(__props) {
    const form = useForm({
      body: ""
    });
    const submit = () => {
      axios.get(`/sanctum/csrf-cookie`).then(() => {
        form.post(route(`forum.reply.validate`, { id: usePage().props.post.id }), {
          onFinish: () => form.reset("body")
        });
      });
    };
    const isHidden = ref(true);
    usePoll(1e4, { only: ["replies"] });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _directive_tippy = resolveDirective("tippy");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, {
        image: "/assets/img/site-banners/market-background.svg",
        superBanActive: true,
        OfficialImageBackground: true
      }, {
        SuperBanner: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              bannerAsset: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VLazyImage), {
                    style: ((_a = unref(usePage)().props.post.creator) == null ? void 0 : _a.settings.calling_card_enabled) ? {
                      margin: "0",
                      "background-image": "url(" + ((_b = unref(usePage)().props.post.creator) == null ? void 0 : _b.settings.calling_card_url) + ")",
                      "background-repeat": "no-repeat",
                      "background-size": "cover",
                      "box-shadow": "inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important"
                    } : null,
                    src: unref(usePage)().props.post.creator.headshot,
                    width: "100",
                    class: "space-image",
                    alt: "Headshot",
                    "src-placeholder": "assets/img/space-error.png"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VLazyImage), {
                      style: ((_c = unref(usePage)().props.post.creator) == null ? void 0 : _c.settings.calling_card_enabled) ? {
                        margin: "0",
                        "background-image": "url(" + ((_d = unref(usePage)().props.post.creator) == null ? void 0 : _d.settings.calling_card_url) + ")",
                        "background-repeat": "no-repeat",
                        "background-size": "cover",
                        "box-shadow": "inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important"
                      } : null,
                      src: unref(usePage)().props.post.creator.headshot,
                      width: "100",
                      class: "space-image",
                      alt: "Headshot",
                      "src-placeholder": "assets/img/space-error.png"
                    }, null, 8, ["style", "src"])
                  ];
                }
              }),
              bannerName: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-xl" style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId2}>${ssrInterpolate(unref(usePage)().props.post.title)}</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "text-xl",
                      style: { "line-height": "16px" }
                    }, toDisplayString(unref(usePage)().props.post.title), 1)
                  ];
                }
              }),
              bannerDescription: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-start"${_scopeId2}><div class="text-xl fw-semibold"${_scopeId2}>`);
                  if (unref(usePage)().props.post.pinned) {
                    _push3(`<span${_scopeId2}><i class="text-danger fas fa-thumbtack"${_scopeId2}></i></span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(` `);
                  if (unref(usePage)().props.post.locked) {
                    _push3(`<span${_scopeId2}><i class="text-warning fas fa-lock"${_scopeId2}></i></span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="text-xs text-base fw-semibold"${_scopeId2}>Posted by: ${ssrInterpolate(unref(usePage)().props.post.creator.username)} <span${_scopeId2}>•</span> ${ssrInterpolate(unref(usePage)().props.post.DateHum)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-start" }, [
                      createVNode("div", { class: "text-xl fw-semibold" }, [
                        unref(usePage)().props.post.pinned ? (openBlock(), createBlock("span", { key: 0 }, [
                          createVNode("i", { class: "text-danger fas fa-thumbtack" })
                        ])) : createCommentVNode("", true),
                        createTextVNode(),
                        unref(usePage)().props.post.locked ? (openBlock(), createBlock("span", { key: 1 }, [
                          createVNode("i", { class: "text-warning fas fa-lock" })
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "text-xs text-base fw-semibold" }, [
                        createTextVNode("Posted by: " + toDisplayString(unref(usePage)().props.post.creator.username) + " ", 1),
                        createVNode("span", null, "•"),
                        createTextVNode(" " + toDisplayString(unref(usePage)().props.post.DateHum), 1)
                      ])
                    ])
                  ];
                }
              }),
              bannerButtons: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Link, mergeProps({
                    class: "text-xl text-success squish",
                    href: "#",
                    content: "Edit Post",
                    as: "button",
                    style: { "outline": "none" }
                  }, ssrGetDirectiveProps(_ctx, _directive_tippy, { placement: "bottom" })), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<i class="fad fa-square-pen"${_scopeId3}></i>`);
                      } else {
                        return [
                          createVNode("i", { class: "fad fa-square-pen" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    withDirectives((openBlock(), createBlock(_component_Link, {
                      class: "text-xl text-success squish",
                      href: "#",
                      content: "Edit Post",
                      as: "button",
                      style: { "outline": "none" }
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fad fa-square-pen" })
                      ]),
                      _: 1
                    })), [
                      [_directive_tippy, { placement: "bottom" }]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, null, {
                bannerAsset: withCtx(() => {
                  var _a, _b;
                  return [
                    createVNode(unref(VLazyImage), {
                      style: ((_a = unref(usePage)().props.post.creator) == null ? void 0 : _a.settings.calling_card_enabled) ? {
                        margin: "0",
                        "background-image": "url(" + ((_b = unref(usePage)().props.post.creator) == null ? void 0 : _b.settings.calling_card_url) + ")",
                        "background-repeat": "no-repeat",
                        "background-size": "cover",
                        "box-shadow": "inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important"
                      } : null,
                      src: unref(usePage)().props.post.creator.headshot,
                      width: "100",
                      class: "space-image",
                      alt: "Headshot",
                      "src-placeholder": "assets/img/space-error.png"
                    }, null, 8, ["style", "src"])
                  ];
                }),
                bannerName: withCtx(() => [
                  createVNode("div", {
                    class: "text-xl",
                    style: { "line-height": "16px" }
                  }, toDisplayString(unref(usePage)().props.post.title), 1)
                ]),
                bannerDescription: withCtx(() => [
                  createVNode("div", { class: "text-start" }, [
                    createVNode("div", { class: "text-xl fw-semibold" }, [
                      unref(usePage)().props.post.pinned ? (openBlock(), createBlock("span", { key: 0 }, [
                        createVNode("i", { class: "text-danger fas fa-thumbtack" })
                      ])) : createCommentVNode("", true),
                      createTextVNode(),
                      unref(usePage)().props.post.locked ? (openBlock(), createBlock("span", { key: 1 }, [
                        createVNode("i", { class: "text-warning fas fa-lock" })
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "text-xs text-base fw-semibold" }, [
                      createTextVNode("Posted by: " + toDisplayString(unref(usePage)().props.post.creator.username) + " ", 1),
                      createVNode("span", null, "•"),
                      createTextVNode(" " + toDisplayString(unref(usePage)().props.post.DateHum), 1)
                    ])
                  ])
                ]),
                bannerButtons: withCtx(() => [
                  withDirectives((openBlock(), createBlock(_component_Link, {
                    class: "text-xl text-success squish",
                    href: "#",
                    content: "Edit Post",
                    as: "button",
                    style: { "outline": "none" }
                  }, {
                    default: withCtx(() => [
                      createVNode("i", { class: "fad fa-square-pen" })
                    ]),
                    _: 1
                  })), [
                    [_directive_tippy, { placement: "bottom" }]
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cell medium-12"${_scopeId}><div class="card-body"${_scopeId}><div class="grid-x"${_scopeId}><div class="cell medium-2"${_scopeId}><div class="gap-2 mb-3 text-center align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: unref(route)("user.profile", { username: unref(usePage)().props.post.creator.username })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VLazyImage), {
                    src: unref(usePage)().props.post.creator.thumbnail,
                    width: "136px",
                    class: "border img-fluid",
                    alt: unref(usePage)().props.post.creator.username,
                    "src-placeholder": "/assets/img/dummy.png"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VLazyImage), {
                      src: unref(usePage)().props.post.creator.thumbnail,
                      width: "136px",
                      class: "border img-fluid",
                      alt: unref(usePage)().props.post.creator.username,
                      "src-placeholder": "/assets/img/dummy.png"
                    }, null, 8, ["src", "alt"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="text-center" style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="fw-semibold"${_scopeId}>${ssrInterpolate(unref(usePage)().props.post.creator.display_name)}</div><div class="text-xs fw-semibold text-muted"${_scopeId}>${ssrInterpolate("@" + unref(usePage)().props.post.creator.username)}</div><div class="text-center"${_scopeId}>`);
            if (unref(usePage)().props.post.creator.staff) {
              _push2(`<div class="mt-1 mb-1 badge badge-danger fw-semibold w-100"${_scopeId}>${ssrInterpolate(unref(usePage)().props.post.creator.position)}</div>`);
            } else if (unref(usePage)().props.post.creator.settings.beta_tester) {
              _push2(`<div class="mt-1 mb-1 badge badge-success fw-semibold w-100"${_scopeId}> Beta Tester </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div><div class="cell medium-10"${_scopeId}><div class="gap-1 flex-container flex-dir-column"${_scopeId}><div style="${ssrRenderStyle({ "margin": "0px", "white-space": "pre-wrap" })}"${_scopeId}>${unref(usePage)().props.post.body ?? ""}</div></div></div></div>`);
            if (unref(usePage)().props.replies.data.length) {
              _push2(`<div${_scopeId}><div class="mx-1 my-3 divider"${_scopeId}></div><!--[-->`);
              ssrRenderList(unref(usePage)().props.replies.data, (reply) => {
                _push2(`<div class="grid-x"${_scopeId}><div class="cell medium-2"${_scopeId}><div class="gap-2 mb-3 text-center align-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Link, {
                  href: unref(route)("user.profile", { username: reply.creator.username })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(VLazyImage), {
                        src: reply.creator.thumbnail,
                        width: "136px",
                        class: "border img-fluid",
                        alt: reply.creator.username,
                        "src-placeholder": "/assets/img/dummy.png"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(VLazyImage), {
                          src: reply.creator.thumbnail,
                          width: "136px",
                          class: "border img-fluid",
                          alt: reply.creator.username,
                          "src-placeholder": "/assets/img/dummy.png"
                        }, null, 8, ["src", "alt"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="text-center" style="${ssrRenderStyle({ "line-height": "16px" })}"${_scopeId}><div class="fw-semibold"${_scopeId}>${ssrInterpolate(reply.creator.display_name)}</div><div class="text-xs fw-semibold text-muted"${_scopeId}>${ssrInterpolate("@" + reply.creator.username)}</div></div><div class="text-center"${_scopeId}>`);
                if (reply.creator.staff) {
                  _push2(`<div class="mt-1 mb-1 badge badge-danger fw-semibold w-100"${_scopeId}>${ssrInterpolate(reply.creator.position)}</div>`);
                } else if (reply.creator.settings.beta_tester) {
                  _push2(`<div class="mt-1 mb-1 badge badge-success fw-semibold w-100"${_scopeId}> Beta Tester </div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></div><div class="cell medium-10"${_scopeId}><div class="flex-container flex-dir-column"${_scopeId}><div class="text-sm text-muted fw-semibold"${_scopeId}><i class="fas fa-clock"${_scopeId}></i>  ${ssrInterpolate(reply.DateHum)}</div><div style="${ssrRenderStyle({ "white-space": "pre-wrap" })}"${_scopeId}>${reply.body ?? ""}</div></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(usePage)().props.replies.data.length) {
              _push2(ssrRenderComponent(_sfc_main$3, {
                pagedata: unref(usePage)().props.replies
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (!isHidden.value) {
              _push2(`<div class="cell medium-9"${_scopeId}><div class="card-body"${_scopeId}><div class="text-xl text-body fw-semibold bg-primary"${_scopeId}>Reply to ${ssrInterpolate(unref(usePage)().props.post.title)}</div><div class="mx-1 my-2 divider"${_scopeId}></div><form${_scopeId}><label for="post-body" class="mb-2 text-xs fw-bold text-uppercase"${_scopeId}>Reply Body</label><div class="position-relative"${_scopeId}><textarea id="post-body" name="body" class="mb-2 form form-has-button form-has-section-color pe-5" maxlength="4096" rows="5" placeholder="Post your thoughts here."${_scopeId}>${ssrInterpolate(unref(form).body)}</textarea><input type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="btn btn-success btn-sm has-ripple" value="Post" style="${ssrRenderStyle({ "position": "absolute", "bottom": "10px", "right": "10px" })}"${_scopeId}></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="section flex-container align-center"${_scopeId}>`);
            if (unref(usePage)().props.auth.user) {
              _push2(`<a class="btn btn-success"${_scopeId}><i class="fas fa-reply"${_scopeId}></i> Reply</a>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "cell medium-12" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("div", { class: "grid-x" }, [
                    createVNode("div", { class: "cell medium-2" }, [
                      createVNode("div", { class: "gap-2 mb-3 text-center align-center" }, [
                        createVNode(_component_Link, {
                          href: unref(route)("user.profile", { username: unref(usePage)().props.post.creator.username })
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(VLazyImage), {
                              src: unref(usePage)().props.post.creator.thumbnail,
                              width: "136px",
                              class: "border img-fluid",
                              alt: unref(usePage)().props.post.creator.username,
                              "src-placeholder": "/assets/img/dummy.png"
                            }, null, 8, ["src", "alt"])
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode("div", {
                          class: "text-center",
                          style: { "line-height": "16px" }
                        }, [
                          createVNode("div", { class: "fw-semibold" }, toDisplayString(unref(usePage)().props.post.creator.display_name), 1),
                          createVNode("div", { class: "text-xs fw-semibold text-muted" }, toDisplayString("@" + unref(usePage)().props.post.creator.username), 1),
                          createVNode("div", { class: "text-center" }, [
                            unref(usePage)().props.post.creator.staff ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-1 mb-1 badge badge-danger fw-semibold w-100"
                            }, toDisplayString(unref(usePage)().props.post.creator.position), 1)) : unref(usePage)().props.post.creator.settings.beta_tester ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "mt-1 mb-1 badge badge-success fw-semibold w-100"
                            }, " Beta Tester ")) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "cell medium-10" }, [
                      createVNode("div", { class: "gap-1 flex-container flex-dir-column" }, [
                        createVNode("div", {
                          innerHTML: unref(usePage)().props.post.body,
                          style: { "margin": "0px", "white-space": "pre-wrap" }
                        }, null, 8, ["innerHTML"])
                      ])
                    ])
                  ]),
                  unref(usePage)().props.replies.data.length ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("div", { class: "mx-1 my-3 divider" }),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(usePage)().props.replies.data, (reply) => {
                      return openBlock(), createBlock("div", { class: "grid-x" }, [
                        createVNode("div", { class: "cell medium-2" }, [
                          createVNode("div", { class: "gap-2 mb-3 text-center align-center" }, [
                            createVNode(_component_Link, {
                              href: unref(route)("user.profile", { username: reply.creator.username })
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(VLazyImage), {
                                  src: reply.creator.thumbnail,
                                  width: "136px",
                                  class: "border img-fluid",
                                  alt: reply.creator.username,
                                  "src-placeholder": "/assets/img/dummy.png"
                                }, null, 8, ["src", "alt"])
                              ]),
                              _: 2
                            }, 1032, ["href"]),
                            createVNode("div", {
                              class: "text-center",
                              style: { "line-height": "16px" }
                            }, [
                              createVNode("div", { class: "fw-semibold" }, toDisplayString(reply.creator.display_name), 1),
                              createVNode("div", { class: "text-xs fw-semibold text-muted" }, toDisplayString("@" + reply.creator.username), 1)
                            ]),
                            createVNode("div", { class: "text-center" }, [
                              reply.creator.staff ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mt-1 mb-1 badge badge-danger fw-semibold w-100"
                              }, toDisplayString(reply.creator.position), 1)) : reply.creator.settings.beta_tester ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "mt-1 mb-1 badge badge-success fw-semibold w-100"
                              }, " Beta Tester ")) : createCommentVNode("", true)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "cell medium-10" }, [
                          createVNode("div", { class: "flex-container flex-dir-column" }, [
                            createVNode("div", { class: "text-sm text-muted fw-semibold" }, [
                              createVNode("i", { class: "fas fa-clock" }),
                              createTextVNode("  " + toDisplayString(reply.DateHum), 1)
                            ]),
                            createVNode("div", {
                              innerHTML: reply.body,
                              style: { "white-space": "pre-wrap" }
                            }, null, 8, ["innerHTML"])
                          ])
                        ])
                      ]);
                    }), 256))
                  ])) : createCommentVNode("", true),
                  unref(usePage)().props.replies.data.length ? (openBlock(), createBlock(_sfc_main$3, {
                    key: 1,
                    pagedata: unref(usePage)().props.replies
                  }, null, 8, ["pagedata"])) : createCommentVNode("", true)
                ]),
                !isHidden.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "cell medium-9"
                }, [
                  createVNode("div", { class: "card-body" }, [
                    createVNode("div", { class: "text-xl text-body fw-semibold bg-primary" }, "Reply to " + toDisplayString(unref(usePage)().props.post.title), 1),
                    createVNode("div", { class: "mx-1 my-2 divider" }),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("label", {
                        for: "post-body",
                        class: "mb-2 text-xs fw-bold text-uppercase"
                      }, "Reply Body"),
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
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "section flex-container align-center" }, [
                  unref(usePage)().props.auth.user ? (openBlock(), createBlock("a", {
                    key: 0,
                    onClick: ($event) => isHidden.value = !isHidden.value,
                    class: "btn btn-success"
                  }, [
                    createVNode("i", { class: "fas fa-reply" }),
                    createTextVNode(" Reply")
                  ], 8, ["onClick"])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Forum/Post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
