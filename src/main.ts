import Vue from 'vue';
import App from './App.vue';

import dyUi from './packages/index';

Vue.use(dyUi);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
