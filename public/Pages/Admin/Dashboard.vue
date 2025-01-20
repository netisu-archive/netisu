<script setup lang="ts">
import axios from "axios";
import { route } from "momentum-trail"

import { usePage } from "@inertiajs/vue3";
import Navbar from "@/Components/LayoutParts/Admin/AdminNavbar.vue";
import AppHead from "@/Components/AppHead.vue";
import { ref, watch } from "vue";


let MaintenanceActive = ref(usePage<any>().props.siteSettings.inMaintenance);
const ForumActive = ref(usePage<any>().props.siteSettings.discussion_enabled);
const MarketActive = ref(usePage<any>().props.siteSettings.market_enabled);
const CustomizationActive = ref(usePage<any>().props.siteSettings.customization_enabled);
const SpacesActive = ref(usePage<any>().props.siteSettings.spaces_enabled);


const EnableMaintenance = async () => {
    try {
        await axios.post(route(`api.admin.enableMaintenance`));
        MaintenanceActive.value = 1;
    } catch (err) {
        console.error(err);
    }
};

const DisableMaintenance = async () => {
    try {
        await axios.post(route(`api.admin.disableMaintenance`));
        MaintenanceActive.value = 0;
    } catch (err) {
        console.error(err);
    }
};
watch(MaintenanceActive, (newValue, oldValue) => {
    console.log("Maintenance variable changed from", oldValue, "to", newValue);
});
</script>

<template>
    <AppHead pageTitle="Admin Dashboard" description="Login to Vestora." :url="route('admin.page')" />
    <Navbar>
        <div class="bbztw">
            <div class="card-content">
                <div class="columns">
                    <div class="column is-2">
                        <figure class="image">
                            <img class="is-rounded" :src="usePage<any>().props.auth?.user?.headshot" />
                        </figure>
                    </div>
                    <div class="column is-5">
                        <br />

                        <p class="title is-2" style="margin-bottom:0.5rem;">Welcome back, {{ usePage<any>
                            ().props.auth?.user?.username }}</p>
                        <span class="tag dysuc is-medium">{{ usePage<any>().props.auth?.user?.position }}</span>
                    </div>
                </div>

                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Admin Points</p>
                            <p class="title">{{ usePage<any>().props.stats.adminPoints }}</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Content Approved</p>
                            <p class="title">1,500</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Reports Dealt With</p>
                            <p class="title">34,247</p>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

        <br />
        <div class="bbztw">
            <div class="card-content">
                <p class="title is-4">Maintenance Mode</p>
                <p class="subtitle is-6">Maintenance is currently {{ MaintenanceActive ? "ON" : "OFF" }}!</p>
                <a v-if="usePage<any>().props.stats.canControlMaintenance" class="pw3az"
                    :class="{ 'is-active': MaintenanceActive ? true : false }"
                    @click="!MaintenanceActive ? EnableMaintenance() : DisableMaintenance()">Turn Maintenance {{
                        !MaintenanceActive ? "ON" : "OFF" }}</a>
            </div>
        </div>
        <br />
        <div class="bbztw">
            <div class="card-content">
                <div class="columns">
                    <div class="column is-4">
                        <div class="buttons">
                            <button v-if="usePage<any>().props.stats.canControlMarketPurchases"
                                :class="{ 'is-active': MarketActive ? true : false }" class="pw3az">{{ MarketActive ?
                                    'Enable' : 'Disable' }}
                                Market</button>
                            <button v-if="usePage<any>().props.stats.canControlDiscussion"
                                :class="{ 'is-active': ForumActive ? true : false }" class="pw3az">{{ ForumActive ?
                                    'Enable' : 'Disable' }}
                                Discussion</button>
                            <button v-if="usePage<any>().props.stats.canControlCustomization"
                                :class="{ 'is-active': CustomizationActive ? true : false }" class="pw3az">{{
                                    CustomizationActive ?
                                        'Enable' : 'Disable' }} Customization</button>
                            <button v-if="usePage<any>().props.stats.canControlSpaces"
                                :class="{ 'is-active': SpacesActive ? true : false }" class="pw3az">{{ SpacesActive ?
                                    'Enable' : 'Disable' }}
                                Spaces</button>
                        </div>
                    </div>
                    <div class="column is-8" v-if="usePage<any>().props.stats.canEnableAnnouncement">
                        <p class="title is-4">
                            Change announcement o9hmy
                        </p>
                        <div class="columns">
                            <div class="column is-3" v-if="usePage<any>().props.stats.canEnableAnnouncement">
                                <div class="nzsee title is-6 is-fullwidth">
                                    <select>
                                        <option>Enable</option>
                                        <option>Disable</option>
                                    </select>
                                </div>
                            </div>
                            <div class="column is-7">
                                <input class="wqylv" type="ID"
                                    :placeholder="usePage<any>().props.site_config.announcement_message">
                            </div>
                            <div class="column">
                                <a class="pw3az is-fullwidth">Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Navbar>
</template>
