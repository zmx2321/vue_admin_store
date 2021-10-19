import Layout from '@/layout'

export default {
    path: '/demo',
    component: Layout,
    name: 'name',
    // 设置侧边栏
    meta: {
        title: 'demo模块',
        icon: 'pro'
        // auth: ['admin', 'editor']  // 配置权限
    },
    children: [
        {
            path: 'list',
            name: 'demoList',
            // 如果想要打包出来的文件根据每个模块的路由进行打包的话，要加一段注释
            // 会把这两个路由打包成demo.js文件
            // 访问到路由的时候才会去加载相应的js文件，而不是全部加载
            component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/list'),
            meta: {
                title: 'list',
                icon: 'search'
                // breadcrumb: false  // 面包屑导航
            }
        },
        {
            path: 'detail',
            name: 'detailList',
            component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/detail'),
            meta: {
                title: 'detail',
                sidebar: false,
                activeMenu: '/demo/list'  // 配置需要高亮的完整路径
            }
        }
    ]
}
