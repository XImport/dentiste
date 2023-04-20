<template>
  <v-carousel
    height="750"
    :cycle="false"
    :interval="3000"
    hide-delimiters
    show-arrows-on-hover
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(item, index) in items"
      :key="index"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <img :src="item.src" class="carousel-image" />
          <v-container class="text--carousel" v-if="item.multitext">
            <v-row>
              <v-col cols="4">
                <div class="text-p text--car">Une équipe attentionnée</div>
              </v-col>
              <v-col cols="4"></v-col>
              <v-col cols="4">
                <div class="text-p text--car">
                  intègre et à l'écoute de vos besoins
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6"></v-col>
              <v-col cols="6"></v-col>
            </v-row>
            <v-row>
              <v-col cols="12 mt-12 mx-auto">
                <div class="text-h5 text--car">
                  Nous tentons le plus possible d'adapter nos services
                </div>
              </v-col>
            </v-row>
          </v-container>
          <div class="text-h2 text--carousel">{{ item.text }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "CarouSel",

  data: () => ({
    items: [
      {
        src: "https://images.unsplash.com/photo-1564420228450-d9a5bc8d6565?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2013&q=80",
        text: "UN SERVICE PERSONNALISE",
        multitext: true,
      },
      // {
      //   src: "https://images.unsplash.com/photo-1620775997780-a01e050a9db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      //   text: "A Smile is the best makeup for any Girl can Wear",
      //   multitext: false,
      // },
      // {
      //   src: "https://img.freepik.com/photos-gratuite/belle-femme-dentiste-posant-souriant-sa-belle-patiente-allongee-fauteuil-dentaire-robe-rouge-violet_627829-9746.jpg?w=1380&t=st=1681815320~exp=1681815920~hmac=c5ed5824f83fd92fbd743497eedefd895382923eb71afb4e6b0a825a2515a911",
      //   text: "CHANGING LIVES ONE SMILE AT A TIME",
      //   multitext: false,
      // },
    ],
  }),
};
</script>

<style scoped>
/* .carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: rgb(218, 236, 250);
}

.text--carousel {
  margin-top: -500px;
  text-align: center;
  justify-content: center;
}
.text--car {
  max-width: max-content;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  background-color: rgb(212, 212, 212, 0.5);
  padding: 10px;
  border-radius: 50px;

} */

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: rgb(218, 236, 250);
}

.text--carousel {
  margin-top: -500px;
  text-align: center;
  justify-content: center;
}

.text--car {
  max-width: max-content;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  background-color: rgb(212, 212, 212, 0.5);
  padding: 10px;
  border-radius: 50px;
}

.v-sheet::before {
  margin-top: -10px;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  /* z-index: -1; */
}
</style>
