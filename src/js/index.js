import '../css/main.css';
import Map from './Map';
import form from './form';

const map = new Map({ lat: 0, lng: 0 }, 3);
//check if this sets max zoom
map.setOptions({ maxZoom: 15 });
form.init(update);

function update() {
    map.refreshMarkers();
}