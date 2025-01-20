<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import AeoPagination from '@/Components/Pagination.vue';
import { route } from "momentum-trail"

import { ref } from 'vue';
import axios from 'axios';
import { useForm, usePage } from '@inertiajs/vue3';
import VLazyImage from 'v-lazy-image';

defineProps<{
    topic?: Object,
    post?: Array<any>,
    replies?: Array<any>,
}>()

const mmzf9 = useForm({
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
        <div class="u6xfc l9zul">
            <nav class="wlwmh txdep v26ym f4qkk">
                <div class="wruu4 umlu3">
                    <div class="lrcyb mkoq3">
                        <div>
                            <div class="lrcyb yrzca mkoq3">
                                <v-lazy-image :src="usePage<any>().props.post.creator.headshot" width="40"
                                    class="pt8l6 clw3y" alt="Avatar" src-placeholder="/assets/img/dummy_headshot.png" />
                                <div class="aszip">
                                    <div class=" o204m umlu3">{{ usePage<any>().props.post.title }} <span
                                                v-if="usePage<any>().props.post.pinned"><i
                                                    class="szivm fas fa-thumbtack"></i></span> <span
                                                v-if="usePage<any>().props.post.locked"><i
                                                    class="j6kfv fas fa-lock"></i></span> </div>
                                    <div class=" ut8sj text-base umlu3">Posted by: {{ usePage<any>
                                        ().props.post.creator.username }} <span>&bullet;</span> {{ usePage<any>
                                                ().props.post.DateHum
                                                }} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="bbztw pfmvb">
                <div class="lrcyb  mkoq3">
                    <div class="lrcyb te269 yrzca mkoq3 vhnj2">
                        <Link :href="route('user.profile', { username: usePage<any>().props.post.creator.username })">
                        <v-lazy-image :src="usePage<any>().props.post.creator.thumbnail" style="max-width:136px"
                            class="border img-fluid" :alt="usePage<any>().props.post.creator.username"
                            src-placeholder="/assets/img/dummy.png" /> </Link>
                        <div class="wruu4" style="line-height: 16px">
                            <div class="umlu3">{{ usePage<any>().props.post.creator.display_name }}
                            </div>
                            <div class="ut8sj umlu3 iniww">
                                {{ '@' + usePage<any>().props.post.creator.username }}
                            </div>
                        </div>
                    </div>
                    <div class="sv9mx verticalDivider"></div>
                    <div class="pfmvb sd6c8">
                        <div class="sr9pd mkoq3 vhnj2">
                            <div class="ryur2" v-html="usePage<any>().props.post.body" style="white-space: pre-wrap;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lj0fs jbv13 sv9mx"></div>
                <div v-if="usePage<any>().props.replies?.data.length">
                    <div v-for="reply in usePage<any>().props.replies.data" class="pfmvb">
                        <div class="lrcyb yrzca mkoq3">
                            <div class="lrcyb te269 yrzca mkoq3 vhnj2">
                                <Link :href="route('user.profile', { username: reply.creator.username })">
                                <v-lazy-image :src="reply.creator.thumbnail" style="max-width:136px"
                                    class="border img-fluid" :alt="usePage<any>().props.post.creator.usernam"
                                    src-placeholder="assets/img/dummy.png" />
                                </Link>
                                <div class="wruu4" style="line-height: 16px">
                                    <div class="umlu3">{{ reply.creator.display_name }}
                                    </div>
                                    <div class="ut8sj umlu3 iniww">
                                        {{ '@' + reply.creator.username }}
                                    </div>
                                </div>
                            </div>
                            <div class="sv9mx verticalDivider"></div>
                            <div class="bbztw pfmvb sd6c8">
                                <div class="sr9pd mkoq3 vhnj2">
                                    <div class="ryur2 n91zp iniww umlu3"><i class="fas fa-clock"></i>&nbsp;
                                        Reply by:
                                        {{ reply.creator.username }}, <b>{{ reply.DateHum }}</b></div>
                                    <div class="ryur2" v-html="reply.body" style="white-space: pre-wrap;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="sv9mx verticalDivider"></div>
                    </div>
                </div>
                <AeoPagination v-bind:pagedata="usePage<any>().props.replies.data" />
            </div>
            <div v-if="!isHidden" class="u6xfc a1ry2">
                <div class="bbztw pfmvb">
                    <div class="o204m szivm bg-primary">Reply to {{ usePage<any>().props.post.title }}</div>
                    <div class="lj0fs jbv13 sv9mx"></div>
                    <form @submit.prevent="submit">
                        <label for="post-body" class="ryur2 ut8sj aki3a q611u">Reply Body</label>
                        <textarea id="post-body" class="mmzf9" v-model="form.body" placeholder="Body"
                            maxlength="4096"></textarea>
                        <button class="of1zd fm57z cwlxp" type="submit" :disabled="form.processing">Create</button>
                    </form>
                </div>
            </div>
            <div class="jol0p mkoq3 hg4an">
                <a v-on:click="isHidden = !isHidden" v-if="usePage<any>().props.auth.user" class="of1zd fm57z"><i
                        class="fas fa-reply"></i>&nbsp;Reply</a>
            </div>
        </div>
    </Sidebar>
    <Footer />
</template>
