import Styles from '../css/main.css'

function initMap() {
    //new map 
    const map = new google.maps.Map(document.getElementById("map"), {
        //map options
        center: { lat: 0, lng: 0 },
        zoom: 3,
    });

    //Array of markers
    var markers = [
        {
            
        }
        //example marker
        //In this array we will put transfer the file link/json/csv data and make sure it is in an array form
        //add new marker to array {}
        /* 
        {
        coords:
        icon image:
        content:
        
        
        }
        */
    ]


    //loop through markers
    for (var i = 0; i < markers.length; i++) {
        //add marker
        addMarker(markers[i]);
    }

    //add Marker Function 
    function addMarker(props) {
        const marker = new google.maps.Marker({
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
            const infowindow = new google.maps.InfoWindow({
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

window.initMap = initMap;