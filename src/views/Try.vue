<template>
  <div class="w-full py-10 px-32 flex flex-col items-center space-y-10 font-mono">
    <div class="flex flex-row space-x-10 items-center justify-center">
      <div class="flex flex-row space-x-3 items-center justify-center">
        <img class="weather-icon" src="../assets/icons/temperature.svg" alt="temperature" />
        <span>12 °C</span>
        </div>
        <div class="flex flex-row space-x-2 items-center justify-center">
        <img class="weather-icon" src="../assets/icons/humidity.svg" alt="humidity" />
        <span>40 %</span>
        </div>
        <div class="flex flex-row space-x-2 items-center justify-center">
        <img class="weather-icon" src="../assets/icons/wind.svg" alt="wind" />
        <span>8 mph </span>
        </div>
      </div>
    <h1>How do you feel today?</h1>
    <textarea id="try-box" class="w-full transition delay-150 duration-300 ease-in-out border-2 border-gray-700 focus:border-gray-200 focus:ring focus:ring-red-300 rounded leading-relaxed h-96 py-4 px-5"></textarea>
  </div>
</template>

<script>
export default {
  name: " Try",
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>
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

#try-box {
  font-family: "Cabin Italic", Avenir, Helvetica, Arial, sans-serif;
  transition: font-variation-settings 0.3s ease;
  font-variation-settings: "wght" 600, "wdth" 100;
}

#try-box.italic {
  font-family: "Cabin Italic", Avenir, Helvetica, Arial, sans-serif;
}

.weather-icon {
  @apply w-6 h-6;
}

</style>