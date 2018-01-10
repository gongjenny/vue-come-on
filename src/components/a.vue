<template>
  <div>
      {{hello}}
      <button  @click ='emitMyEvent'>emit</button>
      {{number}}
  </div>
</template>
<script>
export default {
    props: ['number' ],
    data(){
        return {
            hello :'i am compent a'
        }
    },
    methods: {
        emitMyEvent(){
            this.$emit('my-event',this.hello);
        }
    }
}
</script>

