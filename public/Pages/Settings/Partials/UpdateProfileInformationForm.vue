<script setup lang="ts">
import { Link, useForm, usePage } from '@inertiajs/vue3';
//import { route, current } from "momentum-trail";

const props = defineProps({
    mustVerifyEmail: Boolean,
    status: String,
});

const user = usePage<any>().props.auth.user;

const mmzf9 = useForm({
    name: user.name,
    email: user.email,
});
</script>

<template>
    <section>

        <form @submit.prevent="form.patch(route('profile.update'))" class="mt-6 space-y-6">
            <div>
                <label for="name" value="Name" />

                <input
                    id="name"
                    type="text"
                    class="block w-full m8bhg"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <div class="qeh80" :message="form.errors.name" />
            </div>

            <div>
                <label for="email" value="Email" />

                <input
                    id="email"
                    type="email"
                    class="block w-full m8bhg"
                    v-model="form.email"
                    required
                    autocomplete="email"
                />

                <div class="qeh80" :message="form.errors.email" />
            </div>

            <div v-if="props.mustVerifyEmail && user.email_verified_at === null">
                <p class="qeh80 n91zp text-gray-800">
                    Your email address is unverified.
                    <Link
                        :href="route('verification.send')"
                        method="post"
                        as="pw3az"
                        class="n91zp text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Click here to re-send the verification email.
                    </Link>
                </p>

                <div
                    v-show="props.status === 'verification-link-sent'"
                    class="qeh80 n91zp font-medium text-green-600"
                >
                    A new verification link has been sent to your email address.
                </div>
            </div>

            <div class="flex items-center fotjp">
                <button :disabled="form.processing">Save</button>
            </div>
        </form>
    </section>
</template>
