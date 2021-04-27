import '../styles/style.sass';
import '../styles/header.sass';
import createHtml from './createHtml';
import * as constants from './constants';
import Ranger from './Ranger'
import ResetButton from './Buttons/ResetButton'
import NextButton from './Buttons/NextButton'
import LoadButton from './Buttons/LoadButton'
import SaveButton from './Buttons/SaveButton'
import Photo from './Photo'
import Observer from './FiltersObserver'
import createClone from './createClone'
import ResetObserver from './Buttons/ResetObserver'
import LoadObserver from './Buttons/LoadObserver'
import DownloadObserver from './Buttons/DownloadObserver'
import NextObserver from './Buttons/NextObserver'
import rsLogo from '../assets/rs_school.png';
import Clock from './Clock'
import FullScreen from './FullScreen'

class PhotoFilterApp {
    constructor() {
        this.startFilterString = '';
        this.createBasicStructure();
        this.createHeader();
        this.createMain();
        this.createFooter();
    }

    createBasicStructure() {
        this.header = createHtml('header', 'header', document.body);
        this.main = createHtml('main', 'main', document.body);
        this.footer = createHtml('footer', 'footer', document.body);
    }

    createHeader() {
        const headerTitle = createHtml('h1', 'header__title', this.header);
        headerTitle.innerText = 'Photo-filter';
        const headerClock = new Clock(this.header)
        const fs = new FullScreen(this.header)
    }

    createMain() {
        const filterBlock = createHtml('div', 'main-filter-block', this.main);
        const pictureBlock = createHtml('div', 'main-picture-block', this.main);
        this.createFiltersBlock(filterBlock)
        this.createPhotoBlock(pictureBlock);
    }

    createFooter() {
        const gitHubLink = createHtml('a', 'footer__github-link', this.footer, 'https://github.com/bulletxenus');
        const gitHubImage = createHtml('img', 'footer__gitHub-image', gitHubLink, './assets/gitHub.png');
        const schoolLogo = createHtml('a', 'footer__school-logo', this.footer, 'https://rs.school/index.html');
        const schoolLogoImage = createHtml('img', 'footer__logo-image', schoolLogo, rsLogo);
    }

    createFiltersBlock(parent) {
        this.filtersClone = createClone();
        this.filters = constants.FILTERS.map((el, idx) => {
            const ranger = new Ranger(parent, idx, el.name, el.ed, el.start, el.max);
            this.startFilterString += `${el.name}(${el.start}${el.ed}) `;
            ranger.observer = new Observer;
            ranger.observer.filterString = this.filtersClone
            return ranger
            });
    }

    createPhotoBlock(parent) {
        const functionBlock = createHtml('div', 'function-block', parent);

        const resetButton = new ResetButton(functionBlock);
        resetButton.obs = new ResetObserver;
        resetButton.obs.filters = this.filtersClone;
        resetButton.obs.defaultFilter = constants.FILTERS;

        const nextButton = new NextButton(functionBlock);
        nextButton.observer = new NextObserver();
        nextButton.observer.filters = this.filtersClone;

        const loadButton = new LoadButton(functionBlock);
        loadButton.observer = new LoadObserver();
        loadButton.observer.filters = this.filtersClone;

        const saveButton = new SaveButton(functionBlock);
        saveButton.observer = new DownloadObserver();

        const photoContainer = createHtml('div', 'photo-container', parent);
        const photo = new Photo(photoContainer, this.startFilterString.trim());
        resetButton.obs.subscribe(photo);
        loadButton.observer.subscribe(photo);
        saveButton.observer.subscribe(photo);
        nextButton.observer.subscribe(photo);

        this.filters.forEach(el => {
            resetButton.obs.subscribe(el);
            el.observer.subscribe(photo)
        });
    }
}

const filter = new PhotoFilterApp();
