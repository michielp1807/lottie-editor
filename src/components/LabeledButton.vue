<template>
  <span class="labeled-button" :title="name">
    <span class="material-icons" :style="{fontSize: iconSize}">{{icon}}</span>
    <span class="label" :style="{fontSize: textSize, lineHeight: iconSize}">{{name}}</span>
  </span>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    name: String,
    textSize: String,
    icon: String,
    iconSize: String,
  },
})
export default class LabeledButton extends Vue {
  name!: string;
  icon!: string;
}
</script>

<style scoped>
.labeled-button {
  display: inline-block;
}

.labeled-button .label {
  display: inline-block;
  overflow: hidden;
  font-family: helvetica, sans-serif;
  margin: 0 4px;
  max-width: 0;
  transition: max-width 0.1s ease;
}

.labeled-button:hover .label {
  max-width: 100%;
}
</style>