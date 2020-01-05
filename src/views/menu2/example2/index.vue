<template>
  <div class="menu2-example2">
    <div class="top">
      内容：TimePicker、DatePicker、DateTimePicker 选择器、Upload 上传、InputNumber 计数器、Cascader 级联选择器、Switch 开关。
    </div>
    <div class="main">
      <div class="main-top">
        <div class="step-wrap" v-for="item in stepList" :key="item.num">
          <div class="step" @click="changeStep(item.num)">
            <div class="btn" :class="chooseNum === item.num ? 'chooseBtn' : ''">{{item.num}}</div>
            <span class="step-font" :class="chooseNum === item.num ? 'chooseFont' : ''">{{item.con}}</span>
          </div>
          <div class="line" v-if="item.num !== stepList.length"></div>
        </div>
      </div>
      <div class="main-con">
        <el-form :model="form1" v-if="chooseNum === 1" label-width="35%">
          <el-form-item label="TimePicker：">
            <el-time-picker
              is-range
              v-model="form1.timeValue"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围">
            </el-time-picker>
          </el-form-item>
          <el-form-item label="DatePicker：">
            <el-date-picker
              v-model="form1.dateValue1"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions1">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="DatePicker（范围）：">
            <el-date-picker
              v-model="form1.dateValue2"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="DateTimePicker：" >
            <el-date-picker
              v-model="form1.dateTimeValue"
              type="datetimerange"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="nextClick(2)">下一步</el-button>
          </el-form-item>
        </el-form>
        <el-form v-if="chooseNum === 2" class="form2" label-width="35%">
          <el-form-item label="点击上传：">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="form2.fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="用户头像上传：">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
            <img v-if="form2.imageUrl" :src="form2.imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          </el-form-item>
          <el-form-item label="照片墙：">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="form2.dialogVisible" size="tiny">
              <img width="100%" :src="form2.dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="图片列表缩略图：">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="form2.fileList2"
              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="上传文件列表控制：">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :file-list="form2.fileList3">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="拖拽上传：">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="手动上传：">
            <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="form2.fileList4"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="previousClick()">上一步</el-button>
            <el-button type="primary" @click="nextClick()">下一步</el-button>
          </el-form-item>
        </el-form>
        <el-form v-if="chooseNum === 3" class="form3">
          <el-form-item class="border-wrap" style="padding-bottom: 20px;">
            <div>InputNumber 计数器：</div>
            <el-input-number v-model="form3.num1" @change="inputNumChange" :min="1" :max="10"></el-input-number>
            <el-input-number size="medium" v-model="form3.num2" :step="2" @change="inputNumChange"></el-input-number>
            <el-input-number v-model="form3.num3" controls-position="right" @change="inputNumChange"></el-input-number>
          </el-form-item>
          <div class="border-wrap">
            <el-form-item>
              <div class="select-wrap">
                <div class="demonstration">默认 click 触发子菜单</div>
                <div class="demonstration">仅显示最后一级</div>
                <el-cascader
                  :options="options"
                  :show-all-levels="false"
                  v-model="form1.selectedOptions1"
                  @change="handleSelecteChange">
                </el-cascader>
              </div>
              <div class="select-wrap">
                <div class="demonstration">hover 触发子菜单</div>
                <el-cascader
                  expand-trigger="hover"
                  :options="options"
                  v-model="form1.selectedOptions2"
                  @change="handleSelecteChange">
                </el-cascader>
              </div>
            </el-form-item>
            <el-form-item>
              <div class="select-wrap">
                <div class="demonstration">动态加载次级选项</div>
                <el-cascader
                  :options="options2"
                  @active-item-change="handleItemChange"
                  :props="props"
                ></el-cascader>
              </div>
              <div class="select-wrap">
                <div class="demonstration">选择即改变</div>
                <el-cascader
                  :options="options"
                  change-on-select
                ></el-cascader>
              </div>
            </el-form-item>
            <el-form-item>
              <div class="select-wrap">
                <div class="demonstration">可搜索（只可选择最后一级）</div>
                <el-cascader
                  placeholder="试试搜索：指南"
                  :options="options"
                  filterable
                ></el-cascader>
              </div>
              <div class="select-wrap">
                <div class="demonstration">可搜索（可选择任意一级）</div>
                <el-cascader
                  placeholder="试试搜索：指南"
                  :options="options"
                  filterable
                  change-on-select
                ></el-cascader>
              </div>
            </el-form-item>
          </div>
          <div class="border-wrap" style="margin-top: 20px;">
            <el-form-item>
              <div class="select-wrap">
                <div class="demonstration">基本用法</div>
                <el-switch
                  v-model="form3.switchValue1"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
              </div>
              <div class="select-wrap">
                <div class="demonstration">文字描述</div>
                <el-switch
                  v-model="form3.switchValue2"
                  active-text="按月付费"
                  inactive-text="按年付费">
                </el-switch>
                <el-switch
                  style="display: block"
                  v-model="form3.switchValue3"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-text="按月付费"
                  inactive-text="按年付费">
                </el-switch>
              </div>
            </el-form-item>
            <el-form-item>
              <div class="select-wrap">
                <div class="demonstration">扩展的 value 类型</div>
                <el-tooltip :content="'Switch value: ' + form3.switchValue4" placement="top">
                  <el-switch
                    v-model="form3.switchValue4"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-value="100"
                    inactive-value="0">
                  </el-switch>
                </el-tooltip>
              </div>
              <div class="select-wrap">
                <div class="demonstration">禁用状态</div>
                <el-switch
                  v-model="form3.switchValue5"
                  disabled>
                </el-switch>
                <el-switch
                  v-model="form3.switchValue6"
                  disabled>
                </el-switch>
              </div>
            </el-form-item>    
          </div>
          <el-form-item style="margin-top: 20px;">
            <el-button type="primary" @click="previousClick()">上一步</el-button>
            <el-button type="primary" @click="okClick()">完成</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import options from './selectedOption.js'
