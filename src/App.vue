<template>
  <div class="container">
    <nav-bar />
    <div class="card">
      hello
      <p>Counter value is {{ counter }}</p>
      <button @click="incrementMethod" class="btn">increment counter</button>
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
      counter: 0,
    };
  },
  methods: {
    incrementMethod() {
      this.counter++;
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
