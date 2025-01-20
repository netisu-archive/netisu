<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { route } from 'momentum-trail';
import { useForm, usePage } from '@inertiajs/vue3';
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import AppHead from '@/Components/AppHead.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import NewsCard from '@/Components/NewsCard.vue';
import StatusCard from '@/Components/StatusCard.vue';
import NewsCardSkeleton from '@/Components/NewsCardSkeleton.vue';
import VLazyImage from "v-lazy-image";
import throttle from "lodash/throttle";
import type { Ref } from 'vue';

const mmzf9 = useForm({
    message: '',
});

const statuses = ref([]);

const getStatuses = throttle(async () => {
    try {
        const response = await axios.get(route(`api.dashboard.statuses`));
        statuses.value = response.data;
    } catch (error) {
        console.error('Error fetching statuses:', error);
    }
}, 15000);

const initialData = statuses;

const ActiveCategory: Ref<string> = ref("Feed");

function setActiveCategory(category): void {
    ActiveCategory.value = category;
};

function createStatusUpdate(status: string): StatusObject {
    return {
        name: usePage<any>().props.auth.user.username,
        dname: usePage<any>().props.auth.user.display_name,
        DateHum: "Just Now",
        message: status,
        thumbnail: usePage<any>().props.auth.user.headshot,
    };
}
const addStatus = (status: string): void => {
    const newStatus = createStatusUpdate(status);
    initialData.value.unshift(newStatus); // Push the single StatusObject
    axios.post(route(`my.dashboard.validate`), {
        message: status,
    }).then((status) => {
        console.log("Your status " + status + "has been posted successfully.");
    }).catch((error) => {
        console.error("Error:", error);
    });
};

const getXPProgressWidth = (currentxp, nextxp) => {
    const f1h00 = (currentxp / nextxp) * 100;
    return `${progress}%`;
};

onMounted(() => {
    getStatuses();
});
</script>

