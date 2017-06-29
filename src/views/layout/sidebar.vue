<template>
    <el-menu mode="vertical" theme="dark" 
            :default-active="onRoutes"
            :default-openeds="onRouteKeys" >
        <sidebar-item :routes='sidebarList'></sidebar-item>
    </el-menu>
</template>

<script>
    import { mapGetters } from 'vuex';
    import SidebarItem from './SidebarItem.vue';
    import appConfig from '../../config.js'
    import sidebarData from '../../data/menuList.json'
    export default {
      data() {
        return {
          sidebarList: sidebarData
        }
      },
      components: { SidebarItem },

      computed:{
        onRoutes(){
          return this.$route.path;
        },
        onRouteKeys(){
          const getParentArray = (path, ms, kas = []) => {
            if (ms && ms.length > 0) {
              for (let k = 0, length = ms.length; k < length; k++) {
                if (path == ms[k].href) {
                  kas.push(ms[k].href);
                  break;
                }
                let i = kas.length;
                if (ms[k].children && ms[k].children.length > 0) {
                  getParentArray(path, ms[k].children, kas);
                }
                if (i < kas.length) {
                  kas.push(ms[k].href);
                }
              }
            }
            return kas.reverse();
          }
          //console.log(getParentArray(this.$route.path, this.sidebarList));
          return getParentArray(this.$route.path, this.sidebarList);
        }
      },
      mounted(){
        //alert('mounted...');
        console.log('bimwUrl=' + appConfig.appBaseUrl.bimUrl);
      },

      created: function () {
        //this.fetchSidebarList();
        console.log('workflowUrl=' + appConfig.appBaseUrl.workflowUrl);
      },
      methods:{
        fetchSidebarList(){
          //alert(1);
          var _this = this;
          this.$http.get('./menuList.json').then(function(res){
            _this.sidebarList = res.data;
            console.log(res.data);
          }).catch(function(err){
            console.log(err);
          });
        },
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .el-menu {
        min-height: 100%;
    }
</style>