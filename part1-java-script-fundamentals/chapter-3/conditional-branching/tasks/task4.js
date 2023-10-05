let login = prompt('Enter your login', 'Директор');

let message = (login == 'Працівник') ? 'Привіт' :
    (login == 'Директор') ? 'Вітаю' :
    (login == '') ? 'Немає логіну' : '';

alert(message);
