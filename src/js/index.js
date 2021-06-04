import '../css/main.css';
import { ConfirmModal } from './Modals.js';
import Map from './Map';

const map = new Map({ lat: 41.90476224706472, lng: 12.49822074385094 }, 14);

const addButton = document.getElementById('add');
addButton.addEventListener('click', () => {
    const modal = new ConfirmModal('This button adds a modal', 'Got it!', 'I don\'t like this');
    modal.show();
})
