<template>
    <ai-row class="full">
        <ai-map class="map full"/>
        <ai-line class="dark"/>
        <ai-col class="right"/>
    </ai-row>
</template>

<script>
export default {
    components: {
        ...'@/special/map/map.vue',
        ...'@/container/row.vue',
        ...'@/container/col.vue',
        ...'@/units/line.vue',
    },
};
</script>
<style lang="scss"
       scoped>
.row {
    background-color: #2c2c36;
}
.right {
    flex: 1;
}
</style>