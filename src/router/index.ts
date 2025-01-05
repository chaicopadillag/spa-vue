import { authGuard } from '@/modules/auth/guards/auth.guard';
import NotFoundPage from '@/modules/common/pages/NotFoundPage.vue';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const navAuthRoutes: RouteRecordRaw[] = [
  {
    path: 'login',
    name: 'login',
    component: () => import('@/modules/auth/pages/LoginPage.vue'),
  },
  {
    path: 'register',
    name: 'register',
    component: () => import('@/modules/auth/pages/RegisterPage.vue'),
  },
];

const linkRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/features',
    name: 'features',
    component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('@/modules/landing/pages/PricingPage.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/modules/landing/pages/ContactPage.vue'),
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon',
    beforeEnter: [authGuard],
    props: (route) => {
      const { id = '1' } = route.params as { id: string };

      const idParse = isNaN(+id) ? 1 : Number(route.params.id);

      return { id: idParse };
    },
    component: () => import('@/modules/pokemon/pages/PokemonPage.vue'),
  },
  ...navAuthRoutes.map((route) => ({
    ...route,
    path: `/auth/${route.path}`,
  })),
];

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
    children: linkRoutes,
  },
  {
    path: '/auth',
    name: 'auth',
    redirect: { name: 'login' },
    component: () => import('@/modules/auth/layouts/AuthLoyout.vue'),
    children: navAuthRoutes,
  },

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export const navLinkRoutes = linkRoutes.map((route) => ({
  name: route.name,
  path: route.path.replace(':id', '1'),
}));
