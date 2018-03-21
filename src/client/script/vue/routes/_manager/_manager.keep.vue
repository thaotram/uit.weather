<template>
    <div class="col"
         id="book">
        <ai-contain class="full"
                    id="_book">
            <ai-section :text="`Đang giữ: ${books.length} quyển sách`" />
            <ai-col>
                <ai-book-large-keep v-for="(book, index) in books"
                                    :book="book"
                                    :key="index" />
            </ai-col>
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
        ...components('container'),
        ...components('list-of-items'),
        ...components('items-custom'),
        ...components('items'),
        ...components('units'),
        ...components('ui')
    },
    data() {
        return {
            books: this.randomArray(state.book.books)
        };
    },
    created() {
        this.$parent.left = [
            ['Trang chủ', '/'],
            ['Quản lý sách', '/manager'],
            ['Đang giữ', '/manager/keep']
        ];
        this.$parent.right = [];
    },
    methods: {
        random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
        randomArray(input) {
            const output = new Array(output_length);
            let input_length = input.length;
            let output_length = this.random(1, input_length / 3);
            if (output_length > input_length) return input;
            console.log(input_length, output_length);
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