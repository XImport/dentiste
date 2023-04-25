<template>
  <v-app>
    <NavBarAdmin />

    <v-main class="bg--img--svg">
      <v-container>
        <div class="text-h2 text-center pa-12 white--text">
          Redez Vous Non valide
        </div>

        <v-container>
          <ValideTable :getdata="this.$store.getters.getNonValide" />
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
    return {};
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
