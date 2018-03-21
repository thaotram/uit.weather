<template>
    <div class="col"
         id="book">
        <ai-contain class="full"
                    id="_book">
            <ai-section :text="`Đang cho mượn: ${share.length} quyển sách`" />
            <ai-list-row-wrap>
                <ai-book-small-share v-for="(book, index) in share"
                                     :book="book"
                                     :key="index" />
            </ai-list-row-wrap>
            <ai-section :text="`Đang giữ: ${keep.length} quyển sách`" />
            <ai-list-row-wrap>
                <ai-book-small-keep v-for="(book, index) in keep"
                                    :book="book"
                                    :key="index" />
            </ai-list-row-wrap>
        </ai-contain>
    </div>
</template>

<script>
import {
    components
} from 'modules';
import state from '../../../state';
export default {
    components: {
        ...components('line'),
        ...components('list-of-items'),
        ...components('contain'),
        ...components('ui'),
        ...components('items'),
        ...components('items-custom')
    },
    data() {
        return {
            books: state.book.books,
            keep: this.randomArray(state.book.books),
            share: this.randomArray(state.book.books)
        };
    },
    created() {
        this.$parent.left = [
            ['Trang chủ', '/'],
            ['Quản lý sách', '/manager']
        ];
        this.$parent.right = [
            ['Đang giữ', '/manager/keep'],
            ['Đang cho mượn', '/manager/share'],
            ['Sắp cho mượn', '/manager/onshare'],
        ];
    },
    methods: {
        random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
        randomArray(input) {
            const output = new Array(output_length);
            let input_length = input.length;
            let output_length = this.random(1, input_length / 3);
            if (output_length > input_length) return input;
            const taken = new Array(input_length);
            while (output_length--) {
                var x = Math.floor(Math.random() * input_length);
                output[output_length] = input[x in taken ? taken[x] : x];
                taken[x] = --input_length;
            }
            return output;
        }
    }
};
</script>