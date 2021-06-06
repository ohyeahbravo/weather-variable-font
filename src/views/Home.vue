<template>
  <div class="w-full flex flex-col items-center pt-36">
    <TextBox text="WEATHER" :opsz="opsz" :weight="weight" :italic="italic" />
    <div class="mt-10 flex flex-col w-80 space-y-8">
      <Slider
        field="temperature"
        variable="opsz"
        :defaultValue="defaultOpsz"
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
    const defaultOpsz = ref("50");
    const defaultItalic = ref("50");

    const weight = ref(defaultWeight.value);
    const opsz = ref(defaultOpsz.value);
    const italic = ref(defaultItalic.value);

    function valueChanged(variable, newValue) {
      if (variable === "weight") {
        weight.value = newValue;
      } else if (variable === "opsz") {
        opsz.value = newValue;
      } else {
        italic.value = newValue;
      }
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
<style lang="scss" scoped></style>
