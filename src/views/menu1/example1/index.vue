<template>
  <div class="app-container">
    <el-form :model="listQuery" label-width="70px" size="small">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :lx="4">
          <el-form-item label="姓名">
            <el-input v-model="listQuery.defendantName" placeholder="请输入姓名" />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :lx="4">
          <el-form-item label="委托单位">
            <el-input v-model="listQuery.entrustedUnit" placeholder="请输入委托单位" />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :lx="4">
          <el-form-item label="调查状态">
            <el-select v-model="listQuery.investigationStatus" placeholder="请选择" style="width:100%;">
              <el-option label="未指派" value="未指派" />
              <el-option label="未调查" value="未调查" />
              <el-option label="未审核" value="未审核" />
              <el-option label="未审批" value="未审批" />
              <el-option label="审批通过" value="审批通过" />
              <el-option label="审批不通过" value="审批不通过" />
              <el-option label="审核通过" value="审核通过" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :lx="4">
          <el-form-item label-width="0px">
          <el-button type="primary" icon="el-icon-search" size="small" @click="handleFilter(listQuery)">搜索</el-button>
          <el-button type="primary" icon="el-icon-edit" size="small" @click="addTableData">添加</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="mb20">
        <el-checkbox v-model="entrustedUnitShow" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
          委托单位
        </el-checkbox>
        <el-checkbox v-model="personnelTypeShow" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
          拟适用矫正人员类型
        </el-checkbox>
        <el-checkbox v-model="defendantNameShow" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
          被告人（犯罪）姓名
        </el-checkbox>
        <el-checkbox v-model="chargeShow" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
          罪名
        </el-checkbox>
      </el-row>
    </el-form>
    <el-table
      :key="tableKey"
      ref="multipleTable"
      :data="tableDataList"
      border
      :header-cell-style="getRowClass"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="35" />
      <el-table-column label="ID" prop="id" sortable align="center" width="80"  :class-name="getSortClass('id')">
        <template slot-scope="scope1">
          <span>{{ scope1.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="entrustedUnitShow" label="委托单位" >
        <template slot-scope="scope">
          <span>{{ scope.row.entrustedUnit }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="personnelTypeShow" label="拟适用矫正人员类型" >
        <template slot-scope="scope">
          <span>{{ scope.row.personnelType }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="defendantNameShow" label="被告人（犯罪）姓名" >
        <template slot-scope="scope">
          <span>{{ scope.row.defendantName }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="chargeShow" label="罪名">
        <template slot-scope="scope">
          <span>{{ scope.row.charge }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="investigationStatus" label="调查状态" />
      <el-table-column align="center" label="操作">
        <template slot-scope="{row}">
          <el-row>
            <el-button size="mini" type="text" icon="el-icon-edit" @click="handleUpdate(row)">编辑</el-button>
            <el-button size="mini" type="text" icon="el-icon-delete" @click="handleModifyStatus(row)">删除</el-button>
            <span class="el-action-split"></span>
            <el-dropdown>
              <span class="el-dropdown-link">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>指派</el-dropdown-item>
                <el-dropdown-item>调查</el-dropdown-item>
                <el-dropdown-item disabled>审批</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <!-- 编辑和添加弹框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :model="temp" label-position="left" label-width="140px">
        <el-form-item label="委托单位">
          <el-input v-model="temp.entrustedUnit" />
        </el-form-item>
        <el-form-item label="拟适用矫正人员类型">
          <el-input v-model="temp.personnelType" />
        </el-form-item>
        <el-form-item label="被告人(罪犯)姓名">
          <el-input v-model="temp.defendantName" />
        </el-form-item>
        <el-form-item label="罪名">
          <el-input v-model="temp.charge" />
        </el-form-item>
        <el-form-item label="调查状态">
          <el-input v-model="temp.investigationStatus" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogStatus==='addTitle'?addListData():updateData()">确定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import Pagination from '@/components/Pagination' // 导入分页插件
export default {
  components: { Pagination },
  data() {
    return {
      tableData: [
        {
          id: 0,
          entrustedUnit: '合肥市中级人民法院',
          personnelType: '被告人',
          defendantName: '陈长生',
          charge: '故意伤害罪',
          investigationStatus: '未指派'
        },
        {
          id: 1,
          entrustedUnit: '第一女子监狱',
          personnelType: '罪犯',
          defendantName: '沈燕',
          charge: '放火罪',
          investigationStatus: '未审核'
        },
        {
          id: 2,
          entrustedUnit: '合肥市中级人民法院',
          personnelType: '罪犯',
          defendantName: '宋思国',
          charge: '走私文物罪',
          investigationStatus: '未调查'
        },
        {
          id: 3,
          entrustedUnit: '合肥市中级人民法院',
          personnelType: '被告人',
          defendantName: '王权',
          charge: '为亲友非法牟利罪',
          investigationStatus: '未审批'
        },
        {
          id: 4,
          entrustedUnit: '宝丰监狱',
          personnelType: '罪犯',
          defendantName: '查果果',
          charge: '盗窃、抢夺枪支、弹药、爆炸物、危险物质罪',
          investigationStatus: '审批通过'
        },
        {
          id: 5,
          entrustedUnit: '合肥市中级人民法院',
          personnelType: '罪犯',
          defendantName: '李伟明',
          charge: '伪造、变造金融票证罪',
          investigationStatus: '审批不通过'
        },
        {
          id: 6,
          entrustedUnit: '宝丰监狱',
          personnelType: '被告人',
          defendantName: '卢西奥',
          charge: '生产、销售劣药罪',
          investigationStatus: '审核通过'
        }
      ],
      tableDataList: [], // 表格数据
      dialogFormVisible: false, // 编辑弹窗默不显示
      entrustedUnitShow: true,
      personnelTypeShow: true,
      defendantNameShow: true,
      chargeShow: true,
      dialogStatus: '',
      textMap: {
        editTile: '案件编辑',
        addTitle: '案件添加'
      },
      temp: {
        id: undefined,
        entrustedUnit: '',
        personnelType: '',
        defendantName: '',
        charge: '',
        investigationStatus: ''
      },
      total: 1,
      listQuery: {
        page: 1,
        limit: 10,
        entrustedUnit: '',
        defendantName: '',
        investigationStatus: '',
        personnelType: '',
        sort: '+id'
      },
      tableKey: 0
    }
  },
  created() {
    this.handleFilter({})
  },

  methods: {
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: rgb(245, 247, 250);'
      } else {
        return ''
      }
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 搜索按钮
    handleFilter({ defendantName, entrustedUnit, investigationStatus }) {
      this.tableDataList = this.tableData.filter(item => {
        let matchDefendantName = true // 姓名 筛选
        let matchEntrustedUnit = true // 委托单位 筛选
        let matchInvestigationStatus = true // 调查状态 筛选
        if (defendantName) {
          const keys = defendantName.toUpperCase().replace('', '').split('') // 转成大写 删掉空格 切割成单个字
          matchDefendantName = keys.every(key => item.defendantName.toUpperCase().includes(key))
        }
        if (entrustedUnit) {
          const keys = entrustedUnit.toUpperCase().replace('', '').split('') // 转成大写 删掉空格 切割成单个字
          matchEntrustedUnit = keys.every(key => item.entrustedUnit.toUpperCase().includes(key))
        }
        if (investigationStatus) {
          matchInvestigationStatus = item.investigationStatus === investigationStatus
        }
        return matchDefendantName && matchEntrustedUnit && matchInvestigationStatus
      })
      // 清空输入框
      this.listQuery.defendantName = ''
      this.listQuery.entrustedUnit = ''
      this.listQuery.investigationStatus = ''
    },
    // 添加的数据项
    addForm() {
      this.temp = {
        id: '',
        entrustedUnit: '',
        personnelType: '',
        defendantName: '',
        charge: '',
        investigationStatus: ''
      }
    },
    // 添加按钮
    addTableData() {
      this.addForm()
      this.dialogStatus = 'addTitle'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    // 添加确定按钮
    addListData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id++
          // this.temp.id = parseInt(Math.random() * 100) + 1024
          this.tableData.unshift(this.temp)
          this.dialogFormVisible = false
          this.$message({
            message: '添加成功',
            type: 'success'
          })
        }
      })
      this.handleFilter({})
    },
    // 删除按钮
    handleModifyStatus(row) {
      const index = this.tableData.findIndex(item => {
        return item.id === row.id
      })
      console.log(index)
      this.tableData.splice(index, 1)
      this.$message({
        message: '删除成功',
        type: 'success'
      })
      this.handleFilter({})
    },
    // 编辑按钮
    handleUpdate(row) {
      this.temp = Object.assign({}, row)
      this.temp = this.temp
      this.dialogStatus = 'editTitle'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    // 编辑确定按钮
    updateData() {
      this.$refs[ 'dataForm' ].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          for (const v of this.tableData) {
            if (v.id === this.temp.id) {
              const index = this.tableData.indexOf(v)
              this.tableData.splice(index, 1, this.temp)
              break
            }
          }
          this.dialogFormVisible = false
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        }
      })
      this.handleFilter({})
    },
    // 获取分页数据
    getList() {
      console.log(132)
    },
    // 获取排序的类名(正序和倒序)
    getSortClass: function(key) {
      // console.log(key,'------')
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : sort === `-${key}` ? 'descending' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .mb20 {
    margin-bottom: 20px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    font-size: 12px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .el-action-split{
    width: 1px;
    height: 20px;
    background-color: #e8e8e8;
    display: inline-block;
    vertical-align: middle;
    margin:0 5px;
  }
</style>