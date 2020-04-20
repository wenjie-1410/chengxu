<template>
  <div>
     <div>
         <input type="text" @keydown="shuang" v-model="word" >
     </div>
    <div>

    </div>
  </div>
</template>
<script>
export default {
  name: "sou",
  data() {
      return {
          falg:false,
          word:"",
          ll:[]
      }
  },
  mounted() {
      this.$axios.get("/static/list.json").then((msg)=>{
          this.ll = msg.data
      })
  },
  methods: {
     shuang(){
         var b = []
           
     }
  },
};
</script>
<style lang="scss">
</style>