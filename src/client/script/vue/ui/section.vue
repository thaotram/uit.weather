<template>
    <div class="section">
        <router-link :to="to"
                     class="text"
                     v-if="to">
            {{ text }}
        </router-link>
        <p v-if="!to && text"
           class="text"> {{ text }} </p>
        <p v-if="$slots.default"
           class="slot">
            <slot/>
        </p>
    </div>
</template>
<script>
import {
    components
} from 'modules';
export default {
    name: 'Section',
    components: {
        ...components('contain')
    },
    props: {
        to: {
            type: String,
            default: undefined
        },
        text: {
            type: String,
            default: undefined
        }
    }
};
</script>

<style lang="scss">
$blue: #3498db;
.section {
    >.text {
        display: block;
        font-size: 1.1em;
        font-weight: bold;
        line-height: 1em;
        padding-bottom: 10px;
        padding-top: 25px;
    }
    >* {
        color: $blue;
        overflow: visible;
        padding: 0 10px;
    }
}
</style>