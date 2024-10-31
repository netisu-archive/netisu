<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import { route, current } from 'momentum-trail';
import { usePage } from '@inertiajs/vue3';

defineProps<{
    status: number
    adonis_error: string
    message: string
    icon: string
}>();
</script>

<template>
<AppHead pageTitle="Email Verification" description="Please verify your email to continue." :url="route('Welcome')" />
    <Navbar :landing="false" />
    <Sidebar>
        <div class="cell medium-7">
            <div class="text-center card">
                <div class="card-body">
                    <i class="mb-3 fad fa-envelope-open-text text-muted" style="font-size:80px;"></i>
                    <h3>Email Verification</h3>
                    <p class="text-muted text-sm">This will take less than 5 minutes</p>
                    <div class="min-w-0 gap-2 mt-3 flex-container align-center">

                    <button class="btn btn-xs btn-success"><i class="fad fa-badge-check"></i> Verify</button>
                    <button class="btn btn-xs btn-danger"><i class="fad fa-right-from-bracket"></i> Logout</button>
                        </div>
                </div>
            </div>
        </div>
    </Sidebar>
    <Footer />
</template>
