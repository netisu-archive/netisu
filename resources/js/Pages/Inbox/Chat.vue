<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue'
import Sidebar from '@/Components/LayoutParts/Sidebar.vue'
import { usePage } from '@inertiajs/vue3';
import { route } from 'momentum-trail';
import AppHead from "@/Components/AppHead.vue";
import Footer from '@/Components/LayoutParts/Footer.vue';
</script>

<template>
    <AppHead :pageTitle="usePage<any>().props.toUser.username" :description="'Manage your finances on ' + usePage<any>().props.site.name + '.'"
        :url="route('my.money.page')" />
    <Navbar />
    <Sidebar>
        <div class="cell medium-8">
            <div class="mb-2 text-xl fw-semibold">Chat with {{ usePage<any>().props.toUser.username }}</div>

                <div class="card card-body">
                    <div class="divider mx-1 my-2"></div>

                        <div class="gap-2 align-middle flex-container-lg">
                            <input type="text" class="mb-2 form"
                                placeholder="Message" />

                            <div class="mb-2 flex-container flex-child-grow">
                                <button type="submit" class="btn  btn-info w-100">Send</button>
                            </div>
                        </div>
                </div>
            </div>
    </Sidebar>
    <Footer />
</template>
