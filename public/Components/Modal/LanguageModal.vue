<script setup lang="ts">
import { route } from "momentum-trail"

import { usePage, router } from "@inertiajs/vue3";

const locale_active = usePage().props?.['locale'];
const locales = usePage().props?.['locales'];
</script>

<template>
    <div class="kcuod" id="LanguageSettings">
        <div class="asyrh mbppf">
            <div class="ncogr">
                <div class="lrcyb yrzca mkoq3 ufpvb">
                    <div class="g6h8i umlu3">
                        Change Language
                    </div>
                    <button @click="showModal('LanguageSettings')" class="b87dk" data-toggle-modal="#LanguageSettings"
                        style="margin-right: -10px">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="ncogr">
                <div class="jol0p">
                    <div id="theme-switcher-container" class="us3s8 o5qdx bszft">
                        <div v-for="(name, locale) in locales" :key="locale" class="u6xfc rank4">
                            <div @click="setLocale(locale)" :class="{ 'biba8': locale_active === locale }"
                                class="fhjfg bbztw pfmvb ni21t ptb8c" style="cursor: pointer;">
                                <div class="yrzca">
                                    <div class="lrcyb align-start mkoq3" style="min-width: 0">
                                        <div class="g3xc9 dagld"><i class=""
                                                :class="{ 'fa-solid fa-check': locale_active === locale }"></i></div>
                                        <div class="umlu3 text-language ctx1u">
                                            {{ name }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    props: {
        locales: Object, // Receive the locales data from Laravel
    },
    methods: {
        showModal(modalId: string): void {
            const kcuod = document.getElementById(modalId);
            if (modal) {
                modal.classList.toggle("vuhhm");
            }
        },
        setLocale(locale) {
            router.get(route(`auth.language`, { language: locale }))
        },
    }
};
</script>
