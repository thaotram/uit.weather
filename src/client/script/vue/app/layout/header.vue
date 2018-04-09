<template>
    <div id="header"
         class="row"
         size="50">
        <ai-contain child-class="row">
            <router-link id="logo"
                         to="/"
                         class="full">
                <ai-label class="center"
                          text="Thời tiết" />
            </router-link>
        </ai-contain>
    </div>
</template>
<script>
export default {
    name: 'Header',
    components: {
        ...'@/container/contain.vue',
        ...'@/container/col.vue',
        ...'@/container/row.vue',
        ...'@/units/image.vue',
        ...'@/units/input.vue',
        ...'@/units/label.vue',
    },
};
</script>
<style lang="scss">
#header {
    color: #ddd;
    background: #23232d;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
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
            text-align: center;
        }
    }
}
</style>