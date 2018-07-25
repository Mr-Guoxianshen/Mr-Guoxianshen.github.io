// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import setWechatTitle from './untils/setWechatTitle'


Vue.config.productionTip = false;

Vue.prototype.$toast = function (toastData) {
  toastData.text = toastData.text || '信息有误!'
  toastData.position = toastData.position || 'middle'
  toastData.time = toastData.time || 1000
  toastData.type = toastData.type || 'text'
  toastData.width = toastData.width || '1.5rem'
  this.$vux.toast.show(toastData);
}

router.afterEach((transition) => {
  let title;
  switch (transition.name) {
    case 'name':
      title='首页';
      break;
    default:
      title='首页';
      break;
  }



  setWechatTitle(title)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
