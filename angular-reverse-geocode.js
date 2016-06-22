/**
 * AngularJS reverse geocoding directive
 * @author Jason Watmore <jason@pointblankdevelopment.com.au> (http://jasonwatmore.com)
 * @author Larry Stone <larry@symbolshift.com>
 * @version 2.0.0
 */
(function () {
    angular.module('angularReverseGeocode', []).component('reverseGeocode', function () {
        return {
            bindings: {
              lat: '@',
              lng: '@',
              geocodeResultsIndex: '@?',
              locationNotFoundText: '@?',
              geocodeFailureText: '@?'
            },
            template: '<span class="reverse-geocoded-address"></span>',
            controller: function ($element) {
                var vm = this;
                var defaultResultsIndex = 0;
                var defaultLocationNotFoundText = 'Location not found';
                var defaultGeocodeFailureText = 'Geocoder failed due to: ';
                var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(vm.lat, vm.lng);

                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[defaultResultsIndex]) {
                            $element.text(results[vm.geocodeResultsIndex || defaultResultsIndex].formatted_address);
                        } else {
                            $element.text(vm.locationNotFoundText || defaultLocationNotFoundText);
                        }
                    } else {
                        $element.text(vm.geocodeFailureText || (defaultGeocodeFailureText + status));
                    }
                });
            }
        }
    });
})();