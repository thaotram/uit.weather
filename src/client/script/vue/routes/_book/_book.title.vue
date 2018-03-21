<template>
    <div>
        <ai-contain v-if="book"
                    class="full hasShadow"
                    child-class="col">
            <ai-section text="Thông tin sách" />
            <ai-book-large-general class="hidden-sm-down full"
                                   :book="book" />
            <ai-book-small-general class="hidden-md-up"
                                   :book="book" />
        </ai-contain>
        <ai-contain class="button-row"
                    child-class="hasShadow row">
            <ai-row size="50"
                    class="flex-wrap hasShadow">
                <ai-row>
                    <ai-button icon=""
                               text="Mượn ngay" />
                </ai-row>
                <ai-row>
                    <ai-button icon=""
                               text="Cho mượn quyển sách này" />
                </ai-row>
                <ai-row>
                    <ai-button icon=""
                               text="Thêm vào danh sách yêu thích" />
                </ai-row>
            </ai-row>
        </ai-contain>
        <ai-contain>
            <ai-section text="Có thể mượn" />
        </ai-contain>
        <ai-contain child-class="col hasShadow share-1">
            <table>
                <tr>
                    <td>Chủ sách</td>
                    <td>Địa chỉ</td>
                    <td>Yêu cầu</td>
                    <td>Có thể cho mượn trong</td>
                </tr>
                <tr>
                    <td>Phạm Hồng Phúc</td>
                    <td>Quận Thủ Đức, TP Hồ Chí Minh</td>
                    <td>Giữ gìn sách, cho mượn lại 1 quyển tương đương</td>
                    <td>10 ngày</td>
                </tr>
                <tr>
                    <td>Dương Hoài Thương</td>
                    <td>Quận 3, TP Hồ Chí Minh</td>
                    <td>Giữ gìn sách</td>
                    <td>9 ngày</td>
                </tr>
            </table>
        </ai-contain>
        <ai-contain>
            <ai-section text="Có nhu cầu mượn" />
        </ai-contain>
        <ai-contain child-class="col hasShadow share-2">
            <table>
                <tr>
                    <td>Người muốn mượn sách</td>
                    <td>Địa chỉ</td>
                    <td>Dự kiến trả trong</td>
                </tr>
                <tr>
                    <td>Nguyễn Thị Ngọc Huyền</td>
                    <td>Trường đại học Công Nghệ Thông Tin, Thủ Đức, TP Hồ Chí Minh</td>
                    <td>8 ngày</td>
                </tr>
            </table>
        </ai-contain>
        <ai-contain>
            <ai-section text="Đang mượn" />
        </ai-contain>
        <ai-contain child-class="col hasShadow share-3">
            <table>
                <tr>
                    <td>Chủ sách</td>
                    <td>Người mượn</td>
                    <td>Địa chỉ</td>
                    <td>Dự kiến trả trong</td>
                </tr>
                <tr>
                    <td>Phạm Hồng Phúc</td>
                    <td>Nguyễn Thị Ngọc Huyền</td>
                    <td>Quận Thủ Đức, TP Hồ Chí Minh</td>
                    <td>5 ngày nữa</td>
                </tr>
            </table>
        </ai-contain>
    </div>
</template>

<script>
// import axios from 'axios';
import {
    components
} from 'modules';
import state from '../../../state';

export default {
    components: {
        ...components('container'),
        ...components('units'),
        ...components('ui'),
        ...components('items'),
        ...components('items-custom')
    },
    data() {
        return {
            book: state.book.books.find(book => book.title == this.$route.params.title)
        };
    },
    created() {
        this.$parent.left = [
            ['Trang chủ', '/'],
            ['Sách', '/book'],
            [this.book.title, '/book/' + this.book.id]
        ];
        this.$parent.right = [];
    }
};
</script>
<style lang="scss">
.button-row>*>* {
    margin: 5px;
    >.row {
        $opacity: 0.3;
        $color-1: #3498db;
        $color-2: #2ecc71;
        $color-3: #e67e22;
        margin: 5px;
        border-radius: 4px;
        &:nth-child(1) {
            box-shadow: 0 0 5px rgba($color-1, 0.5);
            background-color: $color-1;
        }
        &:nth-child(2) {
            box-shadow: 0 0 5px rgba($color-2, 0.5);
            background-color: $color-2;
        }
        &:nth-child(3) {
            box-shadow: 0 0 5px rgba($color-3, 0.5);
            background-color: $color-3;
        }
    }
    .button {
        color: white;
    }
}
</style>