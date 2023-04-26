<template>
  <v-app>
    <NavBarAdmin />

    <v-main class="bg--img--svg">
      <v-container>
        <div class="text-h2 text-center pa-12 white--text">
          Welcome To Your Admin Pannel
        </div>

        <v-row class="justify-center align-center">
          <v-col
            v-for="(rende, index) in Cards"
            :key="index"
            cols="12"
            sm="6"
            md="3"
          >
            <v-card
              :class="`d-flex flex-row mx-auto pa-6 ${rende.class}`"
              max-width="750"
              outlined
            >
              <v-list-item-content>
                <v-list-item-title
                  :class="`text-h5 mb-1 text-center ${rende.class}`"
                >
                  {{ rende.title }}
                </v-list-item-title>
                <v-list-item-title class="text-h5 mb-1 text-center">
                  {{ rende.Number }}
                </v-list-item-title>
                <!-- <h1>{{ getValide.length }}</h1> -->
              </v-list-item-content>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBarAdmin from "../../components/Admin/NavBar.vue";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    drawer: false,
    Cards: [
      {
        title: "Total des Rendez Vous",
        Number: 0,
        class: "indigo darken-1 white--text",
      },
      {
        title: "Rendez Vous Valide",
        Number: 0,
        class: "teal darken-2 white--text",
      },
      {
        title: "Rendez Vous Non Valide",
        Number: 0,
        class: "orange accent-2 white--text",
      },
    ],
  }),
  components: {
    NavBarAdmin,
  },
  computed: {
    ...mapGetters(["getValide", "getNonValide"]),
  },

  mounted() {
    this.Cards[0].Number = this.getValide.length + this.getNonValide.length;
    this.Cards[1].Number = this.getValide.length;
    this.Cards[2].Number = this.getNonValide.length;
  },
};
</script>

<style>
.bg--img--svg {
  background-image: url("../../assets/Polygon\ Luminary.svg");
}
.container {
  max-width: 100%;
}
</style>
