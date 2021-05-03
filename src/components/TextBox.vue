<template>
  <div id="text-container" class="w-full">
    <h1 class="w-full bg-transparent text-5xl text-center">
      {{ text }}
    </h1>
  </div>
</template>

<script>
// @ts-nocheck

import { watch } from "vue";

export default {
  name: "TextBox",
  props: {
    text: String,
    width: String,
    weight: String,
    italic: String,
  },
  setup(props) {
    function changeWidthAndWeight() {
      const width = ((100 - 70) * props.width) / 100 + 70;
      const weight = ((700 - 400) * props.weight) / 100 + 400;
      // document.querySelector(
      //   "#text-container"
      // ).style.fontVariationSettings = `"wght" ${weight}, "wdth" ${width};`;
    document.querySelector("#text-container").style.fontVariationSettings = "\"wght\" " + weight + ", \"wdth\" " + width
    }

    function changeItalic() {
      console.log(props.italic);
      if (parseInt(props.italic) > 50) {
        console.log("italic");
        document.querySelector("#text-container").classList.add("italic");
      } else {
        console.log(" no italic");
        document.querySelector("#text-container").classList.remove("italic");
      }
    }

    watch(
      () => props.width,
      () => {
        changeWidthAndWeight();
      }
    );

    watch(
      () => props.weight,
      () => {
        changeWidthAndWeight();
      }
    );

    watch(
      () => props.italic,
      () => {
        changeItalic();
      }
    );

    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// Variable font
@font-face {
  font-family: "Cabin";
  src: url("~@/assets/fonts/Cabin.ttf") format("truetype-variations");
  font-weight: 400 700;
  font-stretch: 70% 100%;
}

@font-face {
  font-family: "Cabin Italic";
  src: url(" ~@/assets/fonts/Cabin-Italic.ttf") format("truetype-variations");
  font-weight: 400 700;
  font-stretch: 70% 100%;
}

#text-container {
  font-family: "Cabin", Avenir, Helvetica, Arial, sans-serif;
  transition: font-variation-settings 0.3s ease;
  font-variation-settings: "wght" 550, "wdth" 75%;
}

#text-container.italic {
  font-family: "Cabin Italic", Avenir, Helvetica, Arial, sans-serif;
}
</style>
