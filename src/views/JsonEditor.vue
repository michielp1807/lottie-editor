<template>
  <div id="jsonCodeEditor" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ace from "brace";

import "brace/mode/json";
import "brace/theme/xcode";
import { useStore } from "vuex";
import { MutationTypes } from "../store/store";

let editor: ace.Editor;

export default defineComponent({
  mounted() {
    const store = useStore();

    editor = ace.edit("jsonCodeEditor");
    editor.setTheme("ace/theme/xcode");
    editor.setShowPrintMargin(false);
    editor.setOption("dragEnabled", false);
    editor.session.setMode("ace/mode/json");
    editor.session.setTabSize(4);

    // Set value
    editor.setValue(JSON.stringify(store.state.animData, null, 4));
    editor.gotoLine(0);

    // Commit changes
    editor.on("change", function () {
      const content = editor.getValue();
      store.commit(MutationTypes.PARSE_AND_SET_ANIM_DATA, content);
    });
  },
  beforeUnmount: function () {
    editor.destroy();
    editor.container.remove();
  },
});
</script>