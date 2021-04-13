<template>
  <form>
    <input type="text" placeholder="Add Todo" v-model="newItem" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    <button type="button" class="ml-2 bg-pink-400 p-2 rounded border text-black" @click="addItem()"> Add </button>
  </form>
  <button @click="increase">count is: {{ count }}</button>
  <div class="my-4">
    <ul v-for="(todo, index) in todolist" :key="todo" class="text-gray-500">
      <label class="inline-flex items-center mt-3">
      <li> <input type="checkbox" class="form-checkbox h-5 w-5 text-pink-600" @click="deleteItem(index)"> {{ todo }} </li>
      </label>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ToDo',

  setup () {
    const count = ref(0)
    const increase = () => {
      return count.value++
    }
    const newItem = ref('')
    const store = useStore()
    const todolist = computed(() => {
      return store.getters['list/getlist']
    })
    console.log(store)
    const addItem = () => {
      store.dispatch('list/addTodo', newItem.value)
      newItem.value = ''
    }
    const deleteItem = (index: number) => {
      console.log('Todo', index, typeof(index))
      setTimeout(() =>store.dispatch('list/deleteTodo', index), 800)
    }

    return { todolist, newItem, addItem, increase, count, deleteItem}
  }
})
</script>


<style>

</style>