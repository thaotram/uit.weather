<template>
    <div class="carousel row">
        <slot/>
    </div>
</template>
<script>
import {
    components
} from 'modules';
export default {
    name: 'Carousel',
    components: {
        ...components('contain')
    },
    data() {
        return {
            index: 0
        };
    }
};
</script>

<style lang="scss">
.carousel {
    overflow-x: scroll;
}
</style>