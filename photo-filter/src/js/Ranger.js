import createHtml from './createHtml';


export default class Ranger {
    constructor(parent, id, name, ed, currentValue, max) {
        this.createRanger(parent, id, name, currentValue, max, ed);
        this.value = 0;
        this.ed = ed;
    }

    createRanger(parent, id, name, currentValue, max, ed) {
        const container = createHtml('form', 'filter-container', parent);
        const label = createHtml('label', 'range-name', container, '', `for, filter_${id + 1}`);
        this.inputRange = createHtml('input', 'filter__ragne', container, '', `id, filter_${id + 1}`, 'type, range',
            'min, 0', `max, ${max}`, 'step, 0.1', `value, ${currentValue}`);
        this.output = createHtml('output', 'range-output', container, '', `for, filter_${id + 1}`);
        this.numeric = ed === 'deg' ? `&#176;` : ed
        this.output.innerHTML = `${currentValue}${this.numeric}`;
        label.innerText = `${name.slice(0,1).toUpperCase()}${name.slice(1)}:`;
        this.inputRange.addEventListener('input', changeRange.bind(this));

        function changeRange(e) {
            this.value = Math.round(e.target.value);
            this.output.innerHTML = `${this.value}${this.numeric}`;
            this.observer.changeFilters(name, this.value, this.ed)
        }
    }
}
