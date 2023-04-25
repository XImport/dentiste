<template>
  <v-container>
    <v-row>
      <v-col md="4" v-for="(card, index) in Cards" :key="index">
        <v-card>
          <v-card-title class="text-center">
            <h2>{{ card.title }}</h2>
            <p class="display-1 cyan--text">${{ card.price }}</p>
          </v-card-title>
          <v-card-text>
            <ul v-for="(item, index) in card.pack" :key="index">
              <li>{{ item.text }}</li>
            </ul>
          </v-card-text>
          <v-card-actions>
            <v-btn block color="primary">More Info</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PricingCards",
  data: () => ({
    Cards: [
      {
        title: "Basic Cleaning",
        price: "75-200$",
        pack: [
          { text: "Prevents gum disease and tooth decay." },
          { text: "Removes surface stains and tartar buildup." },
          { text: "Helps maintain fresh breath and a healthy smile." },
        ],
      },
      {
        title: "Deep Cleaning",
        price: "200-400$",
        pack: [
          { text: "Helps treat gum disease and prevent tooth loss." },
          {
            text: "Removes buildup of bacteria and debris below the gum line.",
          },
          {
            text: "Promotes overall oral health and can prevent more serious dental issues.",
          },
        ],
      },
      {
        title: "Extra Package",
        price: "1500-3000$",
        pack: [
          {
            text: "Replaces missing teeth with a natural-looking tooth.",
          },
          { text: "Helps prevent bone loss and maintain proper oral health." },
          { text: "Provides a permanent solution for missing teeth." },
        ],
      },
    ],
  }),
};
</script>

<style scoped>
.v-card {
  padding: 50px;
}
</style>
