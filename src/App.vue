<template>
  <div class="overflow-hidden h-screen flex flex-col sm:flex-row">
    <div
      id="nav"
      class="sticky z-50 top-0 left-0 flex-shrink-0 h-12 w-screen border-b flex-row space-x-3 sm:h-screen sm:w-64 sm:border-r border-default-blue flex sm:flex-col items-center justify-center sm:space-y-10"
    >
      <router-link to="/">HOME</router-link>
      <router-link to="/try">TRY IT</router-link>
      <router-link to="/archive">ARCHIVE</router-link>
    </div>
    <div class="flex flex-col sm:flex-row flex-grow overflow-auto">
      <div
        class="sticky sm:hidden z-40 top-0 left-0 flex-shrink-0 h-12 w-screen bg-white"
      ></div>
      <router-view class="flex-grow" />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Weather", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("~@/assets/background.png");
  background-repeat: no-repeat;
  background-position: 0% 100%;
  background-size: 100% 50%;
}

@font-face {
  font-family: "Weather";
  src: url("~@/assets/fonts/WeatherDoubleUnicodeVF.ttf")
    format("truetype-variations");
}

#nav {
  a {
    @apply text-lg py-px px-3 text-default-blue bg-transparent;
    font-variation-settings: "wght" 30, "ital" 10, "opsz" 100;

    &.router-link-exact-active {
      @apply bg-default-blue text-white;
    }
  }
}
</style>
