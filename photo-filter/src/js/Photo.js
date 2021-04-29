import createHtml from './createHtml';


export default class Photo {
    constructor(parent, defaultFilters) {
        this.filterString = defaultFilters;
        this. parent = parent;
        this.createCanvas(parent, defaultFilters);
        this.isLoad = true;
        this.prevPhoto = '';

    }

    createCanvas(parent, defaultFilters) {
        this.canvas = createHtml('canvas', 'photo-canvas', parent);
        this.photo = new Image();
        this.photo.src = './assets/space.jpg'
        this.photo.crossOrigin = 'anonymous';

        this.photo.onload = () => {
            this.canvas.width = `${this.photo.width}`;
            this.canvas.height = `${this.photo.height}`;
            this.ctx = this.canvas.getContext('2d');
            this.ctx.filter = defaultFilters;
            this.ctx.drawImage(this.photo, 0, 0);
        }
    }

    renderPicture(string) {
        setTimeout(() => {
            if (this.photo.width < this.photo.height) {
                this.canvas.style.width = 'auto';
                this.canvas.style.height = '100%'
            } else {
                this.canvas.style.width = '100%';
                this.canvas.style.height = 'auto';
            }
            this.canvas.width = this.photo.width;
            this.canvas.height = this.photo.height;
            this.ctx.filter = string;
            this.ctx.drawImage(this.photo, 0, 0);
        });
    }

    getPhoto() {
        this.basicUrl = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';

        const nowDate = new Date().getHours();
        const random = this.getRandomNum();

        this.randomNum = random < 10 ? `0${random}` : random

        if (nowDate >= 0 && nowDate < 5) this.basicUrl += `night/${this.randomNum}.jpg`;
        if (nowDate >= 6 && nowDate < 12) this.basicUrl += `morning/${this.randomNum}.jpg`;
        if (nowDate >= 12 && nowDate < 18) this.basicUrl += `day/${this.randomNum}.jpg`;
        if (nowDate >= 18 && nowDate <= 23) this.basicUrl += `evening/${this.randomNum}.jpg`;
        return this.basicUrl;
    }

    getRandomNum() {
        return Math.floor(Math.random() * 20 + 1)
    }
}
