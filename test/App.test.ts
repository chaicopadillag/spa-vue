import App from '@/App.vue';
import { router } from '@/router';
import { shallowMount } from '@vue/test-utils';
import { RouterView } from 'vue-router';

describe('<App/>', () => {
  it('should render app component', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    });

    const app = wrapper.findComponent(App);
    expect(app.exists()).toBe(true);
    expect(wrapper.findComponent(RouterView).exists()).toBeTruthy();
  });
});
