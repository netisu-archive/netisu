<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { useForm, usePage } from "@inertiajs/vue3";
import Navbar from "@/Components/LayoutParts/Navbar.vue";
import Sidebar from "@/Components/LayoutParts/Sidebar.vue";
import { route } from "momentum-trail"

import AppHead from "@/Components/AppHead.vue";
import Footer from "@/Components/LayoutParts/Footer.vue";
import axios from "axios";
import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select'

const form = useForm({
    username: "",
    displayname: "",
    birthdate: reactive({
        month: "",
        day: "",
        year: "",
    }),
    starter_item: "",
    email: "",
    password: "",
    password_confirmation: "",
});

defineProps<{
    themes?: Object;
    items?: Object;
    errors?: Object;
}>();



let currentStep = ref(1);
const totalSteps = 5;


const nextStep = () => {
    if (currentStep.value < totalSteps) {
        currentStep.value++;
    }
};

const previousStep = () => {
    currentStep.value--;
};

const getStepText = () => {
    if (currentStep.value === 1) {
        return `My Name is ${usePage<any>().props.tester.username} and I will be guiding you through the sign-up process!`;
    } else if (currentStep.value === 2) {
        return "Great! Now, what should we call you?";
    } else if (currentStep.value === 3) {
        return "Choose your password.";
    } else if (currentStep.value === 4) {
        return "When were you born?";
    } else if (currentStep.value === 5) {
        return 'By clicking continue, you agree to our, Terms of Service and Privacy Policy.';
    }
};

const submit = () => {
    axios.get(`/sanctum/csrf-cookie`).then(() => {
        form.post(route(`auth.register.validate`), {
            onFinish: () => form.reset("password"),
        });
    });
};

var days = reactive(
    [...Array(31).keys()].map((day) => ({
        value: day + 1,
        label: (day + 1).toString(),
    }))
);
const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
];
const currentYear = new Date().getFullYear();
const years = [...Array(currentYear - 1919 + 1).keys()]
    .map((year) => ({
        value: year + 1920,
        label: (year + 1920).toString(),
    }))
    .reverse();

function updateDays() {
    const selectedMonthNumber = Number(form.birthdate.month);
    const daysLimit = selectedMonthNumber === 2 ? 28 : 30;

    days = [...Array(daysLimit).keys()].map((day) => ({
        value: day + 1,
        label: (day + 1).toString(),
    }));
}

updateDays(); // Call the function initially to set the days based on the default month

// Watch for changes in the selected month
watch(() => form.birthdate.month, updateDays);
</script>

