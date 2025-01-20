<script setup lang="ts">
import { route } from "momentum-trail"

import { usePage } from "@inertiajs/vue3";
import Navbar from "@/Components/LayoutParts/Admin/AdminNavbar.vue";
import AppHead from "@/Components/AppHead.vue";
</script>

<template>
    <AppHead pageTitle="User Index" description="Login to Vestora." :url="route('auth.login.page')" />
    <Navbar>
        <div class="bbztw"
            :style="'background:url(' + usePage<any>().props.user.settings.profile_banner_enabled ? usePage<any>().props.user.settings.profile_banner_url : null + ');'">
            <div class="card-content">

                <div class="columns">
                    <div class="column is-2">

                        <figure class="image">
                            <img width="250" height="250" :src="usePage<any>().props.user.thumbnail">
                        </figure>

                    </div>
                    <div class="column is-5">
                        <br />
                        <p class="title is-2">{{ usePage<any>().props.user.display_name }}
                                <span class="title is-size-6 has-text-grey">{{ "@" + usePage<any>().props.user.username
                                        }}</span>

                        </p>
                        <div class="tf1xb">
                            <blockquote>{{ usePage<any>().props.user.about_me ?? usePage<any>().props.user.username +
                                        "does not hava a n47y1 yet." }}</blockquote>
                        </div>
                        <template v-if="usePage<any>().props.permissions.canMangeUser">
                            <label><strong>UID:</strong></label> <label>{{ usePage<any>().props.user.id }}</label>
                            <br>
                            <label><strong>IP:</strong></label> <label>{{ usePage<any>().props.user.lastIp }}</label>
                            <br>
                            <label><strong>Email:</strong></label> <label>{{ usePage<any>().props.user.email }}</label>
                            <br>
                            <label><strong>Past Usernames:</strong></label> <label>Username, Usersname, User,
                                Bitch</label>
                        </template>
                    </div>
                    <div class="column ">
                        <div v-if="usePage<any>().props.permissions.canMangeUser">
                            <label><strong>User:</strong></label>
                            <br>
                            <div class="buttons">

                                <a :href="route(`user.profile`, { username: usePage<any>().props.user.username })"
                                    class="pw3az is-outlined">View Profile</a>
                                <a href="grant.html" class="pw3az is-outlined">Grant Achievement (not working atm)</a>
                                <Link :href="route(`admin.users.gift-user`, { id: usePage<any>().props.user.id })"
                                    class="pw3az is-outlined">Gift Item</Link>
                            </div>
                        </div>
                        <div v-if="usePage<any>().props.permissions.canMangeUserSettings">
                            <br>
                            <label><strong>Moderation Actions:</strong></label>
                            <br>
                            <div class="buttons">
                                <a href="purge.html" class="pw3az dysuc is-outlined">Purge Username</a>
                                <a href="purge.html" class="pw3az dysuc is-outlined">Purge Bio</a>
                                <a href="banuser.html" class="pw3az dysuc is-outlined">Ban User</a>
                            </div>
                        </div>
                    </div>

                </div>

                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Bucks</p>
                            <p class="title">{{ usePage<any>().props.user.bucks }}</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Coins</p>
                            <p class="title">{{ usePage<any>().props.user.coins }}</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Last Seen</p>
                            <p class="title">{{ usePage<any>().props.user.DateHum }}</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Registered On</p>
                            <p class="title">{{ usePage<any>().props.user.joined }}</p>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    </Navbar>
</template>
