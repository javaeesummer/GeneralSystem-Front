const setting = {
  path: '/core/setting',
  title: '设置',
  icon: 'cog',
  children: (pre => [
    { path: `${pre}index`, title: '设置首页', icon: 'home' },
    {
      path: `${pre}theme`,
      title: '主题设置',
      icon: 'diamond',
      children: [
        { path: `${pre}theme/theme`, title: '选择主题' },
        { path: `${pre}theme/custom`, title: '个性化' }
      ]
    },
    { path: `${pre}releases`, title: '版本', icon: 'info-circle' }
  ])('/core/setting/')
}
// 单个活动侧边菜单

/*

*/
const activity = {
  path: '/activity/activityId=:activityId',
  title: '活动',
  icon: 'cog',
  children: (pre => [
    { path: `${pre}index`, title: '活动信息', icon: 'home' },
    { path: `${pre}judge`, title: '评委管理', icon: 'home' },
    { path: `${pre}work`, title: '作品管理', icon: 'info-circle' }
  ])('/activity/activityId=:activityId/')

}
//活动管理（activities） 侧边菜单
const activities = {
  path: '/activities',
  title: '活动管理',
  icon: 'cog',
  children: (pre => [
    { path: `${pre}index`, title: '活动管理', icon: 'home' },
    { path: `${pre}create`, title: '活动创建', icon: 'home' },
  ])('/activities/')
}
// 菜单 侧边栏
export const side = [
  setting,
  activity,
  activities,
]
// 主办方头部导航栏
export const sponsorMenu = [
  {
    path: '/index',
    title: '首页',
    icon: 'home'
  },
  activities,
]
export default [
  sponsorMenu
]

// // 主办方头部导航栏
// export const adminMenu = [

//   {
//     path: '/index',
//     title: '首页',
//     icon: 'home'
//   },
//   {
//     path: '/demo',
//     title: '功能',
//     icon: 'puzzle-piece',
//     children: [

//       {
//         title: '空菜单演示',
//         icon: 'folder-o',
//         children: [
//           {
//             title: '正在开发 1',
//             children: [
//               { title: '正在开发 1-1' },
//               { title: '正在开发 1-2' }
//             ]
//           },
//           { title: '正在开发 2' },
//           { title: '正在开发 3' }
//         ]
//       }
//     ]
//   },

// ]

// // 游客？
// export const userMenu = [
//   {
//     path: '/index',
//     title: '首页',
//     icon: 'home'
//   },
//   {
//     path: '/demo',
//     title: '功能',
//     icon: 'puzzle-piece',
//     children: [

//       {
//         title: '空菜单演示',
//         icon: 'folder-o',
//         children: [
//           {
//             title: '正在开发 1',
//             children: [
//               { title: '正在开发 1-1' },
//               { title: '正在开发 1-2' }
//             ]
//           },
//           { title: '正在开发 2' },
//           { title: '正在开发 3' }
//         ]
//       }
//     ]
//   },

// ]


