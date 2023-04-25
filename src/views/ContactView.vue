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
      <div class="text-h2 text-center pa-12">
        Vous Pouvez Nous Contacter Sur
      </div>
      <v-container class="max-width2">
        <Contact />
      </v-container>
    </div>

    <div>
      <div class="text-h2 text-center pa-12 blue--text">OU</div>
    </div>

    <div>
      <div class="text-h2 text-center pa-12">Prenez Vous Rendez-Vous</div>
      <v-container class="max-width2">
        <ContactForm />
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
import Contact from "../components/ContactSection.vue";
import ContactForm from "@/components/ContactForm.vue";
import FooTer from "../components/FootTer.vue";
// import FooTer from "../components/FootTer.vue";
export default {
  name: "CabinetPage",

  components: {
    NavBar,
    HeadingColor,
    Contact,
    FooTer,
    ContactForm,
    // FooTer,
  },
  data() {
    return {
      Image: "https://i.imgur.com/Pm7YA9m.jpeg",
      Title: " intègre et à l'écoute de vos besoins",
      Subtitle: "  Devenir une référence mondiale de la chirurgie dentaire",
      MainTitle: "Contacter Nous !!",
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
.max-width2 {
  max-width: 60%;
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
