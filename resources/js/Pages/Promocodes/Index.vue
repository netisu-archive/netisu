<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import { route } from 'momentum-trail';

import { usePage, useForm } from '@inertiajs/vue3';
</script>

<template>
    <Navbar>
        <Sidebar>
            <div class="cell medium-3">
                <div class="text-center show-for-medium">
                    <p class="fw-semibold text-xl text-warning">Need Some help?</p>
                    <p class="text-muted">
                        Promocodes can be found in a lot of defferent places! Check the forums for posts from staff
                        accounts, check new items to see if they have any clues, or check out our socials (<a
                            v-if="usePage<any>().props.site.socials.discord"
                            :href="usePage<any>().props.site.socials.discord" class="text-sm footer-media text-muted"
                            content="Discord" v-tippy>
                            <i class="fab fa-discord"></i>
                        </a>
                        <a v-if="usePage<any>().props.site.socials.twitter"
                            :href="usePage<any>().props.site.socials.twitter" class="text-sm footer-media text-muted"
                            content="Twitter" v-tippy>
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a v-if="usePage<any>().props.site.socials.twitch"
                            :href="usePage<any>().props.site.socials.twitch" class="text-sm footer-media text-muted"
                            content="Twitch" v-tippy>
                            <i class="fab fa-twitch"></i>
                        </a>
                        <a v-if="usePage<any>().props.site.socials.tiktok"
                            :href="usePage<any>().props.site.socials.tiktok" class="text-sm footer-media text-muted"
                            content="TikTok" v-tippy>
                            <i class="fab fa-tiktok"></i>
                        </a>
                        <a v-if="usePage<any>().props.site.socials.facebook"
                            :href="usePage<any>().props.site.socials.facebook" class="text-sm footer-media text-muted"
                            content="Facebook" v-tippy>
                            <i class="fab fa-facebook"></i>
                        </a>)
                        for codes!
                    </p>
                    <p class="pt-5 text-muted">
                        Remember, promocodes are case-sensitive and can only be redeemed <span
                            class="text-info">once</span> per account. If you have any issues, please <a
                            :href="'mailto:' + usePage<any>().props.site.production.domains.support">contact
                            support.</a>
                    </p>
                    <p class="pt-5 text-muted">
                        Additionally, we have written up some information on promocodes and items in general on the <a
                            href="#">Items Guide.</a>
                    </p>
                </div>
            </div>
            <div class="cell medium-9">
                <div class="mb-3 card card-body">
                    <div class="mb-3">
                        <button class="btn btn-xs btn-info">
                            test
                        </button>
                    </div>
                </div>
                <div class="mb-3 card card-body">
                    <div class="mb-3">
                        <p class="fw-semibold text-xl">
                            Available Promocode Items
                        </p>
                        <div class="divider mx-1 my-2"></div>
                        <p class="fw-semibold text-sm text-muted">
                            These exclusive items will not be available forever, so make sure to redeem them before they
                            expire!
                        </p>
                        <div class="mt-2 mb-2" v-for="item in usePage<any>().props.items">
                            <div class="gap-2 align-middle flex-container">
                                <img :src="item.thumbnail" width="100" height="70" style="background:var(--body-bg);border: 3px solid var(--white);border-radius:10%;" />
                                <div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start"
                                    style="flex-direction: column;">
                                    <div class="text-start">
                                        <Link class="text-md" :href="route(`store.item`, { id: item.id })">
                                            {{ item.name }}
                                        </Link>
                                        <div></div>
                                        <p class="text-sm fw-semibold">
                                            {{ 'Expires on: ' + item.expiry }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    </Navbar>
    <Footer />
</template>
