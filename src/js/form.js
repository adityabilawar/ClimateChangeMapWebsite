import { ConfirmModal } from './Modals.js';

let form;

export default form = (() => {
    function init() {
        const addButton = document.getElementById('add');
        addButton.addEventListener('click', () => {
            const modal = new ConfirmModal('This button adds a modal', 'Got it!', 'go away--i don\'t like this');
            modal.show();
        });
    }

    return {
        init: init
    }
})();