<template>
  <v-app>
    <NavBar />
    <div>
      <v-lazy
        :min-height="200"
        :options="{ threshold: 0.5 }"
        transition="fade-transition"
      >
        <HeadingColor
          :imagePath="Image"
          :Title="Title"
          :Subtitle="Subtitle"
          :MainTitle="MainTitle"
        />
      </v-lazy>
    </div>
    <div>
      <div class="text-h2 text-center pb-6">Notre Tarification</div>
      <v-container class="max-width2">
        <PricingCards />
      </v-container>
    </div>

    <div class="mt-12 pt-12">
      <FooTer />
    </div>
    <!-- <div class="mt-12 pt-12">
      <FooTer />
    </div> -->
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import HeadingColor from "@/components/HeadingColor.vue";
import PricingCards from "../components/PricingCards.vue";

import FooTer from "../components/FootTer.vue";
// import FooTer from "../components/FootTer.vue";
export default {
  name: "CabinetPage",

  components: {
    NavBar,
    HeadingColor,
    PricingCards,
    FooTer,
    // FooTer,
  },
  data() {
    return {
      Image: "https://i.imgur.com/ahfQK9Y.png",
      Title: " intègre et à l'écoute de vos besoins",
      Subtitle: "  Devenir une référence mondiale de la chirurgie dentaire",
      MainTitle: "Trafication Du Cabinet",
    };
  },
};
</script>
<style scoped>
.v-carousel {
  margin-top: -5%;
}
.max-width {
  max-width: 70%;
}
@media screen and (max-width: 600px) {
  .v-carousel {
    margin-top: -25%;
  }
  .max-width2 {
    max-width: 100%;
  }
  .max-width {
    max-width: 100%;
  }
}
</style>
