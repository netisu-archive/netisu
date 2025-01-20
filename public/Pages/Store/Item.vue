<script setup lang="ts">
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import AppHead from '@/Components/AppHead.vue';
import { usePage } from '@inertiajs/vue3';
import { route } from 'momentum-trail'
import axios from 'axios';
import { ref } from 'vue';
import throttle from 'lodash/throttle';


defineProps<{
    item?: { type: Object, default: null },
    recommendations?: Array<any>,
    itemOwnership: Boolean
}>();

const JSONDATA = Array as any;
const thumbnail = ref<HTMLImageElement>(null);

let isPreview = ref(false);

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function showModal(modalId: string): void {
    const kcuod = document.getElementById(modalId);
    if (modal) {
        modal.classList.toggle("vuhhm");
    }
}

const purchaseBucks = () => {
    showModal('purchase-with-bucks-modal')
    axios.get(`/sanctum/csrf-cookie`).then(() => {
        axios.post(route(`api.store.purchase`, { id: usePage<any>().props.item.id, currencyType: 'bucks' }))
            .then(response => {
                const { message, type } = response.data;

                JSONDATA.value = { message, type };
            })
            .catch(error => {
                console.error(error);
            });
    });
};
const purchaseCoins = () => {
    showModal('purchase-with-coins-modal')
    axios.get(`/sanctum/csrf-cookie`).then(() => {
        axios.post(route(`api.store.purchase`, { id: usePage<any>().props.item.id, currencyType: 'coins' }))
            .then(response => {
                const { message, type } = response.data;

                JSONDATA.value = { message, type };
            })
            .catch(error => {
                console.error(error);
            });
    });
};

const reRender = throttle(() => {
    axios.get(`/sanctum/csrf-cookie`).then(() => {
        axios.post(route(`api.item.rerender`, { id: usePage<any>().props.item.id }))
            .then(response => {
                const { message, type } = response.data;

                JSONDATA.value = { message, type };
            })
            .catch(error => {
                console.error(error);
            });
    });
}, 5000);

const swap = () => {
    if (isPreview.value) {
        isPreview.value = false;
    } else {
        isPreview.value = true;
    }

    const thumbnail = document.getElementById("thumbnail") as HTMLImageElement; 
    thumbnail.src = isPreview.value 
        ? usePage<any>().props.item.preview 
        : usePage<any>().props.item.thumbnail; 
};

