<template>
    <div class="col users hasShadow"
         size="35">
        <ai-user v-for="(user, index) in users"
                 :key="index"
                 :user="user" />
    </div>
</template>

<script>
import axios from 'axios';
import {
    components,
    user
} from 'modules';

export default {
    name: 'AiListOfUsers',
    components: {
        ...components('items')
    },
    data() {
        return {
            users: user.more(5)
        };
    },
    // mounted() {
    //    users
    // },
    methods: {

    },
};
</script>

<style lang="scss">
.users {
    margin-top: 25px;
    >.user {
        margin: 0.25em;
        background: white;
    }
}
</style>