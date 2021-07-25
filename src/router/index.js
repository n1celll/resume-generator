
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
      }
    ]
  })
 
export default router