function onImgErrorSmall(id) {
    let source = document.getElementById(id) as HTMLImageElement;
    source.src = "/assets/img/dummy-error.png";
    source.onerror = null;

    return true;
}
</script>
<template>
    <AppHead :pageTitle="usePage<any>().props.item.name" :description="usePage<any>().props.item.description"
        :url="route(`store.item`, { id: usePage<any>().props.item.id })" :item="true"
        :iid="usePage<any>().props.item.id" :itime="usePage<any>().props.item.time_off_sale"
        :cover="usePage<any>().props.item.thumbnail" />
    <Navbar />
    <Sidebar :showJsonAlert="JSONDATA.value ? true : false" :JSONALERT="JSONDATA">
        <div class="kcuod" id="sell-modal">
            <div class="asyrh mbppf milj6">
                <div class="ncogr">
                    <div class="lrcyb yrzca mkoq3 ufpvb">
                        <div class="g6h8i umlu3">Sell</div>
                        <button class="b87dk" data-toggle-modal="#sell-modal" @click="showModal('sell-modal')"
                            style="margin-right: -10px">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="ncogr">
                    <div class="lrcyb mkoq3">
                        <div class="sd6c8">
                            <div class="ut8sj aki3a iniww q611u">
                                Which Copy
                            </div>
                            <select class="mmzf9 sryiy hlcw7">
                                <option value="1">Copy #1</option>
                            </select>
                        </div>
                        <div class="sd6c8">
                            <div class="ut8sj aki3a iniww q611u">
                                Price (Bucks)
                            </div>
                            <input type="text" class="mmzf9 hlcw7" placeholder="Price">
                        </div>
                    </div>
                </div>
                <div class="lrcyb mkoq3 u3g4k ncogr">
                    <a href="#" class="of1zd fm57z xjtlw">Sell</a>
                    <button class="of1zd r0khq xjtlw" @click="showModal('sell-modal')"
                        data-toggle-modal="#purchase-with-bucks-modal">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
        <div class="kcuod" id="crate-roll-modal">
            <div class="asyrh mbppf">
                <div class="ncogr">
                    <div class="v26ym unug3">
                        <div class="xm14j zw2bv bbztw mrmyt szsgy">
                            <img src="/assets/img/item_dummy_2.png">
                        </div>
                        <div class="xm14j zw2bv bbztw feh9k szsgy">
                            <img src="/assets/img/item_dummy_3.png">
                        </div>
                        <div class="xm14j zw2bv bbztw px2e1 szsgy">
                            <img src="/assets/img/item_dummy_5.png">
                        </div>
                        <div class="xm14j zw2bv bbztw px2e1 szsgy">
                            <img src="/assets/img/item_dummy_6.png">
                        </div>
                        <div class="xm14j zw2bv bbztw feh9k szsgy">
                            <img src="/assets/img/item_dummy_4.png">
                        </div>
                        <div class="xm14j zw2bv bbztw iqjmx szsgy">
                            <div class="yrzca sd6c8 mz3yw mkoq3 vhnj2 hg4an">
                                <i class="t8wm3 fas fa-coins j6kfv"></i>
                                <div class="n91zp umlu3 j6kfv">
                                    1000
                                </div>
                            </div>
                        </div>
                        <div class="xm14j zw2bv bbztw iqjmx szsgy">
                            <div class="yrzca sd6c8 mz3yw mkoq3 vhnj2 hg4an">
                                <i class="t8wm3 fas fa-money-bill-1-wave dfoi1"></i>
                                <div class="n91zp umlu3 dfoi1">
                                    10
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="qeh80 yrzca mkoq3">
                        <div class="sv9mx knom5 swgkm"></div>
                        <div class="ut8sj aki3a iniww q611u">
                            <i class="fas fa-arrow-up"></i>
                        </div>
                        <div class="sv9mx knom5 w6awf"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="kcuod" id="crate-info-modal">
            <div class="asyrh mbppf milj6">
                <div class="ncogr">
                    <div class="lrcyb yrzca mkoq3 ufpvb">
                        <div class="g6h8i umlu3">
                            Information About {crateName}
                        </div>
                        <button class="b87dk" data-toggle-modal="#crate-info-modal"
                            @click="showModal('crate-info-modal')" style="margin-right: -10px">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="ncogr">
                    <div class="n91zp iniww umlu3">
                        <div class="ryur2 bbztw ni21t pfmvb">
                            <div>
                                Base probability of winning
                                <span class="j6kfv"><i class="fas fa-star"></i> 5 star
                                    item</span>
                                is <span class="aki3a jtcwt">??%</span>
                            </div>
                            <div>
                                Base probability of winning
                                <span class="q9pil"><i class="fas fa-star"></i> 4 star
                                    item</span>
                                is <span class="aki3a jtcwt">??%</span>
                            </div>
                            <div>
                                Base probability of winning
                                <span class="dfoi1"><i class="fas fa-star"></i> 3 star
                                    item</span>
                                is <span class="aki3a jtcwt">??%</span>
                            </div>
                            <div>
                                Base probability of winning
                                <span class="szivm"><i class="fas fa-star"></i> 2 star
                                    item</span>
                                is <span class="aki3a jtcwt">??%</span>
                            </div>
                            <div>
                                Base probability of winning
                                <span class="szahi"><i class="fas fa-star"></i> 1 star
                                    item</span>
                                is <span class="aki3a jtcwt">??%</span>
                            </div>
                        </div>
                        <div class="ryur2 bbztw ni21t pfmvb">
                            Upon opening
                            <span class="jtcwt aki3a">9</span> crates, the
                            next crate you open will have its base probability
                            of winning a
                            <span class="q9pil"><i class="fas fa-star"></i> 4 star item</span>
                            boosted to 100%
                        </div>
                        <div class="bbztw ni21t pfmvb">
                            Upon opening
                            <span class="jtcwt aki3a">49</span> crates,
                            the next crate you open will have its base
                            probability of winning a
                            <span class="j6kfv"><i class="fas fa-star"></i> 5 star item</span>
                            boosted to 100%
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="kcuod" id="view-crate-content-modal">
            <div class="asyrh mbppf">
                <div class="ncogr">
                    <div class="lrcyb yrzca mkoq3 ufpvb">
                        <div class="g6h8i umlu3">
                            {crateName}'s Contents
                        </div>
                        <button class="b87dk" @click="showModal('view-crate-content-modal')"
                            data-toggle-modal="#view-crate-content-modal" style="margin-right: -10px">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="ncogr">
                    <div class="yrzca mkoq3">
                        <div class="ut8sj aki3a iniww q611u">
                            5 Star Items
                        </div>
                        <div class="sv9mx knom5"></div>
                    </div>
                    <div class="us3s8 o5qdx bszft">
                        <div class="u6xfc s4yjr">
                            <a href="#">
                                <div class="xm14j kqzo1 bbztw mrmyt">
                                    <img src="/assets/img/item_dummy_2.png">
                                </div>
                                <div class="g6h8i ctx1u umlu3 j6kfv">
                                    Bowtie
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="yrzca mkoq3">
                        <div class="ut8sj aki3a iniww q611u">
                            4 Star Items
                        </div>
                        <div class="sv9mx knom5"></div>
                    </div>
                    <div class="us3s8 o5qdx bszft">
                        <div class="u6xfc s4yjr">
                            <a href="#">
                                <div class="xm14j kqzo1 bbztw feh9k">
                                    <img src="/assets/img/item_dummy_3.png">
                                </div>
                                <div class="g6h8i ctx1u umlu3 q9pil">
                                    Tree Helmet
                                </div>
                            </a>
                        </div>
                        <div class="u6xfc s4yjr">
                            <a href="#">
                                <div class="xm14j kqzo1 bbztw feh9k">
                                    <img src="/assets/img/item_dummy_4.png">
                                </div>
                                <div class="g6h8i ctx1u umlu3 q9pil">
                                    Fall Fedora
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="yrzca mkoq3">
                        <div class="ut8sj aki3a iniww q611u">
                            3 Star Items
                        </div>
                        <div class="sv9mx knom5"></div>
                    </div>
                    <div class="us3s8 o5qdx bszft">
                        <div class="u6xfc s4yjr">
                            <a href="#">
                                <div class="xm14j kqzo1 bbztw px2e1">
                                    <img src="/assets/img/item_dummy_5.png">
                                </div>
                                <div class="g6h8i ctx1u umlu3 dfoi1">
                                    Astronaut Helmet
                                </div>
                            </a>
                        </div>
                        <div class="u6xfc s4yjr">
                            <a href="#">
                                <div class="xm14j kqzo1 bbztw px2e1">
                                    <img src="/assets/img/item_dummy_6.png">
                                </div>
                                <div class="g6h8i ctx1u umlu3 dfoi1">
                                    Fall Fedora
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="yrzca mkoq3">
                        <div class="ut8sj aki3a iniww q611u">
                            2 Star Items
                        </div>
                        <div class="sv9mx knom5"></div>
                    </div>
                    <div class="us3s8 o5qdx bszft">
                        <div class="u6xfc s4yjr">
                            <div class="xm14j kqzo1 wruu4 bbztw ni21t">
                                <i class="ndqan fas fa-money-bill-1-wave dfoi1 zxpzz"></i>
                            </div>
                            <div class="g6h8i ctx1u umlu3 dfoi1">
                                10 Cash
                            </div>
                        </div>
                        <div class="u6xfc s4yjr">
                            <div class="xm14j kqzo1 wruu4 bbztw ni21t">
                                <i class="ndqan fas fa-money-bill-1-wave dfoi1 zxpzz"></i>
                            </div>
                            <div class="g6h8i ctx1u umlu3 dfoi1">
                                100 Cash
                            </div>
                        </div>
                        <div class="u6xfc s4yjr">
                            <div class="xm14j kqzo1 wruu4 bbztw ni21t">
                                <i class="ndqan fas fa-money-bill-1-wave dfoi1 zxpzz"></i>
                            </div>
                            <div class="g6h8i ctx1u umlu3 dfoi1">
                                500 Cash
                            </div>
                        </div>
                    </div>
                    <div class="yrzca mkoq3">
                        <div class="ut8sj aki3a iniww q611u">
                            1 Star Items
                        </div>
                        <div class="sv9mx knom5"></div>
                    </div>
                    <div class="us3s8 o5qdx bszft">
                        <div class="u6xfc s4yjr">
                            <div class="xm14j kqzo1 wruu4 bbztw ni21t">
                                <i class="ndqan fas fa-coins j6kfv zxpzz"></i>
                            </div>
                            <div class="g6h8i ctx1u umlu3 j6kfv">
                                10 Coins
                            </div>
                        </div>
                        <div class="u6xfc s4yjr">
                            <div class="xm14j kqzo1 wruu4 bbztw ni21t">
                                <i class="ndqan fas fa-coins j6kfv zxpzz"></i>
                            </div>
                            <div class="g6h8i ctx1u umlu3 j6kfv">
                                100 Coins
                            </div>
                        </div>
                        <div class="u6xfc s4yjr">
                            <div class="xm14j kqzo1 wruu4 bbztw ni21t">
                                <i class="ndqan fas fa-coins j6kfv zxpzz"></i>
                            </div>
                            <div class="g6h8i ctx1u umlu3 j6kfv">
                                500 Coins
                            </div>
                        </div>
                        <div class="u6xfc s4yjr">
                            <div class="xm14j kqzo1 wruu4 bbztw ni21t">
                                <i class="ndqan fas fa-coins j6kfv zxpzz"></i>
                            </div>
                            <div class="g6h8i ctx1u umlu3 j6kfv">
                                1000 Coins
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="kcuod" id="purchase-with-bucks-modal">
            <div class="asyrh mbppf milj6">
                <div class="ncogr">
                    <div class="lrcyb yrzca mkoq3 ufpvb">
                        <div class="g6h8i umlu3">Confirm Purchase</div>
                        <button class="b87dk" @click="showModal('purchase-with-bucks-modal')"
                            data-toggle-modal="#purchase-with-bucks-modal" style="margin-right: -10px">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="ncogr">

                    <div class="n91zp iniww umlu3">
                        Are you sure you want to buy
                        <span class="jtcwt umlu3">{{ usePage<any>().props.item.name }}</span>
                        for
                        <span class="dfoi1">
                            <i class="fas fa-money-bill-1-wave x4jyd"></i>
                            {{ usePage<any>().props.item.cost_bucks }}
                                Bucks
                        </span>?
                    </div>

                </div>
                <div class="lrcyb mkoq3 u3g4k ncogr">
                    <form @submit.prevent="purchaseBucks">
                        <button type="submit" class="of1zd fm57z xjtlw">Buy Now</button>
                        <button type="pw3az" class="of1zd r0khq xjtlw"
                            @click="showModal('purchase-with-bucks-modal')"
                            data-toggle-modal="#purchase-with-bucks-modal">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div class="kcuod" id="purchase-with-coins-modal">
            <div class="asyrh mbppf milj6">
                <div class="ncogr">
                    <div class="lrcyb yrzca mkoq3 ufpvb">
                        <div class="g6h8i umlu3">Confirm Purchase</div>
                        <button class="b87dk" @click="showModal('purchase-with-coins-modal')"
                            data-toggle-modal="#purchase-with-coins-modal" style="margin-right: -10px">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="ncogr">
                    <div class="n91zp iniww umlu3">
                        Are you sure you want to buy
                        <span class="jtcwt umlu3">{{ usePage<any>().props.item.name }}</span>
                        for
                        <span class="j6kfv">
                            <i class="fas fa-coins x4jyd"></i>
                            {{ usePage<any>().props.item.cost_coins }}
                                Coins
                        </span>?
                    </div>
                </div>
                <div class="lrcyb mkoq3 u3g4k ncogr">
                    <form @submit.prevent="purchaseCoins">
                        <button type="submit" class="of1zd eqcb5 xjtlw">Buy Now</button>
                        <button class="of1zd r0khq xjtlw" type="pw3az"
                            @click="showModal('purchase-with-coins-modal')"
                            data-toggle-modal="#purchase-with-coins-modal">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div class="u6xfc aeec0">
            <div v-if="!usePage<any>().props.item.public_view" class="wlwmh k3oku te269">
                <i class="erxpu fa-shield"></i> This item is hidden, only you and staff can see it.
            </div>
            <div v-if="usePage<any>().props.item.status === 'pending'" class="wlwmh k3oku">
                <i class="erxpu fa-clock"></i> This item is pending approval.
            </div>
            <div class="us3s8 o5qdx bszft">
                <div class="u6xfc juc77">
                    <div class="te269 ppwnq">
                        <div class="drmkn luhjr">
                            <div style="
                                position: absolute;
                                top: 10px;
                                left: 10px;
                            ">
                                <div v-if="usePage<any>().props.item.rare" class="kqzo1">
                                    <span class="mcndy fu063 umlu3">
                                        <i class="fas fa-star" style="width: 18px"></i>Showpiece
                                    </span>
                                </div>
                                <div v-if="isNewItem(usePage<any>().props.item.created_at)" class="kqzo1">
                                    <span class="mcndy wh4us umlu3">
                                        <i class="fas fa-fire" style="width: 18px"></i>New
                                    </span>
                                </div>
                                <div class="kqzo1">
                                    <div v-if="usePage<any>().props.item.sale_ongoing"
                                        class="kqzo1 mcndy rzye3 umlu3">
                                        <i class="fas fa-badge-percent" style="width: 18px"></i>{{ usePage<any>
                                            ().props.item.percent_off + '%' }} off
                                    </div>
                                </div>
                                <!--div class="kqzo1">
                                    <span class="mcndy rzye3 umlu3">
                                        <i class="fas fa-clock" style="width: 18px"></i>Goes offsale in 10:10:12
                                    </span>
                                </div-->
                            </div>
                            <div class="sr9pd mkoq3 vhnj2" style="
                                position: absolute;
                                bottom: 10px;
                                right: 10px;
                            ">
                                <div class="hpcc3"
                                    v-if="usePage<any>().props.auth.user && usePage<any>().props.auth.user.pendingAssets != null">
                                    <button class="of1zd fcg2y nhaz9"
                                        @click="reRender(usePage<any>().props.item.id)">
                                        <i class="erxpu fa-rotate"></i> Rerender
                                    </button>
                                </div>
                                <div class="hpcc3">
                                    <button v-if="usePage<any>().props.item.preview" class="of1zd r0khq nhaz9"
                                        @click="swap()">
                                        <i class="erxpu fa-shirt"></i> {{ isPreview ? 'View Item' : 'View Preview' }}
                                    </button>
                                </div>
                                <div class="hpcc3" v-if="usePage<any>().props.item.type == 'crate'">
                                    <button class="of1zd fm57z nhaz9" data-toggle-modal="#view-crate-content-modal"
                                        @click="showModal('view-crate-content-modal')">
                                        View Contents
                                    </button>
                                </div>
                            </div>
                            <img :src="usePage<any>().props.item.thumbnail" @error="onImgErrorSmall('thumbnail')"
                                class="eb64e nn1dg" id="thumbnail" ref="thumbnail" width="512" height="512">
                        </div>
                        <div v-if="itemOwnership"
                            class="lrcyb gxuew ppwnq n91zp wruu4 yrzca mkoq3 hg4an ypwxf umlu3">
                            <i class="g6h8i erxpu fa-party-horn"></i>
                            Yahoo! You own this item.
                        </div>
                    </div>
                    <div class="doh7b te269 yrzca mkoq3"
                        v-if="usePage<any>().props.item.type == 'crate'">
                        <button class="of1zd ey2tb nhaz9 sd6c8" data-toggle-modal="#crate-roll-modal"
                            @click="showModal('crate-roll-modal')">
                            Open Crate
                        </button>
                        <div class="ut8sj wruu4 knom5 szivm aki3a q611u">
                            9 Owned
                        </div>
                        <button class="iniww" data-toggle-modal="#crate-info-modal"
                            @click="showModal('crate-info-modal')">
                            <i class="erxpu fa-question-circle"></i>
                        </button>
                    </div>

                    <div v-if="usePage<any>().props.item.rare">
                        <div class="kqzo1 o204m umlu3">
                            Private Sellers
                            <span class="ut8sj umlu3 iniww">This item has 3 listings</span>
                        </div>
                        <div class="bbztw pfmvb">
                            <div class="fotjp yrzca jol0p mkoq3">
                                <div class="lrcyb yrzca mkoq3 knom5">
                                    <img src="/assets/img/dummy_headshot.png" class="pt8l6" width="50">
                                    <div style="line-height: 10px">
                                        <div class="g6h8i umlu3">
                                            Nabrious
                                        </div>
                                        <div class="ut8sj umlu3 iniww">
                                            Copy #1 of 200
                                        </div>
                                    </div>
                                </div>
                                <button class="of1zd fm57z nhaz9 sd6c8"
                                    data-toggle-modal="#purchase-with-bucks-modal">
                                    <i class="fas fa-money-bill-1-wave" style="width: 30px"></i>10 Bucks
                                </button>
                            </div>
                            <div class="fotjp yrzca jol0p mkoq3">
                                <div class="lrcyb yrzca mkoq3 knom5">
                                    <img src="/assets/img/dummy_headshot.png" class="pt8l6" width="50">
                                    <div style="line-height: 10px">
                                        <div class="g6h8i umlu3">
                                            Nabrious
                                        </div>
                                        <div class="ut8sj umlu3 iniww">
                                            Copy #1 of 200
                                        </div>
                                    </div>
                                </div>
                                <button class="of1zd fm57z nhaz9 sd6c8"
                                    data-toggle-modal="#purchase-with-bucks-modal">
                                    <i class="fas fa-money-bill-1-wave" style="width: 30px"></i>10 Bucks
                                </button>
                            </div>
                            <div class="fotjp yrzca jol0p mkoq3">
                                <div class="lrcyb yrzca mkoq3 knom5">
                                    <img src="/assets/img/dummy_headshot.png" class="pt8l6" width="50">
                                    <div style="line-height: 10px">
                                        <div class="g6h8i umlu3">
                                            Nabrious
                                        </div>
                                        <div class="ut8sj umlu3 iniww">
                                            Copy #1 of 200
                                        </div>
                                    </div>
                                </div>
                                <button class="of1zd fm57z nhaz9 sd6c8"
                                    data-toggle-modal="#purchase-with-bucks-modal">
                                    <i class="fas fa-money-bill-1-wave" style="width: 30px"></i>10 Bucks
                                </button>
                            </div>
                            <div class="fotjp yrzca jol0p mkoq3">
                                <div class="lrcyb yrzca mkoq3 knom5">
                                    <img src="/assets/img/dummy_headshot.png" class="pt8l6" width="50">
                                    <div style="line-height: 10px">
                                        <div class="g6h8i umlu3">
                                            Nabrious
                                        </div>
                                        <div class="ut8sj umlu3 iniww">
                                            Copy #1 of 200
                                        </div>
                                    </div>
                                </div>
                                <button class="of1zd fm57z nhaz9 sd6c8"
                                    data-toggle-modal="#purchase-with-bucks-modal">
                                    <i class="fas fa-money-bill-1-wave" style="width: 30px"></i>10 Bucks
                                </button>
                            </div>
                            <ul class="jol0p vt7rj mkoq3 hg4an">
                                <button class="pl4dv qnlzm">
                                    <i class="fa-regular fa-chevron-left"></i>
                                </button>
                                <button class="pl4dv irkba">
                                    1
                                </button>
                                <button class="pl4dv">2</button>
                                <button class="pl4dv">3</button>
                                <button class="pl4dv">
                                    <i class="fa-regular fa-chevron-right"></i>
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="u6xfc znzms">
                    <div class="pfmvb">
                        <div class="lrcyb ryur2 yrzca mkoq3 ufpvb">
                            <div class="t8wm3 umlu3">
                                {{ usePage<any>().props.item.name }}
                            </div>
                            <div class="luhjr tejce" style="margin-right: -10px">
                                <button class="b87dk" data-tooltip-title="More" data-tooltip-placement="bottom">
                                    <i class="fas fa-ellipsis-vertical"></i>
                                </button>
                                <ul class="v3lkd k10gs">
                                    <li class="dropdown-item">
                                        <a href="#" class="pa5o5 pokk9">
                                            <i class="fas fa-cash-register gu025"></i>
                                            Sell
                                        </a>
                                    </li>
                                    <li class="dropdown-item">
                                        <a href="#" class="pa5o5 pokk9">
                                            <i class="fas fa-flag gu025"></i>
                                            Report
                                        </a>
                                    </li>
                                    <div class="yrzca mkoq3">
                                        <div class="ujbj2">
                                            Moderation
                                        </div>
                                        <li class="sv9mx knom5"></li>
                                    </div>
                                    <li class="dropdown-item">
                                        <a href="#" class="pa5o5 pokk9 szivm">
                                            <i class="fas fa-gavel gu025 szivm"></i>
                                            View in Panel
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="lrcyb te269 yrzca mkoq3 umlu3">
                            <div class="ut8sj iniww q611u aki3a">
                                By
                            </div>
                            <Link
                                :href="route('user.profile', { username: usePage<any>().props.item.creator.username })"
                                class="lrcyb yrzca mkoq3"
                                :class="{ 'szivm': usePage<any>().props.item.creator.staff }">
                            <img :src="usePage<any>().props.item.creator.thumbnail" class="pt8l6" width="38">
                            <div style="line-height: 17px">
                                <div>{{ usePage<any>().props.item.creator.displayname }}</div>
                                <div class="ut8sj iniww ctx1u" style="max-width: 140px">
                                    {{ '@' + usePage<any>().props.item.creator.username }}
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div class="kqzo1 ut8sj aki3a iniww">

                            <span class="q611u"
                                v-if="usePage<any>().props.auth.user && itemOwnership != true && usePage<any>().props.item.onsale">
                                Purchase With
                            </span>
                            <span class="wxza1 iniww" v-else-if="!usePage<any>().props.item.onsale">
                                This item is offsale.
                            </span>
                            <span class="wxza1 szahi" v-else-if="itemOwnership">
                                You already own this item.
                            </span>
                            <Link :href="route('auth.login.page')" class="wxza1 j6kfv fhjfg" as="span" v-else>
                            Login to Purchase {{ usePage<any>().props.item.name }}
                                </Link>
                        </div>
                        <div class="lrcyb yrzca ygcya"
                            v-if="usePage<any>().props.auth.user && itemOwnership != true && usePage<any>().props.item.onsale">
                            <button class="ryur2 of1zd fm57z xjtlw sd6c8"
                                data-toggle-modal="#purchase-with-bucks-modal"
                                @click="showModal('purchase-with-bucks-modal')">
                                <i class="fas fa-money-bill-1-wave" style="width: 34px"></i>{{ usePage<any>
                                    ().props.item.cost_bucks }} Bucks
                            </button>
                            <div class="ryur2 ut8sj aki3a q611u iniww">
                                or
                            </div>
                            <button class="ryur2 of1zd eqcb5 xjtlw sd6c8"
                                data-toggle-modal="#purchase-with-coins-modal"
                                @click="showModal('purchase-with-coins-modal')">
                                <i class="fas fa-coins" style="width: 34px"></i>{{ usePage<any>().props.item.cost_coins
                                    }}
                                    Coins
                            </button>
                        </div>
                    </div>
                    <div class="vtszn te269">
                        <div class="us3s8 o5qdx">
                            <div class="ryur2 u6xfc rank4">
                                <div class="ut8sj aki3a q611u iniww ctx1u">
                                    Date Created
                                </div>
                                <div class="umlu3 ctx1u">
                                    {{ usePage<any>().props.item.DateHum }}
                                </div>
                            </div>
                            <div class="ryur2 u6xfc rank4">
                                <div class="ut8sj aki3a q611u iniww ctx1u">
                                    Last Updated
                                </div>
                                <div class="umlu3 ctx1u">
                                    {{ usePage<any>().props.item.UpdateHum }}
                                </div>
                            </div>
                            <div class="ryur2 u6xfc rank4 wketr">
                                <div class="ut8sj aki3a q611u iniww ctx1u">
                                    Type
                                </div>
                                <div class="umlu3 text-capitalize ctx1u">
                                    {{ capitalizeFirstLetter(usePage<any>().props.item.item_type) }}
                                </div>
                            </div>
                            <div class="u6xfc rank4">
                                <div class="ut8sj aki3a q611u iniww ctx1u">
                                    Owners
                                </div>
                                <div class="umlu3 ctx1u">
                                    {{ usePage<any>().props.item.owners }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="usePage<any>().props.item.rare">
                        <div class="kqzo1 o204m umlu3">
                            Price Chart
                        </div>
                        <div class="bbztw pfmvb">
                            <div class="ut8sj aki3a q611u iniww">
                                PRICE CHART GOES HERE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kqzo1 o204m umlu3">
                Description
            </div>
            <div class="sv9mx lj0fs uzvus" />
            <div class="te269 wxza1">

                {{ usePage<any>().props.item.description }}
            </div>
            <div class="kqzo1 o204m umlu3">
                Items by {{ usePage<any>().props.item.creator.username }}
            </div>
            <div class="pfmvb">
                <div class="n91zp iniww">
                    <div class="m8bhg ryur2 n91zp jtcwt umlu3 rt13p">
                        <div v-if="recommendations.length" class="us3s8 o5qdx">
                            <div class="u6xfc wc9nb om09p fnliq" v-for="suggestion in recommendations">
                                <Link :href="route('store.item', { id: suggestion.id })" class="nn1dg">
                                <div class="xm14j kqzo1 bbztw ni21t luhjr">
                                    <img :src="suggestion.thumbnail">
                                </div>
                                <div class="jtcwt umlu3 ctx1u">
                                    {{ suggestion.name }}
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div v-else class="n91zp aki3a iniww">
                            There is no other items from this creator
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar>
    <Footer />
</template>

<script lang="ts">
export default {
    name: 'MyComponent',
    methods: {
        isNewItem(created_at) {
            const currentTime = new Date() as any;
            const itemTime = new Date(created_at) as any;
            const timeDifference = currentTime - itemTime;
            const twoHoursInMillis = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

            return timeDifference < twoHoursInMillis;
        }
    },
};
</script>
