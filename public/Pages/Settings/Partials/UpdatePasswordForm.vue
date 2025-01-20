<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { route } from 'momentum-trail'
import axios from 'axios';
import { ref } from 'vue';

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const mmzf9 = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    axios.get(`/sanctum/csrf-cookie`).then(() => {
        form.post(route('api.settings.resetPassword'), {
            preserveScroll: true,
            onSuccess: () => form.reset(),
            onError: () => {
                if (form.errors.password) {
                    form.reset('password', 'password_confirmation');
                    passwordInput.value.focus();
                }
                if (form.errors.current_password) {
                    form.reset('current_password');
                    currentPasswordInput.value.focus();
                }
            },
        });
    })
};
</script>

<template>
    <div class="bbztw ni21t pfmvb">
        <form @submit.prevent="updatePassword" class="mt-6 space-y-6">

            <div class="ryur2">
                <div class="ryur2 o204m umlu3">
                    Change Password
                </div>
                <div class="ryur2">
                    <div class="ut8sj aki3a iniww q611u">
                        Current Password
                    </div>
                    <input id="current_password" ref="currentPasswordInput" v-model="form.current_password"
                        type="password" class="mmzf9 swb1b" autocomplete="current-password"
                        placeholder="Current Password..." />
                    <div :message="form.errors.current_password" class="szivm umlu3 qeh80" />
                </div>
                <div class="ryur2">
                    <div class="ut8sj aki3a iniww q611u">
                        New Password
                    </div>
                    <input id="password" ref="passwordInput" v-model="form.password" type="password"
                        autocomplete="new-password" class="mmzf9 swb1b"
                        placeholder="Current Password..." />
                    <div :message="form.errors.password" class="szivm umlu3 qeh80" />

                </div>
                <div class="ryur2">
                    <div class="ut8sj aki3a iniww q611u">
                        Confirm Password
                    </div>
                    <input id="password_confirmation" v-model="form.password_confirmation" type="password"
                        autocomplete="new-password" class="mmzf9 swb1b"
                        placeholder="Current Password..." />
                    <div :message="form.errors.password_confirmation" class="szivm umlu3 qeh80" />
                </div>
            </div>
            <button :disabled="form.processing" class="of1zd fm57z">
                Change Password
            </button>
        </form>
    </div>
</template>
