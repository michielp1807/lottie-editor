<template>
  <div id="editorMain">
    <split-panel :layout="'horizontal'" :init="65" :min="20" :max="80" id="mainSplit">
      <template v-slot:1>
        <div class="splitSlot">
          <div id="editorHeader" class="subHeader">
            <router-link to="/editor">
              Timeline Editor
              <span class="material-icons">playlist_play</span>
            </router-link>
            <router-link to="/editor/json">
              JSON Data
              <span class="material-icons">code</span>
            </router-link>
          </div>
          <router-view class="slotContent" />
        </div>
      </template>
      <template v-slot:2>
        <div class="splitSlot">
          <div id="previewHeader" class="subHeader">
            <div style="display: inline-block;">
              Animation
              <span class="material-icons">movie</span>
            </div>
          </div>
          <PreviewArea class="slotContent" />
        </div>
      </template>
    </split-panel>
    <div id="errorMsg" v-if="errorMsg">{{errorMsg}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SplitPanel from "../components/SplitPanel.vue";
import PreviewArea from "../components/PreviewArea.vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    SplitPanel,
    PreviewArea,
  },
  computed: {
    errorMsg() {
      return useStore().state.errorMsg;
    },
  },
});
</script>

<style scoped>
#editorMain {
  width: 100%;
  height: 100%;
}

.splitSlot {
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  position: absolute;
}

.split-panel-part {
  position: relative;
}

.slotContent {
  flex: 1 1 auto;
}

/* Error message */
#errorMsg {
  position: absolute;
  bottom: 10px;
  left: 10%;
  right: 10%;
  background-color: #222;
  color: #fff;
  text-align: left;
  padding: 10px;
  z-index: 100;
}

/* Sub headers */
.subHeader {
  flex: 0 1 auto;
  padding: 2px;
  background-color: #ccc;
  font-weight: bold;
  position: sticky;
  top: 0;
}

.subHeader .material-icons {
  vertical-align: -6px;
  padding: 0 10px;
}

.subHeader div {
  display: inline-block;
  border: 1px solid #ccc;
}

.subHeader a {
  cursor: pointer;
  display: inline-block;
  margin: 0 10px;
  padding: 0 0 0 14px;
  color: #444;
  border: 1px solid #ccc;
  text-decoration: none;
}

.subHeader a:hover {
  text-decoration: underline;
  border-color: #aaa;
  color: #444;
}

.subHeader a:active {
  border-color: #999;
  background-color: #ddd;
  color: #222;
}

.subHeader a.router-link-exact-active {
  cursor: default;
  text-decoration: underline;
  border-color: #888;
  background-color: #eee;
  color: #000;
}
</style>
