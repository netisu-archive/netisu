<script setup lang="ts">
const props = defineProps<{
    modal: String,
}>()
</script>

<template>
    <div class="bbztw pfmvb ni21t sd6c8"> 
        <input v-modal="props.modal" type="file" id="file" />
        <div class="hg4an mkoq3 wruu4">
            <div class="sd6c8">
                <div class="ku9nu te269 iniww"><i class="erxpu fa-upload"
                        style="vertical-align: middle; margin-top: -2.5px;"></i>
                </div>
                <div class="wxza1 iniww umlu3">Upload</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
#file {
    width: inherit;
    height: inherit;
    background: rgba(150, 225, 150, 0.5);
    vertical-align: middle;
    text-align: center;
    padding: 0 20%;
    margin-top: inherit;
    color: #FFF;
    opacity: 0;
}
</style>