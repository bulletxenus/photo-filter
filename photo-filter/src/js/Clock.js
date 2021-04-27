import createHTML from './createHtml'

export default class Clock {
    constructor(parent) {
        this.addClock(parent)
    }

    addClock(parent) {
        const clockContainer = createHTML('span', 'header__clock', parent)

        setInterval(() => {
            const date = new Date;
            const hour = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            clockContainer.innerText = `Current time: ${this.renderTime(hour, minutes, seconds)}`
        }, 1000)
    }

    renderTime(hour, minutes, seconds) {
        let result = '';
        result = hour < 10 ? `0${hour}` : hour;
        result = minutes < 10 ? `${result}:0${minutes}` : `${result}:${minutes}`;
        result = seconds < 10 ? `${result}:0${seconds}` : `${result}:${seconds}`;
        return result;

    }

}
