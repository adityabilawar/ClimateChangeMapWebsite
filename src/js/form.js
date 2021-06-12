import { FormModal } from './Modals.js';

let form;

export default form = ((update) => {
    function init() {
        const addButton = document.getElementById('add');
        addButton.addEventListener('click', async () => {
            const modal = new FormModal('Form', 'button1', 'button2');
            await modal.show();
            update();
        });
    }
    
    return {
        init: init
    }
})();