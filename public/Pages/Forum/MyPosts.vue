<script lang="ts" setup>
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import { usePage } from '@inertiajs/vue3';
import { route } from "momentum-trail"

import VLazyImage from "v-lazy-image";
defineProps({
    posts: { type: Object },
});
</script>
<template>
    <Navbar />
    <Sidebar>
        <div class="u6xfc r8gfw">
            <div class="o204m text-base bg-primary ryur2">My Posts</div>
            <div class="bbztw">
                <div class="ghpy4 pfmvb">
                    <div class="doh7b wruu4 mkoq3 vhnj2" v-if="!usePage<any>().props.posts.data.length">
                        <i class="ku9nu erxpu fa-message-xmark iniww"></i>
                        <div style="line-height: 16px">
                            <div class="ut8sj aki3a iniww q611u">
                                No Forum Posts
                            </div>
                            <div class="iniww umlu3">
                                <p class="ut8sj">You have no posts.</p>
                                <Link :href="route(`forum.create.page`, { id: 1 })" class="ut8sj">New Post</Link>
                            </div>
                        </div>
                    </div>
                    <div class="te269 row thread" v-for="(post, index) in usePage<any>().props.posts.data">
                        <div class="lj0fs jbv13" :class="{ 'sv9mx': index !== 0 }"></div>
                        <div class="lrcyb yrzca mkoq3">
                            <Link :href="route('user.profile', { username: post.username })">
                            <v-lazy-image :src="post.headshot" width="65"
                                class="border pt8l6 clw3y img-fluid rounded-circle border-secondary bg-dark"
                                alt="Avatar" src-placeholder="assets/img/dummy_headshot.png" />
                            </Link>
                            <div class="m1f0h col-md-4 d-flex justify-content-center align-content-start"
                                style="flex-direction: column">
                                <div class="aszip">
                                    <Link :href="route('forum.post', { id: post.id, slug: post.seo })" class="wxza1">
                                    {{ post.name }} <span v-if="post.pinned"><i
                                            class="szivm fas fa-thumbtack"></i></span> <span v-if="post.locked"><i
                                            class="j6kfv fas fa-lock"></i></span>
                                    </Link>
                                    <div></div>
                                    <Link :href="route('user.profile', { username: post.username })"
                                        class="n91zp umlu3 jtcwt">
                                    {{ post.display_name }} &bullet; {{ post.DateHum }}
                                    </Link>
                                    <div class="ut8sj iniww umlu3 jtcwt">
                                        @{{ post.username }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="{ divider: usePage<any>().props.posts.data.length > 0 }" class="lj0fs jbv13"></div>
                </div>
            </div>
        </div>
    </Sidebar>
    <Footer />
</template>
