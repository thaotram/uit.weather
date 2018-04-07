/* global google */
import dark from './dark';

export default function(self) {
    const geocoder = new google.maps.Geocoder();

    const map = new google.maps.Map(self.$el.querySelector('.map'), {
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        center: self.center,
        zoom: 8,
        styles: dark,
    });
    self.map = map;

    const searchBox = new google.maps.places.SearchBox(
        self.$el.querySelector('.search-box'),
    );

    searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();
        if (places.length == 0) return;

        const bounds = new google.maps.LatLngBounds();
        places.forEach(place => {
            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });

    map.addListener('idle', () => {
        self.center = {
            lat: map.center.lat(),
            lng: map.center.lng(),
        };
        geocoder.geocode(
            { location: map.center, region: 'vi' },
            (results, status) => {
                if (status != google.maps.GeocoderStatus.OK) return;
                self.address = results[0].formatted_address.replace(
                    'Unnamed Road, ',
                    '',
                );
            },
        );
    });
}
