import { createRouter, createWebHistory, RouteLocationNormalizedLoaded } from 'vue-router'
const index = () => import(/* webpackChunkName: "index" */ './views/index/index.vue')
const docIndex = () => import(/* webpackChunkName: "index" */ './views/docIndex/docIndex.vue')
const basePath = import.meta.env.BASE_PATH

const routes = [
    { path: `${basePath}/`, component: index, meta: { title: "NaNi文档" } },
    { path: `${basePath}/:projectName`, component: docIndex },
    { path: `${basePath}/:projectName/:moduleName`, component: docIndex },
    { path: `${basePath}/:projectName/:moduleName/:pageName*`, component: docIndex },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeResolve(async to => {
    const { meta } = to;
    if (meta && meta.title) {
        document.title = <any>meta.title
    }
})

/**
 * 获得当前路由
 * @returns 
 */
export function getCurrentRoute(): RouteLocationNormalizedLoaded {
    return router.currentRoute.value;
}

export {
    router
}