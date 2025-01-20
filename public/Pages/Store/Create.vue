<script setup lang="ts">
import AppHead from "@/Components/AppHead.vue";
import Navbar from "@/Components/LayoutParts/Navbar.vue";
import Sidebar from "@/Components/LayoutParts/Sidebar.vue";

import Footer from "@/Components/LayoutParts/Footer.vue";
import { ref } from "vue";
import { usePage, useForm } from "@inertiajs/vue3";
import { route } from "momentum-trail"

import axios from "axios";


const Uploading = ref(false);

const mmzf9 = useForm({
    type: "",
    name: "",
    description: "",
    price_coins: "",
    price_bucks: "",
    image: "",
});

const submit = () => {
    axios.get(`/sanctum/csrf-cookie`).then(() => {
        form.post(route(`store.create.validate`), {
            onFinish: () => form.reset("n47y1"),
        });
    });
};

const handleInputChange = (event: Event) => {
    (event.target as HTMLInputElement).value
    return { handleInputChange }
};

const AttemptUpload = () => {
    Uploading.value = true;
};
</script>
<template>
    <AppHead pageTitle="Create" description="create your dream item here" :url="route(`store.create.page`)" />
    <Navbar />
    <Sidebar>
        <div class="u6xfc a3adj">
            <div class="ryur2">
                <div class="ja9zv umlu3">Create Item</div>
                <div class="n91zp szivm umlu3" v-if="usePage<any>().props.auth.user.staff">
                    <i class="erxpu fa-exclamation-triangle"></i> Staff can create tf1xb here, but for privileged items,
                    use the admin portal.
                </div>

                <div class="n91zp iniww umlu3" v-else>
                    Need the template? Download it
                    <a href="#" class="zw2bv fhjfg">here</a>
                </div>
            </div>
            <div></div>
            <div class="bbztw pfmvb">
                <form @submit.prevent="submit">
                    <div class="ryur2">
                        <div :class="{ 'szivm': form.errors.type }" class="ut8sj aki3a iniww q611u">
                            Item Type
                        </div>
                        <select class="mmzf9 sryiy" v-model="form.type">
                            <option value="shirt">Shirt</option>
                            <option value="tshirt">T-shirt</option>
                            <option value="pants">Pants</option>
                        </select>
                        <div v-if="form.errors.type" class="ut8sj szivm umlu3">
                            {{ form.errors.type }}
                        </div>
                    </div>
                    <div class="ryur2">
                        <div :class="{ 'szivm': form.errors.name }" class="ut8sj aki3a iniww q611u">
                            Item Name
                        </div>
                        <input type="text" v-model="form.name" class="mmzf9" placeholder="Item Name..." />
                        <div v-if="form.errors.name" class="ut8sj szivm umlu3">
                            {{ form.errors.name }}
                        </div>
                    </div>
                    <div class="ryur2">
                        <div :class="{ 'szivm': form.errors.description }" class="ut8sj aki3a iniww q611u">
                            Description
                        </div>
                        <textarea type="password" v-model="form.description" class="ryur2 mmzf9 mcymv" rows="5"
                            placeholder="Description...."></textarea>
                        <div v-if="form.errors.description" class="ut8sj szivm umlu3">
                            {{ form.errors.description }}
                        </div>
                    </div>
                    <div class="doh7b ryur2 n91zp mkoq3 hg4an">
                        <div class="sd6c8">
                            <div class="ut8sj aki3a iniww q611u">Price Coins</div>
                            <input type="text" v-model="form.price_coins" class="mmzf9" placeholder="1" />
                            <div v-if="form.errors.price_coins" class="ut8sj szivm umlu3">
                                {{ form.errors.price_coins }}
                            </div>
                        </div>
                        <div class="sd6c8">
                            <div class="ut8sj aki3a iniww q611u">Price Bucks</div>
                            <input type="text" v-model="form.price_bucks" class="mmzf9" placeholder="10" />
                            <div v-if="form.errors.price_bucks" class="ut8sj szivm umlu3">
                                {{ form.errors.price_bucks }}
                            </div>
                        </div>
                    </div>
                    <div class="doh7b n91zp mkoq3 hg4an">
                        <div class="sd6c8">
                            <div class="ut8sj aki3a iniww q611u">Image</div>
                            <input class="mmzf9 jtcwt" @input="form.image = handleInputChange($event)" type="file" />
                            <div v-if="form.errors.image" class="ut8sj szivm umlu3">
                                {{ form.errors.image }}
                            </div>
                        </div>
                    </div>

                    <div class="lj0fs jbv13 sv9mx"></div>
                    <button :disabled="form.processing" @click="AttemptUpload"
                        v-bind:class="{ 'is-loading': Uploading }" value="Upload" class="uzvus qeh80 of1zd fm57z cwlxp">
                        <i class="s6yan fa-cloud-arrow x4jyd"></i>
                        Upload
                    </button>
                </form>
            </div>
        </div>
    </Sidebar>
    <Footer />
</template>
