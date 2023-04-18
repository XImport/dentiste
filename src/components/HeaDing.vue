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
          title: "Web Development",
          description:
            "We create custom websites that are responsive and user-friendly.",
          image:
            "https://dentiste-mohammedia-dr-fouhami.com/sites/S_B2YIMZAVNRFS3PEHXUQAG6ISEI/files/1/icon-bienvenue1.svg",
          link: "#",
        },
        {
          title: "Mobile App Development",
          description:
            "We develop mobile apps for iOS and Android platforms that are both intuitive and functional.",
          image:
            "https://dentiste-mohammedia-dr-fouhami.com/sites/S_B2YIMZAVNRFS3PEHXUQAG6ISEI/files/1/icon-implant-grey.svg",
          link: "#",
        },
        {
          title: "UI/UX Design",
          description:
            "We design interfaces that are visually appealing and easy to navigate for an enhanced user experience.",
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
