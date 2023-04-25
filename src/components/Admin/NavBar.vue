<template>
  <div>
    <v-app-bar app color="transparent" elevation="0">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="white--text"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">Admin DashBoard</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      app
      v-model="drawer"
      color="indigo darken-1 white--text"
    >
      <v-list>
        <v-list-item v-for="(item, index) in links" :key="index" :to="item.to">
          <v-list-item-action>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              item.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      {
        text: "Rendez Vous",
        icon: "mdi-calendar-edit",
        to: "/admin/dashboard",
      },
      {
        text: "Rendez Vous Valide",
        icon: "mdi-calendar-check",
        to: "/admin/Valide",
      },
      {
        text: "Rendez Vous Non Valide",
        icon: "mdi-calendar-remove",
        to: "/admin/NonValide",
      },
    ],
  }),
};
</script>
