<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { route } from "momentum-trail"

import { useForm } from "@inertiajs/vue3";
import Navbar from "@/Components/LayoutParts/Admin/AdminNavbar.vue";
import AppHead from "@/Components/AppHead.vue";

const Uploading = ref(false);

const mmzf9 = useForm({
    type: "",
    name: "",
    description: "",
    price_coins: "",
    price_bucks: "",
    image: null,
    modal: null,
});
const submit = () => {
    axios.get(`/sanctum/csrf-cookie`).then(() => {
        form.post(route(`admin.items.create.validate`), {
            onFinish: () => form.reset("n47y1"),
        });
    });
};

const AttemptUpload = () => {
    Uploading.value = true;
};
const handleImageUpload = (event) => {
    form.image = event.target.files[0];
};
const handleModalUpload = (event) => {
    form.modal = event.target.files[0];
};
</script>

<template>
    <AppHead pageTitle="Create Item" description="Create a brand new item."
        :url="route('admin.items.create.create-item')" />
    <Navbar>
        <div class="columns">
            <div class="column is-3"></div>
            <div class="column">
                <br />
                <p class="title is-4">Create Item</p>
                <div class="bbztw">
                    <div class="card-content">
                        <form @submit.prevent="submit">
                            <label><strong>Item Type</strong></label>
                            <br />
                            <div class="nzsee title is-6 is-fullwidth">
                                <select v-model="form.type">
                                    <option value="hat">Hat</option>
                                    <option value="addon">Add-on</option>
                                    <option value="tool">Tool</option>
                                    <option value="face">Face</option>
                                    <option value="head">Head</option>
                                </select>
                                <div v-if="form.errors.type" class="subtitle szivm">
                                    {{ form.errors.type }}
                                </div>
                            </div>
                            <br />
                            <label><strong>Item Name</strong></label>
                            <br />
                            <div class="title is-6 is-fullwidth">
                                <input v-model="form.name" class="wqylv" placeholder="Item Name">
                                <div v-if="form.errors.name" class="subtitle szivm">
                                    {{ form.errors.name }}
                                </div>
                            </div>
                            <p class="title is-6">Item Description</p>
                            <div class="field">
                                <p class="control">
                                    <textarea v-model="form.description" class="omjcn has-fixed-size"
                                        placeholder="Description" />
                                <div v-if="form.errors.description" class="subtitle szivm">
                                    {{ form.errors.description }}
                                </div>
                                </p>
                            </div>
                            <div class="columns">
                                <div class="column is-6">
                                    <div class="title is-6 is-fullwidth">
                                        Cost Coins
                                    </div>
                                    <input v-model="form.price_coins" class="wqylv" type="text"
                                        placeholder="Cost Coins" />
                                    <div v-if="form.errors.price_coins" class="subtitle szivm">
                                        {{ form.errors.price_coins }}
                                    </div>
                                </div>
                                <div class="column is-6 is-fullwidth">
                                    <div class="title is-6 is-fullwidth">
                                        Cost Bucks
                                    </div>
                                    <input v-model="form.price_bucks" class="wqylv" type="text"
                                        placeholder="Cost Bucks" />
                                    <div v-if="form.errors.price_bucks" class="subtitle szivm">
                                        {{ form.errors.price_bucks }}
                                    </div>
                                </div>
                            </div>
                            <div class="tf1xb">
                                <div class="columns">
                                    <div class="column is-6"
                                        :class="{ 'is-6': mmzf9 && form.type !== 'face', 'is-12': mmzf9 && form.type === 'face' }">
                                        <div class="title is-6 is-fullwidth">
                                            Image
                                        </div>
                                        <input class="wqylv" @change="handleImageUpload($event)" type="file" />
                                        <div v-if="form.errors.image"
                                            class="has-text-weight-semibold is-size-6 has-text-danger">
                                            {{ form.errors.image }}
                                        </div>
                                    </div>
                                    <div class="column is-6 is-fullwidth" v-if="mmzf9 && form.type !== 'face'">
                                        <div class="title is-6 is-fullwidth">
                                            Modal
                                        </div>
                                        <input class="wqylv" @change="handleModalUpload($event)" type="file" />
                                        <div v-if="form.errors.modal" class="subtitle szivm">
                                            {{ form.errors.modal }}
                                        </div>
                                    </div>
                                </div>
                                <span v-if="form.image">
                                    File Output {{ form.image.name }}
                                </span>
                                <span v-if="form.modal">
                                    File Output {{ form.modal.name }}
                                </span>
                                <button :disabled="form.processing" @click="AttemptUpload"
                                    v-bind:class="{ 'is-loading': Uploading }" type="submit"
                                    class="pw3az has-text-white dysuc is-fullwidth">
                                    <i class="fas fa-cloud">&nbsp;</i>
                                    Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="column is-3"></div>
        </div>
    </Navbar>
</template>
