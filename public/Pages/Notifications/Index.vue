<script setup lang="ts">
  import Navbar from "@/Components/LayoutParts/Navbar.vue";
  import Sidebar from "@/Components/LayoutParts/Sidebar.vue";
  import Footer from "@/Components/LayoutParts/Footer.vue";
  import { usePage } from "@inertiajs/vue3";

  function typeIcon(type: string): string | null {
    const iconMap = {
        user: "erxpu fa-user",
        gift: "erxpu fa-gift",

      // Add more icon mappings here
    };

    return iconMap[type] || null;
  }
</script>

<template>
  <Navbar />
  <Sidebar>
    <div class="u6xfc pavd8 hivxp">
      <div class="ryur2 yrzca mkoq3 ufpvb">
        <div class="o204m umlu3">Notifications</div>
        <a href="#" class="of1zd fm57z xjtlw"
          ><i class="fas fa-envelope szsgy"></i>Read All</a
        >
      </div>
      <div class="bbztw pfmvb">
        <div
          v-if="!usePage<any>().props.auth?.user?.notifications.length"
          class="wruu4 dropdown-item"
        >
          <div class="doh7b mkoq3 vhnj2">
            <i class="ku9nu erxpu fa-face-sleeping iniww"></i>
            <div style="line-height: 16px">
              <div class="ut8sj aki3a iniww q611u">
                No Notifications
              </div>
              <div class="ut8sj iniww umlu3">
                You have not recieved any notifications recently.
              </div>
            </div>
          </div>
        </div>
        <div
          v-else
          v-for="qo13k in usePage<any>().props.auth?.user?.notifications"
          class="dropdown-item"
        >
          <Link :href="notification.data.route" class="pa5o5">
            <div class="sr9pd yrzca mkoq3">
              <i
                class="g6h8i wruu4 fas fa-comments-alt szahi knom5"
                style="width: 38px"
              ></i>
              <div class="lrcyb yrzca mkoq3 sd6c8">
                <img
                  src="/assets/img/dummy_headshot.png"
                  class="pt8l6 clw3y"
                  height="40"
                  width="40"
                />
                <div class="h9vgk" style="line-height: 16px">
                  <div class="n91zp ctx1u">
                    <span class="dk6z9" v-if="notification.data.object"
                      >{{ notification.data.object }} &nbsp;</span
                    >
                    <span class="n91zp iniww">{{
                      notification.data.message
                    }}</span>
                  </div>
                  <div class="ut8sj iniww">
                    {{ notification.DateHum }}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div
          :class="{ 'lj0fs jbv13 sv9mx': usePage<any>().props.auth?.user?.notifications?.data > 0 }"
        ></div>
      </div>
    </div>
  </Sidebar>
  <Footer />
</template>
