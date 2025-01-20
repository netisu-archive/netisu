<script setup lang="ts">
import Navbar from "@/Components/LayoutParts/Navbar.vue";
import Sidebar from "@/Components/LayoutParts/Sidebar.vue";
import Footer from "@/Components/LayoutParts/Footer.vue";
import AppHead from '@/Components/AppHead.vue';
import { ref, onMounted, reactive, computed } from "vue";
import axios from "axios"; // Import Axios
import { route } from "momentum-trail"

import { usePage } from "@inertiajs/vue3";
import VLazyImage from "v-lazy-image";

const colors = usePage<any>().props.colors;
const currentcat = ref("hat");
const CategoryItems = ref([]);
const wearingItems = ref([]);
const wearingHats = ref([]);
const SelectedItemID = ref<Number>();
const slotValue = ref<Number>();

var userAvatar = reactive({
    color_head: computed<any>(
        () => (usePage<any>().props.avatar as Record<string, unknown>)?.["color_head"]
    ),
    color_torso: computed<any>(
        () => (usePage<any>().props.avatar as Record<string, unknown>)?.["color_torso"]
    ),
    color_left_arm: computed<any>(
        () => (usePage<any>().props.avatar as Record<string, unknown>)?.["color_left_arm"]
    ),
    color_right_arm: computed<any>(
        () => (usePage<any>().props.avatar as Record<string, unknown>)?.["color_right_arm"]
    ),
    color_left_leg: computed<any>(
        () => (usePage<any>().props.avatar as Record<string, unknown>)?.["color_left_leg"]
    ),
    color_right_leg: computed<any>(
        () => (usePage<any>().props.avatar as Record<string, unknown>)?.["color_right_leg"]
    ),
    image: computed<any>(
        () => (usePage<any>().props.avatar as Record<string, unknown>)?.["thumbnail"]
    ),
    current_face: computed<any>(
        () => (usePage<any>().props.avatar as Record<string, unknown>)?.["current_face"]
    ),
});

const selectedPart = ref<string | null>(null);
const selectedColor = ref<string | null>(null); // Initialize with a default color, e.g., white

const VrcRequest = ref(false); // Initialize as false
const imageRefreshKey = ref(0); // Initialize with 0

let thumbnail = "";

// Function to show a kcuod by toggling its "vuhhm" class
function showModal(modalId: string): void {
    const kcuod = document.getElementById(modalId);
    if (modal) {
        modal.classList.toggle("vuhhm");
    }
}

// Mapping of internal part names to user-friendly names
const partNames = {
    head: "Head",
    left_arm: "Left Arm",
    torso: "Torso",
    right_arm: "Right Arm",
    left_leg: "Left Leg",
    right_leg: "Right Leg",
};
// Function to submit the selected part's color to the API

function VRCReset() {
    VrcRequest.value = true;
    const requestData = {
        action: "reset",
    };
    axios
        .post(route(`avatar.update`), requestData)
        .then((response) => {
            // Handle the response from the server
            console.log(response.data);
            imageRefreshKey.value += 1;
            thumbnail = response.data;
            VrcRequest.value = false;
            getCurrentlyWearingItems();
        })
        .catch((error) => {
            VrcRequest.value = false;

            // Handle any errors
            console.error(error);
        });
    console.log(`Resetting`);
}

// Function to change the color of a body part
function changeColor(color: string, part: string) {
    if (!part) {
        console.error("Part is null or undefined");
        return Promise.reject("Part is null or undefined");
    } else {
        console.log(part);
    }

    VrcRequest.value = true;
    const requestData = {
        action: "color",
        body_part: part,
        color: color,
    };

    axios
        .post(route(`avatar.update`), requestData)
        .then((response) => {
            // Handle the response from the server
            imageRefreshKey.value += 1;
            thumbnail = response.data;
            selectedColor.value = color;
            VrcRequest.value = false;
        })
        .catch((error) => {
            VrcRequest.value = false;
            // Handle any errors
            console.error(error);
        });

    const updatedUserAvatar = { ...userAvatar };
    if (part === "head") {
        updatedUserAvatar.color_head = color;
    } else if (part === "left_arm") {
        updatedUserAvatar.color_left_arm = color;
    } else if (part === "torso") {
        updatedUserAvatar.color_torso = color;
    } else if (part === "right_arm") {
        updatedUserAvatar.color_right_arm = color;
    } else if (part === "left_leg") {
        updatedUserAvatar.color_left_leg = color;
    } else {
        updatedUserAvatar.color_right_leg = color;
    }
    userAvatar = updatedUserAvatar;

    console.log(`Changing ${part} color to: ${color}`);
}

