import Vue from 'vue'
import Vuex from 'vuex'

import { moduleC } from './module_c.js';

Vue.use(Vuex)

// 定义的模块A
const moduleA = {
  state: {
    name: 'lee',
    age: 23,
  },
  mutations: {

  },
  getters: {

  },
  actions: {

  }
};

// 定义模块B
const moduleB = {
  state: {
    name: 'wang',
    age: 22,
    desc: 'nope'
  },
  mutations: {
    modifyDesc(state, payload) {
      state.desc = payload.newMsg;
    }
  },
  getters: {

  },
  actions: {

  }
}


export default new Vuex.Store({
  modules: {
    ma: moduleA,
    mb: moduleB,
    mc: moduleC
  },
  state: {
    msg: 'Hello!',
    count: 10,
    firstName: 'lee',
    lastName: 'haha',
    list: [1, 2, 3, 4, 5, 6, 7, 8],
    
    product: 'car', // 这个变量用来测试action

    userInfo: { // 这个变量用来测试组合action
      name: 'lee',
      age: 23
    },
  },
  mutations: {
    add(state) {
      state.count++;
    },
    reduce(state) {
      state.count--;
    }, 
    loadAdd(state, payload) {  // 提交载荷，额外参数
      state.count += payload;
    },
    addNewState(state, payload) { // 我打算再这儿添加新的属性到state
      // Vue.set(state, 'newProp', '添加一个新值！'); // 这是一种写法
      // 这种写法用新对象替换老对象
      // state= {...state, newProp: '添加一个新值！'} // 这个玩意儿不管用了，用下面的replaceState()方法
      this.replaceState({...state, newProp: '添加一个新值！'})
    },
    // 以下mutation方法用来测试action
    changeProduct(state, payload) {
      state.product = payload.change;
    },
    // 以下用来测试组合action
    changeInfo(state, payload) {
      state.userInfo.name = 'lee haha';
    }
  },
  getters: {
    modifyArr(state) { // 一般化getter
      return state.list.filter((item, index, arr) => {
        return item % 2 == 0;
      })
    },
    getLength(state, getters) { // 方法里面传getter
      return getters.modifyArr.length;
    }
  },
  actions: {
    changeProduct(context, payload) { // 这个context是一个与 store 实例具有相同方法和属性的对象
      // 调用mutation里的changeProduct方法
      // context.commit('changeProduct', {change: 'ship'});
      // 改成异步方式
      // setTimeout(() => {
      //   context.commit('changeProduct', {change: 'ship'});
      // }, 1500)
      // 使用载荷
      let temp = 'ship+' + payload.extraInfo; 
      setTimeout(() => {
        context.commit('changeProduct', {change: temp});
      }, 1500)
    },
    changeInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('changeInfo');
          resolve();
        }, 2000)
      })
    },
    
  }
})
