<script>
import {
    components
} from 'modules';
export default {
    name: 'Navigator',
    components: {
        ...components('container'),
        ...components('units'),
        ...components('items')
    },
    props: {
        left: {
            type: Array,
            default: () => []
        },
        right: {
            type: Array,
            default: () => []
        }
    },
    render(h) {
        const icon = index => h(
            'span', {
                class: 'icon',
                key: `icon-${index}`
            }, ''
        );

        const link = (url, current) => h('router-link', {
            props: {
                to: url[1]
            },
            class: ['link', current ? 'current' : null],
            key: url[0]
        }, url[0]);

        const center = () => h('div', {
            class: 'full',
            key: 'space'
        });

        const space = key => h('div', {
            class: 'space',
            key: `space-${key}`
        });

        return h(
            'transition-group', {
                class: 'navigator row',
                props: {
                    name: 'navigator'
                }
            }, [
                this.left.map((url, index, left) => [
                    index === 0 ? null : icon(index),
                    link(url, index === left.length - 1)
                ]),
                center(),
                this.right.map((url, index) => [
                    index === 0 ? null : space(index),
                    link(url, false)
                ])
            ]
        );
    }
};
</script>
<style lang="scss">
$blue: #3498db;
$size: 30px;
.navigator {
    height: $size;
    margin: 0 10px;
    border-bottom: 2px solid rgba($blue, .2);
    margin-bottom: 10px;
    margin-top: 15px;
    background: rgba(0, 0, 0, .0);
    overflow: visible;
    >* {
        height: $size;
        line-height: $size;
        position: relative;
        transition: all 0.8s ease-in-out;
        &.link {
            font-size: 1.1em;
            font-weight: bold;
            text-transform: capitalize;
            &:after {
                background: transparent;
                box-shadow: 0 0 10px rgba($blue, .0);
                content: "";
                display: block;
                height: 4px;
                position: absolute;
                top: calc(100% - 1px);
                border-radius: 4px;
                transition: all 0.2s;
                width: 100%;
            }
            &:hover:after {
                background: rgba($blue, .8);
            }
        }
        &.icon {
            margin: 0 10px;
            font-weight: bold;
            color: #3498db
        }
        &.space {
            width: 15px;
        }
        &:hover {
            text-decoration: none;
            text-shadow: 0 0 5px rgba($blue, .5);
        }
        &.current {
            cursor: default;
            &:after {
                background: $blue;
                box-shadow: 0 0 10px rgba(#3498db, .8);
            }
        }
    }
}

.navigator-enter-active,
.navigator-leave-active {
    transition: all 0.3s!important;
}

.navigator-enter,
.navigator-leave-to {
    opacity: 0;
}
</style>