
# 通用作品评审系统
基于[D2 Admin](http://d2admin.fairyever.com/zh/)模板开发
##  大纲
-   [推荐依赖](#推荐依赖)
-   [项目目录](#项目目录)
-   [项目预览](#项目预览)
-   [注意事项](#注意事项)
-   [参考文章](#参考文章)
-   [关联资源](#关联资源)

## 版本
v0.1

## 推荐依赖
<div id="推荐依赖"></div>

-   页面路由:[vue-router](https://router.vuejs.org/zh/)
-   状态仓库:[vuex](https://vuex.vuejs.org/zh/guide/)
-   CSS：[scss](https://www.sass.hk/docs/)
-   http请求: axios
-   组件 :[element](http://element-cn.eleme.io/#/zh-CN/component/quickstart),[iView](https://www.iviewui.com/docs/guide/install)
-   particlesJS:一个轻量级的创建粒子背景的 JavaScript 库
-   本地数据存储:[LowDB](LowDB——轻量级本地JSON数据库) (在vuex中用到)
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
│  ├─ menu // 头部菜单配置文件
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


##  注意事项
<div id="注意事项"></div>


### 开发流程
-   本地请自己开个基于master的分支，完成后merge到本地的master分支，再push到远程仓库


###  代码规范
- 变量函数一律采用小驼峰命名法
- 命名前推荐先参考相同类型的命名

## 参考文章
<div id="参考文章"></div>

### svg
-   [手摸手，带你优雅的使用 icon](https://juejin.im/post/59bb864b5188257e7a427c09)
-   [vue mixins](https://segmentfault.com/a/1190000009875015)

## 关联资源
<div id="关联资源"></div>

-   [常见开发问题](https://github.com/javaeesummer/GeneralSystem-Front/blob/master/docs/dev/dev-FAQ.md)

-   [任务清单](https://github.com/javaeesummer/GeneralSystem-Front/blob/master/docs/dev/dev-ToDoList.md)

-   [提问](https://github.com/javaeesummer/GeneralSystem-Front/issues/1)





