import Vue from 'vue';
import 'babel-polyfill';
import 'normalize.css/normalize.css';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VuetifyConfirm from 'vuetify-confirm';
import i18n from './i18n';
import '@/permission'; // permission control

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app');

Vue.use(VuetifyConfirm, { vuetify,
  buttonTrueText: app.$t('common.button.accept'),
  buttonFalseText: app.$t('common.button.discard'),
  color: 'warning',
  icon: 'fas fa-exclamation-circle',
  title: app.$t('common.confirm.title')
});
