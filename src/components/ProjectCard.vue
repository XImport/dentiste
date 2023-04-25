<template>
  <v-container class="white">
    <v-row no-gutters>
      <v-col cols="12" sm="3" v-for="(post, index) in data" :key="index">
        <v-card class="pa-2 my-card">
          <v-img :src="post.img" height="200px" class="white--text my-image">
            <v-container fill-height fluid>
              <v-row align="center" justify="center">
                <v-col>
                  <v-card-title class="white--text justify-center my-title">
                    <span class="black pa-1 rounded-pill">
                      {{ post.title }}
                    </span>
                  </v-card-title>
                  <!-- <v-card-subtitle
                    class="white--text justify-center text-center my-text"
                  >
                    <p>Subtitle</p>
                  </v-card-subtitle> -->
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style lang="css" scoped>
.my-card {
  /* custom styles for the card */
  box-shadow: none !important;
}

.my-image {
  /* custom styles for the image */
  position: relative;
}
.my-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0.7;
}

.my-title {
  /* custom styles for the title */
  font-size: 24px;
  font-weight: bold;
  visibility: visible;
}

.my-text {
  /* custom styles for the text */
  font-size: 16px;
}
@media screen and (max-width: 600px) {
  .v-carousel {
    margin-top: -25%;
  }
  .max-width2 {
    max-width: 100%;
  }
  .max-width {
    max-width: 100%;
  }
}
</style>
