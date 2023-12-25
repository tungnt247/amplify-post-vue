import { createRouter, createWebHistory } from 'vue-router'
import ListPost from '../views/ListPost.vue'
const routes = [
    {
        path: '/',
        name: 'ListPost',
        component: ListPost
    }
]
const router = createRouter({
    history: createWebHistory('/'),
    routes
})
export default router
