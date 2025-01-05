import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router';

export const authGuard = async (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric,
  next: NavigationGuardNext,
) => {
  const token = localStorage.getItem('token');
  localStorage.setItem('lastPath', to.path);

  if (!token) {
    next({ replace: true, name: 'login' });
  }

  next();
};
