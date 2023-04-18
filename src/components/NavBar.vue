<template>
  <div>
    <v-app-bar app :color="isTransparent" elevation="0">
      <div class="d-flex align-right ml-12">
        <v-img
          alt="Vuetify Logo"
          :class="`shrink mr-2 ${Logo}`"
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
          <span :class="`mr-2 ${links}`">{{ btn.text }}</span>
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
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      if (window.scrollY > 400) {
        this.isTransparent = "blue darken-2";
        this.Logo = "carousel-image--Bg--Transparent";
        this.links = "white--text";
      } else {
        this.isTransparent = "transparent";
        this.Logo = "carousel-image--Bg";
        this.links = "black--text";
      }
    },
  },
  data: () => ({
    isTransparent: "transparent",
    links: "black--text",
    Logo: "carousel-image",
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
.carousel-image--Bg {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: rgb(238, 238, 238);
}
.carousel-image--Bg--Transparent {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: rgb(238, 238, 238, 0);
}

.nav-bg--on-Scroll {
  background-color: rgb(25, 118, 210);
}
</style>
