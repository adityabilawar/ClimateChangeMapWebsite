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
                //check if this works
                center: center,
                zoom: zoom,
            });
        });

        this.refreshMarkers();
    }

    async refreshMarkers() {
        //Array of markers
        const markers = await MarkerService.getMarkers();

        // addMarker(markers);
        console.log(markers);
        //loop through markers
        for (var i = 0; i < markers.length; i++) {
            //add marker
            addMarker.bind(this, markers[i])();
        }

        //add Marker Function 
        function addMarker(props) {
            const marker = new google.maps.Marker({
                position: props.coords,
                map: this.map,
                icon: props.iconImage
            });



            //check content(this has the location description)
            //use this in the future( to add the name of the location along with the creator name and the location image)
            //if (props.content) {
            // const infowindow = new google.maps.InfoWindow({
            // content: props.content
            //  }); 
            if (props.desc) {
                const infowindow = new google.maps.InfoWindow({
                    content: props.desc
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