<template>
  <div>
    <h2>1、vuex初体验</h2>
    <p>{{ msg }}</p>
    <div>
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    msg() {
      return this.$store.state.count;
    }
  },
  methods: {
    add() {
      this.$store.commit('add');
    },
    reduce() {
      this.$store.commit('reduce');
    }
  }
}
</script>