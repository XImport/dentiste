<template>
  <v-app>
    <NavBarAdmin />

    <v-main class="bg--img--svg">
      <v-container>
        <div class="text-h2 text-center pa-12 white--text">
          Welcome To Your Admin Pannel
        </div>

        <v-container>
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
                max-width="344"
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
                </v-list-item-content>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBarAdmin from "../../components/Admin/NavBar.vue";
export default {
  data: () => ({
    drawer: false,
    Cards: [
      {
        title: "Total des Rendez Vous",
        Number: 100,
        class: "indigo darken-1 white--text",
      },
      {
        title: "Rendez Vous Valide",
        Number: 50,
        class: "teal darken-2 white--text",
      },
      {
        title: "Rendez Vous Non Valide",
        Number: 50,
        class: "orange accent-2 white--text",
      },
    ],
  }),
  components: {
    NavBarAdmin,
  },
};
</script>

<style>
.bg--img--svg {
  background-image: url("../../assets/Polygon\ Luminary.svg");
}
</style>
