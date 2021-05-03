<template>
  <div
    id="nav"
    class="fixed top-0 left-0 flex-shrink-0 h-screen w-72 bg-gray-100 flex flex-col items-center justify-center space-y-10"
  >
    <router-link to="/">Home</router-link>
    <router-link to="/try">Try It</router-link>
    <router-link to="/archive">Archive</router-link>
  </div>
  <div class="flex flex-row">
    <div class="flex-shrink-0 h-screen w-72 bg-transparent"></div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    @apply font-bold text-lg text-black p-3 bg-transparent font-mono;

    &.router-link-exact-active {
      @apply bg-black text-gray-100;
    }
  }
}
</style>
