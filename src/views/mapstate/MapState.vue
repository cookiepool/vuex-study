<template>
    <div>
      <h2>2、使用mapState来获取多个状态-获取姓和名组成姓名</h2>
      <p>your msg {{ msg }} </p>
      <p>count number {{ count }}</p>
      <p>your name {{ name }}</p>
      <p>结合store和组件内部的变量计算：{{ mixCount }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
data() {
    return {
      localCount: 22
    }
  },
  // computed: { // 使用展开的话可以按这种方式写，否则要使用另外一种方式，不然要报错
  //   msg() {
  //     return this.$store.state.msg;
  //   },
  //   ...mapState(['count'])
  // },
  computed: mapState({ // 使用这种方式的mapState要把msg放到mapState方法里面
    msg() {
      return this.$store.state.msg;
    },
    count(state) {
      return state.count;
    },
    mixCount(state) { // 结合store和组件状态进行计算
      return state.count + this.localCount;
    },
    name(state) {
      return state.firstName + ' ' + state.lastName;
    }
  }),
  methods: {

  }
}
</script>