<template>
  <div class="app-container">
    <div class="content">内容：Progress 文字提示</div>
    <h3>基础用法</h3>
    <div class="box">
      <div class="top">
        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
          <el-button>上左</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
          <el-button>上边</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
          <el-button>上右</el-button>
        </el-tooltip>
      </div>
      <div class="left">
        <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
          <el-button>左上</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
          <el-button>左边</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
          <el-button>左下</el-button>
        </el-tooltip>
      </div>

      <div class="right">
        <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
          <el-button>右上</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
          <el-button>右边</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
          <el-button>右下</el-button>
        </el-tooltip>
      </div>
      <div class="bottom">
        <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
          <el-button>下左</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
          <el-button>下边</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
          <el-button>下右</el-button>
        </el-tooltip>
      </div>
    </div>

    <h3>主题</h3>
    <el-tooltip content="Top center" placement="top">
      <el-button>Dark</el-button>
    </el-tooltip>
    <el-tooltip content="Bottom center" placement="bottom" effect="light">
      <el-button>Light</el-button>
    </el-tooltip>

    <h3>更多 Content</h3>
    <el-tooltip placement="top">
      <div slot="content">
        多行信息
        <br />第二行信息
      </div>
      <el-button>Top center</el-button>
    </el-tooltip>

    <h3>高级扩展</h3>
    <h5>除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：</h5>
    <h5>transition 属性可以定制显隐的动画效果，默认为fade-in-linear。 如果需要关闭 tooltip 功能，disabled 属性可以满足这个需求，它接受一个Boolean，设置为true即可</h5>
    <h5>事实上，这是基于 Vue-popper 的扩展，你可以自定义任意 Vue-popper 中允许定义的字段。 当然 Tooltip 组件实际上十分强大，文末的API文档会做一一说明。</h5>
    <el-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
      <el-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</el-button>
    </el-tooltip>
    <br />
    <br />
    <i>
      tooltip 内不支持 router-link 组件，请使用 vm.$router.push 代替。
      tooltip 内不支持 disabled form 元素，参考 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event">MDN</a>，请在 disabled form 元素外层添加一层包裹元素。
    </i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
  border-bottom: 1px solid #ccc;
}
.box {
  width: 400px;

  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }

  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }
}
a {
  color: blue;
}
</style>