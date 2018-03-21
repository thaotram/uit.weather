<template>
    <router-link class="row user"
                 :to="`/user/${user.name.first} ${user.name.last}`">
        <ai-image class="round avatar"
                  :src="user.picture.thumbnail" />
        <span class="name"> {{ user.name.first }} {{ user.name.last }} </span>
    </router-link>
</template>

<script>
import {
    components,
    style
} from 'modules';

export default {
    name: 'User',
    components: {
        ...components('container'),
        ...components('units')
    },
    props: {
        user: {
            type: Object,
            default: () => ({
                name: {},
                picture: {}
            })
        }
    },
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '[size="#{$size}"] .user': [
                'border-radius: #{$size}px'
            ],
            '[size="#{$size}"] .user>.avatar': [
                'max-height: #{$size - $border * 2}px',
                'max-width: #{$size - $border * 2}px',
                'margin: #{$border}px',
                'min-width: #{$size - $border * 2}px'
            ],
            '[size="#{$size}"] .user>.name': [
                'font-size: #{$size * 0.3 + 5}px',
                'line-height: #{$size}px',
                'margin: 0 #{$size * 0.5}px 0 #{$size * 0.2}px;'
            ]
        }
    },
    mounted() {
        style.set(this, {
            size: style.get('size', this, 40),
            border: 2
        });
    }
};
</script>

<style lang="scss">
.user {
    // background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: rgba(black, 0.9);
    >.name {
        display: block;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: capitalize;
        white-space: nowrap;
    }
    &:hover {
        text-decoration: none;
    }
}
</style>