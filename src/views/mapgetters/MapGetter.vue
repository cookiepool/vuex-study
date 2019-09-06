<template>
  <div>
    <h2>4、mapGetters的使用演示</h2>
    <p>你的数字：{{ msg }}</p>
    <ul>
      <li v-for="(item, index) in getList" :key="index">{{ item }}</li>
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
  computed: 
    mapGetters({
      msg() {
        return this.num * 10;
      },
      getList: 'modifyArr'
    })
}
</script>