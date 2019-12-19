export default [
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\Dev\\web\\practice\\jamstack\\gridsome\\gridsome-test\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\Dev\\web\\practice\\jamstack\\gridsome\\gridsome-test\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\Dev\\web\\practice\\jamstack\\gridsome\\gridsome-test\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\Dev\\web\\practice\\jamstack\\gridsome\\gridsome-test\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

