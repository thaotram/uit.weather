<script>
import {
    components
} from 'modules';
export default {
    name: 'Nav',
    components: {
        ...components('contain'),
        ...components('units')
    },
    props: {
        links: {
            type: Array,
            default: () => []
        }
    },
    render(h) {
        return h(
            'transition-group', {
                class: 'nav row',
                props: {
                    name: 'nav'
                }
            }, this.links ? this.links.map((link, index, links) => {
                return [
                    (index === 0
                        ? null
                        : h('span', {
                            class: 'icon',
                            key: index
                        }, '')),
                    h('router-link', {
                        props: {
                            to: link[1]
                        },
                        class: {
                            current: index === links.length - 1
                        },
                        key: link[0]
                    }, link[0])
                ];
            }) : null
        );
    }
};
</script>

<style lang="scss">
.nav {
    height: 30px;
    padding: 0 10px;
    >* {
        height: 30px;
        line-height: 30px;
        &:not(.icon) {
            font-size: 1.2em;
        }
    }
    >.current {
        color: #000
    }
    >span.icon {
        margin: 0 10px;
        font-weight: bold;
        color: #3498db
    }
}

.nav-enter-active,
.nav-leave-active {
    transition: all 0.3s!important;
}

.nav-enter,
.nav-leave-to {
    opacity: 0;
}
</style>