export default {
  searchForm: [
    {
      $el: {placeholder: '请输入'},
      label: '组件名称',
      $id: 'component_name',
      $type: 'input'
    },
    {
      $el: {placeholder: '请选择分类'},
      label: '分类',
      $id: 'type',
      $type: 'select',
      $options: [
        '前端组件',
        '测试子组件',
        '分布式工具',
        '应用服务',
        '数据存储'
      ].map(f => ({label: f, value: f}))
    },
    {
      $el: {placeholder: '请选择状态'},
      label: '状态',
      $id: 'status',
      $type: 'select',
      $options: ['上架', '下架'].map(f => ({label: f, value: f}))
    }
  ],
  form: [
    {
      $type: 'input',
      $id: 'component_name',
      label: '组件名称',
      rules: [{required: true, message: '请输入组件名称', trigger: 'blur'}]
    },
    {
      $type: 'select',
      $id: 'type',
      label: '分类',
      rules: [{required: true, message: '请选择分类', trigger: 'blur'}],
      $type: 'select',
      $options: [
        '前端组件',
        '测试子组件',
        '分布式工具',
        '应用服务',
        '数据存储'
      ].map(f => ({label: f, value: f}))
    },
    {
      $type: 'input',
      $id: 'version',
      label: '版本',
      rules: [{required: true, message: '请输入版本', trigger: 'blur'}]
    },
    {
      $type: 'input',
      $id: 'dev_lang',
      label: '开发语言',
      rules: [{required: true, message: '请输入开发语言', trigger: 'blur'}]
    },
    {
      $type: 'date-picker',
      $id: 'last_update_time',
      label: '最后更新时间',
      rules: [{required: true, message: '请选择最后更新时间', trigger: 'blur'}],
      $el: {
        // type: 'daterange',   // 如果 type 为 daterange，则获取到的是一个数组
        placeholder: '请选择',
        valueFormat: 'timestamp' // 不使用 value-format 属性，则获取到的是一个空对象，格式请参考 element-ui 组件 date-picker 的日期格式部分
      }
    },
    {
      $type: 'select',
      $id: 'status',
      label: '状态',
      rules: [{required: true, message: '请选择状态', trigger: 'blur'}],
      $options: ['上架', '下架'].map(f => ({label: f, value: f})),
      $el: {
        placeholder: '请选择状态'
      }
    }
  ],
  formAttrs: {labelWidth: '120px'},
  url: '/api/get-index-list',
  extraButtons: [
    {
      type: 'primary',
      text: '查看',
      atClick: row => {}
    },
    {
      text: '编辑',
      atClick: row => {}
    },
    {
      show: function(row) {
        this.text = row.status === 1 ? '下架' : '上架'
        return this.text
      },
      atClick: function(row) {
        let text = row.status === 1 ? '下架' : '上架'
        return Promise.resolve(alert(text + ':' + row.component_name))
      }
    }
  ],
  // dataPath: 'items',
  // totalPath: 'total_count',
  operationAttrs: {
    minWidth: '110px'
  },
  canDelete() {
    return false
  }
}
