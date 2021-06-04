import { Loader } from "@googlemaps/js-api-loader";


export class Map {
    map;
    constructor(center, zoom) {
        const loader = new Loader({
            apiKey: "AIzaSyBdZ8GXm2rC-co5WIseA-9sQRtCZATT84I",
            version: "weekly",
        });

        console.log('hi');

        loader.load().then(() => {
            map = new google.maps.Map(document.getElementById("map"), {
                center,
                zoom,
            });
        });
    }
}