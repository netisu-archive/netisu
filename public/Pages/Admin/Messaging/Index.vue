<script setup lang="ts">
import { route } from "momentum-trail"

import Navbar from "@/Components/LayoutParts/Admin/AdminNavbar.vue";
import AppHead from "@/Components/AppHead.vue";
</script>

<template>
    <AppHead pageTitle="Admin Dashboard" description="Login to Vestora." :url="route('admin.page')" />
    <Navbar>
        <div style="background-color: #1b1b1b;">
            <div class="pha9h has-text-white" style="background-color: #1b1b1b;">
                Admin Chat
            </div>
        </div>
        <br />


        <!-- Main Content columns: One for chat window another for profile -->
        <div class="columns">
            <div class="bbztw column is-12">
                <div class="bbztw">
                    <div class="card-header">
                        <p class="card-header-title">
                        <div class="tag is-medium is-info">Aeo</div>&nbsp; * 2m
                        </p>
                    </div>
                    <div class="card-content">
                        <div class="tf1xb">updates soon</div>
                    </div>
                </div>


                <div class="flex-item-2">
                    <form>
                        <div class="field has-addons">
                            <div class="control">
                                <input class="wqylv" type="text" placeholder="Type your message...">
                            </div>
                            <div class="control">
                                <button type="submit" class="pw3az">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Navbar>
</template>
