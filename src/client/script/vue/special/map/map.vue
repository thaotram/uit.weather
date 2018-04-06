<template>
    <div class="map"/>
</template>

<script>
/* global google */
import $script from 'scriptjs';
import dark from './dark';

export default {
    mounted() {
        const key = 'AIzaSyD_BxLa0QZlBH4LuwMspJHmmZPzNIwagik';
        const url = `https://maps.googleapis.com/maps/api/js?key=${key}`;

        $script(url, () => {
            new google.maps.Map(this.$el, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
                styles: dark,
            });
        });
    },
};
</script>
<style lang="scss" scoped>
.map,
.map * {
    transition: all 0s;
}
</style>
