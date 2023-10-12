import {
    BROWSER_CHROME,
    BROWSER_FIREFOX,
    BROWSER_SAFARI,
    BROWSER_OPERA,
    BROWSER_EDGE,
    ALERT_BROWSER_EDGE,
    ALERT_OTHER_BROWSERS,
    ALERT_UNKNOWN_BROWSER
} from './constants.js';

const checkBrowser = () => {
    let browser = prompt('Enter your browser', '');
    if(browser === BROWSER_EDGE) return ALERT_BROWSER_EDGE;
    if(browser === BROWSER_CHROME || browser === BROWSER_FIREFOX || browser === BROWSER_SAFARI || browser === BROWSER_OPERA)
        return ALERT_OTHER_BROWSERS;
    return ALERT_UNKNOWN_BROWSER;
}

alert(checkBrowser());
