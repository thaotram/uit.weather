<template>
    <ai-row class="book-small hasShadow">
        <router-link class="image-link"
                     :to="'/book/' + book.title">
            <ai-image :src="book.image" />
        </router-link>
        <div class="icon top-right-icon noHover"></div>
        <div class="col content">
            <div class="col hasShadow">
                <h4 class="title">
                    {{ book.title }}
                </h4>
                <div class="author">
                    {{ book.author }}
                </div>
                <div class="full" />
                <div class="detail">
                    <slot/>
                </div>
            </div>
            <ai-line class="light" />
            <ai-row size="24"
                    class="hasShadow tags">
                <ai-button v-for="tag in book.tags"
                           :key="tag"
                           :text="tag" />
            </ai-row>
        </div>
    </ai-row>
</template>

<script>
import {
    components
} from 'modules';
export default {
    name: 'BookSmall',
    components: {
        ...components('container'),
        ...components('units')
    },
    props: {
        book: {
            type: Object,
            default: () => ({})
        }
    }
};
</script>
<style lang="scss">
$size: 20px;
$image-size: 200px;
$red: #ff4d4d;
.book-small {
    flex: 1;
    margin: 30px 10px 10px 10px;
    min-width: $image-size * 1.8;
    max-width: $image-size * 3;
    position: relative; // width: $image-size * 2.9;
    &.fix-width {
        min-width: $image-size * 2.5;
        max-width: $image-size * 2.5;
    }
    >.image-link {
        display: block;
        position: absolute;
        top: $size * -1;
        left: $size;
        height: $image-size;
        width: $image-size / 8 * 5;
        border-radius: 3px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
        overflow: hidden;
        >.image {
            width: 100%;
            height: 100%;
        }
    }
    >.top-right-icon {
        position: absolute;
        right: $size;
        top: $size;
        color: rgba($red, 0.8);
        text-shadow: 0 0 0px rgba($red, 0);
        transition: all 0.2s;
        cursor: pointer;
        font-size: 28px!important;
        * {
            overflow: visible;
        }
        &:hover {
            text-shadow: 0 0 15px rgba($red, 0.5);
        }
    }
    >.content {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        overflow: hidden!important;
        background: white;
        flex: 1;
        >.col:nth-child(1) {
            margin-left: $image-size / 8 * 5 + $size * 2;
            padding: $size $size $size 0;
            height: $image-size - $size * 2;
            >.title {
                font-weight: bold;
                line-height: 1.3em;
                padding: 0 40px 0 0;
            }
            >.author {
                color: rgba(black, 0.6);
                font-weight: bold;
                font-size: 0.9em;
                line-height: 1.3em;
            }
            >.detail {
                >.row {
                    margin-top: 0.5em;
                    display: inline-flex;
                    >.user {
                        display: inline-flex;
                    }
                }
            }
        }
        >.line {
            background: rgba(0, 0, 0, 0.1);
            height: 1px;
        }
        >.tags {
            margin: $size * 0.75 calc(#{$size} - 0.25em);
            >div {
                background-color: #3498db;
                box-shadow: 0 0 10px rgba(#3498db, 0.5);
                color: white;
                border-radius: 20px;
                padding: 0 0.25em;
                margin: 0 0.25em;
            }
        }
    }
}

.book-small-enter,
.book-small-leave-to {
    opacity: 0;
    transform: scale(0);
}

.book-small-enter-to {
    opacity: 1;
    transform: scale(1);
}

.book-small-move {
    opacity: 1;
    transition: all 0.5s;
}
</style>