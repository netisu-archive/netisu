<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import { route } from "momentum-trail"

import { usePage } from '@inertiajs/vue3';

interface BanObject {
    type: string;
    note: string;
    cleared: boolean;
    DateHum: string;
    exactTime: string;
}

defineProps<{
    ban: BanObject;
}>();
</script>

<template>
    <Navbar>
        <Sidebar>
            <div class="u6xfc ogv1x">
                <div class="te269 bbztw pfmvb">
                    <div class="te269">
                        <div class="o204m" style="line-height: 16px">
                            <div class="kqzo1 umlu3">
                                <div class="o204m">{{ ban.type }}</div>
                            </div>
                            <div class="n91zp iniww umlu3 te269">
                                We noticed some activity on your account that are violate the Terms of Service.
                                To keep using {{ usePage<any>().props.site.name }}, make sure you're following the
                                    community guidelines.
                                    Treat others with respect, avoid sharing inappropriate content, and play fair.
                                    A quick refresh on the <a class="link text-primary">rules</a> can help you stay in
                                    the game!
                                    <div class="xm14j ap8ea kqzo1 bbztw pfmvb ytqs2 luhjr">
                                        {{ ban.note }}
                                    </div>
                            </div>
                            <div class="k6fif"></div>
                            <div class="qeh80 te269 wruu4 wxza1 szahi umlu3">
                                You can reinstate your account on {{ ban.DateHum }} at {{ ban.exactTime }}.
                            </div>
                            <div class="h9vgk lrcyb hg4an mkoq3">
                                <Link :href="route('auth.logout')" method="post" class="h9vgk of1zd fcg2y nhaz9 ctx1u"
                                    as="pw3az">
                                <i class="erxpu fa-right-from-bracket"></i>&nbsp;Logout
                                </Link>
                                <button v-if="ban.cleared" class="of1zd nhaz9 ey2tb">
                                    Reinstate your account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    </Navbar>
    <Footer />
</template>
