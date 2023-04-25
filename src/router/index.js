import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CabinerView from "../views/CabinetView";
import PricePlan from "../views/PrestationView.vue";
import ContactView from "../views/ContactView.vue";
import LoginAdmin from "../views/Admin/LoginVue.vue";
import DashBoard from "../views/Admin/DashBoardVue.vue";
import Oppontmentvalide from "../views/Admin/ValideView.vue";
import OppontmentNonvalide from "../views/Admin/NonValideVue.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cabiner",
    name: "cabiner",
    component: CabinerView,
  },
  {
    path: "/prestation",
    name: "Plan",
    component: PricePlan,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/admin/login",
    name: "Login",
    component: LoginAdmin,
  },
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: DashBoard,
  },
  {
    path: "/admin/Valide",
    name: "Valide",
    component: Oppontmentvalide,
  },
  {
    path: "/admin/NonValide",
    name: "NonValide",
    component: OppontmentNonvalide,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
