<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">Bienvenido a nuestro sitio web</h1>
    <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>

    <div class="mt-8">
      <p class="mt-4 text-2xl font-semibold">{{ counter }}</p>
      <button
        @click="increment"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4"
      >
        Incrementar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';

const counter = ref(0);

const increment = () => {
  counter.value += 1;
};

// Lifecycle hooks
onMounted(() => {
  console.log('onMounted');
});

onUnmounted(() => {
  console.log('onUnmounted');
});

onUpdated(() => {
  console.log('onUpdated');
});

onBeforeMount(() => {
  console.log('onBeforeMount');
});
onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});
onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});
onErrorCaptured(() => {
  console.log('onErrorCaptured');
});
onRenderTracked(() => {
  console.log('onRenderTracked');
});
onRenderTriggered(() => {
  console.log('onRenderTriggered');
});
onActivated(() => {
  console.log('onActivated');
});
</script>
