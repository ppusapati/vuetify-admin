import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.min.css';
import i18n from '@/i18n';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa'
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  }
});
