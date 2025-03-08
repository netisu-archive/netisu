<script setup lang="ts">
import { usePage } from "@inertiajs/vue3";

const props = usePage<any>().props;
import LanguageModal from '@/Components/Modal/LanguageModal.vue';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/Components/ui/alert-dialog'

defineProps({
    isLanding: { type: Boolean, default: false },
});
</script>

<template>
    <!-- ======= Footer ======= -->

    <footer class="border-grid border-t py-6 mt-3 md:py-0">
        <div class="container  py-4">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a :href="props.site.production.domains.main"
                    class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img :src="props.site.icon" class="h-10" alt="Site Logo" />
                </a>
                <ul
                    class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="hover:text-blue-400 me-4 md:me-6"><i class="fad fa-scroll"></i> TERMS OF
                            SERVICE</a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-blue-400 me-4 md:me-6"><i class="fad fa-lock"></i> PRIVACY
                            POLICY</a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-blue-400 me-4 md:me-6"><i class="fad fa-hard-hat"></i> JOBS</a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-blue-400"><i class="fad fa-envelope"></i> CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container  py-4">
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> Copyright &copy; {{ new
                    Date().getFullYear() }} <span class="text-blue-500 font-semibold"> {{ props.site.name }}</span>. All
                    rights
                    reserved.</span>
                <ul class="flex flex-wrap items-end mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <AlertDialog>
                            <AlertDialogTrigger as-child>
                                <Button class="text-2xl hover:text-yellow-500 me-4 md:me-6" content="Language"
                                    variant="outline" v-tippy>
                                    <i class="fad fa-language"></i>
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Change Your Language</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your
                                        account and remove your data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </li>
                    <li>
                        <a v-if="props.site.socials.discord" :href="props.site.socials.discord"
                            class="text-2xl hover:text-blue-400 me-4 md:me-6" content="Join us on Discord" v-tippy>
                            <i class="fab fa-discord"></i>
                        </a>
                    </li>
                    <li>
                        <a v-if="props.site.socials.twitter" :href="props.site.socials.twitter"
                            class="text-2xl hover:text-blue-400 me-4 md:me-6" content="Follow us on Twitter" v-tippy>
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a v-if="props.site.socials.twitch" :href="props.site.socials.twitch"
                            class="text-2xl hover:text-blue-400 me-4 md:me-6" content="Follow us on Twitch" v-tippy>
                            <i class="fab fa-twitch"></i>
                        </a>
                    </li>
                    <li>
                        <a v-if="props.site.socials.tiktok" :href="props.site.socials.tiktok"
                            class="text-2xl hover:text-blue-400 me-4 md:me-6" content="Follow us on TikTok" v-tippy>
                            <i class="fab fa-tiktok"></i>
                        </a>
                    </li>
                    <li>
                        <a v-if="props.site.socials.facebook" :href="props.site.socials.facebook"
                            class="text-2xl hover:text-blue-400 me-4 md:me-6" content="Follow us on Facebook" v-tippy>
                            <i class="fab fa-facebook"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </footer>
    <!-- End  Footer -->
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
                element.classList.toggle('active');
            }
        },
        sidebarOpen(): void {
            const sidebar = document.getElementById('sidebar');
            if (sidebar) {
                sidebar.classList.toggle('show-for-large');
            }
        },
        addActiveClassSSInput(elementId: string): void {
            const element = document.getElementById(elementId) as HTMLInputElement;
            const isEmpty = (str: string): boolean => !str.trim().length;

            if (element) {
                element.addEventListener('input', function () {
                    if (isEmpty(this.value)) {
                        return;
                    } else {
                        element.classList.toggle('hide');
                    }
                });
            }
        }
    }
};
</script>
