<template>
  <div id="archive" class="w-full flex flex-start flex-wrap p-5">
    <div v-for="(datum, idx) in data" class="p-0 m-0" :key="idx">
      <!-- <img
        class="cursor-zoom-in"
        :src="photo.src"
        :alt="photo.alt"
        @click="enlarge"
      /> -->
      <p
        class="text-default-blue border whitespace-pre border-default-blue text-left"
        :style="{
          fontSize: datum.fontSize + 'px',
          fontVariationSettings:
            'wght ' +
            datum.wght +
            ', ital ' +
            datum.ital +
            ', opsz ' +
            datum.opsz,
          fontFamily: 'Weather',
          padding: '1rem 1.25rem',
        }"
      >
        {{ datum.content }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: " Archive",
  setup() {
    const data = ref([]);
    const archiveCount = localStorage.getItem("archiveCount");
    if (archiveCount) {
      for (let i = 1; i <= parseInt(archiveCount); i++) {
        data.value.push(JSON.parse(localStorage.getItem("archive" + i)));
      }
    }
    const photos = ref([]);
    let currentFullScreenImageIndex = ref(1);
    document.querySelector("#app").style.backgroundSize = "0% 0%";
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
      data,
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
#archive-old {
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
