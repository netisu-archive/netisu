<!-- resources/js/Pages/MaintenancePage.vue -->

<template>
  <main class="o9w8s">
    <div class="xwiwg">
      <div class="pf7ue v2elw u7fgj">
        <div class="ut945 wzh2z dwa8l">Roadmap - {{ $page.props.site.name }} <i class="fas fa-globe tmi92"></i></div>
        <div class="hhise uwgpx od08t">
          <div class="od08t">
              {{ $page.props.site.name }} is a new website where you can imagine something you've always wanted to build, and then bring that imagination into a creation of your own. {{ $page.props.site.name }} is pretty new and were still setting everything up to be ready for you.
              
            <p>We can not wait to see you on {{ $page.props.site.name }}! ❤️</p>

            <div class="ut945">Frequently Asked Questions</div>
            <div class="t3vvp jv4ny crd67"></div>
            <p><b>Will {{ $page.props.site.name }} have a game client &amp; workshop?</b></p>
            <p>Yes, {{ $page.props.site.name }} will have an official game client and workshop! Our client is specifically
              being made in the Godot engine, so users can have everything they need to start bring their imagination to
              life.</p>
            <p><b>Can I reserve my username?</b></p>
            <p>As of znu54 now, it is not possible to reserve a username, although we will be opening this up in the near
              future close to {{ $page.props.site.name }}'s release. You will only be able to reserve one username,
              including spaced
              usernames.</p>
          </div>
        </div>
      </div>
    <div class="pf7ue d3l9h u7fgj">
    <div class="ut945 wzh2z dwa8l">Progress <i class="fas fa-bars-progress fa-flip-horizontal tmi92"></i></div>
      <div class="hhise uwgpx sn9ep">
        <div class="sn9ep">
        <ul class="tzxnw hvwcp">
                        <li class="k1dtp">
                            <a href="#" class="plt3h omei8 wn3lt"
                                ><i class="fas fa-check">&nbsp;</i>Authentication</a
                            >
                        </li>
                        <li class="k1dtp o3net">
                            <a href="#" class="plt3h omei8 wn3lt"
                                ><i class="fas fa-check">&nbsp;</i>Item Shop</a
                            >
                        </li>
                        <li class="k1dtp o3net">
                            <a href="#" class="plt3h omei8 wn3lt"
                                ><i class="fas fa-check">&nbsp;</i>Forums</a
                            >
                        </li>
                        <li class="k1dtp">
                            <a href="#" class="plt3h wn3lt"
                                ><i class="fas fa-clock tmi92">&nbsp;</i>Settings</a
                            >
                        </li>
                        <li class="k1dtp">
                            <a href="#" class="plt3h wn3lt"><i class="fas fa-clock tmi92">&nbsp;</i>Real Life Purchasing</a>
                        </li>
                        <li class="k1dtp">
                            <a href="#" class="plt3h wn3lt"
                                ><i class="fas fa-clock tmi92">&nbsp;</i>Settings</a
                            >
                        </li>
                        <li class="k1dtp">
                            <a href="#" class="plt3h wn3lt"><i class="fas fa-clock tmi92">&nbsp;</i>Real Life Purchasing (Memberships)</a>
                        </li>
                        
                        
                    </ul>
        </div>
      </div>
      <div class="hhise uwgpx od08t">
      <div class="ut945">Maintenance Code</div>
       <div class="ltwij o3net wrcaq">We will be back up soon!</div>
            <div class="t3vvp dw3s9 crd67"></div>
      <form @submit.prevent="submitPassword">
          <div class="sn9ep">
        <input class="o2grw" type="password" placeholder="Developer Password" v-model="password" />
        </div>
        <button class="gww1z xucmr sn9ep o53ji fiy2z" type="submit">Enter</button>
      </form>
      <div v-if="showError" class="rcpld y099v khqv1 nxokn sn9ep">
        Incorrect password. Please try again.
      </div>
      </div>
    </div>
    </div>
  </main>
  <Footer />
</template>

<script lang="ts">
import Footer from '@/Components/LayoutParts/Footer.vue';
import { route, current } from 'momentum-trail'
export default {
  data() {
    return {
      password: "",
      showError: false,
    };
  },
  methods: {
    submitPassword() {
      // Make an API call to the server to validate the password
      this.$inertia.post("/maintenance", { password: this.password }).then(() => {
        // If the password is correct, reload the page to access the maintenance z0b5g
        location.reload();
      }).catch(() => {
        // Show the error fi59s if the password is incorrect
        this.showError = true;
      });
    },
  },
};
</script>
