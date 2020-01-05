<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">请选择喜欢的皮肤</h3>

      <div class="skins-container">
        <div :class="activeClass == index ? 'skins-item active':'skins-item'" v-for="(item,index) in itemList" :key="index" @click="changeTheme(index,itemList[index].resid)">
            {{itemList[index].text}}
        </div>
        <!-- <div class="skins-item" :class="activeClass == index ? 'active':''" v-for="(item,index) in itemList" :key="index" @click="getItem(index)" id="login00" @click="changeTheme('login00')">数据分析</div>
        <div class="skins-item" id="login01" @click="changeTheme('login01')">科技之光</div>
        <div class="skins-item" id="login02" @click="changeTheme('login02')">政务办公</div>
        <div class="skins-item" id="login03" @click="changeTheme('login03')">蓝色科技</div>
        <div class="skins-item" id="login04" @click="changeTheme('login04')">诚信鼎立</div>
        <div class="skins-item" id="login05" @click="changeTheme('login05')">便捷办公</div>
        <div class="skins-item" id="login06" @click="changeTheme('login06')">旗帜飘飘</div> -->
      </div>
    </div>
  </div>
</template>

<script>
//import ThemePicker from '@/components/ThemePicker'

export default {
  //components: { ThemePicker },
  
  data() {
    return {
      activeClass: 0, // 0为默认选择第一个，-1为不选择
      itemList:[
        {text:'数据分析',resid:'login00'},
        {text:'科技之光',resid:'login01'},
        {text:'政务办公',resid:'login02'},
        {text:'蓝色科技',resid:'login03'},
        {text:'诚信鼎立',resid:'login04'},
        {text:'便捷办公',resid:'login05'},
        {text:'旗帜飘飘',resid:'login06'}
      ]
    }
  },
  computed: {
    loginskinSwitch: {
      get() {
        return this.$store.state.settings.loginskinSwitch
      }
    },
  },
  methods: {
    changeTheme (index,theme) {
      this.activeClass = index;
      localStorage.setItem('bgLogin', theme);
      localStorage.setItem('bgIndex', index);
      window.document.documentElement.setAttribute('class', theme)
    }
  },
  created() {
    const bgLogin = localStorage.getItem('bgLogin')
    if (bgLogin) {
      window.document.documentElement.setAttribute('class', bgLogin);
      this.activeClass = localStorage.getItem('bgIndex')
    }
  }
}
</script>