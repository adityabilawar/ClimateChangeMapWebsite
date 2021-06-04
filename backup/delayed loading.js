import '../css/main.css';
import { ConfirmModal } from './Modals.js';
import { Loader } from "@googlemaps/js-api-loader";

let map;
const center = { lat: 41.90476224706472, lng: 12.49822074385094 };
const zoom = 14;
const url = "https://maps.googleapis.com/maps/api/staticmap";
const loader = new Loader({
    apiKey: "AIzaSyBdZ8GXm2rC-co5WIseA-9sQRtCZATT84I",
    version: "weekly",
});

document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("wrapper");
    // wrapper.style.backgroundImage = `url(${url}?center=${center.lat},${center.lng}&zoom=${zoom}&scale=2&size=${wrapper.clientWidth}x${wrapper.clientHeight}&key=AIzaSyBdZ8GXm2rC-co5WIseA-9sQRtCZATT84I)`;
    wrapper.addEventListener("click", () => {
        wrapper.remove();
        loader.load().then(() => {
            map = new google.maps.Map(document.getElementById("map"), {
                center,
                zoom,
            });
        });
    });
});

const addButton = document.getElementById('add');
addButton.addEventListener('click', () => {
    const modal = new ConfirmModal('test');
    modal.show();
})
