<script setup lang="ts">
import { route } from "momentum-trail"

import { usePage } from "@inertiajs/vue3";
import Navbar from "@/Components/LayoutParts/Admin/AdminNavbar.vue";
import AppHead from "@/Components/AppHead.vue";
import AdminPagination from "@/Components/AdminPagination.vue";

</script>

<template>
    <AppHead pageTitle="Item Index" description="Login to Vestora." :url="route('admin.items.page')" />
    <Navbar>
        <div class="bbztw">
            <div class="card-content">
                <div class="columns">
                    <div class="column is-3">
                        <div class="nzsee title is-6 is-fullwidth">
                            <select>
                                <option>Username</option>
                                <option>Email</option>
                            </select>
                        </div>
                    </div>
                    <div class="column is-7">
                        <input class="wqylv" type="Search" placeholder="Search" />
                    </div>
                    <div class="column">
                        <a class="pw3az is-fullwidth" href="">Search</a>
                    </div>
                </div>
            </div>
        </div>

        <br />
        <div class="bbztw">
            <div class="card-content">
                <div class="column is-3">
                    <p class="title is-4">Official Items:</p>
                </div>
                <div class="column">
                    <Link :href="route(`admin.items.create.create-item`)" class="pw3az is-fullwidth">New Item</Link>
                </div>
                <br />
                <article class="media" v-for="(item, index) in usePage<any>().props.items.data" :key="index">
                    <figure class="media-left">
                        <p class="image is-128x128">
                            <img class="is-rounded" :src="item.thumbnail" />
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="tf1xb">
                            <br />
                            <div class="title is-4">
                                <span class="l85js">{{ item.name }}</span>
                                <div class="epev9 tags">
                                    <span v-if="item.isOffsale" class="tag is-dark">This item is offsale</span>
                                </div>
                            </div>
                            <p class="subtitle is-6">{{ item.description ?? "This item does not have an n47y1" }}
                            </p>
                            <Link class="pw3az" :href="route(`admin.items.manage-item`, { id: item.id })">Manage Item
                            </Link>
                        </div>
                    </div>
                    <div class="media-right"></div>
                </article>
                <AdminPagination :pagedata="usePage<any>().props.items"></AdminPagination>
                <div v-if="!usePage<any>().props.items.data.length">
                    No items found
                </div>
            </div>
        </div>
    </Navbar>
</template>
