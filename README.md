# 通用作品评审系统
基于[D2 Admin](http://d2admin.fairyever.com/zh/)模板开发
##  大纲
-   [推荐依赖](#推荐依赖)
-   [项目目录](#项目目录)
-   [项目预览](#项目预览)
-   [代码规范](#代码规范)
-   [参考文章](#参考文章)

## 推荐依赖
<div id="推荐依赖"></div>

-   CSS：scss
-   http请求: axios
-   组件 :[element](http://element-cn.eleme.io/#/zh-CN/component/quickstart),[iView](https://www.iviewui.com/docs/guide/install)

##  项目目录
<div id="项目目录"></div>

```
├─ build
├─ config
├─ deploy
├─ dist
├─ docs // 文档
├─ src
│  ├─ assets // 资源
│  │  ├─ icons
│  │  ├─ image
│  │  ├─ library
│  │  └─ style
│  ├─ components // 注册的组件
│  │  ├─ core // 核心组件
│  │  │  └─ register.js //全局注册组件
│  │  └─ demo // 示例组件
│  │     └─ register.js //全局注册组件 
│  ├─ i18n // 多国语
│  ├─ libs // 通用库
│  ├─ menu // 菜单
│  ├─ mock // 模拟数据
│  ├─ pages // 页面
│  ├─ plugin // 插件
│  ├─ router // 路由
│  ├─ store // vuex
│  ├─ App.vue
│  └─ main.js
├─ static // 静态资源
├─ .babelrc
├─ .editorconfig
├─ .eslintignore
├─ .eslintrc.js
├─ .gitattributes
├─ .gitignore
├─ .postcssrc.js
├─ LICENSE
├─ README.md
├─ index.html
└─ package.json
```

##  项目预览
<div id="项目预览"></div>



##  代码规范
<div id="代码规范"></div>

- 变量函数一律采用小驼峰命名法
- 命名前推荐先参考相同类型的命名

## 参考文章
<div id="参考文章"></div>

### svg
-   [手摸手，带你优雅的使用 icon](https://juejin.im/post/59bb864b5188257e7a427c09)