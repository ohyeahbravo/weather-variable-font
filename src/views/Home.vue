<template>
  <div class="w-full flex flex-col space-y-12 items-center">
    <TextBox
      class="pt-36"
      text="WEATHER"
      :opsz="opsz"
      :weight="weight"
      :italic="italic"
    />
    <div class="flex flex-col w-72 space-y-8">
      <Slider
        field="wind"
        variable="italic"
        :defaultValue="defaultItalic"
        min="1"
        max="31"
        @valueChanged="valueChanged"
      />
      <Slider
        field="humidity"
        variable="weight"
        min="50"
        max="90"
        :defaultValue="defaultWeight"
        @valueChanged="valueChanged"
      />
      <Slider
        field="temperature"
        variable="opsz"
        min="0"
        max="28"
        :defaultValue="defaultOpsz"
        @valueChanged="valueChanged"
      />
    </div>
    <p id="description1" class="paragraphs">
      The weather is turbulent. We remember only one moment of the weather. But
      the weather we actually experience is a continuous stream of moments. We
      feel the countless moments of the weather with our whole body. And this
      natural yet powerful stimulus is connected to the memory of that moment.
      This project “Weather” is about weather, memory, and its records. By
      designing the letters, which are the means for recording, as variable
      fonts that change according to the weather, it induces the formation of
      memories in the form of letters as well as the contents of the texts.
    </p>
    <p id="description2" class="paragraphs">
      The variable font "Weather" visualizes the weather, which is an abstract
      memory, through typography. This variable font has three axes. It has
      different forms depending on temperature, humidity, and wind speed. The
      font was designed to create a webpage and an app for diaries “weather” .
      It will automatically vary with temperature, humidity, and wind speed
      based on the user's position. It is a font that is uncontrollable like the
      weather, designed to connect fun with the memory recording it with the
      memory of the font design itself for a new experience.
    </p>
    <p id="description3" class="paragraphs">
      This project is the work for Bauhaus University Weimar, Bachelor of Visual
      Communication.
    </p>
    <p id="ending">
      <span class="ending1">Concept and Type designed</span>
      <span class="ending1">by Miyoun Park</span>
      <div class="flex flex-row items-center space-x-1 pl-3">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
            clip-rule="evenodd"
          /></svg
        ><a href="https://mia-park.com/" target="_blank" class="ending2 hover:underline"
        >mia-park.com</a
      ></div>
      <div class="flex flex-row items-center space-x-1 pl-3">
      <img src="@/assets/icons/instagram_white.svg" class="h-4 w-4" /><a href="https://www.instagram.com/mmia.park/" target="_blank" class="ending2 hover:underline">mmia.park </a></div>
      <div class="flex flex-row items-center space-x-1 pl-3">
      <img src="@/assets/icons/instagram_white.svg" class="h-4 w-4" /><a href="https://www.instagram.com/tictactype/" target="_blank" class="ending2 hover:underline">tictactype </a></div>
      <span class="ending1 mt-5">Web designed</span>
      <span class="ending1">by Hiyeon Kim</span>
      <div class="flex flex-row items-center space-x-1 pl-3 mb-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
          clip-rule="evenodd"
        />
      </svg>
      <a href="https://ohyeahbravo.github.io/portfolio/" target="_blank" class="ending2 hover:underline"
        >ohyeahbravo.github.io/portfolio</a
      ></div>
    </p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import TextBox from "@/components/TextBox.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "Home",
  components: {
    TextBox,
    Slider,
  },
  setup() {
    const defaultWeight = ref("70");
    const defaultOpsz = ref("14");
    const defaultItalic = ref("16");

    const weight = ref(defaultWeight.value);
    const opsz = ref(defaultOpsz.value);
    const italic = ref(defaultItalic.value);

    document.querySelector("#app").style.backgroundSize = "100% 50%";

    onMounted(() => {
      changeDescriptionFont();
    });

    function valueChanged(variable, newValue) {
      if (variable === "weight") {
        weight.value = newValue;
      } else if (variable === "opsz") {
        opsz.value = newValue;
      } else {
        italic.value = newValue;
      }
      changeDescriptionFont();
    }

    function changeDescriptionFont() {
      ["#description1", "#description2", "#description3", "#ending"].forEach(
        (p) => {
          document.querySelector(p).style.fontVariationSettings =
            '"wght" ' +
            weight.value +
            ', "opsz" ' +
            opsz.value +
            ', "ital" ' +
            italic.value;
        }
      );
    }

    return {
      defaultWeight,
      defaultOpsz,
      defaultItalic,
      weight,
      opsz,
      italic,
      valueChanged,
    };
  },
};
</script>
<style scoped lang="scss">
.paragraphs {
  @apply w-3/4 md:w-1/2 lg:w-5/12 text-left text-sm pt-7 text-default-blue;
  transition: font-variation-settings 0.3s ease;
  text-indent: 3ch;
}

#ending {
  @apply w-3/4 md:w-1/2 lg:w-5/12 text-left text-sm pt-7 text-white;
  transition: font-variation-settings 0.3s ease;
}
.ending1 {
  @apply block uppercase;
}
.ending2 {
  @apply inline uppercase;
}
</style>
