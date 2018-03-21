<template>
    <div class="col">
        <slot/>
    </div>
</template>
<script>
import {
    style
} from 'modules';
export default {
    name: 'Col',
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '[size="#{$size}"] .col.square': [
                'width: #{$size}px'
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