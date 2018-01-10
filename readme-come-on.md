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
## 5、
    vue 2.0 不能再用{{}}这种形式，给标签添加属性，用v-bind：或：添加
    例如： v-bind：title = '变量名' 或 :title ='变量名'
## 6、
    export default{} 是es6 的新语法，相当于导出里面的内容

## 7、直接赋值不能更新页面
    vue  要想改变 data 里面定义的数组的值，要用vue.set('要改的数组','要改的位置','要改成的值')
## 8、vue使用自定义事件
    父组件引入子组件，想要使用子组件中的元素触发父组件中的某一个事件，子组件可以使用.$emit("父组件中自定义的方法名称"，"传递的参数")方法实现。
    子组件通过 $emit 给父组件 传递方法。
    父组件通过 props 参数选项，给子组件传值。
## 9、 表单使用v-model 来实现双向数据绑定
    即页面输入，先改变到js上，再反应到页面上。
## 10、 插槽 slot