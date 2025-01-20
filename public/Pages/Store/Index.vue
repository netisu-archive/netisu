<script setup lang="ts">
import { ref, computed, provide } from "vue";
import axios from "axios";
import { usePage } from "@inertiajs/vue3";
import MarketSidebar from "@/Components/LayoutParts/MarketSidebar.vue";
import MarketSorting from "@/Components/LayoutParts/MarketSorting.vue";
import AppHead from "@/Components/AppHead.vue";
import Navbar from "@/Components/LayoutParts/Navbar.vue";
import Sidebar from "@/Components/LayoutParts/Sidebar.vue";
import Footer from "@/Components/LayoutParts/Footer.vue";
import { route } from "momentum-trail"

import ItemCardSkeleton from "@/Components/ItemCardSkeleton.vue";
import VLazyImage from "v-lazy-image";

const props = defineProps({
    categories: Object,
});

const items = ref<any>([]);
const categories = computed<any>(() => props.categories);

const ItemLoading = ref(false);

const selectedCategory = ref(""); // Ref to store the currently selected category
const selectedSubCategory = ref(""); // Ref to store the currently selected category

// Fetch items for the selected category
async function fetchItems(selectedcat) {
    if (selectedSubCategory) {
        try {
            selectedSubCategory.value = selectedcat.name;
            ItemLoading.value = true;
            const response = await axios.get(
                route(`api.store.items`, { category: selectedcat.internal })
            );
            items.value = response.data;
            ItemLoading.value = false;
        } catch (error) {
            console.error(error);
        }
    }
}

// Function to handle category selection
function selectCategory(category) {
    selectedSubCategory.value = category;
    ItemLoading.value = true;
}

function onImgErrorSmall(id) {
    let source = document.getElementById(id) as HTMLImageElement;
    source.src = "/assets/img/dummy-error.png";
    source.onerror = null;

    return true;
}
// Computed properties
const itemRoute = (itemId) => route(`store.item`, { id: itemId });
const creatorRoute = (username) =>
    route(`user.profile`, { username: username });

provide("selectedCategory", selectedCategory);
provide("selectedSubCategory", selectedSubCategory);
</script>

<template>
    <AppHead pageTitle="Market" description="Level up your style." :url="route(`store.page`)" />
    <Navbar :landing="false" />
    <Sidebar image="/assets/img/site-banners/market-background.svg" :superBanActive="true"
        :OfficialImageBackground="true">
        <template>
            <portal to="bannerAsset">
                <i class="ku9nu erxpu fa-store szahi"></i>
            </portal>
            <portal to="bannerButtons">
                <Link v-if="usePage<any>().props.auth.user" class="o204m dfoi1 fhjfg" :href="route(`store.create.page`)"
                    content="Create Item" as="pw3az" v-tippy="{ placement: 'bottom' }" style="outline: none">
                <i class="erxpu fa-square-pen"></i>
                </Link>
            </portal>
            <portal to="bannerName">
                <div class="o204m" style="line-height: 16px">
                    <v-lazy-image src="/assets/img/site-banners/market-title.png" alt="Market"
                        style="width: auto; height: 50px" />
                </div>
            </portal>
            <portal to="bannerDescription">
                <span class="iniww tgq0u umlu3">Craving something new? Create it or find it here.</span>
            </portal>
        </template>
        <div class="u6xfc n89vx">
            <MarketSidebar :categories="categories" @category-selected="fetchItems" :selectCategory="selectCategory" />
        </div>
        <div class="u6xfc pavd8">
            <MarketSorting :selectedCategory="selectedCategory" :selectedSubCategory="selectedSubCategory" />
            <div v-if="ItemLoading || (items && items.length > 0)" class="us3s8 o5qdx bszft">
                <template v-if="ItemLoading">
                    <ItemCardSkeleton v-for="n in 12" :key="n" />
                </template>
                <div v-else class="u6xfc n89vx s4yjr fnliq" v-for="(item, index) in items" :key="index">
                    <Link :href="itemRoute(item.id)" class="nn1dg">
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
                            <div v-else-if="item.sale_ongoing" class="kqzo1 mcndy rzye3 umlu3">
                                <i class="fas fa-badge-percent" style="width: 18px"></i>{{ item.percent_off + "%" }} off
                            </div>

                            <div v-else-if="item.time_off_sale != null" class="kqzo1 mcndy cwtbt umlu3">
                                <i class="fas fa-clock" style="width: 18px"></i>Timed
                            </div>
                            <div v-if="!item.onsale" class="kqzo1 mcndy odvsg umlu3">
                                <i class="fas fa-shield" style="width: 18px"></i>Offsale
                            </div>
                            <div v-else>
                                <div class="h9vgk sr9pd ap8ea mkoq3 hg4an">
                                    <div class="kqzo1 mcndy kxcfk umlu3">
                                        <i class="erxpu fa-money-bill-1-wave" style="width: 18px"></i>{{ item.cost_bucks
                                        }}
                                    </div>
                                    <div class="kqzo1 mcndy cwtbt umlu3">
                                        <i class="erxpu fa-coins" style="width: 18px"></i>{{ item.cost_coins }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img :src="item.thumbnail" :id="item.thumbnail" @error="onImgErrorSmall(item.thumbnail)" />
                    </div>
                    <div class="jtcwt umlu3 ctx1u">
                        {{ item.name }}
                    </div>
                    </Link>
                    <div class="ut8sj umlu3 ctx1u">
                        <span class="iniww">By:</span>&nbsp;
                        <Link :href="creatorRoute(item.creator.username)">
                        {{ "@" + item.creator.username
                        }}<i class="fas fa-shield-check dfoi1 h2a12"></i></Link>
                    </div>
                </div>
            </div>
            <div v-else-if="items.message" class="">
                <div class="ghpy4 pfmvb">
                    <div class="doh7b ryur2 wruu4 mkoq3 vhnj2">
                        <i class="ku9nu fas fa-store-slash iniww"></i>
                        <div style="line-height: 16px">
                            <div class="ut8sj aki3a iniww">
                                Looks like a gremlin got into the code again!
                                We're sending our best programmers with bug
                                spray to fix the issue
                            </div>
                            <div class="iniww umlu3">
                                <p class="ut8sj">{{ items.message }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="">
                <div class="ghpy4 pfmvb">
                    <div class="doh7b ryur2 wruu4 mkoq3 vhnj2">
                        <i class="ku9nu erxpu fa-cart-xmark iniww"></i>
                        <div style="line-height: 16px">
                            <div class="ut8sj aki3a iniww q611u">
                                No Items
                            </div>
                            <div class="iniww umlu3">
                                <p class="ut8sj">
                                    There are currently no items in this
                                    category.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar>
    <Footer />
</template>
