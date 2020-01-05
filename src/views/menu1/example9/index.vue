<template>
  <div class='app-container'>
    <div class='content'>内容：Popover 弹出框</div>
    <h3>基础用法</h3>
    <el-popover
      placement='top-start'
      title='标题'
      width='200'
      trigger='hover'
      content='这是一段内容,这是一段内容,这是一段内容,这是一段内容。'
    >
      <el-button slot='reference'>hover 激活</el-button>
    </el-popover>

    <el-popover
      placement='bottom'
      title='标题'
      width='200'
      trigger='click'
      content='这是一段内容,这是一段内容,这是一段内容,这是一段内容。'
    >
      <el-button slot='reference'>click 激活</el-button>
    </el-popover>

    <el-popover
      ref='popover'
      placement='right'
      title='标题'
      width='200'
      trigger='focus'
      content='这是一段内容,这是一段内容,这是一段内容,这是一段内容。'
    ></el-popover>
    <el-button v-popover:popover>focus 激活</el-button>

    <el-popover
      placement='bottom'
      title='标题'
      width='200'
      trigger='manual'
      content='这是一段内容,这是一段内容,这是一段内容,这是一段内容。'
      v-model='visible'
    >
      <el-button slot='reference' @click='visible = !visible'>手动激活</el-button>
    </el-popover>

    <h3>嵌套信息</h3>
    <el-popover placement='right' width='400' trigger='click'>
      <el-table :data='gridData'>
        <el-table-column width='150' property='date' label='日期'></el-table-column>
        <el-table-column width='100' property='name' label='姓名'></el-table-column>
        <el-table-column width='300' property='address' label='地址'></el-table-column>
      </el-table>
      <el-button slot='reference'>click 激活</el-button>
    </el-popover>

    <h3>嵌套操作</h3>
    <el-popover placement='top' width='160' v-model='visible'>
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <div style='text-align: right; margin: 0'>
        <el-button size='mini' type='text' @click='visible = false'>取消</el-button>
        <el-button type='primary' size='mini' @click='visible = false'>确定</el-button>
      </div>
      <el-button slot='reference'>删除</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      gridData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  padding: 15px;
  border-bottom: 1px solid #ccc;
}
</style>
