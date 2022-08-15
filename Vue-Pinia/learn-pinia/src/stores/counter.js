import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }),
  getters: {
    checkOddEven: (state) =>{
      if(state.count % 2===0){
        return "Even"
      }else{
        return "Odd"
      }
    }
  },
  actions: {
    increment() {
      this.count++
    },
    decrement(){
      this.count--
    }
  }
})
