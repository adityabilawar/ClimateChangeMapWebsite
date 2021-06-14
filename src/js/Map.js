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
                center,
                zoom,
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
            console.log(this);
            const marker = new google.maps.Marker({
               
                position: props.coords,
                map: this.map,
               //icon: props.iconImage
            });

            if(props.iconImage){
                if(eventType.equals("Wildfire")){
                marker.setIcon("http://maps.google.com/mapfiles/ms/icons/firedept.png");}
               else if(eventType.equals("Sinking Island")){
                marker.setIcon("http://maps.google.com/mapfiles/ms/icons/marina.png");}
               else if(eventType.equals("Melting Glacier")){
                marker.setIcon("http://maps.google.com/mapfiles/ms/icons/blue-dot.png");}
                else if(eventType.equals("Drought")){
                marker.setIcon("http://maps.google.com/mapfiles/ms/icons/orange-dot.png");}
               else if(eventType.equals("Flood")){
                marker.setIcon("http://maps.google.com/mapfiles/ms/icons/flag.png");}
              else  if(eventType.equals("Hurricane")){
                marker.setIcon("http://maps.google.com/mapfiles/ms/icons/pink-dot.png");}
               else if(eventType.equals("Earthquake")){
                marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");}
                else if(eventType.equals("Tsunami")){
                marker.setIcon("http://maps.google.com/mapfiles/ms/icons/waterfalls.png");}

            }
           

          //  check content(this has the location description)
           // use this in the future( to add the name of the location along with the creator name and the location image)
            if (props.content) {
               const infowindow = new google.maps.InfoWindow({
                 content: props.content
               }); 
        
               
               marker.addListener('click', function () {
                   // fix this, this zooms and centers onto location clicked
                  //  map.setZoom(8);
                  //  map.setCenter(marker.getPosition() as google.maps.LatLng);
                    infowindow.open(map, marker);
                });
            }
        }
    }
}