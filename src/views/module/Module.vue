<template>
  <div>
    <h2>7、module使用示例</h2>
    <p>{{ moduleState.name }}</p>
    <div>
      <p>名字：{{ name }}</p>
      <p>描述：{{ desc }}</p>
      <button @click="handleClick">修改描述</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$store.state.mb.name,
      // desc: this.$store.state.mb.desc
    }
  },
  mounted() {
    console.log(this.moduleState);
  },
  computed: {
    moduleState() {
      return this.$store.state.ma;
    },
    desc() {
      return this.$store.state.mb.desc;
    }
  },
  methods: {
    handleClick() {
      this.$store.commit('modifyDesc', {newMsg: 'lao wang is beautiful!'});
    }
  },
}
</script>