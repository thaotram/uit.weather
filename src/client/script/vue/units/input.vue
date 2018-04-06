<template>
    <div v-if="type !== 'checkbox'"
         :class="{ focus: focus }"
         class="input">
        <input v-if="type == 'text'"
               v-model="value"
               :class="{ highlight: highlight }"
               :placeholder="placeholder"
               type="text"
               @focus="focus = true"
               @blur="focus = false">
        <input v-else-if="type == 'number'"
               v-model.number="value"
               :min="min"
               :max="max"
               :class="{ highlight: highlight }"
               :placeholder="placeholder"
               type="number"
               @focus="focus = true"
               @blur="focus = false">
        <textarea v-else-if="type == 'textarea'"
                  v-model="value"
                  :class="{ highlight: highlight }"
                  :placeholder="placeholder"
                  rows="1"
                  @focus="focus = true"
                  @blur="focus = false" />
    </div>
    <ai-button v-else-if="type == 'checkbox'"
               :path="path"
               class="input"
               icon=""
               text="Thư mục abc"
               value="@" />
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
        type: {
            type: String,
            default: 'text',
        },
        min: {
            type: String,
            default: '1',
        },
        max: {
            type: Number,
            default: 10,
        },
        root: {
            type: String,
            default: undefined,
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
            '[size="#{$size}"] .input > input': [
                'height: #{$size}px',
                'padding: 0 #{$size * 0.3}px',
                'font-size: #{$size * 0.15 + 7}px',
            ],
            '[size="#{$size}"] .input.square > input': ['width: #{$size}px'],
            '[size="#{$size}"] .input > textarea': [
                'padding: #{$size * 0.3}px #{$size * 0.3}px',
                'font-size: #{($size * 0.2 + 8)}px',
            ],
            '[size="#{$size}"] .input > .checkbox': [
                'line-height: #{$size}px',
                'height: #{$size}px',
                'width: #{$size}px',
            ],
            '[size="#{$size}"] .input > .checkbox > span': [
                'line-height: #{$size}px',
            ],
        },
    },
    mounted() {
        style.set(this, {
            size: style.get('size', this, 40),
        });
        setTimeout(() => {
            this.updateTextareaHeight();
        }, 0);
    },
    methods: {
        updateTextareaHeight() {
            if (this.type === 'textarea') {
                const el = this.$el.querySelector('textarea');
                el.style.height = 'auto';
                el.style.height =
                    Number(
                        el.scrollHeight + el.offsetHeight - el.clientHeight,
                    ) + 'px';
            }
        },
    },
};
</script>