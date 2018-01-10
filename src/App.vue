<template>
  <div id="app" :title='hello'>
      {{hello}}
      <ul>
        <li v-for = "(item, index) in list">
          11111
          {{item.name + item.age + index}}
        </li>
      </ul>
      <ul>
         <li v-for = "(value,key ) in objList">
           2222222
          {{value + key}}
        </li>
      </ul>
      <comA @my-event='onComEvent'></comA>  
      <button v-on:click = 'addItem'>addItem</button>

      <input type="text" v-model="myValue">
        {{myValue*num}}

        <com-a number = 15></com-a>
  </div>
</template>

<script>
import Vue from 'vue'
import comA from './components/a'
export default {
  components :{
    comA
  },
  data (){
    return {
      myValue:'',
      num:2,
      hello: 'world',
      list:[
        {
          name: 'gong',
          age :'18'
        },
        {
          name: 'fang',
          age :'28'
        }

      ],
      objList: {
        name:'jenny',
        age :'16'
      }
    }
  },
  methods : {
    addItem(){
      Vue.set(this.list,1,{
        name:'haha',
        age :'16'
      })
    },
    onComEvent (param){
      console.log(param)
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
