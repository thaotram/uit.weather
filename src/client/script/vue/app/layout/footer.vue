<template>
    <ai-contain id="footer"
                child-class="row">
        <ai-col class="full"
                bold>
            <p>Nhóm 12</p>
            <p>Lớp Giao tiếp người máy - SE215.I11</p>
        </ai-col>
        <ai-row>
            <!-- <router-link to="/">Trang chủ</router-link>
            <router-link to="/Thông_tin">Thông tin</router-link> -->
        </ai-row>
    </ai-contain>
</template>

<script>
import {
    components
} from 'modules';
export default {
    name: 'Footer',
    components: {
        ...components('container'),
        ...components('items')
    }
};
</script>
<style lang="scss">
#footer {
    background-color: rgba(#3498db, 0.25);
    border-top: 4px solid rgba(#3498db, 0.8);
    font-size: 0.9em;
    margin-top: 30px;
    >.row {
        padding: 20px 10px;
    }
    * {
        color: #3498db;
    }
    a {
        font-weight: bold;
        margin-left: 10px;
        &:hover {
            color: #333;
            text-decoration: none;
        }
    }
}
</style>