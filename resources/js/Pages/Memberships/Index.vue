<script setup>
import Navbar from '@/Components/LayoutParts/Navbar.vue'
import Sidebar from '@/Components/LayoutParts/Sidebar.vue'
import { usePage } from '@inertiajs/vue3';
import { route } from 'momentum-trail';

</script>

<template>
    <Navbar />
    <Sidebar>
            <div class="cell ">

        <div class=" mt-2 mb-2  card card-body  reg-card">
            <div class="col-md-8 align-center text-center-sm">
                <h3>What are you wating for?</h3>
                <p>Register to below.</p>
                <div class="buttons">
                    <a :href="route('auth.register.page')" class="btn btn-success"><i class="mr-1 fas fa-user-plus"></i>
                        Create Account</a>
                    <a :href="route('auth.login.page')" class="btn btn-warning"><i class="mr-1 fas fa-key"></i> Existing
                        User</a>
                </div>
            </div>
        </div>
    </div>
    </Sidebar>
</template>
