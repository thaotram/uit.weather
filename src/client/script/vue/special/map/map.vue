<template>
    <div class="google-map">
        <div ref="map"
             class="map"/>
        <div class="control">
            <input v-model="address"
                   class="search-box"
                   type="text"
                   placeholder="Tìm kiếm">
            <div class="line" />
            <div class="tracker icon weather"
                 @click="getlocation"></div>
        </div>
    </div>
</template>

<script>
import $script from 'scriptjs';
import google from './google';
import computed from '../../../modules/component/computed/computed';

export default {
    name: 'Map',
    components: {
        ...'@/container/row.vue',
    },
    data() {
        return {
            input: null,
            currentPosition: null,
        };
    },
    computed: {
        ...computed('map'),
    },
    mounted() {
        const key = 'AIzaSyD_BxLa0QZlBH4LuwMspJHmmZPzNIwagik';
        const url = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
        $script(url, () => {
            google(this);
        });
    },
    methods: {
        panTo() {
            this.map.setZoom(10);
            this.map.panTo({
                lat: this.currentPosition.coords.latitude,
                lng: this.currentPosition.coords.longitude,
            });
        },
        getlocation() {
            if (!navigator.geolocation) {
                window.alert('Trình duyệt không hỗ trợ');
                return;
            }
            if (this.currentPosition) this.panTo();
            else {
                navigator.geolocation.getCurrentPosition(position => {
                    this.currentPosition = position;
                    this.panTo();
                });
            }
        },
    },
};
</script>
<style lang="scss">
.google-map {
    position: relative;
    > .map {
        width: 100%;
        height: 100%;
        * {
            transition: all 0s;
        }
        .gmnoprint, .gm-style-cc {
            display: none;
        }
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
    > .control {
        display: flex;
        position: absolute;
        top: 20px;
        top: 20px;
        left: 20px;
        right: 20px;
        > .search-box {
            box-shadow: 0 0 15px #23232d;
            display: block;
            flex: 1;
            padding: 15px;
            background-color: #23232d;
            color: #3e7bd4;
            line-height: 15px;
            max-height: 15px;
            font-size: 15px;
            font-family: Roboto;
            font-weight: 300;
            text-overflow: ellipsis;
            width: calc(100% - 100px);
            outline: 0;
            border: 0;
            border-radius: 6px 6px 0 0;
            &:focus {
                border-radius: 2px 2px 0 0;
            }
        }
        > .line {
            width: 10px;
        }
        > .tracker {
            cursor: pointer;
            width: 45px;
            background-size: 25px;
            background-color: #23232d;
            box-shadow: 0 0 15px #23232d;
            text-shadow: 0 0 0;
            color: #3e7bd4;
            border-radius: 25px;
            line-height: 45px;
            font-size: 22px;
            text-align: center;
            &:hover {
                text-shadow: 0 0 10px;
                background-color: #262c3e;
            }
        }
    }
}

.pac-container {
    box-shadow: 0 0 15px #23232d;
    background-color: #23232d;
    border: none;
    border-radius: 0 0 2px 2px;
    &::after {
        display: none;
    }
    > .pac-item {
        border-top: 1px solid rgba(#3e7bd4, 0.5);
        display: flex;
        padding: 0;
        height: 30px;
        &.pac-item-selected {
            background-color: rgba(0, 0, 0, 0.3);
        }
        &:hover {
            background-color: rgba(0, 0, 0, 0.2);
        }
        > .pac-icon {
            margin: 5px 10px;
            min-width: 15px;
        }
        > .pac-item-query {
            color: #3e7bd4;
            display: inline-block;
            height: 30px;
            line-height: 30px;
            padding-right: 5px;
        }
        > .pac-item-query + span {
            color: rgba(#3e7bd4, 0.5);
            padding-right: 7px;
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            display: inline-block;
            line-height: 30px;
            height: 30px;
        }
    }
}
</style>