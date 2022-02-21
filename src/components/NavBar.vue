<template>
  <div class="nav-bar-wrapper">
    <div class="nav-bar">
      this is navbar
      <p>Counter in store is {{ counterNavBar }}</p>
      <button class="btn" @click="$store.commit('addFive')">
        Add 5 to counter
      </button>
      <button class="btn" @click="addNum">Add num to counter</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    counterNavBar() {
      return this.$store.state.counter;
    },
  },
  methods: {
    addNum() {
      //   this.$store.commit("addNumber", 10);

      this.$store.commit("addNumber", { num: 10 });
    },
  },
};
</script>

<style scoped>
.nav-bar-wrapper {
  margin: 0 auto;
  max-width: 500px;
  background: white;
  border-radius: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid grey;
  box-shadow: 1px 1px 1px 1px grey;
  padding: 10px;
}
.nav-bar,
.nav-bar p {
  font-size: 9px;
}
</style>
