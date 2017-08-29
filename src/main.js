import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
