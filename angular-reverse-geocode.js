/**
 * AngularJS reverse geocoding directive
 * @author Jason Watmore <jason@pointblankdevelopment.com.au> (http://jasonwatmore.com)
 * @author Larry Stone <larry@symbolshift.com>
 * @version 2.0.0
 */
(function () {
    angular.module('angularReverseGeocode', []).component('reverseGeocode', {
        bindings: {
            lat: '@',
            lng: '@',
            geocodeResultsIndex: '@?',
            locationNotFoundText: '@?',
            geocodeFailureText: '@?'
        },
        controller: function ($scope) {
            var vm = this;
            var defaultResultsIndex = 0;
            var defaultLocationNotFoundText = 'Location not found';
            var defaultGeocodeFailureText = 'Geocoder failed due to: ';
            var geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(vm.lat, vm.lng);
            var resultsIndex = vm.geocodeResultsIndex || defaultResultsIndex;

            geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status === 'OK') {
                    vm.address = results[resultsIndex].formatted_address;
                } else if (status === 'ZERO_RESULTS') {
                    vm.address = vm.locationNotFoundText || defaultLocationNotFoundText
                } else {
                    vm.address = vm.geocodeFailureText || (defaultGeocodeFailureText + status);
                }
                $scope.$apply();
            });
        },
        template: '<div class="reverse-geocoded-address">{{$ctrl.address}}</div>'
    });

})();