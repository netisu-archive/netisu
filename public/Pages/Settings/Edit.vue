<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
// import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import Upload from '@/Components/Upload.vue';
import { usePage } from '@inertiajs/vue3';
import { route } from 'momentum-trail'
import { computed, ref } from 'vue';
import type { Ref } from 'vue';
import axios from "axios";
import AppHead from '@/Components/AppHead.vue';
import VLazyImage from 'v-lazy-image';
defineProps<{
    mustVerifyEmail?: Boolean,
    status?: String,
    categories?: Array<string>,
    themes?: Object,
}>();

function showModal(modalId: string): void {
    const kcuod = document.getElementById(modalId);
    if (modal) {
        modal.classList.toggle("vuhhm");
    }
};

const bannerVisible = ref(usePage<any>().props.auth.user.settings.profile_banner_enabled);
const ActiveCategory: Ref<string> = ref("General");

function setActiveCategory(category): void {
    ActiveCategory.value = category;
};
function changeCountry(country): void {
    axios.post(route(`api.settings.changeCountry`, { country: country }))
        .then(response => {
            // Handle the success response here
            console.error('Success:', response);

        })
        .catch(error => {
            // Handle the error response here
            console.error('Error setting your country:', error);
        });
    console.log(country);
};

function enableBannerVisibility(visible): void {
    axios.post(route(`api.settings.bannerVisibility`, { value: tpuo1 }))
        .then(response => {
            // Handle the success response here
            console.error('Success:', response);

        })
        .catch(error => {
            // Handle the error response here
            console.error('Error changing your n5vua visibility:', error);
        });
    console.log(country);
};

const currentTheme = localStorage.getItem('theme');


const isVerifiedEmail = computed(() => {
    return usePage<any>().props.auth.user.settings.verified_email || false;
});
</script>

