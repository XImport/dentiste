<template>
  <div>
    <v-app-bar
      app
      :color="isTransparent"
      elevation="0"
      class="pa-2 justify-center text-center"
    >
      <div class="d-flex align-right ml-12">
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="d-lg-none white--text"
        ></v-app-bar-nav-icon>
        <v-img
          alt="Vuetify Logo"
          :class="`shrink mr-2 ${Logo}`"
          contain
          src="../assets/tooth.png"
          transition="scale-transition"
          width="58"
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
      <div
        v-for="(btn, index) in NavButtons"
        :key="index"
        class="text-danger d-none d-lg-block"
      >
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
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../assets/tooth.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Welcome</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in NavButtons" :key="item.text" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
        // this.Logo = "carousel-image--Bg--Transparent";
        this.links = "white--text";
      } else {
        this.isTransparent = "transparent";
        // this.Logo = "carousel-image--Bg";
        this.links = "black--text";
      }
    },
  },
  data: () => ({
    isTransparent: "transparent",
    links: "black--text",
    Logo: "carousel-image",
    drawer: null,
    NavButtons: [
      {
        text: "Accueil",
        icon: "mdi-home",
      },
      {
        text: "Le Cabinet",
        icon: "mdi-greenhouse",
      },
      {
        text: "Nos Prestations",
        icon: "mdi-cast",
      },

      {
        text: "Contact",
        icon: "mdi-text-box-multiple-outline",
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

.carousel-image {
  margin-top: -16px;
  background-color: transparent;
}
</style>
