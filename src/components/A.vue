<template>
  <div class="list">
    <ul>
      <li v-for="(itme,k) in list" :key="k">
        <img :src="itme.pic" alt />
        <p>{{itme.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "A",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.$axios.get("/static/list.json").then(msg => {
      this.$axios.get("/static/fenlei.json").then(data => {
        msg.data.result.forEach((v)=>{
          if(v.cid == data.data.result[0]._id){
            this.list.push(v)
          }
        })
     
      });
    });
  }
};
</script>
<style lang="scss">
.list {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      img {
        width: 100%;
      }
    }
  }
}
</style>