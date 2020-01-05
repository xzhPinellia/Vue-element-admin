<template>
  <div class="app-container">
    <div class="content">内容：Progress 进度条</div>
    <h3>线形进度条</h3>
    <el-progress :percentage="50"></el-progress>
    <el-progress :percentage="percentage" :format="format(percentage)"></el-progress>
    <el-progress :percentage="100" status="success"></el-progress>
    <!-- <el-progress :percentage="100" status="warning"></el-progress> -->
    <!-- <el-progress :percentage="50" status="exception"></el-progress> -->

    <h3>百分比内显</h3>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
    <!-- <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
    <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
    <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>-->


  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 100,
    };
  },
  methods: {
    format(percentage) {
      return percentage == 100 ? "满" : `${percentage}%`;
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