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
          <!-- <v-card-actions class="justify-center">
            <v-btn text color="primary" :href="service.link">Learn More</v-btn>
          </v-card-actions> -->
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
          title: "Whatsapp",
          description:
            "We create custom websites that are responsive and user-friendly.",
          image:
            "https://img.freepik.com/vecteurs-premium/concept-icone-whatsapp_23-2147897840.jpg?w=826",
          link: "#",
        },
        {
          title: "E-mail",
          description:
            "We develop mobile apps for iOS and Android platforms that are both intuitive and functional.",
          image:
            "https://img.freepik.com/vecteurs-premium/concept-enveloppe-courrier-electronique_34259-135.jpg?w=826",
          link: "#",
        },
        {
          title: "Phone",
          description:
            "We design interfaces that are visually appealing and easy to navigate for an enhanced user experience.",
          image:
            "https://img.freepik.com/vecteurs-libre/telephone_53876-25489.jpg?w=826&t=st=1681829131~exp=1681829731~hmac=649a02e6c155cb0cca371c89d5ca8b613dc3722bbb8e15878c4582636dedf394",
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
