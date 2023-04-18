<template>
  <div>
    <v-app-bar app color="transparent" elevation="0">
      <div class="d-flex align-right ml-12">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 carousel-image"
          contain
          src="../assets/pngtree-dental-care-logo-icon-design-template-vector-png-image_4013431-removebg-preview.png"
          transition="scale-transition"
          width="150"
        />
      </div>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div v-for="(btn, index) in NavButtons" :key="index" class="text-danger">
        <v-btn class="links-nav" target="_blank" text>
          <span class="mr-2">{{ btn.text }}</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    NavButtons: [
      {
        text: "Accueil",
      },
      {
        text: "Le Cabinet",
      },
      {
        text: "Nos Prestations",
      },

      {
        text: "Contact",
      },
    ],
  }),
};
</script>

<style scoped>
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: rgb(238, 238, 238);
}
</style>
