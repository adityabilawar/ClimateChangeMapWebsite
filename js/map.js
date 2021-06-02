function initMap() {
    //new map 
    map = new google.maps.Map(document.getElementById("map"), {
        //map options
        center: { lat: 0, lng: 0 },
        zoom: 3,
    });

    //Array of markers
    var markers = [

        //example marker
        //In this array we will put transfer the file link/json/csv data and make sure it is in an array form
        {
            coords: { lat: 42, lng: -70.94 },
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
                '<div id="bodyContent">' +
                "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
                "sandstone rock formation in the southern part of the " +
                "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
                "south west of the nearest large town, Alice Springs; 450&#160;km " +
                "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
                "features of the Uluru - Kata Tjuta National Park. Uluru is " +
                "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
                "Aboriginal people of the area. It has many springs, waterholes, " +
                "rock caves and ancient paintings. Uluru is listed as a World " +
                "Heritage Site.</p>" +
                '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
                "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
                '<img src="https://static.dw.com/image/41191418_101.jpg" alt="Lamp" width="100" height="100">' +
                "(last visited June 22, 2009).</p>" +
                "</div>" +
                "</div>"
        }
        //add new marker to array {}
        /* 
        {
        coords:
        icon image:
        content:
        
        
        }
        */

    ];


    //loop through markers
    for (var i = 0; i < markers.length; i++) {
        //add marker
        addMarker(markers[i]);
    }

    //add Marker Function 
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon: props.iconImage
        });

        //check for custom icon
        if (props.iconImage) {
            //set icon image
            marker.setIcon(props.iconImage);
        }

        //check content(this has the location description)
        if (props.content) {
            var infowindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function () {
                //fix this, this zooms and centers onto location clicked
                //map.setZoom(8);
                //map.setCenter(marker.getPosition() as google.maps.LatLng);
                infowindow.open(map, marker);
            });
        }
    }

}