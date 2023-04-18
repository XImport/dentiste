<template>
  <v-container class="justify-center align-center">
    <v-row class="justify-center align-center">
      <v-col
        v-for="(service, index) in services"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-img :src="service.image" height="200px" contain></v-img>
          <v-card-title class="justify-center">{{
            service.title
          }}</v-card-title>
          <v-card-text class="text-center">{{
            service.description
          }}</v-card-text>
          <v-card-actions class="justify-center">
            <v-btn text color="primary" :href="service.link">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Présentation",
          description:
            "Sur notre site internet, vous trouverez,une présentation de votre praticien,qui est à votre disposition.",
          image:
            "https://dentiste-mohammedia-dr-fouhami.com/sites/S_B2YIMZAVNRFS3PEHXUQAG6ISEI/files/1/icon-bienvenue1.svg",
          link: "#",
        },
        {
          title: "Esthétique",
          description:
            "Découvrez les explications sur l'esthétique du sourire, l'hygiène dentaire,découvrez les vidéos...",
          image:
            "https://dentiste-mohammedia-dr-fouhami.com/sites/S_B2YIMZAVNRFS3PEHXUQAG6ISEI/files/1/icon-implant-grey.svg",
          link: "#",
        },
        {
          title: "Contact",
          description:
            "Pour connaître les horaires d'ouvertures, les informations pratiques ou nous contacter",
          image:
            "https://dentiste-mohammedia-dr-fouhami.com/sites/S_B2YIMZAVNRFS3PEHXUQAG6ISEI/files/1/icon-pratiquegrey2.svg",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
</style>
