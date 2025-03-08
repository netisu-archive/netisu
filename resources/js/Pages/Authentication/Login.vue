<script setup lang="ts">
import Navbar from "@/Components/LayoutParts/Navbar.vue";
import { useForm, usePage } from "@inertiajs/vue3";
import { route } from "momentum-trail"

import AppHead from "@/Components/AppHead.vue";
import Sidebar from "@/Components/LayoutParts/Sidebar.vue";
import axios from "axios";
import Footer from "@/Components/LayoutParts/Footer.vue";
import { Button } from '@/Components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/Components/ui/card'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'

const form = useForm({
  username: "",
  password: "",
  remember: false,
});

const submit = () => {
  axios.get(`/sanctum/csrf-cookie`).then(() => {
    form.post(route(`auth.login.validate`), {
        onFinish: () => { form.reset("password") },
    });
  });
};
</script>
<template>
    <AppHead pageTitle="Login" :description="'Login to ' + usePage<any>().props.site.name + ''"
        :url="route('auth.login.page')" />
    <Navbar />
    <Sidebar>
        <Card class="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle class="text-2xl">
                    Login
                </CardTitle>
                <CardDescription>
                    Welcome back {{ form.username }}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form @submit.prevent="submit">

                    <div class="grid gap-4">
                        <div class="grid gap-2">
                            <Label :class="{ 'text-red-500': form.errors.username }" for="username">Username</Label>
                            <Input id="username" v-model="form.username"
                                :class="{ 'border border-red-500': form.errors.username }" type="text"
                                placeholder="m@example.com" required />
                            <div v-if="form.errors.username" class="text-xs text-red-500 fw-semibold">
                                {{ form.errors.username }}
                            </div>
                        </div>
                        <div class="grid gap-2">
                            <div class="flex items-center">
                                <Label :class="{ 'text-red-500': form.errors.password }"
                                    for="password">Password</Label>
                                <Link :href="route('auth.forgot.page')"
                                    class="ml-auto inline-block text-sm hover:text-blue-500" :class="{ 'hover:text-red-500': form.errors.password }">
                                Forgot your password?
                                </Link>
                            </div>
                            <Input :class="{ 'border border-red-500': form.errors.password }" id="password"
                                type="password" v-model="form.password" required />
                            <div v-if="form.errors.password" class="text-xs text-red-500 fw-semibold">
                                {{ form.errors.password }}
                            </div>
                        </div>
                        <Button type="submit" :disabled="form.processing" class="w-full">
                            <i v-if="form.processing" class="fad fa-spinner fa-spin" />
                            Login
                        </Button>
                        <Button variant="outline" class="w-full">
                            <i class="fab fa-google" />

                            Login with Google
                        </Button>
                    </div>
                    <div class="mt-4 text-center text-sm">
                        Don't have an account?
                        <Link :href="route('auth.register.page')" class="hover:text-blue-500">
                        Sign up
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    </Sidebar>
    <Footer />
</template>
