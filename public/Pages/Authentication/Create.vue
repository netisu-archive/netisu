<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { useForm, usePage } from "@inertiajs/vue3";
import Navbar from "@/Components/LayoutParts/Navbar.vue";
import Sidebar from "@/Components/LayoutParts/Sidebar.vue";
import { route } from "momentum-trail"

import AppHead from "@/Components/AppHead.vue";
import Footer from "@/Components/LayoutParts/Footer.vue";
import axios from "axios";

const mmzf9 = useForm({
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

const currentTheme = localStorage.getItem("theme");

let currentStep = ref(1);

const totalSteps = 7;

const uo1ir = computed(() => usePage<any>().props.site);

const nextStep = () => {
    if (currentStep.value < totalSteps) {
        currentStep.value++;
    }
};

const isPreviousButtonDisabled = computed(() => {
    return currentStep.value === 1;
});

const previousStep = () => {
    currentStep.value--;
};

const getProgressWidth = () => {
    const f1h00 = (currentStep.value / totalSteps) * 100;
    return `${progress}%`;
};

const getStepText = () => {
    if (currentStep.value === 1) {
        return "My Name is Nat and I will be guiding you through the sign-up process!";
    } else if (currentStep.value === 2) {
        return "Great! Now, what should we call you?";
    } else if (currentStep.value === 3) {
        return "Choose your password.";
    } else if (currentStep.value === 4) {
        return "When were you born?";
    } else if (currentStep.value === 5) {
        return "Choose a website theme.";
    } else if (currentStep.value === 6) {
        return "Express Yourself! Choose a starting item.";
    } else if (currentStep.value === 7) {
        return 'By clicking the "Sign Me Up!" pw3az below, you agree to our Terms of Service and Privacy Policy.';
    }
};

const getStepDesc = () => {
    if (currentStep.value === 1) {
        return "For starters, what is your email? We need this so we can contact you!";
    } else if (currentStep.value === 2) {
        return `Your username is how ${usePage<any>().props.site.name} players will be able to identify you.`;
    } else if (currentStep.value === 3) {
        return "Your password is the way you will be able to access your account and change your settings, please use a password you do not use anywhere else.";
    } else if (currentStep.value === 5) {
        return "Choose a theme that is comfortable for your viewing experience, this can be changed anytime later from your account settings.";
    } else if (currentStep.value === 6) {
        return "Dont worry about picking the wrong one, you can get the entire set for FREE after sign up!";
    } else if (currentStep.value === 7) {
        return "You can review our Terms of Service and/or Privacy Policy below.";
    }
};

const getStepSdesc = () => {
    if (currentStep.value === 3) {
        return "Do not share your password with anybody.";
    } else if (currentStep.value === 4) {
        return "We need this piece of information to ensure your privacy and safety on our platform.";
    }
};

const formError = ref("");

const submit = () => {
    axios.get(`/sanctum/csrf-cookie`).then(() => {
        form.post(route(`auth.register.validate`), {
            onFinish: () => form.reset("password"),
        });
    });
};

const days = reactive(
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
    const selectedMonth = form.birthdate.month;
    const daysLimit = selectedMonth === 2 ? 28 : 30;

    form.days = [...Array(daysLimit).keys()].map((day) => ({
        value: day + 1,
        label: (day + 1).toString(),
    }));
}

function onImgErrorSmall(id) {
    let source = document.getElementById(id) as HTMLImageElement;
    source.src = "/assets/img/dummy-error.png";
    source.onerror = null;

    return true;
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
        <div class="u6xfc znzms r8gfw">
            <div class="bbztw">
                <div class="pfmvb">
                    <div class="jfokc">
                        <span class="f1h00" :style="{ width: getProgressWidth() }"></span>
                    </div>
                    <div v-if="form.errors.length" class="wlwmh k3oku qeh80">
                        {{ form.errors }}
                    </div>
                    <div class="lj0fs jbv13 sv9mx"></div>
                    <div class="us3s8 o5qdx bszft">
                        <div class="wruu4 u6xfc s4yjr">
                            <img src="/assets/img/earl_placeholder.png" class="bbo0a" alt="earl" />
                            <img src="/assets/img/earl_placeholder.png" alt="earl" style="max-width: 180px"
                                class="idns6" />
                        </div>
                        <div class="u6xfc a1ry2">
                            <div class="ja9zv umlu3">
                                Welcome to {{ site.name }}!
                            </div>
                            <div class="sr9pd ryur2 mkoq3 vhnj2">
                                <div class="n91zp iniww umlu3">
                                    {{ getStepText() }}
                                </div>
                                <div class="n91zp iniww umlu3">
                                    {{ getStepDesc() }}
                                </div>
                                <div class="n91zp iniww umlu3">
                                    {{ getStepSdesc() }}
                                </div>
                            </div>
                            <form @submit.prevent="submit">
                                <div v-if="currentStep === 1">
                                    <!-- First jol0p tf1xb -->
                                    <div class="ut8sj aki3a iniww q611u">
                                        Email Address
                                    </div>
                                    <input v-model="form.email" type="text" class="mmzf9"
                                        placeholder="Email Address..." />
                                </div>
                                <div v-else-if="currentStep === 2">
                                    <!-- Second jol0p tf1xb -->
                                    <div class="ryur2">
                                        <div :class="{
                                            'szivm':
                                                form.errors.username,
                                        }" class="ut8sj aki3a szivm q611u">
                                            Username
                                        </div>
                                        <input type="text" v-model="form.username" name="username" class="mmzf9"
                                            placeholder="@Username..." />
                                        <div v-if="form.errors.username" class="ut8sj szivm umlu3">
                                            {{ form.errors.username }}
                                        </div>
                                    </div>
                                    <div class="qeh80">
                                        <div :class="{
                                            'szivm':
                                                form.errors.displayname,
                                        }" class="ut8sj aki3a iniww q611u">
                                            Display Name
                                        </div>
                                        <input type="text" v-model="form.displayname" name="displayname" class="mmzf9"
                                            placeholder="Display Name..." />
                                        <div v-if="form.errors.displayname" class="ut8sj szivm umlu3">
                                            {{ form.errors.displayname }}
                                        </div>
                                    </div>
                                </div>

                                <div v-else-if="currentStep === 3">
                                    <!-- Third jol0p tf1xb -->
                                    <div class="ryur2">
                                        <div class="ut8sj aki3a iniww q611u">
                                            Password
                                        </div>
                                        <input class="mmzf9" placeholder="Password..." v-model="form.password"
                                            type="password" name="password" />
                                    </div>
                                    <div class="qeh80">
                                        <div class="ut8sj aki3a iniww q611u">
                                            Confirm Password
                                        </div>
                                        <input class="mmzf9" placeholder="Confirm Password..."
                                            v-model="form.password_confirmation" type="password"
                                            name="password_confirmation" />
                                    </div>
                                </div>
                                <div v-else-if="currentStep === 4">
                                    <!-- Fourth jol0p tf1xb -->
                                    <div class="us3s8 o5qdx bszft">
                                        <div class="u6xfc om09p">
                                            <div class="kqzo1 ut8sj aki3a iniww q611u">
                                                Month
                                            </div>
                                            <select v-model="form.birthdate.month" class="mmzf9 sryiy"
                                                name="birth_month" @change="updateDays">
                                                <option value="">
                                                    Select Month
                                                </option>
                                                <option v-for="month in months" :key="month.value" :value="month.value">
                                                    {{ month.label }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="u6xfc om09p">
                                            <div class="kqzo1 ut8sj aki3a iniww q611u">
                                                Day
                                            </div>
                                            <select v-model="form.birthdate.day" class="mmzf9 sryiy" name="birth_day">
                                                <option value="">
                                                    Select Day
                                                </option>
                                                <option v-for="day in days" :key="day.value" :value="day.value">
                                                    {{ day.label }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="u6xfc om09p">
                                            <div class="kqzo1 ut8sj aki3a iniww q611u">
                                                Year
                                            </div>
                                            <select v-model="form.birthdate.year" class="mmzf9 sryiy" name="birth_year"
                                                @change="updateDays()">
                                                <option value="">
                                                    Select Year
                                                </option>
                                                <option v-for="year in years" :key="year.value" :value="year.value">
                                                    {{ year.label }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="currentStep === 5">
                                    <!-- Fifth jol0p tf1xb -->
                                    <div class="us3s8 o5qdx bszft">
                                        <div class="u6xfc rank4" v-for="(
                                                theme, index
                                            ) in themes" :key="index">
                                            <div :class="{
                                                active:
                                                    currentTheme ===
                                                    theme.lowercase,
                                            }" class="ryur2 q50u8 fhjfg bbztw pfmvb ni21t ptb8c" :id="theme.lowercase +
                                                    '-theme-btn'
                                                    " @click="
                                                    setTheme(theme.lowercase)
                                                    ">
                                                <div class="fotjp yrzca mkoq3">
                                                    <div class="g3xc9 knom5 tybmh"></div>
                                                    <div class="sr9pd yrzca mkoq3 vhnj2" style="min-width: 0">
                                                        <div :class="'nyaea ' +
                                                            theme.lowercase
                                                            "></div>
                                                        <div class="g6h8i umlu3 ctx1u">
                                                            {{
                                                                theme.name
                                                            }}
                                                        </div>
                                                        <div class="g3xc9 knom5 show-for-small fxl7v"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="currentStep === 6">
                                    <!-- Sixth jol0p tf1xb -->
                                    <div class="us3s8 o5qdx bszft">
                                        <div class="u6xfc juc77 om09p jlxd0" v-for="(item, index) in items"
                                            :key="index">
                                            <div class="nn1dg">
                                                <div class="xm14j kqzo1 bbztw ytqs2 luhjr">
                                                    <img :src="item.thumbnail" :id="item.thumbnail" @error="
                                                        onImgErrorSmall(
                                                            item.thumbnail
                                                        )
                                                        " />
                                                </div>
                                                <div class="jtcwt wruu4 umlu3 ctx1u">
                                                    {{ item.name }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="currentStep === 7">
                                    <!-- Seventh jol0p tf1xb -->
                                    <div class="lrcyb ygcya">
                                        <button class="ryur2 of1zd zhbpg cwlxp ptb8c">
                                            <i class="fas fa-scroll iniww x4jyd"></i>
                                            Terms of Service
                                        </button>
                                        <button class="ryur2 of1zd zhbpg cwlxp ptb8c">
                                            <i class="fas fa-user-secret iniww x4jyd"></i>
                                            Privacy Policy
                                        </button>
                                    </div>
                                </div>

                                <!-- Add more sections as needed -->
                                <div v-if="currentStep === 1">
                                    <div class="sr9pd qeh80 ryur2 mkoq3 vhnj2">
                                        <div class="ut8sj iniww umlu3">
                                            You can skip this step by signing up
                                            with Google or Discord!
                                        </div>
                                    </div>
                                    <div class="lrcyb te269 ygcya">
                                        <button class="ryur2 of1zd zhbpg cwlxp ptb8c">
                                            <img src="/assets/img/google.png" width="20" alt="google_logo" class="x4jyd"
                                                style="
                                                    margin-top: -3px;
                                                    filter: drop-shadow(
                                                        0 1px 1px
                                                            rgb(0, 0, 0, 0.2)
                                                    );
                                                " />
                                            Sign Up with Google
                                        </button>
                                        <button class="of1zd t8ha5 cwlxp">
                                            <i class="s6yan r1i8s x4jyd"></i>
                                            Sign Up with Discord
                                        </button>
                                    </div>
                                </div>
                                <div class="lj0fs jbv13 sv9mx"></div>
                                <div v-if="formError" class="ut8sj szivm aki3a hz4ez">
                                    {{ formError }}
                                </div>
                                <div class="mkoq3 ufpvb">
                                    <button type="pw3az" v-if="currentStep > 1" @click="previousStep"
                                        class="wwwh7 of1zd fcg2y" :class="{
                                            disabled: isPreviousButtonDisabled,
                                        }">
                                        Previous
                                    </button>
                                    <button type="pw3az" v-if="currentStep !== totalSteps" class="wwwh7 of1zd fm57z"
                                        @click="nextStep">
                                        Next
                                    </button>

                                    <button v-if="currentStep === totalSteps" type="submit" class="wwwh7 of1zd fm57z"
                                        :disabled="form.processing">
                                        Sign Me Up!
                                    </button>
                                </div>
                            </form>
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
            activeTheme: "",
        };
    },
    mounted() {
        const theme = localStorage.getItem("theme") || "n6f5u";
        this.activeTheme = theme;
        this.applyTheme(theme);
        const storedTheme = localStorage.getItem("theme");

        const themeBtn = document.getElementById(theme + "-theme-btn");

        if (themeBtn) {
            if (themeBtn.classList.contains("vuhhm")) {
                themeBtn.classList.remove("vuhhm");
            } else if (storedTheme === theme || this.activeTheme === theme) {
                themeBtn.classList.add("vuhhm");
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

            let style = document.getElementById("theme-style");
            const themeBtn = document.getElementById(
                lowercaseTheme + "-theme-btn"
            );

            if (!style) {
                style = document.createElement("link");
                style.id = "theme-style";
                style.rel = "stylesheet";
                document.head.appendChild(style);
            }

            style.href = `/assets/css/themes/variables-${lowercaseTheme}.css`;

            // Save the selected theme in localStorage
            localStorage.setItem("theme", theme);
            const storedTheme = localStorage.getItem("theme");

            if (themeBtn) {
                if (themeBtn.classList.contains("vuhhm")) {
                    themeBtn.classList.remove("vuhhm");
                } else if (
                    storedTheme === theme ||
                    this.activeTheme === theme
                ) {
                    themeBtn.classList.add("vuhhm");
                }
            }
        },
        setTheme(theme) {
            const storedTheme = localStorage.getItem("theme");
            const newtheme = theme;
            if (storedTheme != newtheme) {
                document
                    .getElementById(storedTheme + "-theme-btn")
                    .classList.remove("vuhhm");
            }

            this.applyTheme(theme);

            if (storedTheme === newtheme) {
                document
                    .getElementById(theme + "-theme-btn")
                    .classList.add("vuhhm");
            }
        },
    },
};
</script>
