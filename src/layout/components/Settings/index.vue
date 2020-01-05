<template>
  <div class="drawer-container">
    <div>
      <div class="drawer-title">导航模式</div>
      <el-row class="setting-rightpane-nav">
        <el-col :span="6">
          <el-tooltip content="侧边菜单布局" placement="bottom-start">
            <div class="nav-item" @click="reducitonFun">
              <svg-icon icon-class="layer-nav-left" />
              <i v-show="this.toshow==0" class="el-icon el-icon-check" />
            </div>
          </el-tooltip>
        </el-col>
        <el-col :span="6">
          <el-tooltip content="顶部菜单布局" placement="bottom-start">
            <div class="nav-item" @click="addFun">
              <svg-icon icon-class="layer-nav-top" />
              <i v-show="this.toshow==1" class="el-icon el-icon-check" />
            </div>
          </el-tooltip>
        </el-col>
      </el-row>

      <div class="drawer-title">页面样式设置</div>

      <div class="drawer-item">
        <span>固定头部</span>
        <el-switch v-model="fixedHeader" class="drawer-switch" />
      </div>

      <div class="drawer-item">
        <span>Logo展示</span>
        <el-switch v-model="sidebarLogo" class="drawer-switch" />
      </div>

      <div class="drawer-title">顶部导航背景色设置</div>
      <div class="drawer-item">
        <el-radio v-model="themeVal" label="1" @change="brightColorFun">亮色</el-radio>
        <el-radio v-model="themeVal" label="2" @change="darkColorFun">深色</el-radio>
        <el-radio v-model="themeVal" label="3" @change="themeColorFun">主题色</el-radio>
      </div>
    </div>
  </div>
</template>

<script>
// import ThemePicker from '@/components/ThemePicker'
import { mapGetters } from 'vuex'

export default {
  // name: 'Settings',
  // components: { ThemePicker },
  data() {
    return {
      themeVal: "1",
      activeIndex2: '1',
    }
  },
  computed: {
    fixedHeader: {
      get() {
        return this.$store.state.settings.fixedHeader
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'fixedHeader',
          value: val
        })
      }
    },
    tagsView: {
      get() {
        return this.$store.state.settings.tagsView
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'tagsView',
          value: val
        })
      }
    },
    sidebarLogo: {
      get() {
        return this.$store.state.settings.sidebarLogo
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'sidebarLogo',
          value: val
        })
      }
    },
    toshow: {
      get: function() {
        return this.$store.state.user.toshow
      },
      set: function() {
      }
    }
  },
  methods: {
    themeChange(val) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
    },
     // 传值到父组件 顶部导航切换
    addFun() {
      this.$emit('func', this.toshow)
      this.$store.dispatch('user/addFun')
    },
     // 侧边导航切换
    reducitonFun() {
      this.$emit('func', this.toshow)
      this.$store.dispatch('user/reducitonFun')
    },
    // 主题色
    themeColorFun() {
      this.$store.dispatch('user/themeColorFun')
    },
     // 深色主题
    darkColorFun() {
      this.$store.dispatch('user/darkColorFun')
    },
    // 亮色主题
    brightColorFun() {
      this.$store.dispatch('user/brightColorFun')
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;

    .el-radio{
      display: inherit;
      margin-bottom: 18px;
    }
  }

  .drawer-switch {
    float: right
  }
}
.setting-rightpane-nav{
  margin-bottom: 12px;
  .nav-item{
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
    cursor: pointer;
    &select{
      .el-icon{
        display: block;
      }
    }
  }
  .svg-icon{
    width: 100%;
    height: 100%;
  }
  .el-icon{
    position: absolute;
    //display: none;
    right: 0;
    bottom: 0;
    width: 24px;
    height: 24px;
    font-size: 16px;
  }
}
   
</style>
