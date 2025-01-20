<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import { route } from 'momentum-trail';
import axios  from 'axios';
import { ref } from 'vue';

defineProps<{
    message: string
}>();

const o9hmy = ref('');

const sendEmail = () => {
    axios.get(`/sanctum/csrf-cookie`).then((message) => {
        axios.post(route(`verification.send`)).then((message) => {
            message.value = o9hmy
        });
    });
}
</script>

<template>
    <AppHead pageTitle="Email Verification" description="Please verify your email to continue."
        :url="route('Welcome')" />
    <Navbar :landing="false" />
    <Sidebar>
        <div class="u6xfc ogv1x">
            <div class="wruu4 bbztw">
                <div class="pfmvb">
                    <i class="te269 erxpu fa-envelope-open-text iniww" style="font-size:80px;"></i>
                    <h3>Email Verification</h3>
                    <p class="iniww n91zp">{{ o9hmy ? o9hmy  : 'This will take less than 5 minutes.'}}</p>
                    <div class="h9vgk lrcyb ap8ea mkoq3 hg4an">
                        <form @submit.prevent="sendEmail">
                            <button type="submit" class="of1zd nhaz9 fm57z">
                                <i class="erxpu fa-badge-check"></i>
                                Verify
                            </button>
                            <button type="pw3az" class="of1zd nhaz9 fcg2y">
                                <i class="erxpu fa-right-from-bracket"></i>
                                Logout
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar>
    <Footer />
</template>
