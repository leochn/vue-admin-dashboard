<template>
    <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
        <div class="sidebar-wrapper">
            <app-sidebar class="sidebar-container" />
        </div>
        <div class="main-container">
            <div class="navbar">
                <app-header/>
            </div>
            <App-main/>
        </div>
    </div>
</template>

<script>
	import Sidebar from './sidebar.vue'
    import Header from './header.vue'
	import AppMain from './appMain.vue'
	export default {
		components:{
			'app-header':Header,
			'app-sidebar':Sidebar,
            AppMain
		},
        computed: {
          sidebar() {
            return this.$store.state.app.sidebar;
          }
        }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.hideSidebar {
            .sidebar-wrapper {
                transform: translate(-140px, 0);
                .sidebar-container {
                    transform: translate(132px, 0);
                }
                &:hover {
                    transform: translate(0, 0);
                    .sidebar-container {
                        transform: translate(0, 0);
                    }
                }
            }
            .main-container{
                margin-left: 40px;
                .navbar {
                    position:fixed;
                    height: 50px;
                    background: #eee;
                    top: 0;
                    right:0;
                    left: 40px;
                }
            }
            
        }
        .sidebar-wrapper {
            width: 180px;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 1001;
            overflow: hidden;
            transition: all .28s ease-out;
        }
        .sidebar-container {
            transition: all .28s ease-out;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: -17px;
            overflow-y: scroll;
        }
        .main-container {
            min-height: 100%;
            transition: all .28s ease-out;
            margin-left: 180px;
            .navbar {
                position:fixed;
                height: 50px;
                background: #eee;
                top: 0;
                right:0;
                left: 180px;
                transition: all .28s ease-out;
            }
        }
        
    }

    // .navbar {
    //     position:fixed;
    //     height: 50px;
    //     background: #eee;
    //     top: 0;
    //     right:0;
    //     //margin-left: 180px;
    //     left:180px;
    // }
</style>
