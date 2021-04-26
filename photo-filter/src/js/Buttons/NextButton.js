import Button from './Button';

export default class NextButton extends Button {
    constructor(parent) {
        super();
        this.createButton(parent);
        this.button.innerText = "Next picture";
        this.lisener();
    }

    lisener() {
        this.button.addEventListener('click', (e) => {
            this.observer.setCanvasPicture();
        })
    }
}
