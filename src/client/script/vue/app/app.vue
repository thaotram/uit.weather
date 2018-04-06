<template>
    <div id="app"
         class="col">
        <ai-header/>
        <ai-line class="dark" />
        <router-view id="view"
                     ref="view" />
    </div>
</template>
<script>
export default {
    name: 'App',
    components: {
        ...'@/app/layout/header.vue',
        ...'@/units/line.vue',
    },
};
</script>
<style lang="scss">
#app {
    position: absolute;
    height: 100%;
    width: 100%;
    min-width: 350px;
    background: #f2f5f7;
}
</style>