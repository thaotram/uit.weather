<template>
    <span class="tag hasShadow">{{ text }}</span>
</template>

<script>
import {
    style
} from 'modules';

export default {
    props: {
        text: {
            type: String,
            default: ''
        }
    },
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '[size="#{$size}"] .tag': [
                'border-radius: #{$size}px',
                'line-height: #{$size}px',
                'height: #{$size}px',
                'font-size: #{$size * 0.3 + 5}px',
            ],
            '[size="#{$size}"] .tag.crescent': [
                'margin-right: -#{$size}px',
                'padding-right: 2.5em'
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

<style lang="scss">
.tag {
    color: white;
    border-radius: 20px;
    padding: 0 1em;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>