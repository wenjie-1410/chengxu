<template>
    <div class="one">
       <div class="inner">
             <router-view></router-view>
       </div>
       <div >
     <foot></foot>
       </div>
      
    </div>
</template>
<script>
import foot  from "./foot.vue"
export default {
    name:"one",
    components:{foot}
}
</script>
<style lang="scss">
    .one{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
      .inner{
        flex: 1;
        overflow: auto;
      }
</style>