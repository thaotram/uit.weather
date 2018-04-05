<template>
    <div class="full">
        a
    </div>
</template>

<script>
import state from '../../state';

export default {
    name: 'HomePage',
    components: {},
    data: () => ({
        book:
            state.book.books[
                Math.floor(Math.random() * state.book.books.length)
            ],
        books: state.book.books.filter(() => true),
    }),
    created() {
        this.$parent.left = [['Trang chủ', '/']];
        this.$parent.right = [
            ['Sách', '/book'],
            ['Quản lý sách', '/manager'],
            ['Chia sẻ sách', '/share'],
        ];
    },
};
</script>
<style lang="scss"
       scoped>

</style>