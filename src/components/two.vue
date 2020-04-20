<template>
    <div>
    <div class="search">
        <sear></sear>
    </div>
    <div>
    <hea></hea>
    </div>
    <div>
        <router-view></router-view>
    </div>
    </div>
</template>

<script>
import sear from "./sear"
import hea from "./hea"
export default {
    name:"two",
    components:{hea,sear}
}
</script>
