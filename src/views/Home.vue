<template>
  <div class="w-full flex flex-col space-y-12 items-center pt-36">
    <TextBox text="WEATHER" :opsz="opsz" :weight="weight" :italic="italic" />
    <div class="flex flex-col w-72 space-y-8">
      <Slider
        field="wind"
        variable="italic"
        :defaultValue="defaultItalic"
        @valueChanged="valueChanged"
      />
      <Slider
        field="humidity"
        variable="weight"
        :defaultValue="defaultWeight"
        @valueChanged="valueChanged"
      />
      <Slider
        field="temperature"
        variable="opsz"
        :defaultValue="defaultOpsz"
        @valueChanged="valueChanged"
      />
    </div>
    <p id="description">
      LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. ETENIM NEC
      IUSTITIA NEC AMICITIA ESSE OMNINO POTERUNT, NISI IPSAE PER SE EXPETUNTUR.
      MODO ETIAM PAULUM AD DEXTERAM DE VIA DECLINAVI, UT AD PERICLI SEPULCRUM
      ACCEDEREM. QUOD AUTEM PRINCIPIUM OFFICII QUAERUNT, MELIUS QUAM PYRRHO;
      ATQUE HIS DE REBUS ET SPLENDIDA EST EORUM ET ILLUSTRIS ORATIO. CONFERAM
      TECUM, QUAM CUIQUE VERSO REM SUBICIAS; DUO REGES: CONSTRUCTIO INTERRETE.
      QUOD AUTEM IN HOMINE PRAESTANTISSIMUM ATQUE OPTIMUM EST, ID DESERUIT. SUNT
      ENIM PRIMA ELEMENTA NATURAE, QUIBUS AUCTIS VíRTUTIS QUASI GERMEN
      EFFICITUR. QUI AUTEM VOLUPTATE VITAM EFFICI BEATAM PUTABIT, QUI SIBI IS
      CONVENIET, SI NEGABIT VOLUPTATEM CRESCERE LONGINQUITATE? NON EST ISTA,
      INQUAM, PISO, MAGNA DISSENSIO. COMPREHENSUM, QUOD COGNITUM NON HABET? HANC
      QUOQUE IUCUNDITATEM, SI VIS, TRANSFER IN ANIMUM;
    </p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import TextBox from "@/components/TextBox.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "Home",
  components: {
    TextBox,
    Slider,
  },
  setup() {
    const defaultWeight = ref("50");
    const defaultOpsz = ref("50");
    const defaultItalic = ref("50");

    const weight = ref(defaultWeight.value);
    const opsz = ref(defaultOpsz.value);
    const italic = ref(defaultItalic.value);

    onMounted(() => {
      changeDescriptionFont();
    });

    function valueChanged(variable, newValue) {
      if (variable === "weight") {
        weight.value = newValue;
      } else if (variable === "opsz") {
        opsz.value = newValue;
      } else {
        italic.value = newValue;
      }
      changeDescriptionFont();
    }

    function changeDescriptionFont() {
      document.querySelector("#description").style.fontVariationSettings =
        '"wght" ' +
        weight.value +
        ', "opsz" ' +
        opsz.value +
        ', "ital" ' +
        italic.value;
    }

    return {
      defaultWeight,
      defaultOpsz,
      defaultItalic,
      weight,
      opsz,
      italic,
      valueChanged,
    };
  },
};
</script>
<style scoped lang="scss">
#description {
  @apply w-3/4 md:w-1/2 lg:w-5/12 text-left text-sm pt-7 text-default-blue;
  transition: font-variation-settings 0.3s ease;
}
</style>
