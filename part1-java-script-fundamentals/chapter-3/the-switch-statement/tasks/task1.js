let checkBrowser = function() {
    let browser = prompt('Enter your browser', '');
    if(browser === 'Edge') return "You\'ve got the Edge!";
    if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera')
        return "Okay we support these browsers too";
    return 'We hope that this page looks ok!';
}

alert(checkBrowser());
