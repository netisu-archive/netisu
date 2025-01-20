<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import AppHead from '@/Components/AppHead.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import { route } from "momentum-trail"

import { Link, usePage } from '@inertiajs/vue3';
import VLazyImage from "v-lazy-image";
</script>

<template>
    <AppHead pageTitle="Users" description="View all users here." :url="route(`user.page`)" />
    <Navbar />
    <Sidebar>
        <div class="u6xfc c7aof">
            <div class="ryur2 t8wm3 umlu3 hg4an">Users</div>
            <div class="us3s8 hg4an">
                <div class="c2ym1 te269 row bbztw dko7a pfmvb hcm3l" :class="[user.online ? 'cino6' : 'offline']"
                    v-for="user in usePage<any>().props.users.data" :key="usePage<any>().props.users.id">
                    <div class="lrcyb yrzca mkoq3">
                        <Link :href="route('user.profile', { username: user.username })">
                        <v-lazy-image :src="user.avatar" width="45"
                            class="border img-fluid pt8l6 rounded-circle border-secondary bg-dark"
                            :alt="user.username" />
                        </Link>
                        <div class="m1f0h col-md-4 d-flex justify-content-center align-content-start"
                            style="flex-direction: column">
                            <div class="aszip">
                                <Link :href="route('user.profile', { username: user.username })" class="wxza1">
                                {{ user.dname }}
                                </Link>
                                <div></div>
                                <Link :href="route('user.profile', { username: user.username })"
                                    class="n91zp umlu3 jtcwt">
                                {{ '@' + user.username }}
                                </Link>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="!usePage<any>().props.users.data?.['length']" class="szivm umlu3">ERR T100: No users found</div>
            <div v-if="usePage<any>().props.users.data?.['length']" class="ighq6 jbv13 sv9mx"></div>
            <Pagination v-if="usePage<any>().props.users.data?.['length']" v-bind:pagedata="usePage<any>().props.users">
            </Pagination>
        </div>
    </Sidebar>
    <Footer />
</template>
