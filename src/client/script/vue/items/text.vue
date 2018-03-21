<template>
    <span class="text hasShadow">
        <slot/>
    </span>
</template>

<script>
import {
    style
} from 'modules';

export default {
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '[size="#{$size}"] .text': [
                'height: #{$size}px',
            ]
        }
    },
    mounted() {
        style.set(this, {
            size: style.get('size', this, 40)
        });
    }
};
</script>
<style lang="scss"
       scoped>
.text {
    display: flex;
    >:first-child {
        flex: 1;
    }
    >* {
        vertical-align: -webkit-baseline-middle;
    }
}
</style>