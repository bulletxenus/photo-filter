import * as constants from './constants'
export default function createClone() {
    return constants.FILTERS.map(el => {
        return {
            name: el.name,
            start: el.start,
            ed: el.ed
        }
    });
}
