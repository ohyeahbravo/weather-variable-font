<template>
  <div class="flex flex-row w-full h-height">
    <div class="w-full h-full py-16 pl-24 flex flex-col items-start space-y-10">
      <h1 id="try-header">HOW DO YOU FEEL TODAY</h1>
      <textarea id="try-box"></textarea>
    </div>
    <div
      class="flex flex-col h-full w-96 mx-20 py-16 justify-between items-center"
    >
      <div id="weather-box" class="border grid gap-4 p-5 border-default-blue">
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
        <span class="weather-value"> {{ location }} </span>
        <img
          class="weather-icon"
          src="../assets/icons/temperature.svg"
          alt="temperature"
        />
        <span class="weather-value fontnotready">{{ temp }} °C</span>
        <img
          class="weather-icon"
          src="../assets/icons/humidity.svg"
          alt="humidity"
        />
        <span class="weather-value fontnotready">{{ humidity }} %</span>
        <img class="weather-icon" src="../assets/icons/wind.svg" alt="wind" />
        <span class="weather-value fontnotready">{{ wind }} mph </span>
      </div>
      <button @click.prevent="openPrintSetting" id="print-button">
        PRINT IT
      </button>
    </div>
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
        location.value = "WEIMAR, GERMANY";
      }
    }

    // TODO: apply the style
    function openPrintSetting() {
      // const childWindow = window.open(
      //   "",
      //   "Print Weather Font",
      //   "location=yes, menubar=yes, toolbar=yes"
      // );
      // childWindow.document.open();
      // childWindow.document.write("<html><head></head><body>");
      // childWindow.document.write("</body></html>");
      // childWindow.document.write(
      //   '<html><head></head><body>'
      // );
      // childWindow.document.write("</body></html>");
      // childWindow.document.body.appendChild(
      //   childWindow.document.createElement("p")
      // );
      // childWindow.document.querySelector("body p:last-child").id = "print";
      // childWindow.document.querySelector(
      //   "#print"
      // ).style="color: blue; font-family: 'Weather', sans-serif;"
      // childWindow.document.querySelector(
      //   "#print"
      // ).innerHTML = document
      //   .getElementById("try-box")
      //   .value.replace(/\n/gi, "<br>");

      // childWindow.document.close();
      // childWindow.focus();
      // childWindow.print();


      // Get HTML to print from element
      const prtHtml = document.getElementById("try-box").value;

      // Get all stylesheets HTML
      let stylesHtml = "";
      for (const node of [
        ...document.querySelectorAll('link[rel="stylesheet"], style'),
      ]) {
        stylesHtml += node.outerHTML;
      }

      // Open the print window
      const WinPrint = window.open(
        "",
        "",
        "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
      );

      WinPrint.document.write(`<!DOCTYPE html>
<html>
  <head>
    ${stylesHtml}
  </head>
  <body>
  <p style="font-family: 'Weather'; font-variation-settings: 'wght' 30, 'ital' 10, 'opsz' 100;">
    ${prtHtml}
    </p>
  </body>
</html>`);

      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      // WinPrint.close();
    }

    getWeather();

    // TODO: change the interval if needed
    // setInterval(function () {
    //   getWeather();
    // }, 5000);

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
#try-box {
  font-family: "Weather", Avenir, Helvetica, Arial, sans-serif;
  transition: font-variation-settings 0.3s ease;
  font-variation-settings: "wght" 30, "ital" 10, "opsz" 100;
  @apply w-full transition delay-150 duration-300 ease-in-out border border-default-blue focus:outline-none rounded leading-relaxed h-full py-4 px-5;
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

.fontnotready {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  @apply font-semibold;
}

#print-button {
  @apply py-px px-2 w-max text-lg bg-transparent hover:bg-default-blue border border-default-blue hover:text-white text-default-blue;
  font-variation-settings: "wght" 40, "ital" 10, "opsz" 100;
}
</style>
