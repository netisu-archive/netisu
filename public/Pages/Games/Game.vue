<script setup lang="ts">
import AppHead from "@/Components/AppHead.vue";
import Navbar from "@/Components/LayoutParts/Navbar.vue";
import Sidebar from "@/Components/LayoutParts/Sidebar.vue";
import VLazyImage from "v-lazy-image";
//import { Head, Link } from '@inertiajs/vue3';
</script>

<template>
    <AppHead title="Aeo's Game" />
    <Navbar />
    <Sidebar
        image="/assets/img/site-banners/landing-melody.png"
        :alertsEnabled="false"
        :superBanActive="true"
        :OfficialImageBackground="false"
    >
        <template>
            <portal to="bannerAsset">
                <v-lazy-image
                    src="/assets/img/dummy-error.png"
                    width="100"
                    class="vvo5o"
                    alt="Game Thumbnail"
                    src-placeholder="/assets/img/dummy-error.png"
                />
            </portal>
            <portal to="bannerButtons">
                <Link
                    class="of1zd ey2tb nhaz9 edicy fhjfg"
                    as="pw3az"
                    style="outline: none"
                >
                    <i class="erxpu fa-gamepad-modern"></i> Play Game
                </Link>
            </portal>
            <portal to="bannerName">
                <div class="o204m" style="line-height: 16px">Aeo's Game</div>
            </portal>
            <portal to="bannerDescription">
                Created by: <a href="#" class="text-link ctx1u">aeo</a>
            </portal>
        </template>
        <div class="u6xfc hivxp">
            <div class="kqzo1 yrzca navbar-grid">
                <div class="u6xfc aeec0">
                  <div class="us3s8 o5qdx bszft">
                    <div class="kqzo1 u6xfc wc9nb qzy08 fnliq">
                      <div class="wruu4">
                        <div class="pfmvb">
                          <h3 class="iniww"><i class="erxpu fa-swords"></i> Combat</h3>
                          <p>Genere</p>
                        </div>
                      </div>
                    </div>
                    <div class="kqzo1 u6xfc wc9nb qzy08 fnliq">
                      <div class="wruu4">
                        <div class="pfmvb">
                          <h3 class="iniww"><i class="erxpu fa-user"></i> 5</h3>
                          <p>Active</p>
                        </div>
                      </div>
                    </div>
                    <div class="kqzo1 u6xfc wc9nb qzy08 fnliq">
                      <div class="wruu4">
                        <div class="pfmvb">
                          <h3 class="iniww"><i class="erxpu fa-heart"></i> 1</h3>
                          <p>Favorite</p>
                        </div>
                      </div>
                    </div>
                    <div class="kqzo1 u6xfc wc9nb qzy08 fnliq">
                      <div class="wruu4">
                        <div class="pfmvb">
                          <h3>21</h3>
                          <p>Communities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div class="ryur2 o204m umlu3">Description</div>
            <div class="bbztw pfmvb">
                <span href="#" class="wxza1">Thumbnail </span>
            </div>
        </div>
        <div class="u6xfc om09p">
            <div class="ryur2 o204m umlu3">Active Servers</div>
            <div class="bbztw pfmvb">
                <div class="ncogr">
                    <div class="jol0p">
                        <a
                            class="lrcyb qeh80 ryur2 yrzca mkoq3 ufpvb fhjfg"
                        >
                            <div class="y0ghd">
                                <div class="pt8l6">
                                    <img
                                        src="/assets/img/dummy_headshot.png"
                                        width="50"
                                    />
                                </div>
                                <div class="pt8l6">
                                    <img
                                        src="/assets/img/dummy_headshot.png"
                                        width="50"
                                    />
                                </div>
                                <div class="pt8l6">
                                    <span
                                        class="g6h8i iniww mkoq3 wruu4 hg4an knom5"
                                    >
                                        50+
                                    </span>
                                </div>
                            </div>

                            <a
                                class="h9vgk of1zd ey2tb xjtlw ctx1u qdyhq"
                            >
                                <i class="erxpu fa-user"></i> Join
                            </a>
                        </a>

                        <!-- Add sv9mx after each server except the last one -->
                        <div class="sv9mx sd6c8" />
                    </div>
                </div>
            </div>
        </div>
        <div class="u6xfc i2f4x">
            <div class="ryur2 o204m umlu3">Comments</div>
            <div class="bbztw pfmvb">
                <div class="doh7b jol0p mkoq3 wj42a">
                    <div class="eb64e knom5" style="width: 100px">
                        <Link href="#" class="n91zp wruu4 nn1dg fhjfg">
                            <v-lazy-image src="/assets/img/dummy_headshot.png" width="60" class="pt8l6" alt="Avatar"
                                src-placeholder="/assets/img/dummy_headshot.png" />
                            <div style="line-height: 16px">
                                <div class="ctx1u">aeno</div>
                                <div class="ut8sj iniww ctx1u">
                                    @aeo
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="bbztw pfmvb ni21t sd6c8">
                        <div class="yrzca mkoq3 ufpvb">
                            <div class="sd6c8">
                                <div class="ut8sj iniww">
                                    <i class="far fa-clock x4jyd" style="vertical-align: middle;margin-top: -2.5px;font-size: 10px;"></i>
                                    Posted 2m ago
                                </div>
                                <div>
                                    placeholder comment
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar>
</template>
