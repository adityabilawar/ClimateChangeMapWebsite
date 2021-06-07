import { Loader } from "@googlemaps/js-api-loader";
import MarkerService from "./MarkerService";


export default class Map {
    map;
    constructor(center, zoom) {
        const loader = new Loader({
            apiKey: "AIzaSyBdZ8GXm2rC-co5WIseA-9sQRtCZATT84I",
            version: "weekly",
        });

        loader.load().then(() => {
            this.map = new google.maps.Map(document.getElementById("map"), {
                center,
                zoom,
            });
        });

       
          //Array of markers
    var markers = [
        {
            MarkerService,getMarkers()
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
}