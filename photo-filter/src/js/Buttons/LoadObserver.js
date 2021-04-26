import Observer from '../Observer'
import * as constants from '../constants'

export default class LoadObserver  {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    setCanvasPicture() {
       this.observers.forEach(el => {
           el.prevPhoto = el.photo.src;
           el.photo.src = this.image;
           el.photo.onload = () => {
               el.canvas.width = el.photo.width;
               el.canvas.height = el.photo.height;
               const str = this.createRenderString();
               el.renderPicture(str, 'resize');
               el.isLoad = true;
           }

       });
    }

    createRenderString() {
        return this.filters.map(el => {
            return `${el.name}(${el.start}${el.ed})`
        }).join(' ');
    }
}
