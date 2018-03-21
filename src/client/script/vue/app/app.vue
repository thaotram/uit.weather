<template>
    <div id="app"
         class="col">
        <ai-header/>
        <ai-body ref="body" />
    </div>
</template>
<script>
import {
    components
} from 'modules';

export default {
    name: 'App',
    components: {
        ...components('layout'),
        ...components('line'),
        ...components('contain'),
        ...components('items'),
        ...components('units'),
    },
    mounted() {
        // console.clear();
    }
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