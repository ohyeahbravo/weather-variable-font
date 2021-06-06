<template>
  <div id="text-container" class="w-full">
    <h1 class="w-full text-default-blue bg-transparent text-7xl text-center">
      {{ text }}
    </h1>
  </div>
</template>

<script>
// @ts-nocheck

import { watch, onMounted } from "vue";

export default {
  name: "TextBox",
  props: {
    text: String,
    opsz: String,
    weight: String,
    italic: String,
  },
  setup(props) {
    function changeFont() {
      document.querySelector("#text-container").style.fontVariationSettings =
        '"wght" ' +
        props.weight +
        ', "opsz" ' +
        props.opsz +
        ', "ital" ' +
        props.italic;
    }

    onMounted(() => changeFont());

    watch(
      () => props.italic,
      () => {
        changeFont();
      }
    );

    watch(
      () => props.opsz,
      () => {
        changeFont();
      }
    );

    watch(
      () => props.weight,
      () => {
        changeFont();
      }
    );

    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#text-container {
  transition: font-variation-settings 0.3s ease;
}
</style>
