<template>
    <div class="detail">
        <ai-row class="s1">
            <div class="icon weather">
                {{ icon(forecast.currently.icon) }}
            </div>
            <div class="temperature">
                {{ parseFloat(temperature).toFixed(0) }}
            </div>
            <div class="celsius">°C</div>
            <ai-col class="apparentTemperature full">
                <div>Nhiệt độ biểu kiến</div>
                <div class="row">
                    <div>{{ parseFloat(apparentTemperature).toFixed(1) }}</div>
                    <div class="celsius">°C</div>
                </div>
            </ai-col>
        </ai-row>
        <ai-row class="s2">
            <ai-col>
                <ai-circle :percent="forecast.currently.humidity * 100"
                           :text="`${parseFloat(humidity * 100).toFixed(0)}%`"
                           :size="100" />
                <div class="text">
                    Độ ẩm
                </div>
            </ai-col>
            <ai-col>
                <ai-circle :percent="forecast.daily.data[0].precipProbability * 100"
                           :text="`${(parseFloat(precipProbability * 100).toFixed(0))}%`"
                           :size="100" />
                <div class="text">
                    Khả năng mưa
                </div>
            </ai-col>
            <ai-col>
                <ai-circle :percent="forecast.currently.cloudCover * 100"
                           :text="`${(parseFloat(cloudCover * 100).toFixed(0))}%`"
                           :size="100" />
                <div class="text">
                    Mây phủ
                </div>
            </ai-col>
            <ai-col>
                <ai-circle :start="forecast.currently.windBearing / 360 * 100 - 5"
                           :percent="10"
                           :text="`${parseFloat(windGust).toFixed(1)} m/s`"
                           :size="100" />
                <div class="text">
                    Vận tốc gió tối đa
                </div>
            </ai-col>
        </ai-row>
        <ai-col class="temperatureChart">
            <div class="text">
                Nhiệt độ 24h tiếp theo
            </div>
            <canvas ref="temperatureChart" 
                    height="150"/>
        </ai-col>
        <div class="row s4 u2">
            <div class="row full">
                <div class="full">
                    Điểm sương:
                </div>
                <div>
                    {{ parseFloat(dewPoint).toFixed(1) }}°C
                </div>
            </div>
            <div class="row full">
                <div class="full">
                    Áp suất:
                </div>
                <div>
                    {{ parseFloat(pressure).toFixed(1) }} hPa
                </div>
            </div>
        </div>
        <div class="row s5 u2">
            <div class="row full">
                <div class="full">
                    Tầm nhìn:
                </div>
                <div>
                    {{ parseFloat(visibility).toFixed(1) }} Km
                </div>
            </div>
            <div class="row full">
                <div class="full">
                    Ozone:
                </div>
                <div>
                    {{ parseFloat(ozone).toFixed(1) }} DU
                </div>
            </div>
        </div>
        <div ref="nanobar"/>
    </div>
</template>
<script>
import computed from '../../../modules/component/computed/computed';
import moment from 'moment';
import axios from 'axios';
import icon from './icon';
import temperatureChart from './temperatureChart';
import { TweenLite } from 'gsap';

