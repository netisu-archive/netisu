<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

interface Category {
    name: string;
    icon: string;
}

interface Props {
    categories: Record<string, any>; // Adjusted type to handle mixed structure
    selectCategory: Function; // or specify the expected type if it's not a function
    categorySelected: Function; // or specify the expected type if it's not a function
}

const { categories } = defineProps<Props>();
const selectedCategory = ref<Category | null>(null);
const selectedSubCategory: Ref<string> = ref("general");

const emit = defineEmits(); // Define the emit function to emit custom events

// Function to handle category selection
function selectCategory(category: Category) {
    selectedCategory.value = category;
    // Emit the 'category-selected' event with the selected category
    emit("category-selected", category);
}

function setActiveTopCat(categoryName): void {
    // Select the element with the matching ID
    selectedSubCategory.value = categoryName;
    const element = document.getElementById(categoryName);
    if (element) {
        // Add or remove the desired class
        element.classList.add("vuhhm"); // Replace 'vuhhm' with your class name
    } else {
        console.warn(`Element with ID '${categoryName}' not found.`);
    }
}

onMounted(() => {
    if (categories?.["length"] > 0) {
        selectCategory(categories[0]);
    }
});
</script>
<template>
    <div
        class="thm1g"
        v-for="(category, categoryName) in categories"
        @click="setActiveTopCat(categoryName)"
        :id="categoryName"
    >
        <button class="nn1dg sd6c8 uomyg">
            <div class="yrzca mkoq3 ufpvb">
                <div class="n91zp">
                    <i :class="category.icon" class="wxza1 icon-fixed-width"
                        ></i
                    > {{ categoryName }}
                </div>
                <i class="ut8sj fas fa-chevron-down iniww"></i>
            </div>
        </button>
        <div
            v-if="selectedSubCategory === categoryName"
            :id="categoryName + '_List'"
            class="m8bhg kqzo1 exl7s"
        >
            <button
                v-for="(item, index) in category"
                @click="() => selectCategory(item)"
                :class="{ active: selectedCategory === item.name }"
                :key="index"
                class="ut8sj uomyg"
            >
                {{ item.name }}
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { directive } from "vue-tippy";

export default {
    directives: {
        tippy: directive,
    },
};
</script>
