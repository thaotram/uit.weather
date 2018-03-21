<template>
    <ai-row class="book-large hasShadow">
        <router-link class="image-link"
                     :to="'/book/' + book.title">
            <ai-image class="shadow"
                      :src="book.image" />
        </router-link>
        <div class="icon top-right-icon noHover"></div>
        <ai-row class="full content">
            <ai-line class="dark" />
            <ai-col class="full content-right">
                <div class="title-author">
                    <router-link to="/"
                                 class="title">
                        {{ book.title }}
                    </router-link>
                    <router-link to="/"
                                 class="author">
                        {{ book.author }}
                    </router-link>
                </div>
                <ai-row class="tags hasShadow"
                        size="25">
                    <ai-button v-for="tag in book.tags"
                               :key="tag"
                               :text="tag" />
                </ai-row>
                <ai-line class="dark" />
                <div class="detail scroll">
                    <slot/>
                </div>
            </ai-col>
        </ai-row>
    </ai-row>
</template>
<script>
import {
    components
} from 'modules';
export default {
    name: 'BookLarge',
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
$size: 30px;
$image-size: 400px;
$red: #ff4d4d;
.book-large {
    background: white;
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(black, 0.2);
    height: $image-size;
    margin: ($size + 10px) 10px 10px 10px;
    position: relative;
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
    .box {
        padding: $size * 0.5;
    }
    >.image-link {
        box-shadow: 0 0 20px rgba(black, 0.4);
        height: $image-size;
        left: $size;
        position: absolute;
        top: -$size;
        width: $image-size / 8 * 5;
        >.image {
            width: 100%;
            height: 100%;
        }
    }
    >.content {
        margin-left: $image-size / 8 * 5 + $size * 2;
        >.content-right {
            >.title-author {
                padding: 25px 20px 0 20px;
                font-weight: bold;
                .title,
                .author {
                    display: block;
                    &:hover {
                        text-decoration: none;
                    }
                }
                .title {
                    font-size: 1.5em;
                    line-height: 1.2em;
                    color: rgba(black, 0.9);
                    padding-right: 50px;
                }
                .author {
                    font-size: 1.1em;
                    color: rgba(black, 0.6);
                }
            }
            >.tags {
                $tag-size: 20px;
                padding: $tag-size * 0.75 $tag-size; // margin: 0 -0.25em;
                >div {
                    &:first-child {
                        margin-left: 0;
                    }
                    background-color: #3498db;
                    box-shadow: 0 0 10px rgba(#3498db, 0.5);
                    color: white;
                    border-radius: 20px;
                    padding: 0 0.25em;
                    margin: 0 0.25em;
                }
            }
            >.detail {
                padding: 20px;
                >.detail-child {
                    display: block;
                    >* {
                        display: inline-flex;
                    }
                }
                >* {
                    display: inline-flex;
                }
            }
        }
    }
}
</style>