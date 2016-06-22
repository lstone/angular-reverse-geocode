angular-reverse-geocode
=======================

AngularJS reverse geocoding directive using AngularJS 1.5 component() syntax.

###Demo

To see a demo and further details go to http://jasonwatmore.com/post/2014/02/15/AngularJS-Reverse-Geocoding-Directive.aspx

###Installation
Install using bower: `bower install angular-reverse-geocode`

Alternatively download the code and include the angular-reverse-geocode.js file in your page.

Add the 'angularReverseGeocode' directive as a dependency of your AngularJS application:

```javascript
angular.module('myApp', ['angularReverseGeocode']);
```

###Usage

To use add a reverse-geocode tag to your page with attributes containing lat and long coordinates, e.g:

####Optional attributes

`geocode-results-index` - Google returns many levels of results. Index 0 is generally the most explicit. Default is 0.
https://developers.google.com/maps/documentation/javascript/geocoding#reverse-geocoding-by-location

`location-not-found-text` - Customize the message displayed if no location is found. Default is "Location not found".

`geocode-failure-text` - Customize the message displayed when a geocoding error happens. Default is "Geocoder failed due to: " followed by the error message.


```html
<reverse-geocode lat="40.730885" lng="-73.997383" geocode-results-index="0"></reverse-geocode>
```