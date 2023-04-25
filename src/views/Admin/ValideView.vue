<template>
  <v-app>
    <NavBarAdmin />

    <v-main class="bg--img--svg">
      <v-container>
        <div class="text-h2 text-center pa-12 white--text">
          Redez Vous deja valide
        </div>

        <v-container>
          <ValideTable :getdata="this.$store.getters.getValide" />
          <!-- // content goes here -->
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBarAdmin from "../../components/Admin/NavBar.vue";
import ValideTable from "../../components/Admin/TableData.vue";
export default {
  data() {
    return {
      headers: [
        {
          text: "Prenom",
          align: "start",
          sortable: false,
          value: "prenom",
        },
        { text: "Nom", value: "nom" },
        { text: "Email", value: "email" },
        { text: "Numero de Telephone", value: "tele" },
        { text: "date de rendez vous", value: "date" },
      ],
      data: [
        {
          prenom: "AZAMI",
          nom: "MAROUAN",
          email: "azamimarouan@gmail.com",
          tele: "0643235401",
          date: "22-04-2024",
        },
        {
          prenom: "AZAMI",
          nom: "MAROUAN",
          email: "azamimarouan@gmail.com",
          tele: "0643235401",
          date: "22-04-2024",
        },
        {
          prenom: "AZAMI",
          nom: "MAROUAN",
          email: "azamimarouan@gmail.com",
          tele: "0643235401",
          date: "22-04-2024",
        },
        {
          prenom: "AZAMI",
          nom: "MAROUAN",
          email: "azamimarouan@gmail.com",
          tele: "0643235401",
          date: "22-04-2024",
        },
      ],
    };
  },
  components: {
    NavBarAdmin,
    ValideTable,
  },
};
</script>

<style>
.bg--img--svg {
  background-image: url("../../assets/Polygon\ Luminary.svg");
}
</style>
