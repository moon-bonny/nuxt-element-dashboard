<template>
  <div class="index">
    <!-- <img class="home-img" :src="$store.state.meta.homePageImg" alt="homeImg" /> -->
    <el-data-table v-bind="$data" :hasEdit="false"> </el-data-table>
  </div>
</template>

<script>
import ElDataTable from '../components/el-data-table/el-data-table.vue'
import config from './config'
export default {
  components: {ElDataTable},
  data() {
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
