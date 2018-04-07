<template>
    <ai-row :class="{ active: isActive }"
            class="button"
            @click.native="buttonClick()">
        <span v-if="icon !== ''"
              class="icon">{{ icon }}</span>
        <div v-if="text !== '' && icon == ''"
             class="br" />
        <span v-if="text !== ''"
              class="text">{{ text }}</span>
        <slot/>
        <div v-if="text !== ''"
             class="br" />
    </ai-row>
</template>
<script>
import {
    // complier,
    // run,
    // find,
    style,
} from 'modules';

export default {
    components: {
        ...'@/container/row.vue',
    },
    props: {
        path: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
        root: {
            type: Object,
            default: undefined,
        },
    },
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '[size="#{$size}"] .button': ['min-height: #{$size}px'],
            '[size="#{$size}"] .button > .br': ['width: #{$size *0.3}px'],
            '[size="#{$size}"] .button > .slot': [
                'padding: 0 #{$size *0.3}px',
                'font-size: #{$size * 0.2 + 7}px',
            ],
            '[size="#{$size}"] .button > .icon': [
                'min-height: #{$size}px',
                'line-height: #{$size}px',
                'width: #{$size}px',
                'padding: 0',
                'font-size: #{$size * 0.4}px',
            ],
            '[size="#{$size}"] .button > .text': [
                'line-height: #{$size }px',
                'padding: 0',
                'font-size: #{$size * 0.15 + 7}px',
            ],
        },
    },
    data() {
        return {
            isActive: false,
            compiledValue: '',
            watchersValue: [],
            buttonClick: () => {},
        };
    },
    mounted() {
        style.set(this, {
            size: style.get('size', this, 40),
        });

        // const args = [this.path, this.root, true].filter((value) => {
        //     return value !== undefined;
        // });
        // const [parent, property] = find(...args);
        // if (parent
        //     && property !== undefined
        //     && parent[property] !== undefined) {
        //     const value = parent[property];
        //     this.$watch('value', () => {
        //         complier(this, 'value', 'compiledValue', 'watchersValue', undefined, true);
        //     });
        //     complier(this, 'value', 'compiledValue', 'watchersValue', undefined, true);
        //     this.$watch('compiledValue', () => {
        //         this.updateIsActive(value);
        //     });
        //     this.buttonClick = () => {
        //         run(parent, property, this.compiledValue, this);
        //     };
        //     if (typeof value !== 'function' && parent.constructor.name === 'VueComponent') {
        //         parent.$watch(property, (value) => {
        //             this.updateIsActive(value);
        //         });
        //         this.updateIsActive(value);
        //     }
        // } else {
        //     // console.log(this.$el);
        // }
    },
    methods: {
        updateIsActive(valueInPath) {
            if (!this.compiledValue) {
                this.isActive = false;
            } else {
                if (this.compiledValue[0] === '@') {
                    if (this.compiledValue === '@') {
                        this.isActive = valueInPath;
                    } else {
                        this.isActive =
                            valueInPath === this.compiledValue.substr(1);
                    }
                } else {
                    this.isActive =
                        valueInPath === this.compiledValue &&
                        this.compiledValue !== '';
                }
            }
        },
    },
};
</script>