import createElement from './ElementCreation.js';
import MarkerService from './MarkerService';
//FIXME: element.animate()?
export class Modal {
    modal;
    container;
    background;
    constructor(type) {
        this.container = document.createElement('div');
        this.container.classList.add(type + '-modal-container');

        this.background = createElement('div', '', 'background');
        this.background.addEventListener('click', this.hideHandler.bind(this));
        this.container.addEventListener('keydown', function (e) {
            if (e.key == "Escape") this.hideHandler();
        }.bind(this));

        this.container.appendChild(this.background);

        this.modal = document.createElement('div');
        this.modal.classList.add(type + '-modal', 'modal');
        this.container.appendChild(this.modal);
    }
    addContent(content) {
        this.modal.appendChild(content);
    }
    append() {
        document.body.appendChild(this.container);
    }
    show() {
        this.animate(this.modal, 'zoom-in');
        this.animate(this.background, 'fade-in');
    }
    hideHandler() {
        this.hide();
    }
    hide() {
        this.animate(this.modal, 'zoom-out');
        this.animate(this.background, 'fade-out');
    }
    animate(ele, anim) {
        ele.classList.remove('zoom-in');
        ele.classList.remove('fade-in');
        ele.classList.remove('zoom-out');
        ele.classList.remove('fade-out');

        ele.classList.add(anim);
    }
    DOMremove() {
        this.container.parentNode.removeChild(this.container);
    }
    hideRemove() {
        this.hide();
        //set timeout for anim to finish
        setTimeout(function () {
            this.DOMremove();
        }.bind(this), 100);
    }

}

export class FormModal extends Modal {
    form
    constructor() {
        super('form');

        let frag = document.createDocumentFragment();

        this.form = document.createElement('form');
        frag.append(this.form);

        const message = createElement('div', 'Submit climate change data', 'title');
        this.form.appendChild(message);

        createInput('Name', this.form);
        createInput('Longitude', this.form);
        createInput('Latitude', this.form);
        createInput('Description of Location', this.form);

        const options = ['Aditya', 'alex', 'anish', 'sweden'];
        createOptions(options, this.form);

        const buttonContainer = createElement('div', '', 'modal-button-container');
        this.form.appendChild(buttonContainer);

        this.submitButton = createElement('input', 'Submit', 'form-submit');
        this.submitButton.type = 'submit';
        this.form.appendChild(this.submitButton);

        super.addContent(frag);
        super.append();

        function createOptions(options, form) {
            let typeInput = createElement('select', '', 'form-type');
            typeInput.name = 'type';

            options.forEach(option => {
                let ele = createElement('option', option, 'form-type');
                ele.value = option;
                typeInput.appendChild(ele);
            });

            form.appendChild(typeInput);
        }

        function createInput(placeholder, form) {
            let input = createElement('Input', '', 'form');
            input.type = 'text';
            input.name = placeholder;
            input.placeholder = placeholder;
            form.appendChild(input);
        }
    }
    show() {
        super.show();
        this.form.addEventListener('submit', this.submit.bind(this));
    }
    submit(event) {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(this.form).entries());
        MarkerService.insertMarker(data);
        this.hideRemove();
    }
}


export class ConfirmModal extends Modal {
    yesButton
    noButton
    constructor(m, yes, no) {
        super('confirm', null);
        let frag = document.createDocumentFragment();

        let message = createElement('div', m, 'message');
        frag.appendChild(message);

        let buttonContainer = createElement('div', '', 'modal-button-container');
        frag.appendChild(buttonContainer);

        this.yesButton = createElement('button', yes, 'yes');
        buttonContainer.appendChild(this.yesButton);

        this.noButton = createElement('button', no, 'no');
        buttonContainer.appendChild(this.noButton);

        super.addContent(frag);
        super.append();
    }
    show() {
        super.show();
        return new Promise((resolve) => {
            this.yesButton.addEventListener('click', this.yes.bind(this, resolve));
            this.noButton.addEventListener('click', this.no.bind(this, resolve));
        });
    }
    yes(resolve) {
        resolve(true);
        this.hideRemove();
    }
    no(resolve) {
        resolve(false);
        this.hideRemove();
    }
}