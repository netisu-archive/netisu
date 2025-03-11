<script setup lang="ts">
import { ref, computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import axios from "axios";
import { route,  current } from "momentum-trail";
import { cn } from '@/lib/utils'

import LanguageModal from "../Modal/LanguageModal.vue";
import SearchResult from "../SearchResult.vue";
import NavLink from "../NavLink.vue";
import SearchResultSkeleton from "../SearchResultSkeleton.vue";
import VLazyImage from "v-lazy-image";
import PageLoader from "../Loaders/PageLoader.vue";
import throttle from "lodash/throttle";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"

import {
    BadgeCheck,
    Bell,
    ChevronDown,
    CreditCard,
    LogOut,
    Sparkles,
} from 'lucide-vue-next'

import {
    Button
} from '@/Components/ui/button'
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
const AuthenticationMethods = [
    {
        url: route(`auth.login.page`),
        ActiveLink: "auth.login.page",
        icon: "fad fa-door-open",
        en: { title: "Login" },
        es: { title: "Juegos" },
        ru: { title: "Игры" },
        ja: { title: "ゲーム" },
    },
    {
        url: route(`auth.register.page`),
        ActiveLink: "auth.register.page",
        icon: "fad fa-person-to-portal",
        en: { title: "Get Started" },
        es: { title: "Mercado" },
        ru: { title: "Маркет" },
        ja: { title: "市場" },
    },
]
const topbar = [
    {
        url: route(`games.page`),
        ActiveLink: "games.*",
        icon: "fad fa-gamepad-modern",
        en: { title: "Games" },
        es: { title: "Juegos" },
        ru: { title: "Игры" },
        ja: { title: "ゲーム" },
    },
    {
        url: route(`store.page`),
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
        icon: "fad fa-message-code",
        en: { title: "Discuss" },
        es: { title: "Conversar" },
        ru: { title: "Обсуждение" },
        ja: { title: "議論" },
    },
    {
        url: route(`spaces.page`),
        ActiveLink: "spaces.*",
        icon: "fad fa-planet-ringed",
        en: { title: "Spaces" },
        es: { title: "Espacios" },
        ru: { title: "Развивать" },
        ja: { title: "スペース" },
    },
];
const left = [
    {
        url: "#",
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
        ja: { title: "発展" },
    },
];
const right = [
    {
        url: route(`leaderboard.page`),
        ActiveLink: route(`leaderboard.page`),
        icon: "fad fa-list-ol",
        en: { title: "Leaderboard" },
        es: { title: "Tabla de clasificación" },
        ru: { title: "Таблица лидеров" },
        ja: { title: "リーダーボード" },
    },
    {
        url: "#",
        icon: "fad fa-rocket-launch",
        ActiveLink: "upgade.*",
        en: { title: "Upgrade" },
        es: { title: "Mejora" },
        ru: { title: "Подписки" },
        ja: { title: "アップグレード" },
    },
];
const lang = computed<any>(() => props.locale);

const props = usePage<any>().props;
</script>
<template>
    <PageLoader v-if="props.site.page_loader" />
    <TooltipProvider>

        <div vaul-drawer-wrapper>

            <header class="border-grid top-0 z-50 w-full border-b"
                :class="landing ? 'bg-blue-400 text-white' : 'sticky bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'">
                <div class="flex h-14 items-center">
                    <div class="mr-2 md:mr-1 hidden md:flex">
                        <a href="/" class="mr-1 md:mr-2 lg:mr-6 flex items-center lg:space-x1 xl:space-x-2">
                            <v-lazy-image :src="props.site.logo" class="show-for-medium" width="150" />

                        </a>

                        <nav class="flex items-center gap-2 text-sm">
                            <template v-for="topbarlinks in topbar">
                                <NavLink :landing="landing" :link="topbarlinks.url"
                                    :ActiveLink="topbarlinks.ActiveLink">
                                    <i :class="topbarlinks.icon"></i> &nbsp;
                                    <span>{{ topbarlinks[lang].title }}</span>
                                </NavLink>
                            </template>
                        </nav>
                    </div>

                    <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end mr-3">
                        <div class="w-full flex-1 md:w-auto md:flex-none">
                            <Button variant="outline"
                                class="relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
                                @click="isOpen = true">
                                <span class="hidden lg:inline-flex">{{ 'Search ' + props.site.name + '...'}}</span>
                                <span class="inline-flex lg:hidden">Search...</span>
                                <Kbd :size="'xs'"
                                    class="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                                    ⌘ K
                                </Kbd>
                            </Button>
                        </div>

<<<<<<< HEAD
=======
                        <nav class="flex items-center gap-2">
>>>>>>> 2caaf9013555b4c3a006e1969f0fc743342c1863
                            <template v-if="!props.auth.user">
                                <nav class="flex items-center gap-4">

                                    <template v-for="method in AuthenticationMethods">
                                        <NavLink :landing="landing" :link="method.url" :ActiveLink="method.ActiveLink">
                                            <i :class="method.icon"></i> &nbsp;
                                            <span>{{ method[lang].title }}</span>
                                        </NavLink>
                                    </template>
                                </nav>
                            </template>
                            <template v-else>
                                <nav class="flex items-center gap-1">
                                    <div class="w-full flex-1 md:w-auto md:flex-none">
                                        <div class="grid flex-1 text-left text-sm leading-tight">

                                            <span class="truncate font-semibold">
                                                <i class="fad fa-sack-dollar text-emerald-500"></i>

                                                {{
                                                props.auth.user.bucks
                                                }}</span>
                                            <span class="truncate text-xs">
                                                <i class="fad fa-coin text-yellow-500"></i>
                                                {{
                                                props.auth.user.coins }}</span>
                                        </div>
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger as-child>
                                            <Button varient="ghost"
                                                :class="cn('group flex h-9 w-full items-center gap-4 rounded-lg px-2 font-normal text-foreground underline-offset-2 bg-base hover:bg-base')">
                                                <Avatar class="h-8 w-8 rounded-lg">
                                                    <AvatarImage :src="props.auth.user.thumbnail"
                                                        :alt="props.auth.user.username" />
                                                    <AvatarFallback class="rounded-lg">
                                                        <img src="/assets/img/dummy_headshot.png"
                                                            :alt="props.auth.user.username" />
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div class="grid flex-1 text-left text-sm leading-tight">
                                                    <span class="truncate font-semibold">{{
                                                        props.auth.user.display_name
                                                        }}</span>
                                                    <span class="truncate text-xs">{{ '@' +
                                                        props.auth.user.username }}</span>
                                                </div>
                                                <ChevronDown class="ml-auto size-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                            side="bottom" align="end" :side-offset="4">
                                            <DropdownMenuLabel class="p-0 font-normal">
                                                <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                                    <Avatar class="h-8 w-8 rounded-lg">
                                                        <AvatarImage :src="props.auth.user.headshot"
                                                            :alt="props.auth.user.username" />
                                                        <AvatarFallback class="rounded-lg">
                                                            <img src="/assets/img/dummy_headshot.png"
                                                                :alt="props.auth.user.username" />
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div class="grid flex-1 text-left text-sm leading-tight">
                                                        <span class="truncate font-semibold">{{
                                                            props.auth.user.display_name }}</span>
                                                        <span class="truncate text-xs">{{ '@' + props.auth.user.username
                                                            }}</span>
                                                    </div>
                                                </div>
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <Sparkles />
                                                    Upgrade to Pro
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <BadgeCheck />
                                                    Account
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    Billing
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Bell />
                                                    Notifications
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <Link as="button" :href="route('auth.logout')" class="w-full" method="post">
                                            <DropdownMenuItem>
                                                <LogOut />
                                                Log out
                                            </DropdownMenuItem>
                                            </Link>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </nav>
                            </template>
                        
                    </div>
                </div>
            </header>

            <main class="flex flex-1 flex-col">
                <slot />
            </main>


        </div>

    </TooltipProvider>
</template>

<script lang="ts">
import { directive } from "vue-tippy";

export default {
    directives: {
        tippy: directive,
    },
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
        sidebarOpen(): void {
            const sidebar = document.getElementById("sidebar");
            if (sidebar) {
                if (sidebar.classList.contains("show-for-large")) {
                    sidebar.classList.remove("show-for-large");
                    sidebar.classList.add("hide-for-large");
                } else {
                    sidebar.classList.add("show-for-large");
                }
            }
        },
        addActiveClassSSInput(elementId: string): void {
            const element = document.getElementById(
                elementId,
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
