<template>
    <div id="app"
         class="col">
        <ai-header/>
        <ai-body ref="body" />
    </div>
</template>
<script>
export default {
    name: 'App',
    components: {
        ...'./layout/header.vue',
        ...'./layout/body.vue',
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