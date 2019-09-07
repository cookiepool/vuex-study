<template>
  <div>
    <h2>5、mutations的使用演示</h2>
    <p>{{ count }}</p>
    <div>
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
    <div>
      <button @click="loadAddNew">额外+</button>
    </div>
    <hr>
    <p>添加的新值：{{ newMsg }}</p>
    <div><button @click="addNewProp">添加新值</button></div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  data() {
    return {

    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    newMsg() {
      return this.$store.state.newProp || '还没添加新值';
    }
  },
  methods: {
    ...mapMutations([ // 使用mapMutations来映射
      'loadAdd'
    ]),
    add() {
      this.$store.commit('add');
    },
    reduce() {
      this.$store.commit('reduce');
    },
    // loadAdd() {
    //   this.$store.commit('loadAdd', 100);
    // },
    loadAddNew() { // 使用mapMutations映射的方式来调用
      this.loadAdd(100)
    },
    addNewProp() {
      this.$store.commit('addNewState', {});
    }
  }
}
</script>