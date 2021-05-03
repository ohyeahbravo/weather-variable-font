<template>
  <div class="w-full flex flex-col justify-center items-center">
    <TextBox text="Weather." :width="width" :weight="weight" :italic="italic" />
    <div
      class="mt-10 flex flex-col w-80 space-y-8"
    >
      <Slider
        field="temperature"
        variable="width"
        :defaultValue="defaultWidth"
        @valueChanged="valueChanged"
      />
      <Slider
        field="humidity"
        variable="weight"
        :defaultValue="defaultWeight"
        @valueChanged="valueChanged"
      />
      <Slider
          field="wind"
        variable="italic"
        :defaultValue="defaultItalic"
        @valueChanged="valueChanged"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import TextBox from "@/components/TextBox.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "Home",
  components: {
    TextBox,
    Slider,
  },
  setup() {
    const defaultWeight = ref("50");
    const defaultWidth = ref("50");
    const defaultItalic = ref("50");

    const weight = ref(defaultWeight.value)
    const width = ref(defaultWidth.value)
    const italic = ref(defaultItalic.value)

    function valueChanged(variable, newValue) {
      if(variable === 'weight') {
        weight.value = newValue
      } else if(variable === 'width') {
        width.value = newValue
      } else {
        italic.value = newValue
      }
    }

    return {
      defaultWeight,
      defaultWidth,
      defaultItalic,
      weight,
      width,
      italic,
      valueChanged,
    };
  },
};
</script>
<style lang="scss" scoped></style>
