import { FormModal } from './Modals.js';

let form;

export default form = (() => {
    function init() {
        const addButton = document.getElementById('add');
        addButton.addEventListener('click', () => {
            const modal = new FormModal('Form', 'button1', 'button2');
            modal.show();
        });
    }
    
    return {
        init: init
    }
})();