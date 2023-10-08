function checkLogin() {
    let login = prompt("Who\'s there?\n", "");

    if(login === "Admin") {
        let password = prompt("Password?", "");

        if (password === "TheMaster") return "Welcome!"
        if (password === "" || password === null ) return "Canceled";
        return "Wrong password";
    }

    if (login === "" || login === null) return "Canceled";
    return "I don\'t know you";
}

alert(checkLogin());
