<template>
  <div>
    <h2>4、mapGetters的使用演示</h2>
    <p>你的数字：{{ msg }}</p>
    <!-- <p>你的数组长度为：{{ length }}</p>
    <ul>
      <li v-for="(item, index) in getList" :key="index">{{ item }}</li>
    </ul> -->
    <hr>
    <p>你的数组长度为：{{ getLength }}</p>
    <ul>
      <li v-for="(item, index) in modifyArr" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data() {
    return {
      num: 22
    }
  },
  // 这是一种写法，取了别名
  // computed: { 
  //   msg() {
  //     return this.num * 10;
  //   },
  //   ...mapGetters({
  //     getList: 'modifyArr',
  //     length: 'getLength'
  //   })
  // }
  computed: {
    msg() {
      return this.num * 10;
    },
    ...mapGetters([
      'modifyArr',
      'getLength'
    ])
  }
}
</script>