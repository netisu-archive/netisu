<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import AeoPagination from '@/Components/Pagination.vue';
import { route } from "momentum-trail"

import { ref } from 'vue';
import axios from 'axios';
import { useForm, usePage, usePoll } from '@inertiajs/vue3';
import VLazyImage from 'v-lazy-image';

defineProps<{
    topic?: Object,
    post?: Array<any>,
    replies?: Array<any>,
}>()

const form = useForm({
    body: '',
});

const submit = () => {
    axios.get(`/sanctum/csrf-cookie`).then(() => {
        form.post(route(`forum.reply.validate`, { id: usePage<any>().props.post.id }), {
            onFinish: () => form.reset('body'),
        });
    });
};

const isHidden = ref(true);
usePoll(10000, { only: ['replies'] })
</script>

<style>
.headerDivider {
    border-left: 1px solid #38546d;
    border-right: 1px solid #16222c;
    height: 80px;
    position: absolute;
    right: 249px;
    top: 10px;
}
</style>
<template>
    <Navbar />
    <Sidebar>
        <div class="cell medium-11">
            <nav class="alert alert-info py-1 alert-landing">
                <div class="text-center fw-semibold">
                    <div class="gap-2 flex-container">
                        <div>
                            <div class="gap-2 align-middle flex-container">
                                <v-lazy-image :src="usePage<any>().props.post.creator.headshot" width="40"
                                    class="headshot flex-child-shrink" alt="Avatar"
                                    src-placeholder="/assets/img/dummy_headshot.png" />
                                <div class="text-start">
                                    <div class=" text-xl fw-semibold">{{ usePage<any>().props.post.title }} <span
                                                v-if="usePage<any>().props.post.pinned"><i
                                                    class="text-danger fas fa-thumbtack"></i></span> <span
                                                v-if="usePage<any>().props.post.locked"><i
                                                    class="text-warning fas fa-lock"></i></span> </div>
                                    <div class=" text-xs text-base fw-semibold">Posted by: {{ usePage<any>
                                        ().props.post.creator.username }} <span>&bullet;</span> {{ usePage<any>
                                                ().props.post.DateHum
                                                }} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="card card-body">
                <div class="gap-2  flex-container">
                    <div class="gap-2 mb-3 align-middle flex-container flex-dir-column">
                        <Link :href="route('user.profile', { username: usePage<any>().props.post.creator.username })">
                        <v-lazy-image :src="usePage<any>().props.post.creator.thumbnail" style="max-width:136px"
                            class="border img-fluid" :alt="usePage<any>().props.post.creator.username"
                            src-placeholder="/assets/img/dummy.png" /> </Link>
                        <div class="text-center" style="line-height: 16px">
                            <div class="fw-semibold">{{ usePage<any>().props.post.creator.display_name }}
                            </div>
                            <div class="text-xs fw-semibold text-muted">
                                {{ '@' + usePage<any>().props.post.creator.username }}
                            </div>
                        </div>
                    </div>
                    <div class="divider verticalDivider"></div>
                    <div class="card-body w-100">
                        <div class="gap-1 flex-container flex-dir-column">
                            <div class="mb-2" v-html="usePage<any>().props.post.body" style="white-space: pre-wrap;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mx-1 my-3 divider"></div>
                <div v-if="usePage<any>().props.replies.data.length">
                    <div v-for="reply in usePage<any>().props.replies.data">
                        <div class="gap-2 flex-container">
                            <div class="gap-2 mb-3 align-middle flex-container flex-dir-column">
                                <Link :href="route('user.profile', { username: reply.creator.username })">
                                <v-lazy-image :src="reply.creator.thumbnail" style="max-width:136px"
                                    class="border img-fluid" :alt="reply.creator.username"
                                    src-placeholder="assets/img/dummy.png" />
                                </Link>
                                <div class="text-center" style="line-height: 16px">
                                    <div class="fw-semibold">{{ reply.creator.display_name }}
                                    </div>
                                    <div class="text-xs fw-semibold text-muted">
                                        {{ '@' + reply.creator.username }}
                                    </div>
                                </div>
                            </div>
                            <div class="divider verticalDivider"></div>
                            <div class=" w-100">
                                <div class=" flex-container flex-dir-column">
                                    <div class="text-sm text-muted fw-semibold"><i class="fas fa-clock"></i>&nbsp;
                                        {{ reply.DateHum }}</div>
                                    <div class="mb-2" v-html="reply.body" style="white-space: pre-wrap;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="divider verticalDivider"></div>
                    </div>
                </div>
                <AeoPagination v-if="usePage<any>().props.replies.data.length"
                    v-bind:pagedata="usePage<any>().props.replies" />
            </div>
            <div v-if="!isHidden" class="cell medium-9">
                <div class="card card-body">
                    <div class="text-xl text-danger bg-primary">Reply to {{ usePage<any>().props.post.title }}</div>
                    <div class="mx-1 my-3 divider"></div>
                    <form @submit.prevent="submit">
                        <label for="post-body" class="mb-2 text-xs fw-bold text-uppercase">Reply Body</label>
                        <textarea id="post-body" class="form" v-model="form.body" placeholder="Body"
                            maxlength="4096"></textarea>
                        <button class="btn btn-success btn-block" type="submit"
                            :disabled="form.processing">Create</button>
                    </form>
                </div>
            </div>
            <div class="section flex-container align-center">
                <a v-on:click="isHidden = !isHidden" v-if="usePage<any>().props.auth.user" class="btn btn-success"><i
                        class="fas fa-reply"></i>&nbsp;Reply</a>
            </div>
        </div>
    </Sidebar>
    <Footer />
</template>
