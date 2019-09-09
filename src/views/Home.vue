<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul class="menu-list">
      <li :class="{'list-item': true, 'active': idx === 1}" @click="changeTab(1)">vuex初体验</li>
      <li :class="{'list-item': true, 'active': idx === 2}" @click="changeTab(2)">mapstate</li>
      <li :class="{'list-item': true, 'active': idx === 3}" @click="changeTab(3)">getter</li>
      <li :class="{'list-item': true, 'active': idx === 4}" @click="changeTab(4)">mapgetters</li>
      <li :class="{'list-item': true, 'active': idx === 5}" @click="changeTab(5)">mutation</li>
      <li :class="{'list-item': true, 'active': idx === 6}" @click="changeTab(6)">action</li>
      <li :class="{'list-item': true, 'active': idx === 7}" @click="changeTab(7)">module</li>
      <li :class="{'list-item': true, 'active': idx === 8}" @click="changeTab(8)">module_namespace</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  data() {
    return {
      idx: 1
    }
  },
  computed: {

  },
  methods: { 
    changeTab(idx) {
      this.idx = idx;
      switch(idx) {
        case 1: 
          this.$router.push('/home/firstexp');
          break;
        case 2:
          this.$router.push('/home/mapstate');
          break;
        case 3:
          this.$router.push('/home/getter');
          break;
        case 4:
          this.$router.push('/home/mapgetters');
          break;
        case 5:
          this.$router.push('/home/mutation');
          break;
        case 6:
          this.$router.push('/home/action');
          break;
        case 7:
          this.$router.push('/home/module');
          break;
        case 8:
          this.$router.push('/home/namespace');
          break;
        default:
          this.$router.push('/simplestore');
      }
    }
  }
}
</script>

<style>
  ul {
    list-style-type: none;
  }
  .menu-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
  }
  .list-item {
    margin-right: 12px;
    cursor: pointer;
    line-height: 36px;
  }
  .list-item.active {
    color: palegreen;
    border-bottom: 2px solid palegreen;
  }
</style>
