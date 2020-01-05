<template>
  <div class="main">
    <!-- 头部搜索 -->
    <div class="main-search">
      <div class="checkbox-div">
        <div class="box-tit">分类：</div>
          <el-checkbox-group :class="{'boxShow':showpop}" v-model="checkboxGroup2" size="medium" @change="checkboxVal(checkboxGroup2)">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>
         <i class="el-collapse-item__arrow el-icon-arrow-right"  v-show="linePop==1" @click="showLine"></i>
         <i class="el-collapse-item__arrow el-icon-arrow-right  is-active" v-show="linePop==0"  @click="showLines"></i>
      </div>
      <span>所属项目：</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
        &nbsp;&nbsp;
      <span>其他项目：</span>
      <el-select v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      &nbsp;&nbsp;

      <span>
          <el-input v-model="searchHead" placeholder="输入关键字搜索" style="width:30%"/>
          <span>
             <el-button type="primary">搜索</el-button>
          </span>
      </span>
    </div>

    <!-- 一排二个 -->
    <el-row :gutter="10">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <!-- 一排三个 -->
    <el-row :gutter="10">
      <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card shadow="always">总是显示</el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card shadow="always">总是显示</el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card shadow="hover">总是显示</el-card>
        </div>
      </el-col>
    </el-row>

    <!-- 一排四个 -->
    <el-row :gutter="10">
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6" 
         v-for="(item,index) in cardList" :key="index">
          <div class="grid-content bg-purple">
            <!-- card -->
            <el-card :body-style="{ padding: '0px' }">
              <img
                :src="item.cardpic"
                class="image"
              />
              <div style="padding: 14px;">
                <span>{{item.cardname}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{item.time}}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
    </el-row>

    <!-- 一排六个 -->
    <el-row :gutter="10">
      <el-col :xs="12" :sm="4" :md="4" :lg="4" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="4" :md="4" :lg="4" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="4" :md="4" :lg="4" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="4" :md="4" :lg="4" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="4" :md="4" :lg="4" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="4" :md="4" :lg="4" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <!-- 一排八个 -->
    <el-row :gutter="10">
      <el-col :xs="12" :sm="3" :md="3" :lg="3" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card shadow="always">总是显示</el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="3" :md="3" :lg="3" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card shadow="always">总是显示</el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="3" :md="3" :lg="3" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card shadow="hover">总是显示</el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="3" :md="3" :lg="3" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card shadow="hover">总是显示</el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="3" :md="3" :lg="3" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card shadow="never">总是显示</el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="3" :md="3" :lg="3" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card shadow="never">总是显示</el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="3" :md="3" :lg="3" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card shadow="never">总是显示</el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="3" :md="3" :lg="3" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card shadow="never">总是显示</el-card>
        </div>
      </el-col>
    </el-row>

    <!-- Collapse 折叠面板 -->
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="24" :xl="24">
        <div class="grid-content bg-purple">
          <!-- 可同时展开多个面板，面板之间不影响 -->
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="8" :lg="12" :xl="12">
        <div class="grid-content bg-purple">
          <!-- 自定义面板 -->
          <collapse-list></collapse-list>
        </div>
      </el-col>
    </el-row>
     

    <!-- 手风琴效果 默认打开一个 -->
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="8" :lg="24" :xl="12">
        <div class="grid-content bg-purple">
         <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import collapseList from './components/collapse';// 自定义面板标题
export default {
  components:{
    collapseList
  },
  data() {
    return {
      activeNames: ['1'], // ollapse 折叠面板默认第一个
      activeName: '', //
      // select1
       options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        }
      ],
      // select2
       options2: [
        {
          value: '选项1',
          label: '黄金'
        },
        {
          value: '选项2',
          label: '双皮'
        }
      ],
      value: '',
      value2: '',
      searchHead: '',
      cities: ['上海', '北京', '广州', '深圳','合肥', '杭州', '无锡', '芜湖','上海1', '北京2', '广州3', '深圳4'],
      checkboxGroup2:[],
      showpop:true,
      showline:'',
      linePop:1,
      cardList:[
        {
          cardpic:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          titlenanme:'好吃的汉堡',
          time:'2019.09.25'
        },
         {
          cardpic:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          titlenanme:'肯德基汉堡',
          time:'2019.09.26'
        },
         {
          cardpic:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          titlenanme:'麦当劳汉堡',
          time:'2019.09.27'
        },
         {
          cardpic:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          titlenanme:'我做的汉堡',
          time:'2019.09.28'
        },
      ]
    }
  },
  methods: {
    // 可同时展开多个面板
    handleChange(val) {
      console.log(val);
    },
    // checkbox选值
    checkboxVal(checkboxGroup2){
      console.log(checkboxGroup2)
    },
    showLine(){
      this.showpop=false;
      this.linePop=0;
    },
    showLines(){
      this.showpop=true;
      this.linePop=1;
    }
  }
}
</script>
<style>
.main {
  padding: 20px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
}
.main-search {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  padding: 20px 10px;
  background: #f9f9f9;
}
.main-search .el-select{
  margin-bottom: 16px;
}
/* 响应式布局 */
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
/* card */
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.grid-content {
  margin-bottom: 20px;
}

.checkbox-div{
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start
}
.box-tit{
  line-height: 34px;
  min-width: 56px;
  width: 68px;
}
.checkbox-div .el-checkbox-button--medium .el-checkbox-button__inner {
    margin-right: 10px !important;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    margin-bottom: 10px
}
.el-checkbox-button.is-checked .el-checkbox-button__inner {
       border: 1px solid transparent;
}
.checkbox-div .el-checkbox-group{
    overflow: hidden;
}
.boxShow{
  height: 40px !important;
}
.el-collapse-item__arrow{
  margin-top: 10px;
  height: 15px;
}
</style>
