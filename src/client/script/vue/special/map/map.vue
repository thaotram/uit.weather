<template>
    <div class="google-map">
        <div class="map" />
        <input v-model="address"
               class="search-box"
               type="text"
               placeholder="Tìm kiếm">
    </div>
</template>

<script>
import $script from 'scriptjs';
import google from './google';
export default {
    name: 'Map',
    components: {
        ...'@/container/row.vue',
    },
    data() {
        return {
            address: '',
            map: null,
            input: null,
            center: {
                lat: 10,
                lng: 106,
            },
        };
    },
    watch: {
        center(value) {
            // console.log('center', value.lat, value.lng);
        },
    },
    mounted() {
        const key = 'AIzaSyD_BxLa0QZlBH4LuwMspJHmmZPzNIwagik';
        const url = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
        $script(url, () => {
            google(this);
        });
    },
};
</script>
<style lang="scss">
.google-map {
    position: relative;
    > .map {
        width: 100%;
        height: 100%;
        &::after {
            content: '';
            background: rgba(46, 204, 113, 0.4);
            border-radius: 10px;
            bottom: 0;
            display: block;
            height: 10px;
            left: 0;
            margin: auto;
            position: absolute;
            right: 0;
            top: 0;
            width: 10px;
            z-index: 1;
        }
    }
}

.map,
.map * {
    transition: all 0s;
}

$margin: 15px;

.search-box {
    display: block;
    position: absolute;
    top: $margin;
    left: $margin;
    right: $margin;
    padding: $margin;
    background-color: #fff;
    line-height: 15px;
    height: 15px;
    font-size: 15px;
    font-family: Roboto;
    font-weight: 300;
    text-overflow: ellipsis;
    width: calc(100% - 60px);
    outline: 0;
    border: 0;
    border-radius: 2px;
    &:focus {
        border-radius: 2px 2px 0 0;
    }
}

.pac-container {
    box-shadow: 0 0 0 transparent;
    border: none;
    border-radius: 0 0 2px 2px;
    &::after {
        display: none;
    }
    > .pac-item {
        padding: 0;
        height: 30px;
        > .pac-icon {
            margin: 5px 10px;
        }
        > .pac-item-query {
            display: inline-block;
            height: 30px;
            line-height: 30px;
            padding-right: 5px;
        }
        > .pac-item-query + span {
            display: inline-block;
            line-height: 30px;
            height: 30px;
        }
    }
}
</style>