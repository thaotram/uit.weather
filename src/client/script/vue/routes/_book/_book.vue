<template>
    <div class="col"
         id="book">
        <ai-contain class="full"
                    id="_book">
            <ai-section text="Tất cả sách" />
            <ai-list-row-wrap>
                <ai-book-small-general v-for="(book, index) in books"
                                       :book="book"
                                       :key="index" />
            </ai-list-row-wrap>
        </ai-contain>
    </div>
</template>

<script>
import {
    components,
    data
} from 'modules';
export default {
    components: {
        ...components('line'),
        ...components('list-row-wrap'),
        ...components('contain'),
        ...components('items-custom'),
        ...components('ui')
    },
    data: () => ({
        ...data('book')
    }),
    created() {
        this.$parent.left = [
            ['Trang chủ', '/'],
            ['Sách', '/book']
        ];
        this.$parent.right = [
            // ['Văn học Việt nam', '/'],
            // ['Văn học nước ngoài', '/book']
        ];
    }
};
</script>