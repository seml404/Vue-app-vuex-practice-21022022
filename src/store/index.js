import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 12,
  },
  mutations: {
    incrementCounter(state) {
      state.counter++;
    },
    addFive(state) {
      state.counter += 5;
    },
    addNumber(state, value) {
      console.log(value);
      // state.counter += value;
      state.counter += value.num;
    },
  },
  actions: {},
  getters: {
    justCounter(state) {
      return state.counter;
    },
    doubleCounter(state, getters) {
      if (getters.justCounter > 30) {
        return state.counter * 2 + "!";
      }
      return state.counter * 2;
    },
  },
  modules: {},
});
