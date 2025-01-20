<script setup lang="ts">
import AppHead from "@/Components/AppHead.vue";
import Navbar from "@/Components/LayoutParts/Navbar.vue";
import Footer from "@/Components/LayoutParts/Footer.vue";
import { computed, onMounted, ref } from "vue";
import { usePage } from "@inertiajs/vue3";
import { route } from "momentum-trail"

import PageLoader from "@/Components/Loaders/PageLoader.vue";

const uo1ir = computed<any>(() => usePage<any>().props.site);
const loading = ref(true);

const showLoading = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 5500); // Change 5000 to 5 seconds (1000 milliseconds per second)
};
defineProps({
    LandingItems: { type: Object },
    LandingPosts: { type: Object },
});
const Welcome = [
    {
        en: {
            message: `Welcome to ${usePage<any>().props.site.name}!`,
            desc: `${usePage<any>().props.site.name
                } is a collaborative 3D sandbox community. Work together to build amazing things and have fun along the way!`,
        },
        es: {
            message: `Bienvenido a ${usePage<any>().props.site.name}!`,
            desc: `${usePage<any>().props.site.name
                } es una comunidad colaborativa de sandbox 3D. ¡Trabajad juntos para construir cosas increíbles y divertíos en el camino!`,
        },
        ru: {
            message: `Добро пожаловать в ${usePage<any>().props.site.name}!`,
            desc: `${usePage<any>().props.site.name
                }— это совместное сообщество 3D-песочниц. Работайте вместе, чтобы создавать удивительные вещи, и получайте от этого удовольствие!`,
        },
        ja: {
            message: `${usePage<any>().props.site.name}へようこそ！`,
            desc: `${usePage<any>().props.site.name
                } は、協力的な 3D サンドボックス コミュニティです。協力して素晴らしいものを作り、その過程を楽しみましょう!`,
        },
    },
];
const lang = computed<any>(() => usePage<any>().props.locale);

onMounted(() => {
    showLoading();
});

function onImgErrorSmall(id) {
    let source = document.getElementById(id) as HTMLImageElement;
    source.src = "/assets/img/dummy-error.png";
    source.onerror = null;

    return true;
}
</script>
<style scoped src="@/Pages/landing.css"></style>
<template>
    <PageLoader :isLoading="loading" />
    <AppHead pageTitle="Welcome"
        description="Join in on the action today. Buy &amp; sell items, participate in spaces, make friends, and more."
        :url="route(`Welcome`)" />
    <Navbar :landing="true">
        <header class="uiewr drmkn h5g8s">
            <img src="assets/img/site-banners/stars-bg.png" style="z-index: 1" alt="background" />
            <div class="u6xfc juc77" style="position: relative; z-index: 3">
                <div class="h9vgk fotjp ml-4 mkoq3 jco49">
                    <div class="jco49">
                        <div class="edicy">
                            <!-- Page heading-->
                            <span class="ku9nu umlu3">
                                <span v-for="messages in Welcome">
                                    {{ messages[lang].message }}
                                </span>
                            </span>
                            <!--h1 class="bmztp">
            <v-lazy-image :src="site.logo" width="300px" />
          </h1-->
                            <h3 class="xm14j ap8ea tgq0u umlu3" v-for="desc in Welcome">
                                {{ desc[lang].desc }}
                            </h3>
                            <div class="h9vgk lrcyb ap8ea mkoq3">
                                <Link :href="route('auth.register.page')" class="of1zd z8uzx fm57z">
                                <i class="mr-1 fa-solid fa-person-to-portal bbo0a"></i>
                                Get Started
                                </Link>
                                <Link :href="route('auth.login.page')" class="of1zd z8uzx ey2tb">
                                <i class="mr-1 fa-solid fa-person-to-portal bbo0a"></i>
                                Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <nav v-if="usePage<any>().props.site_config.announcement" class="wlwmh k3oku f4qkk">
            <div class="v26ym wruu4   umlu3">
                <div class="lrcyb wruu4 yrzca mkoq3 hg4an">
                    <div>
                        {{ usePage<any>().props.site_config.announcement_message }}
                    </div>
                </div>
            </div>
        </nav>
        <main class="mnc96">
            <div class="justify-center us3s8 o5qdx hg4an bszft">
                <div v-if="LandingItems?.['data'] || LandingItems?.['data'].length < 5" class="u6xfc aeec0">
                    <div class="yrzca us3s8">
                        <div class="xm14j l85js u6xfc juc77">
                            <div class="kfnsj umlu3">
                                Customize your Character
                            </div>
                            <div>
                                Pick and choose from a collection of items
                                created by the community to create you own
                                unique character with.
                            </div>
                        </div>
                        <div class="u6xfc znzms">
                            <div class="us3s8 o5qdx bszft">
                                <div class="u6xfc n89vx om09p fnliq" v-for="item in LandingItems?.['data']">
                                    <Link :href="route(`store.item`, { id: item.id })
                                        " class="nn1dg">
                                    <div class="xm14j kqzo1 bbztw ytqs2 luhjr">
                                        <img :src="item.thumbnail" :id="item.name" :alt="item.name" class="img-fluid"
                                            @error="
                                                onImgErrorSmall(item.name)
                                                " />
                                    </div>
                                    <div class="jtcwt umlu3 ctx1u">
                                        {{ item.name }}
                                    </div>
                                    </Link>
                                    <div class="ut8sj umlu3">
                                        <span class="iniww">By </span>
                                        <Link :href="route(`user.profile`, {
                                            username:
                                                item.creator.username,
                                        })
                                            " class="szahi">{{ "@" + item.creator.username }}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="u6xfc aeec0">
                    <div class="kqzo1 yrzca us3s8">
                        <div class="u6xfc znzms">
                            <div class="us3s8 o5qdx bszft">

                                <div class="kqzo1 u6xfc wc9nb qzy08 fnliq" v-for="post in LandingPosts?.['data']">
                                    <div class="lrcyb te269 bbztw pfmvb mkoq3 vhnj2">
                                        <div class="lrcyb mkoq3">
                                            <div class="lrcyb mkoq3">
                                                <button class="lrcyb yrzca mkoq3 fhjfg">
                                                    <img class="pt8l6" src="assets/img/dummy_headshot.png" width="50"
                                                        height="50" alt="Avatar" />
                                                </button>
                                                <div class="sd6c8">
                                                    <div class="umlu3">
                                                        {{ post.title }}
                                                    </div>
                                                    <div class="n91zp umlu3 iniww">
                                                        By:
                                                        <Link
                                                            :href="route(`user.profile`, { username: post.creator.username })"
                                                            class="szahi">{{ post.creator.username }}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="fotjp jbv13 kqzo1 mkoq3 hg4an vhnj2">
                                            <div class="n91zp iniww umlu3 ctx1u">
                                                <span v-html="post.body" />
                                            </div>
                                        </div>
                                        <div class="k6fif sd6c8"></div>
                                        <Link :href="route(`forum.post`, { id: post.id, slug: post.slug })"
                                            class="h9vgk sd6c8 wruu4 of1zd ey2tb xjtlw ctx1u">View
                                        Post</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="ju65t epev9 u6xfc juc77">
                            <div class="kfnsj umlu3">
                                Socialize With Others
                            </div>
                            <div>
                                Head over to Discussion to socialize with all
                                kinds of users on
                                {{ site.name }}, from the funny to the
                                professional, and find new friends!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer :isLanding="true" />
    </Navbar>
</template>
