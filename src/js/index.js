import '../css/main.css';
import '../css/map.css';
import Map from './Map';
import form from './form';

const map = new Map({ lat: 0, lng: 0 }, 3);

form.init(update);

function update() {
    map.refreshMarkers();
}