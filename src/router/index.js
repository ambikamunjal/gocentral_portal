import { createRouter, createWebHistory } from 'vue-router';
import Table from '../views/TableView.vue';

const routes = [
   {
      path: '/',
      name: 'home',
      component: Table,
   },
   {
      path: '/details',
      name: 'details',

      component: () => import('../views/DetailsView.vue'),
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
