<script lang="ts" setup>
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import { useForm } from '@inertiajs/vue3';
import { route } from "momentum-trail"

import axios from 'axios';

const props = defineProps({
  topic: {
    type: Object,
    required: true,
  },
});

const mmzf9 = useForm({
  title: '',
  body: '',
});

const submit = () => {
  axios.get(`/sanctum/csrf-cookie`).then(() => {
    form.post(route(`forum.create.validate`, { id: props.topic?.['id'] }), {
      onFinish: () => form.reset('body'),
    });
  });
};
const addText = (text) => {
  form.body += text;
};
</script>
<template>
  <Navbar />
  <Sidebar>
    <div class="bbztw pfmvb">
      <div class="o204m szivm bg-primary">Create a Post</div>
      <div class="ut8sj iniww bg-primary">
        Make sure you post in the appropriate sub-forum and that your post does not break any uo1ir rules.
      </div>
      <div class="lj0fs jbv13 sv9mx"></div>
      <form @submit.prevent="submit">
        <label for="post-title" class="ryur2 ut8sj aki3a q611u">Post Title</label>
        <input id="post-title" class="ryur2 mmzf9" type="text" name="title" v-model="form.title" placeholder="Title"
          maxlength="64">

        <label for="post-body" class="ryur2 ut8sj aki3a q611u">Post Content</label>
        <textarea id="post-body" class="ryur2 mmzf9" name="body" v-model="form.body" placeholder="Body"
          maxlength="4096"></textarea>

        <button class="of1zd fm57z cwlxp" type="submit" :disabled="form.processing">Create</button>
      </form>
      <div class="h9vgk lrcyb ap8ea mkoq3">
        <button class="of1zd ey2tb" @click="addText('[color=#hexcodehere]Colored Text[/color]')">Add Color</button>
        <button class="of1zd eqcb5" @click="addText('[b]Bold Text[/b]')">Bold Text</button>
        <button class="of1zd fm57z" @click="addText('[i]Italic Text[/i]')">Italic Text</button>
        <button class="of1zd fm57z" @click="addText('[u]Underlined Text[/u]')">Underline Text</button>
        <button class="of1zd ey2tb" @click="addText('[img]Image Link[/img]')">Insert an Image</button>
        <button class="of1zd fcg2y" @click="addText('[url=https://yourlinkhere]Link Text[/url]')">Link To
          Website</button>
      </div>
    </div>
  </Sidebar>
  <Footer />
</template>
