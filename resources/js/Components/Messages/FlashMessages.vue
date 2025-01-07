<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = defineProps<{
    ShowJsonAlert?: boolean;
    flash?: {
        message: string;
        type: string;
    };
}>();

const show = ref<any>(props.ShowJsonAlert);
// Extracting props
const message = computed(() => props.flash?.message);
const type = computed(() => props.flash?.type);

const handleClick = () => {
    // Toggle animation class
    document.querySelector(".toast-menu")?.classList.toggle("toast-menu-slide");

    // Hide toast after animation (adjust delay based on animation duration)
    setTimeout(() => {
        show.value = false;
    }, 500); // Adjust delay as needed
};

// Watchers
watch(
    [message, type],
    () => {
        show.value = true;
    },
    { deep: true }
);
</script>

<template>
    <nav v-if="message && show" class="toast-menu" id="ToastNotif" @click="handleClick">
        <div
            v-if="type === 'success' && message && show"
            class="py-2 mb-1 text-center alert alert-toast alert-success fw-semibold"
        >
            <div class="gap-2 align-middle flex-container">
                <i class="text-lg fad fa-check-circle"></i>
                {{ message }}
            </div>
        </div>
        <div
            v-if="type === 'error' && message && show"
            class="py-2 mb-1 text-center alert alert-danger fw-semibold"
        >
            <div class="gap-2 align-middle flex-container">
                <i class="text-lg fad fa-circle-xmark"></i>
                <div>{{ message }}</div>
            </div>
        </div>
        <div
            v-if="type === 'warning' && message && show"
            class="py-2 mb-1 text-center alert alert-warning fw-semibold"
        >
            <div class="gap-2 align-middle flex-container">
                <i class="text-lg fad fa-exclamation-circle"></i>
                <div>{{ message }}</div>
            </div>
        </div>
    </nav>
</template>
<script lang="ts">
window.onload = () => {
    setTimeout(() => {
        const toastMenu = document.getElementById("ToastNotif") as HTMLElement;
        if (toastMenu) { // Check if the element exists
            toastMenu.classList.toggle('toast-menu-slide');
        }
    }, 1000);

    setTimeout(() => {
        const toastMenu = document.getElementById("ToastNotif") as HTMLElement;
        if (toastMenu) {
            toastMenu.classList.toggle('toast-menu-slide');
        }
    }, 6000);
};
</script>
