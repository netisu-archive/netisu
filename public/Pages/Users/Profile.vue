<script setup lang="ts">
import axios from 'axios';
import { ref, computed, watch, onMounted, reactive } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { route } from "momentum-trail"

import VLazyImage from "v-lazy-image";
import Footer from '@/Components/LayoutParts/Footer.vue';
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import AppHead from '@/Components/AppHead.vue';
import ItemCardSkeleton from '@/Components/ItemCardSkeleton.vue';
import type { Ref } from 'vue';

defineProps({
    user: { type: Object },
    is_following: { type: Boolean },
    statuses: { type: Array },
});

let following = ref(usePage<any>().props.is_following); // Initial follow status

const toggleFollow = (id) => {
    if (following.value) {
        // Execute the unfollow logic here
        unfollowUser(id);
    } else {
        // Execute the follow logic here
        followUser(id);
    }
};
const items = ref<any>([]);
const CurentlyWearingItems = ref<any>([]);

const ItemLoading = ref(false);

var userAvatar = reactive({
    color_head: computed<any>(
        () => (usePage<any>().props.user.avatar as Record<string, unknown>)?.["color_head"]
    ),
    color_torso: computed<any>(
        () => (usePage<any>().props.user.avatar as Record<string, unknown>)?.["color_torso"]
    ),
    color_left_arm: computed<any>(
        () => (usePage<any>().props.user.avatar as Record<string, unknown>)?.["color_left_arm"]
    ),
    color_right_arm: computed<any>(
        () => (usePage<any>().props.user.avatar as Record<string, unknown>)?.["color_right_arm"]
    ),
    color_left_leg: computed<any>(
        () => (usePage<any>().props.user.avatar as Record<string, unknown>)?.["color_left_leg"]
    ),
    color_right_leg: computed<any>(
        () => (usePage<any>().props.user.avatar as Record<string, unknown>)?.["color_right_leg"]
    ),
    image: computed<any>(
        () => (usePage<any>().props.user.avatar as Record<string, unknown>)?.["thumbnail"]
    ),
    current_face: computed<any>(
        () => (usePage<any>().props.user.avatar as Record<string, unknown>)?.["current_face"]
    ),
});

function onImgErrorSmall(id) {
    let source = document.getElementById(id) as HTMLImageElement;
    source.src = "/assets/img/dummy-error.png";
    source.onerror = null;

    return true;
}
// Fetch items for the selected category
async function fetchItems() {
    try {
        ItemLoading.value = true;
        const response = await axios.get(
            route(`api.user.inventory`, { id: usePage<any>().props.user.id })
        );
        items.value = response.data;
        ItemLoading.value = false;
    } catch (error) {
        console.error(error);
    }
}
async function fetchCurrentlyWearing() {
    try {
        ItemLoading.value = true;
        const response = await axios.get(
            route(`api.user.currently-wearing`, { id: usePage<any>().props.user.id })
        );
        CurentlyWearingItems.value = response.data;
        ItemLoading.value = false;
    } catch (error) {
        console.error(error);
    }
}
const itemRoute = (itemId) => route(`store.item`, { id: itemId });
const creatorRoute = (username) => route(`user.profile`, { username: username });

const ActiveCategory: Ref<string> = ref("Posts");

function setActiveCategory(category): void {
    ActiveCategory.value = category;
};

const showSuccessMessage = (message) => {

    console.log('Success:', message);
};
let followercount = ref(usePage<any>().props.user.followers_count);
const followUser = (id) => {
    // Send a POST request to follow the user
    // Update the API endpoint and payload based on your server-side implementation
    axios.get(route(`api.user.follow`, { user: id }))
        .then(response => {
            // Handle the success response here
            const successMessage = response.data.message;
            showSuccessMessage(successMessage);
            following.value = true;
            followercount.value + 1;
        })
        .catch(error => {
            // Handle the error response here
            console.error('Error following user:', error);
        });
};

const unfollowUser = (id) => {
    // Send a POST request to unfollow the user
    // Update the API endpoint and payload based on your server-side implementation
    axios.post(route(`api.user.unfollow`, { user: id }))
        .then(response => {
            // Handle the success response here
            const successMessage = response.data.message;
            showSuccessMessage(successMessage);
            following.value = false;
            followercount.value - 1;
        })
        .catch(error => {
            // Handle the error response here
            console.error('Error unfollowing user:', error);
        });
};

