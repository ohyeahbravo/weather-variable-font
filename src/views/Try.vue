<template>
  <div
    class="w-full py-10 px-32 flex flex-col items-center space-y-10 font-mono"
  >
    <div class="flex flex-row space-x-3 items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clip-rule="evenodd"
        />
      </svg>
      <span> {{ location }} </span>
    </div>
    <div class="flex flex-row space-x-10 items-center justify-center">
      <div class="flex flex-row space-x-3 items-center justify-center">
        <img
          class="weather-icon"
          src="../assets/icons/temperature.svg"
          alt="temperature"
        />
        <span>{{ temp }} °C</span>
      </div>
      <div class="flex flex-row space-x-2 items-center justify-center">
        <img
          class="weather-icon"
          src="../assets/icons/humidity.svg"
          alt="humidity"
        />
        <span>{{ humidity }} %</span>
      </div>
      <div class="flex flex-row space-x-2 items-center justify-center">
        <img class="weather-icon" src="../assets/icons/wind.svg" alt="wind" />
        <span>{{ wind }} mph </span>
      </div>
    </div>
    <h1>How do you feel today?</h1>
    <textarea
      id="try-box"
      class="w-full transition delay-150 duration-300 ease-in-out border-2 border-gray-700 focus:border-gray-200 focus:ring focus:ring-red-300 rounded leading-relaxed h-96 py-4 px-5"
    ></textarea>
    <button
      @click.prevent="openPrintSetting"
      class="p-3 bg-red-300 font-mono hover:bg-red-400 text-white"
    >
      Print
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import openGeocoder from "node-open-geocoder";

export default {
  name: " Try",
  setup() {
    const api_key = process.env.VUE_APP_WEATHER_API_KEY;
    const humidity = ref(0);
    const temp = ref(0);
    const wind = ref(0);
    const location = ref("");

    function getPlaceName(coords) {
      openGeocoder()
        .reverse(coords.lon, coords.lat)
        .end((err, res) => {
          if (res) {
            location.value = res.address.town + ', ' + res.address.country;
          } else {
            console.log(err);
            location.value = "Weimar, Germany";
          }
        });
    }

    function getWeather() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const coords = {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          };
          getPlaceName(coords);
          fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
              coords.lat +
              "&lon=" +
              coords.lon +
              "&appid=" +
              api_key
          )
            .then(function (resp) {
              return resp.json();
            }) // Convert data to json
            .then(function (data) {
              humidity.value = data.main.humidity;
              temp.value = Math.round(parseFloat(data.main.temp) - 273.15);
              wind.value = data.wind.speed;
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      } else {
        // set default location to weimar, germany
        location.value = "Weimar, Germany";
      }
    }

    function openPrintSetting() {
      console.log("open the print setting");
    }

    getWeather();

    // TODO: change the interval if needed
    setInterval(function () {
      getWeather();
    }, 5000);

    return {
      location,
      humidity,
      wind,
      temp,
      openPrintSetting,
    };
  },
};
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
