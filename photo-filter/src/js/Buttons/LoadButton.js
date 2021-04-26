import Button from './Button';
import createHTML from '../createHtml'

export default class LoadButton extends Button {
    constructor(parent) {
        super();
        this.createButton(parent)
        this.button.innerText = 'Load picture';
    }

    createButton(parent) {
        this.button = createHTML('input', 'load-button', parent, '', 'type, file', 'id, loaded-picture');
        this.button.setAttribute('accept', '.jpg, .png');

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

