(function () {
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(52.103306,20.813643),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(document.querySelector("#map"), mapOptions);

    }

    google.maps.event.addDomListener(window, 'load', init);
})();