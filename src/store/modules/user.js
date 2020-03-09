import { login, logout, getInfo } from '@/api/user';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { resetRouter } from '@/router';

const getDefaultState = () => {
  return {
    token: getToken(),
    userInfo: {},
    menus: [],
    roles: [],
    permissions: {}
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USER: (state, userInfo) => {
    state.userInfo = userInfo;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
  SET_MENUS: (state, menus) => {
    state.menus = menus;
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.permissions = permissions.reduce((obj, item) => {
      obj[item] = true;
      return obj;
    },
    {});
  }
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response;
        commit('SET_TOKEN', data.token);
        setToken(data.token);
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response;

        if (!data) {
          reject('Verification failed, please Login again.');
        }

        const { sysUser, roles, menus, permissions } = data;

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!');
        }

        commit('SET_USER', sysUser);
        commit('SET_ROLES', roles);
        commit('SET_MENUS', menus);
        commit('SET_PERMISSIONS', permissions);
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken(); // must remove  token  first
        resetRouter();
        commit('RESET_STATE');
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken(); // must remove  token  first
      commit('RESET_STATE');
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

