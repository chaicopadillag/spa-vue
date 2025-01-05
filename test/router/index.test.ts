/* eslint-disable @typescript-eslint/no-explicit-any */
import App from '@/App.vue';
import { router } from '@/router';
import { mount } from '@vue/test-utils';

describe('router vue', () => {
  let wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });

  beforeAll(() => {
    wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
  });

  it('should reder home page /', async () => {
    await router.push('/');
    await router.isReady();
    expect(wrapper.html()).toContain('Bienvenido a nuestro sitio web');
  });

  it('should reder about page /contact', async () => {
    await router.replace('/contact');
    await router.isReady();
    expect(wrapper.html()).toContain('Contact');
  });

  it('should reder about page /features', async () => {
    await router.replace('/features');
    await router.isReady();
    expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom');
  });

  it('should reder about page /pricing', async () => {
    await router.replace('/pricing');
    await router.isReady();
    expect(wrapper.html()).toContain('Flexible');
  });

  it('should reder about page /pokemon/:id with no autenticated', async () => {
    localStorage.clear();

    await router.replace('/pokemon/100');
    await router.isReady();
    expect(wrapper.find('h1').text()).toContain('Login');
    expect(wrapper.find('form').exists()).toBeTruthy();
  });

  it('should reder about page /pokemon/:id with autenticated', async () => {
    vi.spyOn(Storage.prototype, 'setItem');
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(Date.now().toString());
    await router.replace('/pokemon/100');
    await router.isReady();
    expect(wrapper.find('h1').text()).toContain('Pokemon N° 100');
  });

  it('should validated id param in /pokemon/:id success number', async () => {
    const route: any = {
      fullPath: '/pokemon/100',
      params: { id: '100' },
    };
    const pokemonRoute = router.getRoutes().find((r) => r.name === 'pokemon');
    expect(pokemonRoute).toBeDefined();
    const { id } = (pokemonRoute?.props as any).default(route);
    expect(id).toBe(100);
  });

  it('should validated id param in /pokemon/:id return id default 1 number', async () => {
    const route: any = {
      fullPath: '/pokemon/100',
      params: { id: 'd4a4dasd' },
    };
    const pokemonRoute = router.getRoutes().find((r) => r.name === 'pokemon');
    expect(pokemonRoute).toBeDefined();
    const { id } = (pokemonRoute?.props as any).default(route);
    expect(id).toBe(1);
  });
});
