<template>
  <div class="app-container">
    <div class="content">内容：Transfer 穿梭框</div>
    <h3>基础用法</h3>
    <el-transfer v-model="value1" :data="data1"></el-transfer>

    <h3>可搜索</h3>
    <el-transfer
    filterable
    :filter-method="filterMethod"
    filter-placeholder="请输入城市拼音"
    v-model="value2"
    :data="data2">
  </el-transfer>

  <h3>可自定义</h3>
  <p style="text-align: center; margin: 0 0 20px">使用 render-content 自定义数据项</p>
  <div style="text-align: center">
    <el-transfer
      style="text-align: left; display: inline-block"
      v-model="value3"
      filterable
      :left-default-checked="[2, 3]"
      :right-default-checked="[1]"
      :render-content="renderFunc"
      :titles="['Source', 'Target']"
      :button-texts="['到左边', '到右边']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      @change="handleChange"
      :data="data3">
      <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
      <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
    </el-transfer>
  </div>
  <p style="text-align: center; margin: 50px 0 20px">使用 scoped-slot 自定义数据项</p>
  <div style="text-align: center">
    <el-transfer
      style="text-align: left; display: inline-block"
      v-model="value4"
      filterable
      :left-default-checked="[2, 3]"
      :right-default-checked="[1]"
      :titles="['Source', 'Target']"
      :button-texts="['到左边', '到右边']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      @change="handleChange"
      :data="data3">
      <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
      <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
      <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
    </el-transfer>
  </div>

  <h3>数据项属性别名</h3>
  <el-transfer
    v-model="value5"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :data="data5">
  </el-transfer>

  </div>
</template>

<script>
export default {
  data() {
    const generateData1 = _ => {
      const data1 = [];
      for (let i = 1; i <= 15; i++) {
        data1.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data1;
    };
    const generateData2 = _ => {
      const data2 = [];
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
      cities.forEach((city, index) => {
        data2.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data2;
    };
    const generateData3 = _ => {
      const data3 = [];
      for (let i = 1; i <= 15; i++) {
        data3.push({
          key: i,
          label: `备选项 ${ i }`,
          disabled: i % 4 === 0
        });
      }
      return data3;
    };
    const generateData5 = _ => {
      const data5 = [];
      for (let i = 1; i <= 15; i++) {
        data5.push({
          value: i,
          desc: `备选项 ${ i }`,
          disabled: i % 4 === 0
        });
      }
      return data5;
    };
    return {
      data1: generateData1(),
      value1: [1, 4],
      data2: generateData2(),
      value2: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      },
      data3: generateData3(),
      value3: [1],
      value4: [1],
      renderFunc(h, option) {
        return <span>{ option.key } - { option.label }</span>;
      },
      data5: generateData5(),
      value5: []
    };
  },
  methods: {
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
  border-bottom: 1px solid #ccc;
}
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>
