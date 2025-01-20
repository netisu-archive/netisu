<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import { Head, Link } from '@inertiajs/vue3';
import { route, current } from "momentum-trail";

</script>

<template>
<Navbar>
    <div class="pf7ue ">
            <div class="justify-center rqitf row hhise uwgpx h1wjn scatball-card">
                <div class="col-md-8 h1wjn text-center-sm">
                    <h1 class="tmi92">The place to create.</h1>
                    <p class="dmr2j">{{ $page.props.site.name }} is an uymm7 3D gaming platform where users can enable their creativity. Customize your character, create your own clothing, participate in a virtual economy, create groups, chat with others, and much more.</p>
                </div>
            </div>
            <div class="justify-center w6hql sn9ep b6wth hhise uwgpx h1wjn xc7na">
                <div class="col-md-8 h1wjn text-center-sm">
                    <h1>With over: 100+ users</h1>
                    <p class="fs-2">And over 150 items,</p>

                </div>
            </div>

            <div class="justify-center w6hql sn9ep rqitf hhise uwgpx h1wjn ace51">
                <div class="col-md-8 h1wjn text-center-sm">
                    <h3>What are you wating for?</h3>
                    <p>Register to {{ $page.props.site.name }} below.</p>
                    <div class="buttons">
                        <a :href="route('auth.register.page')" class="gww1z eaxdi"><i class="mr-1 fas fa-user-plus"></i> Create Account</a>
                        <a :href="route('auth.login.page')" class="gww1z v7z47"><i class="mr-1 fas fa-key"></i> Existing User</a>
                    </div>
                </div>
            </div>
        </div>
</Navbar>
</template>
