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
import { computed, ref, h } from 'vue';
import type { Ref } from 'vue';
import axios from "axios";
import AppHead from '@/Components/AppHead.vue';
import VLazyImage from 'v-lazy-image';
import SuperBanner from '@/Components/LayoutParts/SuperBanner.vue';
import { toTypedSchema } from '@vee-validate/zod'
import { FieldArray, useForm } from 'vee-validate'
import * as z from 'zod'

import {
    Button
} from '@/Components/ui/button'
import { Separator } from '@/Components/ui/separator'
import { Textarea } from '@/Components/ui/textarea'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form'
import { Input } from '@/Components/ui/input'
import { toast } from '@/Components/ui/toast'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select'

defineProps<{
    hasVerifiedEmail?: Boolean,
    status?: String,
    categories?: Object,
    themes?: Object,
}>();

function showModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.toggle("active");
    }
};


const bannerVisible = ref(usePage<any>().props.auth.user.settings.profile_banner_enabled);
const ActiveCategory: Ref<string> = ref("Profile");

function setActiveCategory(category): void {
    ActiveCategory.value = category;
};

const profileFormSchema = toTypedSchema(z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }).optional(),
    country: z
    .string({
      required_error: 'Please select an country to display.',
    }).optional(),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email().optional(),
  bio: z.string().max(160, { message: 'Bio must not be longer than 160 characters.' }).min(4, { message: 'Bio must be at least 2 characters.' }),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'Please enter a valid URL.' }),
      }),
    )
    .optional(),
}))

const { handleSubmit, resetForm } = useForm({
  validationSchema: profileFormSchema,
  initialValues: {
    bio: 'I own a computer.',
    urls: [
      { value: 'https://shadcn.com' },
      { value: 'http://twitter.com/shadcn' },
    ],
  },
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})
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

function uploadProfilePicture(image): void {
    axios.post(route(`api.settings.uploadProfilePicture`, { image: image }))
        .then(response => {
            // Handle the success response here
            console.error('Success:', response);

        })
        .catch(error => {
            // Handle the error response here
            console.error('Error uploading your profile picture:', error);
        });
    console.log(image);
};

function enableBannerVisibility(visible): void {
    axios.post(route(`api.settings.bannerVisibility`, { value: visible }))
        .then(response => {
            // Handle the success response here
            console.error('Success:', response);

        })
        .catch(error => {
            // Handle the error response here
            console.error('Error changing your banner visibility:', error);
        });
    console.log(country);
};

const currentTheme = localStorage.getItem('theme');


const isVerifiedEmail = computed(() => {
    return usePage<any>().props.hasVerifiedEmail || false;
});
</script>

