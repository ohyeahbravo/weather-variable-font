<template>
  <div
    id="nav"
    class="fixed top-0 left-0 flex-shrink-0 h-screen w-64 bg-white border-r border-default-blue flex flex-col items-center space-y-10"
  >
    <router-link class="mt-36" to="/">HOME</router-link>
    <router-link to="/try">TRY IT</router-link>
    <router-link to="/archive">ARCHIVE</router-link>
  </div>
  <div class="flex flex-row">
    <div class="flex-shrink-0 h-screen w-64 bg-transparent"></div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Weather", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: "Weather";
  src: url("~@/assets/fonts/test2.ttf") format("truetype-variations");
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
