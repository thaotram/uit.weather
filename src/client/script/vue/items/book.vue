<template>
    <router-link :to="`/book/${text}`"
                 class="tag hasShadow">{{ text }}</router-link>
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
        },
        to: {
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
}

a.tag {
    position: relative;
    &:hover {
        text-decoration: none;
        &:before {
            background-color: rgba(white, 0.2)
        }
    }
    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: transparent;
        border-radius: 50px;
    }
}
</style>