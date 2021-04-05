/*
 * @Author: your name
 * @Date: 2021-04-04 22:14:13
 * @LastEditTime: 2021-04-05 20:05:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue-Vuetify-demo\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '../views/Dashboard'
import Oracel from '../views/Oracel'
import Node from '../views/Node'
import Contract from '../views/Contract'
import Job from '../views/Job'
import Client from '../views/Client'
import Adapter from '../views/Adapter'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../components/Layout'),
      redirect: '/Dashboard',
      children: [
        {
          path: '/Dashboard',
          name: 'Dashboard',
          component: () => import('../views/Dashboard'),
        },
        {
          path: '/Oracel',
          name: 'Oracel',
          component: () => import('../views/Oracel'),
        }, {
          path: '/Node',
          name: 'Node',
          component: () => import('../views/Node'),
        }, {
          path: '/Contract',
          name: 'Contract',
          component: () => import('../views/Contract'),
        }, {
          path: '/Job',
          name: 'Job',
          component: () => import('../views/Job'),
        }, {
          path: '/Client',
          name: 'Client',
          component: () => import('../views/Client'),
        }, {
          path: '/Adapter',
          name: 'Adapter',
          component: () => import('../views/Adapter'),
        }
      ]
    },
    // {
    //   path: '/',
    //   name: 'Dashboard',
    //   component: import('../views/Dashboard'),
    //   meta: { title: '预言机概览'}
    // },
  ]
})
