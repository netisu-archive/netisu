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

const message = ref('');

const sendEmail = () => {
    axios.get(`/sanctum/csrf-cookie`).then((message) => {
        axios.post(route(`verification.send`)).then((message) => {
            message.value = message
        });
    });
}
</script>

<template>
    <AppHead pageTitle="Email Verification" description="Please verify your email to continue."
        :url="route('Welcome')" />
    <Navbar :landing="false" />
    <Sidebar>
        <div class="cell medium-7">
            <div class="text-center card">
                <div class="card-body">
                    <i class="mb-3 fad fa-envelope-open-text text-muted" style="font-size:80px;"></i>
                    <h3>Email Verification</h3>
                    <p class="text-muted text-sm">{{ message ? message  : 'This will take less than 5 minutes.'}}</p>
                    <div class="min-w-0 gap-2 mt-3 flex-container align-center">
                        <form @submit.prevent="sendEmail">
                            <button type="submit" class="btn btn-xs btn-success">
                                <i class="fad fa-badge-check"></i>
                                Verify
                            </button>
                            <button type="button" class="btn btn-xs btn-danger">
                                <i class="fad fa-right-from-bracket"></i>
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
