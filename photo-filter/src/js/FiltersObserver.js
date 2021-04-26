import * as constants from './constants';

export default class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter((subscriber) => subscriber !== fn);
    }

    changeFilters(name, value, ed) {
        let string = '';
        this.filterString.forEach(el => {
            if (el.name === name) el.start = value;
            string += `${el.name}(${el.start}${el.ed}) `
        });
      this.broadcast(string);
    }

    broadcast(string) {
        this.observers.forEach((subscriber) => {
            subscriber.renderPicture(string)
        });
    }
}
