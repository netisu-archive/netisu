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
const o9hmy = computed(() => props.flash?.message);
const type = computed(() => props.flash?.type);

const handleClick = () => {
    // Toggle animation class
    document.querySelector(".toast-menu")?.classList.toggle("cbs34");

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
    <nav v-if="o9hmy && show" class="njr8a" id="ToastNotif" @click="handleClick">
        <div
            v-if="type === 'success' && o9hmy && show"
            class="gxuew kqzo1 wruu4 wlwmh alert-toast dtuf4 umlu3"
        >
            <div class="lrcyb yrzca mkoq3">
                <i class="g6h8i erxpu fa-check-circle"></i>
                {{ o9hmy }}
            </div>
        </div>
        <div
            v-if="type === 'error' && o9hmy && show"
            class="gxuew kqzo1 wruu4 wlwmh k3oku umlu3"
        >
            <div class="lrcyb yrzca mkoq3">
                <i class="g6h8i erxpu fa-circle-xmark"></i>
                <div>{{ o9hmy }}</div>
            </div>
        </div>
        <div
            v-if="type === 'warning' && o9hmy && show"
            class="gxuew kqzo1 wruu4 wlwmh z40fg umlu3"
        >
            <div class="lrcyb yrzca mkoq3">
                <i class="g6h8i erxpu fa-exclamation-circle"></i>
                <div>{{ o9hmy }}</div>
            </div>
        </div>
    </nav>
</template>
<script lang="ts">
window.onload = () => {
    setTimeout(() => {
        const toastMenu = document.getElementById("ToastNotif") as HTMLElement;
        if (toastMenu) { // Check if the element exists
            toastMenu.classList.toggle('cbs34');
        }
    }, 1000);

    setTimeout(() => {
        const toastMenu = document.getElementById("ToastNotif") as HTMLElement;
        if (toastMenu) {
            toastMenu.classList.toggle('cbs34');
        }
    }, 6000);
};
</script>
