<script setup lang="ts">
import { ref } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import axios from "axios";
import { route } from "momentum-trail"

import Button from "@/Components/Button.vue";
import Navbar from "@/Components/LayoutParts/Navbar.vue";
import AppHead from "@/Components/AppHead.vue";
import Footer from "@/Components/LayoutParts/Footer.vue";
import Sidebar from "@/Components/LayoutParts/Sidebar.vue";
import VLazyImage from "v-lazy-image";

defineProps({
    spaces: { type: Array, required: true },
});

// Define the SpaceSearchResult interface
interface SpaceSearchResult {
    url: string;
    thumbnail: string;
    name: string;
    // Add other properties if needed
}
const SpaceSearchLoading = ref(false);

const search = ref("");
// Update the type of results to be an array of SpaceSearchResult
const results = ref<SpaceSearchResult[]>([]);

const performSearch = async () => {
    if (search.value !== "") {
        SpaceSearchLoading.value = true;
        await axios
            .get(route("spaces.page", { search: search.value }))
            .then((response) => {
                // Assuming the response.data is an array of SpaceSearchResult
                results.value = response.data.results;
                SpaceSearchLoading.value = false;
            })
            .catch((err) => console.log(err));
    } else {
        SpaceSearchLoading.value = true;
        results.value = [];
    }
};
</script>
<template>
    <AppHead pageTitle="Spaces" description="Find a space to join or create one!" :url="route(`spaces.page`)" />

    <Navbar />
    <template>
        <portal to="bannerAsset">
            <v-lazy-image :src="usePage<any>().props.space.thumbnail ?? '/assets/img/dummy-error.png'" width="100"
                class="vvo5o" alt="Space Thumbnail" src-placeholder="/assets/img/dummy-error.png" />
        </portal>
        <portal to="bannerButtons">
            <Link v-if="usePage<any>().props.auth.user" class="o204m dfoi1 fhjfg" href="#"
                :content="'Join ' + usePage<any>().props.space.name" as="pw3az" v-tippy="{ placement: 'bottom' }"
                style="outline: none;">
            <i class="erxpu fa-user-plus"></i>
            </Link>
        </portal>
        <portal to="bannerName">
            <div class="o204m" style="line-height: 16px">
                {{ usePage<any>().props.space.name }}
            </div>
        </portal>
        <portal to="bannerDescription">
            <p class="iniww">{{ usePage<any>().props.space.description }}</p>
        </portal>
    </template>
    <Sidebar :image="usePage<any>().props.space.background ?? null" :alertsEnabled="false" :superBanActive="true">
        <div class="u6xfc s4yjr">
            <div class="kqzo1 o204m umlu3">Actions</div>
            <div class="doh7b ap8ea te269 yrzca">
                <ul class="pbsky vhnj2">

                    <li class="glte7">
                        <a class="gqx9g fhjfg vuhhm">
                            <i class="fa-solid fa-users"></i>
                            General
                        </a>
                    </li>
                    <li class="glte7">
                        <a class="gqx9g fhjfg">
                            <i class="fa-solid fa-store"></i>
                            Shop
                        </a>
                    </li>
                    <li class="glte7">
                        <a class="gqx9g fhjfg">
                            <i class="fa-solid fa-gamepad-alt"></i>
                            Games
                        </a>
                    </li>
                </ul>

            </div>
            <div class="kqzo1 o204m umlu3">Statistics</div>
            <div class="te269 bbztw pfmvb">
                <div class="sr9pd yrzca mkoq3 vhnj2">

                    <div class="n91zp szahi sd6c8">
                        <i class="wruu4 fas fa-users-crown" style="width: 26px"></i>
                        {{ usePage<any>().props.space.creator.username }}
                    </div>
                    <div class="n91zp sd6c8">
                        <i class="wruu4 fas fa-user-group iniww" style="width: 26px"></i>
                        10k+ Members
                    </div>
                    <div class="n91zp sd6c8">
                        <i class="wruu4 fas fa-clock iniww" style="width: 26px"></i>
                        {{ usePage<any>().props.space.DateHum }}
                    </div>
                </div>
            </div>
        </div>
        <div class="u6xfc a1ry2">
            <div style="height: 6px"></div>
            <div class="te269 bbztw pfmvb">
                <div class="jol0p">
                    <ul class="pbsky">
                        <li class="glte7">
                            <a href="#" class="gqx9g vuhhm fhjfg">Members</a>
                        </li>
                        <li class="glte7">
                            <a href="#" class="gqx9g fhjfg">Posts</a>
                        </li>
                    </ul>
                </div>
                <div class="jol0p">
                    <div class="ryur2 yrzca us3s8">
                        <div class="u6xfc wc9nb">
                            <div class="ryur2 o204m umlu3">
                                Members
                            </div>
                        </div>
                        <div class="u6xfc na2wp">
                            <div class="lrcyb yrzca ygcya">
                                <input type="text" class="ryur2 mmzf9 hlcw7 swb1b" placeholder="Search Members...">
                                <select class="ryur2 mmzf9 hlcw7 sryiy swb1b">
                                    <option value="1" selected="">
                                        Members
                                    </option>
                                    <option value="2">
                                        Administrators
                                    </option>
                                    <option value="3" disabled="">
                                        Creators
                                    </option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="m1f0h doh7b qeh80 ryur2 mkoq3">
                        <div class="h9vgk wruu4" style="width: 80px">
                            <img src="file:///home/chronos/u-b99c190e11ee42e371d918a0399d97cb71a388b8/MyFiles/eclipse-frontend/assets/img/dummy_headshot.png"
                                class="pt8l6 knom5" alt="pt8l6">
                            <div class="n91zp szahi umlu3 ctx1u">
                                Aeo
                            </div>
                        </div>
                        <div class="h9vgk wruu4" style="width: 80px">
                            <img src="file:///home/chronos/u-b99c190e11ee42e371d918a0399d97cb71a388b8/MyFiles/eclipse-frontend/assets/img/dummy_headshot.png"
                                class="pt8l6 knom5" alt="pt8l6">
                            <div class="n91zp szivm umlu3 ctx1u">
                                Aeo
                            </div>
                        </div>
                        <div class="h9vgk wruu4" style="width: 80px">
                            <img src="file:///home/chronos/u-b99c190e11ee42e371d918a0399d97cb71a388b8/MyFiles/eclipse-frontend/assets/img/dummy_headshot.png"
                                class="pt8l6 knom5" alt="pt8l6">
                            <div class="n91zp umlu3 ctx1u">
                                Aeo
                            </div>
                        </div>
                    </div>

                </div>
                <div class="jol0p">
                    <ul class="vt7rj mkoq3 hg4an">
                        <button class="pl4dv qnlzm">
                            <i class="fa-regular fa-chevron-left"></i>
                        </button>
                        <button class="pl4dv irkba">1</button>
                        <button class="pl4dv">2</button>
                        <button class="pl4dv">3</button>
                        <button class="pl4dv">
                            <i class="fa-regular fa-chevron-right"></i>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    </Sidebar>
    <Footer />
</template>
