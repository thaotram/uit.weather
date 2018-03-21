<template>
    <ai-book-large :book="book"
                   class="book-large-general"
                   size="30">
        <ai-list-row-wrap class="hasShadow">
            <ai-row class="hasShadow"
                    green>
                <ai-tag text="Đang chia sẻ"
                        class="crescent" />
                <ai-tag :text="`${random(1, 9)} người`" />
            </ai-row>
            <ai-row class="hasShadow"
                    orange>
                <ai-tag text="Đang mượn"
                        class="crescent" />
                <ai-tag :text="`${random(1, 9)} người`" />
            </ai-row>
            <ai-row class="hasShadow"
                    violet>
                <ai-tag text="Có nhu cầu mượn"
                        class="crescent" />
                <ai-tag :text="`${random(1, 12)} người`" />
            </ai-row>
        </ai-list-row-wrap>
        <ai-col class="hasShadow brief"
                blue>
            <ai-tag text="Tóm tắt" />
            <span class="brief-text">
                {{ book.description }}
            </span>
        </ai-col>
    </ai-book-large>
</template>
<script>
import {
    components,
    user
} from 'modules';
export default {
    name: 'BookLargeGeneral',
    components: {
        ...components('container'),
        ...components('items/book-large'),
        ...components('list-of-items'),
        ...components('tag'),
        ...components('text'),
        ...components('user'),
    },
    props: {
        book: {
            type: Object,
            default: () => ({})
        }
    },
    data: () => ({
        user: user.one()
    }),
    methods: {
        random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
    },
};
</script>
<style lang="scss">
.book-large-general .detail {
    >* {
        margin-bottom: 10px;
    }
    .row.flex-wrap {
        justify-content: flex-start;
        >* {
            margin: 0.3em;
        }
    }
    .brief {
        margin: 0.3em;
        >.tag {
            display: inline-table;
            margin-bottom: 0.5em;
        }
        >.brief-text {
            background-color: transparent;
            box-shadow: none;
            color: rgba(black, 0.8);
            font-size: 0.9em;
            padding-left: 1em;
        }
    }
}
</style>