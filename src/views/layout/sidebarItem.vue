<template>
    <div>
        <template v-for="item in routes">
            <el-submenu :index="item.path" v-if="item.children && item.children.length>0">
                <template slot="title">
                    <i :class="item.icon" class='sidebar-icon'></i>{{item.name}}
                </template>
                <template v-for="child in item.children" >
                    <sidebar-item class='menu-indent' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
                    <router-link v-else class="menu-indent" :to="item.path+child.path">
                        <el-menu-item :index="item.path+child.path">
                            <i :class="child.icon" class='sidebar-icon'></i>{{child.name}}
                        </el-menu-item>
                    </router-link>
                </template>
            </el-submenu>
            <router-link v-else :to="item.path">
                <el-menu-item :index="item.path">
                    <i :class="item.icon" class='sidebar-icon'></i>{{item.name}}
                </el-menu-item>
            </router-link>
        </template>
    </div>
</template>

<script>

    export default {
      name: 'SidebarItem',
      props: {
        routes: {
          type: Array
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .sidebar-icon {
        margin-right: 15px;
    }
    .hideSidebar .menu-indent{
        display: block;
        text-indent: 10px;
    }
</style>