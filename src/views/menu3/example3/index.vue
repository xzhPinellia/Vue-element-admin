<template>
  <div class="main">
    <div class="head-div">
      <div class="header-heading">
        <span class="heading-title">单号：234231029431</span>
        <div>
          <el-button size="mini">操作1</el-button>
          <el-button size="mini">操作2</el-button>
          <el-button size="mini">操作3</el-button>
          <el-button type="primary" size="mini">主操作</el-button>
        </div>
      </div>
      <div class="head-detail-main u-f-ac u-f-jsb">
        <div class="head-detail-main-le u-f-ac u-f-jsb">
          <div>
            <div>
              <span>创建人：</span> 曲丽丽
            </div>
            <div>
              <span>创建时间：</span> 2017-07-07
            </div>
            <div>
              <span>生效日期：</span> 2017-07-07 ~ 2017-08-08
            </div>
          </div>
          <div>
            <div>
              <span>订购产品：</span> XX 服务
            </div>
            <div>
              <span>关联单据：</span> 123456
            </div>
            <div>
              <span>备注：</span> 请于两个工作日内确认
            </div>
          </div>
        </div>
        <div class="head-detail-main-ri">
          <div class="u-f-ajc">
            <div>
              <span class="span-text">状态</span>
              <div>待审批</div>
            </div>
            <div>
              <span class="span-text">订单金额</span>
              <div>
                ¥520
                <span>.13</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="main-cont">
      <div class="head-div">
          <div class="timeline-tit">用户信息</div>
          <div class="descriptions-view">
            <table>
              <tbody>
                <tr class="descriptions-row">
                  <td colspan="1" class="descriptions-item">
                    <span class="descriptions-item-label">取货单号：</span>
                    <span class="descriptions-item-content">1000000000</span>
                  </td>
                  <td colspan="1" class="descriptions-item">
                    <span class="descriptions-item-label">状态：</span>
                    <span class="descriptions-item-content">已取货</span>
                  </td>
                  <td colspan="1" class="descriptions-item">
                    <span class="descriptions-item-label">销售单号：</span>
                    <span class="descriptions-item-content">1234123421</span>
                  </td>
                </tr>
                <tr class="descriptions-row">
                  <td colspan="3" class="descriptions-item">
                    <span class="descriptions-item-label">子订单：</span>
                    <span class="descriptions-item-content">3214321432</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>

      <div class="block timeline-bg">
        <div class="timeline-tit">基础用法</div>
        <div class="block">
          <div class="radio" style="margin-bottom:20px">
            排序：
            <el-radio-group v-model="reverse">
              <el-radio :label="true">倒序</el-radio>
              <el-radio :label="false">正序</el-radio>
            </el-radio-group>
          </div>

          <el-timeline :reverse="reverse">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp">
              {{activity.content}}
            </el-timeline-item>
          </el-timeline>
      </div>

      </div>

      <div class="block timeline-bg">
        <div class="timeline-tit">⾃定义节点样式</div>
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </div>

        <div class="block timeline-bg">
           <div class="timeline-tit">⾃定义时间戳</div>
            <el-timeline>
                <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/3 20:46</p>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
                </el-timeline-item>
            </el-timeline>
          </div>
        <div class="table-div">
          <div class="timeline-tit">表格</div>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="日期"
              width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="姓名"
              width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      <!-- tab切换表格 -->
      <div class="tab-div">
         <div class="timeline-tit">tab表格</div>
        <el-tabs v-model="activeName" @tab-click="handleClick"> 
          <el-tab-pane label="用户管理" name="first">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      reverse: true,
       activities: [{
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46'
        }],

         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        activeName: 'first',// tab默认第一个
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
     handleClick(tab, event) {
        console.log(tab, event);
      }
  }
};
</script>
<style scoped>
.main {
  padding: 15px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background: #f2f2f2;
}
.head-div,.timeline-bg{
    background: white;
    padding: 10px;
    margin-bottom: 20px;
}
.main-cont{
    margin-top: 20px;
}
.heading-title {
  display: inline-block;
  padding-right: 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 16px;
}
/* flex 布局 */
.u-f,
.u-f-ac,
.u-f-ajc {
  display: flex;
}
.u-f-ac,
.u-f-ajc {
  align-items: center;
}
.u-f-ajc {
  justify-content: center;
}
.u-f-jsb {
  justify-content: space-between;
}
.u-f1 {
  flex: 1;
}
.u-f-column {
  flex-direction: column;
}

.timeline-tit{
  margin-top: 10px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(232, 232, 232);
}
.header-heading{
  display: flex;
  justify-content: space-between
}
.head-detail-main-le {
  width: 60%;
}
.head-detail-main-le > div {
  width: 50%;
}
.head-detail-main-le > div div {
  height: 30px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}
.head-detail-main-le > div div span {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  white-space: nowrap;
}
.head-detail-main-ri {
  width: 40%;
  height: 60px;
}
.head-detail-main-ri > div div {
  text-align: right;
  width: 100px;
}
.head-detail-main-ri .span-text {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  display: inline-block;
  margin-bottom: 8px;
}
.head-detail-main-ri > div > div span {
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
}
.head-detail-main-ri > div > div div {
  color: rgba(0, 0, 0, 0.85);
  font-size: 24px;
}
.table-div{
  margin-top: 20px;
  margin-bottom: 20px;
  padding:10px 20px;
  background: #ffffff
}
.tab-div{
   padding:10px 20px;
    background: #ffffff
}
.descriptions-view table {
    width: 100%;
    table-layout: fixed;
}
.descriptions-row>td, .descriptions-row>th {
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
.descriptions-view {
    color: #606266;
    font-size: 14px;
}
</style>