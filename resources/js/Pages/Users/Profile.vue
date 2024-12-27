<script setup lang="ts">
import axios from 'axios';
import { ref, computed, watch } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { route } from "momentum-trail";
import VLazyImage from "v-lazy-image";
import Footer from '@/Components/LayoutParts/Footer.vue';
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import AppHead from '@/Components/AppHead.vue';

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
const userAvatar = computed(() => {
    return usePage<any>().props.user.avatar || '/assets/img/dummy.png';
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
        <div class="modal" id="following-modal">
            <div class="modal-card modal-card-body">
                <div class="section-borderless">
                    <div class="gap-2 align-middle flex-container align-justify">
                        <div class="text-lg fw-semibold">
                            {{ usePage<any>().props.user.display_name }}'s Following
                        </div>
                        <button @click="showModal('following-modal')" class="btn-circle"
                            data-toggle-modal="#following-modal" style="margin-right: -10px">
                            <i class="fad fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="section-borderless">
                    <div class="section">
                        <template v-for="(followingUser, index) in usePage<any>().props.user.following" :key="index">
                            <div class="gap-2 mt-2 mb-2 align-middle flex-container align-justify">
                                <img src="/assets/img/dummy_headshot.png" class="headshot" width="50" />
                                <div class="w-100">
                                    <div class="fw-semibold">{{ followingUser.username }}</div>
                                    <div class="text-sm fw-semibold text-muted">
                                        @{{ followingUser.username }}
                                    </div>
                                </div>
                                <div class="gap-2 mt-2 mb-2 align-middle flex-container align-justify">

                                    <Link :href="route(`user.profile`, { username: followingUser.username })"
                                        class="min-w-0 btn btn-info btn-sm text-truncate">
                                    View Profile
                                    </Link>
                                </div>
                            </div>
                            <!-- Add divider after each follower except the last one -->
                            <div class="divider w-100" v-if="index < usePage<any>().props.user.following.length - 1" />
                        </template>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="followers-modal">
            <div class="modal-card modal-card-body">
                <div class="section-borderless">
                    <div class="gap-2 align-middle flex-container align-justify">
                        <div class="text-lg fw-semibold">
                            {{ usePage<any>().props.user.display_name }}'s Followers
                        </div>
                        <button @click="showModal('followers-modal')" class="btn-circle"
                            data-toggle-modal="#followers-modal" style="margin-right: -10px">
                            <i class="fad fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="section-borderless">
                    <div class="section">
                        <template v-for="(followerUser, index) in usePage<any>().props.user.followers" :key="index">
                            <div class="gap-2 mt-2 mb-2 align-middle flex-container align-justify">
                                <img src="/assets/img/dummy_headshot.png" class="headshot" width="50" />
                                <div class="w-100">
                                    <div class="fw-semibold">{{ followerUser.username }}</div>
                                    <div class="text-sm fw-semibold text-muted">
                                        @{{ followerUser.username }}
                                    </div>
                                </div>
                                <div class="gap-2 mt-2 mb-2 align-middle flex-container align-justify">
                                    <Link :href="route(`user.profile`, { username: followerUser.username })"
                                        class="min-w-0 btn btn-info btn-sm text-truncate">
                                    View Profile
                                    </Link>
                                </div>
                            </div>
                            <!-- Add divider after each follower except the last one -->
                            <div class="divider w-100" v-if="index < usePage<any>().props.user.followers.length - 1" />
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
                    " :src="usePage<any>().props.user.headshot" width="100" class="space-image" alt="Headshot"
                    src-placeholder="assets/img/space-error.png" />
            </portal>

            <portal to="bannerName">
                <div class="text-xl" style="line-height: 16px">
                    <div class="mb-1 flex-container align-middle gap-1 fw-semibold">
                        {{ usePage<any>().props.user.display_name }}
                            <i v-if="usePage<any>().props.user.staff" class="fad fa-gavel text-danger"></i>
                            <i v-else-if="usePage<any>().props.user.settings.beta_tester"
                                class="fad fa-hard-hat text-success"></i>
                            <v-lazy-image
                                :src="'/assets/img/flags/' + usePage<any>().props.user.settings.country_code + '.svg'"
                                alt="Country Flag" style="width: auto;height: 20px;"
                                src-placeholder="/assets/img/flags/other/pirate.svg" />
                    </div>
                    <div class="text-sm text-muted fw-semibold">
                        {{ "@" + usePage<any>().props.user.username }}
                    </div>
                </div>
            </portal>
            <portal to="bannerDescription">
                {{ usePage<any>().props.user.status ?? 'This user does not have a status.' }}
            </portal>
            <portal to="bannerButtons">
                <div v-if="usePage<any>().props.auth.user && usePage<any>().props.user.id != usePage<any>().props.auth.user.id"
                    class="min-w-0 gap-2 mt-2 mb-3 flex-container">
                    <button :class="['text-xl', 'squish', following ? 'text-danger' : 'text-info']"
                        @click="toggleFollow(usePage<any>().props.user.id)" :content="following ? 'Unfollow' : 'Follow'"
                        v-tippy="{ placement: 'bottom' }">
                        <i :class="following ? 'fad fa-user-minus' : 'fad fa-user-plus'"></i>
                    </button>

                    <button class="text-xl text-success squish"
                        :content="'Chat With ' + usePage<any>().props.user.display_name"
                        v-tippy="{ placement: 'bottom' }">
                        <i class="fad fa-message"></i>
                    </button>
                    <a v-if="usePage<any>().props.auth.user.staff" as="button"
                        :href="route(`admin.users.manage-user`, { id: usePage<any>().props.user.id })"
                        class="text-xl text-danger squish" content="View in Panel" v-tippy="{ placement: 'bottom' }">
                        <i class="fad fa-pen-to-square"></i>
                    </a>
                </div>
            </portal>
        </template>
        <div class="cell medium-3">
            <div class="mb-2 align-middle flex-container align-justify">
                <div class="gap-3 align-middle flex-container">
                </div>
            </div>
            <div :class="['card', 'card-body', 'mb-2', 'card-status', usePage<any>().props.user.online ? 'online' : 'offline']"
                :style="usePage<any>().props.user.settings.calling_card_enabled
                        ? {
                            'background-image': 'url(' + usePage<any>().props.user.settings.calling_card_url + ')',
                            'background-repeat': 'no-repeat',
                            'background-size': 'cover',
                            'box-shadow':
                                'inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important',
                        }
                        : null">
                <v-lazy-image :src="userAvatar" src-placeholder="/assets/img/dummy.png" />
                <div class="mt-2 text-sm text-center align-center text-info fw-semibold">
                    <div :class="usePage<any>().props.user.staff ? 'text-danger' : 'text-success'">
                        {{ usePage<any>().props.user.staff ? usePage<any>().props.user.position : 'Netizen' }}
                    </div>
                </div>
            </div>
            <div class="mb-1 card-body">
                <div class="mt-2 text-center">
                    <div class="gap-3 text-sm flex-container align-center">
                        <button class="min-w-0 px-0 text-center fw-semibold text-muted text-truncate"
                            @click="showModal('following-modal')">
                            <span class="text-body">{{ usePage<any>().props.user.following_count }}</span>
                            Following
                        </button>
                        <button class="min-w-0 px-0 text-center fw-semibold text-muted text-truncate"
                            @click="showModal('followers-modal')">
                            <span class="text-body">{{ followercount }}</span>
                            Followers
                        </button>
                    </div>
                    <div v-if="usePage<any>().props.user.followsYou" class="text-sm text-info fw-semibold">
                        Follows you
                    </div>
                </div>
            </div>
            <a class="gap-2 p-2 mt-1 mb-2 align-middle card card-inner flex-container">
                <img src="assets/img/space_placeholder.png" class="headshot" width="40" />
                <div class="min-w-0" style="line-height: 14px">
                    <div class="text-xs text-truncate fw-bold text-muted text-uppercase">
                        Primary Space
                    </div>
                    <div class="text-sm text-truncate fw-semibold text-body">
                        Namesnipe
                    </div>
                </div>
            </a>
            <div class="mb-1 text-xl fw-semibold">About Me</div>
            <div class="mb-3 card card-body">
                {{ usePage<any>().props.user.about_me }}
            </div>
            <div class="mb-1 text-xl fw-semibold">Statistics</div>
            <div class="mb-3 card card-body">
                <div class="gap-1 align-middle flex-container flex-dir-column">
                    <div class="text-sm text-membership fw-semibold w-100">
                        <i class="text-center fad fa-rocket-launch text-membership" style="width: 26px"></i>
                        Premium Subscriber
                    </div>
                    <div class="text-sm w-100">
                        <i class="text-center fad fa-medal text-muted" style="width: 26px"></i>
                        {{ "Rank Lvl. " + usePage<any>().props.user.level }}
                    </div>
                    <div class="text-sm w-100">
                        <i class="text-center fad fa-users-medical text-muted" style="width: 26px"></i>
                        Joined on {{ usePage<any>().props.user.joindate }}
                    </div>
                    <div class="text-sm w-100">
                        <i class="text-center fad fa-clock text-muted" style="width: 26px"></i>
                        Last seen {{ usePage<any>().props.user.DateHum }}
                    </div>
                    <div class="text-sm w-100">
                        <i class="text-center fad fa-messages text-muted" style="width: 26px"></i>
                        {{ usePage<any>().props.user.posts }} Discussion Posts
                    </div>
                </div>
            </div>
            <div class="mb-1 text-xl fw-semibold">Spaces</div>
            <div class="mb-3 card card-body">
                <div class="gap-3 text-center flex-container flex-dir-column">
                    <i class="text-5xl fad fa-planet-ringed text-muted"></i>
                    <div style="line-height: 16px">
                        <div class="text-xs fw-bold text-muted text-uppercase">
                            No Spaces
                        </div>
                        <div class="text-xs text-muted fw-semibold">
                            {{ usePage<any>().props.user.username }} has not joined any spaces.
                        </div>
                    </div>
                </div>
                <div class="grid-x grid-margin-x grid-padding-y">
                    <div class="text-center cell medium-4 small-4">
                        <a href="#" class="text-body">

                            <img src="/assets/img/space_placeholder.png" class="mb-1" />
                            <div>
                                <div class="text-sm fw-semibold text-truncate">
                                    <i class="mb-1 text-xs text-info fw-bold text-uppercase fad fa-star"></i>&nbsp;
                                    Namesnipe
                                </div>
                                <div class="text-xs text-muted fw-semibold">
                                    12K Members
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="text-center cell medium-4 small-4">
                        <a href="#" class="text-body">
                            <img src="/assets/img/icon.png" class="mb-1" />
                            <div>
                                <div class="text-sm fw-semibold text-truncate">
                                    Project Eclipse
                                </div>
                                <div class="text-xs text-muted fw-semibold">4 Members</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="cell medium-9">
            <div style="height: 10px"></div>
            <div class="mb-1 align-middle flex-container align-justify">
                <div class="mb-1 text-xl fw-semibold">Friends</div>
                <a href="#" class="btn btn-secondary btn-sm">View All</a>
            </div>
            <div class="mb-3 card card-body">
                <div v-if="!usePage<any>().props.user.friends.data || !usePage<any>().props.user.friends.data.length"
                    class="gap-3 text-center flex-container flex-dir-column">
                    <i class="text-5xl fad fa-face-sad-tear text-muted"></i>
                    <div style="line-height: 16px">
                        <div class="text-xs fw-bold text-muted text-uppercase">
                            No Friends
                        </div>
                        <div class="text-xs text-muted fw-semibold">
                            {{ usePage<any>().props.user.username }} has no Friends.
                        </div>
                    </div>
                </div>

                <div class="flex-wrap gap-3 flex-container align-center">
                    <div class="min-w-0 text-center" v-for="friend in usePage<any>().props.user.friends.data"
                        style="width: 80px">
                        <Link :href="route(`user.profile`, { username: friend.name })">
                        <img :src="friend.thumbnail" />
                        <div class="text-sm text-muted fw-semibold text-truncate">
                            {{ "@" + friend.name }}
                        </div>
                        </Link>
                    </div>
                </div>

            </div>
            <div class="mb-3 card card-body">
                <div class="section">
                    <ul class="tabs">
                        <li class="tab-item">
                            <a href="#" class="tab-link active squish">Posts</a>
                        </li>
                        <li class="tab-item">
                            <a href="#" class="tab-link squish">Inventory</a>
                        </li>
                    </ul>
                </div>
                <div v-if="!statuses.data.length" class="section">
                    <div class="gap-3 text-center flex-container flex-dir-column">
                        <i class="text-5xl fad fa-face-sleeping text-muted"></i>
                        <div style="line-height: 16px">
                            <div class="text-xs fw-bold text-muted text-uppercase">
                                No Posts
                            </div>
                            <div class="text-xs text-muted fw-semibold">
                                {{ usePage<any>().props.user.username }} has not posted anything to their
                                    feed.
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else v-for="status in statuses.data" class="gap-3 section flex-container flex-dir-column-sm">
                    <div class="mx-auto flex-child-grow" style="width: 100px">
                        <a href="#" class="text-sm text-center d-block squish">
                            <img src="/assets/img/dummy_headshot.png" class="mb-1 headshot" width="60" />
                            <div style="line-height: 16px">
                                <div class="text-membership text-truncate">
                                    {{ status.dname }}
                                </div>
                                <div class="text-xs text-muted text-truncate">{{ '@' + status.name }}
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="card card-body card-inner w-100">
                        <div class="align-middle flex-container align-justify">
                            <div class="w-100">
                                <div class="text-xs text-muted">
                                    <i class="far fa-clock me-1"
                                        style="vertical-align: middle;margin-top: -2.5px;font-size: 10px;"></i>
                                    {{ status.DateHum }}
                                </div>
                                <div>
                                    {{ status.message }}
                                </div>
                                <div class="text-sm" style="margin-left: -6px">
                                    <button class="btn-like active squish">
                                        <i class="far fa-heart"></i>1
                                    </button>
                                </div>
                            </div>
                            <div class="dropdown ms-auto position-relative">
                                <button class="btn-circle" style="margin-right: -10px">
                                    <i class="fad fa-ellipsis-vertical"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li class="dropdown-item">
                                        <a href="#" class="dropdown-link dropdown-link-has-icon">
                                            <i class="fad fa-flag dropdown-icon"></i> Report
                                        </a>
                                    </li>
                                    <div class="align-middle flex-container">
                                        <div class="dropdown-title">Moderation</div>
                                        <li class="divider flex-child-grow"></li>
                                    </div>
                                    <li class="dropdown-item">
                                        <a href="#" class="dropdown-link dropdown-link-has-icon text-danger">
                                            <i class="fad fa-trash text-danger dropdown-icon"></i>
                                            Delete
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="my-2 align-middle flex-container">
                            <div class="text-xs fw-bold text-muted text-uppercase">
                                Comments
                            </div>
                            <div class="divider flex-child-grow"></div>
                        </div>
                        <div class="gap-2 mb-2 flex-container">
                            <input type="text" class="form form-sm form-has-section-color"
                                placeholder="What are your thoughts on this post?" />
                            <input type="button" class="btn btn-success btn-sm" value="Post" />
                        </div>
                    </div>
                </div>
                <Pagination v-if="statuses.data.length" v-bind:pagedata="statuses" />
            </div>
        </div>
    </Sidebar>
    <Footer />
</template>
<script lang="ts">
export default {
    methods: {
        showModal(modalId: string): void {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.toggle("active");
            }
        },
    },

}
</script>
