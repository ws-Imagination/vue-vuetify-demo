<!--
 * @Author: your name
 * @Date: 2021-04-05 16:05:22
 * @LastEditTime: 2021-04-05 21:19:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue-Vuetify-demo\src\components\Layout.vue
-->
<template>
    <v-app>
      <v-system-bar app
        height="50"
      >
        The system bar
      </v-system-bar>
      <v-navigation-drawer app>
        <!-- <router-view></router-view> -->
        <!-- 导航侧边栏 -->
        <v-list>
					<v-list-item-group
						v-model="selectedItem"
						color="primary"
					>
						<v-list-item
							v-for="item in items"
							:key="item.title"
							:to="item.to"
							link
						>
							<v-list-item-content>
									<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>

        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
</template>

<script>
export default {
	data() {
		return {
			selectedItem: 0,
			items: [
				{ title: '预言机概览', to: '/' },
				{ title: '预言机管理', to: '/Oracel'},
				{ title: '节点管理', to: '/Node'},
				{ title: '合约管理', to: '/Contract'},
				{ title: 'Job管理', to: '/Job'},
				{ title: '区块链Client', to: '/Client'},
				{ title: '适配器管理', to: '/Adapter'},
			]
		}
	}
}
</script>