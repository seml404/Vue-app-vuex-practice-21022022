import { createStore, createLogger } from "vuex";
import counterModule from "./modules/counterModule";
export default createStore({
  plugins: [createLogger()],
  state: {
    appTitle: "some title",
  },
  getters: {
    upTitle(state) {
      return state.appTitle;
    },
  },
  modules: { counterModule },
});
