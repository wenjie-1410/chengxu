<template>
    <div class="sear">
        <input type="text" placeholder="搜索" @click="sou"  >
    </div>
</template>
<script>
export default {
    name:"sear",
    methods: {
        sou(){
            this.$router.push({path:"/sou"})
        }
    },
}
</script>
<style lang="scss">
    .sear{
        width: 100%;
        height: 0.7rem;
        border-bottom: 0.01rem solid #ccc;
        input{
            width: 400px;
           margin-left: 1rem;
           margin-top: 0.15rem;
           border: 0.01rem solid #000;
           outline: none;
           border-radius: 0.2rem;
           height: 0.3rem;
        }
    }
</style>