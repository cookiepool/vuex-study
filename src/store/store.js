import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Hello!',
    count: 10,
    firstName: 'lee',
    lastName: 'hao',
    list: [1, 2, 3, 4, 5, 6, 7, 8],
    
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
    }
  },
  getters: {
    modifyArr(state) { // 一般化getter
      return state.list.filter((item, index, arr) => {
        return item % 2 == 0;
      })
    },
    getLength(state, getter) { // 方法里面传getter
      return getter.modifyArr.length;
    }
  },
  actions: {

  }
})
