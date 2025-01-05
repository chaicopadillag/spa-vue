import PokemonPage from '@/modules/pokemon/pages/PokemonPage.vue';
import { mount, RouterLinkStub } from '@vue/test-utils';

describe('<PokemonPage/>', () => {
  const pokemonId = 25;
  const wrapper = mount(PokemonPage, {
    props: {
      id: pokemonId,
    },
    global: {
      stubs: {
        // RouterLink: true,
        RouterLink: RouterLinkStub,
      },
    },
  });

  test('should reder pokemon page with path param id ', () => {
    expect(wrapper.find('h1').text()).toBe(`Pokemon N° ${pokemonId}`);
    expect(wrapper.find('img').attributes('src')).toBe(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`,
    );
  });

  test('should redirect to the next pokemon page', async () => {
    const link = wrapper.findComponent(RouterLinkStub);

    expect(link.props().to).toEqual({ name: 'pokemon', params: { id: pokemonId + 1 } });
  });
});
