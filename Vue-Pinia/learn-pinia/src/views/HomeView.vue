<template>
  <div class="home">
    <CounterView/>
    <div class="buttons">
      <button @click="counter.decrement">-</button>
      <button  @click="counter.increment">+</button>
    </div>
    <hr>
    <div>
      <p>This counter is {{counter.checkOddEven}}</p>
    </div>
    <hr>
    <div>
      <h3>Edit counter: <input
      v-model="counter.count"
       type="number"></h3>
    </div>
  </div>
</template>

<script setup>
  import { useCounterStore } from "@/stores/counter.js";
  import CounterView from "@/components/CounterView.vue"
  const counter = useCounterStore();

</script>

<style scoped>
  .count{
    font-size:60px;
    margin: 20px;
  }

  .buttons button{
    font-size: 40px;
    margin: 10px;
  }
</style>