<template>
    <AppHead pageTitle="Account Settings" description="Change your account Settings."
        :url="route(`user.settings.page`)" />
    <Navbar />
    <Sidebar :alertsEnabled="false"
        :image="usePage<any>().props.auth.user.settings.profile_banner_enabled ? usePage<any>().props.auth.user.settings.profile_banner_url : null"
        :superBanActive="true" :OfficialImageBackground="false">
        <template #SuperBanner>
            <SuperBanner>
                <template #bannerAsset>
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
                        " :src="usePage<any>().props.auth.user.headshot" width="100" class="space-image" alt="Headshot"
                        src-placeholder="assets/img/space-error.png" />
                </template>

                <template #bannerName>
                    <div class="text-xl" style="line-height: 16px">
                        <div class="mb-1 flex-container align-middle gap-1 fw-semibold">
                            {{ usePage<any>().props.auth.user.display_name }}
                                <i v-if="usePage<any>().props.auth.user.staff"
                                    :content="usePage<any>().props.auth.user.staff.Position"
                                    v-tippy="{ placement: 'bottom' }" class="fad fa-gavel text-danger"></i>
                                <i v-else-if="usePage<any>().props.auth.user.settings.beta_tester"
                                    class="fad fa-hard-hat text-success"></i>
                                <v-lazy-image
                                    :src="'/assets/img/flags/' + usePage<any>().props.auth.user.settings.country_code + '.svg'"
                                    alt="Country Flag" style="width: auto;height: 20px;"
                                    src-placeholder="/assets/img/flags/other/pirate.svg" />
                        </div>
                        <div class="text-sm text-muted fw-semibold">
                            Profile Preview
                        </div>
                    </div>
                </template>
                <template #bannerButtons>
                    <button @click="showModal('picture-modal')" class="text-lg text-success squish"
                        content="Change Profile Picture" v-tippy="{ placement: 'bottom' }">
                        <i class="fad fa-user"></i>
                    </button>
                    <button class="text-lg text-warning squish" content="Change Calling Card"
                        v-tippy="{ placement: 'bottom' }">
                        <i class="fad fa-cards"></i>
                    </button>
                    <button @click="showModal('banner-modal')" class="text-lg text-info squish" content="Change Banner"
                        v-tippy="{ placement: 'bottom' }">
                        <i class="fad fa-pen"></i>
                    </button>
                </template>
            </SuperBanner>
        </template>
        <div class="space-y-6 ">
            <div class="space-y-0.5">
                <h2 class="text-2xl font-bold tracking-tight">
                    Settings
                </h2>
                <p class="text-muted-foreground">
                    Manage your account settings and set e-mail preferences.
                </p>
            </div>
            <Separator class="my-6" />

            <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <aside class="lg:w-1/5">
                    <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
                        <Button v-for="(categoryData, categoryName) in categories"
                            @click="setActiveCategory(categoryName)" :key="categoryName" as="a" href="#" variant="ghost"
                            :class="{ 'bg-blue-500 text-white': categoryName === ActiveCategory }"
                            class="w-full text-left justify-start">
                            <i :class="categoryData.icon"></i>
                            {{ capitalized(categoryName) }}
                        </Button>
                    </nav>
                </aside>
                <div class="flex-1 lg:max-w-2xl">
                    <div class="space-y-6">
                        <template v-for="(categoryData, categoryName) in categories" :key="categoryName">
                            <div v-if="categoryName === ActiveCategory">
                                <div class="pb-4">
                                    <h3 class="text-lg font-medium">
                                        <i :class="categoryData.icon"></i>

                                        {{ capitalized(categoryName) }}
                                    </h3>
                                    <p class="text-sm text-muted-foreground">
                                        {{ categoryData.description }} </p>
                                </div>
                                <Separator />

                            </div>
                        </template>
                        <form @submit="onSubmit">

                        <div v-if="ActiveCategory === 'Profile'">
                            <FormField v-slot="{ componentField }" name="country"  class="mb-4">
                                <FormItem>
                                    <FormLabel>Country</FormLabel>

                                    <Select @change="changeCountry($event.target.value)">
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your Country" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem v-for="country in usePage<any>().props.countries"
                                                    :key="country.code" :value="country.code">
                                                    {{ country.name }}
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        This does not change your language.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                            <FormField v-slot="{ componentField }" name="displayname">
                                <FormItem>
                                  <FormLabel>Display Name</FormLabel>
                                  <FormControl>
                                    <Input type="text" placeholder="@username" v-bind="componentField" />
                                  </FormControl>
                                  <FormDescription>
                                    This is your public display name. It can be your real name or a pseudonym. You can only change this once every 14 days.
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              </FormField>

                            <FormField v-slot="{ componentField }" name="username">
                                <FormItem>
                                  <FormLabel>Username</FormLabel>
                                  <FormControl>
                                    <Input type="text" placeholder="username" v-bind="componentField" />
                                  </FormControl>
                                  <FormDescription>
                                    This is your public username. It only uses(alpha-numeric characters). You can only change this once every 60 days.
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              </FormField>


                            <div class="section-borderless">
                                <div class="card card-body">
                                    <div class="mb-2 text-xl fw-semibold">
                                        Account Information
                                    </div>
                                    <div class="section-borderless">
                                        <div class="grid-x grid-margin-x">
                                            <div class="mb-3 cell medium-6">
                                                <div
                                                    class="gap-2 align-middle card card-body card-inner flex-container align-justify h-100">
                                                    <div class="min-w-0">
                                                        <div class="text-xs  fw-bold text-muted text-uppercase">
                                                            User ID
                                                        </div>
                                                        <div class="text-truncate fw-semibold">
                                                            {{ usePage<any>().props.auth.user.id }}
                                                        </div>
                                                    </div>
                                                    <DeleteUserForm />
                                                </div>
                                            </div>
                                            <div class="mb-3 cell medium-6">
                                                <div
                                                    class="gap-2 align-middle card card-body card-inner flex-container align-justify">
                                                    <div class="min-w-0">
                                                        <div class="text-xs  fw-bold text-muted text-uppercase">
                                                            Username
                                                        </div>
                                                        <div class="text-truncate fw-semibold">
                                                            {{ '@' + usePage<any>().props.auth.user.username }}
                                                        </div>
                                                    </div>
                                                    <button class="btn btn-info btn-circle"
                                                        @click="showModal('username-modal')">
                                                        <i class="fad fa-pencil"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="mb-3 cell medium-6">
                                                <div
                                                    class="gap-2 align-middle card card-body card-inner flex-container align-justify">
                                                    <div class="min-w-0">
                                                        <div class="text-xs  fw-bold text-muted text-uppercase">
                                                            Display Name
                                                        </div>
                                                        <div class="text-truncate fw-semibold">
                                                            {{ usePage<any>().props.auth.user.display_name }}
                                                        </div>
                                                    </div>
                                                    <button class="btn btn-info btn-circle"
                                                        @click="showModal('displayname-modal')">
                                                        <i class="fad fa-pencil"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="mb-3 cell medium-6">
                                                <div
                                                    class="gap-2 align-middle card card-body card-inner flex-container align-justify">
                                                    <div class="min-w-0">
                                                        <div class="text-xs fw-bold text-muted text-uppercase">
                                                            Email Address
                                                            <span style="font-size: 10px"
                                                                :class="{ 'text-success': isVerifiedEmail, 'text-danger': !isVerifiedEmail }"
                                                                class="ms-2">
                                                                <i class="fad me-1"
                                                                    :class="{ 'fa-check': isVerifiedEmail, 'fa-times': !isVerifiedEmail }"></i>
                                                                {{ isVerifiedEmail ? 'Verified' : 'Unverified' }}
                                                            </span>
                                                        </div>
                                                        <div class="text-truncate fw-semibold">
                                                            {{ usePage<any>().props.auth.user.email }}
                                                        </div>
                                                    </div>
                                                    <button class="btn btn-info btn-circle"
                                                        @click="showModal('email-modal')">
                                                        <i class="fad fa-pen"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="mb-3 cell medium-6">
                                                <div
                                                    class="gap-2 align-middle card card-body card-inner flex-container align-justify">
                                                    <div class="min-w-0">
                                                        <div
                                                            class="text-xs text-truncate fw-bold text-muted text-uppercase">
                                                            Date of Birth
                                                        </div>
                                                        <div class="text-truncate fw-semibold">
                                                            {{ usePage<any>().props.auth.user.birthdate }}
                                                        </div>
                                                        <div class="text-xs fw-semibold text-muted">
                                                            If you want to change your
                                                            date of birth,
                                                            <a href="#">contact support</a>.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-xs fw-bold text-muted text-uppercase">
                                            About You
                                        </div>
                                        <div class="mb-3 position-relative">
                                            <textarea class="form form-has-button pe-5" rows="5">{{ usePage<any>().props.auth.user.about_me
                                }}</textarea>
                                            <input type="button" class="btn btn-success btn-sm" value="Update" style="
                                            position: absolute;
                                            bottom: 10px;
                                            right: 10px;
                                        " />
                                        </div>
                                        <div class="text-xs fw-bold text-muted text-uppercase">
                                            Forum Signature
                                        </div>
                                        <div class="gap-2 align-middle flex-container">
                                            <input type="text" class="form form-sm btn-sm"
                                                :value="usePage<any>().props.auth.user.Signature" />
                                            <input type="submit" class="btn btn-success btn-sm" value="Update" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="section-borderless">
                                <div class="card card-body">
                                    <div class="mb-2 text-xl fw-semibold">
                                        Website Theme
                                    </div>

                                    <div id="theme-switcher-container" class="grid-x grid-margin-x grid-padding-y">
                                        <div v-for="(theme, index) in themes" class="cell large-6" :key="index">
                                            <!-- Move v-if inside the loop -->
                                            <div :class="{ active: currentTheme === theme.lowercase }"
                                                class="mb-2 theme-selection squish card card-body card-inner mb-lg-0"
                                                :id="theme.lowercase + '-theme-btn'" @click="setTheme(theme.lowercase)">
                                                <div class="gap-4 align-middle flex-container">
                                                    <div class="selection-circle flex-child-grow show-for-large"></div>
                                                    <div class="gap-1 align-middle flex-container flex-dir-column"
                                                        style="min-width: 0">
                                                        <div :class="'theme-circle ' + theme.lowercase"></div>
                                                        <div class="text-lg fw-semibold text-truncate">
                                                            {{ theme.name }} Theme
                                                        </div>
                                                        <div
                                                            class="selection-circle flex-child-grow show-for-small hide-for-large">
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
                            <div class="mb-1 text-xl fw-semibold">
                                Security & Privacy
                            </div>
                            <div class="section-borderless">
                                <div class="card card-body">
                                    <div class="mb-2 text-xl fw-semibold">Security</div>
                                    <div class="cell medium-12">
                                        <UpdatePasswordForm />
                                    </div>
                                </div>
                            </div>
                            <div class="section-borderless">
                                <div class="card card-body">
                                    <div class="mb-2 text-xl fw-semibold">Other</div>
                                    <div class="mb-3 card card-inner card-body">
                                        <div class="mb-2 text-xl fw-semibold">
                                            Privacy
                                        </div>
                                        <div class="mb-2">
                                            <div class="text-xs fw-bold text-muted text-uppercase">
                                                Who Can view My Profile
                                            </div>
                                            <select class="form form-select form-has-section-color">
                                                <option value="1">Everyone</option>
                                                <option value="2">No One</option>
                                            </select>
                                        </div>
                                        <div class="mb-2">
                                            <div class="text-xs fw-bold text-muted text-uppercase">
                                                Who Can See My Posts?
                                            </div>
                                            <select class="form form-select form-has-section-color">
                                                <option value="1">Everyone</option>
                                                <option value="2">
                                                    Followers Only
                                                </option>
                                            </select>
                                        </div>
                                        <div class="mb-2">
                                            <div class="text-xs fw-bold text-muted text-uppercase">
                                                Who Can Send Me Messages
                                            </div>
                                            <select class="form form-select form-has-section-color">
                                                <option value="1">Everyone</option>
                                                <option value="2">
                                                    Followers Only
                                                </option>
                                                <option value="3">No One</option>
                                            </select>
                                        </div>
                                        <div class="mb-2">
                                            <div class="text-xs fw-bold text-muted text-uppercase">
                                                Who Can Send Me Trade Requests
                                            </div>
                                            <select class="form form-select form-has-section-color">
                                                <option value="1">Everyone</option>
                                                <option value="2">
                                                    Followers Only
                                                </option>
                                                <option value="3">No One</option>
                                            </select>
                                        </div>
                                        <button class="btn btn-success">
                                            Save Settings
                                        </button>
                                    </div>
                                    <div class="card card-inner card-body">
                                        <div class="mb-2 text-xl fw-semibold">
                                            Blocked Players
                                        </div>
                                        <div class="text-xs fw-bold text-muted text-uppercase">
                                            Player Username
                                        </div>
                                        <div class="gap-2 mb-2 flex-container">
                                            <input type="text" class="form form-has-section-color"
                                                placeholder="Player Username..." />
                                            <button class="btn btn-danger">
                                                Block
                                            </button>
                                        </div>
                                        <div class="card card-body">
                                            <div class="gap-3 text-center flex-container flex-dir-column">
                                                <i class="text-5xl fad fa-user-slash text-muted"></i>
                                                <div style="line-height: 16px">
                                                    <div class="text-xs fw-bold text-muted text-uppercase">
                                                        No Blocked Players
                                                    </div>
                                                    <div class="text-xs text-muted fw-semibold">
                                                        Yahoo! You have not blocked any
                                                        players.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="ActiveCategory === 'Billing'">
                            <div class="mb-2 align-middle flex-container align-justify">
                                <div class="text-xl fw-semibold">Billing</div>
                                <a href="#" class="btn btn-upgrade btn-sm"><i
                                        class="fad fa-rocket-launch me-2"></i>Upgrade</a>
                            </div>
                            <div class="mb-3 card card-body">
                                <div class="mb-2 text-xl fw-semibold">
                                    Active Membership
                                </div>
                                <div class="card card-inner card-body">
                                    <div class="gap-3 text-center flex-container flex-dir-column">
                                        <i class="text-5xl fad fa-rocket-launch text-muted"></i>
                                        <div style="line-height: 16px">
                                            <div class="text-xs fw-bold text-muted text-uppercase">
                                                No Active Membership
                                            </div>
                                            <div class="text-xs text-muted fw-semibold">
                                                You currently do not have any active
                                                membership to manage.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-body">
                                <div class="mb-2 text-xl fw-semibold">
                                    Previous Purchases
                                </div>

                                <div class="card card-inner card-body">
                                    <div class="gap-3 text-center flex-container flex-dir-column">
                                        <i class="text-5xl fad fa-envelope-open-text text-muted"></i>
                                        <div style="line-height: 16px">
                                            <div class="text-xs fw-bold text-muted text-uppercase">
                                                No Previous Purchases
                                            </div>
                                            <div class="text-xs text-muted fw-semibold">
                                                You have not made any purchases.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-2 justify-start">
                            <Button type="submit">
                              Update {{ ActiveCategory }}
                            </Button>

                            <Button
                              type="button"
                              variant="outline"
                              @click="resetForm"
                            >
                              Reset form
                            </Button>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar>
    <Footer />
