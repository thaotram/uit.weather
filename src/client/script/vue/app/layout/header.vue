<template>
    <div id="header"
         class="row"
         size="50">
        <ai-contain child-class="row">
            <router-link to="/"
                         class="full"
                         id="logo">
                <ai-label text="Ứng dụng chia sẻ sách" />
            </router-link>
            <div id="search-box"
                 class="row"
                 size="30">
                <ai-input class="search"
                          placeholder="Tìm kiếm" />
            </div>
            <ai-col class="square">
                <ai-image size="30"
                          class="round"
                          :src="user.picture.thumbnail" />
            </ai-col>
        </ai-contain>
    </div>
</template>
<script>
import {
    components,
    user
} from 'modules';

export default {
    name: 'Header',
    components: {
        ...components('container'),
        ...components('units')
    },
    data: () => ({
        user: user.one()
    }),
};
</script>
<style lang="scss">
#header {
    color: #666;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    z-index: 2;
    padding-right: 8px;
    #logo {
        cursor: pointer;
        &:hover {
            text-decoration: none;
        }
        .label {
            cursor: pointer;
            padding: 0 10px;
        }
        .text {
            font-family: 'Pacifico', cursive;
            font-size: 1.2em;
            flex: 1;
            text-align: left;
        }
    }
    #search-box {
        align-self: center;
        border-radius: 30px;
        border: 0.75px solid rgba(black, 0.1);
        input {
            padding: 0 15px;
        }
    }
}
</style>