export default {
    name: 'Detail',
    components: {
        ...'@/special/map/map.vue',
        ...'@/container/row.vue',
        ...'@/container/col.vue',
        ...'@/units/line.vue',
        ...'@/units/label.vue',
        ...'@/units/circle.vue',
    },
    data() {
        return {
            temperatureChart: null,
            temperature: 0,
            apparentTemperature: 0,
            humidity: 0,
            precipProbability: 0,
            cloudCover: 0,
            windGust: 0,
            dewPoint: 0,
            pressure: 0,
            visibility: 0,
            ozone: 0,
        };
    },
    computed: {
        ...computed('detail'),
        center: {
            get() {
                return this.$store.state.map.center;
            },
            set(value) {
                this.$store.commit('set', {
                    path: 'map.set',
                    value,
                });
            },
        },
    },
    watch: {
        forecast(forecast) {
            if (!this.temperatureChart) {
                const ctx = this.$refs.temperatureChart.getContext('2d');
                this.temperatureChart = temperatureChart(ctx);
            }
            window.nanobar.go(100);

            this.temperatureChart.data.labels = forecast.hourly.data
                .slice(0, 25)
                .map(hour => moment.unix(hour.time));
            this.temperatureChart.data.datasets[0].data = forecast.hourly.data
                .slice(0, 25)
                .map(hour => hour.temperature);
            this.temperatureChart.update();

            TweenLite.to(this.$data, 0.5, {
                temperature: forecast.currently.temperature,
                apparentTemperature: forecast.currently.apparentTemperature,
                humidity: forecast.currently.humidity,
                precipProbability: forecast.daily.data[0].precipProbability,
                cloudCover: forecast.currently.cloudCover,
                windGust: forecast.currently.windGust,
                dewPoint: forecast.currently.dewPoint,
                pressure: forecast.currently.pressure,
                visibility: forecast.currently.visibility,
                ozone: forecast.currently.ozone,
            });
        },
        center(center) {
            window.nanobar.go(75);
            axios
                .post('/darksky', center)
                .then(res => (this.forecast = res.data))
                .catch(error => console.error(error));
        },
    },
    methods: {
        icon,
    },
};
</script>
<style lang="scss">
$background-color: #23232d;
$color: #3e7bd4;
.detail {
    overflow-y: scroll;
    padding: 20px;
    > .row.s1 {
        background-color: $background-color;
        box-shadow: 0 0 25px $background-color;
        border-radius: 3px;
        color: #3e7bd4;
        margin-bottom: 20px;
        $size: 80px;
        text-shadow: 0 0 25px;
        > .icon.weather {
            padding: 20px;
            height: $size;
            width: $size;
            font-size: $size;
        }
        > .line {
            background: rgba(255, 255, 255, 0.1);
        }
        > .temperature {
            padding: 30px 0;
            font-family: 'Roboto';
            font-size: 70px;
            font-weight: 100;
            line-height: 60px;
        }
        > .celsius {
            padding-top: 30px;
            line-height: 30px;
            font-family: 'Roboto';
            font-weight: 300;
            font-size: 25px;
        }
        > .apparentTemperature {
            padding: 30px 20px;
            justify-content: space-between;
            > div:nth-child(1) {
                line-height: 30px;
                height: 30px;
                font-size: 18px;
                font-family: Roboto;
                font-weight: 300;
            }
            > div:nth-child(2) {
                line-height: 30px;
                height: 30px;
                font-size: 30px;
                font-family: Roboto;
                font-weight: 300;
                overflow: visible;
                > .celsius {
                    font-size: 18px;
                    line-height: 24px;
                }
            }
        }
    }
    > .row.s2 {
        $circle-size: 100px;
        overflow: visible;
        justify-content: space-between;
        > .col {
            overflow: visible;
            > .circle {
                padding: 5px;
                box-shadow: 0 0 25px $background-color;
                border-radius: $circle-size/2 + 10px;
                background-color: $background-color;
            }
            > .text {
                width: $circle-size;
                font-family: Roboto;
                font-weight: 400;
                color: $color;
                padding: 10px 5px;
                text-align: center;
            }
        }
    }
    > .temperatureChart {
        margin-top: 10px;
        background-color: $background-color;
        box-shadow: 0 0 25px $background-color;
        border-radius: 3px;
        background-color: $background-color;
        padding: 10px;
        > .text {
            color: $color;
            padding: 10px 5px;
        }
    }
    > .row.u2 {
        margin: 10px -10px -10px;
        overflow: visible;
        > div {
            margin: 10px;
            padding: 0 15px;
            height: 50px;
            line-height: 50px;
            border-radius: 5px;
            color: $color;
            background-color: $background-color;
            box-shadow: 0 0 25px $background-color;
        }
    }
}
</style>