<template>
  <div class="navbar"  :class=" this.navcolor==2 ? 'darkHead' :(this.navcolor==3 ? 'themeColor' :'') ">
    <hamburger v-show="this.toshow==0" :is-active="sidebar.opened"  class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb v-show="this.toshow==0" class="breadcrumb-container"/>

    <!-- topHeader -->
    <div  v-show="this.toshow==1" id="topHeader" class="topHeader">
      <!-- logo -->
      <div class="logo-wd">
        <img :src="logo" class="sidebar-logo">
        <!-- <svg-icon :icon-class="logo" /> -->
        <h1 class="sidebar-title">{{ title }} </h1>
      </div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect">
        <template v-for="route in $router.options.routes">  
          <template v-if="route.children"> 
              <el-submenu :index="route.num +''">
                  <template slot="title" >{{route.name}}</template>
                  <template v-for="(item,i) in route.children">
                    <el-menu-item :index="item.name"> {{item.meta.title}} </el-menu-item>
                  </template>
              </el-submenu>
          </template>
          <template v-else-if= "route.num" >
            <el-menu-item> {{ route.name }}</el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <search id="header-search" class="right-menu-item" />

        <screenfull id="screenfull" class="right-menu-item hover-effect" />
        <el-popover 
          class="right-menu-item hover-effect"
                   placement="bottom"
                   width="300"
                   trigger="click" >
          <el-tabs v-model="messageActiveName" stretch style="margin:-12px;" class="header-right-menu-tabs">
            <el-tab-pane name="first">
              <span slot="label">通知 (1)</span>
              <el-table :show-header="false" :data="tableData" v-loading="listLoading" element-loading-text="正在加载中">
                <el-table-column prop="entrustedUnit" label="Date" />
              </el-table>
            </el-tab-pane>
            <el-tab-pane name="second">
              <span slot="label">关注 (1)</span>
              asdf
            </el-tab-pane>
            <el-tab-pane name="third">
              <span slot="label">待办 (1)</span>
              asdf
            </el-tab-pane>
          </el-tabs>
          <div slot="reference">
            <el-badge :value="100" :max="9" type="danger" class="header-badge-item">
              <svg-icon icon-class="message" />
            </el-badge>
          </div>

        </el-popover>

      </template>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              个人信息
            </el-dropdown-item>
          </router-link>
          <router-link to="/">
            <el-dropdown-item>
              修改密码
            </el-dropdown-item>
          </router-link>
          <!-- <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a> -->
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import Search from '@/components/HeaderSearch'
import Screenfull from '@/components/Screenfull'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    Screenfull,
    Search
  },
  data() {
    return {
      // logo: 'hfits-logo',
      logo: '',
      title: 'Vue element基础框架 V1.0',
      activeIndex2: '1',
      messageActiveName: 'first',
      tableData: [
        {
          id: 0,
          entrustedUnit: '合肥市中级人民法院',
          personnelType: '被告人',
          defendantName: '陈长生',
          charge: '故意伤害罪',
          investigationStatus: '未指派'
        },
        {
          id: 1,
          entrustedUnit: '第一女子监狱',
          personnelType: '罪犯',
          defendantName: '沈燕',
          charge: '放火罪',
          investigationStatus: '未审核'
        },
        {
          id: 2,
          entrustedUnit: '合肥市中级人民法院',
          personnelType: '罪犯',
          defendantName: '宋思国',
          charge: '走私文物罪',
          investigationStatus: '未调查'
        },
        {
          id: 3,
          entrustedUnit: '合肥市中级人民法院',
          personnelType: '被告人',
          defendantName: '王权',
          charge: '为亲友非法牟利罪',
          investigationStatus: '未审批'
        },
        {
          id: 4,
          entrustedUnit: '宝丰监狱',
          personnelType: '罪犯',
          defendantName: '查果果',
          charge: '盗窃、抢夺枪支、弹药、爆炸物、危险物质罪',
          investigationStatus: '审批通过'
        },
        {
          id: 5,
          entrustedUnit: '合肥市中级人民法院',
          personnelType: '罪犯',
          defendantName: '李伟明',
          charge: '伪造、变造金融票证罪',
          investigationStatus: '审批不通过'
        },
        {
          id: 6,
          entrustedUnit: '宝丰监狱',
          personnelType: '被告人',
          defendantName: '卢西奥',
          charge: '生产、销售劣药罪',
          investigationStatus: '审核通过'
        }
      ],
      tableDataList: [], // 表格数据
      temp: {
        id: undefined,
        entrustedUnit: '',
        personnelType: '',
        defendantName: '',
        charge: '',
        investigationStatus: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'device',
      'avatar'
    ]),
    toshow: {
      get: function() {
        return this.$store.state.user.toshow
      },
      set: function() {
      }
    },
    navcolor: {
      get: function() {
        return this.$store.state.user.navcolor
      },
      set: function() {
      }
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    // 顶部导航路由跳转
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      const link = keyPath[1]
      this.$router.push({ name : link })
    }
  }
}
</script>

