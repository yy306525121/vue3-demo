import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: '表单设计',
        component: () => import('@/views/Designer')
    },
    {
        path: '/Preview',
        name: '表单展示',
        component: () => import('@/views/Preview')
    },
]


const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
export default router
