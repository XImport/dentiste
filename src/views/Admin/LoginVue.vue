<template>
  <v-app>
    <v-container fluid pa-0 class="bg--svg--img">
      <v-row align="center" justify="center" style="height: 100vh" dense>
        <v-col
          cols="12"
          lg="6"
          md="6"
          class="transparent lighten-2 d-flex flex-column justify-center align-center pa-12"
        >
          <v-card class="elevation-12 pa-6 max--width" max-width="800">
            <v-card-title class="text-center justify-center"
              >Dentiste Login Pannel</v-card-title
            >
            <v-form @submit.prevent="login">
              <v-container class="v-container2">
                <v-text-field
                  label="Email"
                  v-model="email"
                  type="email"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Password"
                  v-model="password"
                  type="password"
                  outlined
                  required
                ></v-text-field>
                <v-card-text
                  class="d-flex align-center justify-center h-100 pl-12 pr-12"
                >
                  <v-btn
                    color="primary"
                    class="pl-12 pr-12"
                    @click="console.log('yey')"
                  >
                    Login
                  </v-btn>
                </v-card-text>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // handle login logic here
    },
  },
};
</script>

<style scoped>
.max--width {
  width: 800px !important;
}
.bg--svg--img {
  background-image: url("../../assets/Animated\ Shape.svg");
}
.v-container2 {
  max-width: 70%;
}

@media screen and (max-width: 600px) {
  .max--width {
    width: 400px !important;
  }
  .v-container2 {
    max-width: 100%;
  }
}
</style>
