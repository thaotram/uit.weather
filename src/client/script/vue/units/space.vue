<template>
    <div class="space" />
</template>
<script>
import {
    style
} from 'modules';
export default {
    name: 'space',
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '.row > .space[size="#{$size}"]': [
                'width: #{$size}px'
            ],
            '.col > .space[size="#{$size}"]': [
                'height: #{$size}px'
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