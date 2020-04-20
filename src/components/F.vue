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
  name: "F",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.$axios.get("/static/list.json").then(msg => {
      this.list = msg.data.result.splice(35, 40);
      console.log(msg);
    });
  }
};
</script>
<style lang="scss">
    .list{
        ul{
            display: flex;
          flex-wrap: wrap;
            li{
                    width: 50%;
                    img{
                        width: 100%;
                    }
            }
        }
    }
</style>