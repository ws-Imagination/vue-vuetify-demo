<!--
 * @Author: your name
 * @Date: 2021-04-04 22:14:13
 * @LastEditTime: 2021-04-05 00:28:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue-Vuetify-demo\src\App.vue
-->
<template>
  <div id="app">
    <v-app>
      <v-system-bar app
        height="50"
      >
        The system bar
      </v-system-bar>
      <v-navigation-drawer app>
        <!-- -->
        导航侧边栏
      </v-navigation-drawer>

      <!-- <v-app-bar app>
        上导航栏
      </v-app-bar>       -->
      <v-main><!-- 给应用提供合适的间距 -->
        <v-container fluid><!-- 如果使用 vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
