import { defineComponent, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext, mergeProps, resolveDynamicComponent, createTextVNode, createSSRApp, h } from "vue";
import { trail } from "momentum-trail";
import { Skeletor } from "vue-skeletor";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderVNode, ssrRenderList } from "vue/server-renderer";
import dayjs from "dayjs";
import { Head, usePage, createInertiaApp, Link } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { usePaginator } from "momentum-paginator";
import PortalVue from "portal-vue";
import VueTippy from "vue-tippy";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppHead",
  __ssrInlineRender: true,
  props: {
    pageTitle: { type: String },
    maintenance: { type: Boolean, default: false },
    description: { type: String },
    url: { type: String },
    cover: { type: String },
    item: { type: Boolean, default: false },
    iid: { type: Number },
    itime: { type: Number, default: null }
  },
  setup(__props) {
    const getFormattedDate = (timeStamp) => {
      if (timeStamp !== null && !isNaN(timeStamp)) {
        return dayjs(timeStamp).format("m-d-Y H:i");
      }
      return null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Head), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(__props.pageTitle)}</title><meta charset="UTF-8"${_scopeId}><meta http-equiv="X-UA-Compatible" content="IE=edge"${_scopeId}><meta name="theme-color" content="#03a9f4"${_scopeId}><meta http-equiv="Content-Type" content="application/x-html+html; charset=UTF-8"${_scopeId}><meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"${_scopeId}><meta name="robots" content="index,follow"${_scopeId}><link rel="shortcut icon" type="image/x-icon"${ssrRenderAttr("href", unref(usePage)().props.site.icon)}${_scopeId}><meta name="msapplication-TileColor" content="#03a9f4"${_scopeId}><meta name="robots" content="index,follow"${_scopeId}><meta name="msapplication-config" content="/browserconfig.ae3u4gn3.xml"${_scopeId}><link rel="manifest" href="/Aeow2mf3.webmanifest" crossorigin="use-credentials"${_scopeId}><link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v6.1.2/css/pro.min.css"${_scopeId}><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css"${_scopeId}>`);
            if (__props.maintenance) {
              _push2(`<link rel="stylesheet" href="/assets/css/themes/variables-dark.css"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<meta${ssrRenderAttr("content", __props.pageTitle)} name="title"${_scopeId}><meta${ssrRenderAttr("content", __props.description || "A page on " + unref(usePage)().props.site.name + ".")} name="description"${_scopeId}><meta content="website" property="og:type"${_scopeId}><meta${ssrRenderAttr("content", __props.url)} property="og:url"${_scopeId}><meta${ssrRenderAttr("content", __props.pageTitle)} property="og:title"${_scopeId}><meta${ssrRenderAttr("content", __props.description || "A page on " + unref(usePage)().props.site.name + ".")} property="og:description"${_scopeId}><meta${ssrRenderAttr("content", __props.cover || unref(usePage)().props.site.icon)} property="og:image"${_scopeId}><meta content="summary_large_image" property="twitter:card"${_scopeId}><meta${ssrRenderAttr("content", __props.url)} property="twitter:url"${_scopeId}><meta${ssrRenderAttr("content", __props.pageTitle)} property="twitter:title"${_scopeId}><meta${ssrRenderAttr("content", __props.description || "A page on " + unref(usePage)().props.site.name + ".")} property="twitter:description"${_scopeId}><meta${ssrRenderAttr("content", __props.cover || unref(usePage)().props.site.icon)} property="twitter:image"${_scopeId}>`);
            if (__props.item == true) {
              _push2(`<meta name="item-info"${ssrRenderAttr("data-id", __props.iid)}${ssrRenderAttr("data-onsale-until", getFormattedDate(__props.itime))}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("title", null, toDisplayString(__props.pageTitle), 1),
              createVNode("meta", { charset: "UTF-8" }),
              createVNode("meta", {
                "http-equiv": "X-UA-Compatible",
                content: "IE=edge"
              }),
              createVNode("meta", {
                name: "theme-color",
                content: "#03a9f4"
              }),
              createVNode("meta", {
                "http-equiv": "Content-Type",
                content: "application/x-html+html; charset=UTF-8"
              }),
              createVNode("meta", {
                "http-equiv": "Content-Security-Policy",
                content: "upgrade-insecure-requests"
              }),
              createVNode("meta", {
                name: "robots",
                content: "index,follow"
              }),
              createVNode("link", {
                rel: "shortcut icon",
                type: "image/x-icon",
                href: unref(usePage)().props.site.icon
              }, null, 8, ["href"]),
              createVNode("meta", {
                name: "msapplication-TileColor",
                content: "#03a9f4"
              }),
              createVNode("meta", {
                name: "robots",
                content: "index,follow"
              }),
              createVNode("meta", {
                name: "msapplication-config",
                content: "/browserconfig.ae3u4gn3.xml"
              }),
              createVNode("link", {
                rel: "manifest",
                href: "/Aeow2mf3.webmanifest",
                crossorigin: "use-credentials"
              }),
              createVNode("link", {
                rel: "stylesheet",
                href: "https://kit-pro.fontawesome.com/releases/v6.1.2/css/pro.min.css"
              }),
              createVNode("link", {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css"
              }),
              __props.maintenance ? (openBlock(), createBlock("link", {
                key: 0,
                rel: "stylesheet",
                href: "/assets/css/themes/variables-dark.css"
              })) : createCommentVNode("", true),
              createVNode("meta", {
                content: __props.pageTitle,
                name: "title"
              }, null, 8, ["content"]),
              createVNode("meta", {
                content: __props.description || "A page on " + unref(usePage)().props.site.name + ".",
                name: "description"
              }, null, 8, ["content"]),
              createVNode("meta", {
                content: "website",
                property: "og:type"
              }),
              createVNode("meta", {
                content: __props.url,
                property: "og:url"
              }, null, 8, ["content"]),
              createVNode("meta", {
                content: __props.pageTitle,
                property: "og:title"
              }, null, 8, ["content"]),
              createVNode("meta", {
                content: __props.description || "A page on " + unref(usePage)().props.site.name + ".",
                property: "og:description"
              }, null, 8, ["content"]),
              createVNode("meta", {
                content: __props.cover || unref(usePage)().props.site.icon,
                property: "og:image"
              }, null, 8, ["content"]),
              createVNode("meta", {
                content: "summary_large_image",
                property: "twitter:card"
              }),
              createVNode("meta", {
                content: __props.url,
                property: "twitter:url"
              }, null, 8, ["content"]),
              createVNode("meta", {
                content: __props.pageTitle,
                property: "twitter:title"
              }, null, 8, ["content"]),
              createVNode("meta", {
                content: __props.description || "A page on " + unref(usePage)().props.site.name + ".",
                property: "twitter:description"
              }, null, 8, ["content"]),
              createVNode("meta", {
                content: __props.cover || unref(usePage)().props.site.icon,
                property: "twitter:image"
              }, null, 8, ["content"]),
              __props.item == true ? (openBlock(), createBlock("meta", {
                key: 1,
                name: "item-info",
                "data-id": __props.iid,
                "data-onsale-until": getFormattedDate(__props.itime)
              }, null, 8, ["data-id", "data-onsale-until"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AppHead.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const url = "https://100.115.92.195";
const port = null;
const defaults = [];
const routes = /* @__PURE__ */ JSON.parse('{"l5-swagger.default.api":{"uri":"api/documentation","methods":["GET","HEAD"]},"l5-swagger.default.docs":{"uri":"docs/{jsonFile?}","methods":["GET","HEAD"],"parameters":["jsonFile"]},"l5-swagger.default.asset":{"uri":"docs/asset/{asset}","methods":["GET","HEAD"],"parameters":["asset"]},"l5-swagger.default.oauth2_callback":{"uri":"api/oauth2-callback","methods":["GET","HEAD"]},"minify.assets":{"uri":"_minify/{file?}","methods":["GET","HEAD"],"wheres":{"file":"(.*)"},"parameters":["file"]},"cashier.payment":{"uri":"stripe/payment/{id}","methods":["GET","HEAD"],"parameters":["id"]},"cashier.webhook":{"uri":"stripe/webhook","methods":["POST"]},"passport.token":{"uri":"oauth/token","methods":["POST"]},"passport.authorizations.authorize":{"uri":"oauth/authorize","methods":["GET","HEAD"]},"passport.token.refresh":{"uri":"oauth/token/refresh","methods":["POST"]},"passport.authorizations.approve":{"uri":"oauth/authorize","methods":["POST"]},"passport.authorizations.deny":{"uri":"oauth/authorize","methods":["DELETE"]},"passport.tokens.index":{"uri":"oauth/tokens","methods":["GET","HEAD"]},"passport.tokens.destroy":{"uri":"oauth/tokens/{token_id}","methods":["DELETE"],"parameters":["token_id"]},"passport.clients.index":{"uri":"oauth/clients","methods":["GET","HEAD"]},"passport.clients.store":{"uri":"oauth/clients","methods":["POST"]},"passport.clients.update":{"uri":"oauth/clients/{client_id}","methods":["PUT"],"parameters":["client_id"]},"passport.clients.destroy":{"uri":"oauth/clients/{client_id}","methods":["DELETE"],"parameters":["client_id"]},"passport.scopes.index":{"uri":"oauth/scopes","methods":["GET","HEAD"]},"passport.personal.tokens.index":{"uri":"oauth/personal-access-tokens","methods":["GET","HEAD"]},"passport.personal.tokens.store":{"uri":"oauth/personal-access-tokens","methods":["POST"]},"passport.personal.tokens.destroy":{"uri":"oauth/personal-access-tokens/{token_id}","methods":["DELETE"],"parameters":["token_id"]},"sanctum.csrf-cookie":{"uri":"sanctum/csrf-cookie","methods":["GET","HEAD"]},"telescope":{"uri":"telescope/{view?}","methods":["GET","HEAD"],"wheres":{"view":"(.*)"},"parameters":["view"]},"api.":{"uri":"api","methods":["GET","HEAD"]},"api.messaging.":{"uri":"api/messaging/previous-messages","methods":["GET","HEAD"]},"api.search":{"uri":"api/search","methods":["GET","HEAD"]},"api.avatar":{"uri":"api/render/validate/{id}","methods":["GET","HEAD"],"parameters":["id"]},"api.user.":{"uri":"api/users","methods":["GET","HEAD"]},"api.user.name-availability":{"uri":"api/users/name-availability","methods":["GET","HEAD"]},"api.user.email-validate":{"uri":"api/users/validate-email","methods":["GET","HEAD"]},"api.user.password-validate":{"uri":"api/users/validate-password","methods":["GET","HEAD"]},"api.user.profile":{"uri":"api/users/user-profile/{id}","methods":["GET","HEAD"],"parameters":["id"]},"api.user.online":{"uri":"api/users/online/{id}","methods":["GET","HEAD"],"parameters":["id"]},"api.user.inventory":{"uri":"api/users/inventory/{id}","methods":["GET","HEAD"],"parameters":["id"]},"api.user.currently-wearing":{"uri":"api/users/inventory/currently-wearing/{id}","methods":["GET","HEAD"],"parameters":["id"]},"api.user.status":{"uri":"api/users/status-list","methods":["GET","HEAD"]},"api.user.avatar":{"uri":"api/users/user/img/{id}","methods":["GET","HEAD"],"parameters":["id"]},"api.user.follow":{"uri":"api/users/follow/{user}","methods":["GET","HEAD"],"parameters":["user"],"bindings":{"user":"id"}},"api.user.unfollow":{"uri":"api/users/unfollow/{user}","methods":["POST"],"parameters":["user"],"bindings":{"user":"id"}},"api.dashboard.":{"uri":"api/dash","methods":["GET","HEAD"]},"api.dashboard.statuses":{"uri":"api/dash/status-list","methods":["GET","HEAD"]},"api.notif.":{"uri":"api/notifications","methods":["GET","HEAD"]},"api.notif.read-all":{"uri":"api/notifications/read-all","methods":["POST"]},"api.item.rerender":{"uri":"api/item/rerender/{id}","methods":["POST"],"parameters":["id"]},"api.store.":{"uri":"api/market","methods":["GET","HEAD"]},"api.store.items":{"uri":"api/market/items/{category}","methods":["GET","HEAD"],"parameters":["category"]},"api.store.event.items":{"uri":"api/market/items/event/{eventId}","methods":["GET","HEAD"],"parameters":["eventId"]},"api.store.purchase":{"uri":"api/market/item/purchase/{id}/{currencyType}","methods":["POST"],"parameters":["id","currencyType"]},"api.avatar.":{"uri":"api/avatar","methods":["GET","HEAD"]},"api.avatar.items":{"uri":"api/avatar/{category}","methods":["GET","HEAD"],"parameters":["category"]},"api.avatar.wearing-items":{"uri":"api/avatar/wearing","methods":["GET","HEAD"]},"api.avatar.wearing-hats":{"uri":"api/avatar/wearing-hats","methods":["GET","HEAD"]},"api.avatar.wear-item":{"uri":"api/avatar/wear/{id}/{slot}","methods":["GET","HEAD"],"parameters":["id","slot"]},"api.avatar.remove-item":{"uri":"api/avatar/take-off/{id}/{slot}","methods":["GET","HEAD"],"parameters":["id","slot"]},"api.settings.":{"uri":"api/settings","methods":["GET","HEAD"]},"api.settings.changeCountry":{"uri":"api/settings/change-country/{country}","methods":["POST"],"parameters":["country"]},"api.settings.resetPassword":{"uri":"api/settings/change-password","methods":["POST"]},"api.rss":{"uri":"api/rss-feed","methods":["GET","HEAD"]},"api.thumbnails":{"uri":"api/thumbnails/{type}/{id}","methods":["GET","HEAD"],"parameters":["type","id"]},"api.admin.enableMaintenance":{"uri":"api/enigma-content/enable-maintenance","methods":["POST"]},"api.admin.disableMaintenance":{"uri":"api/enigma-content/disable-maintenance","methods":["POST"]},"api.admin.gift-item":{"uri":"api/enigma-content/gift-item/{itemID}/{userID}","methods":["POST"],"parameters":["itemID","userID"]},"api.admin.purge":{"uri":"api/enigma-content/purge/{type}/{assetId}","methods":["POST"],"parameters":["type","assetId"]},"maintenance.page":{"uri":"maintenance","methods":["GET","HEAD"],"domain":"100.115.92.195"},"maintenance.authenticate.password":{"uri":"maintenance/password","methods":["POST"],"domain":"100.115.92.195"},"maintenance.exit":{"uri":"maintenance/exit","methods":["GET","HEAD"],"domain":"100.115.92.195"},"leaderboard.page":{"uri":"leaderboard","methods":["GET","HEAD"],"domain":"100.115.92.195"},"my.money.page":{"uri":"my/money","methods":["GET","HEAD"],"domain":"100.115.92.195"},"my.money.validate":{"uri":"my/money","methods":["POST"],"domain":"100.115.92.195"},"my.dashboard.page":{"uri":"my/dashboard","methods":["GET","HEAD"],"domain":"100.115.92.195"},"my.dashboard.validate":{"uri":"my/dashboard","methods":["POST"],"domain":"100.115.92.195"},"user.page":{"uri":"user/discover","methods":["GET","HEAD"],"domain":"100.115.92.195"},"user.profile":{"uri":"user/@{username}","methods":["GET","HEAD"],"domain":"100.115.92.195","parameters":["username"]},"user.settings.page":{"uri":"user/settings","methods":["GET","HEAD"],"domain":"100.115.92.195"},"user.settings.update":{"uri":"user/settings/update","methods":["PATCH"],"domain":"100.115.92.195"},"user.settings.destroy":{"uri":"user/settings/delete-account","methods":["POST"],"domain":"100.115.92.195"},"avatar.page":{"uri":"customize","methods":["GET","HEAD"],"domain":"100.115.92.195"},"avatar.update":{"uri":"customize/update","methods":["POST"],"domain":"100.115.92.195"},"forum.":{"uri":"discuss","methods":["GET","HEAD"],"domain":"100.115.92.195"},"forum.page":{"uri":"discuss/{id}","methods":["GET","HEAD"],"domain":"100.115.92.195","parameters":["id"]},"forum.your.posts":{"uri":"discuss/your/posts","methods":["GET","HEAD"],"domain":"100.115.92.195"},"forum.post":{"uri":"discuss/post/{id}/{slug}","methods":["GET","HEAD"],"domain":"100.115.92.195","parameters":["id","slug"]},"forum.create.page":{"uri":"discuss/create/{id}","methods":["GET","HEAD"],"domain":"100.115.92.195","parameters":["id"]},"forum.create.validate":{"uri":"discuss/create/{id}/validate","methods":["POST"],"domain":"100.115.92.195","parameters":["id"]},"forum.reply.validate":{"uri":"discuss/create/reply/{id}/validate","methods":["POST"],"domain":"100.115.92.195","parameters":["id"]},"chat.messages":{"uri":"messages/messages","methods":["GET","HEAD"],"domain":"100.115.92.195"},"chat.validate":{"uri":"messages/message/validate","methods":["POST"],"domain":"100.115.92.195"},"acheivements":{"uri":"achievements","methods":["GET","HEAD"],"domain":"100.115.92.195"},"notification.page":{"uri":"notifications","methods":["GET","HEAD"],"domain":"100.115.92.195"},"notification.view":{"uri":"notifications/view/{id}","methods":["GET","HEAD"],"domain":"100.115.92.195","parameters":["id"]},"auth.logout":{"uri":"auth/logout","methods":["POST"],"domain":"100.115.92.195"},"auth.language":{"uri":"auth/set-language/{language}","methods":["GET","HEAD"],"domain":"100.115.92.195","parameters":["language"]},"auth.login.google":{"uri":"auth/login/google/v1","methods":["GET","HEAD"],"domain":"100.115.92.195"},"auth.login.google.validation":{"uri":"auth/login/callback/google","methods":["GET","HEAD"],"domain":"100.115.92.195"},"auth.login.page":{"uri":"auth/login","methods":["GET","HEAD"],"domain":"100.115.92.195"},"auth.login.validate":{"uri":"auth/login/validate","methods":["POST"],"domain":"100.115.92.195"},"auth.login.metamask":{"uri":"auth/login/validate/metamask","methods":["GET","HEAD"],"domain":"100.115.92.195"},"auth.login.metamask.validation":{"uri":"auth/login/validate/meta-mask-api","methods":["POST"],"domain":"100.115.92.195"},"auth.register.page":{"uri":"auth/register","methods":["GET","HEAD"],"domain":"100.115.92.195"},"auth.register.validate":{"uri":"auth/register/validate","methods":["POST"],"domain":"100.115.92.195"},"auth.forgot.page":{"uri":"auth/forgot","methods":["GET","HEAD"],"domain":"100.115.92.195"},"auth.forgot.password.reset":{"uri":"auth/forgot/reset-password/{token}","methods":["GET","HEAD"],"domain":"100.115.92.195","parameters":["token"]},"auth.forgot.password.email":{"uri":"auth/forgot","methods":["POST"],"domain":"100.115.92.195"},"Welcome":{"uri":"/","methods":["GET","HEAD"],"domain":"100.115.92.195"},"games.page":{"uri":"games","methods":["GET","HEAD"],"domain":"100.115.92.195"},"games.game":{"uri":"games/1","methods":["GET","HEAD"],"domain":"100.115.92.195"},"removed":{"uri":"deletion","methods":["GET","HEAD"],"domain":"100.115.92.195"},"store.page":{"uri":"market","methods":["GET","HEAD"],"domain":"100.115.92.195"},"store.create.page":{"uri":"market/create","methods":["GET","HEAD"],"domain":"100.115.92.195"},"store.create.validate":{"uri":"market/create/validate","methods":["POST"],"domain":"100.115.92.195"},"store.item":{"uri":"market/item/{id}","methods":["GET","HEAD"],"domain":"100.115.92.195","parameters":["id"]},"store.edit":{"uri":"market/item/{id}/edit","methods":["GET","HEAD"],"domain":"100.115.92.195","parameters":["id"]},"store.edit.validate":{"uri":"market/item/{id}/edit","methods":["POST"],"domain":"100.115.92.195","parameters":["id"]},"store.purchase":{"uri":"market/item/purchase/{id}/{currencyType}","methods":["POST"],"domain":"100.115.92.195","parameters":["id","currencyType"]},"membership.page":{"uri":"upgrade","methods":["GET","HEAD"],"domain":"100.115.92.195"},"membership.purchase":{"uri":"upgrade/purchase/{id}","methods":["GET","HEAD"],"domain":"100.115.92.195","parameters":["id"]},"develop.page":{"uri":"develop","methods":["GET","HEAD"],"domain":"100.115.92.195"},"develop.create.page":{"uri":"develop/create","methods":["GET","HEAD"],"domain":"100.115.92.195"},"develop.create.validate":{"uri":"develop/create/validate","methods":["POST"],"domain":"100.115.92.195"},"develop.item":{"uri":"develop/item/{id}","methods":["GET","HEAD"],"domain":"100.115.92.195","parameters":["id"]},"develop.purchase":{"uri":"develop/item/purchase/{id}/{currencyType}","methods":["POST"],"domain":"100.115.92.195","parameters":["id","currencyType"]},"spaces.page":{"uri":"spaces","methods":["GET","HEAD"],"domain":"100.115.92.195"},"spaces.create.page":{"uri":"spaces/create","methods":["GET","HEAD"],"domain":"100.115.92.195"},"spaces.create.validate":{"uri":"spaces/create/create/validate","methods":["POST"],"domain":"100.115.92.195"},"spaces.join":{"uri":"spaces/join/{id}","methods":["POST"],"domain":"100.115.92.195","parameters":["id"]},"spaces.view":{"uri":"spaces/{id}/{slug}","methods":["GET","HEAD"],"domain":"100.115.92.195","parameters":["id","slug"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"email/verify/{id}/{hash}","methods":["GET","HEAD"],"parameters":["id","hash"]},"verification.send":{"uri":"email/verification-notification","methods":["POST"]},"admin.page":{"uri":"admin","methods":["GET","HEAD"]},"admin.users.page":{"uri":"admin/users","methods":["GET","HEAD"]},"admin.users.manage-user":{"uri":"admin/users/manage/{id}","methods":["GET","HEAD"],"parameters":["id"]},"admin.users.gift-user":{"uri":"admin/users/gift/{id}","methods":["GET","HEAD"],"parameters":["id"]},"admin.items.page":{"uri":"admin/items","methods":["GET","HEAD"]},"admin.items.manage-item":{"uri":"admin/items/manage/{id}","methods":["GET","HEAD"],"parameters":["id"]},"admin.items.create.create-item":{"uri":"admin/items/create","methods":["GET","HEAD"]},"admin.items.create.validate":{"uri":"admin/items/create/validate","methods":["POST"]},"admin.messaging.page":{"uri":"admin/intranet","methods":["GET","HEAD"]},"admin.messaging.validate":{"uri":"admin/intranet/validate","methods":["POST"]},"admin.reports.page":{"uri":"admin/reports","methods":["GET","HEAD"]},"admin.reports.view":{"uri":"admin/reports/view/{id}","methods":["GET","HEAD"],"parameters":["id"]},"admin.assets.approve":{"uri":"admin/assets/approve","methods":["GET","HEAD"]}}');
const wildcards = { "l5-swagger.*": [], "l5-swagger.default.*": [], "minify.*": [], "cashier.*": [], "passport.*": [], "passport.authorizations.*": [], "passport.token.*": [], "passport.tokens.*": [], "passport.clients.*": [], "passport.scopes.*": [], "passport.personal.*": [], "passport.personal.tokens.*": [], "sanctum.*": [], "api.*": [], "api.messaging.*": [], "api.user.*": [], "api.dashboard.*": [], "api.notif.*": [], "api.item.*": [], "api.store.*": [], "api.store.event.*": [], "api.avatar.*": [], "api.settings.*": [], "api.admin.*": [], "maintenance.*": [], "maintenance.authenticate.*": [], "leaderboard.*": [], "my.*": [], "my.money.*": [], "my.dashboard.*": [], "user.*": [], "user.settings.*": [], "avatar.*": [], "forum.*": [], "forum.your.*": [], "forum.create.*": [], "forum.reply.*": [], "chat.*": [], "notification.*": [], "auth.*": [], "auth.login.*": [], "auth.login.google.*": [], "auth.login.metamask.*": [], "auth.register.*": [], "auth.forgot.*": [], "auth.forgot.password.*": [], "games.*": [], "store.*": [], "store.create.*": [], "store.edit.*": [], "membership.*": [], "develop.*": [], "develop.create.*": [], "spaces.*": [], "spaces.create.*": [], "verification.*": [], "admin.*": [], "admin.users.*": [], "admin.items.*": [], "admin.items.create.*": [], "admin.messaging.*": [], "admin.reports.*": [], "admin.assets.*": [] };
const routes$1 = {
  url,
  port,
  defaults,
  routes,
  wildcards
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    pagedata: {}
  },
  setup(__props) {
    const props = __props;
    const { previous, next, pages } = usePaginator(props.pagedata);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))}><ul class="pagination flex-container align-center">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent("Link"), {
        as: "button",
        href: unref(previous).url,
        class: {
          "page-link": unref(previous).isActive,
          "page-link page-disabled": !unref(previous).isActive
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-regular fa-chevron-left"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fa-regular fa-chevron-left" })
            ];
          }
        }),
        _: 1
      }), _parent);
      _push(`<!--[-->`);
      ssrRenderList(unref(pages), (page) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent("Link"), {
          as: "button",
          href: page.url,
          class: {
            "page-link page-active": page.isCurrent,
            "page-link": page.isActive
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(page.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(page.label), 1)
              ];
            }
          }),
          _: 2
        }), _parent);
      });
      _push(`<!--]-->`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent("Link"), {
        as: "button",
        href: unref(next).url,
        class: {
          "page-link": unref(next).isActive,
          "page-link page-disabled": !unref(next).isActive
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-regular fa-chevron-right"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fa-regular fa-chevron-right" })
            ];
          }
        }),
        _: 1
      }), _parent);
      _push(`</ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "Netisu Developer Server";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    progress: { includeCSS: true, showSpinner: false },
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(
      `./Pages/${name}.vue`,
      /* @__PURE__ */ Object.assign({ "./Pages/AccountDeleted.vue": () => import("./assets/AccountDeleted-DRdoqUsO.js"), "./Pages/Acheivements/Index.vue": () => import("./assets/Index-Dcyhrozx.js"), "./Pages/Admin/Assets/Approve.vue": () => import("./assets/Approve-BZu7aewb.js"), "./Pages/Admin/Dashboard.vue": () => import("./assets/Dashboard-DnGxAu56.js"), "./Pages/Admin/Error/PermissionError.vue": () => import("./assets/PermissionError-CF6s3Gy6.js"), "./Pages/Admin/Items/Create.vue": () => import("./assets/Create-DSHnsBCr.js"), "./Pages/Admin/Items/Index.vue": () => import("./assets/Index-BVGWAKj8.js"), "./Pages/Admin/Items/Manage.vue": () => import("./assets/Manage-BNqc2XvN.js"), "./Pages/Admin/Messaging/Index.vue": () => import("./assets/Index-CAaHKtva.js"), "./Pages/Admin/Reports/Index.vue": () => import("./assets/Index-DxWj64ID.js"), "./Pages/Admin/Users/Gift.vue": () => import("./assets/Gift-DtMN50Vp.js"), "./Pages/Admin/Users/Index.vue": () => import("./assets/Index-ye2clWju.js"), "./Pages/Admin/Users/Manage.vue": () => import("./assets/Manage-CVS9Jiy2.js"), "./Pages/App/Error.vue": () => import("./assets/Error-DJBsezLF.js"), "./Pages/App/FeatureDisabled.vue": () => import("./assets/FeatureDisabled-J2nb0TXq.js"), "./Pages/App/ProfileDisabled.vue": () => import("./assets/ProfileDisabled-h-Qsi-hZ.js"), "./Pages/App/Verify/Email.vue": () => import("./assets/Email-BK_W8SoX.js"), "./Pages/App/Verify/EmailSent.vue": () => import("./assets/EmailSent-Do6UqxCI.js"), "./Pages/App/Verify/EmailVerified.vue": () => import("./assets/EmailVerified-CivhCLtW.js"), "./Pages/Authentication/Create.vue": () => import("./assets/Create-BU_RPbNh.js"), "./Pages/Authentication/Forgot.vue": () => import("./assets/Forgot-Cq5llfAi.js"), "./Pages/Authentication/Login.vue": () => import("./assets/Login-Ciq7VzHT.js"), "./Pages/Customize/Index.vue": () => import("./assets/Index-9uU1KLJj.js"), "./Pages/Dashboard.vue": () => import("./assets/Dashboard-CgPLJGyG.js"), "./Pages/Forum/Create.vue": () => import("./assets/Create-DV4SFLIB.js"), "./Pages/Forum/Index.vue": () => import("./assets/Index-BweWw3Rt.js"), "./Pages/Forum/MyPosts.vue": () => import("./assets/MyPosts-iu9KZk9N.js"), "./Pages/Forum/Post.vue": () => import("./assets/Post-CQlQmK1A.js"), "./Pages/Games/Game.vue": () => import("./assets/Game-CJQE8Ywc.js"), "./Pages/Games/Index.vue": () => import("./assets/Index-BQ6H2TcN.js"), "./Pages/Leaderboard/Index.vue": () => import("./assets/Index-j9hobBip.js"), "./Pages/Legal/Terms.vue": () => import("./assets/Terms-CyOBjDoP.js"), "./Pages/Maintenance/Index.vue": () => import("./assets/Index-BoKdSRV5.js"), "./Pages/Memberships/Index.vue": () => import("./assets/Index-cEUjeaWv.js"), "./Pages/Money/Manage.vue": () => import("./assets/Manage-DeD4dbYl.js"), "./Pages/Notifications/Index.vue": () => import("./assets/Index-CvBbR_Jk.js"), "./Pages/Settings/Edit.vue": () => import("./assets/Edit-YN6twExi.js"), "./Pages/Settings/Partials/DeleteUserForm.vue": () => import("./assets/DeleteUserForm-em7H3L-H.js"), "./Pages/Settings/Partials/UpdatePasswordForm.vue": () => import("./assets/UpdatePasswordForm-DrtGGYO5.js"), "./Pages/Settings/Partials/UpdateProfileInformationForm.vue": () => import("./assets/UpdateProfileInformationForm-fE2019DH.js"), "./Pages/Spaces/Create.vue": () => import("./assets/Create-DFb9ju58.js"), "./Pages/Spaces/Index.vue": () => import("./assets/Index-CPZBbOXg.js"), "./Pages/Spaces/View.vue": () => import("./assets/View-QshyOnXC.js"), "./Pages/Store/Create.vue": () => import("./assets/Create-HCsGGPIP.js"), "./Pages/Store/Edit.vue": () => import("./assets/Edit-bCRP7Yn9.js"), "./Pages/Store/Index.vue": () => import("./assets/Index-CrFeE0zw.js"), "./Pages/Store/Item.vue": () => import("./assets/Item-DB5l4pNI.js"), "./Pages/Users/Index.vue": () => import("./assets/Index-DY8FMISW.js"), "./Pages/Users/Profile.vue": () => import("./assets/Profile-CXYIIigi.js"), "./Pages/Welcome.vue": () => import("./assets/Welcome-DC8sJIS0.js") })
    ),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(trail, {
        routes: routes$1,
        url: props.initialPage.url
      }).use(plugin).use(VueTippy).use(PortalVue).component("Skeletor", Skeletor).component("Pagination", _sfc_main).component("AppHead", _sfc_main$1).component("Head", Head).component("Link", Link);
    }
  }).then((app) => {
    const appRender = app;
    appRender.body = appRender.body.replace(/data-page=".*?"/, "");
    return appRender;
  })
);
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
