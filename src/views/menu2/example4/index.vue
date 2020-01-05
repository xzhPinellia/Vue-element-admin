<template>
  <div class="menu2-example4">
    <div class="top">
      内容：Steps 步骤。
    </div>
    <div class="main">
      <div class="con">
        <h3>基础用法</h3>
        <span class="demonstration">简单的步骤条。</span>
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      </div>
      <div class="con">
        <h3>含状态步骤条</h3>
        <span class="demonstration">每一步骤显示出该步骤的状态。</span>
        <el-steps :space="200" :active="1" finish-status="success">
          <el-step title="已完成"></el-step>
          <el-step title="进行中"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
      </div>
      <div class="con">
        <h3>有描述的步骤条</h3>
        <span class="demonstration">每个步骤有其对应的步骤状态描述。</span>
        <el-steps :active="1">
          <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 3" description="这段就没那么长了"></el-step>
        </el-steps>
      </div>
      <div class="con">
        <h3>居中的步骤条</h3>
        <span class="demonstration">标题和描述都将居中。</span>
        <el-steps :active="2" align-center>
          <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
      </div>
      <div class="con">
        <h3>带图标的步骤条</h3>
        <span class="demonstration">步骤条内可以启用各种自定义的图标。</span>
        <el-steps :active="1">
          <el-step title="步骤 1" icon="el-icon-edit"></el-step>
          <el-step title="步骤 2" icon="el-icon-upload"></el-step>
          <el-step title="步骤 3" icon="el-icon-picture"></el-step>
        </el-steps>
      </div>
      <div class="con">
        <h3>竖式步骤条</h3>
        <span class="demonstration">竖直方向的步骤条。</span>
        <div style="height: 300px;">
          <el-steps direction="vertical" :active="1">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
          </el-steps>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
}
</script>

<style lang="scss" scoped>
  .top {
    padding: 15px;
    border-bottom: 1px solid #ccc;
  }
  .main {
    margin: 15px;
    .con {
      border: 1px solid #e8e8e8;
      padding: 0 15px 15px;
      margin: 15px 0;
    }
    .demonstration {
      display: inline-block;
      margin-bottom: 10px;
    }
  }
</style>