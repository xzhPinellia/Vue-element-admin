<template>
  <div class="app-container">
    <div class="content">内容：Loading 加载</div>
    <h3>基础用法</h3>
    <el-table v-loading="loading" :data="tableData1" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <h3>自定义</h3>
    <el-table
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :data="tableData2"
      style="width: 100%"
    >
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <h3>整页加载</h3>
    <el-button
      type="primary"
      @click="openFullScreen"
      v-loading.fullscreen.lock="fullscreenLoading"
    >指令方式</el-button>
    <el-button type="primary" @click="openFullScreen">服务方式</el-button>
    <h3>服务</h3>
    <h5>Loading 还可以以服务的方式调用。引入 Loading 服务：</h5>
    <p>import { Loading } from 'element-ui';</p>
    <br>
    <h5>在需要调用时：</h5>
    <p>Loading.service(options);</p>
    <br>
    <h5>其中 options 参数为 Loading 的配置项，具体见下表。LoadingService 会返回一个 Loading 实例，可通过调用该实例的 close 方法来关闭它：</h5>
    <p>let loadingInstance = Loading.service(options);
this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
  loadingInstance.close();
});</p>
<br>
<h5>需要注意的是，以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：</h5>
<p>let loadingInstance1 = Loading.service({ fullscreen: true });
let loadingInstance2 = Loading.service({ fullscreen: true });
console.log(loadingInstance1 === loadingInstance2); // true</p>
<br>
<p>此时调用它们中任意一个的 close 方法都能关闭这个全屏 Loading。</p>
<p>如果完整引入了 Element，那么 Vue.prototype 上会有一个全局方法 $loading，它的调用方式为：this.$loading(options)，同样会返回一个 Loading 实例。</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData1: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      tableData2: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      loading: true,
      fullscreenLoading: false
    };
  },
  methods: {
    openFullScreen() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
  border-bottom: 1px solid #ccc;
}
</style>