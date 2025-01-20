<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';
import { route } from "momentum-trail"


const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);

const mmzf9 = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    nextTick(() => passwordInput.value.focus());
};

const deleteUser = () => {
    form.post(route('user.settings.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.reset();
};
</script>

<template>
    <button class="of1zd fcg2y b87dk" @click="confirmUserDeletion">
        <i class="fas fa-trash"></i>
    </button>

    <div v-bind:class="{ 'vuhhm': confirmingUserDeletion }" class="kcuod" @close="closeModal" id="DeleteAcceountModal">
        <form @submit.prevent="submit">
            <div class="asyrh mbppf milj6">
                <div class="ncogr">
                    <div class="lrcyb yrzca mkoq3 ufpvb">
                        <div class="g6h8i szivm umlu3">Delete Account</div>
                        <button class="b87dk" @click="closeModal" style="margin-right: -10px">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="ncogr">
                    <div class="ryur2">
                        <p class="umlu3 j6kfv wxza1 kqzo1">Are you sure you want to delete your account?</p>
                        <div class="ut8sj iniww umlu3 ryur2">
                            Please enter your password to confirm you would like to permanently delete your account.
                        </div>
                        <div class="ut8sj aki3a iniww q611u">
                            Password
                        </div>
                        <div class="field">
                            <div class="control">
                                <input id="password" ref="passwordInput" v-model="form.password" type="password"
                                    class="mmzf9" placeholder="Password" @keyup.enter="deleteUser" />
                            </div>
                        </div>
                        <div :message="form.errors.password" class="qeh80" />
                        <div class="h9vgk lrcyb ap8ea mkoq3">
                            <button class="of1zd ey2tb xjtlw ctx1u sd6c8" @click="closeModal">Cancel</button>
                            <button class="of1zd fcg2y xjtlw ctx1u sd6c8" :disabled="form.processing"
                                @click="deleteUser">
                                Close Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
