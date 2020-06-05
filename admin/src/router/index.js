import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from "../views/CategoryEdit.vue"
import CategoryList from "../views/CategoryList.vue"
import ItemList from "../views/ItemList.vue"
import ItemEdit from "../views/ItemEdit.vue"
import HeroList from "../views/HeroList.vue"
import HeroEdit from "../views/HeroEdit.vue"
import ArticlesList from "../views/ArticleList.vue"
import ArticleEdit from "../views/ArticleEdit.vue"
import AdList from "../views/AdList.vue"
import AdEdit from "../views/AdEdit.vue"
import AdminUserList from "../views/AdminUserList.vue"
import AdminUserEdit from "../views/AdminUserEdit.vue"
import Login from "../views/Login.vue"

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: Login,
        meta: { isPublic: true } //路由原信息
    },
    {
        path: '/',
        component: Main
    },
    {
        path: '/',
        name: 'main',
        component: Main,
        children: [{
                path: '/categories/create',
                component: CategoryEdit
            }, {
                path: '/categories/edit/:id',
                component: CategoryEdit,
                props: true
            }, {
                path: '/categories/list',
                component: CategoryList
            },

            {
                path: '/items/create',
                component: ItemEdit
            }, {
                path: '/items/edit/:id',
                component: ItemEdit,
                props: true
            }, {
                path: '/items/list',
                component: ItemList
            },

            {
                path: '/heroes/create',
                component: HeroEdit
            }, {
                path: '/heroes/edit/:id',
                component: HeroEdit,
                props: true
            }, {
                path: '/heroes/list',
                component: HeroList
            },

            {
                path: '/articles/create',
                component: ArticleEdit
            }, {
                path: '/articles/edit/:id',
                component: ArticleEdit,
                props: true
            }, {
                path: '/articles/list',
                component: ArticlesList
            },

            {
                path: '/ads/create',
                component: AdEdit
            }, {
                path: '/ads/edit/:id',
                component: AdEdit,
                props: true
            }, {
                path: '/ads/list',
                component: AdList
            },

            {
                path: '/admin_users/create',
                component: AdminUserEdit
            }, {
                path: '/admin_users/edit/:id',
                component: AdminUserEdit,
                props: true
            }, {
                path: '/admin_users/list',
                component: AdminUserList
            }
        ],
    },

]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    //to and from are Route Object,next() must be called to resolve the hook}
    if (!to.meta.isPublic && !localStorage.token) {
        return next('/login')
    }
    next()
})
export default router