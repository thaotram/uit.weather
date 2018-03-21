<template>
    <div>
        <ai-list-row-wrap class="transfer-item hasShadow"
                          v-if="is">
            <span class="text">Cho</span>
            <ai-user :user="user()" />
            <span class="text">mượn quyển</span>
            <ai-book :text="book.title" />
        </ai-list-row-wrap>
        <ai-list-row-wrap class="transfer-item hasShadow"
                          v-else>
            <span class="text">Mượn quyển</span>
            <ai-book :text="book.title" />
            <span class="text">của</span>
            <ai-user :user="user()" />
        </ai-list-row-wrap>
    </div>
</template>
<script>
import {
    components,
    user
} from 'modules';
import state from '../../state';

export default {
    name: 'TransferItem',
    components: {
        ...components('container'),
        ...components('items-custom'),
        ...components('items'),
        ...components('list-of-items'),
        ...components('ui'),
        ...components('units'),
    },
    data() {
        return {
            book: state.book.books[
                Math.floor(Math.random() * state.book.books.length)
            ],
            is: Math.floor(Math.random() * 2)
        };
    },
    methods: {
        user: user.one
    }
};
</script>
<style lang="scss">
.transfer-item {
    padding-left: 30px;
    margin: 8px 0;
    position: relative;
    &:before {
        position: absolute;
        top: 12px;
        bottom: 0;
        left: -5px;
        width: 30px;
        height: 5px;
        border-radius: 5px;
        content: "";
        background-color: rgba(#3498cb, 0.3);
    }
    &:after {
        position: absolute;
        top: 9.5px;
        bottom: 0;
        left: -7.5px;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background-color: rgba(#3498cb, 1);
        content: "";
    }
    >* {
        margin: 0 0.5em 0.5em 0;
    }
    >.user {
        color: white;
        background-color: #27ae60;
        box-shadow: 0 0 10px rgba(#27ae60, 0.6);
    }
    >.text {
        color: rgba(black, 0.8);
        line-height: 30px;
        font-size: 14px;
    }
    >.tag {
        background-color: #1abc9c;
        box-shadow: 0 0 10px rgba(#1abc9c, 0.6);
    }
}
</style>