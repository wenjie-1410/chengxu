<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import one from "./components/one"
export default {
  name: 'App',
  components:{one}
}
</script>

<style lang="scss">
       body,html,.app{
             height: 100%;
             width: 100%;
             display: flex;
             flex-direction: column;
       }
</style>
