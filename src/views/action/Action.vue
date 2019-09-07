<template>
  <div>
    <h2>6、action的使用示例</h2>
    <p>你当前选择的商品：{{ product }}</p>
    <div><button @click="selectProduct">改变商品</button></div>
    <hr>
    <h2>组合action</h2>
    <p>{{ status }}</p>
    <p>{{ info.name }}</p>
    <div><button @click="modifyInfo">修改信息</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: '信息还没修改！'
    }
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
    info() {
      return this.$store.state.userInfo;
    }
  },
  methods: {
    selectProduct() {
      // this.$store.dispatch('changeProduct')
      // 载荷方式分发
      // this.$store.dispatch('changeProduct', {
      //   extraInfo: 'sportcar'
      // })
      // 或者这种
      this.$store.dispatch({
        type: 'changeProduct',
        extraInfo: 'sportcar'
      })
    },
    modifyInfo() {
      this.$store.dispatch('changeInfo').then(() => {
        this.status = '信息修改成功';
      });
    }
  },
}
</script>