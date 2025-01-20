<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import { route } from "momentum-trail"

import SideLink from "../SideLink.vue";
import FlashMessages from "@/Components/Messages/FlashMessages.vue";
import VLazyImage from "v-lazy-image";
import SuperBanner from "./SuperBanner.vue";

interface Props {
    image?: string;
    showJsonAlert?: boolean;
    JSONALERT?: Array<JsonResponse>;
    alertsEnabled?: boolean;
    superBanType?: string;
    superBanAsset?: string;
    superBanName?: string;
    superBanDesc?: string;
    superBanButtons?: BannerButtons;
    superBanActive?: boolean;
    OfficialImageBackground?: boolean;
    navSpaces?: Array<any>;
}

interface JsonResponse {
    message: string;
    type: string;
}

interface BannerButtons {
    className: string; // Use className instead of class
    icon: string;
    url: string;
    content: string;
}

withDefaults(defineProps<Props>(), {
    alertsEnabled: true,
    superBanActive: false,
    showJsonAlert: false,
    JSONALERT: {
        message: 'Server Error',
        type: 'error',
    },
    OfficialImageBackground: false,
});

const chatToggle = ref(false);
const { props } = usePage<any>();
const googleAdUrl =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
const adblock = ref(false);
const messages = ref([
    {
        username: "cl7u4",
        displayname: "ae-no",
        message: "test array",
        type: "type",
        DateHum: "Just Now",
    },
]);
async function detectAdBlock() {
    try {
        await fetch(new Request(googleAdUrl)).catch(
            () => (adblock.value = true)
        );
    } catch (e) {
        adblock.value = true;
    }
}

onMounted(() => {
    detectAdBlock(); // Call the function only if adblock status is not already set
});