</template>

<script lang="ts">
let theme;

export default {
    data() {
        return {
            activeTheme: '',
        };
    },
    mounted() {
        if (typeof localStorage !== 'undefined') {
            theme = localStorage.getItem('theme') || 'light';
        } else if (typeof sessionStorage !== 'undefined') {
            // Fallback to sessionStorage
            theme = sessionStorage.getItem('theme') || 'light';
        } else {
            // If neither localStorage nor sessionStorage is supported
            console.log('Web Storage is not supported in this environment.');
            theme = 'light';
        }

        this.activeTheme = theme;
        this.applyTheme(theme);
        const storedTheme = localStorage.getItem('theme');

        const themeBtn = document.getElementById(theme + "-theme-btn");

        if (themeBtn) {
            if (themeBtn.classList.contains('active')) {
                themeBtn.classList.remove('active');
            } else if (storedTheme === theme || this.activeTheme === theme) {
                themeBtn.classList.add('active');
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

            // Save the selected theme in Storage
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('theme', theme);
            } else if (typeof sessionStorage !== 'undefined') {
                // Fallback to sessionStorage if localStorage is not supported
                sessionStorage.setItem('theme', theme);
            } else {
                // If neither localStorage nor sessionStorage is supported
                console.log('Web Storage is not supported in this environment.');
            }

            const storedTheme = typeof localStorage !== 'undefined'
                ? localStorage.getItem('theme')
                : typeof sessionStorage !== 'undefined'
                    ? sessionStorage.getItem('theme')
                    : null;

            if (storedTheme === null) {
                console.log('Web Storage is not supported in this environment.');
            }

            if (themeBtn) {
                if (themeBtn.classList.contains('active')) {
                    themeBtn.classList.remove('active');
                } else if (storedTheme === theme || this.activeTheme === theme) {
                    themeBtn.classList.add('active');
                }
            }
        },
        setTheme(theme) {

            const storedTheme = localStorage.getItem('theme') || 'light';
            const newtheme = theme || 'light';

            if (storedTheme != newtheme) {
                document.getElementById(storedTheme + "-theme-btn").classList.remove('active');
            }

            this.applyTheme(theme);

            if (storedTheme === newtheme) {
                document.getElementById(theme + "-theme-btn").classList.add('active');
            }

        },
    },
};
</script>
