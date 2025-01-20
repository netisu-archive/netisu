<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import { route } from 'momentum-trail';

defineProps<{
    achievements: Array<any>,
}>();

</script>

<template>
<AppHead pageTitle="Acheivements" description="A List of all Achievements" :url="route('acheivements')" />
    <Navbar />
    <Sidebar>
        <div class="u6xfc a1ry2">
            <div class="o204m umlu3 kqzo1">Achievements</div>
            <div class="bbztw pfmvb te269">

                <div class="jol0p mkoq3 yrzca doh7b">
                    <img src="file:///home/chronos/u-b99c190e11ee42e371d918a0399d97cb71a388b8/MyFiles/eclipse-frontend/assets/img/achievement_dummy.png" width="100">
                    <div>
                        <div class="g6h8i umlu3">
                            Administrator<span class="ut8sj umlu3 iniww lj0fs">•</span><span class="ut8sj umlu3 iniww">
                                2 users have made this achievement.
                            </span>
                        </div>
                        <div class="iniww n91zp">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </div>
                    </div>
                </div>
                <div class="jol0p mkoq3 yrzca doh7b">
                    <img src="file:///home/chronos/u-b99c190e11ee42e371d918a0399d97cb71a388b8/MyFiles/eclipse-frontend/assets/img/achievement_dummy.png" width="100">
                    <div>
                        <div class="g6h8i umlu3">
                            Administrator<span class="ut8sj umlu3 iniww lj0fs">•</span><span class="ut8sj umlu3 iniww">
                                2 users have made this achievement.
                            </span>
                        </div>
                        <div class="iniww n91zp">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </div>
                    </div>
                </div>
                <div class="jol0p mkoq3 yrzca doh7b">
                    <img src="file:///home/chronos/u-b99c190e11ee42e371d918a0399d97cb71a388b8/MyFiles/eclipse-frontend/assets/img/achievement_dummy.png" width="100">
                    <div>
                        <div class="g6h8i umlu3">
                            Administrator<span class="ut8sj umlu3 iniww lj0fs">•</span><span class="ut8sj umlu3 iniww">
                                2 users have made this achievement.
                            </span>
                        </div>
                        <div class="iniww n91zp">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar>
    <Footer />
</template>
