<template>
  <div class="hea">
    <ul>
      <li :key="key" v-for="(itme,key) in list.result" >
        <router-link to="/one/two/A">{{itme.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "hea",
  data() {
    return {
      list:[]
    }
  },
  mounted() {
    this.$axios.get("/static/fenlei.json").then((msg)=>{
      console.log(msg.data)
    this.list = msg.data
    })
  },
};
</script>
<style lang="scss">
.hea {
  width: 100%;
  ul {
    display: flex;
    justify-content: space-around;
  }
}
</style>