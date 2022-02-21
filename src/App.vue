<template>
  <div class="container">
    <nav-bar />
    <div class="card">
      hello
      <!-- <p>LocalCounter value is {{ localCounter }}</p>
      <button @click="incrementMethod" class="btn">increment counter</button> -->
      <!-- <p>Store counter value is {{ $store.state.counter }}</p> -->
      <p>
        Store counter value is {{ counterFromStore }} Store double counter value
        is {{ doubleCounterFromStore }}
      </p>
      <p>this is title from store: {{ upTitle }}</p>
      <button @click="showInfo" class="btn">increment counter directly</button>
      <!-- <button @click="incrStoreMethod" class="btn">
        increment counter via commit
      </button> -->
      <button @click="incrementCounter" class="btn">
        increment counter via mutations
      </button>
      <!-- <button @click="incrAsync" class="btn">async incr counter</button> -->
      <button @click="incrAsync({ num: 10 })" class="btn">
        async incr counter
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
  data() {
    return {
      // localCounter: 0,
    };
  },
  computed: {
    ...mapGetters(["justCounter", "doubleCounter", "upTitle"]),

    counterFromStore() {
      // return this.$store.getters.justCounter;
      return this.justCounter;
    },
    doubleCounterFromStore() {
      // return this.$store.getters.doubleCounter;
      return this.doubleCounter;
    },
  },
  methods: {
    // incrementMethod() {
    //   this.counter++;
    // },
    ...mapMutations(["incrementCounter"]),
    ...mapActions({ incrAsync: "incrAsync" }),

    // incrStoreMethod() {
    // this.$store.commit("incrementCounter");
    // },

    // incrAsync() {
    //   this.$store.dispatch("incrAsync", { num: 10 });
    // },
    showInfo() {
      console.log(this.$store.state.counter);
      console.log(this.$store.state.appTitle);
    },
  },
};
</script>

<style>
@import "./styles.css";
.container {
  background: gray;
}
.card {
  width: 500px;
  margin: 0 auto;
  background: white;
  height: 500px;
  border-radius: 10px;
}
</style>
