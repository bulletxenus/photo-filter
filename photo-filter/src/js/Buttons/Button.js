import createHtml from '../createHtml';
import '../../styles/Button.sass'

export default class Button {
    constructor() {
    }

    createButton(parent, name) {
        this.button = createHtml('button', 'button', parent);
    }
}