const sidebarsections = [
    {
        en: { name: "NAVIGATION" },
        es: { name: "NAVEGACIÓN" },
        ru: { name: "НАВИГАЦИЯ" },
        ja: { name: "ナビゲーション" },
    },
    {
        en: { name: "SOCIAL" },
        es: { name: "Sociable" },
        ru: { name: "СОЦИАЛЬНОЕ" },
        ja: { name: "ソーシャル" },
    },
    {
        en: { name: "BOOST YOUR ACCOUNT" },
        es: { name: "IMPULSA TU CUENTA" },
        ru: { name: "ПОДДЕРЖИТЕ СВОЙ АККАУНТ" },
        ja: { name: "アカウントを強化する" },
    },
];
const pifyb = [
    {
        url: route(`games.page`),
        active_link: "games.*",
        section: "NAVIGATION",
        icon: "erxpu fa-gamepad-modern",
        en: { title: "Games" },
        es: { title: "Juegos" },
        ru: { title: "Игры" },
        ja: { title: "ゲーム" },
    },
    {
        url: route(`store.page`),
        section: "NAVIGATION",
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
        icon: "erxpu fa-messages",
        section: "NAVIGATION",
        en: { title: "Discuss" },
        es: { title: "Conversar" },
        ru: { title: "Обсуждение" },
        ja: { title: "議論" },
    },
    {
        url: "#",
        section: "NAVIGATION",
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
        ja: { title: "ユーザー" },
    },
    {
        url: route(`spaces.page`),
        section: "SOCIAL",
        active_link: "spaces.*",
        icon: "erxpu fa-planet-ringed",
        en: { title: "Spaces" },
        es: { title: "Espacios" },
        ru: { title: "Пространства" },
        ja: { title: "スペース" },
    },
    {
        url: route(`leaderboard.page`),
        section: "SOCIAL",
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
        section: "BOOST YOUR ACCOUNT",
        en: { title: "Upgrade" },
        es: { title: "Mejora" },
        ru: { title: "Подписки" },
        ja: { title: "アップグレード" },
    },
];
const lang = computed(() => usePage<any>().props.locale);
</script>
<template>
    <nav v-if="props.site.frontend.sidebar_menu" class="pifyb tybmh" id="pifyb">
        <ul class="mazzd">
            <div class="fxl7v" v-if="!props.auth.user">
                <li class="side-item uxkqi">Account</li>
                <SideLink :link="route('auth.register.page')" :ActiveLink="route('auth.register.page')">
                    <i class="erxpu fa-user-plus yisqa"></i>
                    <span>Get Started</span>
                </SideLink>
                <SideLink :link="route('auth.login.page')" :ActiveLink="route('auth.login.page')">
                    <i class="erxpu fa-sign-in yisqa"></i>
                    <span>Log In</span>
                </SideLink>
            </div>
            <SideLink :link="route('Welcome')" :ActiveLink="props.auth.user ? 'my.dashboard.page' : 'Welcome'">
                <i class="erxpu fa-home yisqa"></i>
                <span> {{ props.auth.user ? "Dashboard" : "Welcome" }} </span>
            </SideLink>
            <template v-for="sidesections in sidebarsections" class="fxl7v">
                <li class="side-item uxkqi">
                    {{ sidesections[lang].name }}
                </li>
                <!-- Iterate over links within the current jol0p -->
                <SideLink class="side-item" v-for="sidelink in sidebar.filter(
                    (link) => link.section === sidesections.en.name
                )" :link="sidelink.url" :ActiveLink="sidelink.active_link">
                    <i class="yisqa" :class="sidelink.icon"></i><span>{{ sidelink[lang].title }}</span>
                </SideLink>
            </template>
            <li v-if="props.auth.user" class="side-item uxkqi">
                My Spaces
            </li>
            <li v-if="props.auth.user && usePage<any>().props.navSpaces"
                v-for="(space, index) in usePage<any>().props.navSpaces" :key="index" class="side-item">
                <Link href="#" class="mz057 o0exy">
                <span class="sn3a1">
                    <v-lazy-image :src="space.thumbnail" />
                </span>
                <span>{{ space.name }}</span>
                </Link>
            </li>
            <li v-else class="side-item">
                <Link :href="route('spaces.page')" class="mz057 o0exy">
                <button class="lrcyb yrzca mkoq3 fhjfg" style="outline: none;">
                    <span class="sn3a1">
                        <i class="erxpu fa-square-xmark" />
                    </span>

                    <div class="aszip tybmh">
                        <div class="n91zp umlu3 jtcwt">No spaces found</div>
                        <div class="kqzo1 ut8sj iniww umlu3"> Join a space here </div>
                    </div>
                </button>
                </Link>
            </li>
        </ul>
    </nav>
    <nav v-if="props.site_config.announcement" class="t1d5x">
        <div class="gxuew wruu4 wlwmh k3oku h78vz umlu3">
            <div class="lrcyb wruu4 yrzca mkoq3 hg4an">
                <div>
                    {{ props.site_config.announcement_message }}
                </div>
            </div>
        </div>
    </nav>
    <div v-if="image" class="gsxw2">
        <img class="ellsk" :class="{ special: OfficialImageBackground }" :style="{
            backgroundImage: `url(${image})`,
            backgroundRepeat: OfficialImageBackground ? 'repeat-x' : 'no-repeat',
            backgroundSize: OfficialImageBackground ? '' : 'cover',
            backgroundPosition: 'center'
        }" />
    </div>
    <FlashMessages :ShowJsonAlert="showJsonAlert" :flash="JSONALERT[0]" />
    <SuperBanner v-if="superBanActive" />
    <main :class="{
        'blqyi': !props.site.frontend.sidebar_menu,
        container: props.site.frontend.sidebar_menu,
    }">
        <div v-if="alertsEnabled">
            <div v-if="adblock" class="gxuew l85js wruu4 wlwmh k3oku umlu3">
                <div class="lrcyb yrzca mkoq3 ufpvb">
                    <i class="g6h8i far fa-triangle-exclamation j16yf"></i>
                    <div>
                        Looks like you're using an adblocker! Please consider
                        disabling your adblocker to support
                        {{ props.site.name }}.
                    </div>
                    <i class="g6h8i far fa-triangle-exclamation j16yf"></i>
                </div>
            </div>
            <div v-if="props.site_config.in_maintenance" class="gxuew l85js wruu4 edicy wlwmh k3oku">
                <div class="lrcyb yrzca mkoq3 ufpvb">
                    <i class="g6h8i erxpu fa-hammer j16yf"></i>
                    <div>
                        You are currently in maintenance mode.
                        <Link :href="route('maintenance.exit')" class="ml-2 edicy umlu3">Exit</Link>
                    </div>
                    <i class="g6h8i erxpu fa-hammer j16yf"></i>
                </div>
            </div>
            <Link as="div" style="cursor:pointer;" v-if="props.auth.user && props.auth.user.email_verified_at === null"
                :href="route('verification.notice')" class="gxuew l85js wruu4 edicy wlwmh k3oku">
            <div class="lrcyb yrzca mkoq3 ufpvb">
                <i class="g6h8i erxpu fa-envelope j16yf"></i>
                <div>
                    <span v-if="props.auth.user.settings.verified_email">
                        Please check your email at <span class="umlu3">{{ props.auth.user.email }}</span>.
                        If you dont see the email, check your spam folder.
                    </span>
                    <span v-else class="nn1dg">
                        We need to verify your email at
                        <span class="umlu3">{{ props.auth.user.email }}</span>
                        to keep your account in good standing.
                    </span>
                </div>
                <i class="g6h8i erxpu fa-envelope j16yf"></i>
            </div>
            </Link>
        </div>
        <div class="us3s8 o5qdx hg4an">
            <slot />
            <div id="klh0g" class="klh0g ezm8w focused" style="right: 66px; z-index: 1060" v-if="chatToggle">
                <div class="eay0g zmsbd bg-info hover" @click="chatToggle = !chatToggle">
                    <div class="ohyuj">
                        <i class="chat-icon erxpu fa-message-xmark y4asy"></i>
                        <i class="chat-icon erxpu fa-cog y4asy"></i>
                        <i class="chat-icon erxpu fa-gamepad-modern y4asy"></i>
                    </div>
                    <div class="cbtj4">
                        <span class="wm9a3 text-overflow gr59a">
                            Aeo
                        </span>
                    </div>
                </div>
                <div class="ssl81">
                    <div class="tvqzt t77w0 bqgel awbw3">
                        <div v-for="o9hmy in messages" class="lrcyb xm14j ryur2 yrzca fhjfg mkoq3 ufpvb">
                            <div class="lrcyb yrzca mkoq3">
                                <img src="/assets/img/dummy_headshot.png" class="pt8l6" width="50" />
                                <div class="sd6c8">
                                    <div class="umlu3">
                                        {{ message.displayname }}
                                    </div>
                                    <div class="n91zp umlu3 iniww">
                                        @{{ message.username }}
                                    </div>
                                    <div class="ut8sj umlu3 iniww">
                                        {{ message.DateHum }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!-- End #main -->
</template>
<style scoped>
.msg {
    border-radius: 10px;
}

.msg.right {
    background-color: var(--info-600);
}

.msg.left {
    background-color: var(--gray-500);
    color: white;
}
</style>
<script lang="ts">
export default {
    methods: {
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
        addActiveClassSSInput(elementId: string): void {
            const element = document.getElementById(
                elementId
            ) as HTMLInputElement;
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
