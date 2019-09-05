<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :commonStates="store" msg="Welcome to Your Vue.js App"/>
    <hr>
    <div class="wrap">
      <p>{{ msg }}-{{ num }}</p>
      <button @click="handleClick">点击切换消息值</button>
    </div>
    <hr>
    <div>
      <h2>1、vuex初体验</h2>
      <p>{{ count }}</p>
      <div>
        <button @click="add">+</button>
        <button @click="reduce">-</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import storeObj from '../simple_store.js';

export default {
  name: 'home',
  data() {
    const store = new storeObj(this);
    return {
      store,
      num: 23
    }
  },
  components: {
    HelloWorld
  },
  computed: {
    msg() {
      return this.store.states.msg
    },
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    handleClick() {
      this.store.commit('setMsg', 'Hello World!')
    },
    add() {
      this.$store.commit('add');
    },
    reduce() {
      this.$store.commit('reduce');
    }
  }
}
</script>
