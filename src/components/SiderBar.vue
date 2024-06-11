<template>
    <Layout style="min-height: 100vh;">
      <LayoutHeader class="header" >
          <div class="logo" />
            <Menu
              theme="light"
              mode="horizontal"
              :style="{ lineHeight: '64px' }"
            >
          </Menu>
        </LayoutHeader>
      <Layout style="padding: 25px">
        <LayoutSider width="200" style="background: #fff">
          <Menu v-model:selectedKeys="selectedKeys" mode="inline">
            <SubMenu v-for="fRoute in routeList" :key="fRoute.name">
              <template #title>
                {{ fRoute.meta!.title }}
              </template>
              <MenuItem v-for="sRoute in fRoute.children" :key="sRoute.name">
                <RouterLink :to="fRoute.path + '/' + sRoute.path">{{ sRoute.meta!.title }}</RouterLink>
              </MenuItem>
            </SubMenu>
          </Menu>
        </LayoutSider>
        <Layout style="padding: 0 24px ">
          <LayoutContent class="bg-white w-full h-full">
            <RouterView />
          </LayoutContent>
        </Layout>
      </Layout>
      <LayoutFooter style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </LayoutFooter>
    </Layout>
  </template>
  
  <script lang="ts" setup>
  import { Layout, LayoutContent, Menu, SubMenu, MenuItem, LayoutSider,LayoutHeader ,LayoutFooter} from 'ant-design-vue';
  import { onMounted, ref } from 'vue';
  import { useRouter, type RouteRecordRaw } from 'vue-router';
  
  const router = useRouter();
  const routeList = ref<Array<RouteRecordRaw>>([]);
  const selectedKeys = ref<Array<string> | Array<number>>([]);
  
  onMounted(() => {
    const routes: Array<RouteRecordRaw> = router.getRoutes();
    routes.forEach(item => {
      if (item.children && item.children.length > 0) {
        routeList.value.push(item);
      }
    });
  });
  </script>
  
  <style lang="scss">
    #components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
  </style>
  