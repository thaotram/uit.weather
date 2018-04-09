<template>
    <div :style="divStyle"
         class="circle">
        <svg>
            <circle
                :r="(size - width)/2" 
                :cx="size/2"
                :cy="size/2"
                :style="circleStyle"
                :stroke-width="width"
                stroke="#3e7bd4"
                fill="transparent"
            />
        </svg>
        <div 
            :style="textStyle"
            class="text"
        >{{ text }}</div>
    </div>
</template>
<script>
export default {
    name: 'SvgCircle',
    props: {
        text: { type: String, default: '' },
        size: { type: Number, default: 100 },
        start: { type: Number, default: 0 },
        percent: { type: Number, default: 100 },
        width: { type: Number, default: 4 },
    },
    computed: {
        circleStyle() {
            return {
                strokeDasharray: `${this.circumference} ${this.circumference}`,
                strokeDashoffset: this.offset,
                transform: `rotate(${-0.25 + this.start / 100}turn)`,
                transformOrigin: '50% 50%',
            };
        },
        divStyle() {
            return { width: `${this.size}px`, height: `${this.size}px` };
        },
        textStyle() {
            return {
                lineHeight: `${this.size}px`,
                height: `${this.size}px`,
                fontSize: `${this.size * 0.22}px`,
            };
        },
        circumference() {
            return this.size * Math.PI;
        },
        offset() {
            return this.circumference - this.percent / 100 * this.circumference;
        },
    },
};
</script>
<style lang="scss">
.circle {
    position: relative;
    > svg {
        width: 100%;
        height: 100%;
    }
    > .text {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        text-align: center;
        color: #3e7bd4;
    }
}
</style>
