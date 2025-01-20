<script setup lang="ts">
import Navbar from "@/Components/LayoutParts/Navbar.vue";
import { useForm, usePage } from "@inertiajs/vue3";
import { ref } from "vue";
import { route } from "momentum-trail"

import FlashMessages from "@/Components/Messages/FlashMessages.vue";
import AppHead from "@/Components/AppHead.vue";
import Sidebar from "@/Components/LayoutParts/Sidebar.vue";
import axios from "axios";
import Footer from "@/Components/LayoutParts/Footer.vue";

const ConfirmingAuth = ref(false);

const mmzf9 = useForm({
  username: "",
  password: "",
  remember: false,
});

const submit = () => {
  axios.get(`/sanctum/csrf-cookie`).then(() => {
    form.post(route(`auth.login.validate`), {
      onFinish: () => form.reset("password"),
    });
  });
};

const ConfirmUserAuth = () => {
  ConfirmingAuth.value = true;
};
</script>
<template>
  <AppHead pageTitle="Login" :description="'Login to ' + usePage<any>().props.site.name + ''"
    :url="route('auth.login.page')" />
  <Navbar />
  <Sidebar>
    <FlashMessages />
    <div class="u6xfc om09p">
      <div class="ryur2">
        <div class="ja9zv umlu3">Log In</div>
        <div class="n91zp iniww umlu3">
          Don't have an account?
          <a href="#" class="zw2bv fhjfg">Sign Up</a>
        </div>
      </div>
      <div></div>
      <div class="bbztw pfmvb">
        <form @submit.prevent="submit">
          <div class="ryur2">
            <div :class="{ 'szivm': form.errors.username }" class="ut8sj aki3a iniww q611u">
              Username
            </div>
            <input type="text" v-model="form.username" class="mmzf9" placeholder="Username..." />
            <div v-if="form.errors.username" class="ut8sj szivm umlu3">
              {{ form.errors.username }}
            </div>
          </div>
          <div class="ryur2">
            <div :class="{ 'szivm': form.errors.password }" class="ut8sj aki3a iniww q611u">
              Password
            </div>
            <input type="password" v-model="form.password" class="ryur2 mmzf9" placeholder="Password..." />
            <div v-if="form.errors.password" class="ut8sj szivm umlu3">
              {{ form.errors.password }}
            </div>
          </div>
          <div class="lj0fs jbv13 sv9mx"></div>

          <div class="yrzca mkoq3 ufpvb">
            <input type="submit" class="of1zd fm57z" v-bind:class="{ 'is-loading': ConfirmingAuth }"
              :disabled="form.processing" @click="ConfirmUserAuth" value="Log In" />
            <Link :href="route('auth.forgot.page')" class="n91zp umlu3 fhjfg">Forgot Password?</Link>
          </div>
        </form>
        <div class="lrcyb lj0fs jbv13 te269 ygcya">
          <button class="ryur2 of1zd zhbpg cwlxp ptb8c">
            <img src="/assets/img/google.png" width="20" alt="google_logo" class="x4jyd" style="
                        margin-top: -3px;
                        filter: drop-shadow(
                            0 1px 1px
                                rgb(0, 0, 0, 0.2)
                        );
                    " />
          </button>
          <button class="ryur2 of1zd t8ha5 cwlxp ptb8c">
            <i class="s6yan r1i8s x4jyd"></i>
          </button>
          <button class="of1zd r0khq cwlxp">
            <i class="s6yan fa-github x4jyd"></i>
          </button>
        </div>
      </div>
    </div>
  </Sidebar>
  <Footer />
</template>
