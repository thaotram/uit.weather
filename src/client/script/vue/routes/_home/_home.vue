<template>
    <div class="full">
        <ai-contain>
            <ai-section text="Ngẫu nhiên" />
            <ai-book-large-general :book="book"
                                   class="fix-width" />
        </ai-contain>
        <ai-contain class="full"
                    child-class="row">
            <div class="col col-books full">
                <ai-section text="Tất cả sách" />
                <ai-list-row-wrap>
                    <ai-book-small-general v-for="(book, index) in books"
                                           :book="book"
                                           :key="index" />
                </ai-list-row-wrap>
            </div>
            <div class="space" />
            <div class="col col-users hasShadow">
                <ai-section text="Thành viên tích cực" />
                <ai-list-of-users />
            </div>
        </ai-contain>
    </div>
</template>

<script>
import {
    components
} from 'modules';
import state from '../../../state';

export default {
    name: 'HomePage',
    components: {
        ...components('list-of-items'),
        ...components('list-of-users'),
        ...components('container'),
        ...components('units'),
        ...components('items'),
        ...components('items-custom'),
        ...components('ui'),
    },
    data: () => ({
        book: state.book.books[
            Math.floor(Math.random() * state.book.books.length)
        ],
        books: state.book.books.filter(() => true)
    }),
    created() {
        this.$parent.left = [
            ['Trang chủ', '/']
        ];
        this.$parent.right = [
            ['Sách', '/book'],
            ['Quản lý sách', '/manager'],
            ['Chia sẻ sách', '/share'],
        ];
    }
};
</script>
<style lang="scss"
       scoped>
.space {
    width: 10px;
}

.col-users {
    width: 200px;
}
</style>