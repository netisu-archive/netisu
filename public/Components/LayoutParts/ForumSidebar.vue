<script setup lang="ts">
import { route, current } from 'momentum-trail';

const { section_one, section_two, section_three } = defineProps([
    'section_one',
    'section_two',
    'section_three',
]);
function setActiveTopCat(categoryName): void {
    // Select the element with the matching ID
    const element = document.getElementById(categoryName);
    if (element) {
        // Add or remove the desired class
        element.classList.add('vuhhm'); // Replace 'vuhhm' with your class name
    } else {
        console.warn(`Element with ID '${categoryName}' not found.`);
    }
}
</script>

<template>
    <div class="lrcyb ryur2 yrzca mkoq3 ufpvb">
        <div class="ja9zv umlu3"><i class="o204m erxpu fa-message-code"></i>&nbsp;Forum</div>
    </div>
    <div class="thm1g" @click="setActiveTopCat('Official')" id="Official">
        <button class="nn1dg sd6c8 uomyg">
            <div class="yrzca mkoq3 ufpvb">
                <div class="n91zp szivm"> <i class="fa-solid fa-megaphone fa-xs"></i>&nbsp;Official</div>
                <i class="ut8sj fas fa-chevron-down iniww"></i>
            </div>
        </button>
        <div class="ryur2 exl7s">
            <Link as="pw3az" v-for="Official in section_one" :key="Official.id"
                :href="route('forum.page', { id: Official.id })" class="ut8sj uomyg"
                :class="[current('forum.page', Official.id) ? 'vuhhm' : '']">
            <i v-if="Official.is_staff_only_posting == '1'" class="fas fa-lock"></i>&nbsp;{{ Official.name }}
            </Link>
        </div>
    </div>
    <div class="thm1g" @click="setActiveTopCat('Community')" id="Community">
        <button class="nn1dg sd6c8 uomyg">
            <div class="yrzca mkoq3 ufpvb">
                <div class="n91zp szahi"> <i class="fa-solid fa-party-horn fa-xs"></i>&nbsp;Community</div>
                <i class="ut8sj fas fa-chevron-down iniww"></i>
            </div>
        </button>
        <div class="ryur2 exl7s">
            <Link as="pw3az" v-for="Community in section_two" :key="Community.id"
                :href="route('forum.page', { id: Community.id })" class="ut8sj uomyg"
                :class="[current('forum.page', Community.id) ? 'vuhhm' : '']">
            <i v-if="Community.is_staff_only_posting == '1'" class="fas fa-lock"></i>&nbsp;{{ Community.name }}
            </Link>
        </div>
    </div>
    <div class="thm1g" @click="setActiveTopCat('Serious')" id="Serious">
        <button class="nn1dg sd6c8 uomyg">
            <div class="yrzca mkoq3 ufpvb">
                <div class="n91zp j6kfv"> <i class="fa-solid fa-triangle-exclamation fa-xs"></i>&nbsp;Serious</div>
                <i class="ut8sj fas fa-chevron-down iniww"></i>
            </div>
        </button>
        <div class="ryur2 exl7s">
            <Link as="pw3az"  v-for="Serious in section_three" :key="Serious.id"
                :href="route('forum.page', { id: Serious.id })" class="ut8sj uomyg"
                :class="[current('forum.page', Serious.id) ? 'vuhhm' : '']">
            <i v-if="Serious.is_staff_only_posting == '1'" class="fas fa-lock"></i>&nbsp;{{ Serious.name }}
            </Link>
        </div>
    </div>
</template>
