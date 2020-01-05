import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

 //新增 num字段 需要一一对应 
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    num: '1',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        num: 'example00',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/menu1',
    component: Layout,
    redirect: '/menu1/example1',
    name: '数据表格',
    num: '2',
    meta: { title: '数据表格', icon: 'example' },
    children: [
      {
        path: 'example1',
        name: 'menu1-example1',
        num: 'example',
        component: () => import('@/views/menu1/example1/index'),
        meta: { title: '基础表格', icon: 'tree' }
      },
      {
        path: 'example2',
        name: 'menu1-example2',
        num: 'example',
        component: () => import('@/views/menu1/example2/index'),
        meta: { title: '目录树', icon: 'tree' }
      },
      {
        path: 'example3',
        name: 'menu1-example3',
        num: 'example',
        component: () => import('@/views/menu1/example3/index'),
        meta: { title: 'example3', icon: 'tree' }
      },
      {
        path: 'example10',
        name: 'menu1-example10',
        num: 'example',
        component: () => import('@/views/menu1/example10/index'),
        meta: { title: '表格(固定表头和列)', icon: 'tree' }
      }
    ]
  },

  {
    path: '/menu2',
    component: Layout,
    redirect: '/menu2/example1',
    name: '表单应用',
    num: '3',
    meta: { title: '表单应用', icon: 'example' },
    children: [
      {
        path: 'example1',
        name: 'menu2-example1',
        num: 'example03',
        component: () => import('@/views/menu2/example1/index'),
        meta: { title: '基础表单', icon: 'tree' }
      },
      {
        path: 'example2',
        name: 'menu2-example2',
        num: 'example03',
        component: () => import('@/views/menu2/example2/index'),
        meta: { title: '分步表单', icon: 'tree' }
      },
      {
        path: 'example5',
        name: 'menu2-example5',
        num: 'example03',
        component: () => import('@/views/menu2/example5/index'),
        meta: { title: '高级表单', icon: 'tree' }
      },
      {
        path: 'example3',
        name: 'menu2-example3',
        num: 'example03',
        component: () => import('@/views/menu2/example3/index'),
        meta: { title: '滑块评分组件', icon: 'tree' }
      },
      {
        path: 'example4',
        name: 'menu2-example4',
        num: 'example03',
        component: () => import('@/views/menu2/example4/index'),
        meta: { title: '步骤条组件场景', icon: 'tree' }
      }
    ]
  },

  {
    path: '/menu3',
    component: Layout,
    redirect: '/menu2/example1',
    num: '4',
    name: '其他页面',
    meta: { title: '其他页面', icon: 'example' },
    children: [
      {
        path: 'example1',
        name: 'menu3-example1',
        num: 'example04',
        component: () => import('@/views/menu3/example1/index'),
        meta: { title: '栅格应用', icon: 'tree' }
      },
      {
        path: 'example2',
        name: 'menu3-example2',
        num: 'example04',
        component: () => import('@/views/menu3/example2/index'),
        meta: { title: '弹窗及详情', icon: 'tree' }
      },
      {
        path: 'example3',
        name: 'menu3-example3',
        num: 'example04',
        component: () => import('@/views/menu3/example3/index'),
        meta: { title: 'example3', icon: 'tree' }
      },
      {
        path: 'iconpage',
        name: 'menu3-icon',
        component: () => import('@/views/icons/index'),
        meta: { title: 'Icon图标', icon: 'icon' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    num: '5',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    num: '6',
    name: 'External',
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
