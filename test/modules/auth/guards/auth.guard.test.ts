/* eslint-disable @typescript-eslint/no-explicit-any */
import { authGuard } from '@/modules/auth/guards/auth.guard';
import type { RouteLocationNormalizedGeneric } from 'vue-router';

describe('Auth Guard', () => {
  const to: RouteLocationNormalizedGeneric = {
    name: 'contact',
    params: {},
    matched: [],
    fullPath: '',
    query: {},
    hash: '',
    redirectedFrom: undefined,
    path: '/contact',
    meta: {},
  };

  const from: any = {};
  const next = vi.fn();

  // beforeEach(() => {
  //   localStorage.clear();
  // });

  it('should vue router guard', async () => {
    await authGuard(to, from, next);
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
    expect(next).toHaveBeenCalledWith({ replace: true, name: 'login' });
  });

  it('should called localStorage.setItem', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    await authGuard(to, from, next);
    expect(setItemSpy).toHaveBeenCalledWith('lastPath', '/contact');
  });

  it('should not call next when token is not present', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(Date.now().toString());
    await authGuard(to, from, next);
    expect(next).toHaveBeenCalledWith();
  });
});
