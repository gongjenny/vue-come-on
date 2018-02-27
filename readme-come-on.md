## 1、用vue-cli 项目脚手架 生成一个vue项目,依赖webpack
    https://www.cnblogs.com/chengdabelief/p/6879155.html

## 2、运行项目：npm run dev    
    localhost:8080
## 3、本地上传代码到git
    1. git init （第一次的时候要初始化，以后就不用了）
    2. git add .
    3. git commit -m "注释"
    4. 连接远程git：git remote add origin https://github.com/gongjenny/vue-come-on.git(一个项目只用一次连接就可以了)
    5. 更新远程代码 ：git pull 
    6. 提交本地代码 ：git push --set-upstream origin master （第一次链接git使用，之后就用git push即可）
    7. 感觉自己无敌棒！
## 4、避免引用赋值
``` js
    data : {a:1,b:2}  
    这样的形式重复引用时，会影响其他引用这个数据的展示。
``` 
``` js
    改为如下返回结果的形式，即可避免相互影响：
    data：function(){return{a:1,b:2}}
``` 
## 5、标签添加属性
    vue 2.0 不能再用{{}}这种形式给标签添加属性，用v-bind：或：添加
    例如： v-bind：title = '变量名' 或 :title ='变量名'
## 6、导出文件内容
    export default{} 是es6 的新语法，相当于导出里面的内容
## 7、直接赋值不能更新页面
    vue  要想改变 data 里面定义的数组的值，要用vue.set('要改的数组','要改的下标','要改成的值')
## 8、vue使用自定义事件
    父组件引入子组件，想要使用子组件中的元素触发父组件中的某一个事件，子组件可以使用.$emit("父组件中自定义的方法名称"，"传递的参数")方法实现。
    子组件向外发布事件：通过 $emit 给父组件 传递方法。
    父组件向内传递属性：通过 props 参数选项，给子组件传值。
## 9、表单使用v-model 来实现双向数据绑定
    即页面输入，先改变到js上，再反应到页面上。
## 10、插槽 slot 传递模板
## 11、keep-alive  
       起到一个缓存的作用
## 12、过渡transition
     css过渡：name值 可以随便起，只要对应上css 样式即可
## 13、自定义指令
    v-xxxx  通过 directives 来连接标签和事件
## 14、scope 作用域
     例如：<style scope>  </style>  
     当前的  style 只对当前的组件起作用，若父组件引入改组件，父组件无该样式
## 15、使用vue-router步骤
    1. import VueRouter from 'vue-router'  先引进来一个这样的库
    2. Vue.use(VueRouter) 让vue使用这个库
    3. let router  = new VueRouter() 实例化一个这样的路由
    4. new Vue({router})  再把这个实例化的router 引进 vue 里面
## 16、new Vue(el: '#app',template: '<App1/>',components: { App1 })
    template: '<App1/>':是vue最新的用法。意思是用 <app1></app1> 将挂载到 id='app'的元素替换，挂载元素的内容都将被忽略。  其中 App1，要和引进来的  import App1 from './App'  一致。
## 17、router-link
   <router-link :to="{path:'页面名称'}"> to banana </router-link>
   可以用来跳转组件页面
## 18、mode
    去掉项目里面的hash值，让项目按照h5模式的路径走，然后就可以用 path: '/apple/:color',这种方法传递参数了，否则页面不显示。
    即 new VueRouter({mode :'history' }) 
## 19、获取参数
    this.$route.params  获取当前页面传递的参数
## 20、routes：定义路由
    routes 是定义了跳转的地址和对应的组件
## 21、router-link：跳转路由
    router-link 和 routes 里面的 path名称 要对应上 
## 22、$route：承载路由信息
    承载了当前激活的路由信息对象，这个属性是只读的。
## 23、redirect
    重定向
## 24、vuex
    是一个状态管理的插件
## 25、基础知识学会了，写项目目前没遇到什么不懂的问题，真棒~！继续加油了！！！
## 26、vue-resource
    是 ajax 请求数据的一个插件
## 27、配置本地的数据交互 (即本地模拟数据交互)
    VUE开发请求本地数据的配置，早期的vue-lic下面有dev-server.js和dev-client.js两文件，请求本地数据在dev-server.js里配置，最新的vue-webpack-template 中已经去掉了dev-server.js和dev-client.js 改用webpack.dev.conf.js代替；
    具体操作如下,打开webpack.dev.conf.js：
``` 
    1.在const portfinder = require('portfinder')后添加如下代码：

    var appData = require('../data.json')//加载本地数据文件，创建data.json文件，和入口文件index.html同级
    var getNewsList = appData.getNewsList//获取对应的本地数据，后面'getNewsList' 是data.json里面的数据，前面的'getNewsList'用来对应后面的名称配置
```
``` 
    2.然后找到devServer,在里面添加:
    before(app) {
        app.get('/api/getNewsList', (req, res) => { // 'getNewsList' 对应上面的配置
            res.json({
                errno: 0,
                data: seller
            })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
        })
    }
```
```
    3、重新启动项目
       npm run dev
```
```
    4、调取本地接口
       created:function(){
            this.$http.get('api/getNewsList').then(function(data){
                _this.newList = res.data.data; // 注意是两个data哦！
            },function(err){
                console.log(err)
            })
        },
```


```
    5、给出data.json的数据
    {
        "getNewsList": {
            "name": "粥品香坊（回龙观）",
            "avatar": "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
            "infos": "该商家支持发票,请下单写好发票抬头"
        }
    }  
```
```
    6、输入下面地址，可看api内容
       http://localhost:8080/api/getNewsList
```

## 28、img 图片引入
      只能用require('图片地址')的形式引入图片地址，才能被webpack打包
## 29、每一个template模板，只能有一个root
    即：template里层只能有一个root div1，包裹其他所有的div块
```
    <template>
        <div class='div1'>
            <div class='div2'></div>
            <div class='div3'></div>
        </div>
    </template>
```
## 30、mounted函数
       mounted ：钩子函数，它可以通过系统来访问正常情况下无法访问的消息
## 31、computed计算属性
       computed：是一个对象，里面把要改变的变量，当成一个函数写进去，返回的值直接作用到当前变量上。
```
    例如：
        computed: {
            prevIndex() {
                if(this.nowIndex === 0){
                    return this.slides.length - 1;  // return的值直接赋值到prevIndex上
                }
                else{
                    return this.nowIndex - 1;
                }
            },
        }
```
## 32  vue开发请求本地模拟数据的配置方法 
       http://blog.csdn.net/firebird_one/article/details/78656500
## 33  vue技巧1：  部分区域显示和隐藏，可以通过设置一个变量的true，false来控制这块区域的显示隐藏

## 34  第七章  第一节   商品购买详情页    加油吧小女子，你马上就要过瓶颈期了，胜利的曙光就在眼前！