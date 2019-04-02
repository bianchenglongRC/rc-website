# rc-website

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

official website 工程结构

build  构建相关 

config   配置相关

src    源代码
 assets 静态资源

   flags  地图svg
   
   icon   icon svg
   
   静态图片
   
 components  全局公用组件  （各组件取到当前offsetTop传向view/index.vue）
   
   rc-banner-top.vue  banner 第一屏
   
   rc-footer.vue   页尾
   
   rc-history.vue  第三屏 折线图
   
   rc-info.vue 第五屏
   
   rc-logo.vue  logo
   
   rc-matching.vue 第六屏  匹配数字 粒子动画
   
   rc-matching-view.vue 第七屏
   
   rc-modular.vue 第二屏
   
   rc-module-wrap.vue 语言条
   
   rc-serve.vue 第四屏 地图
   
 router  路由
 
   index.js 路由配置文件
   
 style
 
   animation.css  动画主文件
   
   icon.min.css   icon引入文件  
   
   style.min.css  公共样式单
   
 view
 
   index.vue 各组件注入口（接收子组件的offsetTop 进行滚动条定位当前位置动画 true:addClass is-revealed false:removeClass）
   
 App.vue 入口页面    
     
 main.js  入口 加载组件 初始化等
 
 
static  第三方不打包资源

  img
  
   favicon.ico  ico 图标
  
  js
  
   CanvasRenderer.js  第三方插件
   
   jquery.min.js   jquery 库
   
   Projector.js    第三方插件
   
   three.min.js    webGL库
   
   utils.min.js    调用
   
.babelrc  babel-loader 配置

eslintrc.js   eslint 配置项 

.gitignore  git 忽略项

index.html    html模板

package.json package.json



 rc-website/src/assets/flags

  ├── sa.svg  沙特阿拉伯王国
  ├── tr.svg  土耳其共和国
  ├── es.svg  西班牙王国
  ├── se.svg  瑞典王国
  ├── be.svg  比利时王国
  ├── be.svg  比利时王国
  ├── be.svg  比利时王国
  ├── nl.svg  尼德兰王国(荷兰)
  ├── gb.svg  英国(北爱尔兰以外的不列颠地区)
  ├── fr.svg  法兰西共和国(法国)
  ├── de.svg  德意志联邦共和国(德国)
  ├── it.svg  意大利共和国(意大利)
  ├── br.svg  巴西联邦共和国(巴西)
  ├── in.svg  印度共和国(印度)
  ├── ch.svg  瑞士联邦(瑞士)
  ├── at.svg  奥地利共和国(奥地利)
  ├── ru.svg  俄罗斯联邦
  ├── il.svg  以色列国
  ├── eg.svg  阿拉伯埃及共和国(埃及)
  ├── ae.svg  阿拉伯联合酋长国(阿联酋)
  ├── pk.svg  巴基斯坦伊斯兰共和国(巴基斯坦)
  ├── lk.svg  斯里兰卡民主社会主义共和国(斯里兰卡)
  ├── th.svg  泰王国(泰国)   
  ├── vn.svg  越南社会主义共和国(越南)
  ├── my.svg  马来西亚联邦(马来西亚、大马)
  ├── id.svg  印度尼西亚共和国(印度尼西亚，印尼)
  ├── au.svg  澳大利亚联邦(澳大利亚，澳洲)
  ├── ph.svg  菲律宾共和国(菲律宾)
  ├── kr.svg  大韩民国(韩国，南韩，南朝鲜)
  └── jp.svg  日本国(日本)


