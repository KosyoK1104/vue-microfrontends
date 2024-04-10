import {createRouter, createWebHistory} from "vue-router";
import IndexPage from "@/components/IndexPage.vue";

const routes = [
    {
        path: '/app-one',
        component: IndexPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory('/'),
})

export default router;