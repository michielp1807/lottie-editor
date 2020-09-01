<template>
  <div id="loadedAnimPreview" v-if="this.freshlyLoadedAnimData">
    <h3>Are you sure you want to open the following animation in the editor?</h3>
    <LottieAnimation :animData="this.freshlyLoadedAnimData" />
    <p>(Opening a new animation will remove the current one!)</p>
    <p>
      <button class="text-button" @click="cancel">Cancel</button>
      <button class="text-button primary" @click="open">Open</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import LottieAnimation from "./LottieAnimation.vue";
import store from "../store/store";
import { MutationTypes } from "../store/store";

export default defineComponent({
  computed: mapState(["freshlyLoadedAnimData"]),
  components: { LottieAnimation },
  methods: {
    cancel() {
      store.commit(MutationTypes.SET_LOADED_ANIM_DATA, null);
    },
    open() {
      store.commit(MutationTypes.SET_ANIM_DATA, this.freshlyLoadedAnimData);
      store.commit(MutationTypes.SET_LOADED_ANIM_DATA, null);
      this.$router.push("editor");
    },
  },
});
</script>

<style scoped>
#loadedAnimPreview {
  position: fixed;
  left: 10%;
  right: 10%;
  top: 10%;
  bottom: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 2em;
  background-color: #ccc;
  box-shadow: 0 0.8em 1em #0006;
  padding: 2em;
}
</style>