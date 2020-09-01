<template>
  <div id="header">
    Lottie/TGS Editor
    <div id="headerButtons">
      <router-link to="/" class="material-icons white-button">
        <LabeledButton icon="home" name="Home" iconSize="30px" textSize="26px" />
      </router-link>
      <router-link to="/editor" class="material-icons white-button">
        <LabeledButton icon="edit" name="Editor" iconSize="30px" textSize="26px" />
      </router-link>
      <router-link to="/about" class="material-icons white-button">
        <LabeledButton icon="info" name="About" iconSize="30px" textSize="26px" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LabeledButton from "./LabeledButton.vue";

export default defineComponent({
  name: "Header",
  components: {
    LabeledButton,
  },
});
</script>

<style scoped>
#header {
  padding: 12px;
  margin: 0px;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  background-color: var(--primary-color);
  color: #fff;
  text-shadow: 2px 2px #000;
}

#headerButtons {
  position: absolute;
  top: 0;
  right: 0;
  text-align: right;
  padding: 15px;
}

#headerButtons a {
  text-decoration: none;
}

.material-icons {
  font-size: 30px;
}

.router-link-active {
  color: var(--primary-color-light) !important;
}
</style>