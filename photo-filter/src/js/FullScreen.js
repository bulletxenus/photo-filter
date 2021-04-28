import createHTML from './createHtml'
import fsopen from '../assets/fsopen.png'
import fsclose from '../assets/fsclose.png'

export default class FullScreen {
    constructor(parent) {
        this.addFullScreenButton(parent);
        this.openClose();
    }

    addFullScreenButton(parent) {
        this.button = createHTML('img', 'header__fullscreen-button', parent);
        this.button.classList.add('open');
        this.button.src = fsopen;
    }

    openClose() {
        this.button.addEventListener('click', () => {
            if (this.button.classList.contains('close')) {
                document.exitFullscreen();
            } else if (this.button.classList.contains('open')) {
                document.documentElement.requestFullscreen()
            }
            });

        document.onfullscreenchange = () => {
            if (this.button.classList.contains('close')) {
                this.button.classList.remove('close');
                this.button.classList.add('open')
                this.button.src = fsopen;
            } else if (this.button.classList.contains('open')) {
                this.button.classList.remove('open');
                this.button.classList.add('close');
                this.button.src = fsclose;

            }
        }
    }

}
