<template>
    <div id="body">
        <ai-contain class="nav">
            <ai-navigator :left="left"
                          :right="right" />
        </ai-contain>
        <router-view ref="view"
                     id="view" />
        <ai-footer/>
    </div>
</template>

<script>
import {
    components
} from 'modules';

export default {
    name: 'Body',
    components: {
        ...components('layout/footer'),
        ...components('line'),
        ...components('navigator'),
        ...components('container')
    },
    data: () => ({
        left: [],
        right: []
    })
};
</script>
<style lang="scss"
       scoped>
#body {
    overflow: auto;
    min-height: calc(100% - 50px);
    >.navigator {
        margin: 20px auto;
    }
}

// vue transition
.body-fade-enter-active,
.body-fade-leave-active {
    transition: all 0.5s !important;
}

.body-fade-enter,
.body-fade-leave-to {
    opacity: 0;
}
</style>