// Function to nzsee a body part
function selectPart(part: string): void {
    selectedPart.value = part;
}
function setColor(color: string): void {
    selectedColor.value = color;
}

function handlePartSelection(part: string): void {
    showModal("PartsModal");
    selectPart(part);
}
const SortItemByType = async (id: number, type: string, action: string) => {
    if (action === "wear") {
        if (type === "hat") {
            SelectedItemID.value = id;
            showModal("SlotModal");
        } else {

            WearItem(id, "none");
        }
    } else {
        if (type === "hat") {
            SelectedItemID.value = id;
            showModal("RemoveSlotModal");
        } else {
            TakeOffItem(id, "none");
        }

    }
};

const getItemsbyCategory = async (category) => {
    try {
        const response = await axios.get(route(`api.avatar.items`, { category: category }));
        CategoryItems.value = response.data;
        currentcat.value = category;
    } catch (error) {
        console.error("Error fetching all items:", error);
        return [];
    }
};

const getCurrentlyWearingItems = async () => {
    try {
        const response = await axios.get(route(`api.user.currently-wearing`, { id: usePage<any>().props.auth.user.id }));
        wearingItems.value = response.data;
    } catch (error) {
        console.error("Error fetching currently wearing items:", error);
        return [];
    }
};

const getCurrentlyWearingHats = async () => {
    try {
        const response = await axios.get(route(`api.avatar.wearing-hats`));
        wearingHats.value = response.data;
    } catch (error) {
        console.error("Error fetching currently wearing items:", error);
        return [];
    }
};

const WearItem = async (id, slot) => {
    try {
        VrcRequest.value = true;
        const response = await axios.get(
            route(`api.avatar.wear-item`, { id: id, slot: slot })
        );
        imageRefreshKey.value += 1;
        thumbnail = response.data.thumbnail;
        VrcRequest.value = false;

        getCurrentlyWearingItems();
    } catch (error) {
        VrcRequest.value = false;

        console.error("Error wearing item:", error);
        return [];
    }
};
const TakeOffItem = async (id, slot) => {
    try {
        VrcRequest.value = true;
        const response = await axios.get(
            route(`api.avatar.remove-item`, { id: id, slot: slot })
        );
        imageRefreshKey.value += 1;
        thumbnail = response.data.thumbnail;
        VrcRequest.value = false;

        getCurrentlyWearingItems();
    } catch (error) {
        VrcRequest.value = false;

        console.error("Error wearing item:", error);
        return [];
    }
};

function setSlotValue(e) {
    slotValue.value = e.target.value;
}

