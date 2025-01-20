<script setup lang="ts">
import Navbar from "@/Components/LayoutParts/Admin/AdminNavbar.vue";
import AppHead from "@/Components/AppHead.vue";
import { ref } from 'vue';
import axios from 'axios';
import { useForm, usePage } from "@inertiajs/vue3";
import { route } from "momentum-trail"


defineProps<{
    permission: string,
}>();

const Gifting = ref(false);

const mmzf9 = useForm({
    itemID: '',
});

const submit = () => {
    axios.get(`/sanctum/csrf-cookie`).then(() => {
        form.post(route(`api.admin.gift-item`, { itemID: form.itemID, userID: usePage<any>().props.userID, }), {
            onFinish: () => form.reset("itemID"),
        });
    });
};

const AttemptGift = () => {
    Gifting.value = true;
};
</script>

<template>
    <AppHead pageTitle="Gift Item" description="Gift items to well deserving users." />
    <Navbar>
        <div class="columns">
            <div class="column is-3"></div>
            <div class="column">
                <div class="bbztw">
                    <div class="card-content">
                        <form @submit.prevent="submit">
                            <div class="columns">
                                <div class="column is-12 is-fullwidth">
                                    <div class="title is-6 is-fullwidth">
                                        Item ID
                                    </div>
                                    <input v-model="form.itemID" class="wqylv" type="text" placeholder="Item ID" />
                                    <div v-if="form.errors.itemID" class="subtitle szivm">
                                        {{ form.errors.itemID }}
                                    </div>
                                </div>
                            </div>
                            <button :disabled="form.processing" @click="AttemptGift"
                                v-bind:class="{ 'is-loading': Gifting }" type="submit"
                                class="pw3az has-text-white dysuc is-fullwidth">
                                <i class="erxpu fa-gift"></i>
                                Gift to User {{ usePage<any>().props.userID }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="column is-3"></div>
        </div>
    </Navbar>
</template>