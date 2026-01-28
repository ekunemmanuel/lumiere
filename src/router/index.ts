import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PropertiesView from "../views/PropertiesView.vue";
import PropertyDetailView from "../views/PropertyDetailView.vue";
import JournalView from "../views/JournalView.vue";
import JournalDetailView from "../views/JournalDetailView.vue";
import AgentsView from "../views/AgentsView.vue";
import ContactView from "../views/ContactView.vue";
import CareersView from "../views/CareersView.vue";
import PrivacyView from "../views/PrivacyView.vue";
import TermsView from "../views/TermsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/about", name: "about", component: AboutView },
    { path: "/properties", name: "properties", component: PropertiesView },
    {
      path: "/properties/:id",
      name: "property-detail",
      component: PropertyDetailView,
    },
    { path: "/journal", name: "journal", component: JournalView },
    {
      path: "/journal/:id",
      name: "journal-detail",
      component: JournalDetailView,
    },
    { path: "/agents", name: "agents", component: AgentsView },
    { path: "/contact", name: "contact", component: ContactView },
    { path: "/careers", name: "careers", component: CareersView },
    { path: "/privacy", name: "privacy", component: PrivacyView },
    { path: "/terms", name: "terms", component: TermsView },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundView },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return savedPosition || { top: 0 };
  },
});

export default router;
