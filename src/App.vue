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
      <componentA></componentA>  
      <button v-on:click = 'addItem'>addItem</button>
  </div>
</template>

<script>
import componentA from './components/a'
export default {
  components :{
    componentA
  },
  data (){
    return {
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
      console.log(this.list)
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
