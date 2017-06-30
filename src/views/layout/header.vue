<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
        <levelbar></levelbar>
        <screenfull class='screenfull'></screenfull>
        <span class='appName'>XXX管理平台</span>
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
               <!--  <img class="user-avatar" :src="'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'"> -->
                <img class="user-avatar" src="../../assets/user2-160x160.jpg">
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
                <router-link class='inlineBlock' to="/">
                    <el-dropdown-item>
                        首页
                    </el-dropdown-item>
                </router-link>
                <router-link class='inlineBlock' to="/admin/profile">
                    <el-dropdown-item>
                        设置
                    </el-dropdown-item>
                </router-link>
                <el-dropdown-item divided><span @click="logout" style="display:block;">退出登录</span></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Levelbar from './levelbar';
    import Hamburger from '../../components/Hamburger';
    import Screenfull from '../../components/Screenfull';
    //import ErrorLog from 'components/ErrLog';
    //import errLogStore from 'store/errLog';

    export default {
      components: {
        Levelbar,
        Hamburger,
        //ErrorLog,
        Screenfull  // 全屏按钮
      },
      data() {
        return {
          //log: errLogStore.state.errLog
        }
      },
      computed: {
        ...mapGetters([
          'sidebar',
          'username',
          'avatar'
        ])
      },
      methods: {
        toggleSideBar() {
          this.$store.dispatch('ToggleSideBar')
        },
        logout() {
          // this.$store.dispatch('LogOut').then(() => {
          //   location.reload();// 为了重新实例化vue-router对象 避免bug
          // });
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {
        //width:100%;
        //position:fixed;
        //top:0;
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }
        .screenfull{
             position: absolute;
             right: 100px;
             top: 16px;
             color: red;
        }
        .appName{
            position: absolute;
            font-size:17px;
            right: 140px;
            top: 2px;
            color: blue;
        }
        .avatar-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 35px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top:5px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 50px;
                }
                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }
</style>




