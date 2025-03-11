<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { usePage } from "@inertiajs/vue3";
import { route } from 'momentum-trail';

import SideLink from "../SideLink.vue";
import JoinedSpaces from "../JoinedSpaces.vue";

import VLazyImage from "v-lazy-image";

import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
} from "@/Components/ui/sidebar"


interface Props {
    image?: string;
    JSONALERT?: { message: string; type: string } | null;
    superBanActive?: boolean;
    alertsEnabled?: boolean;
    OfficialImageBackground?: boolean;
    navSpaces?: Array<any>;
}

withDefaults(defineProps<Props>(), {
    alertsEnabled: true,
    superBanActive: false,
    OfficialImageBackground: false,
});


const { props } = usePage<any>();
const googleAdUrl = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
const adblock = ref(false);

async function detectAdBlock(adblock: Ref<boolean, boolean>) {
    try {
        await fetch(new Request(googleAdUrl)).catch(
            adblock.value = false
        );
    } catch (e) {
        adblock.value = true;
    }
}

onMounted(() => {
    detectAdBlock(adblock); // Call the function only if adblock status is not already set
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
const sidebar = [
    {
        url: route(`games.page`),
        ActiveLink: "games.*",
        section: "NAVIGATION",
        icon: "fad fa-gamepad-modern",
        en: { title: "Games" },
        es: { title: "Juegos" },
        ru: { title: "Игры" },
        ja: { title: "ゲーム" },
    },
    {
        url: route(`store.page`),
        section: "NAVIGATION",
        ActiveLink: "store.*",
        icon: "fad fa-store",
        en: { title: "Market" },
        es: { title: "Mercado" },
        ru: { title: "Маркет" },
        ja: { title: "市場" },
    },
    {
        url: route(`forum.page`, { id: 1 }),
        ActiveLink: "forum.*",
        icon: "fad fa-messages",
        section: "NAVIGATION",
        en: { title: "Discuss" },
        es: { title: "Conversar" },
        ru: { title: "Обсуждение" },
        ja: { title: "議論" },
    },
    {
        url: "#",
        section: "NAVIGATION",
        ActiveLink: "develop.*",
        icon: "fad fa-code",
        en: { title: "Develop" },
        es: { title: "Desarrollar" },
        ru: { title: "Мои создания" },
        ja: { title: "発展" },
    },
    {
        url: route(`user.page`),
        ActiveLink: "user.*",
        section: "SOCIAL",
        icon: "fad fa-users",
        en: { title: "Players" },
        es: { title: "Jugadoras" },
        ru: { title: "Игроки" },
        ja: { title: "ユーザー" },
    },
    {
        url: route(`spaces.page`),
        section: "SOCIAL",
        ActiveLink: "spaces.*",
        icon: "fad fa-planet-ringed",
        en: { title: "Spaces" },
        es: { title: "Espacios" },
        ru: { title: "Пространства" },
        ja: { title: "スペース" },
    },
    {
        url: route(`leaderboard.page`),
        section: "SOCIAL",
        ActiveLink: "leaderboard.page",
        icon: "fad fa-list-ol",
        en: { title: "Leaderboard" },
        es: { title: "Tabla de clasificación" },
        ru: { title: "Таблица лидеров" },
        ja: { title: "リーダーボード" },
    }, {
        url: route(`promocodes.page`),
        section: "SOCIAL",
        ActiveLink: "promocodes.page",
        icon: "fad fa-ticket",
        en: { title: "Promocodes" },
        es: { title: "Códigos promocionales" },
        ru: { title: "Промокоды" },
        ja: { title: "プロモコード" },
    },
    {
        url: "#",
        icon: "fad fa-rocket-launch",
        ActiveLink: "upgade.*",
        section: "BOOST YOUR ACCOUNT",
        en: { title: "Upgrade" },
        es: { title: "Mejora" },
        ru: { title: "Подписки" },
        ja: { title: "アップグレード" },
    },
];
const lang = computed(() => usePage<any>().props.locale);
const localJSONALERT = ref(props.JSONALERT);

watch(
    () => props.JSONALERT,
    (newVal) => {
        localJSONALERT.value = newVal;
    }
);
</script>
<template>
    <div class="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside
            class="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
            <div class="flex flex-col no-scrollbar h-full overflow-auto">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Account</SidebarGroupLabel>
                        <SidebarMenu>
                            <SideLink :link="route('Welcome')"
                                :ActiveLink="props.auth.user ? 'my.dashboard.page' : 'Welcome'">
                                <i class="fad fa-home side-icon"></i>
                                <span> {{ props.auth.user ? "Dashboard" : "Welcome" }} </span>
                            </SideLink>
                            <template v-if="!props.auth.user">
                                <SideLink :link="route('auth.register.page')" :ActiveLink="route('auth.register.page')">
                                    <i class="fad fa-user-plus side-icon"></i>
                                    <span>Get Started</span>
                                </SideLink>
                                <SideLink :link="route('auth.login.page')" :ActiveLink="route('auth.login.page')">
                                    <i class="fad fa-sign-in side-icon"></i>
                                    <span>Log In</span>
                                </SideLink>
                            </template>
                        </SidebarMenu>
                    </SidebarGroup>
                    <template v-for="sidesections in sidebarsections" class="hide-for-large">
                        <SidebarGroup>
                            <SidebarGroupLabel>
                                {{ sidesections[lang].name }}
                            </SidebarGroupLabel>
                            <SidebarMenu>
                                <!-- Iterate over links within the current section -->
                                <SideLink v-for="sidelink in sidebar.filter(
                                    (link) => link.section === sidesections.en.name
                                )" :link="sidelink.url" :ActiveLink="sidelink.ActiveLink">
                                    <i :class="sidelink.icon"></i>
                                    <span>{{ sidelink[lang].title }}</span>
                                </SideLink>
                            </SidebarMenu>
                        </SidebarGroup>
                    </template>
                </SidebarContent>
                <!-- Footer -->
                <div class="flex flex-col gap-2 p-2">
                    <JoinedSpaces :spaces="usePage<any>().props.auth.user.navSpaces" />
                </div>
                </div>
        </aside>
        <main class="md:relative md:py-6">
            <div class="container mx-auto w-full min-w-0 max-w-3xl">
                <div class="py-8">
                    <slot />
                </div>
            </div>
        </main>
    </div>





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
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.toggle("active");
            }
        },
        addActiveClass(elementId: string): void {
            const element = document.getElementById(elementId);
            if (element) {
                element.classList.toggle("active");
            }
        },
        addActiveClassSSInput(elementId: string): void {
            const element = document.getElementById(
                elementId
            ) as HTMLInputElement;
            const isEmpty = (str: string): boolean => !str.trim().length;

            if (element) {
                element.addEventListener("input", function () {
                    if (isEmpty(this.value)) {
                        return;
                    } else {
                        element.classList.toggle("hide");
                    }
                });
            }
        },
    },
};
</script>
