<template>
  <div class="hello">
    <h1 @click="tap1">{{ msg }}</h1>   
  </div>
</template>
wtws

<script>
export default {
  // name: 'HelloWorld',
  props:{
    title:{
      type:String,
      default:"nimeide"
    }

  },
  data () {
    return {
      msg: 'Hello world'
    }
  },
  methods:{
    tap1:function(){
      // alert('12');
      console.log('3333');
      // this.$emit('tap1',this.title)
        this.$router.push({ name:'GQB'  })

    }

  }
  

}

</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
