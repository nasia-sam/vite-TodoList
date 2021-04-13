import { createRouter, createWebHistory} from 'vue-router'
import ToDo from '../pages/ToDoForm.vue'

const routes = [
  { path: '/todo', name: 'todo', component: ToDo }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
