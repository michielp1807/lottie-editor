<template>
  <div ref="animContainer"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import lottie, { AnimationItem } from "lottie-web";
import { Lottie } from "../store/store";

export default defineComponent({
  data() {
    return {
      anim: null as AnimationItem | null,
    };
  },
  props: ["animData"],
  methods: {
    setAnimation(animData: Lottie) {
      // Create copy of animData to prevent lottie-web from adding stuff to it
      animData = JSON.parse(JSON.stringify(this.animData));

      const play = !this.anim || !this.anim.isPaused;
      const frame = this.anim ? this.anim.currentFrame : 0;

      // Clear HTML
      //if (this.anim && this.anim.destroy) this.anim.destroy();
      (this.$refs.animContainer as Element).innerHTML = "";

      // Create new animation
      const renderData = {
        container: this.$refs.animContainer as Element,
        renderer: "svg" as const,
        loop: true,
        autoplay: true,
        animationData: animData,
      };
      this.anim = lottie.loadAnimation(renderData);

      // Make sure to continue at the same frame
      if (play) {
        this.anim.goToAndPlay(frame, true);
      } else {
        this.anim.goToAndStop(frame, true);
      }

      this.$emit("new-anim", this.anim);
    },
  },
  mounted() {
    this.setAnimation(this.animData);
  },
  unmounted() {
    //if (this.anim) this.anim.destroy();
  },
  watch: {
    animData(newAnimData) {
      this.setAnimation(newAnimData);
    },
  },
});
</script>

<style scoped>
div {
  background-image: url("../assets/background.jpg");
  background-size: 16px 16px;
  background-repeat: repeat;
  border: solid black 1px;
  box-shadow: 0 0.5em 1em #0006;
}
</style>