<template>
    <div class="count">
      {{counter.count}}
    </div>
</template>

<script setup>
  import { useCounterStore } from "@/stores/counter.js";

  const counter = useCounterStore();

</script>