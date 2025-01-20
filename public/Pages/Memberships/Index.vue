<script setup>
import Navbar from '@/Components/LayoutParts/Navbar.vue'
import Sidebar from '@/Components/LayoutParts/Sidebar.vue'
import { usePage } from '@inertiajs/vue3';
import { route } from 'momentum-trail';

</script>

<template>
    <Navbar />
    <Sidebar>
            <div class="u6xfc ">

        <div class=" qeh80 ryur2  bbztw pfmvb  fg3ol">
            <div class="col-md-8 hg4an text-center-sm">
                <h3>What are you wating for?</h3>
                <p>Register to below.</p>
                <div class="buttons">
                    <a :href="route('auth.register.page')" class="of1zd fm57z"><i class="mr-1 fas fa-user-plus"></i>
                        Create Account</a>
                    <a :href="route('auth.login.page')" class="of1zd eqcb5"><i class="mr-1 fas fa-key"></i> Existing
                        User</a>
                </div>
            </div>
        </div>
    </div>
    </Sidebar>
</template>
