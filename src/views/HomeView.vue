<template>
  <v-app>
    <NavBar />

    <div>
      <Carousel />
    </div>

    <div>
      <div class="text-h2 text-center pa-12">Prendre Rendez-Vous</div>
      <v-container class="max-width">
        <Heading />
      </v-container>
    </div>

    <div>
      <div class="text-h2 text-center pa-12">Notre Tarification</div>
      <v-container class="max-width2">
        <PricingCards />
      </v-container>
    </div>
    <div>
      <div class="text-h2 text-center pa-12">Contactez-nous</div>
      <v-container class="max-width">
        <Contact />
      </v-container>
    </div>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Carousel from "../components/CarouSel.vue";
import PricingCards from "../components/PricingCards.vue";
import Heading from "../components/HeaDing.vue";
import Contact from "../components/ContactSection.vue";
export default {
  name: "HomePage",

  components: {
    NavBar,
    Carousel,
    PricingCards,
    Heading,
    Contact,
  },
};
</script>
<style scoped>
.v-carousel {
  margin-top: -5%;
}

.max-width {
  max-width: 60%;
}

.max-width2 {
  max-width: 70%;
}
</style>
