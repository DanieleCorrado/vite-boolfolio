import { createRouter, createWebHistory } from 'vue-router';
 
import NotFound from './pages/NotFound.vue';
 
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./pages/Home.vue')
        },
        {
            path: '/project/:id',
            name: 'project-show',
            component: () => import('./pages/ProjectShow.vue')
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'NotFound', 
            component: NotFound 
        },
    ]
});
 
export { router };