onMounted(() => {
    fetchItems(),
        fetchCurrentlyWearing()
});

watch(following, (newValue, oldValue) => {
    console.log("Following variable changed from", oldValue, "to", newValue);
});

</script>
<template>
    <AppHead :pageTitle="usePage<any>().props.user.username + '\'s Profile'"
        :description="usePage<any>().props.user.about_me"
        :url="route(`user.profile`, { username: usePage<any>().props.user.username })" />
    <Navbar />
    <Sidebar :alertsEnabled="false"
        :image="usePage<any>().props.user.settings.profile_banner_enabled ? usePage<any>().props.user.settings.profile_banner_url : null"
        :superBanActive="true" :OfficialImageBackground="false" superBanType="image">
        <div class="kcuod" id="following-modal">
            <div class="asyrh mbppf">
                <div class="ncogr">
                    <div class="lrcyb yrzca mkoq3 ufpvb">
                        <div class="g6h8i umlu3">
                            {{ usePage<any>().props.user.display_name }}'s Following
                        </div>
                        <button @click="showModal('following-modal')" class="b87dk" data-toggle-modal="#following-modal"
                            style="margin-right: -10px">
                            <i class="erxpu fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="ncogr">
                    <div class="jol0p">
                        <template v-for="(followingUser, index) in usePage<any>().props.user.following" :key="index">
                            <div class="lrcyb qeh80 ryur2 yrzca mkoq3 ufpvb">
                                <VLazyImage :src="followingUser.thumbnail" src-default="/assets/img/dummy_headshot.png"
                                    class="pt8l6" width="50" />
                                <div class="sd6c8">
                                    <div class="umlu3">{{ followingUser.username }}</div>
                                    <div class="n91zp umlu3 iniww">
                                        @{{ followingUser.username }}
                                    </div>
                                </div>
                                <div class="lrcyb qeh80 ryur2 yrzca mkoq3 ufpvb">

                                    <Link :href="route(`user.profile`, { username: followingUser.username })"
                                        class="h9vgk of1zd ey2tb xjtlw ctx1u">
                                    View Profile
                                    </Link>
                                </div>
                            </div>
                            <!-- Add sv9mx after each follower except the last one -->
                            <div class="sv9mx sd6c8" v-if="index < usePage<any>().props.user.following.length - 1" />
                        </template>
                    </div>
                </div>
            </div>
        </div>

        <div class="kcuod" id="followers-modal">
            <div class="asyrh mbppf">
                <div class="ncogr">
                    <div class="lrcyb yrzca mkoq3 ufpvb">
                        <div class="g6h8i umlu3">
                            {{ usePage<any>().props.user.display_name }}'s Followers
                        </div>
                        <button @click="showModal('followers-modal')" class="b87dk" data-toggle-modal="#followers-modal"
                            style="margin-right: -10px">
                            <i class="erxpu fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="ncogr">
                    <div class="jol0p">
                        <template v-for="(followerUser, index) in usePage<any>().props.user.followers" :key="index">
                            <div class="lrcyb qeh80 ryur2 yrzca mkoq3 ufpvb">
                                <VLazyImage :src="followerUser.thumbnail" src-default="/assets/img/dummy_headshot.png"
                                    class="pt8l6" width="50" />
                                <div class="sd6c8">
                                    <div class="umlu3">{{ followerUser.username }}</div>
                                    <div class="n91zp umlu3 iniww">
                                        @{{ followerUser.username }}
                                    </div>
                                </div>
                                <div class="lrcyb qeh80 ryur2 yrzca mkoq3 ufpvb">
                                    <Link :href="route(`user.profile`, { username: followerUser.username })"
                                        class="h9vgk of1zd ey2tb xjtlw ctx1u">
                                    View Profile
                                    </Link>
                                </div>
                            </div>
                            <!-- Add sv9mx after each follower except the last one -->
                            <div class="sv9mx sd6c8" v-if="index < usePage<any>().props.user.followers.length - 1" />
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <template>
            <portal to="bannerAsset">
                <v-lazy-image :style="usePage<any>().props.user?.settings.calling_card_enabled
                    ? {
                        margin: '0',
                        'background-image':
                            'url(' +
                            usePage<any>().props.user?.settings.calling_card_url +
                            ')',
                        'background-repeat': 'no-repeat',
                        'background-size': 'cover',
                        'box-shadow':
                            'inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important',
                    }
                    : null
                    " :src="usePage<any>().props.user.headshot" width="100" class="vvo5o" alt="Headshot"
                    src-placeholder="assets/img/space-error.png" />
            </portal>

            <portal to="bannerName">
                <div class="o204m" style="line-height: 16px">
                    <div class="kqzo1 mkoq3 yrzca sr9pd umlu3">
                        {{ usePage<any>().props.user.display_name }}
                            <i v-if="usePage<any>().props.user.staff" class="erxpu fa-gavel szivm"></i>
                            <i v-else-if="usePage<any>().props.user.settings.beta_tester"
                                class="erxpu fa-hard-hat dfoi1"></i>
                            <v-lazy-image
                                :src="'/assets/img/flags/' + usePage<any>().props.user.settings.country_code + '.svg'"
                                alt="Country Flag" style="width: auto;height: 20px;"
                                src-placeholder="/assets/img/flags/other/pirate.svg" />
                    </div>
                    <div class="n91zp iniww umlu3">
                        {{ "@" + usePage<any>().props.user.username }}
                    </div>
                </div>
            </portal>
            <portal to="bannerDescription">
                {{ usePage<any>().props.user.status ?? 'This user does not have a status.' }}
            </portal>
            <portal to="bannerButtons">
                <div v-if="usePage<any>().props.auth.user && usePage<any>().props.user.id != usePage<any>().props.auth.user.id"
                    class="h9vgk lrcyb qeh80 te269 mkoq3">
                    <button :class="['o204m', 'fhjfg', following ? 'szivm' : 'szahi']"
                        @click="toggleFollow(usePage<any>().props.user.id)" :content="following ? 'Unfollow' : 'Follow'"
                        v-tippy="{ placement: 'bottom' }">
                        <i :class="following ? 'erxpu fa-user-minus' : 'erxpu fa-user-plus'"></i>
                    </button>

                    <button class="o204m dfoi1 fhjfg" :content="'Chat With ' + usePage<any>().props.user.display_name"
                        v-tippy="{ placement: 'bottom' }">
                        <i class="erxpu fa-message"></i>
                    </button>
                    <a v-if="usePage<any>().props.auth.user.staff" as="pw3az"
                        :href="route(`admin.users.manage-user`, { id: usePage<any>().props.user.id })"
                        class="o204m szivm fhjfg" content="View in Panel" v-tippy="{ placement: 'bottom' }">
                        <i class="erxpu fa-pen-to-square"></i>
                    </a>
                </div>
            </portal>
        </template>
        <div class="u6xfc s4yjr">
            <div class="ryur2 yrzca mkoq3 ufpvb">
                <div class="doh7b yrzca mkoq3">
                </div>
            </div>
            <div :class="['bbztw', 'pfmvb', 'ryur2', 'hcm3l', usePage<any>().props.user.online ? 'cino6' : 'offline']"
                :style="usePage<any>().props.user.settings.calling_card_enabled
                    ? {
                        'background-image': 'url(' + usePage<any>().props.user.settings.calling_card_url + ')',
                        'background-repeat': 'no-repeat',
                        'background-size': 'cover',
                        'box-shadow':
                            'inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important',
                    }
                    : null">
                <v-lazy-image
                    :src="usePage<any>().props.user.thumbnail ? usePage<any>().props.user.thumbnail : '/assets/img/dummy.png'"
                    src-placeholder="/assets/img/dummy.png" />
                <div class="qeh80 n91zp wruu4 hg4an szahi umlu3">
                    <div :class="usePage<any>().props.user.staff ? 'szivm' : 'dfoi1'">
                        {{ usePage<any>().props.user.staff ? usePage<any>().props.user.position : 'Netizen' }}
                    </div>
                </div>
            </div>
            <div class="kqzo1 pfmvb">
                <div class="qeh80 wruu4">
                    <div class="doh7b n91zp mkoq3 hg4an">
                        <button class="h9vgk j1w7p wruu4 umlu3 iniww ctx1u" @click="showModal('following-modal')">
                            <span class="jtcwt">{{ usePage<any>().props.user.following_count }}</span>
                            Following
                        </button>
                        <button class="h9vgk j1w7p wruu4 umlu3 iniww ctx1u" @click="showModal('followers-modal')">
                            <span class="jtcwt">{{ followercount }}</span>
                            Followers
                        </button>
                    </div>
                    <div v-if="usePage<any>().props.user.followsYou" class="n91zp szahi umlu3">
                        Follows you
                    </div>
                </div>
            </div>
            <a class="lrcyb xm14j m8bhg ryur2 yrzca bbztw ni21t mkoq3">
                <img src="assets/img/space_placeholder.png" class="pt8l6" width="40" />
                <div class="h9vgk" style="line-height: 14px">
                    <div class="ut8sj ctx1u aki3a iniww q611u">
                        Primary Space
                    </div>
                    <div class="n91zp ctx1u umlu3 jtcwt">
                        Namesnipe
                    </div>
                </div>
            </a>
            <div class="kqzo1 o204m umlu3">About Me</div>
            <div class="te269 bbztw pfmvb">
                {{ usePage<any>().props.user.about_me }}
            </div>
            <div class="kqzo1 o204m umlu3">Statistics</div>
            <div class="te269 bbztw pfmvb">
                <div class="sr9pd yrzca mkoq3 vhnj2">
                    <div class="n91zp q9pil umlu3 sd6c8">
                        <i class="wruu4 erxpu fa-rocket-launch q9pil" style="width: 26px"></i>
                        Premium Subscriber
                    </div>
                    <div class="n91zp sd6c8">
                        <i class="wruu4 erxpu fa-medal iniww" style="width: 26px"></i>
                        {{ "Rank Lvl. " + usePage<any>().props.user.level }}
                    </div>
                    <div class="n91zp sd6c8">
                        <i class="wruu4 erxpu fa-users-medical iniww" style="width: 26px"></i>
                        Joined on {{ usePage<any>().props.user.joindate }}
                    </div>
                    <div class="n91zp sd6c8">
                        <i class="wruu4 erxpu fa-clock iniww" style="width: 26px"></i>
                        Last seen {{ usePage<any>().props.user.DateHum }}
                    </div>
                    <div class="n91zp sd6c8">
                        <i class="wruu4 erxpu fa-messages iniww" style="width: 26px"></i>
                        {{ usePage<any>().props.user.posts }} Discussion Posts
                    </div>
                </div>
            </div>
            <div class="kqzo1 o204m umlu3">Spaces</div>
            <div class="te269 bbztw pfmvb">
                <div class="doh7b wruu4 mkoq3 vhnj2">
                    <i class="ku9nu erxpu fa-planet-ringed iniww"></i>
                    <div style="line-height: 16px">
                        <div class="ut8sj aki3a iniww q611u">
                            No Spaces
                        </div>
                        <div class="ut8sj iniww umlu3">
                            {{ usePage<any>().props.user.username }} has not joined any spaces.
                        </div>
                    </div>
                </div>
                <div class="us3s8 o5qdx bszft">
                    <div class="wruu4 u6xfc om09p jlxd0">
                        <a href="#" class="jtcwt">

                            <img src="/assets/img/space_placeholder.png" class="kqzo1" />
                            <div>
                                <div class="n91zp umlu3 ctx1u">
                                    <i class="kqzo1 ut8sj szahi aki3a q611u erxpu fa-star"></i>&nbsp;
                                    Namesnipe
                                </div>
                                <div class="ut8sj iniww umlu3">
                                    12K Members
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="wruu4 u6xfc om09p jlxd0">
                        <a href="#" class="jtcwt">
                            <img src="/assets/img/icon.png" class="kqzo1" />
                            <div>
                                <div class="n91zp umlu3 ctx1u">
                                    Project Eclipse
                                </div>
                                <div class="ut8sj iniww umlu3">4 Members</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="u6xfc a1ry2">
            <div style="height: 10px"></div>
            <div class="kqzo1 yrzca mkoq3 ufpvb">
                <div class="kqzo1 o204m umlu3">Friends</div>
                <a href="#" class="of1zd r0khq xjtlw">View All</a>
            </div>
            <div class="te269 bbztw pfmvb">
                <div v-if="!usePage<any>().props.user.friends.data || !usePage<any>().props.user.friends.data.length"
                    class="doh7b wruu4 mkoq3 vhnj2">
                    <i class="ku9nu erxpu fa-face-sad-tear iniww"></i>
                    <div style="line-height: 16px">
                        <div class="ut8sj aki3a iniww q611u">
                            No Friends
                        </div>
                        <div class="ut8sj iniww umlu3">
                            {{ usePage<any>().props.user.username }} has no Friends.
                        </div>
                    </div>
                </div>

                <div class="m1f0h doh7b mkoq3 hg4an">
                    <div class="h9vgk wruu4" v-for="friend in usePage<any>().props.user.friends.data"
                        style="width: 80px">
                        <Link :href="route(`user.profile`, { username: friend.name })">
                        <img :src="friend.thumbnail" />
                        <div class="n91zp iniww umlu3 ctx1u">
                            {{ "@" + friend.name }}
                        </div>
                        </Link>
                    </div>
                </div>

            </div>
            <div class="te269 bbztw pfmvb">
                <div class="jol0p">
                    <ul class="pbsky">
                        <li class="glte7">
                            <a class="gqx9g fhjfg" :class="{ active: 'Posts' === ActiveCategory }" @click="
                                setActiveCategory('Posts')">Posts</a>
                        </li>
                        <li class="glte7">
                            <a class="gqx9g fhjfg" :class="{ active: 'Inventory' === ActiveCategory }"
                                @click="setActiveCategory('Inventory')">Inventory</a>
                        </li>
                    </ul>
                </div>
                <div v-if="ActiveCategory === 'Posts'">
                    <div v-if="!statuses.data?.['length']" class="jol0p">
                        <div class="doh7b wruu4 mkoq3 vhnj2">
                            <i class="ku9nu erxpu fa-face-sleeping iniww"></i>
                            <div style="line-height: 16px">
                                <div class="ut8sj aki3a iniww q611u">
                                    No Posts
                                </div>
                                <div class="ut8sj iniww umlu3">
                                    {{ usePage<any>().props.user.username }} has not posted anything to their
                                        feed.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else v-for="status in statuses.data" class="doh7b jol0p mkoq3 wj42a">
                        <div class="eb64e knom5" style="width: 100px">
                            <a href="#" class="n91zp wruu4 nn1dg fhjfg">
                                <img src="/assets/img/dummy_headshot.png" class="kqzo1 pt8l6" width="60" />
                                <div style="line-height: 16px">
                                    <div class="q9pil ctx1u">
                                        {{ status.dname }}
                                    </div>
                                    <div class="ut8sj iniww ctx1u">{{ '@' + status.name }}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="bbztw pfmvb ni21t sd6c8">
                            <div class="yrzca mkoq3 ufpvb">
                                <div class="sd6c8">
                                    <div class="ut8sj iniww">
                                        <i class="far fa-clock x4jyd"
                                            style="vertical-align: middle;margin-top: -2.5px;font-size: 10px;"></i>
                                        {{ status.DateHum }}
                                    </div>
                                    <div>
                                        {{ status.message }}
                                    </div>
                                    <div class="n91zp" style="margin-left: -6px">
                                        <button class="vrmy6 vuhhm fhjfg">
                                            <i class="far fa-heart"></i>1
                                        </button>
                                    </div>
                                </div>
                                <div class="tejce hpcc3 luhjr">
                                    <button class="b87dk" style="margin-right: -10px">
                                        <i class="erxpu fa-ellipsis-vertical"></i>
                                    </button>
                                    <ul class="v3lkd k10gs">
                                        <li class="dropdown-item">
                                            <a href="#" class="pa5o5 pokk9">
                                                <i class="erxpu fa-flag gu025"></i> Report
                                            </a>
                                        </li>
                                        <div class="yrzca mkoq3">
                                            <div class="ujbj2">Moderation</div>
                                            <li class="sv9mx knom5"></li>
                                        </div>
                                        <li class="dropdown-item">
                                            <a href="#" class="pa5o5 pokk9 szivm">
                                                <i class="erxpu fa-trash szivm gu025"></i>
                                                Delete
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="uzvus yrzca mkoq3">
                                <div class="ut8sj aki3a iniww q611u">
                                    Comments
                                </div>
                                <div class="sv9mx knom5"></div>
                            </div>
                            <div class="lrcyb ryur2 mkoq3">
                                <input type="text" class="mmzf9 p9gxj swb1b"
                                    placeholder="What are your thoughts on this post?" />
                                <input type="pw3az" class="of1zd fm57z xjtlw" value="Post" />
                            </div>
                        </div>
                    </div>
                    <Pagination v-if="statuses.data.length" v-bind:pagedata="statuses" />
                </div>
                <div v-else-if="ActiveCategory === 'Inventory'" class="uzvus">
                    <span class="o204m umlu3">Current Outfit</span>
                    <div class="us3s8">
                        <div class="wruu4 u6xfc juc77 ud4yq">
                            <div class="wruu4 mkoq3 ud4yq">
                                <div class="wruu4" style="transform:scale(0.7);margin-top:-25px;">
                                    <div style="margin-bottom: 5px">
                                        <button class="avatar-body-part" id="head" :style="{
                                            backgroundColor: '#' + userAvatar.color_head,
                                            padding: '5px',
                                            borderRadius: '15px',
                                            marginTop: '-1px',
                                            width: '60', height: '50',
                                        }">
                                            <VLazyImage :src="userAvatar.current_face"
                                                :src-placeholder="usePage<any>().props.site.production.domains.storage + '/assets/default.png'"
                                                width="50" height="50" />
                                        </button>
                                    </div>
                                    <div style=" margin-bottom: 5px">
                                        <button class="avatar-body-part" id="left_arm" :style="{
                                            backgroundColor: '#' + userAvatar.color_left_arm,
                                            padding: '50px',
                                            paddingRight: '0px',
                                        }"></button>

                                        <button class="avatar-body-part" id="torso" :style="{
                                            backgroundColor: '#' + userAvatar.color_torso,
                                            padding: '50px',
                                        }"></button>

                                        <button class="avatar-body-part" id="right_arm" :style="{
                                            backgroundColor: '#' + userAvatar.color_right_arm,
                                            padding: '50px',
                                            paddingRight: '0px',
                                        }"></button>
                                    </div>
                                    <div class="display: flex; margin-bottom: 5px">
                                        <button class="avatar-body-part" name="left_leg" :style="{
                                            backgroundColor: '#' + userAvatar.color_left_leg,
                                            padding: '50px',
                                            paddingRight: '0px',
                                            paddingLeft: '47px',
                                        }"></button>

                                        <button class="avatar-body-part" name="right_leg" :style="{
                                            backgroundColor: '#' + userAvatar.color_right_leg,
                                            padding: '50px',
                                            paddingRight: '0px',
                                            borderBottom: '15px',
                                            paddingLeft: '47px',
                                        }"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wruu4 u6xfc znzms">
                            <div class="mkoq3 aszip flex-row bhdue overflow-x-scroll vt5vt kri89 ryur2 ptb8c">
                                <div v-if="ItemLoading || (items && items.length > 0)" class="us3s8 o5qdx bszft">
                                    <template v-if="ItemLoading">
                                        <ItemCardSkeleton v-for="n in 12" :key="n" />
                                    </template>
                                    <div v-else class="u6xfc juc77 s4yjr fnliq"
                                        v-for="(item, index) in CurentlyWearingItems" :key="index">
                                        <Link :href="itemRoute(item.id)" class="nn1dg">
                                        <div class="xm14j kqzo1 bbztw ytqs2 luhjr">
                                            <div style="
                                    position: absolute;
                                    bottom: 10px;
                                    left: 10px;
                                ">
                                                <div v-if="item.in_event" class="kqzo1 mcndy cwtbt umlu3">
                                                    <i class="fas fa-calendar-star" style="width: 18px"></i>Event
                                                </div>
                                                <div v-else-if="item.rare" class="kqzo1 mcndy wh4us umlu3">
                                                    <i class="fas fa-star" style="width: 18px"></i>Rare
                                                </div>
                                            </div>
                                            <img :src="item.thumbnail" :id="item.thumbnail"
                                                @error="onImgErrorSmall(item.thumbnail)" />
                                        </div>
                                        <div class="jtcwt umlu3 ctx1u">
                                            {{ item.name }}
                                        </div>
                                        </Link>
                                        <div class="ut8sj umlu3 ctx1u">
                                            <span class="iniww">By:</span>&nbsp;
                                            <Link :href="creatorRoute(item.creator.username)">
                                            {{ "@" + item.creator.username
                                            }}<i class="fas fa-shield-check dfoi1 h2a12"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="items.message" class="">
                                    <div class="ghpy4 pfmvb">
                                        <div class="doh7b ryur2 wruu4 mkoq3 vhnj2">
                                            <i class="ku9nu fas fa-store-slash iniww"></i>
                                            <div style="line-height: 16px">
                                                <div class="ut8sj aki3a iniww">
                                                    Looks like a gremlin got into the code again!
                                                    We're sending our best programmers with bug
                                                    spray to fix the issue
                                                </div>
                                                <div class="iniww umlu3">
                                                    <p class="ut8sj">{{ items.message }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="hg4an justify-center wruu4 mkoq3">
                                    <div class="ghpy4 pfmvb">
                                        <div class="doh7b ryur2  hg4an justify-center wruu4 mkoq3 vhnj2">
                                            <i class="ku9nu erxpu fa-person iniww"></i>
                                            <div style="line-height: 16px">
                                                <div class="iniww umlu3">
                                                    <p class="ut8sj">
                                                        {{ usePage<any>().props.user.username }} isn't wearing anything.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sv9mx lj0fs xnwad" />
                    <div>
                        <span class="o204m umlu3">Inventory</span>
                        <div v-if="ItemLoading || (items && items.length > 0)" class="us3s8 o5qdx bszft">
                            <template v-if="ItemLoading">
                                <ItemCardSkeleton v-for="n in 12" :key="n" />
                            </template>
                            <div v-else class="u6xfc wc9nb s4yjr fnliq" v-for="(item, index) in items" :key="index">
                                <Link :href="itemRoute(item.id)" class="nn1dg">
                                <div class="xm14j kqzo1 bbztw ytqs2 luhjr">
                                    <div style="
                                    position: absolute;
                                    bottom: 10px;
                                    left: 10px;
                                ">
                                        <div v-if="item.in_event" class="kqzo1 mcndy cwtbt umlu3">
                                            <i class="fas fa-calendar-star" style="width: 18px"></i>Event
                                        </div>
                                        <div v-else-if="item.rare" class="kqzo1 mcndy wh4us umlu3">
                                            <i class="fas fa-star" style="width: 18px"></i>Rare
                                        </div>
                                        <div v-else-if="item.sale_ongoing" class="kqzo1 mcndy rzye3 umlu3">
                                            <i class="fas fa-badge-percent" style="width: 18px"></i>{{
                                                item.percent_off + "%" }} off
                                        </div>
                                    </div>
                                    <img :src="item.thumbnail" :id="item.thumbnail"
                                        @error="onImgErrorSmall(item.thumbnail)" />
                                </div>
                                <div class="jtcwt umlu3 ctx1u">
                                    {{ item.name }}
                                </div>
                                </Link>
                                <div class="ut8sj umlu3 ctx1u">
                                    <span class="iniww">By:</span>&nbsp;
                                    <Link :href="creatorRoute(item.creator.username)">
                                    {{ "@" + item.creator.username
                                    }}<i class="fas fa-shield-check dfoi1 h2a12"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="items.message" class="">
                            <div class="ghpy4 pfmvb">
                                <div class="doh7b ryur2 wruu4 mkoq3 vhnj2">
                                    <i class="ku9nu fas fa-store-slash iniww"></i>
                                    <div style="line-height: 16px">
                                        <div class="ut8sj aki3a iniww">
                                            Looks like a gremlin got into the code again!
                                            We're sending our best programmers with bug
                                            spray to fix the issue
                                        </div>
                                        <div class="iniww umlu3">
                                            <p class="ut8sj">{{ items.message }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="">
                            <div class="ghpy4 pfmvb">
                                <div class="doh7b ryur2 wruu4 mkoq3 vhnj2">
                                    <i class="ku9nu erxpu fa-crate-empty iniww"></i>
                                    <div style="line-height: 16px">
                                        <div class="ut8sj aki3a iniww q611u">
                                            No Items
                                        </div>
                                        <div class="iniww umlu3">
                                            <p class="ut8sj">
                                                {{ usePage<any>().props.user.username }} has no items in their
                                                    inventory.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </Sidebar>
    <Footer />
</template>
<script lang="ts">
export default {
    methods: {
        showModal(modalId: string): void {
            const kcuod = document.getElementById(modalId);
            if (modal) {
                modal.classList.toggle("vuhhm");
            }
        },
    },

}
</script>
