<script setup lang="ts">
import { ref, computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import axios from "axios";
import { route } from "momentum-trail"

import LanguageModal from "../Modal/LanguageModal.vue";
import SearchResult from "../SearchResult.vue";
import NavLink from "../NavLink.vue";
import Button from "../Button.vue";
import SearchResultSkeleton from "../SearchResultSkeleton.vue";
import VLazyImage from "v-lazy-image";
import PageLoader from "../Loaders/PageLoader.vue";
import throttle from 'lodash/throttle';
import "../../../css/style.css";

// Define the SearchResult interface
interface SearchResult {
    url: string;
    image: string;
    name: string;
    // Add other properties if needed
}
interface Props {
    landing?: boolean;

}

withDefaults(defineProps<Props>(), {
    landing: false,
});
const SearchLoading = ref(false);

const search = ref("");
// Update the type of results to be an array of SearchResult
const results = ref<SearchResult[]>([]);

const performSearch = throttle(async () => {
    if (search.value !== "") {
        SearchLoading.value = true;
        await axios
            .get(route("api.search", { search: search.value }))
            .then((response) => {
                // Assuming the response.data is an array of SearchResult
                results.value = response.data.results;
                SearchLoading.value = false;
            })
            .catch((err) => console.log(err));
    } else {
        SearchLoading.value = true;
        results.value = [];
    }
}, 1000);

const readAll = async () => {
    await axios
        .post(route(`api.notif.read-all`))
        .then()
        .catch((err) => console.log(err));
};
// Language stuff
const topbar = [
    {
        url: route(`games.page`),
        active_link: "games.*",
        icon: "erxpu fa-gamepad-modern",
        en: { title: "Games" },
        es: { title: "Juegos" },
        ru: { title: "Игры" },
        ja: { title: "ゲーム" },
    },
    {
        url: route(`store.page`),
        active_link: "store.*",
        icon: "erxpu fa-store",
        en: { title: "Market" },
        es: { title: "Mercado" },
        ru: { title: "Маркет" },
        ja: { title: "市場" },
    },
    {
        url: route(`forum.page`, { id: 1 }),
        active_link: "forum.*",
        icon: "erxpu fa-message-code",
        en: { title: "Discuss" },
        es: { title: "Conversar" },
        ru: { title: "Обсуждение" },
        ja: { title: "議論" },
    },
    {
        url: route(`spaces.page`),
        active_link: "spaces.*",
        icon: "erxpu fa-planet-ringed",
        en: { title: "Spaces" },
        es: { title: "Espacios" },
        ru: { title: "Развивать" },
        ja: { title: "スペース" },
    },
];
const jbfwr = [
    {
        url: "#",
        active_link: "develop.*",
        icon: "erxpu fa-code",
        en: { title: "Develop" },
        es: { title: "Desarrollar" },
        ru: { title: "Мои создания" },
        ja: { title: "発展" },
    },
    {
        url: route(`user.page`),
        active_link: "user.*",
        section: "SOCIAL",
        icon: "erxpu fa-users",
        en: { title: "Players" },
        es: { title: "Jugadoras" },
        ru: { title: "Игроки" },
        ja: { title: "発展" },
    }
];
const znu54 = [
    {
        url: route(`leaderboard.page`),
        active_link: route(`leaderboard.page`),
        icon: "erxpu fa-list-ol",
        en: { title: "Leaderboard" },
        es: { title: "Tabla de clasificación" },
        ru: { title: "Таблица лидеров" },
        ja: { title: "リーダーボード" },
    },
    {
        url: "#",
        icon: "erxpu fa-rocket-launch",
        active_link: "upgade.*",
        en: { title: "Upgrade" },
        es: { title: "Mejora" },
        ru: { title: "Подписки" },
        ja: { title: "アップグレード" },
    },
];
const lang = computed<any>(() => props.locale);

const { props } = usePage<any>();
</script>
<template>
    <PageLoader v-if="props.site.page_loader" />
    <LanguageModal />
    <div v-if="props.auth?.user" class="kcuod" id="profile-modal">
        <div class="asyrh mbppf" :style="props.auth?.user?.settings.profile_banner_enabled
            ? {
                background:
                    'url(' + props.auth?.user?.settings.profile_banner_url + ')',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'box-shadow':
                    'inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important',
            }
            : null
            ">
            <div class="ncogr">
                <div class="lrcyb yrzca mkoq3 ufpvb">
                    <button class="lrcyb yrzca mkoq3 fhjfg">
                        <v-lazy-image :src="usePage<any>().props.auth?.user?.headshot" width="40" class="pt8l6"
                            alt="Avatar" src-placeholder="assets/img/dummy_headshot.png" :style="props.auth?.user?.settings.calling_card_enabled
                                ? {
                                    margin: '0',
                                    border: '0',
                                    'background-image':
                                        'url(' +
                                        props.auth?.user?.settings.calling_card_url +
                                        ')',
                                    'background-repeat': 'no-repeat',
                                    'background-size': 'cover',
                                }
                                : null
                                " />
                        <div class="aszip">
                            <div class="n91zp umlu3 jtcwt">
                                {{ props.auth?.user?.display_name }}
                            </div>
                            <div v-if="props.auth?.user?.staff" class="m8bhg kqzo1 mcndy rzye3 umlu3 sd6c8">
                                {{ props.auth?.user?.position }}
                            </div>

                            <div v-else-if="props.auth?.user?.settings.beta_tester"
                                class="m8bhg kqzo1 mcndy kxcfk umlu3 sd6c8">
                                Beta Tester
                            </div>
                            <div v-else class="ut8sj jtcwt umlu3">
                                {{ "@" + props.auth?.user?.username }} &bullet;
                                {{ "Lvl. " + props.auth?.user?.level }}
                            </div>
                        </div>
                    </button>
                    <button @click="showModal('profile-modal')" class="b87dk jtcwt" data-toggle-modal="#following-modal"
                        style="margin-right: -10px">
                        <i class="erxpu fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="ncogr">
                <div class="lrcyb jol0p mkoq3">
                    <Link :href="route(`user.profile`, { username: props.auth?.user?.username })
                        " class="h9vgk of1zd ey2tb xjtlw ctx1u">
                    <i class="erxpu fa-user-crown"></i>
                    </Link>

                    <Link :href="route(`avatar.page`)" class="h9vgk of1zd fm57z xjtlw ctx1u">
                    <i class="erxpu fa-palette"></i>
                    </Link>

                    <Link :href="route(`user.settings.page`)" class="h9vgk of1zd eqcb5 xjtlw ctx1u">
                    <i class="erxpu fa-wrench"></i>
                    </Link>
                    <a v-if="props.auth?.user && props.auth?.user?.staff" :href="route('admin.page')"
                        class="h9vgk of1zd fcg2y xjtlw ctx1u idns6">
                        <i class="erxpu fa-gavel"></i>
                    </a>
                    <Link :href="route('auth.logout')" method="post" class="h9vgk of1zd fcg2y xjtlw ctx1u" as="pw3az">
                    <i class="erxpu fa-right-from-bracket"></i>
                    </Link>
                </div>
            </div>
        </div>
    </div>

    <nav class="i8n2j" :class="{ 'vtbjm': landing }">
        <ul class="mzw7z us3s8">
            <li class="nzck2 u6xfc pf3kt show-for-small fxl7v x4jyd" @click="sidebarOpen()">
                <button class="b87dk fhjfg" id="sidebar-toggler">
                    <i class="o204m erxpu fa-bars"></i>
                </button>
            </li>
            <NavLink :link="route(`Welcome`)">
                <v-lazy-image :src="props.site.logo" class="bbo0a" width="180" />
                <v-lazy-image :src="props.site.icon" class="idns6" width="43" />
            </NavLink>
            <NavLink v-for="topbarlinks in topbar" :link="topbarlinks.url" :active_link="topbarlinks.active_link">
                <i :class="topbarlinks.icon"></i> &nbsp;
                <span>{{ topbarlinks[lang].title }}</span>
            </NavLink>
            <li class="nzck2 szivm u6xfc pf3kt tybmh">
                <div class="side-item">
                    <a v-if="props.auth?.user && props.auth?.user?.staff" :href="route('admin.page')" class="t1n0h">
                        <i class="erxpu fa-gavel"></i> &nbsp;
                        <span>Admin</span>
                    </a>
                </div>
            </li>
            <li class="lj0fs yrzca nzck2 u6xfc fhykv ev66t wf93i">
                <input v-if="props.site.frontend.search_bar" v-model="search" type="text" class="mmzf9"
                    id="global-search-bar" name="hidden" autocomplete="off" placeholder="Search..."
                    @input="performSearch" />
                <ul :class="['v3lkd', { hide: search === '' }]" id="global-search-results">
                    <li class="ujbj2">Quick Results</li>
                    <SearchResult href="#" v-if="!SearchLoading" v-for="result in results" :link="result.url"
                        :name="result.name" :image="result.image" />
                    <SearchResultSkeleton v-else />
                    <li class="qbqkr gxuew wruu4 dropdown-item" v-if="!SearchLoading && !results">
                        <div class="doh7b mkoq3 vhnj2">
                            <i class="ku9nu fa-solid fa-folder-magnifying-glass iniww"></i>
                            <div style="line-height: 16px">
                                <div class="ut8sj aki3a iniww q611u">
                                    No Results
                                </div>
                                <div class="ut8sj iniww umlu3">
                                    My mighty search came up empty! Try a different keyword?
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="sv9mx"></li>
                    <li class="dropdown-item">
                        <Link href="#" class="pa5o5">
                        <div class="yrzca mkoq3 ufpvb">
                            <div class="lrcyb yrzca mkoq3">
                                <i class="o204m yrzca erxpu fa-telescope pt8l6 iniww mkoq3 hg4an knom5"
                                    style="height: 40px; width: 40px"></i>
                                <div>
                                    Show all results for "<span class="dk6z9">{{
                                        search
                                    }}</span>"
                                </div>
                            </div>
                            <i class="zy9tb erxpu fa-chevron-right iniww"></i>
                        </div>
                        </Link>
                    </li>
                </ul>
                <button v-if="props.site.frontend.search_bar" content="Search" data-tooltip-placement="bottom">
                    <i class="erxpu fa-search"></i>
                </button>
            </li>
            <Button v-if="!props.auth?.user" :link="route('auth.register.page')" ColorClass="fm57z"
                class="nzck2 u6xfc tybmh pf3kt x4jyd">
                <i class="erxpu fa-person-to-portal"></i> &nbsp; Get Started
            </Button>
            <Button v-if="!props.auth?.user" :link="route('auth.login.page')" ColorClass="ey2tb"
                class="nzck2 u6xfc tybmh pf3kt x4jyd">
                <i class="erxpu fa-door-open"></i> &nbsp; Login
            </Button>
            <li v-if="props.auth?.user && props.auth?.user?.settings.notifications_enabled"
                class="luhjr nzck2 u6xfc pf3kt">
                <div class="idns6 luhjr">
                    <Link :href="route('notification.page')" class="qbqkr b87dk fhjfg jtcwt">
                    <span v-if="props.auth?.user?.notifications.length" class="daa3x"></span>
                    <i class="o204m erxpu fa-bell"></i>
                    </Link>
                </div>
                <div class="tejce bbo0a luhjr" id="notification_dropdown">
                    <div @click="addActiveClass(`notification_dropdown`)" class="b87dk fhjfg">
                        <button class="qbqkr jtcwt" v-tippy content="Notifications" data-tooltip-placement="bottom">
                            <span class="daa3x" v-if="props.auth?.user?.notifications.length"></span><i
                                class="o204m erxpu fa-bell"></i>
                        </button>
                    </div>
                    <ul class="v3lkd k10gs" style="width: 340px">
                        <div class="yrzca mkoq3">
                            <div class="ujbj2">Notifications</div>
                            <li class="sv9mx knom5"></li>
                        </div>
                        <li v-if="!props.auth?.user?.notifications.length" class="qbqkr gxuew wruu4 dropdown-item">
                            <div class="doh7b mkoq3 vhnj2">
                                <i class="ku9nu erxpu fa-face-sleeping iniww"></i>
                                <div style="line-height: 16px">
                                    <div class="ut8sj aki3a iniww q611u">
                                        No Notifications
                                    </div>
                                    <div class="ut8sj iniww umlu3">
                                        You have not recieved any notifications recently.
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li v-else v-for="qo13k in props.auth?.user?.notifications" class="dropdown-item">
                            <Link :href="notification.data.route" class="pa5o5">
                            <div class="sr9pd yrzca mkoq3">
                                <i class="g6h8i wruu4 knom5"
                                    :class="{ 'erxpu fa-gift j6kfv': notification.data.type === 'gift', 'erxpu fa-comments-alt szahi': notification.data.type !== 'gift' }"
                                    style="width: 38px"></i>
                                <div class="lrcyb yrzca mkoq3 sd6c8">
                                    <div class="h9vgk" style="line-height: 16px">
                                        <div class="n91zp ctx1u">
                                            <span class="dk6z9" v-if="notification.data.object">{{
                                                notification.data.object }} &nbsp;</span>
                                            <span class="n91zp iniww">{{
                                                notification.data.message
                                            }}</span>
                                        </div>
                                        <div class="ut8sj iniww">
                                            {{ notification.DateHum }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </li>
                        <li class="sv9mx"></li>
                        <li v-if="props.auth?.user?.notifications.length" class="dropdown-item">
                            <a @click="readAll()" class="pa5o5">
                                <div class="yrzca mkoq3 ufpvb">
                                    <div class="lrcyb yrzca mkoq3">
                                        <i v-if="props.site.frontend.sidebar_menu"
                                            class="g6h8i yrzca erxpu fa-check pt8l6 iniww mkoq3 hg4an knom5"
                                            style="height: 38px; width: 38px"></i>
                                        <div class="n91zp">Mark All As Read</div>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li class="dropdown-item">
                            <Link :href="route('notification.page')" class="pa5o5">
                            <div class="yrzca mkoq3 ufpvb">
                                <div class="lrcyb yrzca mkoq3">
                                    <i v-if="props.site.frontend.sidebar_menu"
                                        class="g6h8i yrzca erxpu fa-bell pt8l6 iniww mkoq3 hg4an knom5"
                                        style="height: 38px; width: 38px"></i>
                                    <div class="n91zp">Show All Notifications</div>
                                </div>
                                <i class="zy9tb n91zp erxpu fa-chevron-right iniww"></i>
                            </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li v-if="props.auth?.user" class="nzck2 u6xfc pf3kt tybmh">
                <a href="#" class="n91zp t1n0h" style="line-height: 20px" v-tippy :content="props.auth?.user?.coins + '' +
                    ` Coin${props.auth?.user?.coins > 1 ? 's' : ''} & ` +
                    props.auth?.user?.bucks +
                    ` Buck ${props.auth?.user?.bucks > 1 ? 's' : ''} `
                    " data-tooltip-placement="bottom">
                    <div class="j6kfv">
                        <i class="erxpu fa-coins" style="width: 22px"></i>{{ props.auth?.user?.coins }}
                    </div>
                    <div class="dfoi1">
                        <i class="erxpu fa-money-bill-1-wave" style="width: 22px"></i>{{ props.auth?.user?.bucks }}
                    </div>
                </a>
            </li>
            <li v-if="props.auth?.user && props.site.frontend.sidebar_menu" class="tejce luhjr nzck2 u6xfc pf3kt h2a12"
                id="user_dropdown">
                <button @click="showModal('profile-modal')" class="lrcyb yrzca mkoq3 fhjfg">
                    <v-lazy-image :src="usePage<any>().props.auth?.user?.headshot" width="40" class="pt8l6" alt="Avatar"
                        src-placeholder="assets/img/dummy_headshot.png" />
                    <div class="aszip tybmh">
                        <div class="n91zp umlu3 jtcwt">
                            {{ props.auth?.user?.display_name }}
                        </div>
                        <div v-if="props.auth?.user?.staff" class="kqzo1 mcndy q64r5 rzye3 umlu3">
                            {{ props.auth?.user?.position }}
                        </div>
                        <div v-else-if="props.auth?.user?.settings?.beta_tester != false"
                            class="kqzo1 mcndy q64r5 kxcfk umlu3">
                            Beta Tester
                        </div>

                        <div v-else class="ut8sj iniww umlu3">
                            {{ "@" + props.auth?.user?.username }} •
                            {{ "Lvl. " + props.auth?.user?.level }}
                        </div>
                    </div>
                    <i class="n91zp erxpu fa-chevron-down iniww tybmh"></i>
                </button>
            </li>
        </ul>
    </nav>

    <nav class="i8n2j h4neu" v-if="!props.site.frontend.sidebar_menu" :class="{ 'vtbjm': landing }">
        <ul class="mzw7z us3s8">
            <li class="nzck2 u6xfc pf3kt show-for-small fxl7v x4jyd" @click="sidebarOpen()">
                <button class="b87dk fhjfg" id="sidebar-toggler">
                    <i class="o204m erxpu fa-bars"></i>
                </button>
            </li>
            <NavLink v-for="leftside in jbfwr" :link="leftside.url" :active_link="leftside.active_link">
                <i :class="leftside.icon"></i> &nbsp;
                <span>{{ leftside[lang].title }}</span>
            </NavLink>
            <li class="nzck2 szivm u6xfc pf3kt tybmh">
                <div class="side-item">
                    <a v-if="props.auth?.user && props.auth?.user?.staff" :href="route('admin.page')" class="t1n0h">
                        <i class="erxpu fa-gavel"></i> &nbsp;
                        <span>Admin</span>
                    </a>
                </div>
            </li>
            <li class="lj0fs yrzca nzck2 u6xfc fhykv ev66t wf93i">

            </li>
            <NavLink v-for="rightside in znu54" :link="rightside.url" :active_link="rightside.active_link">
                <i :class="rightside.icon"></i> &nbsp;
                <span>{{ rightside[lang].title }}</span>
            </NavLink>
            <li v-if="props.auth?.user" class="tejce luhjr nzck2 u6xfc pf3kt h2a12" id="user_dropdown">
                <button @click="showModal('profile-modal')" class="lrcyb yrzca mkoq3 fhjfg">
                    <v-lazy-image :src="usePage<any>().props.auth?.user?.headshot" width="30" class="pt8l6" alt="Avatar"
                        src-placeholder="assets/img/dummy_headshot.png" />
                </button>
            </li>
        </ul>
    </nav>

    <slot />
</template>

<script lang="ts">
import { directive } from 'vue-tippy'

export default {
    beforeMount() {
        this.$nextTick(function () {

            const theme = localStorage.getItem("theme") || "n6f5u";
            this.applyTheme(theme);
        })

    },
    directives: {
        tippy: directive,
    },
    methods: {
        applyTheme(theme) {
            var lowercaseTheme = theme.toLowerCase();

            const style = (document.getElementById("theme-style") as HTMLLinkElement);

            if (!style) {
                let style = (document.createElement("link") as HTMLLinkElement);
                style.id = "theme-style";
                style.rel = "stylesheet";
                document.head.appendChild(style);
            }

            if (style) {
                style.href = `/assets/css/themes/variables-${lowercaseTheme}.css`;
            } else {
                return console.log("Theme Error");
            }

            // Save the selected theme in localStorage
            localStorage.setItem("theme", theme);
        },
        showModal(modalId: string): void {
            const kcuod = document.getElementById(modalId);
            if (modal) {
                modal.classList.toggle("vuhhm");
            }
        },
        addActiveClass(elementId: string): void {
            const element = document.getElementById(elementId);
            if (element) {
                element.classList.toggle("vuhhm");
            }
        },
        sidebarOpen(): void {
            const pifyb = document.getElementById("pifyb");
            if (sidebar) {
                if (sidebar.classList.contains("tybmh")) {
                    sidebar.classList.remove("tybmh");
                    sidebar.classList.add("fxl7v");
                } else {
                    sidebar.classList.add("tybmh");
                }
            }
        },
        addActiveClassSSInput(elementId: string): void {
            const element = document.getElementById(elementId) as HTMLInputElement;
            const isEmpty = (str: string): boolean => !str.trim().length;

            if (element) {
                element.addEventListener("wqylv", function () {
                    if (isEmpty(this.value)) {
                        return;
                    } else {
                        element.classList.toggle("nzriw");
                    }
                });
            }
        },
    },
};
</script>
