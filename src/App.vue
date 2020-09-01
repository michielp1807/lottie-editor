<template>
  <div id="app">
    <Header id="header" />
    <router-view class="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
});
</script>

<style>
:root {
  --primary-color: #16b;
  --primary-color-outset-border: #27c;
  --primary-color-light: #92b8e1;

  --secondary-color: #ff5b29;
  --secondary-color-dark: #de4a0f;
  --secondary-color-darker: #e71d0f;
}

body {
  margin: 0px;
  user-select: none;
}

#app {
  display: flex;
  flex-flow: column;
  font-family: helvetica, sans-serif;
  text-align: center;
  height: 100vh;
  background-color: #eee;
}

#header {
  flex: 0 1 auto;
}

.content {
  flex: 1 1 auto;
}

/* Buttons */
.white-button {
  color: #fff;
  cursor: pointer;
}
.white-button:hover {
  color: #ddd;
}
.white-button:active {
  color: #eee;
}

.black-button {
  color: #000;
  cursor: pointer;
  transition: box-shadow 100ms ease;
}
.black-button:hover {
  color: #222;
  background-color: #aaa;
  border-radius: 1em;
  box-shadow: 0px 5px 5px #0005;
}
.black-button:active {
  color: #777;
}

.button-active {
  color: var(--secondary-color-dark);
}
.button-active:hover {
  color: var(--secondary-color);
}
.button-active:active {
  color: var(--secondary-color-darker);
}

.text-button {
  cursor: pointer;
  padding: 1ch;
  margin: 0 1ch;
  background-color: #fff;
  border: none;
  border-radius: 0.2em;
  font-family: helvetica, sans-serif;
  font-weight: bold;
  font-size: 0.85em;
  box-shadow: 0 0.3ch 0.3ch #0005;
  transition: background-color 200ms ease;
}
.text-button:hover {
  background-color: #ddd;
}
.text-button.primary {
  background-color: var(--primary-color);
  color: #fff;
}
.text-button.primary:hover {
  background-color: var(--primary-color-outset-border);
}
</style>