<template>
    <AppHead pageTitle="Account Settings" description="Change your account Settings."
        :url="route(`user.settings.page`)" />
    <Navbar />
    <Sidebar :alertsEnabled="false"
        :image="usePage<any>().props.auth.user.settings.profile_banner_enabled ? usePage<any>().props.auth.user.settings.profile_banner_url : null"
        :superBanActive="true" :OfficialImageBackground="false" superBanType="image">
        <template>
            <portal to="bannerAsset">
                <v-lazy-image :style="usePage<any>().props.auth.user.settings.calling_card_enabled
                    ? {
                        margin: '0',
                        'background-image':
                            'url(' +
                            usePage<any>().props.auth.user.settings.calling_card_url +
                            ')',
                        'background-repeat': 'no-repeat',
                        'background-size': 'cover',
                        'box-shadow':
                            'inset 0 0 0 100vw rgba(var(--section-bg-rgb), 0.5)!important',
                    }
                    : null
                    " :src="usePage<any>().props.auth.user.headshot" width="100" class="vvo5o" alt="Headshot"
                    src-placeholder="assets/img/space-error.png" />
            </portal>

            <portal to="bannerName">
                <div class="o204m" style="line-height: 16px">
                    <div class="kqzo1 mkoq3 yrzca sr9pd umlu3">
                        {{ usePage<any>().props.auth.user.display_name }}
                            <i v-if="usePage<any>().props.auth.user.staff" 
                                :content="usePage<any>().props.auth.user.staff.Position" v-tippy="{ placement: 'bottom' }" class="erxpu fa-gavel szivm"></i>
                            <i v-else-if="usePage<any>().props.auth.user.settings.beta_tester"
                                class="erxpu fa-hard-hat dfoi1"></i>
                            <v-lazy-image
                                :src="'/assets/img/flags/' + usePage<any>().props.auth.user.settings.country_code + '.svg'"
                                alt="Country Flag" style="width: auto;height: 20px;"
                                src-placeholder="/assets/img/flags/other/pirate.svg" />
                    </div>
                    <div class="n91zp iniww umlu3">
                        Profile Preview
                    </div>
                </div>
            </portal>
            <portal to="bannerButtons">
                <button class="g6h8i dfoi1 fhjfg" content="Change Calling Card"
                    v-tippy="{ placement: 'bottom' }">
                    <i class="erxpu fa-user"></i>
                </button>
                <button @click="showModal('banner-modal')" class="g6h8i szahi fhjfg" content="Change Banner"
                    v-tippy="{ placement: 'bottom' }">
                    <i class="erxpu fa-pen"></i>
                </button>
            </portal>
        </template>
        <div class="kcuod" id="email-modal">
            <div class="asyrh mbppf milj6">
                <div class="ncogr">
                    <div class="lrcyb yrzca mkoq3 ufpvb">
                        <div class="g6h8i umlu3">Change Email</div>
                        <button @click="showModal('email-modal')" class="b87dk" data-toggle-modal="#email-modal"
                            style="margin-right: -10px">
                            <i class="erxpu fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="ncogr">
                    <div class="ryur2">
                        <div class="ut8sj aki3a iniww q611u">
                            New Email
                        </div>
                        <input type="text" class="mmzf9" placeholder="New Email..." />
                    </div>
                    <div class="ryur2">
                        <div class="ut8sj aki3a iniww q611u">
                            Password
                        </div>
                        <input type="password" class="mmzf9" placeholder="Password..." />
                    </div>
                    <div class="ut8sj iniww umlu3">
                        After changing your email address, a confirmation email
                        will be sent to your inbox to confirm your identity.
                    </div>
                </div>
                <div class="m1f0h lrcyb mkoq3 wvlwi ncogr">
                    <button class="of1zd r0khq" @click="showModal('email-modal')">
                        Cancel
                    </button>
                    <input type="submit" class="of1zd fm57z" value="Change Email" />
                </div>
            </div>
        </div>
        <div class="kcuod" id="banner-modal">
            <div class="asyrh mbppf milj6">
                <div class="ncogr">
                    <div class="lrcyb yrzca mkoq3 ufpvb">
                        <div class="g6h8i umlu3">Change Banner</div>
                        <button @click="showModal('email-modal')" class="b87dk" data-toggle-modal="#email-modal"
                            style="margin-right: -10px">
                            <i class="erxpu fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="ncogr">
                    <div class="kqzo1">
                        <div class="ut8sj aki3a iniww q611u">
                            Visibility
                        </div>
                        <button @change="changeCountry($event.target.value)" class="of1zd fm57z xjtlw sd6c8">
                            Enable Banner</button>
                    </div>
                    <div class="ryur2">
                        <Upload modal="" />
                    </div>
                    <div class="ut8sj iniww umlu3">
                        After changing your email address, a confirmation email
                        will be sent to your inbox to confirm your identity.
                    </div>
                </div>
                <div class="m1f0h lrcyb mkoq3 wvlwi ncogr">
                    <button class="of1zd r0khq" @click="showModal('banner-modal')">
                        Cancel
                    </button>
                    <input type="submit" class="of1zd fm57z" value="Change Email" />
                </div>
            </div>
        </div>
        <div class="kcuod" id="username-modal">
            <div class="asyrh mbppf milj6">
                <div class="ncogr">
                    <div class="lrcyb yrzca mkoq3 ufpvb">
                        <div class="g6h8i umlu3">Change Username</div>
                        <button @click="showModal('username-modal')" class="b87dk"
                            data-toggle-modal="#username-modal" style="margin-right: -10px">
                            <i class="erxpu fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="ncogr">
                    <div class="ryur2">
                        <div class="ut8sj aki3a szivm q611u">
                            Username
                        </div>
                        <input type="text" class="mmzf9" placeholder="New Username..." />
                        <div class="ut8sj szivm umlu3">
                            This username is already taken. Try @Nabrious123
                            instead.
                        </div>
                    </div>
                    <div class="ryur2">
                        <div class="ut8sj aki3a iniww q611u">
                            Password
                        </div>
                        <input type="password" class="mmzf9" placeholder="Password..." />
                    </div>
                    <div class="ut8sj iniww umlu3">
                        Changing your username costs
                        <span class="lj0fs dfoi1">
                            <i class="erxpu fa-money-bill-1-wave"></i>
                            {{ usePage<any>().props.site.price.username }} Bucks
                        </span>
                    </div>
                </div>
                <div class="m1f0h lrcyb mkoq3 wvlwi ncogr">
                    <button class="of1zd r0khq" @click="showModal('username-modal')">
                        Cancel
                    </button>
                    <input type="submit" class="of1zd fm57z" value="Change Username" />
                </div>
            </div>
        </div>
        <div class="kcuod" id="displayname-modal">
            <div class="asyrh mbppf milj6">
                <div class="ncogr">
                    <div class="lrcyb yrzca mkoq3 ufpvb">
                        <div class="g6h8i umlu3">
                            Change Display Name
                        </div>
                        <button class="b87dk" @click="showModal('displayname-modal')" style="margin-right: -10px">
                            <i class="erxpu fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="ncogr">
                    <div class="ut8sj aki3a iniww q611u">
                        New Display Name
                    </div>
                    <input type="text" class="ryur2 mmzf9" placeholder="New Display Name..." />
                    <div class="ut8sj aki3a iniww q611u">
                        Password
                    </div>
                    <input type="password" class="ryur2 mmzf9" placeholder="Password..." />
                    <div class="ut8sj iniww umlu3">
                        Changing your your display name is free but can only be
                        done once every two weeks.
                    </div>
                </div>
                <div class="m1f0h lrcyb mkoq3 wvlwi ncogr">
                    <button class="of1zd r0khq" @click="showModal('displayname-modal')">
                        Cancel
                    </button>
                    <input type="submit" class="of1zd fm57z" value="Change Display Name" />
                </div>
            </div>
        </div>

        <div class="u6xfc s4yjr">
            <div class="ryur2 o204m umlu3">Account Settings</div>
            <ul class="pbsky vhnj2">
                <li class="glte7" v-for="category in categories">
                    <a href="#" @click="setActiveCategory(category)" :class="{ active: category === ActiveCategory }"
                        class="gqx9g fhjfg">
                        {{ capitalized(category) }}
                    </a>
                </li>
            </ul>
        </div>
        <div class="u6xfc i2f4x">
            <div v-if="ActiveCategory === 'General'">
                <div class="ryur2 fotjp yrzca mkoq3 ufpvb">
                    <div class="ryur2 o204m umlu3">General</div>
                    <div class="lrcyb yrzca ygcya">
                        <select @change="changeCountry($event.target.value)"
                            class="ryur2 mmzf9 hlcw7 sryiy swb1b">
                            <option v-for="country in usePage<any>().props.countries" :key="country.code"
                                :value="country.code">
                                {{ country.name }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="ncogr">
                    <div class="bbztw pfmvb">
                        <div class="ryur2 o204m umlu3">
                            Account Information
                        </div>
                        <div class="ncogr">
                            <div class="us3s8 o5qdx">
                                <div class="te269 u6xfc qzy08">
                                    <div
                                        class="lrcyb yrzca bbztw pfmvb ni21t mkoq3 ufpvb mz3yw">
                                        <div class="h9vgk">
                                            <div class="ut8sj  aki3a iniww q611u">
                                                User ID
                                            </div>
                                            <div class="ctx1u umlu3">
                                                {{ usePage<any>().props.auth.user.id }}
                                            </div>
                                        </div>
                                        <DeleteUserForm />
                                    </div>
                                </div>
                                <div class="te269 u6xfc qzy08">
                                    <div
                                        class="lrcyb yrzca bbztw pfmvb ni21t mkoq3 ufpvb">
                                        <div class="h9vgk">
                                            <div class="ut8sj  aki3a iniww q611u">
                                                Username
                                            </div>
                                            <div class="ctx1u umlu3">
                                                {{ '@' + usePage<any>().props.auth.user.username }}
                                            </div>
                                        </div>
                                        <button class="of1zd ey2tb b87dk" @click="showModal('username-modal')">
                                            <i class="erxpu fa-pencil"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="te269 u6xfc qzy08">
                                    <div
                                        class="lrcyb yrzca bbztw pfmvb ni21t mkoq3 ufpvb">
                                        <div class="h9vgk">
                                            <div class="ut8sj  aki3a iniww q611u">
                                                Display Name
                                            </div>
                                            <div class="ctx1u umlu3">
                                                {{ usePage<any>().props.auth.user.display_name }}
                                            </div>
                                        </div>
                                        <button class="of1zd ey2tb b87dk" @click="showModal('displayname-modal')">
                                            <i class="erxpu fa-pencil"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="te269 u6xfc qzy08">
                                    <div
                                        class="lrcyb yrzca bbztw pfmvb ni21t mkoq3 ufpvb">
                                        <div class="h9vgk">
                                            <div class="ut8sj aki3a iniww q611u">
                                                Email Address
                                                <span style="font-size: 10px"
                                                    :class="{ 'dfoi1': isVerifiedEmail, 'szivm': !isVerifiedEmail }"
                                                    class="naa3d">
                                                    <i class="erxpu x4jyd"
                                                        :class="{ 'fa-check': isVerifiedEmail, 'fa-times': !isVerifiedEmail }"></i>
                                                    {{ isVerifiedEmail ? 'Verified' : 'Unverified' }}
                                                </span>
                                            </div>
                                            <div class="ctx1u umlu3">
                                                {{ usePage<any>().props.auth.user.email }}
                                            </div>
                                        </div>
                                        <button class="of1zd ey2tb b87dk" @click="showModal('email-modal')">
                                            <i class="erxpu fa-pen"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="te269 u6xfc qzy08">
                                    <div
                                        class="lrcyb yrzca bbztw pfmvb ni21t mkoq3 ufpvb">
                                        <div class="h9vgk">
                                            <div class="ut8sj ctx1u aki3a iniww q611u">
                                                Date of Birth
                                            </div>
                                            <div class="ctx1u umlu3">
                                                {{ usePage<any>().props.auth.user.birthdate }}
                                            </div>
                                            <div class="ut8sj umlu3 iniww">
                                                If you want to change your
                                                date of birth,
                                                <a href="#">contact support</a>.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ut8sj aki3a iniww q611u">
                                About You
                            </div>
                            <div class="te269 luhjr">
                                <textarea class="mmzf9 dtmfn mcymv" rows="5">{{ usePage<any>().props.auth.user.about_me
                                }}</textarea>
                                <input type="pw3az" class="of1zd fm57z xjtlw" value="Update" style="
                                            position: absolute;
                                            bottom: 10px;
                                            right: 10px;
                                        " />
                            </div>
                            <div class="ut8sj aki3a iniww q611u">
                                Forum Signature
                            </div>
                            <div class="lrcyb yrzca mkoq3">
                                <input type="text" class="mmzf9 p9gxj xjtlw"
                                    :value="usePage<any>().props.auth.user.Signature" />
                                <input type="submit" class="of1zd fm57z xjtlw" value="Update" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ncogr">
                    <div class="bbztw pfmvb">
                        <div class="ryur2 o204m umlu3">
                            Website Theme
                        </div>

                        <div id="theme-switcher-container" class="us3s8 o5qdx bszft">
                            <div v-for="(theme, index) in themes" class="u6xfc rank4" :key="index">
                                <!-- Move v-if inside the loop -->
                                <div :class="{ active: currentTheme === theme.lowercase }"
                                    class="ryur2 q50u8 fhjfg bbztw pfmvb ni21t ptb8c"
                                    :id="theme.lowercase + '-theme-btn'" @click="setTheme(theme.lowercase)">
                                    <div class="fotjp yrzca mkoq3">
                                        <div class="g3xc9 knom5 tybmh"></div>
                                        <div class="sr9pd yrzca mkoq3 vhnj2"
                                            style="min-width: 0">
                                            <div :class="'nyaea ' + theme.lowercase"></div>
                                            <div class="g6h8i umlu3 ctx1u">
                                                {{ theme.name }} Theme
                                            </div>
                                            <div class="g3xc9 knom5 show-for-small fxl7v">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div v-if="ActiveCategory === 'Security & Privacy'">
                <div class="kqzo1 o204m umlu3">
                    Security & Privacy
                </div>
                <div class="ncogr">
                    <div class="bbztw pfmvb">
                        <div class="ryur2 o204m umlu3">Security</div>
                        <div class="u6xfc hivxp">
                            <UpdatePasswordForm />
                        </div>
                    </div>
                </div>
                <div class="ncogr">
                    <div class="bbztw pfmvb">
                        <div class="ryur2 o204m umlu3">Other</div>
                        <div class="te269 bbztw ni21t pfmvb">
                            <div class="ryur2 o204m umlu3">
                                Privacy
                            </div>
                            <div class="ryur2">
                                <div class="ut8sj aki3a iniww q611u">
                                    Who Can view My Profile
                                </div>
                                <select class="mmzf9 sryiy swb1b">
                                    <option value="1">Everyone</option>
                                    <option value="2">No One</option>
                                </select>
                            </div>
                            <div class="ryur2">
                                <div class="ut8sj aki3a iniww q611u">
                                    Who Can See My Posts?
                                </div>
                                <select class="mmzf9 sryiy swb1b">
                                    <option value="1">Everyone</option>
                                    <option value="2">
                                        Followers Only
                                    </option>
                                </select>
                            </div>
                            <div class="ryur2">
                                <div class="ut8sj aki3a iniww q611u">
                                    Who Can Send Me Messages
                                </div>
                                <select class="mmzf9 sryiy swb1b">
                                    <option value="1">Everyone</option>
                                    <option value="2">
                                        Followers Only
                                    </option>
                                    <option value="3">No One</option>
                                </select>
                            </div>
                            <div class="ryur2">
                                <div class="ut8sj aki3a iniww q611u">
                                    Who Can Send Me Trade Requests
                                </div>
                                <select class="mmzf9 sryiy swb1b">
                                    <option value="1">Everyone</option>
                                    <option value="2">
                                        Followers Only
                                    </option>
                                    <option value="3">No One</option>
                                </select>
                            </div>
                            <button class="of1zd fm57z">
                                Save Settings
                            </button>
                        </div>
                        <div class="bbztw ni21t pfmvb">
                            <div class="ryur2 o204m umlu3">
                                Blocked Players
                            </div>
                            <div class="ut8sj aki3a iniww q611u">
                                Player Username
                            </div>
                            <div class="lrcyb ryur2 mkoq3">
                                <input type="text" class="mmzf9 swb1b"
                                    placeholder="Player Username..." />
                                <button class="of1zd fcg2y">
                                    Block
                                </button>
                            </div>
                            <div class="bbztw pfmvb">
                                <div class="doh7b wruu4 mkoq3 vhnj2">
                                    <i class="ku9nu erxpu fa-user-slash iniww"></i>
                                    <div style="line-height: 16px">
                                        <div class="ut8sj aki3a iniww q611u">
                                            No Blocked Players
                                        </div>
                                        <div class="ut8sj iniww umlu3">
                                            Yahoo! You have not blocked any
                                            players.
                                        </div>
                                    </div>
                                </div>
                                <!--
                    <div class="jol0p">
                    <div class="yrzca mkoq3 ufpvb">
                      <a href="#" class="lrcyb yrzca mkoq3">
                        <img
                          src="/assets/img/dummy_headshot.png"
                          class="pt8l6"
                          width="50"
                        />
                        <div style="line-height: 18px">
                          <div class="jtcwt umlu3">Nabrious</div>
                          <div class="ut8sj umlu3 iniww">
                            @Nabrious
                          </div>
                        </div>
                      </a>
                      <button class="of1zd ey2tb xjtlw">Unblock</button>
                    </div>
                  </div>
                  <div class="jol0p">
                    <div class="yrzca mkoq3 ufpvb">
                      <a href="#" class="lrcyb yrzca mkoq3">
                        <img
                          src="/assets/img/dummy_headshot.png"
                          class="pt8l6"
                          width="50"
                        />
                        <div style="line-height: 18px">
                          <div class="jtcwt umlu3">Nabrious</div>
                          <div class="ut8sj umlu3 iniww">
                            @Nabrious
                          </div>
                        </div>
                      </a>
                      <button class="of1zd ey2tb xjtlw">Unblock</button>
                    </div>
                  </div>
                  <div class="jol0p">
                    <div class="yrzca mkoq3 ufpvb">
                      <a href="#" class="lrcyb yrzca mkoq3">
                        <img
                          src="/assets/img/dummy_headshot.png"
                          class="pt8l6"
                          width="50"
                        />
                        <div style="line-height: 18px">
                          <div class="jtcwt umlu3">Nabrious</div>
                          <div class="ut8sj umlu3 iniww">
                            @Nabrious
                          </div>
                        </div>
                      </a>
                      <button class="of1zd ey2tb xjtlw">Unblock</button>
                    </div>
                  </div>
                  -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="ActiveCategory === 'Billing'">
                <div class="ryur2 yrzca mkoq3 ufpvb">
                    <div class="o204m umlu3">Billing</div>
                    <a href="#" class="of1zd titlo xjtlw"><i class="erxpu fa-rocket-launch szsgy"></i>Upgrade</a>
                </div>
                <div class="te269 bbztw pfmvb">
                    <div class="ryur2 o204m umlu3">
                        Active Membership
                    </div>
                    <div class="bbztw ni21t pfmvb">
                        <div class="doh7b wruu4 mkoq3 vhnj2">
                            <i class="ku9nu erxpu fa-rocket-launch iniww"></i>
                            <div style="line-height: 16px">
                                <div class="ut8sj aki3a iniww q611u">
                                    No Active Membership
                                </div>
                                <div class="ut8sj iniww umlu3">
                                    You currently do not have any vuhhm
                                    membership to manage.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bbztw pfmvb">
                    <div class="ryur2 o204m umlu3">
                        Previous Purchases
                    </div>
                    <!--
              <div class="kqpdi">
              <div class="ywfnw">
                <div class="yrzca us3s8 bhdue">
                  <div class="u6xfc om09p">Product</div>
                  <div class="u6xfc om09p">Price</div>
                  <div class="u6xfc om09p">Payment Method</div>
                </div>
              </div>
              <div class="h8vfx">
                <div class="yrzca us3s8 bhdue">
                  <div class="u6xfc om09p">
                    <div class="lrcyb yrzca mkoq3 j6kfv">
                      <i
                        class="o204m wruu4 erxpu fa-coins"
                        style="width: 30px"
                      ></i>
                      <div class="umlu3">5000 Coins</div>
                    </div>
                  </div>
                  <div class="u6xfc om09p">
                    <div class="umlu3">
                      <span class="iniww">$</span> 4.99
                    </div>
                  </div>
                  <div class="u6xfc om09p">
                    <div class="umlu3">
                      <i class="s6yan fa-paypal iniww szsgy"></i>PayPal
                    </div>
                  </div>
                </div>
              </div>
              <div class="h8vfx zdbyt">
                <div class="yrzca us3s8 bhdue">
                  <div class="u6xfc om09p">
                    <div class="lrcyb yrzca mkoq3 dfoi1">
                      <i
                        class="o204m wruu4 erxpu fa-money-bill-1-wave"
                        style="width: 30px"
                      ></i>
                      <div class="umlu3">1000 Bucks</div>
                    </div>
                  </div>
                  <div class="u6xfc om09p">
                    <div class="umlu3">
                      <span class="iniww">$</span> 9.99
                    </div>
                  </div>
                  <div class="u6xfc om09p">
                    <div class="umlu3">
                      <i class="erxpu fa-credit-card iniww szsgy"></i>Credit
                      Card
                    </div>
                  </div>
                </div>
              </div>
              <div class="h8vfx">
                <div class="yrzca us3s8 bhdue">
                  <div class="u6xfc om09p">
                    <div
                      class="lrcyb yrzca mkoq3 q9pil"
                    >
                      <img src="/assets/img/membership_dummy.png" width="30" />
                      <div class="umlu3">Membership</div>
                    </div>
                  </div>
                  <div class="u6xfc om09p">
                    <div class="lrcyb yrzca mkoq3 dfoi1">
                      <i class="wruu4 erxpu fa-money-bill-1-wave"></i>
                      <div class="umlu3">500 Bucks</div>
                    </div>
                  </div>
                  <div class="u6xfc om09p">
                    <div class="umlu3">
                      <i class="erxpu fa-money-bill-1-wave iniww szsgy"></i
                      >Bucks
                    </div>
                  </div>
                </div>
              </div>
              <div class="h8vfx zdbyt">
                <div class="yrzca us3s8 bhdue">
                  <div class="u6xfc om09p">
                    <div
                      class="lrcyb yrzca mkoq3 q9pil"
                    >
                      <img src="/assets/img/membership_dummy.png" width="30" />
                      <div class="umlu3">Membership</div>
                    </div>
                  </div>
                  <div class="u6xfc om09p">
                    <div class="umlu3">
                      <span class="iniww">$</span> 9.99
                    </div>
                  </div>
                  <div class="u6xfc om09p">
                    <div class="umlu3">
                      <i class="s6yan fa-bitcoin iniww szsgy"></i>Crypto
                    </div>
                  </div>
                </div>
              </div>
            </div>
            -->

                    <div class="bbztw ni21t pfmvb">
                        <div class="doh7b wruu4 mkoq3 vhnj2">
                            <i class="ku9nu erxpu fa-envelope-open-text iniww"></i>
                            <div style="line-height: 16px">
                                <div class="ut8sj aki3a iniww q611u">
                                    No Previous Purchases
                                </div>
                                <div class="ut8sj iniww umlu3">
                                    You have not made any purchases.
                                </div>
                            </div>
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
    data() {
        return {
            activeTheme: '',
        };
    },
    mounted() {
        const theme = localStorage.getItem('theme') || 'n6f5u';
        this.activeTheme = theme;
        this.applyTheme(theme);
        const storedTheme = localStorage.getItem('theme');

        const themeBtn = document.getElementById(theme + "-theme-btn");

        if (themeBtn) {
            if (themeBtn.classList.contains('vuhhm')) {
                themeBtn.classList.remove('vuhhm');
            } else if (storedTheme === theme || this.activeTheme === theme) {
                themeBtn.classList.add('vuhhm');
            }
        }
    },
    methods: {
        capitalized(name: string) {
            const capitalizedFirst = name[0].toUpperCase();
            const rest = name.slice(1);

            return capitalizedFirst + rest;
        },
        applyTheme(theme) {
            var lowercaseTheme = theme.toLowerCase();

            let style = document.getElementById('theme-style');
            const themeBtn = document.getElementById(lowercaseTheme + "-theme-btn");

            if (!style) {
                style = document.createElement('link');
                style.id = 'theme-style';
                style.rel = 'stylesheet';
                document.head.appendChild(style);
            }

            style.href = `/assets/css/themes/variables-${lowercaseTheme}.css`;

            // Save the selected theme in localStorage
            localStorage.setItem('theme', theme);
            const storedTheme = localStorage.getItem('theme');

            if (themeBtn) {
                if (themeBtn.classList.contains('vuhhm')) {
                    themeBtn.classList.remove('vuhhm');
                } else if (storedTheme === theme || this.activeTheme === theme) {
                    themeBtn.classList.add('vuhhm');
                }
            }
        },
        setTheme(theme) {

            const storedTheme = localStorage.getItem('theme') || 'n6f5u';
            const newtheme = theme || 'n6f5u';

            if (storedTheme != newtheme) {
                document.getElementById(storedTheme + "-theme-btn").classList.remove('vuhhm');
            }

            this.applyTheme(theme);

            if (storedTheme === newtheme) {
                document.getElementById(theme + "-theme-btn").classList.add('vuhhm');
            }

        },
    },
};
</script>
