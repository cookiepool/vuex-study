<template>
  <div>
    <h2>3、getter的使用方法</h2>
    <p>这个主要是对状态的处理，相当于把状态处理的方法抽成公共部分来管理了</p>
    <p>数组总长度：{{ length }}</p>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    list() {
      return this.$store.getters.modifyArr;
    },
    length() {
      return this.$store.getters.getLength;
    }
  },
  methods: {

  }
}
</script>