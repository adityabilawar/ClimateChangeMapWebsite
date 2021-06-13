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

        this.refreshMarkers();
    }

    async refreshMarkers() {
        //Array of markers
        const markers = await MarkerService.getMarkers();
        //run this if for loop not working
       // addMarker(markers);
        console.log(markers);
        //loop through markers
       for (var i = 0; i < markers.length; i++) {
            //add marker
            addMarker.bind(this, markers[i])();
        }
        //checking if this works(have to parse coordinates to string values)
        
        //add Marker Function 
        function addMarker(props) {
            console.log(this);
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