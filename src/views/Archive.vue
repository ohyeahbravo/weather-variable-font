<template>
  <div id="archive" class="w-full">
    <li v-for="(photo, idx) in photos" :key="idx">
      <img :src="photo.src" :alt="photo.alt" />
    </li>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: " Archive",
  setup() {
    const photos = ref([]);
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
    return {
      photos,
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
