<template>
  <div id="archive" class="w-full">
    <li v-for="(photo, idx) in photos" :key="idx">
      <img
        class="cursor-zoom-in"
        :src="photo.src"
        :alt="photo.alt"
        @click="enlarge"
      />
    </li>
  </div>
  <div
    id="full-screen-image"
    class="hidden modal top-0 left-0 fixed w-full h-full bg-black bg-opacity-80"
  >
    <div
      class="flex flex-row justify-between items-center h-full p-5 text-white fixed w-full"
    >
      <button
        :disabled="currentFullScreenImageIndex == 1"
        @click.prevent="goToPrevImage"
        class="focus:outline-none hover:opacity-70 disabled:text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <img
        class="cursor-zoom-out max-w-3/5 max-h-4/5"
        :src="fullScreenImageSrc"
        @click="closeFullScreenImage"
      />
      <button
        :disabled="currentFullScreenImageIndex == photos.length"
        @click.prevent="goToNextImage"
        class="focus:outline-none hover:opacity-70 disabled:text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: " Archive",
  setup() {
    const photos = ref([]);
    let currentFullScreenImageIndex = ref(1);
    const fullScreenImageSrc = computed(() =>
      require(`../assets/images/${currentFullScreenImageIndex.value}.jpg`)
    );
    // function getRandomSize(min, max) {
    //   return Math.round(Math.random() * (max - min) + min);
    // }

    for (var i = 1; i < 12; i++) {
      //   var width = getRandomSize(200, 400);
      //   var height = getRandomSize(200, 400);
      photos.value.push({
        // src: `https://placekitten.com/${width}/${height}`,
        src: require(`../assets/images/${i}.jpg`),
        alt: `image-${i}`,
      });
    }

    function enlarge(e) {
      document.querySelector("#full-screen-image").classList.remove("hidden");
      currentFullScreenImageIndex.value = parseInt(
        e.target.alt.replace("image-", "")
      );
    }

    function closeFullScreenImage() {
      document.querySelector("#full-screen-image").classList.add("hidden");
    }

    function goToPrevImage() {
      currentFullScreenImageIndex.value--;
    }

    function goToNextImage() {
      currentFullScreenImageIndex.value++;
    }

    return {
      photos,
      fullScreenImageSrc,
      currentFullScreenImageIndex,
      enlarge,
      closeFullScreenImage,
      goToPrevImage,
      goToNextImage,
    };
  },
};
</script>

<style lang="scss" scoped>
li {
  @apply list-none;
}
#archive {
  /* Prevent vertical gaps */
  line-height: 0;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  -webkit-column-count: 3;
  -webkit-column-gap: 5px;
  -moz-column-count: 3;
  -moz-column-gap: 5px;
  column-count: 3;
  column-gap: 5px;
}

#archive img {
  /* Just in case there are inline attributes */
  width: 100% !important;
  height: auto !important;
  margin-bottom: 5px;
}

@media (max-width: 1200px) {
  #archive {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
}
@media (max-width: 1000px) {
  #archive {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
}
@media (max-width: 800px) {
  #archive {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}
@media (max-width: 400px) {
  #archive {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
}
</style>
