import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import AboutUs from "../components/AboutUs.vue";
import OurCustomers from "../components/OurCustomers.vue";
import OurServices from "../components/OurServices.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/our-customers",
    name: "OurCustomers",
    component: OurCustomers,
  },
  {
    path: "/our-services",
    name: "OurServices",
    component: OurServices,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;