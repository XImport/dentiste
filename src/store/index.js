import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    valide: [
      {
        prenom: "azami",
        nom: "mohamed",
        email: "azamimohamed@gmail.com",
        tele: "0604032123",
        date: "25-04-2023",
      },
      {
        prenom: "azami",
        nom: "youssra",
        email: "azamiyoussra@gmail.com",
        tele: "0604033223",
        date: "22-04-2023",
      },
      {
        prenom: "bskksli",
        nom: "meryem",
        email: "bakkaliymeryem@gmail.com",
        tele: "0604033223",
        date: "22-04-2023",
      },
    ],
    Nonvalide: [
      {
        prenom: "boulaiz",
        nom: "mohamed",
        email: "boulaizmohamed@gmail.com",
        tele: "0604032123",
        date: "25-04-2023",
      },
      {
        prenom: "Nouinou",
        nom: "youssef",
        email: "azamiyoussra@gmail.com",
        tele: "0604033223",
        date: "22-04-2023",
      },
      {
        prenom: "bouzin",
        nom: "abdessamad",
        email: "bakkaliymeryem@gmail.com",
        tele: "0604033223",
        date: "22-04-2023",
      },
    ],
  },
  getters: {
    getValide(state) {
      return state.valide;
    },
    getNonValide(state) {
      return state.Nonvalide;
    },
  },
  mutations: {
    Validate(state, payload) {
      state.valide.push(payload);
      // state.Nonvalide.splice(payload);
    },
    RemoveBeforeValidate(state, payload) {
      state.Nonvalide.splice(payload, 1);
      // state.Nonvalide.splice(payload);
    },
  },
  actions: {},
  modules: {},
});
