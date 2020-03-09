const state = {
  miniVariant: false,
  device: 'desktop'
};

const mutations = {
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  },
  TOGGLE_MINI_VARIANT: (state) => {
    state.miniVariant = !state.miniVariant;
  }
};

const actions = {
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device);
  },
  toggleMiniVariant({ commit }) {
    commit('TOGGLE_MINI_VARIANT');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
