<script setup lang="ts">
import AppHead from "@/Components/AppHead.vue";
import Navbar from "@/Components/LayoutParts/Navbar.vue";
import Footer from "@/Components/LayoutParts/Footer.vue";
import { computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import { route } from 'momentum-trail';
import Button from '@/Components/ui/button/Button.vue'
import { cn } from '@/lib/utils'
import LandingItem from '@/Components/LandingItem.vue'
import { ScrollArea, ScrollBar } from '@/Components/ui/scroll-area'
import { Separator } from '@/Components/ui/separator'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/Components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar'

const site = computed<any>(() => usePage<any>().props.site);

defineProps({
    LandingItems: { type: Object },
    LandingPosts: { type: Object },
});

const Welcome = [
    {
        en: {
            message: `Welcome to ${usePage<any>().props.site.name}!`,
            desc: `${usePage<any>().props.site.name
                } is a collaborative 3D sandbox community. Work together to build amazing things and have fun along the way!`,
        },
        es: {
            message: `Bienvenido a ${usePage<any>().props.site.name}!`,
            desc: `${usePage<any>().props.site.name
                } es una comunidad colaborativa de sandbox 3D. ¡Trabajad juntos para construir cosas increíbles y divertíos en el camino!`,
        },
        ru: {
            message: `Добро пожаловать в ${usePage<any>().props.site.name}!`,
            desc: `${usePage<any>().props.site.name
                }— это совместное сообщество 3D-песочниц. Работайте вместе, чтобы создавать удивительные вещи, и получайте от этого удовольствие!`,
        },
        ja: {
            message: `${usePage<any>().props.site.name}へようこそ！`,
            desc: `${usePage<any>().props.site.name
                } は、協力的な 3D サンドボックス コミュニティです。協力して素晴らしいものを作り、その過程を楽しみましょう!`,
        },
    },
];
const lang = computed<any>(() => usePage<any>().props.locale);

    function onImgErrorSmall(id) {
    let source = document.getElementById(id) as HTMLImageElement;
    source.src = "/assets/img/dummy-error.png";
    source.onerror = null;

    return true;
}
</script>
<style scoped src="@/Pages/landing.css"></style>
<template>
    <AppHead pageTitle="Welcome"
        description="Join in on the action today. Buy &amp; sell items, participate in spaces, make friends, and more."
        :url="route(`Welcome`)" />
    <Navbar :landing="true">
        <div class="bg-blue-400 relative">
            <section :class="cn('border-grid border-b', $attrs.class ?? '')">
                <div class="container flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12">
                    <h1 :class="cn(
                        'text-3xl text-white font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]',
                        $attrs.class ?? '',
                    )" v-for="messages in Welcome">
                        {{ messages[lang].message }}
                    </h1>
                    <p :class="cn('max-w-2xl text-white font-semibold text-lg font-light', $attrs.class ?? '')"
                        v-for="desc in Welcome">
                        {{ desc[lang].desc }}
                    </p>

                    <section :class="cn(
                        'flex w-full items-center justify-start gap-2 pt-2',
                        $attrs.class ?? '',
                    )">
                        <Button as-child size="sm">
                            <Link :href="route('auth.register.page')">
                            <i class="mr-1 fa-duotone fa-person-to-portal show-for-medium"></i>
                            Get Started
                            </Link>
                        </Button>
                        <Button as-child size="sm" class="text-white" variant="ghost">
                            <Link :href="route('auth.login.page')">
                            <i class="mr-1 fa-duotone fa-door-open show-for-medium"></i>
                            Login
                            </Link>
                        </Button>

                    </section>
                </div>
            </section>

        </div>
        <nav v-if="usePage<any>().props.site_config.announcement" class="alert alert-danger alert-landing">
            <div class="py-1 text-center fw-semibold">
                <div class="gap-2 text-center align-middle flex-container align-center">
                    <div>
                        {{ usePage<any>().props.site_config.announcement_message }}
                    </div>
                </div>
            </div>
        </nav>
        <main class="container container-landing">
            <div class="justify-center grid-x grid-margin-x align-center grid-padding-y">
                <div v-if="LandingItems?.['data'] || LandingItems?.['data'].length < 5">
                    <div class="mt-6 space-y-1">
                        <h2 class="text-2xl font-semibold tracking-tight">
                            Customize your Character
                        </h2>
                        <p class="text-sm text-muted-foreground">
                            Pick and choose from a collection of items
                            created by the community to create you own
                            unique character with. </p>
                    </div>
                    <Separator class="my-4" />
                    <div class="relative">
                        <ScrollArea>
                            <div class="flex space-x-4 pb-4">
                                <LandingItem v-for="item in LandingItems?.['data']" :key="item.id" :item="item"
                                    class="w-[150px]" aspect-ratio="square" :width="150" :height="150" />
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </div>
                <div>
                    <div class="mt-6 space-y-1 text-right">
                        <h2 class="text-2xl font-semibold tracking-tight">
                            Socialize With Others
                        </h2>
                        <p class="text-sm text-muted-foreground">
                            Head over to Discussion to socialize with all
                            kinds of users on
                            {{ site.name }}, from the funny to the
                            professional, and find new friends! </p>
                    </div>
                    <Separator class="my-4" />
                    <div dir="rtl" class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card dir="ltr" v-for=" post in LandingPosts?.['data']">
                            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle class="text-sm font-medium">
                                    Posted by:
                                    <Link :href="route(`user.profile`, { username: post.creator.username })"
                                        class="text-blue-400 hover:text-blue-500">{{ post.creator.username }}</Link>
                                </CardTitle>
                                <Avatar class="h-4 w-4 text-muted-foreground">
                                    <AvatarImage :src="post.creator.thumbnail" alt="Image" />
                                    <AvatarFallback>
                                        <AvatarImage src="/assets/img/dummy_headshot.png" alt="Image" />
                                    </AvatarFallback>
                                </Avatar>
                            </CardHeader>
                            <Link :href="route(`forum.post`, { id: post.id, slug: post.slug })">
                            <CardContent>

                                <div class="text-2xl font-bold">
                                    {{ post.title }}
                                </div>
                                <p v-html="post.body" />
                            </CardContent>
                            </Link>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </Navbar>
</template>
