<template>
    <div class="image"
         :style="srcStyle" />
</template>
<script>
import {
    style
} from 'modules';
export default {
    name: 'AiImage',
    props: {
        src: {
            type: String,
            required: true,
            default: '#'
        },
        link: {
            type: String,
            required: false,
            default: '/'
        }
    },
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '[size="#{$size}"] .image': [
                'height: #{$size}px',
                'width:  #{$size}px',
                'min-width:  #{$size}px'
            ],
            '.image[size="#{$size}"]': [
                'height: #{$size}px',
                'width:  #{$size}px',
                'min-width:  #{$size}px'
            ]
        }
    },
    computed: {
        srcStyle: function() {
            return {
                backgroundImage: `url(${this.src})`
            };
        }
    },
    mounted() {
        style.set(this, {
            size: this.size || style.get('size', this, 40)
        });
    }
};
</script>
<style lang="scss">
.image {
    display: block;
    margin: auto;
    background-size: cover;
    background-position: center;
    background-color: rgba(black, 0.3);
    &.round {
        border-radius: 50%;
    }
}
</style>