<script setup lang="ts">
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";
import axios from "axios";
import { route } from "momentum-trail"

import Navbar from "@/Components/LayoutParts/Navbar.vue";
import AppHead from "@/Components/AppHead.vue";
import Footer from "@/Components/LayoutParts/Footer.vue";
import Sidebar from "@/Components/LayoutParts/Sidebar.vue";
import VLazyImage from "v-lazy-image";

defineProps({
  spaces: { type: Array, required: true },
  search: { type: String, required: false },
});

// Define the SpaceSearchResult interface
interface SpaceSearchResult {
  url: string;
  thumbnail: string;
  name: string;
  // Add other properties if needed
}
const SpaceSearchLoading = ref(false);

const search = ref("");
// Update the type of results to be an array of SpaceSearchResult
const results = ref<SpaceSearchResult[]>([]);

const performSearch = async () => {
  if (search.value !== "") {
    SpaceSearchLoading.value = true;
    await axios
      .get(route("spaces.page", { search: search.value }))
      .then((response) => {
        // Assuming the response.data is an array of SpaceSearchResult
        results.value = response.data.results;
        SpaceSearchLoading.value = false;
      })
      .catch((err) => console.log(err));
  } else {
    SpaceSearchLoading.value = true;
    results.value = [];
  }
};
</script>
<template>
  <AppHead pageTitle="Spaces" description="Find a space to join or create one!" :url="route(`spaces.page`)" />

  <Navbar />
  <Sidebar>
    <div class="u6xfc aeec0">
      <div class="ryur2 yrzca us3s8">
        <div class="u6xfc wc9nb">
          <div class="ryur2 o204m umlu3"><i class="o204m erxpu fa-planet-ringed"></i>&nbsp;Spaces</div>
        </div>
        <div class="u6xfc na2wp">
          <div class="lrcyb yrzca ygcya">
            <input type="text" class="ryur2 mmzf9 hlcw7 swb1b" placeholder="Search..." name="search" v-model="search"
              @input="performSearch" />
            <select class="ryur2 mmzf9 hlcw7 sryiy swb1b">
              <option value="1" selected disabled>Advanced Sorting...</option>
            </select>
            <div class="ryur2 mkoq3 knom5">
              <input type="submit" class="of1zd nhaz9 fm57z sd6c8" value="Search" />
            </div>
            <div class="ryur2 mkoq3 knom5">
              <a href="#" class="wruu4 of1zd ey2tb nhaz9 knom5"><i class="erxpu fa-hexagon-plus"></i>&nbsp; Create
                Space</a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="spaces.data.length" class="us3s8 o5qdx bszft">
        <div class="u6xfc wc9nb qzy08 juk3m" v-for="(space, index) in spaces.data" :key="index">
          <a href="#" class="nn1dg fhjfg">
            <v-lazy-image sizes="(max-width: 320px) 280px, 440px"
              src="https://img.freepik.com/free-vector/overlapping-forms-background_23-2148642590.jpg?size=626&ext=jpg&ga=GA1.1.1313891279.1718199690&semt=ais_user"
              class="ryur2 sr0ne" />
            <div style="line-height: 18px">
              <div class="nn1dg umlu3 jtcwt">
                <Link :href="route('spaces.view', { id: space.id, slug: space.slug })"
                  style="color: inherit; font-weight: 600">{{ space.name }}</Link>
              </div>
              <div class="ut8sj iniww umlu3 ctx1u">
                {{ space.description ?? "This space does not have a description." }}
              </div>
              <div class="m8bhg ut8sj umlu3 iniww">
                {{ space.member_count }} Members <span class="lj0fs">&bullet;</span>Created
                {{ space.DateHum }}
              </div>
            </div>
          </a>
        </div>
      </div>
      <div v-else class="">
        <div class="ghpy4 pfmvb">
          <div class="doh7b ryur2 wruu4 mkoq3 vhnj2">
            <i class="ku9nu erxpu fa-face-sad-cry iniww"></i>
            <div style="line-height: 16px">
              <div class="ut8sj aki3a iniww q611u">
                No spaces found.
              </div>
              <div class="iniww umlu3">
                <p class="ut8sj">
                  There are currently no spaces found, maybe you should create one!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Sidebar>
  <Footer />
</template>
