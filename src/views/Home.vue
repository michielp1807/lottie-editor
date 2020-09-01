<template>
  <div id="home">
    <h1>Welcome!</h1>
    <p>*Short introduction of the site here!*</p>
    <FileDrop />
    <LoadedAnimPreview />
    <h2>Example animations</h2>
    <p>Here will be previews of the example animations that you can click to open!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FileDrop from "../components/FileDrop.vue";
import LoadedAnimPreview from "../components/LoadedAnimPreview.vue";

export default defineComponent({
  components: {
    FileDrop,
    LoadedAnimPreview,
  },
});
</script>

<style scoped>
#home {
  position: relative;
  max-width: 860px;
  margin: 0 auto;
  padding: 2em;
}
</style>
