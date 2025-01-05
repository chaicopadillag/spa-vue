import LandingLayout from '@/modules/landing/layouts/LandingLayout.vue';
import { router } from '@/router';
import { shallowMount } from '@vue/test-utils';
import { RouterLink, RouterView } from 'vue-router';

describe('<LandingLoyout/>', () => {
  const wrapper = shallowMount(LandingLayout, {
    global: {
      plugins: [router],
    },
  });
  it('should render landing layout', () => {
    const routerView = wrapper.findComponent(RouterView);
    expect(routerView.exists()).toBe(true);
  });

  it('should render header', () => {
    expect(wrapper.find('header').exists()).toBe(true);
  });

  it('should render nav', () => {
    expect(wrapper.find('nav').exists()).toBe(true);
    expect(wrapper.findComponent(RouterLink).exists()).toBe(true);
  });

  it('should render main', () => {
    expect(wrapper.find('main').exists()).toBe(true);
  });

  it('should render footer', () => {
    expect(wrapper.find('footer').exists()).toBe(true);
  });
});
