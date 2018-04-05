<template>
    <div id="body">
        <router-view id="view"
                     ref="view" />
    </div>
</template>
<script>
export default {
    name: 'Body',
    components: {
        ...'../../container/contain.vue',
        ...'../../units/line.vue',
    },
    data: () => ({
        left: [],
        right: [],
    }),
};
</script>
<style lang="scss"
       scoped>
#body {
    overflow: auto;
    min-height: calc(100% - 50px);
    > .navigator {
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