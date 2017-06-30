<template>
    <div class="navbar111">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
        <levelbar></levelbar>
        <div class='header-con'>xxx平台</div>
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
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
    </div>
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
    //.navbar {
        // position:fixed;
        // height: 50px;
        // background: #eee;
        // //width:100%;
        // //width:680px;
        // top: 0;
        // //left:180px;
        // right:0;
       .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        } 
        .header-con {
            display: inline-block;
            height: 50px;
            color: red;
            font-size:17px;
        }
        .avatar-container {
            line-height: 58px;
            height: 50px;
            float: right;
            padding: 0 10px;
            display: inline-block;
            //position: absolute;
            .avatar-wrapper {
                cursor: pointer;
                margin-top:5px;
                //position: relative;
                //float:right;
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
        
    //}
    
</style>




