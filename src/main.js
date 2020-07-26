import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import CompositionApiPlugin from './plugins/composition-api';
import SuiVue from 'semantic-ui-vue';
import {Pagination} from 'vue-pagination-3';


import 'semantic-ui-css/semantic.min.css';
import './assets/styles/css/index.css'

Vue.config.productionTip = false;


Vue.use(CompositionApiPlugin);
Vue.use(SuiVue);

Vue.component('pagination', Pagination);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
