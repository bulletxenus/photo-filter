import Button from './Button';

export default class ResetButton extends Button {
    constructor(parent) {
        super();
        this.createButton(parent)
        this.button.innerText = 'Save picture';
        this.listener();
    }

    listener() {
        this.button.addEventListener('click', () => {
            this.observer.download();
        });
    }
}
