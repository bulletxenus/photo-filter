import Observer from '../Observer'
import * as constants from '../constants'

export default class DownloadObserver  {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    download() {
        const img = this.observers[0].canvas.toDataURL();
        const link = document.createElement('a');
        link.download = 'image.png';
        link.href = img;
        document.body.append(link);
        link.click();
        document.body.removeChild(link);
    }
}
