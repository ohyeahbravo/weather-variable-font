<template>
  <div class="slider-container">
    <input
      class="slider"
      :id="field"
      type="range"
      :name="field"
      v-model="value"
      min="0"
      max="100"
      step="1"
    />
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";

export default {
  name: "Slider",
  props: {
    field: String,
    variable: String,
    defaultValue: String,
  },
  emits: ["valueChanged"],
  setup(props, { emit }) {
    const value = ref(props.defaultValue);

    onMounted(() => {
      document.querySelector(".slider").classList.add(props.field);
    });
    watch(value, (newValue) => {
      emit("valueChanged", props.variable, newValue);
    });

    return {
      value,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slider-container {
  @apply relative max-w-full;
}

.slider {
  -webkit-appearance: none;
  @apply w-full appearance-none h-1 bg-gray-200;
}

.slider#humidity {
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    @apply appearance-none w-5 h-5 cursor-pointer;
    background: url("~@/assets/icons/humidity.svg") no-repeat center;
  }
  &::-moz-range-thumb {
    @apply w-5 h-5 cursor-pointer;
    background: url("~@/assets/icons/humidity.svg") no-repeat center;
  }
}

.slider#temperature {
  @apply text-green-500;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    @apply appearance-none w-5 h-5 cursor-pointer;
    background: url("~@/assets/icons/temperature.svg") no-repeat center;
  }
  &::-moz-range-thumb {
    @apply w-5 h-5 cursor-pointer;
    background: url("~@/assets/icons/temperature.svg") no-repeat center;
  }
}

.slider#wind {
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    @apply appearance-none w-5 h-5 cursor-pointer;
    background: url("~@/assets/icons/wind.svg") no-repeat center;
  }
  &::-moz-range-thumb {
    @apply w-5 h-5 cursor-pointer;
    background: url("~@/assets/icons/wind.svg") no-repeat center;
  }
}

svg {
  @apply stroke-current text-green-500;
}
</style>
