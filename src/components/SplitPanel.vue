<template>
  <div
    class="split-panel"
    @mousemove="dragMove"
    @mouseup="dragStop"
    :class="{'dragging': dragging, 'vert': layoutType == 'vertical', 'hori': layoutType == 'horizontal'}"
  >
    <div
      class="split-panel-part"
      :style="layoutType == 'horizontal' ? {width: panelSize1} : {height: panelSize1}"
    >
      <slot name="1"></slot>
    </div>
    <div
      class="split-panel-gutter"
      @mousedown="dragStart"
      :style="layoutType == 'horizontal' ? {width: gutterSizeString} : {height: gutterSizeString}"
    ></div>
    <div
      class="split-panel-part"
      :style="layoutType == 'horizontal' ? {width: panelSize2} : {height: panelSize2}"
    >
      <slot name="2"></slot>
    </div>
  </div>
</template>

<script lang="ts">
// Based on https://github.com/SouthpawGoblin/vue-panel-split/
// Ported to vue3 and typescript by Michiel
import { defineComponent } from "vue";

export default defineComponent({
  props: ["layout", "gutter", "init", "min", "max"],
  data() {
    return {
      layoutType: this.layout || "horizontal",
      gutterSize: this.gutter || 3,
      percent: this.init || 50,
      minPercent: this.min || 0,
      maxPercent: this.max || 100,
      dragging: false,
      startPos: 0,
      startSplit: 0,
    };
  },
  computed: {
    gutterSizeString(): string {
      return `${this.gutterSize}px`;
    },
    panelSize1(): string {
      if (this.percent < this.minPercent) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.percent = this.minPercent;
      }
      return `calc(${this.percent}% - ${this.gutterSize}px)`;
    },
    panelSize2(): string {
      if (this.percent > this.maxPercent) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.percent = this.maxPercent;
      }
      return `${100 - this.percent}%`;
    },
  },
  methods: {
    dragStart(e: MouseEvent) {
      e.preventDefault();
      this.dragging = true;
      this.startPos = this.layoutType === "horizontal" ? e.pageX : e.pageY;
      this.startSplit = this.percent;
      e.stopPropagation();
    },
    dragMove(e: MouseEvent) {
      if (this.dragging) {
        e.preventDefault();
        const dx =
          (this.layoutType === "horizontal" ? e.pageX : e.pageY) -
          this.startPos;
        const totalSize =
          this.layoutType === "horizontal"
            ? this.$el.offsetWidth
            : this.$el.offsetHeight;
        this.percent = this.startSplit + (dx / totalSize) * 100;
        e.stopPropagation();
      }
    },
    dragStop(e: MouseEvent) {
      if (this.dragging) {
        e.preventDefault();
        this.dragging = false;
        e.stopPropagation();
      }
    },
  },
});
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.split-panel {
  width: 100%;
  height: 100%;
}

.split-panel-part {
  float: left;
  overflow: auto;
  position: relative;
}
.split-panel.hori > .split-panel-part {
  height: 100%;
}
.split-panel.vert > .split-panel-part {
  width: 100%;
}

.split-panel-gutter {
  background: rgba(0, 0, 0, 0.2);
  float: left;
  background-clip: padding-box;
}
.split-panel.hori > .split-panel-gutter {
  height: 100%;
  cursor: col-resize;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}
.split-panel.vert > .split-panel-gutter {
  width: 100%;
  cursor: row-resize;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.split-panel.hori > .split-panel-gutter:hover,
.split-panel.hori > .split-panel-gutter:focus {
  border-left: 1px solid rgba(0, 0, 0, 0.8);
  border-right: 1px solid rgba(0, 0, 0, 0.8);
}
.split-panel.vert > .split-panel-gutter:hover,
.split-panel.vert > .split-panel-gutter:focus {
  border-top: 1px solid rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
}

.split-panel.hori.dragging {
  cursor: col-resize;
}
.split-panel.vert.dragging {
  cursor: row-resize;
}
</style>
