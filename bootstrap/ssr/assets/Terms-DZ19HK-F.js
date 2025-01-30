import { defineComponent, computed, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "../ssr.js";
import { _ as _sfc_main$2 } from "./Navbar-DmBRqlRZ.js";
import { S as Sidebar } from "./Sidebar-fXSZR0n1.js";
import { usePage } from "@inertiajs/vue3";
import { route } from "momentum-trail";
import "vue-skeletor";
import "dayjs";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "momentum-paginator";
import "vue-tippy";
import "axios";
import "v-lazy-image";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash/throttle.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Terms",
  __ssrInlineRender: true,
  props: {
    LandingItems: { type: Object, default: null }
  },
  setup(__props) {
    const site = computed(() => usePage().props.site);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        pageTitle: "Welcome",
        description: "Join in on the action today. Buy & sell items, participate in spaces, make friends, and more.",
        url: unref(route)(`Welcome`)
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Terms of Service 1. Introduction Welcome to ${ssrInterpolate(site.value.name)} (&quot;${ssrInterpolate(site.value.name)}&quot; or &quot;we&quot; or &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website located at https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL (the &quot;Site&quot;) and all associated services (collectively, the &quot;Services&quot;). 2. Acceptance of Terms By accessing or using the Services, you (&quot;you&quot; or &quot;user&quot;) agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access or use the Services. 3. Modifications to the Terms We may revise and update these Terms at our sole discretion. We will use reasonable efforts to provide you with notice of any material changes to the Terms. You are advised to review the Terms periodically for any changes. Your continued access to or use of the Services after the revised Terms have been posted constitutes your acceptance of the revised Terms. 4. Use of the Services 4.1. Permitted Uses You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services: In any way that violates any applicable law or regulation in any jurisdiction where you access or use the Services. For the purpose of exploiting, harming, or disrupting the Services or the servers or networks connected to the Services. To transmit, store, or upload any content that is infringing, obscene, defamatory, threatening, or otherwise unlawful. To interfere with or disrupt the use of the Services by any other user. 4.2. User Content You may create, post, or upload content (&quot;User Content&quot;) to the Services. You retain all ownership rights in your User Content. However, by posting User Content to the Services, you grant us a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, publish, and distribute your User Content in connection with the Services. 5. Intellectual Property The Services and all content and materials included on the Site, including, without limitation, text, graphics, logos, icons, images, videos, software, and other materials (collectively, the &quot;Content&quot;), are the intellectual property of ${ssrInterpolate(site.value.name)} or its licensors. You may not use the Content for any commercial purpose without our express written consent. 6. Disclaimer of Warranties THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVER THAT MAKES THE SERVICES AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. 7. Limitation of Liability TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. 8. Termination We may terminate your access to the Services at any time, for any reason or no reason, without notice. 9. Governing Law and Dispute Resolution 9.1. Choice of Law These Terms shall be governed by and construed in accordance with the laws of [Neutral Location], without regard to its conflict of law provisions. You agree that any legal action or proceeding arising out of or relating to these Terms will be brought exclusively in the courts of [Neutral Location], and you consent to the exclusive jurisdiction and venue of such courts. 9.2. Amicable Resolution In the event of a dispute arising out of or relating to these Terms, the parties agree to attempt to resolve the dispute amicably through negotiations. If the parties are unable to reach a resolution within a reasonable time period, the dispute shall be settled by [Arbitration Institution] in accordance with its arbitration rules. The arbitration shall be conducted in [Neutral Location] and the language of the arbitration shall be English. 10. Entire Agreement These Terms constitute the entire agreement between you and us regarding your use of the Services. `);
          } else {
            return [
              createTextVNode(" Terms of Service 1. Introduction Welcome to " + toDisplayString(site.value.name) + ' ("' + toDisplayString(site.value.name) + '" or "we" or "us"). These Terms of Service ("Terms") govern your access to and use of the website located at https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL (the "Site") and all associated services (collectively, the "Services"). 2. Acceptance of Terms By accessing or using the Services, you ("you" or "user") agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access or use the Services. 3. Modifications to the Terms We may revise and update these Terms at our sole discretion. We will use reasonable efforts to provide you with notice of any material changes to the Terms. You are advised to review the Terms periodically for any changes. Your continued access to or use of the Services after the revised Terms have been posted constitutes your acceptance of the revised Terms. 4. Use of the Services 4.1. Permitted Uses You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services: In any way that violates any applicable law or regulation in any jurisdiction where you access or use the Services. For the purpose of exploiting, harming, or disrupting the Services or the servers or networks connected to the Services. To transmit, store, or upload any content that is infringing, obscene, defamatory, threatening, or otherwise unlawful. To interfere with or disrupt the use of the Services by any other user. 4.2. User Content You may create, post, or upload content ("User Content") to the Services. You retain all ownership rights in your User Content. However, by posting User Content to the Services, you grant us a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, publish, and distribute your User Content in connection with the Services. 5. Intellectual Property The Services and all content and materials included on the Site, including, without limitation, text, graphics, logos, icons, images, videos, software, and other materials (collectively, the "Content"), are the intellectual property of ' + toDisplayString(site.value.name) + ' or its licensors. You may not use the Content for any commercial purpose without our express written consent. 6. Disclaimer of Warranties THE SERVICES ARE PROVIDED "AS IS" AND WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVER THAT MAKES THE SERVICES AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. 7. Limitation of Liability TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. 8. Termination We may terminate your access to the Services at any time, for any reason or no reason, without notice. 9. Governing Law and Dispute Resolution 9.1. Choice of Law These Terms shall be governed by and construed in accordance with the laws of [Neutral Location], without regard to its conflict of law provisions. You agree that any legal action or proceeding arising out of or relating to these Terms will be brought exclusively in the courts of [Neutral Location], and you consent to the exclusive jurisdiction and venue of such courts. 9.2. Amicable Resolution In the event of a dispute arising out of or relating to these Terms, the parties agree to attempt to resolve the dispute amicably through negotiations. If the parties are unable to reach a resolution within a reasonable time period, the dispute shall be settled by [Arbitration Institution] in accordance with its arbitration rules. The arbitration shall be conducted in [Neutral Location] and the language of the arbitration shall be English. 10. Entire Agreement These Terms constitute the entire agreement between you and us regarding your use of the Services. ', 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Legal/Terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
