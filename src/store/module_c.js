/* 
* 这个文件用来声明模块C
*/

export const moduleC = {
  namespaced: true,
  state: {
    name: 'moduleC',
    desc: '这是模块C，用来测试命名空间的！',
    list: [1, 2, 3, 4]
  },
  getters: {
    filterList(state) {
      return state.list.filter((item, index, arrSelf) => {
        return item % 2 !== 0;
      });
    }
  },
  mutations: {
    modifyName(state, payload) {
      state.name = payload.newName;
    }
  },
  actions: {
    
  }
}