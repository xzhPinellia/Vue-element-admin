<template>
  <div class="menu2-example1">
    <el-alert title="成功提示的文案" type="success"></el-alert>
    <el-form class="main" :model="form" :rules="rules" ref="ruleForm" label-position="top" size="small">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>仓库管理</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :lx="8">
              <el-form-item label="仓库名" prop="name">
                <el-input clearable placeholder="请输入仓库名称" v-model="form.name" style="width:100%"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :lx="8">
              <el-form-item label="仓库域名">
                <el-input placeholder="请输入内容" style="width:100%">
                  <el-select slot="prepend" v-model="valuepre" value="http://" placeholder="请选择" style="width:90px">
                    <el-option value="http://">http://</el-option>
                    <el-option value="https://">https://</el-option>
                  </el-select>
                  <el-select slot="append" v-model="valueend" value=".com" style="width:90px">
                    <el-option value=".com" is-select>.com</el-option>
                    <el-option value=".cn">.cn</el-option>
                    <el-option value=".net">.net</el-option>
                    <el-option value=".com.cn">.com.cn</el-option>
                    <el-option value=".net.cn">.net.cn</el-option>
                    <el-option value=".org.cn">.org.cn</el-option>
                    <el-option value=".me">.me</el-option>
                    <el-option value=".cc">.cc</el-option>
                  </el-select>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :lx="8">
              <el-form-item label="仓库管理员">
                <el-select filterable clearable v-model="form.selectValue" placeholder="请选择" style="width:100%">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :lx="8">
              <el-form-item label="审批人">
                <el-select filterable clearable v-model="form.selectValue" placeholder="请选择" style="width:100%">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :lx="8">
              <el-form-item label="生效日期">
                <el-date-picker
                  v-model="datevalue1"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期" style="width:100%">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :lx="8">
              <el-form-item label="仓库类型">
                <el-select filterable clearable v-model="form.selectValue" placeholder="请选择" style="width:100%">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
      </el-card>
      <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>任务管理</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :lx="8">
            <el-form-item label="任务名" prop="rname">
              <el-input clearable placeholder="请输入任务名称" v-model="form.rname" style="width:100%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :lx="8">
            <el-form-item label="任务描述">
              <el-input
                type="textareax"
                :rows="1"
                placeholder="请输入内容"
                v-model="textareax">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :lx="8">
            <el-form-item label="立即执行">
              <el-switch
                v-model="valuelj"
                active-text="立即执行"
                inactive-text="等待执行">
              </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :lx="8">
            <el-form-item label="执行人">
              <el-select v-model="valuezxr" multiple placeholder="请选择" style="width:100%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :lx="8">
            <el-form-item label="生效日期">
              <el-time-picker
                v-model="valuesxsj"
                :picker-options="{
                  //selectableRange: '18:30:00 - 20:30:00'
                }"
                placeholder="任意时间点" style="width:100%;">
              </el-time-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :lx="8">
            <el-form-item label="并发量">
              <el-input-number v-model="numx" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
      
      </el-card>
      <el-card class="box-card">
        <!-- <div slot="header" class="clearfix">
          <span>成员管理</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div> -->
      
        <el-row style="margin:-10px;">
          <el-tabs tab-position="top">
            <el-tab-pane label="操作历史">
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
            </el-tab-pane>
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-row>      
     </el-card>
    </el-form>
    <div style="height:60px;"></div>
    <el-footer class="fixed-footer">
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
    </el-footer>
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
      ],
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 2, max: 4, message: '请输入2-4个字符', trigger: 'blur' }
        ]
      },
      pickerOptions: {
      },
      datevalue1: '',
      valuelj: true,
      valuezxr: [],
      valuesxsj:'',
      textareax:'',
      numx:1,
      valuepre:'http://',
      valueend:'.com'
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
    },
    handleChange(value) {
        console.log(value);
    }
  }
}
</script>
<style lang="scss" scoped>
  .menu2-example1 {
    background: #f0f2f5;
    min-height: calc(100vh - 50px);
    padding:15px;
  }
  .main {
    //background: #ffffff;
    margin: 0px;
  }
  .el-alert+ .main{ margin-top: 15px;}
  .el-card~.el-card{ margin-top: 15px;}
  .fixed-footer{ position: fixed; bottom:0; background-color: #ffffff; right: 0; width: calc(100% - 210px); text-align: center; padding-top: 10px; border-top: 1px solid #e8e8e8; box-shadow:0 -1px 2px rgba(0,0,0,.03)}
</style>