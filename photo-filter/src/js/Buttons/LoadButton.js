import Button from './Button';
import createHTML from '../createHtml'

export default class LoadButton extends Button {
    constructor(parent) {
        super();
        this.createButton(parent)
        this.button.innerText = 'Load picture';
    }

    createButton(parent) {
        const buttonContainer = createHTML('div', 'button', parent);
        this.button = createHTML('input', 'button', buttonContainer, '', 'type, file', 'id, loaded-picture');
        const label = createHTML('label', 'load-button-label', buttonContainer, '', 'for, loaded-picture')
        this.button.classList.add('load-button');
        this.button.setAttribute('accept', '.jpg, .png');

        label.innerText = 'Load picture'

        this.button.onchange = (e) => {
            const img = new Image();
            img.file = this.button.file;
            const reader = new FileReader();
            reader.readAsDataURL(this.button.files[0]);
            reader.onload = () => {
                this.button.type = '';
                this.button.type = 'file'
                this.observer.image = reader.result;
                this.observer.setCanvasPicture();
            }
        }
    }
}

