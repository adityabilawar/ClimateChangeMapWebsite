import '../css/main.css';
import '../css/map.css';
import Map from './Map';
import form from './form';
import contactFormData from 'c:/Users/Aditya/Documents/ClimateChangeMapWebsite/src/js/contactFormData';

const map = new Map({ lat: 0, lng: 0 }, 2.7);


form.init(update);

function update() {
    map.refreshMarkers();
}

const downloadButton = document.getElementById('download');
downloadButton.addEventListener('click', () => {
    
});