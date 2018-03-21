<template>
    <div class="layer"
         :index="index">
        <slot/>
    </div>
</template>
<script>
import {
    style
} from 'modules';
export default {
    name: 'Layer',
    props: {
        index: {
            type: Number,
            default: 1
        }
    },
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '.layer[index="#{$index}"]': [
                'z-index: #{$index}'
            ]
        }
    },
    mounted() {
        style.set(this, {
            index: this.index
        });
    }
};
</script>