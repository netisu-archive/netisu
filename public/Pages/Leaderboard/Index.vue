<script setup lang="ts">
import Navbar from "@/Components/LayoutParts/Navbar.vue";
import Sidebar from "@/Components/LayoutParts/Sidebar.vue";
import Footer from "@/Components/LayoutParts/Footer.vue";
import AppHead from "@/Components/AppHead.vue";
import { route } from "momentum-trail"
// If you're using the 'route' function from 'momentum-trail'
import { usePage } from "@inertiajs/vue3";

defineProps({
    XP: { type: Array },
    Bucks: { type: Array },
});

const TopList = (indexKey: Number) => {
    if (indexKey === 1) {
        return "j6kfv";
    } else if (indexKey === 2) {
        return "szahi";
    } else if (indexKey === 3) {
        return "szivm";
    } else {
        return "jtcwt";
    }
};
</script>

<template>
    <AppHead pageTitle="Leaderboard" :description="'Top users on ' + usePage<any>().props.site.name + '.'"
        :url="route('leaderboard.page')" />
    <Navbar />
    <Sidebar>
        <div class="u6xfc rank4">
            <div class="ryur2 o204m umlu3">Top Cash Earners</div>
            <div class="bbztw">
                <div class="ghpy4 pfmvb">
                    <div class="doh7b wruu4 te269 mkoq3 vhnj2" v-if="!Bucks?.['length']">
                        <i class="ku9nu erxpu fa-coins iniww"></i>
                        <div style="line-height: 16px">
                            <div class="ut8sj aki3a iniww q611u">
                                No Leaders
                            </div>
                            <div class="iniww umlu3">
                                <p class="ut8sj">
                                    There are currently no leaders.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="te269 row thread" :key="index" v-for="(topBucks, index) in Bucks">
                        <div class="doh7b yrzca mkoq3">
                            <div class="ja9zv umlu3" :class="TopList(Number(index + 1))">
                                {{ "#" + Number(index + 1) }}
                            </div>
                            <div class="m1f0h col-md-4 d-flex justify-content-center align-content-start"
                                style="flex-direction: column">
                                <div class="aszip">
                                    <Link :href="route('user.profile', {
                                        username: topBucks.username,
                                    })
                                        " class="wxza1">
                                    {{ topBucks.username }}
                                    </Link>
                                    <div></div>
                                    <div class="n91zp umlu3 dfoi1">
                                        <i class="fas fa-money-bill-1-wave">&nbsp;</i>{{ topBucks.bucks }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lj0fs jbv13 sv9mx"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="u6xfc rank4">
            <div class="ryur2 o204m umlu3">Top Level Leaders</div>
            <div class="bbztw">
                <div class="ghpy4 pfmvb">
                    <div class="doh7b wruu4 te269 mkoq3 vhnj2" v-if="XP?.['length']">
                        <i class="ku9nu erxpu fa-arrow-up iniww"></i>
                        <div style="line-height: 16px">
                            <div class="ut8sj aki3a iniww q611u">
                                No Leaders
                            </div>
                            <div class="iniww umlu3">
                                <p class="ut8sj">
                                    There are currently no leaders.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="te269 row thread" :key="index" v-for="(top, index) in XP">
                        <div class="doh7b yrzca mkoq3">
                            <div class="ja9zv umlu3" :class="TopList(Number(index + 1))">
                                {{ "#" + Number(index + 1) }}
                            </div>
                            <div class="m1f0h col-md-4 d-flex justify-content-center align-content-start"
                                style="flex-direction: column">
                                <div class="aszip">
                                    <Link :href="route('user.profile', {
                                        username: top.username,
                                    })
                                        " class="wxza1">
                                    {{ top.username }}
                                    </Link>
                                    <div></div>
                                    <div class="n91zp umlu3 iniww">
                                        {{
                                            "Rank Lvl. " +
                                            top.experience.level_id
                                        }}<span class="lj0fs">&bullet;</span>{{
                                            top.experience.experience_points +
                                            "XP"
                                        }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lj0fs jbv13 sv9mx"></div>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar>
    <Footer />
</template>
