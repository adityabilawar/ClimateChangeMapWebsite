import '../css/main.css';
import { ConfirmModal } from './Modals.js';
import { Loader } from "@googlemaps/js-api-loader";

let map;
const center = { lat: 41.90476224706472, lng: 12.49822074385094 };
const zoom = 14;
const loader = new Loader({
    apiKey: "AIzaSyBdZ8GXm2rC-co5WIseA-9sQRtCZATT84I",
    version: "weekly",
});


loader.load().then(() => {
    map = new google.maps.Map(document.getElementById("map"), {
        center,
        zoom,
    });
});

const addButton = document.getElementById('add');
addButton.addEventListener('click', () => {
    const modal = new ConfirmModal('This button adds a modal', 'Got it!', '🧠');
    modal.show();
})
