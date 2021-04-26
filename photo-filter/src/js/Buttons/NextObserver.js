import Observer from '../Observer'
import * as constants from '../constants'
import LoadObserver from './LoadObserver'

export default class NextObserver extends LoadObserver {
    constructor() {
        super();
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    setCanvasPicture() {
        let photoLink = this.observers[0].photo.src;
        console.log(this.observers[0].isLoad);

        if (this.observers[0].isLoad) {
            this.observers[0].isLoad = false;
            console.log(this.observers[0].prevPhoto)
            console.log(this.observers[0].photo.src)
            photoLink = this.observers[0].prevPhoto || this.observers[0].getPhoto()
        }

        const newPictureNum = this.getNextPictureLink(photoLink.match(/\d{2,}(.jpg)$/gi, `${newPictureNum}.jpg`)[0].slice(0,2));
        photoLink = photoLink.replace(/\d{2,}(.jpg)$/, `${newPictureNum}.jpg`)
        this.observers[0].photo.src = photoLink;
        this.observers[0].photo.onload = () => {
            this.observers[0].renderPicture(this.createRenderString());
        }
    }

    getNextPictureLink(num) {
        console.log(`!${num}`)
        num = +num
        num += 1;
        console.log(num)
        if (num < 10) {
            return `0${num}`;
        }
        if (num === 20) {
            return `01`
        }
        return `${num}`
    }

    createRenderString() {
        return this.filters.map(el => {
            return `${el.name}(${el.start}${el.ed})`
        }).join(' ')
    }

}
