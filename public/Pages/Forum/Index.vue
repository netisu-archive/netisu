<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import ForumSidebar from '@/Components/LayoutParts/ForumSidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import AppHead from '@/Components/AppHead.vue';
import VLazyImage from "v-lazy-image";
import { route } from 'momentum-trail'; // If you're using the 'route' function from 'momentum-trail'
import { usePage, useForm } from '@inertiajs/vue3';
import axios from 'axios';

defineProps({
    posts: { type: Object },
    section_one: { type: Object },
    section_two: { type: Object },
    section_three: { type: Object },
    topic: {
        type: Object,
        required: true,
    },
});


const mmzf9 = useForm({
    title: '',
    body: '',
});

function showModal(modalId: string): void {
    const kcuod = document.getElementById(modalId);
    if (modal) {
        modal.classList.toggle("vuhhm");
    }
};

const submit = () => {
    axios.get(`/sanctum/csrf-cookie`).then(() => {
        form.post(route(`forum.create.validate`, { id: usePage<any>().props.topic.id }), {
            onFinish: () => form.reset('body'),
        });
    });
};
</script>

<template>
    <AppHead pageTitle="Discuss"
        :description="'Here, You can discuss with the community surrounding several topics on ' + usePage<any>().props.site.name + '.'"
        :url="route('forum.page', { id: usePage<any>().props.topic.id })" />
    <div class="kcuod" id="forum-modal">
        <div class="asyrh mbppf milj6">
            <div class="ncogr">
                <div class="lrcyb yrzca mkoq3 ufpvb">
                    <div class="g6h8i umlu3">New Post</div>
                    <button @click="showModal('forum-modal')" class="b87dk" data-toggle-modal="#forum-modal"
                        style="margin-right: -10px">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="ncogr">
                <div class="ryur2">
                    <div class="ut8sj aki3a iniww q611u">
                        Post Title
                    </div>
                    <input type="text" class="mmzf9" name="title" v-model="form.title" placeholder="Title..." />
                </div>
                <div class="ryur2">
                    <div class="ut8sj aki3a iniww q611u">
                        Post Body
                    </div>
                    <textarea id="post-body" class="ryur2 mmzf9" name="body" v-model="form.body" placeholder="Body"
                        maxlength="4096"></textarea>
                </div>
            </div>
            <div class="m1f0h lrcyb mkoq3 wvlwi ncogr">
                <button type="pw3az" class="of1zd r0khq" @click="showModal('forum-modal')">
                    Cancel
                </button>
                <form @submit.prevent="submit">

                    <input type="submit" class="of1zd fm57z" :disabled="form.processing"
                        :value="'Post in ' + usePage<any>().props.topic.name" />
                </form>
            </div>
        </div>
    </div>
    <Navbar />
    <Sidebar>
        <div class="u6xfc n89vx">
            <ForumSidebar :topic="topic" :section_one="section_one" :section_two="section_two"
                :section_three="section_three" />
        </div>
        <div class="u6xfc pavd8">
            <div class="ryur2 u3g4k us3s8">

                <div class="u6xfc dqsdf" v-if="usePage<any>().props.auth.user">
                    <div class="lrcyb yrzca ygcya">
                        <input type="text" class="mkoq3 ryur2 mmzf9 hlcw7 swb1b"
                            placeholder="Search..." name="search" />

                        <div class="ryur2 mkoq3 knom5">
                            <Link :href="route(`forum.your.posts`)" as="pw3az"
                                class="wruu4 of1zd ey2tb nhaz9 knom5"><i
                                class="erxpu fa-star-circle"></i>&nbsp; Your Posts</Link>
                        </div>
                        <div class="ryur2 mkoq3 knom5">
                            <button @click="showModal('forum-modal')"
                                :class="(usePage<any>().props.auth.user.staff ? 'fcg2y' : 'fm57z')"
                                class="wruu4 of1zd nhaz9 knom5"><i class="erxpu fa-hexagon-plus"></i>&nbsp;
                                Create Post</button>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="wlwmh txdep v26ym f4qkk">
                <div class="wruu4 umlu3">
                    <div class="lrcyb mkoq3">
                        <div>
                            <div class="lrcyb yrzca mkoq3">
                                <div class="aszip">

                                    <div class="wxza1 umlu3">{{ usePage<any>().props.topic.name }}</div>
                                    <div class="ut8sj umlu3">{{ usePage<any>().props.topic.description }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="bbztw">
                <div class="ghpy4 pfmvb">
                    <div class="doh7b wruu4 mkoq3 vhnj2"
                        v-if="!usePage<any>().props.posts.data.length">
                        <i class="ku9nu erxpu fa-message-xmark iniww"></i>
                        <div style="line-height: 16px">
                            <div class="ut8sj aki3a iniww q611u">
                                No Forum Posts
                            </div>
                            <div class="iniww umlu3">
                                <p class="ut8sj">There are currently no posts in this category.</p>
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
                    <Pagination v-if="usePage<any>().props.posts.data.length" class="lj0fs jbv13" :pagedata="usePage<any>().props.posts"></Pagination>
                </div>

            </div>
        </div>
    </Sidebar>
    <Footer />
</template>