<style lang="scss" >
.header-right-menu-tabs{
  margin:-12px;

  .el-tabs__nav-scroll{
    padding:0 15px;
  }

  .el-tabs__header{
    margin:0;
  }
}
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;

    // .asdf{
    // }
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .header-badge-item{
      line-height: 1em;
      z-index: 1;
    }
    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 15px;
          font-size: 12px;
        }
      }
    }
  }
}
.user-dropdown {
  margin-top: 0;
}

.sidebar-title {
  display: inline-block;
  margin: 0;
  
  font-weight: 600;
  line-height: 50px;
  font-size: 1.2rem;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  vertical-align: middle;
  color: #1666ab;
}

// 顶部导航css
.topHeader{
  width: 60%;
  float: left;
  display: flex;
  justify-content: flex-start;
  .logo-wd{
    .svg-icon{
      fill: #1666ab;
      width: 40px;
      height: 40px;
      margin-top: 5px;
      vertical-align: middle;
    }
  }
  
}
.themeColor{
  background: #409EFF;
  .hamburger{
    fill: #ffffff;
  }
  .logo-wd{
    .svg-icon{
      fill: #ffffff;
    }
  }
  .sidebar-title{
    color: #fff;
  }
}
.themeColor .el-menu.el-menu--horizontal {
  background:#409EFF;
}
.themeColor .el-menu--popup-bottom-start {
    background: #409EFF  !important ;
}
.themeColor .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
.themeColor .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
.themeColor .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background: #409EFF  !important ;
    color: #fff;
}
.themeColor .el-menu--horizontal>.el-submenu .el-submenu__title,.themeColor .el-submenu__title i {
    color: #fff;
}
.themeColor .right-menu .right-menu-item {
    color: #fff;
}
.themeColor .el-icon-caret-bottom:before {
    color: #fff;
}
.themeColor .app-breadcrumb.el-breadcrumb .no-redirect[data-v-b50ef614] {
    color: #ffffff;
}
.themeColor .el-menu-item {
    background-color: #409EFF !important ;
}
.themeColor .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
    color: #ffffff;
}
.darkHead{
  background-color: rgb(48, 65, 86);
  .hamburger{
    fill: #ffffff;
  }
  .logo-wd{
    .svg-icon{
      fill: #ffffff;
    }
  }
  .sidebar-title{
    color: #fff;
  }
}
.darkHead .el-menu.el-menu--horizontal {
  background-color: rgb(48, 65, 86);
}

.darkHead .el-menu--popup-bottom-start {
    background-color: #1f2d3d  !important ;
}
.darkHead .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
.darkHead .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
.darkHead .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: #1f2d3d  !important ;
    color: #fff;
}
.darkHead .el-menu--horizontal>.el-submenu .el-submenu__title,.darkHead .el-submenu__title i {
    color: #fff;
}
.darkHead .right-menu .right-menu-item {
    color: #fff;
}
.darkHead .el-icon-caret-bottom:before {
    color: #fff;
}
.darkHead .app-breadcrumb.el-breadcrumb .no-redirect[data-v-b50ef614] {
    color: #ffffff;
}
.darkHead .el-menu-item {
    background-color: #1f2d3d  !important ;
}
.darkHead .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
    color: #ffffff;
}
#topHeader .el-submenu>.el-submenu__title .el-submenu__icon-arrow {
    display: initial !important ;
}
#topHeader .el-submenu__title {
    padding: 0 20px!important;
}
.logo-wd{
  //width: 14%;
  padding:0 20px;
  height: auto;
  text-align: center;
}
.logo-wd img{
  width: 40px;
  height: 40px;
  margin-top: 3px;
  vertical-align: middle;
}
.el-menu--horizontal>.el-menu-item {
    height: 50px;
    line-height: 50px;
}
.el-menu--horizontal>.el-submenu .el-submenu__title {
    height: 50px !important;
    line-height: 50px;
}
</style>
