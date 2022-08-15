<template>
  <div class="about">
    <h1>About</h1>
    <button class="button-counter">
      {{counter.count}}
    </button>
  </div>
</template>

<script setup>
  import { useCounterStore } from "@/stores/counter.js";
  const counter = useCounterStore();
</script>

<style scoped>
  .button-counter {
    font-size: 60px;
    margin: 20px;
  }
</style>

