<template>
  <div
    id="dropArea"
    :class="{dragover: dragover}"
    v-cloak
    @drop.prevent="dropFiles"
    @dragover.prevent="dragover = true;"
    @dragenter="dragover = true;"
    @dragend="dragover = false;"
    @dragleave="dragover = false;"
    @click="this.$refs.fileInput.click()"
  >
    <div class="material-icons">open_in_browser</div>
    <div>Drop a TGS or JSON file here or click to select one manually!</div>

    <input
      type="file"
      ref="fileInput"
      id="fileInput"
      accept=".tgs, .json, .lottie"
      @change="openFile"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ungzip } from "pako";
import store from "../store/store";
import { MutationTypes } from "../store/store";

export default defineComponent({
  data() {
    return {
      dragover: false,
    };
  },
  methods: {
    dropFiles(e: DragEvent) {
      this.dragover = false;
      this.handleFile(e.dataTransfer?.files);
    },
    openFile(e: InputEvent) {
      this.handleFile((e.target as HTMLInputElement).files);
    },
    handleFile(files: FileList | undefined | null) {
      if (files && files.length > 0) {
        console.log(files[0]);
        const reader = new FileReader();
        reader.readAsBinaryString(files[0]);
        reader.addEventListener("load", this.onFileLoaded);
      }
    },
    onFileLoaded(file: ProgressEvent<FileReader>) {
      let data = file.target?.result;
      if (data instanceof ArrayBuffer) {
        data = new TextDecoder("utf-8").decode(data);
      }

      if (data) {
        // Try to unzip the gzip
        try {
          data = new TextDecoder("utf-8").decode(ungzip(data));
        } catch (e) {
          console.log(e);
        }

        try {
          const newAnimData = JSON.parse(data);
          store.commit(MutationTypes.SET_LOADED_ANIM_DATA, newAnimData);
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
});
</script>

<style scoped>
#dropArea {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 8em;
  background-color: #ddd;
  border-radius: 0.5em;
  border: 1px solid #000;
}

#dropArea.dragover {
  box-shadow: inset 0 0 1em #0004;
  background-color: #e0e0e0;
}

#dropArea:hover {
  box-shadow: 0 0.5em 1em #0004;
}

#dropArea .material-icons {
  font-size: 4em;
}

#fileInput {
  display: none;
}
</style>