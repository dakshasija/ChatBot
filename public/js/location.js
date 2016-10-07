(function() {
  var geolocation= require('geolocation');
  //  navigator.geolocation == "Google Chrome";
  var navigator = require('navigator');
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
      }
function showPosition(position) {
    console.log( "Latitude: " + position.coords.latitude );
     console.log("Longitude " + position.coords.longitude);
}
}());
