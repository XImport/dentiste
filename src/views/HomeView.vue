<template>
  <v-app>
    <NavBar />
    <div>
      <v-lazy
        :min-height="200"
        :options="{ threshold: 0.5 }"
        transition="fade-transition"
      >
        <Carousel />
      </v-lazy>
    </div>
    <div>
      <div class="text-h2 text-center pa-12">Prendre Rendez-Vous</div>
      <v-container class="max-width">
        <v-lazy
          :min-height="200"
          :options="{ threshold: 0.5 }"
          transition="fade-transition"
        >
          <Heading />
        </v-lazy>
      </v-container>
    </div>
    <div>
      <div class="text-h2 text-center pb-6 pt-12">Notre Tarification</div>
      <v-container class="max-width2">
        <PricingCards />
      </v-container>
    </div>
    <div>
      <div class="text-h2 text-center pb-6 text--custom pt-12">
        Contactez-nous
      </div>
      <v-container class="max-width">
        <v-lazy
          :min-height="200"
          :options="{ threshold: 0.5 }"
          transition="fade-transition"
        >
          <Contact />
        </v-lazy>
      </v-container>
    </div>

    <div>
      <div class="text-h2 pb-6 text-center mt-9 text--custom pt-12">
        Transformez votre sourire
      </div>
      <v-container class="max-width pt-6">
        <v-lazy
          :min-height="200"
          :options="{ threshold: 0.5 }"
          transition="fade-transition"
        >
          <SlickCarousel />
        </v-lazy>
      </v-container>
    </div>

    <div>
      <div class="text-h2 pb-6 text-center mt-12">Notre Localisation</div>
      <v-container class="max-width pt-12">
        <MapLocation />
      </v-container>
    </div>
    <div class="mt-12 pt-12">
      <FooTer />
    </div>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Carousel from "../components/CarouSel.vue";
import PricingCards from "../components/PricingCards.vue";
import Heading from "../components/HeaDing.vue";
import Contact from "../components/ContactSection.vue";
import SlickCarousel from "../components/MiniCarousel.vue";
import MapLocation from "../components/MapLocation.vue";
import FooTer from "../components/FootTer.vue";
export default {
  name: "HomePage",

  components: {
    NavBar,
    Carousel,
    PricingCards,
    Heading,
    Contact,
    SlickCarousel,
    MapLocation,
    FooTer,
  },
};
</script>
<style scoped>
.v-carousel {
  margin-top: -10%;
}

.max-width {
  max-width: 70%;
}

.max-width2 {
  max-width: 80%;
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
  .text--custom {
    font-size: 3rem !important;
  }
}
</style>