export default {
  data() {
    return {
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      stepList: [
        {
          num: 1,
          con: '第一步'
        }, {
          num: 2,
          con: '第二步'
        }, {
          num: 3,
          con: '第三步'
        }
      ],
      chooseNum: 1,
      form1: {
        timeValue: '',
        dateValue1: '',
        dateValue2: '',
        dateTimeValue: ''
      },
      form2: {
        fileList: [],
        imageUrl: '',
        dialogImageUrl: '',
        dialogVisible: false,
        fileList2: [],
        fileList3: [],
        fileList4: []
      },
      form3: {
        num1: 1,
        num2: 3,
        num3: 1,
        selectedOptions1: [],
        selectedOptions2: [],
        switchValue1: true,
        switchValue2: true,
        switchValue3: true,
        switchValue4: '100',
        switchValue5: true,
        switchValue6: false
      },
      options: options,
      options2: [{
        label: '江苏',
        cities: []
      }, {
        label: '浙江',
        cities: []
      }],
      props: {
        value: 'label',
        children: 'cities'
      }
    }
  },
  methods: {
    nextClick() {  
      this.chooseNum ++
    },
    previousClick() {
      this.chooseNum --
    },
    okClick() {
      this.chooseNum = 1
    },
    changeStep(num) {
      this.chooseNum = num
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    handleAvatarSuccess(res, file) {
      this.form2.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleChange(file, fileList) {
      this.fileList3 = fileList.slice(-3);
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    inputNumChange(value) {
      console.log('num1=' + this.form3.num1, 'num2=' + this.form3.num2, 'num3=' + this.form3.num3);
    },
    handleSelecteChange(value) {
      console.log(value)
    },
    handleItemChange(val) {
      console.log('active item:', val);
      setTimeout(_ => {
        if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
          this.options2[0].cities = [{
            label: '南京'
          }];
        } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
          this.options2[1].cities = [{
            label: '杭州'
          }];
        }
      }, 300);
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu2-example2 {
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
    .main-con {
      margin-top: 40px;
      .form3 .el-form-item {
        display: flex;
        justify-content: center;
      }
      .select-wrap {
        display: inline-block;
        padding: 0 20px;
        .demonstration {
          text-align: center;
        }
      }
      .form2 .el-form-item, .border-wrap {
        border: 1px solid #e8e8e8;

      }
      .form2 .el-form-item:last-of-type {
        border: none;
      }
    }
  }
  .main-top {
    display: flex;
    justify-content: center;
    .step-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      .step {
        color: #DCDFE6;
        cursor: pointer;
        .btn {
          display: inline-block;
          background: white;
          border: 1px solid #DCDFE6;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          line-height: 30px;
          text-align: center;
        }
        .chooseBtn {
          color: white;
          border: none;
          background: #409eff;
          border: 1px solid #409eff;
        }
        .chooseFont {
          color: black;
        }
      }
      .step:hover .btn {
        color: white;
        border: none;
        background: #409eff;
        border: 1px solid #409eff;
      }
      .step:hover .step-font {
        color: black;
      }
      .line {
        width: 10vw;
        height: 1px;
        background: #DCDFE6;
        margin: 0 20px;
      }
    }
  }
  
</style>