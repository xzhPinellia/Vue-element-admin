<template>
  <div class="menu2-example1">
    <div class="top">
      内容：Radio 单选框、Checkbox 多选框、Input 输入框、Select 选择器(及联动)。
    </div>
    <div class="main">
      <el-form :model="form" :rules="rules" ref="ruleForm" label-width="35%">
        <el-form-item label="姓名：">
          <el-input clearable placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="职业：">
          <el-select filterable clearable v-model="form.selectValue" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="性别：">
          <el-radio v-model="form.radio" label="男">男</el-radio>
          <el-radio v-model="form.radio" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="爱好：">
          <el-checkbox-group v-model="form.checkList">
            <el-checkbox label="打篮球"></el-checkbox>
            <el-checkbox label="踢足球"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="其他"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="自我介绍：">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        name: '',
        selectValue: '',
        radio: '男',
        checkList: [],
        desc: ''
      },
      options: [
        {
          value: '前端开发工程师',
          label: '前端开发工程师'
        }, {
          value: 'Java开发工程师',
          label: 'Java开发工程师'
        }, {
          value: 'php开发工程师',
          label: 'php开发工程师',
          disabled: true
        }, {
          value: '其他',
          label: '其他'
        }
      ]
    }
  },
  methods: {
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert(JSON.stringify(this.form));
        } else {
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
      this.form = {
        name: '',
        selectValue: '',
        radio: '男',
        checkList: [],
        desc: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .menu2-example1 {
    background: #f0f2f5;
    min-height: calc(100vh - 50px);
  }
  .top {
    padding: 15px;
    background: white;
  }
  .main {
    background: white;
    margin: 15px;
    padding: 20px;
  }
  .el-form {
    overflow: hidden;
  }
  .el-input {
    width: 200px;
  }
  .el-textarea {
    width: 300px;
  }
</style>