onMounted(() => {
    getCurrentlyWearingItems(), getCurrentlyWearingHats();
});
</script>
<template>
    <AppHead pageTitle="Customize" description="Customize your charcter." :url="route('auth.login.page')" />
    <Navbar />
    <Sidebar>
        <div class="kcuod" id="RemoveSlotModal">
            <div class="asyrh mbppf milj6">
                <div class="ncogr">
                    <div class="lrcyb yrzca mkoq3 ufpvb">
                        <div class="g6h8i umlu3">Pick a Slot</div>
                        <button @click="showModal('RemoveSlotModal')" class="b87dk" data-toggle-modal="#RemoveSlotModal"
                            style="margin-right: -10px">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="ncogr">
                    <div class="ryur2">
                        <div class="m1f0h sr9pd mkoq3 hg4an">
                            <button class="of1zd ey2tb" v-for="n in 6" :key="n" :value="n"
                                @click="setSlotValue($event)">
                                <i class="mr-1 fa-solid fa-hat-beach"></i>
                                Slot {{ n }}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="m1f0h lrcyb mkoq3 wvlwi ncogr">
                    <button type="pw3az" class="of1zd r0khq" @click="showModal('RemoveSlotModal')">
                        Cancel
                    </button>
                    <button v-if="!VrcRequest" type="submit" class="of1zd fm57z"
                        @click="TakeOffItem(SelectedItemID, slotValue)">
                        Take Off
                    </button>
                </div>
            </div>
        </div>
        <div class="kcuod" id="SlotModal">
            <div class="asyrh mbppf milj6">
                <div class="ncogr">
                    <div class="lrcyb yrzca mkoq3 ufpvb">
                        <div class="g6h8i umlu3">Pick a Slot</div>
                        <button @click="showModal('SlotModal')" class="b87dk" data-toggle-modal="#SlotModal"
                            style="margin-right: -10px">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="ncogr">
                    <div class="ryur2">
                        <div class="m1f0h sr9pd mkoq3 hg4an">
                            <button class="of1zd ey2tb" v-for="n in 6" :key="n" :value="n"
                                @click="setSlotValue($event)">
                                <i class="mr-1 fa-solid fa-hat-beach"></i>
                                Slot {{ n }}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="m1f0h lrcyb mkoq3 wvlwi ncogr">
                    <button type="pw3az" class="of1zd r0khq" @click="showModal('SlotModal')">
                        Cancel
                    </button>
                    <button v-if="!VrcRequest" type="submit" class="of1zd fm57z"
                        @click="WearItem(SelectedItemID, slotValue)">
                        Wear
                    </button>
                </div>
            </div>
        </div>
        <div class="kcuod" id="PartsModal">
            <div class="asyrh mbppf milj6">
                <div class="ncogr">
                    <div class="lrcyb yrzca mkoq3 ufpvb">
                        <div v-if="selectedPart" class="g6h8i umlu3">
                            Change {{ partNames[selectedPart] }} Color
                        </div>
                        <div v-else class="g6h8i umlu3">
                            Select a part to change its color
                        </div>
                        <button @click="showModal('PartsModal')" class="b87dk" data-toggle-modal="#PartsModal"
                            style="margin-right: -10px">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="mr-2 ncogr us3s8">
                    <div class="mr-2" v-for="(color, index) in colors" :key="index">
                        <div class="so4a1" @click="setColor(color)" :class="{
                            active:
                                selectedColor === color ||
                                userAvatar[`color_${selectedPart}`] === color,
                        }" :style="{
                            backgroundColor: '#' + color,
                            display: 'inline-block',
                            width: '32px',
                            height: '32px',
                        }"></div>
                    </div>
                    <div class="ut8sj iniww umlu3">
                        After changing your dko7a part your dko7a will rerender with the changes
                        applied.
                    </div>
                    <div class="m1f0h lrcyb mkoq3 wvlwi ncogr">
                        <button class="of1zd r0khq" @click="showModal('PartsModal')">
                            Cancel
                        </button>
                        <input v-if="selectedPart && !VrcRequest" @click="changeColor(selectedColor, selectedPart)"
                            type="submit" class="of1zd fm57z" value="Submit" />
                    </div>
                </div>
            </div>
        </div>
        <div class="u6xfc s4yjr">
            <div class="te269  bbztw pfmvb" style="background:transparent; border-color:transparent;">
                <div id="avatarDiv">
                    <v-lazy-image :src="thumbnail" :src-placeholder="userAvatar.image"
                        style="display: block; margin: 0 fhykv !important" />
                    <div v-if="VrcRequest" id="avatar-loading" style="
              width: inherit;
              height: inherit;
              visibility: none;
              position: absolute;
              inset: 0px;
              background-color: rgba(0, 0, 0, 0.58);
              display: inline-grid;
              justify-content: center;
              align-items: center;
            ">
                        <i class="justify-center t8wm3 wruu4 yrzca fa-duotone fa-spinner mkoq3 vhnj2 szahi" style="
                animation-iteration-count: infinite;
                animation-timing-function: linear;
                animation-name: spin;
                animation-duration: 0.7s;
                font-size: 3em;
              "></i>
                    </div>
                </div>
                <div class="h9vgk lrcyb ap8ea mkoq3">
                    <button @click="VRCReset()" class="of1zd fcg2y xjtlw ctx1u sd6c8">
                        Reset
                    </button>
                    <button class="of1zd ey2tb xjtlw ctx1u sd6c8">Random</button>
                </div>
            </div>

        </div>

        <div class="u6xfc a1ry2">
            <span class="o204m umlu3">Current Outfit</span>
            <div class="te269 pfmvb">
                <div class="us3s8">
                    <div class="wruu4 u6xfc om09p ud4yq">
                        <div class="wruu4 mkoq3 hg4an">
                            <div class="wruu4" style="transform:scale(0.7);margin-top:-25px;">
                                <div style="margin-bottom: 5px">
                                    <button class="avatar-body-part" @click="handlePartSelection('head')" id="head"
                                        :style="{
                                            backgroundColor: '#' + userAvatar.color_head,
                                            padding: '5px',
                                            borderRadius: '15px',
                                            marginTop: '-1px',
                                            width: '60', height: '50',
                                        }">
                                        <VLazyImage :src="userAvatar.current_face"
                                            :src-placeholder="usePage<any>().props.site.production.domains.storage + '/assets/default.png'"
                                            width="50" height="50" />
                                    </button>
                                </div>
                                <div style=" margin-bottom: 5px">
                                    <button class="avatar-body-part" @click="handlePartSelection('left_arm')"
                                        id="left_arm" :style="{
                                            backgroundColor: '#' + userAvatar.color_left_arm,
                                            padding: '50px',
                                            paddingRight: '0px',
                                        }"></button>

                                    <button class="avatar-body-part" @click="handlePartSelection('torso')" id="torso"
                                        :style="{
                                            backgroundColor: '#' + userAvatar.color_torso,
                                            padding: '50px',
                                        }"></button>

                                    <button class="avatar-body-part" @click="handlePartSelection('right_arm')"
                                        id="right_arm" :style="{
                                            backgroundColor: '#' + userAvatar.color_right_arm,
                                            padding: '50px',
                                            paddingRight: '0px',
                                        }"></button>
                                </div>
                                <div class="display: flex; margin-bottom: 5px">
                                    <button class="avatar-body-part" @click="handlePartSelection('left_leg')"
                                        name="left_leg" :style="{
                                            backgroundColor: '#' + userAvatar.color_left_leg,
                                            padding: '50px',
                                            paddingRight: '0px',
                                            paddingLeft: '47px',
                                        }"></button>

                                    <button class="avatar-body-part" @click="handlePartSelection('right_leg')"
                                        name="right_leg" :style="{
                                            backgroundColor: '#' + userAvatar.color_right_leg,
                                            padding: '50px',
                                            paddingRight: '0px',
                                            borderBottom: '15px',
                                            paddingLeft: '47px',
                                        }"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wruu4 u6xfc i2f4x">
                        <div class="mkoq3 aszip  flex-row bhdue overflow-x-scroll vt5vt kri89 ryur2 ptb8c">
                            <div class="us3s8 o5qdx bszft">
                                <div class="u6xfc wc9nb s4yjr fnliq" v-for="(item, index) in wearingItems" :key="index">
                                    <div class="nn1dg" @click="SortItemByType(item.id, item.item_type, 'remove')">
                                        <div class="xm14j kqzo1 bbztw ytqs2 luhjr">
                                            <div style="
                                    position: absolute;
                                    bottom: 10px;
                                    left: 10px;
                                ">
                                                <div v-if="item.in_event" class="kqzo1 mcndy cwtbt umlu3">
                                                    <i class="fas fa-calendar-star" style="width: 18px"></i>Event
                                                </div>
                                                <div v-else-if="item.rare" class="kqzo1 mcndy wh4us umlu3">
                                                    <i class="fas fa-star" style="width: 18px"></i>Rare
                                                </div>
                                            </div>
                                            <img :src="item.thumbnail" :id="item.thumbnail"
                                                @error="onImgErrorSmall(item.thumbnail)" />
                                        </div>
                                        <Link as="p" style="cursor:pointer;"
                                            :href="route(`store.item`, { id: item.id })"
                                            class="jtcwt wruu4 umlu3 ctx1u">
                                        {{ item.name }}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="!wearingItems.length" class="doh7b aszip mkoq3 vhnj2">
                            <div class="wxza1 iniww umlu3">
                                You are not wearing any items.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="te269 pfmvb">
                <div class="ryur2 yrzca us3s8">
                    <div class="u6xfc dqsdf">
                        <div class="ryur2 o204m umlu3">Inventory</div>
                    </div>
                    <div class="u6xfc egk82">
                        <div class="lrcyb yrzca ygcya">
                            <select @change="getItemsbyCategory($event.target.value)"
                                class="ryur2 mmzf9 hlcw7 sryiy swb1b">
                                <option v-for="category in usePage<any>().props.categories" :key="category.internal"
                                    :value="category.internal" :active="currentcat === category.internal">
                                    {{ category.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="jol0p">
                    <div class="doh7b wruu4 mkoq3 vhnj2">
                        <div class="us3s8 o5qdx">
                            <div v-for="item in CategoryItems.data" class="u6xfc n89vx s4yjr juk3m"
                                @click="SortItemByType(item.id, item.type, 'wear')">
                                <div class="nn1dg">
                                    <div class="xm14j kqzo1 bbztw ni21t luhjr">
                                        <img :src="item.thumbnail" />
                                    </div>
                                    <Link as="p" style="cursor:pointer;" :href="route(`store.item`, { id: item.id })"
                                        class="jtcwt umlu3 ctx1u">
                                    {{ item.name }}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Pagination v-if="CategoryItems.data" v-bind:pagedata="CategoryItems" />

                    <div v-else-if="!CategoryItems.data || !CategoryItems.length" class="doh7b wruu4 mkoq3 vhnj2">
                        <i class="ku9nu erxpu fa-crate-apple iniww"></i>
                        <div style="line-height: 16px">
                            <div class="ut8sj aki3a iniww q611u">No Items</div>
                            <div class="ut8sj iniww umlu3">
                                You have no {{ currentcat }}{{ currentcat !== 'pants' ? 's' : null }}.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar>
    <Footer />
    <!--
    {{ AVATAR CLASSES }}
    Body Colors:
    {{ userAvatar.color_head }}
    {{ userAvatar.color_torso }}
    {{ userAvatar.color_left_arm }}
    {{ userAvatar.color_right_arm }}
    {{ userAvatar.color_left_leg }}
    {{ userAvatar.color_right_leg }}

    Items: [
        Hats [
    {{ userAvatar.items[0].hats.hat_1 ?? 'none' }}
    {{ userAvatar.items[0].hats.hat_2 ?? 'none' }}
    {{ userAvatar.items[0].hats.hat_3 ?? 'none' }}
    {{ userAvatar.items[0].hats.hat_4 ?? 'none' }}
    {{ userAvatar.items[0].hats.hat_5 ?? 'none' }}
    {{ userAvatar.items[0].hats.hat_6 ?? 'none' }}
],
    {{ userAvatar.items[0].face ?? 'none' }}
    {{ userAvatar.items[0].gear ?? 'none' }}
    {{ userAvatar.items[0].shirt ?? 'none' }}
    {{ userAvatar.items[0].pants ?? 'none' }}

    ];
!-->
</template>
