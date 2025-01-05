<template>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl font-bold">
      Pokemon N° <span class="text-blue-500">{{ id }}</span>
    </h1>
    <div class="mt-4">
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
        :alt="`Pokemon N° ${id}`"
        class="w-48 h-48"
      />
    </div>
    <RouterLink
      :to="{ name: 'pokemon', params: { id: id + 1 } }"
      class="mt-4 text-white hover:underline p-2 rounded-md bg-blue-500 hover:bg-blue-700"
    >
      Siguiente Pokemon
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  id: number;
};
const props = defineProps<Props>();

console.log(props.id);
</script>
