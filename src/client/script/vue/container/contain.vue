<template>
    <div class="contain">
        <div :class="childClass">
            <slot/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Contain',
    props: {
        childClass: {
            type: String,
            default: undefined
        }
    }
};
</script>
<style lang="scss">
.contain {
    width: 100%;
    box-sizing: border-box;
    &.wrap {
        flex-wrap: wrap;
        width: auto;
    }
    >div {
        overflow: visible;
        max-width: 1120px;
        margin: 0 auto;
    }
}

// width < 600px
@media all and (max-width:575px) {
    .contain {
        padding: 0 10px;
    }
}

// 600px < width
@media all and (min-width:576px) {
    .contain {
        padding: 0 50px;
    }
}
</style>