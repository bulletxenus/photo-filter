import Button from './Button';
import * as constants from '../constants'

export default class ResetButton extends Button {
    constructor(parent) {
        super();
        this.createButton(parent)
        this.button.innerText = 'Reset';
        this.resetFilter(constants.FILTERS)
    }

    resetFilter(filter) {
        this.button.addEventListener('click', () => {
            this.obs.setRangers()
        });
    }
}
