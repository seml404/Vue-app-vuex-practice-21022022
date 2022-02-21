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

      <button @click="$store.state.counter++" class="btn">
        increment counter directly
      </button>
      <button @click="incrStoreMethod" class="btn">
        increment counter via commit
      </button>
    </div>
  </div>
</template>

<script>
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
    counterFromStore() {
      return this.$store.getters.justCounter;
    },
    doubleCounterFromStore() {
      return this.$store.getters.doubleCounter;
    },
  },
  methods: {
    // incrementMethod() {
    //   this.counter++;
    // },
    incrStoreMethod() {
      this.$store.commit("incrementCounter");
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
