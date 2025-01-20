<script setup lang="ts">
import axios from "axios"; // Import Axios
import { route } from "momentum-trail"

import AppHead from "@/Components/AppHead.vue";
import { usePage } from "@inertiajs/vue3";
import "../../../css/style.css";

const { props } = usePage<any>();
</script>
<template>
  <AppHead pageTitle="Maintenence"
    :description="'We are working on ' + usePage<any>().props.site.name + ', We\'ll be back soon.'"
    :url="route(`maintenance.page`)" :maintenance="true" />
  <div class="kcuod" id="DeveloperCode">
    <form @submit.prevent="submitPassword">
      <div class="asyrh mbppf milj6">
        <div class="ncogr">
          <div class="lrcyb yrzca mkoq3 ufpvb">
            <div class="g6h8i umlu3">Developer Access</div>
            <button @click="showModal('DeveloperCode')" class="b87dk" data-toggle-modal="#DeveloperCode"
              style="margin-right: -10px">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="ncogr">
          <div class="ryur2">
            <div class="ut8sj aki3a iniww q611u">
              Enter Your Developer Code
            </div>
            <input class="mmzf9" type="password" placeholder="Developer Code" v-model="password" />
          </div>
          <div v-if="showError" class="ut8sj szivm umlu3">
            {{ errorMsg }}
          </div>
          <div class="ut8sj iniww umlu3">
            {{ usePage<any>().props.disclaimer }}
          </div>
        </div>
        <div class="m1f0h lrcyb mkoq3 wvlwi ncogr">
          <button class="of1zd r0khq" @click="showModal('DeveloperCode')">
            Cancel
          </button>
          <button class="of1zd ey2tb" type="submit">Enter</button>
        </div>
      </div>
    </form>
  </div>
  <main class="mnc96 wwwh7 wruu4 vhnj2 ayuam">
    <i class="fas fa-screwdriver-wrench zxpzz szahi" focusable="false" id="icon" @click="countClicks"></i>
    <h1 class="ap8ea zv0bn">We'll be back soon!</h1>
    <h3 class="hhdth iniww">We're performing some maintenance at the moment.</h3>

    <div class="m1f0h lrcyb mkoq3 justify-content-center hg4an ncogr">
      <a v-if="props.site.socials.discord" :href="props.site.socials.discord" class="ja9zv ifr2s iniww"
        content="Join us on Discord" v-tippy>
        <i class="s6yan r1i8s"></i>
      </a>
      <a v-if="props.site.socials.twitter" :href="props.site.socials.twitter" class="ja9zv ifr2s iniww"
        content="Follow us on Twitter" v-tippy>
        <i class="s6yan a80ns"></i>
      </a>
      <a v-if="props.site.socials.twitch" :href="props.site.socials.twitch" class="ja9zv ifr2s iniww"
        content="Follow us on Twitch" v-tippy>
        <i class="s6yan bngs8"></i>
      </a>
      <a v-if="props.site.socials.tiktok" :href="props.site.socials.tiktok" class="ja9zv ifr2s iniww"
        content="Follow us on TikTok" v-tippy>
        <i class="s6yan ov61b"></i>
      </a>
      <a v-if="props.site.socials.facebook" :href="props.site.socials.facebook" class="ja9zv ifr2s iniww"
        content="Follow us on Facebook" v-tippy>
        <i class="s6yan n9tu9"></i>
      </a>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      password: "",
      showError: false,
      errorMsg: "",
      activation: 0,
      classOptions: [
        "iniww",
        "w46i1",
        "szivm",
        "szahi",
        "j6kfv",
      ],
    };
  },
  methods: {
    countClicks() {
      this.activation++;
      this.changeClassByNumber("icon", this.activation, this.classOptions);
      if (this.activation >= 5) {
        this.showModal("DeveloperCode");
      }
    },
    showModal(modalId: string): void {
      const kcuod = document.getElementById(modalId);
      if (modal) {
        modal.classList.toggle("vuhhm");
      }
    },
    changeClassByNumber(element, val, classes) {
      for (const className of classes) {
        const iconwheel = document.getElementById(element);
        if (!iconwheel) {
          return; // Exit the loop if iconwheel is not found
        }
        if (classes.length) {
          iconwheel.classList.add(classes[val]); // Add 'iniww' class for val = 1
          return; // Exit the loop after adding the desired class
        } else if (val !== 1) {
          iconwheel.classList.remove(className); // Remove other classes if val != 1
        }
      }
    },

    submitPassword() {
      this.showError = false; // Reset error msrs8
      this.errorMsg = "";

      if (!this.password) {
        this.errorMsg = "Please provide a password.";
        this.showError = true;
        return;
      }

      axios
        .post(route(`maintenance.authenticate.password`), { password: this.password })
        .then((response) => {
          if (response.data.error) {
            this.errorMsg = response.data.error;
            this.showError = true;
          }
        })
        .catch((error) => {
          console.error(error);
          this.errorMsg = "An error occurred while processing the request.";
          this.showError = true;
        });
    },
  },
};

</script>
