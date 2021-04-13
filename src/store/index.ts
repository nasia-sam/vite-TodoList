import { createStore, Module } from 'vuex'

interface StateInterface {
  list: string[]
}

const list: Module<StateInterface, { list: StateInterface }> = {
  namespaced: true,
  state: () => ({
    list: [
      'work',
      'walk the dog'
    ]
  }),
  getters: {
    getlist: (state: StateInterface) => { return state.list }
  },
  mutations: {
    add_item: (state, payload) => {
      state.list.push(payload)
    },
    remove_item: (state, index) => {
      console.log('mutation', index)
      state.list.splice(index, 1)
      console.log(state.list)
    }
  },
  actions: {
    addTodo: ({ commit }, item: string) => { commit('add_item', item)},
    deleteTodo: ({ commit }, index: number) => { commit('remove_item', index)}
  }
}

const store = createStore({
  modules: { list }
})

export default store