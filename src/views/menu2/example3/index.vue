<template>
  <div class="menu2-example3">
    <div class="top">
      内容：Slider 滑块、Rate 评分。
    </div>
    <div class="main">
      <h2>Slider 滑块</h2>
      <div class="con">
        <h3>基础用法</h3>
        <div class="slider-wrap">
          <span class="demonstration">默认</span>
          <el-slider v-model="value1"></el-slider>
        </div>
        <div class="slider-wrap">
          <span class="demonstration">自定义初始值</span>
          <el-slider v-model="value2"></el-slider>
        </div>
        <div class="slider-wrap">
          <span class="demonstration">隐藏 Tooltip</span>
          <el-slider v-model="value3" :show-tooltip="false"></el-slider>
        </div>
        <div class="slider-wrap">
          <span class="demonstration">格式化 Tooltip</span>
          <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
        </div>
        <div class="slider-wrap">
          <span class="demonstration">禁用</span>
          <el-slider v-model="value5" disabled></el-slider>
        </div>
      </div>
      <div class="con">
        <h3>离散值</h3>
        <div class="slider-wrap">
          <span class="demonstration">不显示间断点</span>
          <el-slider
            v-model="value6"
            :step="10">
          </el-slider>
        </div>
        <div class="slider-wrap">
          <span class="demonstration">显示间断点</span>
          <el-slider
            v-model="value7"
            :step="10"
            show-stops>
          </el-slider>
        </div>
      </div>
      <div class="con">
        <h3>通过输入框设置精确数值</h3>
        <div class="slider-wrap">
          <el-slider
            v-model="value8"
            show-input>
          </el-slider>
        </div>
      </div>
      <div class="con">
        <h3>范围选择</h3>
        <div class="slider-wrap">
          <el-slider
            v-model="value9"
            range
            show-stops
            :max="10">
          </el-slider>
        </div>
      </div>
      <div class="con">
        <h3>竖向模式</h3>
        <div class="slider-wrap">
          <el-slider
            v-model="value10"
            vertical
            height="200px">
          </el-slider>
        </div>
      </div>
      <h2>Rate 评分</h2>
      <div class="con">
        <h3>基础用法</h3>
        <div class="rate-wrap">
          <span class="demonstration">默认不区分颜色</span>
          <el-rate v-model="value11"></el-rate>
        </div>
        <div class="rate-wrap">
          <span class="demonstration">区分颜色</span>
          <el-rate
            v-model="value12"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
          </el-rate>
        </div>
      </div>
      <div class="con">
        <h3>辅助文字</h3>
        <span class="demonstration">用辅助文字直接地表达对应分数</span>
        <div class="text-rate">
          <el-rate
            v-model="value13"
            show-text>
          </el-rate>
        </div>
      </div>
      <!-- <div class="con">
        <h3>其它 icon</h3>
        <span class="demonstration">当有多层评价时，可以用不同类型的 icon 区分评分层级</span>
        <div class="text-rate">
          <el-rate
            v-model="value14"
            :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
            void-icon-class="icon-rate-face-off"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
          </el-rate>
        </div>
      </div> -->
      <div class="con">
        <h3>只读</h3>
        <span class="demonstration">只读的评分用来展示分数，允许出现半星</span>
        <div class="text-rate">
          <el-rate
            v-model="value15"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      value6: 0,
      value7: 0,
      value8: 0,
      value9: [4, 8],
      value10: 0,
      value11: null,
      value12: null,
      value13: null,
      value14: null,
      value15: 3.7
    }
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
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
    h2 {
      text-align: center;
    }
    .con {
      border: 1px solid #e8e8e8;
      padding: 0 15px;
      margin: 15px 0;
      .text-rate {
        height: 50px;
        display: flex;
        align-items: center;
      }
      .rate-wrap {
        display: flex;
        align-items: center;
        .demonstration {
          display: inline-block;
          margin-right: 20px;
          width: 120px;
          height: 38px;
          line-height: 38px;
        }
      }
      .slider-wrap {
        display: flex;
        align-items: center;
        .demonstration {
          display: inline-block;
          margin-right: 20px;
          width: 120px;
          height: 38px;
          line-height: 38px;
        }
      }
      .el-slider {
        width: 50%;
        display: inline-block;
      }
    }
    .con:nth-child(6) {
      padding-bottom: 15px;
    }
  }
</style>