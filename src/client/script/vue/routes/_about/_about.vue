<template>
    <div class="about">
        <ai-section>
            <h3 bold>
                Nhóm phát triển
            </h3>
            <p bold>
                Nhóm 12 - Lớp Giao tiếp người máy - SE215.I11
            </p>
            <p bold>Thành viên</p>
            <div class="tab">
                <p>
                    + 15520649 Phạm Hồng Phúc
                </p>
                <p>
                    + 15520325 Nguyễn Thị Ngọc Huyền
                </p>
                <p>
                    + 14520927 Dương Hoài Thương
                </p>
                <p>
                    + 14520724 Hồ Hoàng Quân
                </p>
            </div>
            <h3 bold>
                Mục tiêu
            </h3>
            <p>
                - Mục tiêu của đội ngũ Thông tin nhắm đến là tạo một môi trường thuận thiện trong việc chia sẻ sách.
            </p>
            <h3 bold>
                Nền tảng
            </h3>
            <p>
                Ứng dụng web được xây dựng bằng Nodejs và dựa trên một số các thư viện/framework sau:
            </p>
            <p>
                Lưu ý: Ứng dụng được nộp là ứng dụng không sử dụng WebServer:
            </p>
            <p bold>+ Các thư viện bắt buộc:</p>
            <pre>
        "axios"                     : "^0.16.2",
        "body-parser"               : "^1.18.2",
        "cookie-parser"             : "^1.4.3",
        "express"                   : "^4.16.2",
        "express-session"           : "^1.15.6",
        "lokijs"                    : "^1.5.1",
        "moment"                    : "^2.19.1",
        "nanobar"                   : "^0.4.2",
        "socket.io"                 : "^2.0.3",
        "vue"                       : "^2.5.2",
        "vue-router"                : "^3.0.1",
        "vuex"                      : "^3.0.0"</pre>
            <p bold>+ Các thư viện phụ thuộc, được sử dụng trong quá trình phát triển:</p>
            <pre>
        "babel-cli"                 : "^6.26.0",
        "babel-core"                : "^6.26.0",
        "babel-loader"              : "^7.1.2",
        "babel-minify"              : "^0.2.0",
        "babel-preset-es2015"       : "^6.24.1",
        "babel-preset-stage-2"      : "^6.24.1",
        "chalk"                     : "^2.1.0",
        "cross-env"                 : "^5.1.0",
        "css-loader"                : "^0.28.7",
        "eslint"                    : "^4.9.0",
        "eslint-config-standard"    : "^10.2.1",
        "eslint-loader"             : "^1.9.0",
        "eslint-plugin-html"        : "^3.2.2",
        "eslint-plugin-import"      : "^2.7.0",
        "eslint-plugin-node"        : "^5.2.0",
        "eslint-plugin-promise"     : "^3.6.0",
        "eslint-plugin-standard"    : "^3.0.1",
        "eslint-plugin-vue"         : "^2.1.0",
        "eslint-plugin-vue-libs"    : "^1.2.1",
        "file-loader"               : "^1.1.5",
        "html-webpack-plugin"       : "^2.30.1",
        "json-loader"               : "^0.5.7",
        "mocha"                     : "^4.0.1",
        "node-sass"                 : "^4.5.3",
        "nodemon"                   : "^1.12.1",
        "npm-run-all"               : "^4.1.1",
        "sass-loader"               : "^6.0.6",
        "style-loader"              : "^0.19.0",
        "vue-eslint-parser"         : "^1.0.0",
        "vue-hot-reload-api"        : "^2.2.0",
        "vue-loader"                : "^13.3.0",
        "vue-template-compiler"     : "^2.5.2",
        "webpack"                   : "^3.8.0",
        "webpack-dev-middleware"    : "^1.12.0",
        "webpack-dev-server"        : "^2.9.2",
        "webpack-hot-middleware"    : "^2.20.0",
        "webpack-split-by-path"     : "^2.0.0"</pre>
        </ai-section>
    </div>
</template>
<script>
import {
    components
} from 'modules';

export default {
    name: 'about',
    components: {
        ...components('container'),
        ...components('units'),
        ...components('ui'),
        ...components('routes/_book.id'),
        ...components('items/book')
    },
    created() {
        this.$parent.links = [
            ['Trang chủ', '/'],
            ['Thông tin', '/Thông_tin']
        ];
    }
};
</script>
<style lang="scss">
.about {
    padding: 10px 0;
    >*>*>* {
        pre {
            font-size: 1.2em;
            color: #222; // margin: 10px;
        }
    }
}
</style>