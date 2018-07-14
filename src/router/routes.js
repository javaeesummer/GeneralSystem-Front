const meta = { requiresAuth: true }

const alive = true

/**
 * 在主框架内显示
 */
const frameIn = [
  // 首页
  {
    path: '/',
    redirect: { name: 'index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: [
      {
        path: 'index',
        name: 'index',
        meta,
        component: () => import('@/pages/core/index')
      }
    ]
  },
  {
    path: '/activities',
    name: 'activities',
    meta,
    redirect: { name: 'activities-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      //index activity list
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/activities/index/index.vue'), meta: { ...meta, title: '活动管理' } },
      { path: 'create', name: `${pre}create`, component: () => import('@/pages/activities/create/index.vue'), meta: { ...meta, title: "活动创建" } },
      //activity

    ])('activities-')
  },
  {
    path: '/activity/activityId=:activityId', name: `activity`, redirect: { name: 'activity-index' }, component: () => import('@/components/core/d2-layout-main'), meta: { ...meta, title: "活动首页" },
    children: (pre => [
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/activities/activity/index/index.vue'), meta: { ...meta, title: "活动主页" } },
      { path: 'judge', name: `${pre}judge-index`, component: () => import('@/pages/activities/activity/judge/index/index.vue'), meta: { ...meta, title: "评审主页" } },
      { path: 'work', name: `${pre}work-index`, component: () => import('@/pages/activities/activity/work/index/index.vue'), meta: { ...meta, title: "作品主页" } },
      { path: 'judgeId=:judgeId', name: `${pre}onejudge`, component: () => import('@/pages/activities/activity/judge/one-judge/index.vue'), meta: { ...meta, title: "单个评委" } },
      { path: 'workId=:workId', name: `${pre}onework`, component: () => import('@/pages/activities/activity/work/one-work/index.vue'), meta: { ...meta, title: "单个作品" } },
    ])('activity-')
  },
  {
    path: '/core/setting',
    name: 'core-setting',
    meta,
    redirect: { name: 'core-setting-index' },
    component: () => import('@/components/core/d2-layout-main'),
    children: (pre => [
      { path: 'index', name: `${pre}index`, component: () => import('@/pages/core/setting/index'), meta: { ...meta, title: '设置首页' } },
      { path: 'theme/theme', name: `${pre}theme-theme`, component: () => import('@/pages/core/setting/theme/theme.vue'), meta: { ...meta, title: '选择主题' } },
      { path: 'theme/custom', name: `${pre}theme-custom`, component: () => import('@/pages/core/setting/theme/custom.vue'), meta: { ...meta, title: '个性化' } },
      { path: 'releases', name: `${pre}releases`, component: () => import('@/pages/core/setting/releases'), meta: { ...meta, title: '版本' } }
    ])('core-setting-')
  },
]

/**
 * 错误页面
 */
const errorPage = [
  // 404
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/core/404')
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登陆
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/core/login')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
