<template>
    <div class="foot">
      <ul>
          <li>
              <router-link to="/one/two" >
                 <i class="fa fa-envelope-open-o"></i>
                  <br>首页 
              </router-link>
             
          </li>
           <li>
               <router-link to="/one/three">
              <i class="fa fa-lemon-o"></i>
              <br>分类
               </router-link>
             
          </li>
           <li>
               <router-link to="/one/four">
                <i class="fa fa-map-o"></i> 
              <br>购物车
               </router-link>
             
          </li>
           <li>
               <router-link to="/one/five">
              <i class="fa fa-user-o"></i>
              <br>个人
               </router-link>
             
          </li>
      </ul>
    </div>
</template>
<script>
export default {
    name:"foot"
}
</script>
<style lang="scss">
    .foot{
           width: 100%;
           height: 0.7rem;
           border-top: 0.01rem solid #ccc;
           padding-top: 0.1rem ;
         
           ul{
               display: flex;
               li{
                     flex: 1;
                     a{
                         width: 100%;
                         height: 100%;
                         text-align: center;
                         display: inline-block;
                           color:#000;
                     }
               }
           }
    }
</style>