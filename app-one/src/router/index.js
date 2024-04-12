import {createRouter, createWebHistory} from "vue-router";
import index from "@/pages/index.vue";
import page_one from "@/pages/page_one.vue";
import page_two from "@/pages/page_two.vue";

const routes = [
	{
		path: '/app-one',
		component: index,
	},
	{
		path: '/app-one/page-one',
		component: page_one
	},
	{
		path: '/app-one/page-two',
		component: page_two
	}
]

const router = createRouter({
	routes,
	history: createWebHistory(''),
})

export default router;
