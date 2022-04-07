<template>
    <div>
        <app-header/>
        <h3>CLI uygulaması</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <counter-item/>
    </div>
    
</template>

<script>
import CounterItem from "@/components/CounterItem.vue"
export default {
    components:{
        CounterItem
    }
}
</script>