<template>
  <div class="index">
    <!-- <img class="home-img" :src="$store.state.meta.homePageImg" alt="homeImg" /> -->
    <el-data-table v-bind="$data" :hasEdit="false"> </el-data-table>
  </div>
</template>

<script>
import ElDataTable from '../components/el-data-table/el-data-table.vue'
import format from '@/const/filter'
import config from './config'
export default {
  components: {ElDataTable},
  data() {
    config.columns = [
      {type: 'selection'},
      {prop: 'component_name', label: '组件名称'},
      {prop: 'type', label: '分类'},
      {prop: 'version', label: '版本'},
      {prop: 'dev_lang', label: '开发语言'},
      {
        prop: 'last_update_time',
        label: '最后更新时间',
        minWidth: '90px',
        formatter: row => format(row.last_update_time, 'YYYY-MM-DD')
      },
      {
        prop: 'status',
        label: '状态',
        formatter: row =>
          row.status === 1 ? (
            <span style={{color: '#67C23A'}}>上架</span>
          ) : (
            <span style={{color: '#909399'}}>下架</span>
          )
      }
    ]
    return config
  },
  methods: {}
}
</script>
<style lang="less">
.index {
  .home-img {
    width: 100%;
  }
}
</style>
