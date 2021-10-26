<template>
  <div class="flex flex-col sm:flex-row w-full h-height">
    <div
      class="w-full h-full py-5 sm:py-16 px-5 sm:pl-24 flex flex-col items-start space-y-10"
    >
      <h1 id="try-header">HOW DO YOU FEEL TODAY</h1>
      <textarea id="try-box"></textarea>
    </div>
    <div
      class="flex flex-col h-full w-full mt-10 sm:w-96 sm:mx-20 sm:py-16 justify-between items-center"
    >
      <button
        @click.prevent="getWeather"
        class="focus:outline-none hover:bg-opacity-70 rounded-full h-14 w-11 mb-5 flex items-center justify-center bg-default-blue text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div class="flex flex-col h-full space-y-12 itesm-center">
        <div id="weather-box" class="border grid gap-2 p-5 border-default-blue">
          <svg
            class="weather-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>
          <div class="flex flex-col items-start">
            <span class="weather-value"> {{ location }} </span>
            <span class=""> {{ time }} </span>
          </div>
          <img
            class="weather-icon"
            src="../assets/icons/temperature.svg"
            alt="temperature"
          />
          <span class="weather-value">{{ temp }} °C</span>
          <img
            class="weather-icon"
            src="../assets/icons/humidity.svg"
            alt="humidity"
          />
          <span class="weather-value">{{ humidity }} %</span>
          <img class="weather-icon" src="../assets/icons/wind.svg" alt="wind" />
          <span class="weather-value">{{ wind }} mph </span>
        </div>
        <div
          id="alignment-setting"
          class="w-full sm:w-76 flex flex-row items-center justify-center space-x-2"
        >
          <div class="flex flex-row pt-2 items-center">
            <span class="inline" style="fontsize: 12pt">T</span>
            <span class="inline" style="fontsize: 8pt">T</span>
          </div>
          <Slider
            field="fontSize"
            variable="fontSize"
            :min="9"
            :max="100"
            :defaultValue="defaultFontSize"
            @valueChanged="fontSizeChanged"
          />
          <span class="w-5">{{ fontSize }}</span>
        </div>
      </div>
      <button
        @click.prevent="archive"
        class="focus:outline-none my-5"
        id="print-button"
      >
        ARCHIVE IT
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import openGeocoder from "node-open-geocoder";
import Slider from "@/components/Slider.vue";

export default {
  name: " Try",
  components: {
    Slider,
  },
  setup() {
    const api_key = process.env.VUE_APP_WEATHER_API_KEY;
    const humidity = ref(0);
    const temp = ref(0);
    const wind = ref(0);
    const location = ref("");
    const now = new Date();
    const defaultFontSize = ref("16");
    const fontSize = ref(defaultFontSize.value);
    // const time = ref(now.format("dd. MM yyyy").toLocaleString())
    const time = ref(new Intl.DateTimeFormat("en-US").format(now));
    document.querySelector("#app").style.backgroundSize = "0% 0%";
    function getPlaceName(coords) {
      openGeocoder()
        .reverse(coords.lon, coords.lat)
        .end((err, res) => {
          if (res) {
            location.value = (
              res.address.town +
              ", " +
              res.address.country
            ).toUpperCase();
          } else {
            console.log(err);
            location.value = "WEIMAR, GERMANY";
          }
        });
    }

    onMounted(() => {
      document.querySelector("#try-box").style.fontSize =
        defaultFontSize.value + "pt";
    });

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
              document.querySelector("#try-box").style.fontVariationSettings =
                '"wght" ' +
                humidity.value +
                ', "opsz" ' +
                temp.value +
                ', "ital" ' +
                wind.value;
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      } else {
        // set default location to weimar, germany
        location.value = "WEIMAR, GERMANY";
      }
    }

    // TODO: apply the style
    function archive() {
      // Get HTML to print from element
      const prtHtml = document.getElementById("try-box").value;
      const archive = {
        content: prtHtml,
        fontSize: fontSize.value,
        wght: humidity.value,
        ital: wind.value,
        opsz: temp.value,
      };
      let archiveCount = localStorage.getItem("archiveCount");
      if (archiveCount) {
        archiveCount = (parseInt(archiveCount) + 1).toString();
      } else {
        archiveCount = "1";
      }
      localStorage.setItem("archiveCount", archiveCount);
      localStorage.setItem("archive" + archiveCount, JSON.stringify(archive));
      // console.log(JSON.parse(localStorage.getItem('archive'+archiveCount)))
      // Get all stylesheets HTML
      //       let stylesHtml = "";
      //       for (const node of [
      //         ...document.querySelectorAll('link[rel="stylesheet"], style'),
      //       ]) {
      //         stylesHtml += node.outerHTML;
      //       }
      //       // Open the print window
      //       const WinPrint = window.open(
      //         "",
      //         "",
      //         "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
      //       );
      //       WinPrint.document.write(`<!DOCTYPE html>
      // <html>
      //   <head>
      //     ${stylesHtml}
      //   </head>
      //   <body>
      //   <p style="padding: 1rem 1.25rem; color: rgb(0, 0, 255); font-size: ${fontSize.value}px; font-family: 'Weather'; font-variation-settings: 'wght' ${humidity.value}, 'ital' ${wind.value}, 'opsz' ${temp.value};">
      //     ${prtHtml}
      //     </p>
      //   </body>
      // </html>`);
      //       WinPrint.document.close();
      //         WinPrint.focus();
      // WinPrint.print();
    }

    getWeather();

    function fontSizeChanged(_, newValue) {
      document.querySelector("#try-box").style.fontSize = newValue + "pt";
      fontSize.value = newValue;
    }

    // TODO: change the interval if needed
    // setInterval(function () {
    //   getWeather();
    // }, 5000);

    return {
      location,
      time,
      humidity,
      wind,
      temp,
      archive,
      defaultFontSize,
      fontSizeChanged,
      fontSize,
      getWeather,
    };
  },
};
</script>

<style lang="scss" scoped>
#try-box {
  font-family: "Weather", Avenir, Helvetica, Arial, sans-serif;
  transition: font-variation-settings 0.3s ease;
  @apply w-full text-default-blue border border-default-blue focus:outline-none rounded leading-relaxed h-full py-4 px-5;
}

#weather-box {
  font-family: "Weather", Avenir, Helvetica, Arial, sans-serif;
  transition: font-variation-settings 0.3s ease;
  font-variation-settings: "wght" 40, "ital" 10, "opsz" 100;
  grid-template-columns: 24px 1fr;
  @apply text-default-blue;
}

#try-header {
  @apply text-3xl text-default-blue;
  font-variation-settings: "wght" 30, "ital" 10, "opsz" 100;
  font-family: "Weather", Avenir, Helvetica, Arial, sans-serif;
}

.weather-icon {
  @apply w-5 h-5;
  justify-self: end;
}

.weather-value {
  justify-self: start;
}
#alignment-setting {
  font-family: "Weather", Avenir, Helvetica, Arial, sans-serif;
  font-variation-settings: "wght" 40, "ital" 10, "opsz" 100;
  @apply text-default-blue;
}
#print-button {
  @apply py-px px-2 w-max text-lg bg-transparent hover:bg-default-blue border border-default-blue hover:text-white text-default-blue;
  font-variation-settings: "wght" 40, "ital" 10, "opsz" 100;
}
</style>
