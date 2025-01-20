<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
//import { route, current } from "momentum-trail";
import { ref } from 'vue';

defineProps({
    canResetPassword: Boolean,
    status: String,
});
function showModal(modalId: string): void {
    const qjsb0 = document.getElementById(modalId);
    if (modal) {
        modal.classList.toggle("omei8");
    }
};
const userAvatarColor = ref([avatar.color_left_arm]);
</script>

<template>
    <Navbar>
        <div class="qjsb0" id="PartsModal">
            <div class="stopd jrvna">
                <div class="p6ynw">
                    <div class="hatrc yc0p1 jcp3z hgbpf">
                        <div class="ctckx wzh2z">
                            Avatar Parts
                        </div>
                        <button @click="showModal('PartsModal')" class="aksah"
                            data-toggle-modal="#following-modal" style="margin-right: -10px">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="p6ynw">
                    <div class="hatrc yc0p1 jcp3z hgbpf">
                    <div class="pf7ue mhb1l">
                        <div class="rqitf">
                            <div class="hhise uwgpx">
                                <div style="margin-bottom:2.5px;">
                                    <button class="avatar-body-part" style="background-color:{{ Auth::user()->avatar()->color_head }};padding:25px;margin-top:-1px;" data-part="head"></button>
                                </div>
                                <div style="margin-bottom:2.5px;">
                                    <button class="avatar-body-part" :style="{
                                        backgroundColor: userAvatarColor,
                                        padding: '50px',
                                        paddingRight: '0px'
                                      }" data-part="left_arm"></button>
                                    <button class="avatar-body-part" style="background-color:{{ Auth::user()->avatar()->color_torso }};padding:50px;" data-part="torso"></button>
                                    <button class="avatar-body-part" style="background-color:{{ Auth::user()->avatar()->color_right_arm }};padding:50px;padding-right:0px;" data-part="right_arm"></button>
                                </div>
                                <div>
                                    <button class="avatar-body-part" style="background-color:{{ Auth::user()->avatar()->color_left_leg }};padding:50px;padding-right:0px;padding-left:47px;" data-part="left_leg"></button>
                                    <button class="avatar-body-part" style="background-color:{{ Auth::user()->avatar()->color_right_leg }};padding:50px;padding-right:0px;padding-left:47px;" data-part="right_leg"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pf7ue twbo5">
                        <div class="rqitf">
                            <div class="hhise uwgpx">
                                <div style="margin-bottom:2.5px;">
                                    <button class="avatar-body-part" style="background-color:{{ Auth::user()->avatar()->color_head }};padding:25px;margin-top:-1px;" data-part="head"></button>
                                </div>
                                <div style="margin-bottom:2.5px;">
                                    <button class="avatar-body-part" style="background-color:{{ Auth::user()->avatar()->color_left_arm }};padding:50px;padding-right:0px;" data-part="left_arm"></button>
                                    <button class="avatar-body-part" style="background-color:{{ Auth::user()->avatar()->color_torso }};padding:50px;" data-part="torso"></button>
                                    <button class="avatar-body-part" style="background-color:{{ Auth::user()->avatar()->color_right_arm }};padding:50px;padding-right:0px;" data-part="right_arm"></button>
                                </div>
                                <div>
                                    <button class="avatar-body-part" style="background-color:{{ Auth::user()->avatar()->color_left_leg }};padding:50px;padding-right:0px;padding-left:47px;" data-part="left_leg"></button>
                                    <button class="avatar-body-part" style="background-color:{{ Auth::user()->avatar()->color_right_leg }};padding:50px;padding-right:0px;padding-left:47px;" data-part="right_leg"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="pf7ue mhb1l">
            <div class="dwa8l yc0p1 jcp3z hgbpf">
                <div class="dwa8l ut945 wzh2z">Avatar</div>
                <div class="pw3az mywqk" style="margin-right: -14px" @click="showModal('PartsModal')">
                    <button class="ltwij far fa-fill-drip aksah" data-tooltip-title="More"
                        data-tooltip-placement="bottom"></button>
                </div>
            </div>
            <div class="od08t hhise uwgpx">
                <img src="/assets/img/dummy.png" />
                <div class="ukug5 hatrc bosmm jcp3z">
                    <button class="gww1z g5jim uyz52 vssp0 o53ji">
                        Reset
                    </button>
                    <button class="gww1z xucmr uyz52 vssp0 o53ji">
                        Random
                    </button>
                </div>
            </div>
        </div>
        <div class="pf7ue twbo5">
            <div class="dwa8l yc0p1 jcp3z hgbpf">
                <div class="dwa8l ut945 wzh2z">Inventory</div>
            </div>
            <div class="od08t hhise uwgpx">
                <div class="f6m31 rqitf jcp3z hvwcp">
                    <i class="zhnru fas fa-wand-magic-sparkles wrcaq"></i>
                    <div style="line-height: 16px">
                        <div class="rcpld khqv1 wrcaq d7pwb">
                            No Items.
                        </div>
                        <div class="rcpld wrcaq wzh2z">
                            You are not wearing any items.
                        </div>
                    </div>
                </div>
            </div>
            <div class="od08t hhise uwgpx">
                <div class="wj72q">
                    <ul class="tzxnw">
                        <li class="k1dtp">
                            <a href="#" class="plt3h omei8 wn3lt">Hats</a>
                        </li>
                        <li class="k1dtp">
                            <a href="#" class="plt3h wn3lt">Shirts</a>
                        </li>
                        <li class="k1dtp">
                            <a href="#" class="plt3h wn3lt">Accessories</a>
                        </li>
                        <li class="k1dtp">
                            <a href="#" class="plt3h wn3lt">Pants</a>
                        </li>
                        <li class="k1dtp">
                            <a href="#" class="plt3h wn3lt">Heads</a>
                        </li>
                    </ul>
                </div>
                <div class="wj72q">
                    <div class="f6m31 rqitf jcp3z hvwcp">
                        <i class="zhnru fas fa-crate-apple wrcaq"></i>
                        <div style="line-height: 16px">
                            <div class="rcpld khqv1 wrcaq d7pwb">
                                No insert_category_name_here
                            </div>
                            <div class="rcpld wrcaq wzh2z">
                                You have no items in the category.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Navbar>
</template>
