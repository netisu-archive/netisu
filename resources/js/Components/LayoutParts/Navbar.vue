<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { usePage } from "@inertiajs/vue3";
import axios from "axios";
import { route,  current } from "momentum-trail";
import { cn } from '@/lib/utils'
import { useMagicKeys, useToggle } from '@vueuse/core'

import MobileNav from "@/Components/LayoutParts/MobileNav.vue";
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

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from '@/Components/ui/drawer'

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
const isOpen = ref(false);
const SmallNavOpen = ref(false);

const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey))
      e.preventDefault()
  },
})

watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1])
    isOpen.value = true
})

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
const lang = computed<any>(() => props.locale);

const props = usePage<any>().props;
</script>
<template>
    <PageLoader v-if="props.site.page_loader" />
    <TooltipProvider>

        <div vaul-drawer-wrapper>

            <header class="top-0 z-50 w-full border-b border-grid"
                :class="landing ? 'bg-blue-400 text-white' : 'sticky bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'">
                <div class="container flex items-center h-14">
                    <div class="hidden mr-4 md:mr-1 md:flex">
                        <Link :href="route(`Welcome`)" class="flex items-center mr-1 md:mr-2 lg:mr-6 lg:space-x1 xl:space-x-2">
                            <v-lazy-image :src="props.site.logo" class="show-for-medium" width="150" />

                        </Link>

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
                    <MobileNav :topbarLinks="topbar"/>

                    <div class="flex items-center justify-between flex-1 mr-3 space-x-2 md:justify-end">
                        <div class="flex-1 w-full md:w-auto md:flex-none">
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
                                    <div class="flex-1 w-full md:w-auto md:flex-none">
                                        <div class="grid flex-1 text-sm leading-tight text-left">

                                            <span class="font-semibold truncate">
                                                <i class="fad fa-sack-dollar text-emerald-500"></i>

                                                {{
                                                props.auth.user.bucks
                                                }}</span>
                                            <span class="text-xs truncate">
                                                <i class="text-yellow-500 fad fa-coin"></i>
                                                {{
                                                props.auth.user.coins }}</span>
                                        </div>
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger as-child>
                                            <Button varient="ghost"
                                                :class="cn('group flex h-9 w-full items-center gap-4 rounded-lg px-2 font-normal text-foreground underline-offset-2 bg-base hover:bg-base')">
                                                <Avatar class="w-8 h-8 rounded-lg">
                                                    <AvatarImage :src="props.auth.user.thumbnail"
                                                        :alt="props.auth.user.username" />
                                                    <AvatarFallback class="rounded-lg">
                                                        <img src="/assets/img/dummy_headshot.png"
                                                            :alt="props.auth.user.username" />
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div class="grid flex-1 text-sm leading-tight text-left">
                                                    <span class="font-semibold truncate">{{
                                                        props.auth.user.display_name
                                                        }}</span>
                                                    <span class="text-xs truncate">{{ '@' +
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
                                                    <Avatar class="w-8 h-8 rounded-lg">
                                                        <AvatarImage :src="props.auth.user.headshot"
                                                            :alt="props.auth.user.username" />
                                                        <AvatarFallback class="rounded-lg">
                                                            <img src="/assets/img/dummy_headshot.png"
                                                                :alt="props.auth.user.username" />
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div class="grid flex-1 text-sm leading-tight text-left">
                                                        <span class="font-semibold truncate">{{
                                                            props.auth.user.display_name }}</span>
                                                        <span class="text-xs truncate">{{ '@' + props.auth.user.username
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

            <main class="flex flex-col flex-1">
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
