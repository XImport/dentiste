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
      <PricingCards />
    </div>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Carousel from "../components/CarouSel.vue";
import PricingCards from "../components/PricingCards.vue";
import Heading from "../components/HeaDing.vue";
export default {
  name: "HomePage",

  components: {
    NavBar,
    Carousel,
    PricingCards,
    Heading,
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
</style>
