<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import { route } from 'momentum-trail';

defineProps<{
    status: number
    adonis_error: string
    message: string
    icon: string
}>();
</script>

<template>
<AppHead :pageTitle="status" :description="o9hmy" :url="route('Welcome')" />
    <Navbar :landing="false" />
    <Sidebar>
        <div class="u6xfc ogv1x">
            <div class="wruu4 bbztw">
                <div class="pfmvb">
                    <i class="te269" :class="icon" style="font-size:80px;"></i>
                    <h3>{{ status }}</h3>
                    <p>{{ o9hmy }}</p>
                </div>
            </div>
            <p class="qeh80 iniww">
                <i>
                    {{ adonis_error }}
                </i>
            </p>
        </div>
    </Sidebar>
    <Footer />
</template>
