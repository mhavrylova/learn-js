import { LOGIN_ADMIN, PASSWORD_ADMIN } from './constants.js';

function checkLogin() {
    const login = prompt("Who's there?", "");

    if(login === LOGIN_ADMIN) {
        let password = prompt("Password?", "");

        if (password === PASSWORD_ADMIN) return "Welcome!"
        if (password === "" || password === null ) return "Canceled";
        return "Wrong password";
    }

    if (login === "" || login === null) return "Canceled";
    return "I don't know you";
}

alert(checkLogin());
