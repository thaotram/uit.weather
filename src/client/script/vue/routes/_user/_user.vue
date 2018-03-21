<template>
    <ai-contain child-class="row">
        <ai-col class="user-col">
            <ai-section text="Thông tin" />
            <ai-col>
                <ai-image class="round avatar"
                          size="80"
                          :src="user.picture.large" />
                <span class="user-name">
                    {{ user.name.first }} {{ user.name.last }}
                </span>
                <div class="row-icon">
                    <div class="layer">
                        <ai-row :style="{ clipPath: `inset(0 ${random(0, 30)}% 0 0)` }">
                            <span class="icon"></span>
                            <span class="icon"></span>
                            <span class="icon"></span>
                            <span class="icon"></span>
                            <span class="icon"></span>
                        </ai-row>
                    </div>
                    <div class="layer">
                        <ai-row>
                            <span class="icon"></span>
                            <span class="icon"></span>
                            <span class="icon"></span>
                            <span class="icon"></span>
                            <span class="icon"></span>
                        </ai-row>
                    </div>
                </div>
                <div class="detail"
                     size="20">
                    <ai-row class="hasShadow"
                            green>
                        <ai-tag text="Đang chia sẻ"
                                class="crescent" />
                        <ai-tag :text="`${random(1, 5)} cuốn sách`" />
                    </ai-row>
                    <ai-row class="hasShadow"
                            orange>
                        <ai-tag text="Đang mượn"
                                class="crescent" />
                        <ai-tag :text="`${random(1, 5)} cuốn sách`" />
                    </ai-row>
                    <ai-row class="hasShadow"
                            violet>
                        <ai-tag text="Có nhu cầu mượn"
                                class="crescent" />
                        <ai-tag :text="`${random(1, 10)} cuốn sách`" />
                    </ai-row>
                </div>
                <ai-line class="light" />
                <div class="detail"
                     size="20">
                    <ai-row class="hasShadow"
                            green>
                        <ai-tag text="Ngày sinh"
                                class="crescent" />
                        <ai-tag :text="date(user.dob)" />
                    </ai-row>
                    <ai-row class="hasShadow"
                            orange>
                        <ai-tag text="Điện thoại"
                                class="crescent" />
                        <ai-tag :text="user.phone" />
                    </ai-row>
                    <ai-row class="hasShadow"
                            orange>
                        <ai-tag text="Email"
                                class="crescent" />
                        <ai-tag :text="user.email" />
                    </ai-row>
                    <ai-row class="hasShadow"
                            dark-green>
                        <ai-tag text="Đường"
                                class="crescent" />
                        <ai-tag :text="user.location.street"
                                capitalize />
                    </ai-row>
                    <ai-row class="hasShadow"
                            dark-green>
                        <ai-tag text="Thành phố"
                                class="crescent" />
                        <ai-tag :text="user.location.city + ', ' + user.location.state"
                                capitalize/>
                    </ai-row>
                </div>
            </ai-col>
        </ai-col>
        <ai-col class="full timeline-col">
            <ai-section text="Lịch sử chia sẻ" />
            <ai-row class="full hasShadow">
                <ai-line class="dark" />
                <ai-col class="full hasShadow"
                        size="30">
                    <ai-transfer-item v-for="n in random(5, 15)"
                                      :key="n" />
                </ai-col>
            </ai-row>
        </ai-col>
    </ai-contain>
</template>

<script>
import {
    components,
    user
} from 'modules';
import moment from 'moment';
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
            user: user.one(this.$route.params.name),

        };
    },
    created() {
        this.$parent.left = [
            ['Trang chủ', '/'],
            ['Người dùng', '/user'],
            [`${this.user.name.first} ${this.user.name.last}`, '/user/' + this.$route.params.name]
        ];
        this.$parent.right = [];
    },
    methods: {
        date: (string) => moment(string).format('DD/MM/YYYY'),
        random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    }
};
</script>
<style lang="scss">
.user-col {
    width: 300px;
    >.col {
        padding: 1.5em;
        margin: 10px;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 0 10px rgba(#3498cb, 0.2);
        >.user-name {
            font-size: 1.3em;
            color: rgba(0, 0, 0, 0.8);
            font-weight: bold;
            line-height: 2em;
            text-transform: capitalize;
            text-align: center;
        }
        >.row-icon {
            height: 20px;
            position: relative;
            margin-bottom: 0.25em;
            >.layer {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                text-align: center;
                >.row {
                    display: inline-block;
                    height: 100%;
                    >.icon {
                        display: inline-block;
                        color: #f1c40f;
                        line-height: 20px;
                        font-size: 20px;
                    }
                }
            }
        }
        >.line.light {
            margin-top: 0.5em;
            height: 2px;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 10px;
        }
        >.detail {
            font-size: 2em;
            >.row {
                display: inline-flex;
            }
        }
    }
}

.timeline-col {
    margin-left: 10px;
    >.row {
        padding: 10px;
        >.line {
            width: 5px;
            border-radius: 5px;
            background-color: rgba(#3498cb, 0.3);
        }
        >.col {
            .flex-wrap {
                justify-content: flex-start;
            }
        }
    }
}
</style>