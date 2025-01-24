import { defineComponent, reactive, ref, computed, watch, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers, withDirectives, vModelText, Fragment, renderList, vModelSelect, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from "vue/server-renderer";
import { useForm, usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./Navbar-30Vv0CN7.js";
import { S as Sidebar } from "./Sidebar-BQWvWV-r.js";
import { route } from "momentum-trail";
import { _ as _sfc_main$1 } from "../ssr.js";
import { _ as _sfc_main$3 } from "./Footer-CxsG0LBb.js";
import axios from "axios";
import debounce from "lodash/debounce.js";
import VLazyImage from "v-lazy-image";
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
  data() {
    return {
      activeTheme: ""
    };
  },
  mounted() {
    const theme = localStorage.getItem("theme") || "light";
    this.activeTheme = theme;
    this.applyTheme(theme);
    const storedTheme = localStorage.getItem("theme");
    const themeBtn = document.getElementById(theme + "-theme-btn");
    if (themeBtn) {
      if (themeBtn.classList.contains("active")) {
        themeBtn.classList.remove("active");
      } else if (storedTheme === theme || this.activeTheme === theme) {
        themeBtn.classList.add("active");
      }
    }
  },
  methods: {
    capitalized(name) {
      const capitalizedFirst = name[0].toUpperCase();
      const rest = name.slice(1);
      return capitalizedFirst + rest;
    },
    applyTheme(theme) {
      var lowercaseTheme = theme.toLowerCase();
      let style = document.getElementById("theme-style");
      const themeBtn = document.getElementById(
        lowercaseTheme + "-theme-btn"
      );
      if (!style) {
        style = document.createElement("link");
        style.id = "theme-style";
        style.rel = "stylesheet";
        document.head.appendChild(style);
      }
      style.href = `/assets/css/themes/variables-${lowercaseTheme}.css`;
      localStorage.setItem("theme", theme);
      const storedTheme = localStorage.getItem("theme");
      if (themeBtn) {
        if (themeBtn.classList.contains("active")) {
          themeBtn.classList.remove("active");
        } else if (storedTheme === theme || this.activeTheme === theme) {
          themeBtn.classList.add("active");
        }
      }
    },
    setTheme(theme) {
      const storedTheme = localStorage.getItem("theme");
      const newtheme = theme;
      if (storedTheme != newtheme) {
        document.getElementById(storedTheme + "-theme-btn").classList.remove("active");
      }
      this.applyTheme(theme);
      if (storedTheme === newtheme) {
        document.getElementById(theme + "-theme-btn").classList.add("active");
      }
    }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    themes: {},
    items: {},
    errors: {}
  },
  setup(__props) {
    const form = useForm({
      username: "",
      displayname: "",
      birthdate: reactive({
        month: "",
        day: "",
        year: ""
      }),
      starter_item: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const currentTheme = localStorage.getItem("theme");
    let currentStep = ref(1);
    const isStepOk = ref(false);
    const totalSteps = 6;
    const site = computed(() => usePage().props.site);
    const SetValue = () => {
      isStepOk.value = true;
    };
    const nextStep = () => {
      if (currentStep.value < totalSteps) {
        currentStep.value++;
        isStepOk.value = false;
      }
    };
    const checkStepOne = debounce(async (email) => {
      try {
        await axios.get(`/sanctum/csrf-cookie`);
        const response = await axios.get(route(`api.user.email-validate`, { email }));
        if (response.data.error === true && response.data.message) {
          formError.value = response.data.message;
          isStepOk.value = false;
        } else {
          formError.value = "";
          isStepOk.value = true;
        }
      } catch (error) {
        console.error("Error checking email :", error);
      }
    }, 1e3);
    const checkStepTwo = debounce(async (name) => {
      try {
        await axios.get(`/sanctum/csrf-cookie`);
        const response = await axios.get(route(`api.user.name-availability`, { name }));
        if (response.data.error === true && response.data.message) {
          formError.value = response.data.message;
          isStepOk.value = false;
        } else {
          formError.value = "";
          isStepOk.value = true;
        }
      } catch (error) {
        console.error("Error checking name availability:", error);
      }
    }, 1e3);
    const checkStepThree = debounce(async (password, confirm) => {
      try {
        await axios.get(`/sanctum/csrf-cookie`);
        const response = await axios.get(route(`api.user.password-validate`, { password, password_confirmation: confirm }));
        if (response.data.error === true && response.data.message) {
          formError.value = response.data.message ?? response.data.errors.password;
          isStepOk.value = false;
        } else {
          formError.value = "";
          isStepOk.value = true;
        }
      } catch (error) {
        console.error("Error checking password:", error);
      }
    }, 1e3);
    const isPreviousButtonDisabled = computed(() => {
      return currentStep.value === 1;
    });
    const previousStep = () => {
      currentStep.value--;
      isStepOk.value = true;
    };
    const getProgressWidth = () => {
      const progress = currentStep.value / totalSteps * 100;
      return `${progress}%`;
    };
    const getStepText = () => {
      if (currentStep.value === 1) {
        return `My Name is ${usePage().props.tester.username} and I will be guiding you through the sign-up process!`;
      } else if (currentStep.value === 2) {
        return "Great! Now, what should we call you?";
      } else if (currentStep.value === 3) {
        return "Choose your password.";
      } else if (currentStep.value === 4) {
        return "When were you born?";
      } else if (currentStep.value === 5) {
        return "Choose a website theme.";
      } else if (currentStep.value === 6) {
        return 'By clicking the "Sign Me Up!" button below, you agree to our Terms of Service and Privacy Policy.';
      }
    };
    const getStepDesc = () => {
      if (currentStep.value === 1) {
        return "For starters, what is your email? We need this so we can contact you!";
      } else if (currentStep.value === 2) {
        return `Your username is how ${usePage().props.site.name} players will be able to identify you.`;
      } else if (currentStep.value === 3) {
        return "Your password is the way you will be able to access your account and change your settings, please use a password you do not use anywhere else.";
      } else if (currentStep.value === 5) {
        return "Choose a theme that is comfortable for your viewing experience, this can be changed anytime later from your account settings.";
      } else if (currentStep.value === 6) {
        return "You can review our Terms of Service and/or Privacy Policy below.";
      }
    };
    const getStepSdesc = () => {
      if (currentStep.value === 3) {
        return "Do not share your password with anybody.";
      } else if (currentStep.value === 4) {
        return "We need this piece of information to ensure your privacy and safety on our platform.";
      }
    };
    const formError = ref("");
    const submit = () => {
      axios.get(`/sanctum/csrf-cookie`).then(() => {
        form.post(route(`auth.register.validate`), {
          onFinish: () => form.reset("password")
        });
      });
    };
    var days = reactive(
      [...Array(31).keys()].map((day) => ({
        value: day + 1,
        label: (day + 1).toString()
      }))
    );
    const months = [
      { value: 1, label: "January" },
      { value: 2, label: "February" },
      { value: 3, label: "March" },
      { value: 4, label: "April" },
      { value: 5, label: "May" },
      { value: 6, label: "June" },
      { value: 7, label: "July" },
      { value: 8, label: "August" },
      { value: 9, label: "September" },
      { value: 10, label: "October" },
      { value: 11, label: "November" },
      { value: 12, label: "December" }
    ];
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const years = [...Array(currentYear - 1919 + 1).keys()].map((year) => ({
      value: year + 1920,
      label: (year + 1920).toString()
    })).reverse();
    function updateDays() {
      const selectedMonthNumber = Number(form.birthdate.month);
      const daysLimit = selectedMonthNumber === 2 ? 28 : 30;
      days = [...Array(daysLimit).keys()].map((day) => ({
        value: day + 1,
        label: (day + 1).toString()
      }));
    }
    updateDays();
    watch(() => form.birthdate.month, updateDays);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Register",
        description: "Register to " + unref(usePage)().props.site.name,
        url: unref(route)("auth.register.page")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cell large-8 medium-10"${_scopeId}>`);
            if (formError.value) {
              _push2(`<div class="alert alert-danger mb-2"${_scopeId}>${ssrInterpolate(formError.value)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="card"${_scopeId}><div class="card-body"${_scopeId}><div class="progress-bar"${_scopeId}><span class="progress" style="${ssrRenderStyle({ width: getProgressWidth() })}"${_scopeId}></span></div>`);
            if (unref(form).errors.length) {
              _push2(`<div class="alert alert-danger mt-2"${_scopeId}>${ssrInterpolate(unref(form).errors)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mx-1 my-3 divider"${_scopeId}></div><div class="grid-x grid-margin-x grid-padding-y"${_scopeId}><div class="text-center cell medium-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VLazyImage), {
              src: unref(usePage)().props.tester.avatar,
              class: "show-for-medium",
              alt: "earl"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VLazyImage), {
              src: unref(usePage)().props.tester.avatar,
              alt: "earl",
              style: { "max-width": "180px" },
              class: "show-for-small-only"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="cell medium-9"${_scopeId}><div class="text-2xl fw-semibold"${_scopeId}> Welcome to ${ssrInterpolate(site.value.name)}! </div><div class="gap-1 mb-2 flex-container flex-dir-column"${_scopeId}><div class="text-sm text-muted fw-semibold"${_scopeId}>${ssrInterpolate(getStepText())}</div><div class="text-sm text-muted fw-semibold"${_scopeId}>${ssrInterpolate(getStepDesc())}</div><div class="text-sm text-muted fw-semibold"${_scopeId}>${ssrInterpolate(getStepSdesc())}</div></div><form${_scopeId}>`);
            if (unref(currentStep) === 1) {
              _push2(`<div${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Email Address </div><input${ssrRenderAttr("value", unref(form).email)} type="text" class="form" placeholder="Email Address..."${_scopeId}></div>`);
            } else if (unref(currentStep) === 2) {
              _push2(`<div${_scopeId}><div class="mb-2"${_scopeId}><div class="${ssrRenderClass([{
                "text-danger": unref(form).errors.username
              }, "text-xs fw-bold text-danger text-uppercase"])}"${_scopeId}> Username </div><input type="text"${ssrRenderAttr("value", unref(form).username)} name="username" class="form" placeholder="@Username..."${_scopeId}>`);
              if (unref(form).errors.username) {
                _push2(`<div class="text-xs text-danger fw-semibold"${_scopeId}>${ssrInterpolate(unref(form).errors.username)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mt-2"${_scopeId}><div class="${ssrRenderClass([{
                "text-danger": unref(form).errors.displayname
              }, "text-xs fw-bold text-muted text-uppercase"])}"${_scopeId}> Display Name </div><input type="text"${ssrRenderAttr("value", unref(form).displayname)} name="displayname" class="form" placeholder="Display Name..."${_scopeId}>`);
              if (unref(form).errors.displayname) {
                _push2(`<div class="text-xs text-danger fw-semibold"${_scopeId}>${ssrInterpolate(unref(form).errors.displayname)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else if (unref(currentStep) === 3) {
              _push2(`<div${_scopeId}><div class="mb-2"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Password </div><input class="form" placeholder="Password..."${ssrRenderAttr("value", unref(form).password)} type="password" name="password"${_scopeId}></div><div class="mt-2"${_scopeId}><div class="text-xs fw-bold text-muted text-uppercase"${_scopeId}> Confirm Password </div><input class="form" placeholder="Confirm Password..."${ssrRenderAttr("value", unref(form).password_confirmation)} type="password" name="password_confirmation"${_scopeId}></div></div>`);
            } else if (unref(currentStep) === 4) {
              _push2(`<div${_scopeId}><div class="grid-x grid-margin-x grid-padding-y"${_scopeId}><div class="cell medium-4"${_scopeId}><div class="mb-1 text-xs fw-bold text-muted text-uppercase"${_scopeId}> Month </div><select class="form form-select" name="birth_month"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).birthdate.month) ? ssrLooseContain(unref(form).birthdate.month, "") : ssrLooseEqual(unref(form).birthdate.month, "")) ? " selected" : ""}${_scopeId}> Select Month </option><!--[-->`);
              ssrRenderList(months, (month) => {
                _push2(`<option${ssrRenderAttr("value", month.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).birthdate.month) ? ssrLooseContain(unref(form).birthdate.month, month.value) : ssrLooseEqual(unref(form).birthdate.month, month.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(month.label)}</option>`);
              });
              _push2(`<!--]--></select></div><div class="cell medium-4"${_scopeId}><div class="mb-1 text-xs fw-bold text-muted text-uppercase"${_scopeId}> Day </div><select class="form form-select" name="birth_day"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).birthdate.day) ? ssrLooseContain(unref(form).birthdate.day, "") : ssrLooseEqual(unref(form).birthdate.day, "")) ? " selected" : ""}${_scopeId}> Select Day </option><!--[-->`);
              ssrRenderList(unref(days), (day) => {
                _push2(`<option${ssrRenderAttr("value", day.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).birthdate.day) ? ssrLooseContain(unref(form).birthdate.day, day.value) : ssrLooseEqual(unref(form).birthdate.day, day.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(day.label)}</option>`);
              });
              _push2(`<!--]--></select></div><div class="cell medium-4"${_scopeId}><div class="mb-1 text-xs fw-bold text-muted text-uppercase"${_scopeId}> Year </div><select class="form form-select" name="birth_year"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).birthdate.year) ? ssrLooseContain(unref(form).birthdate.year, "") : ssrLooseEqual(unref(form).birthdate.year, "")) ? " selected" : ""}${_scopeId}> Select Year </option><!--[-->`);
              ssrRenderList(unref(years), (year) => {
                _push2(`<option${ssrRenderAttr("value", year.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).birthdate.year) ? ssrLooseContain(unref(form).birthdate.year, year.value) : ssrLooseEqual(unref(form).birthdate.year, year.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(year.label)}</option>`);
              });
              _push2(`<!--]--></select></div><button type="button" class="btn btn-xs w-100 btn-success"${_scopeId}> Set </button></div></div>`);
            } else if (unref(currentStep) === 5) {
              _push2(`<div${_scopeId}><div class="grid-x grid-margin-x grid-padding-y"${_scopeId}><!--[-->`);
              ssrRenderList(_ctx.themes, (theme, index) => {
                _push2(`<div class="cell large-6"${_scopeId}><div class="${ssrRenderClass([{
                  active: unref(currentTheme) === theme.lowercase
                }, "mb-2 theme-selection squish card card-body card-inner mb-lg-0"])}"${ssrRenderAttr(
                  "id",
                  theme.lowercase + "-theme-btn"
                )}${_scopeId}><div class="gap-4 align-middle flex-container"${_scopeId}><div class="selection-circle flex-child-grow show-for-large"${_scopeId}></div><div class="gap-1 align-middle flex-container flex-dir-column" style="${ssrRenderStyle({ "min-width": "0" })}"${_scopeId}><div class="${ssrRenderClass(
                  "theme-circle " + theme.lowercase
                )}"${_scopeId}></div><div class="text-lg fw-semibold text-truncate"${_scopeId}>${ssrInterpolate(theme.name)}</div><div class="selection-circle flex-child-grow show-for-small hide-for-large"${_scopeId}></div></div></div></div></div>`);
              });
              _push2(`<!--]--><button type="button" class="btn btn-xs w-100 btn-success"${_scopeId}> Set </button></div></div>`);
            } else if (unref(currentStep) === 6) {
              _push2(`<div${_scopeId}><div class="gap-2 flex-container-lg"${_scopeId}><button class="mb-2 btn btn-gray btn-block mb-lg-0"${_scopeId}><i class="fas fa-scroll text-muted me-1"${_scopeId}></i> Terms of Service </button><button class="mb-2 btn btn-gray btn-block mb-lg-0"${_scopeId}><i class="fas fa-user-secret text-muted me-1"${_scopeId}></i> Privacy Policy </button></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(currentStep) === 1) {
              _push2(`<div${_scopeId}><div class="gap-1 mt-2 mb-2 flex-container flex-dir-column"${_scopeId}><div class="text-xs text-muted fw-semibold"${_scopeId}> You can skip this step by signing up with Google or Discord! </div></div><div class="gap-2 mb-3 flex-container-lg"${_scopeId}><button class="mb-2 btn btn-gray btn-block mb-lg-0"${_scopeId}><img src="/assets/img/google.png" width="20" alt="google_logo" class="me-1" style="${ssrRenderStyle({ "margin-top": "-3px", "filter": "drop-shadow(\n                                                        0 1px 1px\n                                                            rgb(0, 0, 0, 0.2)\n                                                    )" })}"${_scopeId}> Sign Up with Google </button><button class="btn btn-discord btn-block"${_scopeId}><i class="fab fa-discord me-1"${_scopeId}></i> Sign Up with Discord </button></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mx-1 my-3 divider"${_scopeId}></div><div class="flex-container align-justify"${_scopeId}>`);
            if (unref(currentStep) > 1) {
              _push2(`<button type="button" class="${ssrRenderClass([{
                disabled: isPreviousButtonDisabled.value
              }, "px-4 btn btn-danger"])}"${_scopeId}> Previous </button>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(currentStep) !== totalSteps) {
              _push2(`<button type="button" class="px-4 btn btn-success"${ssrIncludeBooleanAttr(!isStepOk.value) ? " disabled" : ""}${_scopeId}> Next </button>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(currentStep) === totalSteps) {
              _push2(`<button type="submit" class="px-4 btn btn-success"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}> Sign Me Up! </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></form></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "cell large-8 medium-10" }, [
                formError.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "alert alert-danger mb-2"
                }, toDisplayString(formError.value), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "card" }, [
                  createVNode("div", { class: "card-body" }, [
                    createVNode("div", { class: "progress-bar" }, [
                      createVNode("span", {
                        class: "progress",
                        style: { width: getProgressWidth() }
                      }, null, 4)
                    ]),
                    unref(form).errors.length ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "alert alert-danger mt-2"
                    }, toDisplayString(unref(form).errors), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "mx-1 my-3 divider" }),
                    createVNode("div", { class: "grid-x grid-margin-x grid-padding-y" }, [
                      createVNode("div", { class: "text-center cell medium-3" }, [
                        createVNode(unref(VLazyImage), {
                          src: unref(usePage)().props.tester.avatar,
                          class: "show-for-medium",
                          alt: "earl"
                        }, null, 8, ["src"]),
                        createVNode(unref(VLazyImage), {
                          src: unref(usePage)().props.tester.avatar,
                          alt: "earl",
                          style: { "max-width": "180px" },
                          class: "show-for-small-only"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "cell medium-9" }, [
                        createVNode("div", { class: "text-2xl fw-semibold" }, " Welcome to " + toDisplayString(site.value.name) + "! ", 1),
                        createVNode("div", { class: "gap-1 mb-2 flex-container flex-dir-column" }, [
                          createVNode("div", { class: "text-sm text-muted fw-semibold" }, toDisplayString(getStepText()), 1),
                          createVNode("div", { class: "text-sm text-muted fw-semibold" }, toDisplayString(getStepDesc()), 1),
                          createVNode("div", { class: "text-sm text-muted fw-semibold" }, toDisplayString(getStepSdesc()), 1)
                        ]),
                        createVNode("form", {
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, [
                          unref(currentStep) === 1 ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Email Address "),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              onInput: ($event) => unref(checkStepOne)(unref(form).email),
                              type: "text",
                              class: "form",
                              placeholder: "Email Address..."
                            }, null, 40, ["onUpdate:modelValue", "onInput"]), [
                              [vModelText, unref(form).email]
                            ])
                          ])) : unref(currentStep) === 2 ? (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode("div", { class: "mb-2" }, [
                              createVNode("div", {
                                class: [{
                                  "text-danger": unref(form).errors.username
                                }, "text-xs fw-bold text-danger text-uppercase"]
                              }, " Username ", 2),
                              withDirectives(createVNode("input", {
                                type: "text",
                                "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                name: "username",
                                class: "form",
                                placeholder: "@Username...",
                                onInput: ($event) => unref(checkStepTwo)(unref(form).username)
                              }, null, 40, ["onUpdate:modelValue", "onInput"]), [
                                [vModelText, unref(form).username]
                              ]),
                              unref(form).errors.username ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-xs text-danger fw-semibold"
                              }, toDisplayString(unref(form).errors.username), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "mt-2" }, [
                              createVNode("div", {
                                class: [{
                                  "text-danger": unref(form).errors.displayname
                                }, "text-xs fw-bold text-muted text-uppercase"]
                              }, " Display Name ", 2),
                              withDirectives(createVNode("input", {
                                type: "text",
                                "onUpdate:modelValue": ($event) => unref(form).displayname = $event,
                                name: "displayname",
                                class: "form",
                                placeholder: "Display Name..."
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).displayname]
                              ]),
                              unref(form).errors.displayname ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-xs text-danger fw-semibold"
                              }, toDisplayString(unref(form).errors.displayname), 1)) : createCommentVNode("", true)
                            ])
                          ])) : unref(currentStep) === 3 ? (openBlock(), createBlock("div", { key: 2 }, [
                            createVNode("div", { class: "mb-2" }, [
                              createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Password "),
                              withDirectives(createVNode("input", {
                                class: "form",
                                placeholder: "Password...",
                                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                type: "password",
                                name: "password"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).password]
                              ])
                            ]),
                            createVNode("div", { class: "mt-2" }, [
                              createVNode("div", { class: "text-xs fw-bold text-muted text-uppercase" }, " Confirm Password "),
                              withDirectives(createVNode("input", {
                                class: "form",
                                placeholder: "Confirm Password...",
                                "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                                onInput: ($event) => unref(checkStepThree)(unref(form).password, unref(form).password_confirmation),
                                type: "password",
                                name: "password_confirmation"
                              }, null, 40, ["onUpdate:modelValue", "onInput"]), [
                                [vModelText, unref(form).password_confirmation]
                              ])
                            ])
                          ])) : unref(currentStep) === 4 ? (openBlock(), createBlock("div", { key: 3 }, [
                            createVNode("div", { class: "grid-x grid-margin-x grid-padding-y" }, [
                              createVNode("div", { class: "cell medium-4" }, [
                                createVNode("div", { class: "mb-1 text-xs fw-bold text-muted text-uppercase" }, " Month "),
                                withDirectives(createVNode("select", {
                                  "onUpdate:modelValue": ($event) => unref(form).birthdate.month = $event,
                                  class: "form form-select",
                                  name: "birth_month",
                                  onChange: updateDays
                                }, [
                                  createVNode("option", { value: "" }, " Select Month "),
                                  (openBlock(), createBlock(Fragment, null, renderList(months, (month) => {
                                    return createVNode("option", {
                                      key: month.value,
                                      value: month.value
                                    }, toDisplayString(month.label), 9, ["value"]);
                                  }), 64))
                                ], 40, ["onUpdate:modelValue"]), [
                                  [vModelSelect, unref(form).birthdate.month]
                                ])
                              ]),
                              createVNode("div", { class: "cell medium-4" }, [
                                createVNode("div", { class: "mb-1 text-xs fw-bold text-muted text-uppercase" }, " Day "),
                                withDirectives(createVNode("select", {
                                  "onUpdate:modelValue": ($event) => unref(form).birthdate.day = $event,
                                  class: "form form-select",
                                  name: "birth_day"
                                }, [
                                  createVNode("option", { value: "" }, " Select Day "),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(days), (day) => {
                                    return openBlock(), createBlock("option", {
                                      key: day.value,
                                      value: day.value
                                    }, toDisplayString(day.label), 9, ["value"]);
                                  }), 128))
                                ], 8, ["onUpdate:modelValue"]), [
                                  [vModelSelect, unref(form).birthdate.day]
                                ])
                              ]),
                              createVNode("div", { class: "cell medium-4" }, [
                                createVNode("div", { class: "mb-1 text-xs fw-bold text-muted text-uppercase" }, " Year "),
                                withDirectives(createVNode("select", {
                                  "onUpdate:modelValue": ($event) => unref(form).birthdate.year = $event,
                                  class: "form form-select",
                                  name: "birth_year",
                                  onChange: ($event) => updateDays()
                                }, [
                                  createVNode("option", { value: "" }, " Select Year "),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(years), (year) => {
                                    return openBlock(), createBlock("option", {
                                      key: year.value,
                                      value: year.value
                                    }, toDisplayString(year.label), 9, ["value"]);
                                  }), 128))
                                ], 40, ["onUpdate:modelValue", "onChange"]), [
                                  [vModelSelect, unref(form).birthdate.year]
                                ])
                              ]),
                              createVNode("button", {
                                type: "button",
                                onClick: SetValue,
                                class: "btn btn-xs w-100 btn-success"
                              }, " Set ")
                            ])
                          ])) : unref(currentStep) === 5 ? (openBlock(), createBlock("div", { key: 4 }, [
                            createVNode("div", { class: "grid-x grid-margin-x grid-padding-y" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.themes, (theme, index) => {
                                return openBlock(), createBlock("div", {
                                  class: "cell large-6",
                                  key: index
                                }, [
                                  createVNode("div", {
                                    class: [{
                                      active: unref(currentTheme) === theme.lowercase
                                    }, "mb-2 theme-selection squish card card-body card-inner mb-lg-0"],
                                    id: theme.lowercase + "-theme-btn",
                                    onClick: ($event) => _ctx.setTheme(theme.lowercase)
                                  }, [
                                    createVNode("div", { class: "gap-4 align-middle flex-container" }, [
                                      createVNode("div", { class: "selection-circle flex-child-grow show-for-large" }),
                                      createVNode("div", {
                                        class: "gap-1 align-middle flex-container flex-dir-column",
                                        style: { "min-width": "0" }
                                      }, [
                                        createVNode("div", {
                                          class: "theme-circle " + theme.lowercase
                                        }, null, 2),
                                        createVNode("div", { class: "text-lg fw-semibold text-truncate" }, toDisplayString(theme.name), 1),
                                        createVNode("div", { class: "selection-circle flex-child-grow show-for-small hide-for-large" })
                                      ])
                                    ])
                                  ], 10, ["id", "onClick"])
                                ]);
                              }), 128)),
                              createVNode("button", {
                                type: "button",
                                onClick: SetValue,
                                class: "btn btn-xs w-100 btn-success"
                              }, " Set ")
                            ])
                          ])) : unref(currentStep) === 6 ? (openBlock(), createBlock("div", { key: 5 }, [
                            createVNode("div", { class: "gap-2 flex-container-lg" }, [
                              createVNode("button", { class: "mb-2 btn btn-gray btn-block mb-lg-0" }, [
                                createVNode("i", { class: "fas fa-scroll text-muted me-1" }),
                                createTextVNode(" Terms of Service ")
                              ]),
                              createVNode("button", { class: "mb-2 btn btn-gray btn-block mb-lg-0" }, [
                                createVNode("i", { class: "fas fa-user-secret text-muted me-1" }),
                                createTextVNode(" Privacy Policy ")
                              ])
                            ])
                          ])) : createCommentVNode("", true),
                          unref(currentStep) === 1 ? (openBlock(), createBlock("div", { key: 6 }, [
                            createVNode("div", { class: "gap-1 mt-2 mb-2 flex-container flex-dir-column" }, [
                              createVNode("div", { class: "text-xs text-muted fw-semibold" }, " You can skip this step by signing up with Google or Discord! ")
                            ]),
                            createVNode("div", { class: "gap-2 mb-3 flex-container-lg" }, [
                              createVNode("button", { class: "mb-2 btn btn-gray btn-block mb-lg-0" }, [
                                createVNode("img", {
                                  src: "/assets/img/google.png",
                                  width: "20",
                                  alt: "google_logo",
                                  class: "me-1",
                                  style: { "margin-top": "-3px", "filter": "drop-shadow(\n                                                        0 1px 1px\n                                                            rgb(0, 0, 0, 0.2)\n                                                    )" }
                                }),
                                createTextVNode(" Sign Up with Google ")
                              ]),
                              createVNode("button", { class: "btn btn-discord btn-block" }, [
                                createVNode("i", { class: "fab fa-discord me-1" }),
                                createTextVNode(" Sign Up with Discord ")
                              ])
                            ])
                          ])) : createCommentVNode("", true),
                          createVNode("div", { class: "mx-1 my-3 divider" }),
                          createVNode("div", { class: "flex-container align-justify" }, [
                            unref(currentStep) > 1 ? (openBlock(), createBlock("button", {
                              key: 0,
                              type: "button",
                              onClick: previousStep,
                              class: ["px-4 btn btn-danger", {
                                disabled: isPreviousButtonDisabled.value
                              }]
                            }, " Previous ", 2)) : createCommentVNode("", true),
                            unref(currentStep) !== totalSteps ? (openBlock(), createBlock("button", {
                              key: 1,
                              type: "button",
                              class: "px-4 btn btn-success",
                              onClick: nextStep,
                              disabled: !isStepOk.value
                            }, " Next ", 8, ["disabled"])) : createCommentVNode("", true),
                            unref(currentStep) === totalSteps ? (openBlock(), createBlock("button", {
                              key: 2,
                              type: "submit",
                              class: "px-4 btn btn-success",
                              disabled: unref(form).processing
                            }, " Sign Me Up! ", 8, ["disabled"])) : createCommentVNode("", true)
                          ])
                        ], 32)
                      ])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Authentication/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
