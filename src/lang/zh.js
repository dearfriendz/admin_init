export default {
  route: {
    dashboard: 'Dashboard',
    permission: '权限测试页',
    icons: '图标',
    components: '组件',
    content: '内容管理',
    option: '选项1',
    componentIndex: '介绍',
    tinymce: '编辑文章',
    editBanner: 'editBanner',
    addArticle: '新建文章',
    markdown: 'Markdown',
    jsonEditor: 'JSON编辑器',
    dndList: '列表拖拽',
    splitPane: 'Splitpane',
    avatarUpload: '头像上传',
    dropzone: '上传图片',
    sticky: '置顶',
    countTo: 'CountTo',
    componentMixin: '小组件',
    backToTop: '返回顶部',
    charts: '图表',
    keyboardChart: '键盘图表',
    lineChart: '折线图',
    mixChart: '混合图表',
    example: '综合实例',
    Table: 'Table',
    addTable: '新增资讯',
    articleList: '资讯管理',
    dynamicTable: '动态Table',
    dragTable: '拖拽Table',
    inlineEditTable: 'Table内编辑',
    complexTable: '综合Table',
    treeTable: '树形表格',
    customTreeTable: '自定义树表',
    tab: 'Tab',
    form: '表单',
    createForm: '创建表单',
    editForm: '编辑表单',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    theme: '换肤',
    clipboardDemo: 'Clipboard',
    i18n: '国际化',
    authorityManage: '后台权限管理',
    role: '角色管理',
    roleDetails: '角色详情',
    roleAdd: '新增角色',
    authority: '权限管理',
    group: '组管理',
    adminManage: '管理员管理',
    adminAdd: '新增管理员',
    adminDetails: '管理员详情',
    bidManage: '报价管理',
    purchaseRecord: '采购记录',
    supplyRecord: '供应记录',
    systemParame: '系统参数',
    appBanner: 'Banner',
    fruitTypes: '水果种类',
    purchaseManage: '采购管理',
    purchaseDetails: '采购详情',
    supplyManage: '供应管理',
    supplyDetails: '供应详情',
    fruitInfo: '水果信息管理',
    data: '数据管理',
    userData: '用户管理',
    userRemind: '用户提醒',
    information: '资讯管理',
    bill: '账单管理',
    billDetails: '账单详情',
    finance: '财务数据管理',
    recommend: '推荐管理',
    activity: '活动管理',
    feedback: '用户反馈'
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    screenfull: '全屏',
    theme: '换肤'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码'
  },
  permission: {
    roles: '你的权限',
    switchRoles: '切换权限'
  },
  dashboard: {
    totalRegisteredUsers: '用户总数',
    newRegisteredUserToday: '今日新增用户',
    totalOrdersToday: '今日生成订单',
    totalOrdersCompletedToday: '今日完成订单',
    totalOrderPaymentToday: '今日营收',
    newRegisteredUserWeek: '周新增用户'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    dropzoneTips: '图片上传七牛',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    type: '类型',
    remark: '备注',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    // 角色管理
    id: '序号',
    roleName: '角色名称',
    roleId: '角色ID',
    jurisdiction: '拥有权限',
    creator: '创建者',
    createDate: '创建时间',
    updated: '更新时间',
    menu: '菜单',
    permission: '权限名',
    requestType: '请求类型',
    url: '路径',
    // 账单管理
    accountDTO: '用户ID',
    billID: '账单ID',
    accountId: '账户ID',
    accountNo: '账户号',
    channel: '支付渠道',
    amount: '账单总额',
    crtTime: '创建时间',
    lastTime: '更新时间',
    orderNo: '订单号',
    recordStatus: '记录状态',
    coin: '代币数量',
    bonus: '积分奖励',
    content: '账单内容',
    quantity: '数量',
    state: '支付状态',
    userDTO: '用户对象',
    userId: '用户ID',
    date: '时间',
    totalPrice: '消费总价',
    numbersOfItems: '消费项目数',
    item: '项目名称',
    itemType: '项目类型',
    itemPrice: '单次费用',
    payStatus: '支付',
    times: '该项目消费次数',
    singlePrice: '单项总消费',
    startTime: '开始时间',
    time: '消费生成时间',
    // 门禁管理
    openAppid: 'openAppid',
    openAppsecret: 'openAppsecret',
    openId: 'openId',
    position: '位置',
    qr: '二维码存放地址',
    sharingGymId: '所属健身房id',
    // 组管理
    group: '组名',
    admin: '账号名',
    menuList: '可访问菜单',
    resources: '可访问资源',
    operations: '可进行操作',
    fix: '修改',
    lastUser: '最近更新者',
    groupName: '组名',
    sysRoleDTO: '角色组成',
    email: '邮箱',
    gender: '性别',
    mobile: '手机号',
    level: '用户等级',
    nickname: '昵称',
    portrait: '头像地址',
    certification: '实名认证',
    corporate: '企业认证',
    mid: '及时通信TOKEN',
    senior: '邀请人',
    // 用户反馈
    username: '用户名',
    crtUser: '反馈用户ID',
    feedback: '反馈内容',
    provider: '反馈者',
    feedcrtTime: '反馈时间',
    feedState: '阅读',
    read: '已读',
    unread: '未读',
    markedRead: '标为已读',
    markedUnread: '标为未读',
    userDetails: '用户详情',
    classDetails: '课程详情',
    personDetails: '私教详情',
    accountType: '账户类型',
    // 账号管理
    changeStatus: '修改状态',
    changePayment: '修改支付状态',
    stature: '身高',
    birthday: '生日',
    caseHistory: '慢性病',
    region: '地区',
    fitnessExperience: '健身经验',
    gexinCid: '个推ID',
    goal: '健身目标',
    identity: '账号身份',
    lat: '纬度',
    lng: '经度',
    latLng: '经纬度',
    model: '手机型号',
    signature: '签名',
    weight: '体重',
    status: '状态',
    actions: '操作',
    accountDetails: '账户详情',
    billDetails: '账单详情',
    deposit: '押金金额',
    depositType: '押金类型',
    balance: '余额',
    voucher: '能量瓶数量',
    freeExperienceTime: '免费健身时长',
    depositLastTime: '更新押金时间',
    depositExpiration: '押金过期时间',
    balanceLastTime: '余额更新时间',
    no: '编号',
    // 课程管理
    audience: '受众',
    brief: '简介',
    currencyType: '货币类型',
    deadline: '截止时间',
    beginTime: '开课时间',
    endTime: '结束时间',
    traineeMaximum: '最大开课人数',
    traineeMinimum: '最少开课人数',
    instructorId: '私教id',
    describe: '描述',
    discount: '折扣',
    gymid: '健身房ID',
    gym: '健身房',
    instructors: '私教',
    maximum: '人数上限',
    method: '方法',
    minimum: '人数下限',
    price: '价格',
    promotion: '促销价格',
    promotions: '促销标签组',
    classType: '课程类型',
    weekenday: '星期',
    address: '显示地点',
    WillNum: '开班人数',
    args1: '预留参数1',
    args2: '预留参数2',
    city: '城市',
    closingTime: '结束营业时间',
    country: '国家',
    cover: '封面',
    district: '区/县',
    mobiles: '移动电话列表',
    label: '标签',
    openingTime: '开始营业时间',
    phones: '固话列表',
    pictures: '图片列表',
    province: '省份',
    // 私教管理
    crtAdmin: '创建管理员',
    entryTime: '入职时间',
    lastAdmin: '更新管理员',
    major: '主修',
    name: '姓名',
    schedule: '私教排课时间安排',
    score: '评分',
    technical: '职称',
    // 采购管理
    specification: '水果规格',
    collected: '收藏',
    delivery: '交货时间',
    dhint: '时间提示',
    frequency: '采购频率',
    friendliness: '搜索结果匹配度',
    labels: '标签列表',
    location: '详细地址',
    originCity: '产地城市',
    origin: '产地',
    area: '所在位置',
    stick: '置顶',
    originDistrict: '产地地区',
    originProvince: '产地省份',
    pubdate: '发布时间',
    publisher: '发布者',
    released: '供应需求',
    requirement: '质量要求',
    supply: '供应信息',
    variety: '水果品种',
    fruitName: '名称',
    fruitLevel: '级别',
    initial: '首字母',
    parent: '父类ID',
    service: '服务',
    items: '条目',
    userState: '用户状态',
    required: '必填',
    serviceItems: '服务项',
    serviceName: '名称',
    // 供应管理
    unit: '单位',
    baseline: '起批斤数',
    catties: '斤/箱',
    contact: '已有联系人数',
    express: '一件代发',
    fruit: '水果',
    deliveryType: '交货方式',
    period: '交货时间(阶段)',
    supplementary: '货品特点',
    unsalable: '滞销',
    // edit
    details: '详情',
    draft: '下线',
    published: '上线',
    edit: '编辑',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定',
    update: '更 新',
    create: '创 建'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  }
}
