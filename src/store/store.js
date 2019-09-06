import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Hello!',
    count: 10,
    firstName: 'lee',
    lastName: 'hao',
    age: 26,
    list: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  mutations: {
    add() {
      this.state.count++;
    },
    reduce() {
      this.state.count--;
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
