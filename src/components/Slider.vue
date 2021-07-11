<template>
  <div class="relative max-w-full">
    <input
      class="slider"
      :id="field"
      type="range"
      :name="field"
      v-model="value"
      :min="min"
      :max="max"
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
    min: Number,
    max: Number,
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
.slider {
  -webkit-appearance: none;
  @apply w-full appearance-none bg-default-blue z-10;
  height: 0.75pt;
}

.slider#humidity {
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    @apply appearance-none w-5 h-5 cursor-pointer z-20;
    background: url("~@/assets/icons/humidity_new.svg") no-repeat center;
  }
  &::-moz-range-thumb {
    @apply w-5 h-5 cursor-pointer;
    background: url("~@/assets/icons/humidity_new.svg") no-repeat center;
  }
}

.slider#temperature {
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    @apply appearance-none w-5 h-5 cursor-pointer z-20;
    background: url("~@/assets/icons/temperature_new.svg") no-repeat center;
  }
  &::-moz-range-thumb {
    @apply w-5 h-5 cursor-pointer;
    background: url("~@/assets/icons/temperature_new.svg") no-repeat center;
  }
}

.slider#wind {
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    @apply appearance-none w-5 h-5 cursor-pointer z-20 border-2;
    background: url("~@/assets/icons/wind_new.svg") no-repeat center;
  }
  &::-moz-range-thumb {
    @apply w-5 h-5 cursor-pointer;
    background: url("~@/assets/icons/wind_new.svg") no-repeat center;
  }
}

.slider#fontSize {
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    @apply appearance-none w-4 h-4 cursor-pointer z-20 border-2 rounded-full bg-default-blue;
  }
  &::-moz-range-thumb {
    @apply w-4 h-4 cursor-pointer rounded-full bg-default-blue;
  }
}
</style>
