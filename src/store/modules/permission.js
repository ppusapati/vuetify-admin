import { constantRoutes } from '@/router';
import store from '@/store';
import Layout from '@/layout';

// 遍历后台传来的路由字符串，转换为组件对象
const filterAsyncRouter = (routers) => {
  return routers.filter(router => {
    if (router.component) {
      // Layout组件特殊处理
      if (router.component === 'Layout' && router.root) {
        router.component = Layout;
        // 处理多级菜单
      } else if (router.component === 'Layout') {
        router.component = routerView();
      } else {
        const component = router.component;
        router.component = loadView(component);
      }
    }
    if (router.children && router.children.length) {
      router.children = filterAsyncRouter(router.children);
    }
    return true;
  });
};

const state = {
  routes: [],
  addRoutes: []
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  }
};

const actions = {
  generateRoutes({ commit }) {
    return new Promise(resolve => {
      const asyncRouter = filterAsyncRouter(store.getters.menus);
      asyncRouter.push({ path: '*', redirect: '/404', hidden: true });
      commit('SET_ROUTES', asyncRouter);
      resolve(asyncRouter);
    });
  }
};

const routerView = () => {
  return () => import(`@/router/views`);
};

// 路由懒加载
const loadView = (view) => {
  return () => import(`@/views${view}`);
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
