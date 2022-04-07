<template>
    <h3 style="color:red">Red Component</h3>
    <slot name="content"/>
    {{msg}}
</template>
<script>
export default {
    props:["msg"]
}
</script>