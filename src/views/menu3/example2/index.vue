<template>
  <div class="main">
    <!-- 头部搜索 -->
    <div class="main-search">
      <span>所属项目：</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>&nbsp;&nbsp;
      <span>其他项目：</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>

    <!--  -->
    <div class="from-div">
      <div class="from-tit">Dialog 弹窗</div>
        <el-button type="primary" @click="dialogFormVisible = true">表单</el-button>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" style="width:70%"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域" style="width: 336px;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>

        <el-button type="primary" @click="dialogVisible = true">点击打开 Dialog</el-button>

        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>


        <el-button
          plain
          @click="open1">
          可自动关闭
        </el-button>
        <el-button
          plain
          @click="open2">
          不会自动关闭
          </el-button>

        <div class="botton-div">
          <el-button
            plain
            @click="open3">
            成功
          </el-button>
          <el-button
            plain
            @click="open4">
            警告
          </el-button>
          <el-button
            plain
            @click="open5">
            消息
          </el-button>
          <el-button
            plain
            @click="open6">
            错误
          </el-button>
        </div>
        <div class="botton-div">
            <el-button
            plain
            @click="open7">
            右上角
          </el-button>
          <el-button
            plain
            @click="open8">
            右下角
          </el-button>
          <el-button
            plain
            @click="open9">
            左下角
          </el-button>
          <el-button
            plain
            @click="open10">
            左上角
          </el-button>
        </div>
          
    </div>
    



    <!-- 一排二个 -->
    <el-row :gutter="10">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="centerDialogVisible = true">操作弹窗</el-button>
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

    <!-- 一排四个 -->
    <el-row :gutter="10">
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="http://pin.xzhmiss.cn/hlw.jpg"
              class="image"
            />
            <div style="padding: 14px;">
              <span>我是详情</span>
              <div class="bottom clearfix">
                <time class="time">2019.09.20</time>
                <el-button type="text" class="button" @click="centerDialogVisible = true">详情弹窗</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="http://pin.xzhmiss.cn/hlw.jpg"
              class="image"
            />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">2019.09.20</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="http://pin.xzhmiss.cn/hlw.jpg"
              class="image"
            />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">2019.09.20</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="grid-content bg-purple">
          <!-- card -->
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="http://pin.xzhmiss.cn/hlw.jpg"
              class="image"
            />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">2019.09.20</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
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
      <el-col :xs="24" :sm="12" :md="8" :lg="12" :xl="24">
        <div class="grid-content bg-purple">
          <!-- 每次只能展开一个面板 -->
          <el-collapse v-model="activeName2" accordion>
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
      <el-col :xs="24" :sm="12" :md="8" :lg="24" :xl="12">
        <div class="grid-content bg-purple">
          <!-- 除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。 -->
          <el-collapse accordion>
            <el-collapse-item>
              <template slot="title">
                一致性 Consistency
                <i class="header-icon el-icon-info"></i>
              </template>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
    </el-row>

    <!-- 详情弹出层 -->
    <el-dialog  title="详情" :visible.sync="centerDialogVisible" width="76%" center>
      <div class="dialog-div" >
        <!-- 退款信息 -->
        <div>
          <div class="desc-title">退款申请</div>
          <div class="ant-descriptions-view">
            <table>
              <tbody>
                <tr class="ant-descriptions-row">
                  <td colspan="1" class="ant-descriptions-item">
                    <span class="ant-descriptions-item-label">取货单号：</span>
                    <span class="ant-descriptions-item-content">1000000000</span>
                  </td>
                  <td colspan="1" class="ant-descriptions-item">
                    <span class="ant-descriptions-item-label">状态：</span>
                    <span class="ant-descriptions-item-content">已取货</span>
                  </td>
                  <td colspan="1" class="ant-descriptions-item">
                    <span class="ant-descriptions-item-label">销售单号：</span>
                    <span class="ant-descriptions-item-content">1234123421</span>
                  </td>
                </tr>
                <tr class="ant-descriptions-row">
                  <td colspan="3" class="ant-descriptions-item">
                    <span class="ant-descriptions-item-label">子订单：</span>
                    <span class="ant-descriptions-item-content">3214321432</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="divider-border" style="margin-bottom: 32px;"></div>
        </div>
        <!-- 用户信息 -->
        <div>
          <div class="desc-title">用户信息</div>
          <div class="ant-descriptions-view">
            <table>
              <tbody>
                <tr class="ant-descriptions-row">
                  <td colspan="1" class="ant-descriptions-item">
                    <span class="ant-descriptions-item-label">用户姓名：</span>
                    <span class="ant-descriptions-item-content">付小小</span>
                  </td>
                  <td colspan="1" class="ant-descriptions-item">
                    <span class="ant-descriptions-item-label">联系电话：</span>
                    <span class="ant-descriptions-item-content">18100000000</span>
                  </td>
                  <td colspan="1" class="ant-descriptions-item">
                    <span class="ant-descriptions-item-label">常用快递：</span>
                    <span class="ant-descriptions-item-content">菜鸟仓储</span>
                  </td>
                </tr>
                <tr class="ant-descriptions-row">
                  <td colspan="3" class="ant-descriptions-item">
                    <span class="ant-descriptions-item-label">取货地址：</span>
                    <span class="ant-descriptions-item-content">安徽省合肥市之心城</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="divider-border" style="margin-bottom: 32px;"></div>
        </div>

        <template>
          <div class="desc-title">商品列表</div>
          <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
          >
            <el-table-column label="Date" prop="date"></el-table-column>
            <el-table-column label="Name" prop="name"></el-table-column>
            <el-table-column align="right">
              <template slot="header" slot-scope="scope">
                <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
              </template>
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
           
           <div class="divider-border" style="margin-bottom: 32px;"></div>
        
        <div>
          <div class="desc-title">商品列表2</div>
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
            >
            <el-table-column
              prop="date"
              label="日期"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              :formatter="formatter">
            </el-table-column>
          </el-table>
        </div>


      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1'], // ollapse 折叠面板默认第一个
      activeName2: '1', //
      // select
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      // 弹出层表格
      centerDialogVisible: false, // 默认隐藏
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      search: '',
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        dialogVisible: false
    }
  },
  methods: {
    // 可同时展开多个面板
    handleChange(val) {
      console.log(val)
    },
    // 表格操作
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    formatter(row, column) {
        return row.address;
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      open1() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },

      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      },
      open3() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open6() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      },
      open7() {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息'
        });
      },

      open8() {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        });
      },

      open9() {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        });
      },

      open10() {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        });
      }
  }
}
</script>
<style scoped>
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
/*  */
.ant-descriptions-view table {
    width: 100%;
    table-layout: fixed;
}
.ant-descriptions-row>td, .ant-descriptions-row>th {
    padding-bottom: 16px;
}
.divider-border {
    display: block;
    clear: both;
    width: 100%;
    min-width: 100%;
    height: 1px;
    margin: 18px 0;
    background: #ebeef5;
}
.desc-title{
     margin-bottom: 20px;
    color: rgba(0,0,0,.85);
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
}
.from-div{
   margin-bottom: 30px;
}
.from-tit{
  margin-bottom: 20px;
  font-size: 20px;
}
.botton-div{
  margin-top: 20px;
}
.dialog-div {
        height: 480px;
        overflow-y: scroll;
}
@media screen and (max-width: 768px) {
    .dialog-div {
        height:500px;
    }
}
@media screen and (min-width:769px) and (max-width:1200px){
 .dialog-div {
        height: 520px;
    }
}
@media screen and (min-width:1201px) and (max-width:1500px){
 .dialog-div {
        height: 530px;
    }
}
@media screen and (min-width:1501px) {
 .dialog-div {
        height: 700px;
    }
}
</style>
