<script setup lang="ts">
import { Button } from '@/Components/ui/button';
import { usePage } from "@inertiajs/vue3";
import { computed, ref } from "vue";
import { Drawer, DrawerContent, DrawerTrigger } from '@/Components/ui/drawer';
import { Link } from '@inertiajs/vue3';

// Define the interface
interface TopbarLink {
  url: string;
  en: { title: string };
  es: { title: string };
  ru: { title: string };
  ja: { title: string };
  // Add other languages if needed
}

const props = defineProps({
  topbarLinks: {
    type: Array as () => TopbarLink[],
    required: true,
  },
  locale: String
});

const open = ref(false);
const lang = computed<string>(() => pageProps.locale);

const pageProps = usePage<any>().props;
</script>

<template>
    <Drawer v-model:open="open">
        <DrawerTrigger as-child>
          <Button
            variant="ghost"
            class="w-8 h-8 px-0 mr-2 -ml-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="!size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
            <span class="sr-only">Toggle Menu</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent class="max-h-[60svh] p-0">
          <div class="p-6 overflow-auto">
            <div class="flex flex-col space-y-3">
                <template v-for="link in props.topbarLinks">
                    <Link
                     v-if="link.url"
                  :key="link.url"
                    :href="link.url"
                    @click="open = false"
                    >
                        <span>{{ link[lang].title }}</span>
                    </Link>
                </template>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
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
