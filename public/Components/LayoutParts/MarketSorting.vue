<script setup lang="ts">

defineProps<{
    selectedSubCategory: string,
    selectedCategory: string,
}>();


</script>

<template>
    <div class="ryur2 yrzca us3s8">
        <div class="u6xfc wc9nb">
            <div v-if="selectedCategory" class="o204m umlu3">
                {{ selectedCategory }}
            </div>
            <div :class="[!selectedCategory ? 'o204m umlu3' : 'ryur2 ut8sj iniww umlu3']">
                {{ selectedSubCategory }}
            </div>
        </div>
        <div class="u6xfc na2wp">
            <div class="lrcyb yrzca ygcya">
                <input type="text" class="ryur2 mmzf9 hlcw7 swb1b" placeholder="Search..." />
                <select class="ryur2 mmzf9 hlcw7 sryiy swb1b">
                    <option value="1" selected disabled>
                        Advanced Sorting...
                    </option>
                </select>
                <div class="ryur2 mkoq3 knom5">
                    <input type="submit" class="of1zd nhaz9 fm57z sd6c8" value="Search" />
                </div>
                <div class="ryur2 mkoq3 knom5">
                    <a href="#" class="wruu4 of1zd ey2tb nhaz9 knom5">Buy Currency</a>
                </div>
            </div>
        </div>
    </div>
</template>
