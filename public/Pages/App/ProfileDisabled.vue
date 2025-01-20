<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import { route } from 'momentum-trail';

interface Props {
    username: string
}

const props = defineProps<Props>()
</script>
<template>
<AppHead :pageTitle="props.username + '\'s Profile'" :description="props.username + '\'s Profile is disabled.'" :url="route(`user.profile`, { username: props.username })" />
  <Navbar />
  <Sidebar>
    <div class="u6xfc ogv1x">
      <div class="wruu4 bbztw">
        <div class="pfmvb">
          <i class="te269 fas fa-shield-plus iniww" style="font-size:80px;"></i>
          <h3>Nothing to see here</h3>
          <p>{{ props.username }} has their profile disabled.</p>
        </div>
      </div>
    </div>
  </Sidebar>
  <Footer />
</template>
