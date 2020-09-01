<template>
  <div id="previewAreaMain">
    <LottieAnimation :animData="this.animData" @new-anim="this.anim = $event" />
    <p id="playbackButtons">
      <span
        @click="this.anim.goToAndStop(this.anim.firstFrame, true);"
        class="material-icons black-button"
        title="First frame (down arrow)"
      >first_page</span>
      <span
        @click="goToPrevFrame"
        class="material-icons black-button"
        title="Previous frame (left arrow)"
      >chevron_left</span>
      <span
        @click="this.anim.togglePause();"
        class="material-icons black-button"
        title="Play/pause (spacebar)"
      >
        <span v-if="this.anim && this.anim.isPaused">play_arrow</span>
        <span v-else>pause</span>
      </span>
      <span
        @click="goToNextFrame"
        class="material-icons black-button"
        title="Next frame (right arrow)"
      >chevron_right</span>
      <span
        @click="this.anim.goToAndStop(this.anim.firstFrame + this.anim.totalFrames, true);"
        class="material-icons black-button"
        title="Last frame (up arrow)"
      >last_page</span>
    </p>
    <h4>Export animation:</h4>
    <div>
      <button @click="this.exportAnimation('.tgs')" class="text-button">Save as TGS/Gzip</button>
      <button @click="this.exportAnimation('.json')" class="text-button">Save as Lottie/JSON</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import LottieAnimation from "./LottieAnimation.vue";
import { AnimationItem } from "lottie-web";
import { downloadDataAsFile } from "../main";
import { gzip } from "pako";

export default defineComponent({
  components: { LottieAnimation },
  data() {
    return {
      anim: null as AnimationItem | null,
    };
  },
  computed: mapState(["animData"]),
  methods: {
    goToPrevFrame() {
      if (this.anim == null) return;
      let frame = Math.round(this.anim.currentFrame - 0.55);
      if (frame < this.anim.firstFrame) {
        // Loop around if needed
        frame += this.anim.totalFrames;
      }
      this.anim.goToAndStop(frame, true);
    },
    goToNextFrame() {
      if (this.anim == null) return;
      let frame = Math.round(this.anim.currentFrame + 0.55);
      if (frame >= this.anim.firstFrame + this.anim.totalFrames) {
        // Loop around if needed
        frame -= this.anim.totalFrames;
      }
      this.anim.goToAndStop(frame, true);
    },
    globalKeypress(e: KeyboardEvent) {
      // Skip keyboard events targeted at text input fields
      if (e.target) {
        const nodeName = (e.target as HTMLElement).nodeName.toLowerCase();
        if (nodeName == "textarea" || nodeName == "input") {
          return;
        }
      }

      if (e.code === "Space") {
        this.anim?.togglePause();
      } else if (e.code === "ArrowLeft") {
        this.goToPrevFrame();
      } else if (e.code === "ArrowRight") {
        this.goToNextFrame();
      } else if (e.code === "ArrowUp") {
        this.anim?.goToAndStop(
          this.anim.firstFrame + this.anim.totalFrames,
          true
        );
      } else if (e.code === "ArrowDown") {
        this.anim?.goToAndStop(this.anim.firstFrame, true);
      }
    },
    exportAnimation(extension: ".tgs" | ".json") {
      let data: string | Uint8Array = JSON.stringify(this.animData);
      if (extension == ".tgs") {
        data = gzip(data);
      }
      downloadDataAsFile(this.animData.nm, extension, data);
    },
  },
  mounted() {
    // Setup global hotkeys
    window.addEventListener("keydown", this.globalKeypress);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.globalKeypress);
  },
});
</script>

<style scoped>
#animContainer {
  background-image: url("../assets/background.jpg");
  background-size: 16px 16px;
  background-repeat: repeat;
  border: solid black 1px;
}

#playbackButtons {
  position: relative;
  background-color: #bbb;
  margin: 0;
  padding: 4px 0 0 0;
  box-shadow: 0 0.2em 0.2em #0006;
}

#playbackButtons > span {
  padding: 0 3%;
}

h4 {
  margin: 1em;
}
</style>