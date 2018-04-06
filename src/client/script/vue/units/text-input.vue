<template>
    <input :class="{ highlight: highlight , focus: focus }"
           :placeholder="placeholder"
           v-model="value"
           type="text"
           class="input"
           @focus="focus = true"
           @blur="focus = false"
    >
</template>
<script>
import { style } from 'modules';

export default {
    name: 'Input',
    components: {
        ...'@/units/button.vue',
    },
    props: {
        path: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            value: '',
            highlight: false,
            focus: false,
        };
    },
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '[size="#{$size}"] input.input[type="text"]': [
                'height: #{$size}px',
                'padding: 0 #{$size * 0.3}px',
                'font-size: #{$size * 0.15 + 7}px',
            ],
            '[size="#{$size}"] input.input.round[type="text"]': [
                'height: #{$size * 0.6}px',
                'margin: #{$size * 0.2}px',
                'border-radius: #{$size * 0.3}px',
            ],
        },
    },
    mounted() {
        style.set(this, {
            size: style.get('size', this, 40),
        });
    },
};
</script>