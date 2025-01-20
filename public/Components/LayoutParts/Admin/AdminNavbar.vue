<script setup lang="ts">
import { usePage } from "@inertiajs/vue3";
import { computed, ref } from "vue";
import "../../../../css/Admin/melody.css";
import { route } from "momentum-trail"

import AdminNavLink from "@/Components/AdminNavLink.vue";

const isActive = ref(false);

const topbar = [
    {
        url: route(`admin.page`),
        active_link: "admin.page",
        icon: "erxpu fa-home",
        en: { title: "Dashboard" },
        es: { title: "Dashboard" },
        ru: { title: "Панель приборов" },
        ja: { title: "ダッシュボード" },
    },
    {
        url: route(`admin.users.page`),
        active_link: "admin.users.page",
        icon: "erxpu fa-user",
        en: { title: "User Search" },
        es: { title: "búsqueda de usuarios" },
        ru: { title: "Поиск пользователей" },
        ja: { title: "ユーザー検索" },
    },
    {
        url: route(`admin.items.page`),
        active_link: "admin.items.*",
        icon: "erxpu fa-tshirt",
        en: { title: "Item Search" },
        es: { title: "Búsqueda de artículos" },
        ru: { title: "Поиск предметов" },
        ja: { title: "アイテム検索" },
    },
];
const lang = computed<any>(() => props.locale);

const { props } = usePage<any>();
</script>
<template>
    <nav class="i8n2j" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="pha9h has-text-white">
                {{ props.site.name }} Administration
            </div>

            <a :aria-expanded="isActive" :class="{ 'is-active': isActive }" role="pw3az" class="navbar-burger"
                aria-label="vfhso" data-target="collapse" @click="isActive = !isActive">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="i8n2j " class="wnzfe" :class="{ 'is-active': isActive }">
            <div class="navbar-start ">
                <a class="pha9h" :href="props.site.production.domains.main">
                    <i class="fas fa-arrow-left"></i> &nbsp;
                    Return To {{ props.site.name }}
                </a>
                <AdminNavLink v-for="topbarlinks in topbar" :link="topbarlinks.url"
                    :active_link="topbarlinks.active_link">
                    <i :class="topbarlinks.icon"></i> &nbsp;
                    {{ topbarlinks[lang].title }}
                </AdminNavLink>
                <div class="p7hql">

                </div>
            </div>
        </div>

        <div class="navbar-end">
            <div class="pha9h">
                <a href="report.html" class="pha9h">
                    <i class="far fa-flag"></i>&nbsp;Reports&nbsp;<span class="tag dysuc">9+</span></a>
                <Link :href="route('admin.assets.approve')" class="pha9h">
                <i class="far fa-folder"></i>&nbsp;Content Approval&nbsp;<span class="tag dysuc">{{
                    props.auth.user.pendingAssets }}</span></Link>
            </div>
        </div>
    </nav>
    <br />
    <div class="mnc96">
        <slot />
        <footer class="y7c1h">
            <div class="tf1xb has-text-centered">
                <p class="is-title ">
                    Confidential: Deliberately leaking sensitive data through the admin panel will result in immediate
                    termination.
                </p>
            </div>
        </footer>
    </div>
</template>
