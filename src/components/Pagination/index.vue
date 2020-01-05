<template>
  <div :class="{'hidden':hidden}" class="-container">
   
    <!-- :background="background" 背景颜色 -->
    <!-- :current-page.sync="currentPage" 当前页 -->
    <!-- :page-size.sync="pageSize" 每页多少条 -->
    <!-- :layout="layout" 是否显示总条数的部分  -->
    <!-- :page-sizes="pageSizes" 设置每页展示的条数  -->
    <!-- :total="total" 总条数 -->
    <!-- @size-change="handleSizeChange" 监听手动点击页面的变化事件 -->
    <!-- @current-change="handleCurrentChange" 监听当前页变化的事件(比如按需加载) -->
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { scrollTo } from '@/utils/scroll-to'

export default {
  name: '',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: {
      get() {
        return this.limit
      },
      set(val) {
        this.$emit('update:limit', val)
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('', { page: this.currentPage, limit: val })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    },
    handleCurrentChange(val) {
      this.$emit('', { page: val, limit: this.pageSize })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    }
  }
}
</script>

<style scoped>
.-container {
  background: #fff;
  padding: 32px 16px;
}
.-container.hidden {
  display: none;
}
</style>
