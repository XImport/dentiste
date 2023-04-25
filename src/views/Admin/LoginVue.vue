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
          <v-card
            class="elevation-12 pa-6 max--width rounded-xl"
            max-width="800"
          >
            <v-card-title class="text-center justify-center"
              >Admin Login Pannel</v-card-title
            >

            <v-form @submit.prevent="login">
              <v-container class="v-container2">
                <v-alert dense text type="success" v-if="successAlert">
                  Welcome Dr.<strong>Hamza</strong>
                </v-alert>
                <v-alert dense text type="error" v-if="errorAlert">
                  Error<strong> Username</strong> or <strong>Password</strong>
                </v-alert>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Password"
                  v-model="password"
                  outlined
                  required
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  @click:append="show = !show"
                ></v-text-field>
                <v-card-text
                  class="d-flex align-center justify-center h-100 pl-12 pr-12"
                >
                  <v-btn color="primary" class="pl-12 pr-12" @click="login()">
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
      successAlert: false,
      errorAlert: false,
      show: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    login() {
      console.log("hello");
      console.log(this.email);
      if (this.email === "hamzanwn99@gmail.com" && this.password === "123456") {
        this.errorAlert = false;
        this.successAlert = true;
        this.password = "";
        setTimeout(() => {
          this.$router.push("/admin/dashboard");
        }, 1000);
      } else {
        this.successAlert = false;
        this.errorAlert = true;
        this.email = "";
        this.password = "";
      }
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