<template>
    <AppHead pageTitle="Register" :description="'Register to ' + usePage<any>().props.site.name + ''"
        :url="route('auth.register.page')" />
    <Navbar />
    <Sidebar>
        <div class="flex flex-col max-w-sm gap-6 mx-auto">
            <form @submit.prevent="submit">
                <div class="flex flex-col gap-6">
                <div class="flex flex-col items-center gap-2 text-center">
                  <h1 class="text-xl font-bold">
                    Welcome To {{ usePage<any>().props.site.name }}
                  </h1>
                  <h1 class="text-sm text-muted-foreground">
                    {{ getStepText() }}
                  </h1>
                </div>
                <div class="flex flex-col gap-6">
                    <div class="grid gap-2">

                    <div v-if="currentStep === 1">
                        <!-- First section content -->
                        <Label html-for="email" :class="{'text-red-500': form.errors.email}">Email</Label>
                        <Input
                          v-model="form.email"
                          id="email"
                          type="email"
                          :class="{' border border-red-500': form.errors.email}"
                          :placeholder="usePage<any>().props.tester.username + '@' + (usePage<any>().props.site.production.domains.main).replace(/(^\w+:|^)\/\//, '')"
                          required
                        />
                        <div v-if="form.errors.email" class="text-xs text-red-500">
                            {{ form.errors.email }}
                        </div>
                    </div>
                    <div v-else-if="currentStep === 2">
                        <!-- Second section content -->
                        <div class="mb-2">
                            <Label html-for="displayname" :class="{
                                'text-red-500':
                                    form.errors.displayname,
                            }">Display Name</Label>
                    <Input
                      id="displayname"
                      v-model="form.displayname"
                      type="text"
                      :class="{' border border-red-500': form.errors.displayname}"
                      :placeholder="usePage<any>().props.tester.displayname"
                      required
                    />
                    <div v-if="form.errors.displayname" class="text-xs text-red-500">
                        {{ form.errors.displayname }}
                    </div>
                        </div>
                        <div class="mb-2">
                            <Label html-for="email" :class="{
                                'text-red-500':
                                    form.errors.username,
                            }">Username</Label>
                    <Input
                      id="username"
                      v-model="form.username"
                      type="text"
                      :class="{' border border-red-500': form.errors.username}"
                      :placeholder="usePage<any>().props.tester.username"
                      required
                    />
                    <div v-if="form.errors.username" class="text-xs text-red-500">
                        {{ form.errors.username }}
                    </div>
                        </div>
                    </div>
                    <div v-else-if="currentStep === 3">
                        <!-- Third section content -->
                        <div class="mb-2">
                            <Label html-for="password" :class="{
                                'text-red-500':
                                    form.errors.password,
                            }">Password</Label>
                    <Input
                      id="password"
                      v-model="form.password"
                      type="password"
                      :class="{' border border-red-500': form.errors.password}"
                      placeholder="Password"
                      required
                    />
                    <div v-if="form.errors.password" class="text-xs text-red-500">
                        {{ form.errors.password }}
                    </div>
                        </div>
                        <div class="mb-2">
                            <Label html-for="password_confirmation" :class="{
                                'text-red-500':
                                    form.errors.password_confirmation,
                            }">Confirm Password</Label>
                    <Input
                      id="password_confirmation"
                      v-model="form.password_confirmation"
                      type="password"
                      :class="{' border border-red-500': form.errors.password_confirmation}"
                      placeholder="Confirm Password"
                      required
                    />
                    <div v-if="form.errors.password_confirmation" class="text-xs text-red-500">
                        {{ form.errors.password_confirmation }}
                    </div>
                        </div>
                    </div>
                    <div v-else-if="currentStep === 4">
                        <!-- Fourth section content -->
                        <div class="grid gap-8 sm:grid-cols-3">

                        <Select  v-model="form.birthdate.month">
                            <SelectTrigger class="w-[105px]">
                              <SelectValue v-model="form.birthdate.month" placeholder="Month" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                    <SelectItem  v-for="month in months" :key="month.value" :value="month.value">
                                        {{ month.label }}
                                    </SelectItem >
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <Select  v-model="form.birthdate.day">
                            <SelectTrigger class="w-[105px]">
                              <SelectValue placeholder="Day" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                    <SelectItem v-for="day in days" :key="day.value" :value="day.value">
                                        {{ day.label }}
                                    </SelectItem >
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <Select  v-model="form.birthdate.year">
                            <SelectTrigger class="w-[105px]">
                              <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                    <SelectItem  v-for="year in years" :key="year.value" :value="year.value">
                                        {{ year.label }}
                                    </SelectItem >
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        </div>
                        </div>
                        <div v-else-if="currentStep === 5">
                            <!-- Seventh section content -->
                            <div class="grid gap-4 sm:grid-cols-2">
                                <Button type="button" variant="outline" class="w-full">
                                    <i class="fas fa-scroll text-muted me-1"></i>
                                    Terms of Service
                                  </Button>
                                  <Button type="button" class="w-full">
                                    <i class="fad fa-user-secret text-muted me-1"></i>
                                    Privacy Policy
                                  </Button>
                            </div>
                        </div>
                    </div>
                  <div :class="{'grid gap-4 sm:grid-cols-2': currentStep != 1}">
                  <Button type="button" variant="outline" v-if="currentStep > 1" @click="previousStep" class="w-full">
                    Back
                  </Button>
                  <Button :type="currentStep < 5 ? 'button' : 'submit'" :disabled="form.processing" :class="{'w-full': currentStep === 1}" @click="nextStep" class="w-full">
                    Continue
                  </Button>
                  </div>
                </div>
                <div class="relative text-sm text-center after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span class="relative z-10 px-2 bg-background text-muted-foreground">
                    Or
                  </span>
                </div>
                <div class="grid gap-4 sm:grid-cols-2">
                  <Button type="button" variant="outline" class="w-full bg-indigo-500 hover:bg-indigo-600">
                    <i class="fab fa-discord"></i>
                  </Button>
                  <Button type="button" variant="outline" class="w-full bg-red-500 hover:bg-red-600">
                   <i class="fab fa-google"></i>
                  </Button>
                </div>
              </div>
            </form>
            <div class="text-sm text-center">
                Already have an account?
                <Link :href="route('auth.login.page')" class="hover:text-blue-500">
                  Login
                </Link>
              </div>
          </div>
    </Sidebar>
    <Footer />
</template>
