<template>
  <div>
      {{hello}}
       <button v-on:click = 'getParam'>get param</button>
  </div>
</template>
<script>
export default {
    data(){
        return {
            hello :'i am compent apple'
        }
    },
    methods: {
        getParam(){
            console.log(this.$route.params);
            }
    }
}
</script>