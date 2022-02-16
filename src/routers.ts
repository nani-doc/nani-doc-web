import { createRouter, createWebHistory, RouteLocationNormalizedLoaded } from 'vue-router'
import { BASE_PATH } from '/@/constant'
const index = () => import(/* webpackChunkName: "index" */ './views/index/index.vue')
const docIndex = () => import(/* webpackChunkName: "index" */ './views/docIndex/docIndex.vue')
const ss = () => import(/* webpackChunkName: "index" */ './views/docIndex/docIndex.vue')

const routes = [
    { path: `${BASE_PATH}/`, component: index, meta: { title: "NaNi文档" } },
    { path: `${BASE_PATH}/:projectName`, component: docIndex },
    { path: `${BASE_PATH}/:projectName/:moduleName`, component: docIndex },
    { path: `${BASE_PATH}/:projectName/:moduleName/:pageName*`, component: docIndex },
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