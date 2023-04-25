<template>
  <v-container>
    <v-card class="pa-4">
      <v-form ref="form" v-model="valid">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="firstName"
              :rules="nameRules"
              label="prénom "
              required
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="lastName"
              :rules="nameRules"
              label="Nom"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              required
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="phone"
              :rules="phoneRules"
              label="Numéro de téléphone"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              v-model="message"
              :rules="messageRules"
              label="Message"
              outlined
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" sm="2">
            <v-btn
              @click="submit"
              color="primary"
              :disabled="!valid"
              class="pl-12 pr-12 pt-4 pb-4"
            >
              Rendez-Vous
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      valid: false,
      nameRules: [(v) => !!v || "Name is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      phoneRules: [
        (value) => !!value || "Phone number is required",
        (value) =>
          /^[0-9]+$/.test(value) || "Phone number must only contain digits",
        (value) =>
          value.length >= 10 || "Phone number must be at least 10 digits",
        (value) =>
          value.length <= 20 || "Phone number cannot be more than 20 digits",
      ],
      messageRules: [(v) => !!v || "Message is required"],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        alert("Form submitted!");
      }
    },
  },
};
</script>

<style scoped>
/* Add custom styles here */
</style>
