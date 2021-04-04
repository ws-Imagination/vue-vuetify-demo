/*
 * @Author: your name
 * @Date: 2021-04-04 22:14:14
 * @LastEditTime: 2021-04-04 23:40:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Vue-Vuetify-demo\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  vuetify,
})
