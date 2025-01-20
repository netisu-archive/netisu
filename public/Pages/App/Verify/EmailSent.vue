<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import { route } from 'momentum-trail';

</script>

<template>
    <AppHead pageTitle="Email Sent" description="Email Sent"
        :url="route('Welcome')" />
    <Navbar :landing="false" />
    <Sidebar>
        <div class="u6xfc ogv1x">
            <div class="wruu4 bbztw">
                <div class="pfmvb">
                    <i class="te269 erxpu fa-check-circle szahi" style="font-size:80px;"></i>
                    <h3>Email Sent</h3>
                    <p class="iniww n91zp">If you dont see the email, check your spam folder.</p>
                </div>
            </div>
        </div>
    </Sidebar>
    <Footer />
</template>
