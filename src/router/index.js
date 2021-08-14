
import { createRouter,createWebHashHistory} from "vue-router";
const routerHistorys = createWebHashHistory()
 
  const router = createRouter({
    history: routerHistorys,
    routes: [
      {
        path: '/', 
        name: "Index",
        component: ()=>import ('../views/Index.vue')
      },
      {
        path: '/main', 
        name: "Main",
        component: ()=>import('../views/Main.vue')
      },
      {
        path: '/preview', 
        name: "Preview",
        component: ()=>import('../views/Preview.vue')
      },
    ]
  })
 
export default router