<template>
    <AppHead pageTitle="Dashboard" :description="'Login to' + usePage<any>().props.site.name + '.'"
        :url="route('auth.login.page')" />
    <Navbar />
    <Sidebar>
        <div class="l85js u6xfc l9zul">

            <div class="doh7b yrzca mkoq3">
                <Link :href="route(`user.profile`, { username: usePage<any>().props.auth.user.username })">
                <v-lazy-image :src="usePage<any>().props.auth.user.headshot" width="100"
                    class="border pt8l6 clw3y img-fluid rounded-circle border-secondary bg-dark v-lazy-image v-lazy-image-loaded m1f0h col-md-4 d-flex justify-content-center align-content-start"
                    style="flex-direction: column;" alt="Avatar" src-placeholder="/assets/img/dummy_headshot.png" />
                </Link>
                <div class="m1f0h col-md-4 d-flex justify-content-center align-content-start"
                    style="flex-direction: column;">
                    <div class="aszip">
                        <span class="text-base ja9zv umlu3">
                            Welcome Back
                        </span>
                        <div></div>
                        <Link class="text-base ja9zv umlu3"
                            :href="route(`user.profile`, { username: usePage<any>().props.auth.user.username })">
                        {{ "@" + usePage<any>().props.auth.user.username }}
                            </Link>
                    </div>
                </div>
            </div>
        </div>
        <div class="u6xfc s4yjr">
            <div class="lrcyb te269 yrzca  pfmvb mkoq3 vhnj2">
                <v-lazy-image :src="usePage<any>().props.auth.user.thumbnail" width="200" alt="Avatar"
                    src-placeholder="/assets/img/dummy.png" />
                <div class="wruu4 umlu3 wxza1" style="line-height: 16px">
                    <div :class="usePage<any>().props.auth.user.staff ? 'szivm' : 'dfoi1'">
                        {{ usePage<any>().props.auth.user.staff ? usePage<any>().props.auth.user.position : 'Netizen' }}
                    </div>
                </div>
                <div class="sv9mx sd6c8"></div>
                <div class="sd6c8">
                    <div class="doh7b yrzca mkoq3">
                        <i class="t8wm3 fas fa-medal szahi" style="width: 40px"></i>
                        <div class="sd6c8">
                            <div class="kqzo1 mkoq3 ufpvb">
                                <div class="ut8sj aki3a iniww q611u">
                                    Rank {{ 'Lvl. ' + usePage<any>().props.auth.user.level }}
                                </div>
                                <div class="ut8sj aki3a iniww q611u">
                                    {{ usePage<any>().props.auth.user.xp + '/' + usePage<any>
                                            ().props.nextlevelxp }} EXP
                                </div>
                            </div>
                            <div class="jfokc">
                                <span class="f1h00"
                                    :style="{ width: getXPProgressWidth(usePage<any>().props.auth.user.xp, usePage<any>().props.nextlevelxp) }"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="u6xfc a1ry2">
            <div class="jol0p">
                <ul class="pbsky">
                    <li class="glte7">
                        <a class="gqx9g fhjfg" :class="{ active: 'Feed' === ActiveCategory }" @click="
                            setActiveCategory('Feed')">Feed</a>
                    </li>
                    <li class="glte7">
                        <a class="gqx9g fhjfg" :class="{ active: 'Stats' === ActiveCategory }" @click="
                            setActiveCategory('Stats')">Stats</a>
                    </li>
                </ul>
            </div>
            <div class="jol0p no-divider" v-if="ActiveCategory === 'Feed'">
                <div class="kqzo1 o204m umlu3">
                    The {{ usePage<any>().props.site.name }} Times
                </div>
                <div class="lrcyb u6xfc om09p kqzo1 ufpvb  mkoq3" v-if="NewsLoading">
                    <NewsCardSkeleton />
                    <NewsCardSkeleton />
                    <NewsCardSkeleton />

                </div>
                <div class="u6xfc juc77 om09p u6oj5" v-else>

                    <div class="doh7b wruu4 mkoq3 vhnj2" v-if="!Feed">
                        <i class="ku9nu fas fa-face-sleeping iniww"></i>
                        <div style="line-height: 18px">
                            <div class="ut8sj aki3a iniww q611u">
                                No Blog Posts
                            </div>
                            <div class="ut8sj iniww umlu3">
                                When we publish a post it will appear here.
                            </div>
                        </div>
                    </div>
                    <div class="n91zp szivm umlu3" v-else-if="Feed.error">
                        {{ Feed.error }}
                    </div>
                    <div v-else class="us3s8 o5qdx bszft">
                        <NewsCard class="u6xfc juc77 qzy08 c7aof" v-for="Bpost in Feed" :key="Bpost.link"
                            :link="Bpost.link" :creator="Bpost.creator" :image="Bpost.image" :title="Bpost.title"
                            :desc="Bpost.desc" :date="Bpost.date" />
                    </div>
                </div>
                <div class="kqzo1 o204m umlu3 idns6">
                    Feed
                </div>
                <div class="te269">
                    <div class="luhjr">
                        <textarea class="ryur2 mmzf9 dtmfn swb1b mcymv" rows="5"
                            v-model="form.message" placeholder="How are you doing?"></textarea>
                        <input type="submit" @click="addStatus(form.message)" class="of1zd fm57z xjtlw has-ripple"
                            value="Post" style="
                            position: absolute;
                            bottom: 10px;
                            right: 10px;
                        " />
                    </div>
                </div>
                <div class="kqzo1 o204m umlu3">Posts</div>
                <div class="bbztw pfmvb">

                    <div class="doh7b wruu4 mkoq3 vhnj2" v-if="!statuses.length">
                        <i class="ku9nu fas fa-face-sleeping iniww"></i>
                        <div style="line-height: 16px">
                            <div class="ut8sj aki3a iniww q611u">
                                No Posts
                            </div>
                            <div class="ut8sj iniww umlu3">
                                Start following players and their posts will appear here.
                            </div>
                        </div>
                    </div>
                    <StatusCard v-else v-for="(status, index) in initialData" :key="index" :DisplayName="status.dname"
                        :Thumbnail="status.thumbnail" :name="status.name" :message="status.message"
                        :date="status.DateHum" />
                </div>
            </div>
            <div class="jol0p no-divider" v-else-if="ActiveCategory === 'Stats'">
                <div class="us3s8 o5qdx bszft">

                    <div class="bbztw pfmvb u6xfc juc77 qzy08 c7aof">
                        <div class="mkoq3">
                            <div class="aszip">

                                <div class="ut8sj umlu3 j6kfv q611u"><i
                                        class="erxpu fa-crown"></i> Total Sales</div>
                                <div class="kqzo1 o204m q611u">{{ usePage<any>().props.totalSales
                                        }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="bbztw pfmvb u6xfc juc77 qzy08 c7aof">
                        <div class="mkoq3">
                            <div class="aszip">

                                <div class="ut8sj umlu3 dfoi1 q611u"><i class="erxpu fa-user"></i>
                                    Total Followers</div>
                                <div class="kqzo1 o204m q611u">{{ usePage<any>().props.totalFollowers
                                        }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="bbztw pfmvb u6xfc juc77 qzy08 c7aof">
                        <div class="mkoq3">
                            <div class="aszip">

                                <div class="ut8sj umlu3 szahi q611u"><i class="erxpu fa-message"></i>
                                    Total Posts</div>
                                <div class="kqzo1 o204m q611u">{{ usePage<any>().props.totalPosts
                                        }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="bbztw pfmvb u6xfc juc77 qzy08 c7aof" v-if="usePage<any>().props.auth.user.staff">
                        <div class="mkoq3">
                            <div class="aszip">

                                <div class="ut8sj umlu3 szivm q611u"><i class="erxpu fa-gavel"></i>
                                    Pending Assets</div>
                                <div class="kqzo1 o204m q611u">{{ usePage<any>().props.auth.user.pendingAssets
                                        }}</div>
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
    data() {
        return {
            Feed: <any>[],
            NewsLoading: false,
            StatusLoading: false,
        }
    },
    mounted() {
        this.getFeed()
    },

    methods: {
        async getFeed() {
            try {
                this.NewsLoading = true;
                const response = await axios.get(route('api.rss')); // Assuming 'api.rss' is the correct API route
                this.Feed = response.data; // Use response.data directly to get the response tf1xb
                this.NewsLoading = false;
            } catch (error) {
                this.NewsLoading = true;
                console.error(error);
            }
        },
    }
}
</script>
