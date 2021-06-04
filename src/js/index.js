import '../css/main.css';
import Map from './Map';
import form from './form';

const map = new Map({ lat: 40.305778369969865, lng: -74.61991279202903 }, 14);

form.init();