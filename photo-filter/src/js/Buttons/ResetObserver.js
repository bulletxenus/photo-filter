import Observer from '../Observer'
import * as constants from '../constants'

export default class ResetObserver  {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    resetFilters() {
        this.filters.forEach((el, idx) => {
            el.start = this.defaultFilter[idx].start
        });
    }

    setRangers(data) {
        this.resetFilters();
        this.observers.forEach((el, idx) => {
            if (idx === 0) el.renderPicture(this.filters);
            else el.inputRange.value = constants.FILTERS[idx-1].start;
        });
    }
}
