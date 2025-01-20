<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import { usePage } from '@inertiajs/vue3';

</script>

<template>
<Navbar/>
<Sidebar>
    <div class="u6xfc pavd8 hivxp" id="mainframe">
        <div class="bbztw pfmvb">
            <div class="o204m szahi">Games are coming soon</div>
            <div class="sv9mx"></div>
            <p>
              Games are currently coming soon, our development team are working
              very hard to bring you a stable client, if you have any questions,
              you can email our support team over at <a :href="'mailto:' + usePage<any>().props.site?.production?.domains?.support">{{ usePage<any>().props.site?.production?.domains?.support }}</a>
            </p>
          </div>
        </div>
</Sidebar>
<Footer/>
</template>
