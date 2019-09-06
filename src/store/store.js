import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Hello!',
    count: 10,
    firstName: 'lee',
    lastName: 'hao',
    age: 26
  },
  mutations: {
    add() {
      this.state.count++;
    },
    reduce() {
      this.state.count--;
    }
  },
  actions: {

  }
})
