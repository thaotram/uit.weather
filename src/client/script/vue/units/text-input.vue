<template>
    <input type="text"
           class="input"
           v-model="value"
           @focus="focus = true"
           @blur="focus = false"
           :class="{ highlight: highlight , focus: focus }"
           :placeholder="this.placeholder" />
</template>
<script>
import {
    components,
    style
} from 'modules';

export default {
    name: 'input',
    components: {
        ...components('units/button')
    },
    props: {
        path: {
            default: ''
        },
        placeholder: {
            default: ''
        }
    },
    data() {
        return {
            value: '',
            highlight: false,
            focus: false
        };
    },
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '[size="#{$size}"] input.input[type="text"]': [
                'height: #{$size}px',
                'padding: 0 #{$size * 0.3}px',
                'font-size: #{$size * 0.15 + 7}px'
            ],
            '[size="#{$size}"] input.input.round[type="text"]': [
                'height: #{$size * 0.6}px',
                'margin: #{$size * 0.2}px',
                'border-radius: #{$size * 0.3}px'
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