<script setup lang="ts">
import { usePage } from "@inertiajs/vue3";

const props = usePage<any>().props;

defineProps({
    isLanding: {
        type: Boolean,
        required: false,
        default: false,
    },
});
</script>

<template>
    <!-- ======= Footer ======= -->
    <footer class="y7c1h footer-fixed">
        <main
        :class="{
            'blqyi': !props.site.frontend.sidebar_menu || isLanding,
            'mnc96': props.site.frontend.sidebar_menu
        }"
        class="r7t2x bmztp">
            <div class="yrzca us3s8 o5qdx">
                <div class="eb64e u6xfc idns6">
                    <div class="doh7b mkoq3 u3g4k vzcce">
                        <img :src="props.site.icon" width="50" height="50" />
                    </div>
                </div>
                <div class="eb64e u6xfc u6oj5 bbo0a">
                    <div class="doh7b mkoq3 u3g4k vzcce">
                        <img :src="props.site.icon" width="50" height="50" />
                    </div>
                </div>
                <div class="u6xfc rank4">
                    <div class="kqzo1 g6h8i umlu3 ptb8c">
                        Copyright &copy; 2023
                        {{ props.site.name }}. All rights reserved.
                    </div>
                    <div class="ryur2 ygcya ptb8c">
                        <a href="#" class="n91zp f3pip umlu3"><i class="erxpu fa-scroll"></i> TERMS OF SERVICE</a>
                        <a href="#" class="n91zp f3pip umlu3"><i class="erxpu fa-lock"></i> PRIVACY POLICY</a>
                        <a href="#" class="n91zp f3pip umlu3"><i class="erxpu fa-hard-hat"></i> JOBS</a>
                        <a href="#" class="n91zp f3pip umlu3"><i class="erxpu fa-envelope"></i> CONTACT</a>
                    </div>
                    <div class="ryur2 ygcya ptb8c">
                        <div class="ut8sj iniww umlu3">{{ usePage<any>().props.site.version }}</div>
                    </div>
                </div>
                <div class="u6xfc egk82">
                    <div class="doh7b mkoq3 u3g4k vzcce">
                        <button href="#" class="ja9zv ifr2s iniww" content="Language"
                            @click="showModal('LanguageSettings')" v-tippy>
                            <i class="erxpu kpe7c"></i>
                        </button>
                        <a v-if="props.site.socials.discord" :href="props.site.socials.discord" class="ja9zv ifr2s iniww"
                            content="Join us on Discord" v-tippy>
                            <i class="s6yan r1i8s"></i>
                        </a>
                        <a v-if="props.site.socials.twitter" :href="props.site.socials.twitter" class="ja9zv ifr2s iniww"
                            content="Follow us on Twitter" v-tippy>
                            <i class="s6yan a80ns"></i>
                        </a>
                        <a v-if="props.site.socials.twitch" :href="props.site.socials.twitch" class="ja9zv ifr2s iniww"
                            content="Follow us on Twitch" v-tippy>
                            <i class="s6yan bngs8"></i>
                        </a>
                        <a v-if="props.site.socials.tiktok" :href="props.site.socials.tiktok" class="ja9zv ifr2s iniww"
                            content="Follow us on TikTok" v-tippy>
                            <i class="s6yan ov61b"></i>
                        </a>
                        <a v-if="props.site.socials.facebook" :href="props.site.socials.facebook" class="ja9zv ifr2s iniww"
                            content="Follow us on Facebook" v-tippy>
                            <i class="s6yan n9tu9"></i>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    </footer><!-- End  Footer -->
</template>

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
                element.classList.toggle('vuhhm');
            }
        },
        sidebarOpen(): void {
            const pifyb = document.getElementById('pifyb');
            if (sidebar) {
                sidebar.classList.toggle('tybmh');
            }
        },
        addActiveClassSSInput(elementId: string): void {
            const element = document.getElementById(elementId) as HTMLInputElement;
            const isEmpty = (str: string): boolean => !str.trim().length;

            if (element) {
                element.addEventListener('wqylv', function () {
                    if (isEmpty(this.value)) {
                        return;
                    } else {
                        element.classList.toggle('nzriw');
                    }
                });
            }
        }
    }
};
</script>
