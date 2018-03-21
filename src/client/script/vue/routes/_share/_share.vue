<template>
    <ai-contain child-class="col">
        <ai-section text="Chia sẻ sách của bạn" />
        <ai-col class="col-share">
            <ai-row size="40"
                    class="hasShadow">
                <ai-image class="upload-image"
                          size="80"
                          style="background-color: transparent"
                          src="https://i.imgur.com/ym2biJ7.png" />
                <div class="col hasShadow">
                    <div class="detail hasShadow">
                        <div class="row hasShadow"
                             green>
                            <ai-tag text="Tên sách"
                                    class="crescent" />
                            <ai-input style="width: 300px"
                                      type="text"
                                      placeholder="Nhật ký trong tù" />
                        </div>
                        <div class="row hasShadow"
                             green>
                            <ai-tag text="Tác giả"
                                    class="crescent" />
                            <ai-input style="width: 300px"
                                      type="text"
                                      placeholder="Hồ Chí Minh" />
                        </div>
                        <div class="row hasShadow"
                             green>
                            <ai-tag text="Thể loại"
                                    class="crescent" />
                            <ai-row class="tag-list tag"
                                    size="26">
                                <ai-tag text="Nhật ký" />
                                <ai-tag text="Tập thơ" />
                                <ai-tag text="+ Thêm" />
                            </ai-row>
                        </div>
                    </div>
                    <div class="detail">
                        <div class="row hasShadow"
                             dark-green>
                            <ai-tag text="Tóm tắt"
                                    class="fix-size" />
                        </div>
                    </div>
                    <div class="detail row hasShadow"
                         style="margin-bottom: 15px;">
                        <textarea class="textarea full"
                                  style="height: 70px"
                                  placeholder="Tóm tắt nội dung" />
                    </div>
                    <div class="detail">
                        <div class="row hasShadow"
                             dark-blue>
                            <ai-tag text="Yêu cầu"
                                    class="fix-size" />
                        </div>
                    </div>
                    <div class="detail row hasShadow"
                         style="margin-bottom: 15px;">
                        <textarea class="textarea full dark-textarea"
                                  style="height: 70px"
                                  placeholder="Yêu cầu đối với người mượn sách" />
                    </div>
                    <div class="detail">
                        <div class="row hasShadow"
                             blue>
                            <ai-tag text="Chia sẻ quyển sách này"
                                    class="fix-size" />
                        </div>
                    </div>
                </div>
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
            number: this.random(10, 15),
            percent: this.random(0, 30)
        };
    },
    created() {
        this.update();
    },
    methods: {
        date: (string) => moment(string).format('DD/MM/YYYY'),
        random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
        update() {
            this.$parent.left = [
                ['Trang chủ', '/'],
                ['Chia sẻ sách', '/share']
            ];
            this.$parent.right = [];
        }
    },
    beforeRouteUpdate(to, from, next) {
        this.update();
        next();
    },
};
</script>
<style lang="scss">
.col-share {
    padding: 10px;
    .upload-image {
        background-color: rgba(#3496db, 0.1)!important;
        background-repeat: no-repeat;
        background-size: 80px;
        border-radius: 5px;
        border: solid 2px #3496db;
        height: 300px!important;
        margin: 0 0 auto 0;
        min-width: 200px!important;
        opacity: 0.3;
    }
    .detail {
        padding-left: 15px;
        >.row {
            margin-bottom: 10px;
            display: inline-flex;
            >.fix-size {
                font-size: 13px!important;
            }
            >.tag.crescent {
                font-size: 13px!important;
                padding-left: 15px!important;
                padding-right: 50px!important;
            }
            >.tag-list {
                padding: 0 8px !important;
                >* {
                    background: #2ecc71;
                    margin: 0 0px;
                    display: inline-flex;
                    vertical-align: bottom;
                    margin-bottom: 7px;
                }
            }
        }
    }
    .input,
    .input>input {
        border-radius: 50px;
        color: white;
    }
    .input>input {
        padding: 0 1.5em !important;
        &::-webkit-input-placeholder {
            color: rgba(white, 0.6)
        }
    }
    .textarea {
        background: #1abc9c;
        box-shadow: 0 0 10px rgba(#1abc9c, 0.5);
        border-radius: 5px;
        outline: none;
        border: none;
        padding: 10px;
        color: white;
        &::-webkit-input-placeholder {
            color: rgba(white, 0.6)
        }
    }
    .dark-textarea {
        background: #34495e;
        box-shadow: 0 0 10px rgba(#34495e, 0.5);
    }
}
</style>