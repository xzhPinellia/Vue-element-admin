<template>
  <div class="app-container">
    <div class="content">内容：Table 表格</div>
    <h3>固定表头</h3>
    <el-table :data="tableData1" height="250" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="300" />
      <el-table-column prop="name" label="姓名" width="300" />
      <el-table-column prop="address" label="地址" width="750" />
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData1)">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <h3>固定列</h3>
    <el-table :data="tableData2" style="width: 100%" max-height="250">
      <el-table-column fixed prop="date" label="日期" width="230" />
      <el-table-column prop="name" label="姓名" width="230" />
      <el-table-column prop="province" label="省份" width="230" />
      <el-table-column prop="city" label="市区" width="230" />
      <el-table-column prop="address" label="地址" width="530" />
      <el-table-column prop="zip" label="邮编" width="230" />
      <el-table-column fixed="right" label="操作" width="230">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData2)">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData1: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
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
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      tableData2: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1)
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
