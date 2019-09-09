<template>
  <div>
    <h2>8、模块命名空间</h2>
    <p>名字：{{ name }}</p>
    <p>描述：{{ desc }}</p>
    <div>
      <button @click="modify">修改名字，调用模块C的mutation里面的方法</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {

    }
  },
  computed: {
    // ...mapState('mc', ['name', 'desc']) // 这里模块里面要使用辅助函数的话要多传一个参数才行
    ...mapState('mc', {
      name(state) {
        return state.name;
      },
      desc(state) {
        return state.desc;
      }
    })
    // desc() {
    //   return this.$store.state.mc.desc;
    // },
    // name() {
    //   return this.$store.state.mc.name;
    // }
  },
  methods: {
    modify() {
      // this.$store.commit('mc/modifyName', {
      //   newName: '命名空间模块C'
      // })
      // this.$store.commit({
      //   type: 'mc/modifyName',
      //   newName: '命名空间模块C'
      // })
      this.modifyName({newName: '命名空间模块C'});
    },
    ...mapMutations('mc', ['modifyName'])
  }
}
</script>